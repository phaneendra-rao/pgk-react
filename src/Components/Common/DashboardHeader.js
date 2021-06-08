import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { GetTokensAction } from '../../Store/Actions/DashboardActions/DashboardAction';
import { getTokensSagaAction } from '../../Store/Actions/SagaActions/DashboardSagaAction';
import { actionGetCorporateProfileSagaAction } from '../../Store/Actions/SagaActions/CorporateProfileSagaActions';
import { actionGetUniversalAccessToken, actionGetCountriesRequest } from '../../Store/Actions/SagaActions/CommonSagaActions';

import CustomModal from '../CustomModal';
import HeaderModalForm from '../Common/HeaderModalForm';

// const $ = window.$;
import moment from 'moment';

const DashboardHeader = () => {
  const [showModal, setShowModal] = useState(false);
  
  const balance = useSelector(state => state.DashboardReducer.balance);
  const profileInfo = useSelector(state => state.DashboardReducer.profileInfo);
  const universalTutorialAccessToken = useSelector(state => state.DashboardReducer.universalTutorialAccessToken);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(GetTokensAction());
    dispatch(getTokensSagaAction());
    dispatch(actionGetCorporateProfileSagaAction());
    dispatch(actionGetUniversalAccessToken());
  }, [])

  useEffect(()=>{
    if(universalTutorialAccessToken) {
      dispatch(actionGetCountriesRequest());
    }
  }, [universalTutorialAccessToken]);

  let profileName = [];

  const profileNameKeys = ['primaryContactFirstName', 'primaryContactMiddleName', 'primaryContactLastName'];
  const profileDataKeys = (profileInfo!==null && profileInfo) ? Object.keys(profileInfo) : [];

  profileNameKeys.forEach((item)=>{
    if (profileDataKeys.includes(item) && profileInfo[item]!==undefined && profileInfo[item].trim()!=='') {
      profileName.push(profileInfo[item]);
    }
  })

  return (
    <div className="topbar">
      <i className="fas fa-bars hamburger" id="menu-bar"></i>
      <p className="date"><b>{moment().format("dddd, MMMM Do YYYY")}</b></p>
      <div className="input-group search">
        <input type="text" className="form-control" placeholder="Search" />
        <div className="input-group-append">
          <span className="input-group-text">
            <i className="fas fa-search" />
          </span>
        </div>
      </div>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle points-btn"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-offset="0,10"
        >
          <p className="btn-label">Available Tokens </p>
          <p className="points">{balance?.bonusTokenBalance + balance?.paidTokenBalance}</p>
        </button>
        <div className="dropdown-menu dropdown-menu-right">
          <div className="points-container">
            <div className="credits-container">
              <p className="label-head">Available Tokens</p>
              <p className="label-body">{balance?.bonusTokenBalance + balance?.paidTokenBalance}</p>
              <div className="credits-body">
                <table className="credits-table">
                  <tbody>
                    <tr className="t-row">
                      <td className="t-label">Bonus Credits</td>
                      <td className="t-value">{balance?.bonusTokenBalance}</td>
                    </tr>
                    <tr className="t-row">
                      <td className="t-label">Purchased Credits</td>
                      <td className="t-value">{balance?.paidTokenBalance}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="add-credits-container"
              onClick={()=>{
                setShowModal(true);
              }}
            >
              <i className="fas fa-plus-circle" />
              <p className="label">Add Tokens</p>
            </div>
          </div>
        </div>
      </div>
      <div className="profile-avatar-container">
        <p className="profile-name" style={{textTransform:'capitalize'}}>{profileName.join(' ')}</p>
          {(profileInfo?.profilePicture!=null && profileInfo?.profilePicture?.trim()!=='') ? <img src={"data:image/png;base64,"+profileInfo.profilePicture} className={'profile-avatar'} style={{backgroundColor:'transparent'}} /> : <div className="profile-avatar"> <i className="fas fa-user" /> </div>}
      </div>
      <CustomModal show={showModal} modalStyles={{ minWidth: "40%", maxWidth: "40%" }}>
        <HeaderModalForm onClose={()=>{
          setShowModal(false);
        }} />
      </CustomModal>
    </div>
  );
};

export default DashboardHeader;

import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import moment from "moment";
import CustomModal from "../../../../Components/CustomModal";

import { actionGetCorporateSingleNotificationRequest } from '../../../../Store/Actions/SagaActions/NotificationsSagaAction';

const ProfileInfoItem = (props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [hiringItem, setHiringItem] = useState();

  const getHiringItemById = (id) => {
    dispatch(actionGetCorporateSingleNotificationRequest({
      apiPayloadRequest: {
        type: 'NOTIFICATION',
        notificationId: id
      },
      callback: (response) => {
        setHiringItem(JSON.parse(response?.content));
        setShowModal(true);
      }
    }));
  }

  return (
    <>
      <div
        className="univ-sub-item d-flex justify-content-between align-items-center"
        key={props?.index}
        style={{padding:15}}
      >
        <div className="sub-type-container d-flex">
          <i className="far fa-address-card icon" />
          <p className="sub-label" style={{fontWeight:'bold'}}>Profile</p>
        </div>
        <div className="vertical-border" />
        <div className="name-address d-flex flex-column align-items-start">
          <p className="title">JNTU University</p>
          {props?.item?.location?.trim()!=='' && <p className="sub-title">
            <i className="fas fa-map-marker-alt" /> Hyderabad
          </p>}
        </div>
        <div className="vertical-border" />
        <div className="sub-item-container d-flex justify-content-around align-items-center">
          <p className="sub-title">COE's</p>
        </div>
        <div className="vertical-border" />
        <button
          type="button"
          className="view-info-btn btn d-flex justify-content-around align-items-center"
          style={{
            height: "20px",
            maxWidth: "100px",
            fontSize: ".600rem",
            borderRadius: "4px",
          }}
          onClick={() => {
            getHiringItemById(props?.item?.nftID);
          }}
        >
          View More
        </button>
      </div>

      <CustomModal show={showModal} modalStyles={{minWidth: '70%'}}>
      <div className={'mail-modal'}>

      <div className="modal-header d-block">
        <span className="modal-title" style={{fontSize: '1.1rem', padding: 6}}>
          Profile Publish of Jntu University
        </span>
        <i
          className="far fa-times-circle close-icon"
          onClick={() => {
            setShowModal(false);
          }}
          data-dismiss="modal"
        />
      </div>
      <div className="modal-body d-flex flex-column align-items-center pb-5">
        <div className="circle-block d-flex justify-content-center align-items-center m-3" style={{height: '70px', width: '70px', borderRadius: '50%', backgroundColor: 'rgba(135, 139, 166, 0.31)'}}>
            <div className="circle">
                <i className="fas fa-university" style={{color: '#253AA3', fontSize: '2rem'}} />
            </div>
        </div>
        <p style={{fontWeight:'bolder', fontSize: '.900rem'}} className={'mb-2'}>PUBLISH REVIEW</p>
        <div style={{backgroundColor: 'rgba(135, 139, 166, 0.31)', padding: '10px'}} className={'w-full text-center'}>
          <p>Branches Offered</p>
        </div>
        <div style={{padding: '12px'}}>
          <div style={{padding: '6px', border:'1px solid #cacaca', borderRadius: '3px'}} className={'w-full d-flex justify-content-between flex-wrap align-items-center'}>
            <div className="job-icon d-flex justify-content-center align-items-center" style={{backgroundColor:'#20BDC9', padding: '6px', color: 'white', borderRadius: '6px', fontSize: '1rem'}}>
              <i className="fas fa-cube" />
            </div>
              <p style={{fontSize:'.800rem', maxWidth: '200px'}} className={'text-ellipsis px-2'}>Bachelors of Technology (B.Tech)</p>
              <p style={{fontSize:'.800rem', maxWidth: '200px'}} className={'text-ellipsis px-2'}>Computer & Electornic Engineering (CEE)</p>
              <p style={{fontSize:'.800rem', maxWidth: '200px'}} className={'text-ellipsis px-2'}>Start Date - 01 - Mar - 2021</p>
              <p style={{fontSize:'.800rem', maxWidth: '200px'}} className={'text-ellipsis px-2'}>End Date - TBD</p>
          </div>
        </div>
      </div>
      </div>
      </CustomModal>
    </>
  );
};

export default ProfileInfoItem;

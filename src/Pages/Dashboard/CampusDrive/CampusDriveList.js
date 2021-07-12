import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {actionGetCampusDriveAcceptedInvitesListRequest} from '../../../Store/Actions/SagaActions/CampusDriveSagaActions';
import moment from 'moment';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import ChevronRight from '@material-ui/icons/ChevronRight';
import { NavLink, useHistory } from "react-router-dom";

const CampusDriveList = () => {
    const [receivedList, setReceivedList] = useState([]);
    const [sentList, setSentList] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();

    const getResponse = (dataList) => {
        if(dataList?.campusInviteReceived?.length) {
            setReceivedList(dataList.campusInviteReceived);
        }

        if(dataList?.campusInviteSent?.length) {
            setSentList(dataList.campusInviteSent);
        }
    }

    useEffect(()=>{
      dispatch(actionGetCampusDriveAcceptedInvitesListRequest({
        callback: getResponse
      }))
    }, []);

    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
      setTabValue(newValue);
    };

    const navigateToCampusDrive = (campusDriveId) => {
        history.push('/dashboard/campus-drive/'+campusDriveId+'/home')
    }

  return ( 
      <div className="page-body" style={{ marginTop: 30 }}>
        <p className="heading text-center" style={{fontWeight: "bold"}}>Campus Drive</p>
        <div className="row">
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor={'primary'}
            style={{backgroundColor: 'white', width: '100%'}}
          >
            <Tab label="Campus Drive Requests - Sent" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
            <Tab label="Campus Drive Requests - Received" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
          </Tabs>
        </div>
        {tabValue === 0 && <div className={'campus-drive-invite-list-container'}>
            {sentList.map((item, index) => {
                return <div className={'campus-drive-invite-list row align-items-center'} key={index}>
                    <div className="col-md-10">
                        <div className="invite-info">
                            <div className="invite-info-icon"><i className="fas fa-university"></i></div>
                            <div className="invite-info-info">
                                <p className="invite-info-title">{item?.initiatorName}</p>
                                <p className="invite-info-sub-title">{item?.initiatorLocation}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="vertical-divider"></div>
                    </div>
                </div>
            })}
        </div>}
        {tabValue === 1 && <div className={'campus-drive-invite-list-container'}>
            {receivedList.map((item, index) => {
                return <div className={'campus-drive-invite-list row align-items-center'} key={index}>
                <div className="col-md-10">
                    <div className="invite-info">
                        <div className="invite-info-icon"><i className="fas fa-university"></i></div>
                        <div className="invite-info-info">
                            <p className="info-title">{item?.initiatorName}</p>
                            <p className="info-sub-title"><span><i className="fas fa-map-marker-alt"></i></span> {item?.initiatorLocation}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row align-items-center m-0">
                        <div className="vertical-divider"></div>
                        <IconButton style={{backgroundColor: '#253AA3', marginLeft: '20px'}} onClick={()=>{
                            navigateToCampusDrive(item?.campusDriveID)
                        }}>
                            <ChevronRight fontSize="large" style={{color: 'white'}} />
                        </IconButton>
                    </div>
                </div>
            </div>
            })}
        </div>}
      </div>
  )
}

export default CampusDriveList;

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  actionGetCampusDriveInvites,
  actionPostRespondToCampusDriveRequest,
} from "../../../Store/Actions/SagaActions/CampusDriveSagaActions";
import {
  actionGetCorporateSingleNotificationRequest
} from "../../../Store/Actions/SagaActions/NotificationsSagaAction";
import moment from 'moment';

import CustomModal from '../../../Components/CustomModal';
import PgkTextField from '../../../Components/FormFields/PgkTextField';

const CampusDrive = () => {

  const dispatch = useDispatch();

  const [requests, setRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [notification, setNotification] = useState();
  const [notificationStatus, setNotificationStatus] = useState();
  const [notificationContent, setNotificationContent] = useState();

  const [reasonForRejection, setReasonForRejection] = useState();

  const getCampusDriveInvites = () => {
    dispatch(actionGetCampusDriveInvites({
      callback: (data)=>{
        if(data?.campusInviteReceived?.length) {
          setRequests(data?.campusInviteReceived);
        }

        if(data?.campusInviteSent?.length) {
          setSentRequests(data?.campusInviteSent);
        }
      }
    }))
  }

  useEffect(()=>{
    getCampusDriveInvites();
  }, [])

  const acceptCampusDrive = (campusDriveID, acceptOrReject, notificationID) => {
    let reason = {}
    if(!acceptOrReject) {
      reason['reasonToReject'] = reasonForRejection?.value
    }

    dispatch(actionPostRespondToCampusDriveRequest({
      apiPayloadRequest: {
        campusDriveID: campusDriveID,
        accepted: acceptOrReject,
        nftID: notificationID,
        ...reason
      },
      callback: (response) => {
        getCampusDriveInvites();
        setShowModal(false);
        setNotificationStatus();
        setNotification();
        setNotificationContent();
      }
    }));
  }

  const onNotificationReceived = (response, status) => {
    try {
      setNotificationStatus(status);
      setNotification(response);
      if(status==='REJECTED') {
        // const content = response?.content ? JSON.parse(response.content) : undefined;
        // setNotificationContent(content?.requestContent ? JSON.parse(content?.requestContent) : undefined);
      } else {
        setNotificationContent(response?.content ? JSON.parse(response.content) : undefined);
        setReasonForRejection();
        setShowModal(true);
      }
    } catch (error) {
      console.log('error ', error);
    }
  }

  const getNotificationById = (id, status) => {
    dispatch(actionGetCorporateSingleNotificationRequest({
      apiPayloadRequest: {
        type: 'NOTIFICATION',
        notificationId: id
      },
      callback: (response) => {
        onNotificationReceived(response, status)
      }
    }));
  }

  return ( 
    <>
      <div className="main" style={{marginTop:'10px', marginBottom: '0px'}}>
        <h3 className="main-title" style={{color:'#878BA6'}}>CAMPUS DRIVE</h3>
      </div>
      <div className="row jobs-saved-section" style={{margin:'0px'}}>
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full" style={{textAlign:'left', backgroundColor:'#BCBECC', color: 'black', fontSize: '1.2rem', fontWeight: 'bolder'}}>Requests Received</p>
        </div>
      </div>
      <div style={{height: '200px', overflow:'scroll'}}>
        {requests.map(item=>{
          if(item?.campusDriveStatus?.toLowerCase()==='pending') {
            return <div className={'row campus-drive-comp d-flex justify-between align-items-center'}>
              <div className={'col-md-4 univ-comp d-flex justify-between align-items-center'}>
                <div className={'univ-icon'}>
                  <i className={'fas fa-university'}></i>
                </div>
                <div className={'univ-info d-flex flex-column justify-center'}>
                  <p className={'univ-title'}>{item?.initiatorName}</p>
                  <p className={'univ-sub-title'}>has requested you to attend their campus drive</p>
                </div>
              </div>
              <div className={'col-md-2'}>
                <p className={'date'}>{item?.requestedDate ? 'Received on '+moment(item?.requestedDate).format('DD-MM-YYYY, h:mm:ss') : '-'}</p>
              </div>
              <div className={'col-md-3 d-flex justify-between'}>
                <button type="button" onClick={()=>{
                  acceptCampusDrive(item?.campusDriveID, true, item?.nftID);
                }} className={"btn btn-accept"}>Accept</button>
                <button type="button" onClick={()=>{
                  getNotificationById(item?.nftID, 'PRE-REJECT');
                }} className={"btn btn-reject"}>Reject</button>
              </div>
              <div className={'col-md-1'}>
                  <button type="button" onClick={()=>{
                    getNotificationById(item?.nftID, 'PENDING');
                  }} className={"btn btn-view-more"}>View more info</button>
              </div>
            </div>
          }
        })}
      </div>
      <div className="main" style={{margin: '0px', padding: '10px'}}>
        <h3 style={{color:'#878BA6', fontWeight: '600', fontSize: '1.6rem', textAlign:'center'}}>History</h3>
      </div>
      <div style={{height: '200px', overflow:'scroll'}}>
        {requests.map(item=>{
          if(item?.campusDriveStatus?.toLowerCase()==='accepted' || item?.campusDriveStatus?.toLowerCase()==='rejected') {
            return <div className={'row campus-drive-comp d-flex justify-between align-items-center'}>
              <div className={'col-md-4 univ-comp d-flex justify-between align-items-center'}>
                <div className={'univ-icon'}>
                  <i className={'fas fa-university'}></i>
                </div>
                <div className={'univ-info d-flex flex-column justify-center'}>
                  <p className={'univ-title'}>{item?.initiatorName}</p>
                  <p className={'univ-sub-title'}>has requested you to attend their campus drive</p>
                </div>
              </div>
              <div className={'col-md-2'}>
                <p className={'date'}>{item?.requestedDate ? 'Received on '+moment(item?.requestedDate).format('DD-MM-YYYY, h:mm:ss') : '-'}</p>
              </div>
              <div className={'col-md-3 d-flex justify-between'}>
                  {item?.campusDriveStatus?.toLowerCase() === 'accepted' ? <button type="button" className={"btn btn-history-accepted"}><p className={'label'}>Accepted</p><p className={'subLabel'}>{item?.responseDate ? ' on '+moment(item?.responseDate).format('DD-MM-YYYY, h:mm:ss') : '-'}</p></button> : <button type="button" className={"btn btn-history-rejected"}><p className={'label'}>Rejected</p><p className={'subLabel'}>{item?.responseDate ? ' on '+moment(item?.responseDate).format('DD-MM-YYYY, h:mm:ss') : '-'}</p></button>}
              </div>
              <div className={'col-md-1'}>
                {item?.campusDriveStatus?.toLowerCase() === 'rejected' ? <button type="button" onClick={()=>{
                    getNotificationById(item?.nftID, "REJECTED");
                  }} className={"btn btn-view-more"}>View more info</button> : null }
              </div>
            </div>
          }
        })}
      </div>
      <div className="row jobs-saved-section" style={{margin:'0px'}}>
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full" style={{textAlign:'left', backgroundColor:'#BCBECC', color: 'black', fontSize: '1.2rem', fontWeight: 'bolder'}}>Requests Sent</p>
        </div>
      </div>
      <div style={{height: '200px', overflow:'scroll'}}>
        {sentRequests.map(item=>{
          if(item?.campusDriveStatus?.toLowerCase()==='pending') {
            return <div className={'row campus-drive-comp d-flex justify-between align-items-center'}>
            <div className={'col-md-4 univ-comp d-flex justify-between align-items-center'}>
              <div className={'univ-icon'}>
                <i className={'fas fa-university'}></i>
              </div>
              <div className={'univ-info d-flex flex-column justify-center'}>
                <p className={'univ-title'}>{item?.receiverName}</p>
                <p className={'univ-sub-title'}>Your request to attend campus drive has been sent</p>
              </div>
            </div>
            <div className={'col-md-2'}>
              <p className={'date'}>{item?.requestedDate ? 'Sent on '+moment(item?.requestedDate).format('DD-MM-YYYY, h:mm:ss') : '-'}</p>
            </div>
            <div className={'col-md-3 d-flex justify-between'}>
  
            </div>
            <div className={'col-md-1'}>
                <button type="button" className={"btn btn-view-more"}>View more info</button>
            </div>
          </div>
          }
        })}
      </div>
      <div className="main" style={{margin: '0px', padding: '10px'}}>
        <h3 style={{color:'#878BA6', fontWeight: '600', fontSize: '1.6rem', textAlign:'center'}}>History</h3>
      </div>
      <div style={{height: '200px', overflow:'scroll'}}>
        {sentRequests.map(item=>{
          if(item?.campusDriveStatus?.toLowerCase()==='accepted' || item?.campusDriveStatus?.toLowerCase()==='rejected') {
            return <div className={'row campus-drive-comp d-flex justify-between align-items-center'}>
                <div className={'col-md-4 univ-comp d-flex justify-between align-items-center'}>
                  <div className={'univ-icon'}>
                    <i className={'fas fa-university'}></i>
                  </div>
                  <div className={'univ-info d-flex flex-column justify-center'}>
                    <p className={'univ-title'}>{item?.receiverName}</p>
                    <p className={'univ-sub-title'}>has replied to your requested you to attend their campus drive</p>
                  </div>
                </div>
                <div className={'col-md-2'}>
                  <p className={'date w-full'}>{item?.requestedDate ? 'Request sent on '+moment(item?.requestedDate).format('DD-MM-YYYY, h:mm:ss') : '-'}</p>
                </div>
                <div className={'col-md-3 d-flex justify-content-end align-items-center'}>
                    <p className={'float-right'} style={{fontSize:'.800rem', marginRight: '12px'}}>Status:</p>
                    {item?.campusDriveStatus?.toLowerCase()==='accepted' ? <button type="button" className={"btn btn-history-accepted"}><p className={'label'}>Accepted</p><p className={'subLabel'}>{item?.requestedDate ? 'on '+moment(item?.responseDate).format('DD-MM-YYYY, h:mm:ss') : '-'}</p></button> : <button type="button" className={"btn btn-history-rejected"}><p className={'label'}>Rejected</p><p className={'subLabel'}>{item?.requestedDate ? 'on '+moment(item?.responseDate).format('DD-MM-YYYY, h:mm:ss') : '-'}</p></button>}
                </div>
                {item?.campusDriveStatus?.toLowerCase()==='rejected' ? <div className={'col-md-1'}>
                    <button type="button" className={"btn btn-view-more"}>View more info</button>
                </div> : <div className={'col-md-1'}></div>}
              </div>
          }
        })}
      </div>

      {showModal ? <CustomModal show={showModal} modalStyles={{ maxWidth: "35%" }}>
        <div className={'notification'} style={{width: '100%', paddingBottom: '12px'}}>
          <div className={'close-notification'} style={{cursor:'pointer'}} onClick={()=>{
            setShowModal(false);
            setNotificationStatus();
            setNotification();
            setNotificationContent();
          }}>
            <i className={'fas fa-times'}></i>
          </div>
          <div className={`notification-header d-flex justify-content-${notificationStatus?.toLowerCase()==='rejected' ? 'between' : 'center'} align-items-center`}>
            <div className={'d-flex flex-column justify-content-center align-items-center'}>
              <p className={'heading'}>Notification from</p>
              <p className={'heading'}>{notificationContent?.universityDetails?.universityName} University</p>
            </div>
            {notificationStatus?.toLowerCase()==='rejected' && <button type="button" className={"btn status-btn"}>Rejected</button>}
          </div>
          <div className={'notification-body d-flex flex-column justify-content-center align-items-center'}>
            <table className={'table table-responsive table-borderless w-full'}>
              <tbody>
                <tr>
                  <td className={'keyLabel'}>University Name</td>
                  <td className={'valueLabel'}>{notificationContent?.universityDetails?.universityName} University</td>
                </tr>
                <tr>
                  <td className={'keyLabel'}>Location</td>
                  <td className={'valueLabel'}>{notificationContent?.universityDetails?.location}</td>
                </tr>
                <tr>
                  <td className={'keyLabel'}>Year of Establishment</td>
                  <td className={'valueLabel'}>{notificationContent?.universityDetails?.yearOfEstablishment}</td>
                </tr>
                <tr>
                  <td className={'keyLabel'}>University ID</td>
                  <td className={'valueLabel'}>{notification?.senderID}</td>
                </tr>
                <tr>
                  <td className={'keyLabel'}>Accredation</td>
                  <td className={'valueLabel'}>{notificationContent?.universityDetails?.accredations ? JSON.parse(notificationContent?.universityDetails?.accredations)?.name : ''}</td>
                </tr>
                <tr>
                  <td className={'keyLabel'}>Type of Request</td>
                  <td className={'valueLabel'}>Campus Hiring from University</td>
                </tr>
                <tr>
                  <td className={'keyLabel'}>Request made on</td>
                  <td className={'valueLabel'}>{notification?.dateofNotification ? moment(notification?.dateofNotification).format('DD-MM-YYYY') : '-'}</td>
                </tr>
              </tbody>
            </table>
            {notificationStatus?.toLowerCase()==='rejected' ? <div className={'notification-body-footer inherit'}>
              <div className={'heading'}>
                <p className={'label'}>Reason for Rejection</p>
              </div>
              <p className={'body'}>We need CSE students with an introduction to Java which does not seem to be there in curriculam </p>
            </div> : <PgkTextField
                name="reasonForRejection"
                value={reasonForRejection?.value}
                label={"Enter reason for rejection"}
                required
                errorMessage={reasonForRejection?.errorMessage}
                onChange={(name, value, errorMessage)=>{
                  setReasonForRejection((prevState)=>({
                    ...prevState,
                    value: value,
                    errorMessage: errorMessage
                  }))
                }}
                multiline={true}
                minRows={6}
              />}
          </div>
          {(notificationStatus?.toLowerCase()==='pending' || notificationStatus?.toLowerCase()==='pre-reject') ? <div className={'notification-footer d-flex justify-content-around align-items-center'}>
            <button type="button" className={"btn btn-view-more-info"}>View more info</button>
            {notificationStatus?.toLowerCase()==='pending' ? <button type="button" onClick={()=>{
              acceptCampusDrive(notificationContent?.campusDriveID, true, notification?.notificationID);
            }} className={"btn btn-accept"}>Accept</button> : null}
            <button type="button" disabled={reasonForRejection?.value && reasonForRejection?.value?.trim()!=='' ? false : true} onClick={()=>{
              acceptCampusDrive(notificationContent?.campusDriveID, false, notification?.notificationID);
            }} className={"btn btn-reject"}>Reject</button>
          </div> : null}
        </div>
      </CustomModal> : null}
    </>
  )
}

export default CampusDrive;

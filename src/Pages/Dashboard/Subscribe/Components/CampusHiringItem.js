import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import moment from "moment";
import CustomModal from "../../../../Components/CustomModal";

import { actionGetCorporateSingleNotificationRequest } from '../../../../Store/Actions/SagaActions/NotificationsSagaAction';

const CampusHiringItem = (props) => {
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
          <i className="far fa-file-alt icon" />
          <p className="sub-label" style={{fontWeight:'bold'}}>Campus Drive Request</p>
        </div>
        <div className="vertical-border" />
        <div className="name-address d-flex flex-column align-items-start">
          <p className="title">{props?.item?.publisherName}</p>
          {props?.item?.location?.trim()!=='' && <p className="sub-title">
            <i className="fas fa-map-marker-alt" /> {props?.item?.location}
          </p>}
        </div>
        <div className="vertical-border" />
        <div className="sub-item-container d-flex justify-content-around align-items-center">
          <p className="sub-title">Status</p>
          {props?.item?.campusDriveStatus==='Accepted' ? <span className="badge badge-md" style={{backgroundColor: '#20BDC9', color:'white', padding: '6px 15px', fontWeight: '500', marginLeft: 10, borderRadius: '20px'}}>Accepted</span> : props?.item?.campusDriveStatus==='Pending' ? <span className="badge badge-md" style={{backgroundColor: '#FEAD43', color:'white', padding: '6px 15px', fontWeight: '500', marginLeft: 10, borderRadius: '20px'}}>Sent</span> : props?.item?.campusDriveStatus==='Rejected' ? <span className="badge badge-md" style={{backgroundColor: '#F70D0D', color:'white', padding: '6px 15px', fontWeight: '500', marginLeft: 10, borderRadius: '20px'}}>Rejected</span> : undefined}
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
          Mail sent to {props?.item?.publisherName} University requesting Campus
          Placement Drive
        </span>
        <i
          className="far fa-times-circle close-icon"
          onClick={() => {
            setShowModal(false);
          }}
          data-dismiss="modal"
        />
      </div>
      <div className="modal-body">
        <div className="card">
          <span className="control-label" style={{fontSize: '1rem'}}>From&nbsp;:</span>
          <input
            type="email"
            name="emailFrom"
            style={{fontSize: '1rem'}}
            defaultValue={hiringItem?.emailFrom}
            readOnly
          />
        </div>
        <div className="card">
          <span className="control-label" style={{fontSize: '1rem'}}>To&nbsp;:</span>
          <input
            type="email"
            name="emailTo"
            style={{fontSize: '1rem'}}
            defaultValue={hiringItem?.emailTo}
            readOnly
          />
        </div>
        <div className="card">
          <span className="control-label" style={{fontSize: '1rem'}}>Subject&nbsp;:</span>
          <input
            type="text"
            name="emailSubject"
            style={{fontSize: '1rem'}}
            defaultValue={hiringItem?.emailSubject}
            readOnly
          />
        </div>
        <div className="card b-none">
          <textarea
            name="emailBody"
            style={{fontSize: '.850rem'}}
            defaultValue={hiringItem?.emailBody}
            rows={5}
            readOnly
          />
        </div>
      </div>
      </div>
      </CustomModal>
    </>
  );
};

export default CampusHiringItem;

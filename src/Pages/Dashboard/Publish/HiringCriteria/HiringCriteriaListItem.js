import React from "react";
import moment from 'moment';

const HiringCriteriaListItem = (props) => {
  return (
    <div className="w-full d-flex justify-content-center align-items-center">
    <input type="checkbox" style={{marginRight: '10px'}} />
    <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full">
      <div className="item d-flex flex-row justify-content-between align-items-center w-full">
        <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center">
          <i className="fas fa-cube"></i>
        </div>
        <p className="job-label">{props?.item?.hiringCriteriaID ? props?.item?.hiringCriteriaID : '-'}</p>
        <button className="btn2">{props?.item?.programID}</button>
        <p className="job-published-date">{props?.item?.course}</p>
        <p className="job-published-date">{ props?.item?.creationDate ?  `Created on ${moment(props?.item?.creationDate).format('DD/MM/YYYY')}` : '-'}</p>
      </div>
      <div className="vertical-divider"></div>
      <div className="job-list-item-details-container d-flex flex-row justify-content-center align-items-center">
        <div
          className="job-details-btn d-flex flex-row justify-content-around align-items-center"
        >
          <p>Details</p>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HiringCriteriaListItem;

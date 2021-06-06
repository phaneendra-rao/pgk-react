import React from "react";
import moment from "moment";

const JobsListItem = (props) => {
  return (
    <div className="w-full d-flex justify-content-center align-content-center publish-selected-btn-container">
      {props?.checkHandler && (
        <input
          type="checkbox"
          className="align-self-center"
          onChange={() => {
            props?.checkHandler(props?.item?.jobID);
          }}
          checked={props?.isCheck ? props?.isCheck : false}
          style={{ marginRight: "10px" }}
        />
      )}
      <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full">
        <div className="item d-flex flex-row justify-content-between align-items-center w-full">
          <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center">
            <i className="fas fa-cube"></i>
          </div>
          <p className="job-label">{props?.item?.jobName ? props?.item?.jobName : '-'}</p>
          <select name="" onChange={()=>{}} className="form-control job-dropdown" value={props?.item?.hiringCriteriaID}>
            <option value="">Select Hiring Criteria</option>
            {props?.hiringCriteriaList?.map((item, index)=>{
                return <option value={item?.hiringCriteriaID} key={index}>{item?.hiringCriteriaName}</option>
            })}
          </select>
          <select name="" className="form-control job-dropdown">
            <option value="">Open</option>
          </select>
          <p className="job-published-date">
          {props?.item?.creationDate
              ? props?.item?.publishedFlag ? `Published on ${moment(props?.item?.creationDate).format(
                "DD-MM-YYYY"
              )}` : `Created on ${moment(props?.item?.creationDate).format(
                "DD-MM-YYYY"
              )}`
              : "-"}
          </p>
        </div>
        <div className="vertical-divider"></div>
        <div className="job-list-item-details-container d-flex flex-row justify-content-center align-items-center">
        {props?.checkHandler && (
            <button
              type="button"
              className="btn d-flex justify-content-around align-items-center"
              style={{
                height: "30px",
                width: "100px",
                fontSize: ".600rem",
                borderRadius: "4px",
              }}
              onClick={() => {
                props?.onPublish(props?.item?.jobID);
              }}
            >
              <p>Publish</p>
            </button>
          )}

        {props?.item?.publishedFlag && (
            <button
              type="button"
              className="btn d-flex justify-content-around align-items-center"
              style={{
                height: "30px",
                width: "100px",
                fontSize: ".600rem",
                borderRadius: "4px",
              }}
              onClick={() => {
                props?.onJobView(props?.item?.jobID);
              }}
            >
              <p>Details</p>
              <i className="fas fa-chevron-right"></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobsListItem;

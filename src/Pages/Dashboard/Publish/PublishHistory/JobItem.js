import React, {useState} from 'react';
import moment from "moment";
import CustomModal from "../../../../Components/CustomModal";

const JobItem = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showSingleJobDetails, setShowSingleJobDetails] = useState(false);
  
    return (
    <>
    <div
        className="w-full d-flex justify-content-center align-content-center publish-selected-btn-container"
        style={{ margin: 0 }}
        key={props?.index}
      >
        <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full">
          <div className="item d-flex flex-row justify-content-between align-items-center w-full">
            <div className="job-icon d-flex justify-content-center align-items-center">
              <i className="fas fa-briefcase" style={{ color: "#004FD0" }}></i>
            </div>
            <p className="job-label">{props?.item?.jobID ? props?.item.jobID : "-"}</p>
            <select
              name=""
              onChange={() => {}}
              className="form-control job-dropdown"
              value={props?.item?.hiringCriteriaID}
            >
              <option value="">Select Hiring Criteria</option>
              {props?.hiringCriteriaList?.map((_item, _index) => {
                return (
                  <option value={_item?.hiringCriteriaID} key={_index}>
                    {_item?.hiringCriteriaName}
                  </option>
                );
              })}
            </select>
            <select name="" className="form-control job-dropdown">
              <option value="">Open</option>
            </select>
            <p className="job-published-date">
              {props?.parentItem?.dateOfPublish
                ? `Published on ${moment(props?.parentItem?.dateOfPublish).format(
                    "DD/MM/YYYY"
                  )}`
                : "-"}
            </p>
          </div>
          <div className="vertical-divider"></div>
          <div className="job-list-item-details-container d-flex flex-row justify-content-center align-items-center">
            <button
              type="button"
              className="btn d-flex justify-content-around align-items-center"
              style={{
                height: "30px",
                maxWidth: "100px",
                fontSize: ".600rem",
                borderRadius: "4px",
              }}
              onClick={() => {
                setShowModal(true);
              }}
            >
              <p>Details</p>
            </button>
          </div>
        </div>
      </div>
      {<CustomModal show={showModal} modalStyles={{ minWidth: "65%" }}>
        <div className="job-publish-modal">
          <div className="modal-header job-publish-modal-header">
            <p className="heading w-full">Job Details</p>
            <button
              type="button"
              className="close"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body job-publish-modal-body d-flex flex-column justify-content-center align-items-center">
            <div className="heading-section d-flex justify-content-start align-items-start w-full">
              <div className="d-flex flex-column justify-content-start align-items-center w-full body-section">
                <div className="header d-flex flex-row justify-content-between align-items-center w-full">
                  <p className="job-label">
                    {props?.item?.jobID ? props?.item?.jobID : "-"}
                  </p>
                  <div className="job-heading-btn">Open</div>
                  <select
                    name=""
                    onChange={() => {}}
                    className="form-control job-dropdown"
                    value={props?.item?.hiringCriteriaID}
                  >
                    <option value="">Select Hiring Criteria</option>
                    {props?.hiringCriteriaList?.map((item, index) => {
                      return (
                        <option value={item?.hiringCriteriaID} key={index}>
                          {item?.hiringCriteriaName}
                        </option>
                      );
                    })}
                  </select>
                  <div
                    className="d-flex flex-row justify-content-between align-items-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setShowSingleJobDetails(!showSingleJobDetails);
                    }}
                  >
                    <p className="label">Details</p>
                    <i
                      className={`fas ${
                        showSingleJobDetails
                          ? "fa-chevron-up"
                          : "fa-chevron-down"
                      }`}
                    ></i>
                  </div>
                </div>
                {showSingleJobDetails && (
                  <table className="table table-borderless table-striped job-publish-table">
                    <thead className="job-publish-table-header">
                      <tr>
                        <td className="table-heading">Skill Set</td>
                        <td className="table-heading">No of Positions</td>
                        <td className="table-heading">Location</td>
                        <td className="table-heading">Salary Range</td>
                        <td className="table-heading">Date of hiring</td>
                      </tr>
                    </thead>
                    <tbody>
                      {props?.item?.skills?.length &&
                        props?.item?.skills.map((item) => {
                          return (
                            <tr>
                              <td>
                                {item?.skillID + item?.skill}
                              </td>
                              <td>
                                {item?.noOfPositions ? item.noOfPositions : "-"}
                              </td>
                              <td>{item?.location ? item.location : "-"}</td>
                              <td>
                                {item?.salaryRange ? item.salaryRange : "-"}
                              </td>
                              <td>
                                {item?.dateOfHiring
                                  ? moment(item.dateOfHiring).format(
                                      "DD - MMM - YYYY"
                                    )
                                  : "-"}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </CustomModal>}
    </>);
}

export default JobItem;
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import JobsListItem from "../Components/JobsListItem";
import {
  GetJobsSagaAction,
  actionPostPublishCorporateJobsRequest,
  GetJobByIdSagaAction,
} from "../../../../Store/Actions/SagaActions/JobsSagaAction";
import { HiringSagaAction } from "../../../../Store/Actions/SagaActions/HiringSagaAction";
import CustomModal from "../../../../Components/CustomModal";
import moment from "moment";
import CustomToastModal from "../../../../Components/CustomToastModal";

const PublishJobs = () => {
  const [hiringCriteriaList, setHiringCriteriaList] = useState([]);
  const [jobsList, setJobsList] = useState([]);
  const [singleJob, setSingleJob] = useState();
  const [showSingleJobDetails, setShowSingleJobDetails] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showToastModal, setShowToastModal] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);

  const dispatch = useDispatch();

  const onJobsResponse = (response) => {
    if (response?.length) {
      setJobsList(response);
    }
  };

  const getJobs = () => {
    dispatch(
      GetJobsSagaAction({
        callback: onJobsResponse,
      })
    );
  };

  const getJobByIdResp = (response) => {
    console.log("response ", response);
    setSingleJob(response);
    setShowModal(true);
  };

  const getJobById = (id) => {
    dispatch(
      GetJobByIdSagaAction({ apiPayloadRequest: id, callback: getJobByIdResp })
    );
  };

  const getAllHirings = (data) => {
    if (data?.length) {
      setHiringCriteriaList(data);
    }
  };

  const getHiring = () => {
    dispatch(HiringSagaAction({ callback: getAllHirings }));
  };

  useEffect(() => {
    getJobs();
    getHiring();
  }, []);

  const onCheckHandler = (id) => {
    let updatedSelectedItems = [...selectedItems];

    if (updatedSelectedItems.includes(id)) {
      var deleteItemIndex = updatedSelectedItems.indexOf(id);
      if (deleteItemIndex > -1) {
        updatedSelectedItems.splice(deleteItemIndex, 1);
      }
    } else {
      updatedSelectedItems.push(id);
    }

    setSelectedItems(updatedSelectedItems);
    setSelectAll(updatedSelectedItems.length === jobsList.length);
  };

  const onPublishSuccess = () => {
    getJobs();
    setShowModal(false);
    setShowToastModal(true);
  };

  const publishSelectedItems = (items) => {
    dispatch(
      actionPostPublishCorporateJobsRequest({
        apiPayloadRequest: items,
        callback: onPublishSuccess,
      })
    );
  };

  const publishSelected = () => {
    if (selectedItems.length) {
      const updatedSelectedItems = jobsList.map((item) => {
        if (selectedItems.includes(item.jobID)) {
          return { jobID: item.jobID };
        }
      });

      if (updatedSelectedItems?.length) {
        publishSelectedItems(updatedSelectedItems);
      }
    }
  };

  const finalSubmit = (id) => {
    let updatedSelectedItems = [];
    jobsList.forEach((item) => {
      if (item.jobID === id) {
        updatedSelectedItems.push({ jobID: item.jobID });
      } 
    });

    if (updatedSelectedItems?.length) {
      publishSelectedItems(updatedSelectedItems);
    }
  };

  const onSelect = (id) => {
    let updatedSelectedItems = [...selectedItems];

    if (id === "ALL") {
      updatedSelectedItems = [];

      if (selectAll === false) {
        jobsList.forEach((item) => {
          updatedSelectedItems.push(item?.jobID);
        });
      }
      setSelectedItems(updatedSelectedItems);
      setSelectAll(!selectAll);
    } else {
      setSelectedItems(updatedSelectedItems);
    }
  };

  return (
    <>
    <div className="row published-jobs-section">
      <div className="d-flex flex-column justify-content-start align-items-center w-full">
        <p className="heading">Publish Jobs</p>
        {jobsList?.length && (
          <div className="w-full d-flex justify-content-start align-content-center publish-selected-btn-container">
            <input
              type="checkbox"
              onChange={() => {
                onSelect("ALL");
              }}
              checked={selectAll}
              className="align-self-center mr-2"
            />
            <button
              type="button"
              className="btn"
              style={{ height: "35px", width: "100px", fontSize: ".700rem" }}
              onClick={publishSelected}
            >
              Publish Selected
            </button>
          </div>
        )}
        {jobsList?.length &&
          jobsList.map((item, index) => {
            if(!item.publishedFlag) {
              return (
                <JobsListItem
                  key={index}
                  item={item}
                  hiringCriteriaList={hiringCriteriaList}
                  checkHandler={onCheckHandler}
                  onPublish={() => {
                    getJobById(item.jobID);
                  }}
                  isCheck={selectedItems.includes(item?.jobID) ? true : false}
                />
              );
            }
          })}
        {jobsList?.length === 0 && (
          <div className="row jobs-saved-section-list">
            <div className="d-flex flex-column justify-content-start align-items-center w-full">
              <p className="no-list-message w-full">
                Create a new job to publish
              </p>
            </div>
          </div>
        )}
      </div>
    </div>

      <div className="row jobs-saved-section" style={{margin:0}}>
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full">Published Jobs History</p>
        </div>
      </div>
     <div style={{padding: '12px'}}>
     {jobsList?.length &&
          jobsList.map((item, index) => {
            if(item.publishedFlag) {
              return (
                <JobsListItem
                  key={index}
                  item={item}
                  hiringCriteriaList={hiringCriteriaList}
                  onJobView={() => {
                    getJobById(item.jobID);
                  }}
                />
              );
            }
          })}
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
              {!singleJob?.publishedFlag && <input
                type="checkbox"
                name=""
                className="job-checkbox align-self-start"
              />}
              <div className="d-flex flex-column justify-content-start align-items-center w-full body-section">
                <div className="header d-flex flex-row justify-content-between align-items-center w-full">
                  <p className="job-label">
                    {singleJob?.jobID ? singleJob?.jobID : "-"}
                  </p>
                  <div className="job-heading-btn">Open</div>
                  <select
                    name=""
                    onChange={() => {}}
                    className="form-control job-dropdown"
                    value={singleJob?.hiringCriteriaID}
                  >
                    <option value="">Select Hiring Criteria</option>
                    {hiringCriteriaList?.map((item, index) => {
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
                      {singleJob?.skills?.length &&
                        singleJob.skills.map((item) => {
                          return (
                            <tr>
                              <td>
                                {!singleJob?.publishedFlag && <input
                                  type="checkbox"
                                  name=""
                                  className="table-item-checkbox"
                                />} {" "}
                                {item?.skill ? item.skill : "-"}
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
                {!singleJob?.publishedFlag && <div className="d-flex flex-row justify-content-center align-items-center w-full mt-4">
                  <button
                    type="button"
                    className="btn d-flex justify-content-around align-items-center"
                    style={{
                      height: "40px",
                      width: "100px",
                      fontSize: ".700rem",
                      borderRadius: "4px",
                      marginRight: '10px'
                    }}
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    <p>Cancel</p>
                  </button>
                  <button
                    type="button"
                    className="btn d-flex justify-content-around align-items-center"
                    style={{
                      height: "40px",
                      width: "100px",
                      fontSize: ".700rem",
                      borderRadius: "4px",
                    }}
                    onClick={() => {finalSubmit(singleJob?.jobID)}}
                  >
                    <p>Publish</p>
                  </button>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </CustomModal>}
      {<CustomToastModal
        onClose={() => {
            setShowToastModal(false);
        }}
        show={showToastModal}
        iconNameClass={"fa-briefcase"}
        message={"Selected Job/Jobs Have been Published Successfully"}
      />}
    </>
  );
};

export default PublishJobs;

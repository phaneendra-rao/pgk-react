import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { actionGetPublishHistoryRequest } from "../../../Store/Actions/SagaActions/PublishHistorySagaActions";
import { HiringSagaAction } from "../../../Store/Actions/SagaActions/HiringSagaAction";

const PublishHistory = (props) => {
  const dispatch = useDispatch();
  const [historyList, setHistoryList] = useState([]);
  const [hiringCriteriaList, setHiringCriteriaList] = useState([]);

  const onResponseReceived = (response) => {
    if (response?.length) {
      setHistoryList(response);
    }
    console.log("response ", response);
  };

  const getAllHirings = (data) => {
    if (data?.length) {
      setHiringCriteriaList(data);
    }
  };

  useEffect(() => {
    dispatch(HiringSagaAction({ callback: getAllHirings }));

    dispatch(
      actionGetPublishHistoryRequest({
        callback: onResponseReceived,
      })
    );
  }, []);

  const getHiringCriteriaItem = (parentItem, item, index) => {
    return (
      <div
        className="w-full d-flex justify-content-center align-items-center"
        key={index}
      >
        <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full">
          <div className="item d-flex flex-row justify-content-between align-items-center w-full">
            <div className="job-icon d-flex justify-content-center align-items-center">
              <i className="fas fa-file-alt" style={{ color: "#004FD0" }}></i>
            </div>
            <p className="job-label">
              {item?.hiringCriteriaID ? item.hiringCriteriaID : "-"}
            </p>
            <button className="btn2">
              {item?.programID ? item.programID : "-"}
            </button>
            <p className="job-published-date">
              {item?.course ? item.course : "-"}
            </p>
            <p className="job-published-date">
              {parentItem?.dateOfPublish
                ? `Published on ${moment(parentItem?.dateOfPublish).format(
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
                width: "100px",
                fontSize: ".600rem",
                marginRight: "10px",
                borderRadius: "4px",
              }}
              onClick={() => {}}
            >
              <p>Details</p>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const getJobItem = (parentItem, item, index) => {
    return (
      <div
        className="w-full d-flex justify-content-center align-content-center publish-selected-btn-container"
        style={{ margin: 0 }}
        key={index}
      >
        <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full">
          <div className="item d-flex flex-row justify-content-between align-items-center w-full">
            <div className="job-icon d-flex justify-content-center align-items-center">
              <i className="fas fa-briefcase" style={{ color: "#004FD0" }}></i>
            </div>
            <p className="job-label">{item?.jobID ? item.jobID : "-"}</p>
            <select
              name=""
              onChange={() => {}}
              className="form-control job-dropdown"
              value={item?.hiringCriteriaID}
            >
              <option value="">Select Hiring Criteria</option>
              {hiringCriteriaList?.map((_item, _index) => {
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
              {parentItem?.dateOfPublish
                ? `Published on ${moment(parentItem?.dateOfPublish).format(
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
                width: "100px",
                fontSize: ".600rem",
                borderRadius: "4px",
              }}
              onClick={() => {}}
            >
              <p>Details</p>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const getOtherInformationItem = (parentItem, item, index) => {
    return (
      <div
        className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full"
        key={index}
      >
        <div className="item d-flex flex-row justify-content-between align-items-center w-full">
          <div className="job-icon d-flex justify-content-center align-items-center">
            <i className="fas fa-file" style={{ color: "#004FD0" }}></i>
          </div>
          <p className="job-label">{"Other Information"}</p>
          <p className="job-published-date" style={{textOverflow:'ellipsis', fontWeight: 'bold'}}>{item?.title}</p>
          <p className="job-published-date">
          {parentItem?.dateOfPublish
                ? `Published on ${moment(parentItem?.dateOfPublish).format(
                    "DD/MM/YYYY"
                  )}`
                : "-"}
          </p>
        </div>
        <div className="vertical-divider"></div>
        <div className="job-list-item-details-container d-flex flex-row justify-content-center align-items-center">
          <div
            className="job-details-btn d-flex flex-row justify-content-around align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => {}}
          >
            <p>Details</p>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    );
  };

  const getProfileItem = (parentItem, item, index) => {
      console.log('item ', item);
    return (
      <div
        className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full"
        key={index}
      >
        <div className="item d-flex flex-row justify-content-between align-items-center w-full">
          <div className="job-icon d-flex justify-content-center align-items-center">
            <i className="fas fa-building" style={{ color: "#004FD0" }}></i>
          </div>
          <p className="job-label">{"Profile"}</p>
          <p className="job-published-date" style={{textOverflow:'ellipsis', fontWeight: 'bold'}}>{item?.title}</p>
          <p className="job-published-date">
          {parentItem?.dateOfPublish
                ? `Published on ${moment(parentItem?.dateOfPublish).format(
                    "DD/MM/YYYY"
                  )}`
                : "-"}
          </p>
        </div>
        <div className="vertical-divider"></div>
        <div className="job-list-item-details-container d-flex flex-row justify-content-center align-items-center">
          <div
            className="job-details-btn d-flex flex-row justify-content-around align-items-center"
            style={{ cursor: "pointer" }}
            onClick={() => {}}
          >
            <p>Details</p>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    );
  };

  const getListItem = (listItem, index) => {
    if (listItem?.hiringCriteriaPublished) {
      return getHiringCriteriaItem(listItem, JSON.parse(listItem?.publishData));
    } else if (listItem?.jobsPublished) {
      return getJobItem(listItem, JSON.parse(listItem?.publishData));
    } else if (listItem?.otherPublished) {
        return getOtherInformationItem(listItem, JSON.parse(listItem?.publishData));
    } else if (listItem?.profilePublished) {
        return getProfileItem(listItem, JSON.parse(listItem?.publishData));
    } else {
      return undefined;
    }
  };

  return (
    <>
      <div className="page-body" style={{ marginTop: 30 }}>
        <div className="row" style={{ marginTop: 0, paddingTop: 0 }}>
          <div
            className="d-flex flex-column justify-content-start align-items-center w-full"
            style={{ marginTop: 0, paddingTop: 0 }}
          >
            <p
              className="heading"
              style={{ fontWeight: "bold", marginBottom: 30 }}
            >
              Publish History
            </p>
            {historyList?.length ? (
              historyList.map((listItem, index) => getListItem(listItem, index))
            ) : (
              <div className="row jobs-saved-section-list">
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                  <p className="no-list-message w-full">
                    Nothing to display here
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PublishHistory;

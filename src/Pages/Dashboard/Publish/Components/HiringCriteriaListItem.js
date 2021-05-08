import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import CustomModal from "../../../../Components/CustomModal";

import { actionGetCorporateHiringByIdRequest } from "../../../../Store/Actions/SagaActions/HiringSagaAction";

const HiringCriteriaListItem = (props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [hiringCriteriaData, setHiringCriteriaData] = useState();

  const onResponse = (response) => {
    setHiringCriteriaData(response);
    setShowModal(true);
  };

  const getHiringCriteriaById = (id) => {
    if (id) {
      dispatch(
        actionGetCorporateHiringByIdRequest({
          apiPayloadRequest: id,
          callback: onResponse,
        })
      );
    }
  };

  return (
    <div className="w-full d-flex justify-content-center align-items-center">
      {props?.checkHandler && (
        <input
          type="checkbox"
          onChange={() => {
            props?.checkHandler(props?.item?.hiringCriteriaID);
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
          <p className="job-label">
            {props?.item?.hiringCriteriaName
              ? props?.item?.hiringCriteriaName
              : "-"}
          </p>
          <button className="btn2">{props?.item?.programID}</button>
          <p className="job-published-date">{props?.item?.course}</p>
          <p className="job-published-date">
            {props?.item?.creationDate
              ? props?.item?.publishedFlag ? `Published on ${moment(props?.item?.creationDate).format(
                "DD/MM/YYYY"
              )}` : `Created on ${moment(props?.item?.creationDate).format(
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
            onClick={() => {
              getHiringCriteriaById(props?.item?.hiringCriteriaID);
            }}
          >
            <p>Details</p>
            <i className="fas fa-chevron-right"></i>
          </button>
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
                props?.onPublish(props?.item?.hiringCriteriaID);
              }}
            >
              <p>Publish</p>
            </button>
          )}
        </div>
      </div>
      <CustomModal show={showModal} modalStyles={{ minWidth: "75%" }}>
        <div className="hiring-modal">
          <div className="modal-header hiring-modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Hiring Criteria Details {hiringCriteriaData?.hiringCriteriaName}
            </h5>
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
          <form className="hiring-modal-form">
            <div className="row">
              <div className="col-md p-1">
                <div className="modal-grp">
                  <label className="inp-caption">
                    Name of the Hiring Criteria
                  </label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={
                      hiringCriteriaData?.hiringCriteriaName
                        ? hiringCriteriaData?.hiringCriteriaName
                        : ""
                    }
                    readOnly
                    required
                  />
                </div>
              </div>
              <div className="col-md p-1">
                <div className="modal-grp">
                  <label className="inp-caption">Program</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={
                      hiringCriteriaData?.programID
                        ? hiringCriteriaData?.programID
                        : ""
                    }
                    disabled
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 p-1">
                <div className="modal-grp">
                  <label className="inp-caption">Course</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={
                      hiringCriteriaData?.course
                        ? hiringCriteriaData?.course
                        : ""
                    }
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="col-md-3 p-1">
                <div className="modal-grp">
                  <label className="inp-caption">Cutoff Percentage</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={
                      hiringCriteriaData?.cutOff
                        ? hiringCriteriaData?.cutOff
                        : ""
                    }
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="col-md-4 p-1">
                <div className="modal-grp">
                  <label className="inp-caption">Year of Passing</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={
                      hiringCriteriaData?.yearOfPassing
                        ? hiringCriteriaData?.yearOfPassing
                        : ""
                    }
                    disabled
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <label className="inp-caption">Active Backlogs allowed</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={`${
                      hiringCriteriaData?.allowActiveBacklogs
                        ? `Yes ${hiringCriteriaData?.numberOfAllowedBacklogs} Backlogs`
                        : "No"
                    }`}
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <label className="inp-caption">Education Gaps allowed</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={""}
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <label className="inp-caption">During Schooling</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={""}
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <label className="inp-caption">During X - XII</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={""}
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <label className="inp-caption">Between XII - Grad</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={""}
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <label className="inp-caption">During Grad</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={""}
                    disabled
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 p-1">
                <div className="modal-grp">
                  <label className="inp-caption">Remarks</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={
                      hiringCriteriaData?.remarks
                        ? hiringCriteriaData?.remarks
                        : ""
                    }
                    disabled
                    required
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </CustomModal>
    </div>
  );
};

export default HiringCriteriaListItem;

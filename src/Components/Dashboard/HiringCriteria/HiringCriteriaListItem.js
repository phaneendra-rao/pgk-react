import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import CustomModal from "../../CustomModal";
import { actionGetCorporateHiringByIdRequest } from "../../../Store/Actions/SagaActions/HiringSagaAction";

const HiringCriteriaListItem = (props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [hiringCriteriaData, setHiringCriteriaData] = useState();

  const getValueByType = (val, type) => {
    if(val && type) {
      const parsedData = JSON.parse(val);
      return parsedData.length > 0 ? parsedData[0][type]!==undefined ? parsedData[0][type] : '' : '';
    } else {
      return '-'
    }
  }

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

  const isEduGapsAllowed = () => {
    return hiringCriteriaData?.eduGapsSchoolAllowed || hiringCriteriaData?.eduGaps11N12Allowed || hiringCriteriaData?.eduGaps12NGradAllowed || hiringCriteriaData?.eduGapsGradAllowed || hiringCriteriaData?.eduGapsGradNPGAllowed;
  }

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
          <button className="btn2">{getValueByType(props?.item?.hcProgramsInString, 'programID')}</button>
          <p className="job-published-date">{props?.item?.course}</p>
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
      <CustomModal show={showModal} modalStyles={{ minWidth: "85%" }}>
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
                  <label className="inp-caption">
                    Name of the Hiring Criteria
                  </label>
                </div>
              </div>
              <div className="col-md p-1">
                <div className="modal-grp">
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={getValueByType(hiringCriteriaData?.hcProgramsInString, 'programID')}
                    disabled
                    required
                  />
                  <label className="inp-caption">Program</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={getValueByType(hiringCriteriaData?.hcProgramsInString, 'branchName')}
                    disabled
                    required
                  />
                  <label className="inp-caption">Branch</label>
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={
                      hiringCriteriaData?.minimumCutoffPercentage10th!==undefined
                        ? hiringCriteriaData?.minimumCutoffPercentage10th?.toFixed(2)
                        : ""
                    }
                    disabled
                    required
                  />
                  <label className="inp-caption">X Percentage</label>
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={
                      hiringCriteriaData?.minimumCutoffPercentage12th!==undefined
                        ? hiringCriteriaData?.minimumCutoffPercentage12th?.toFixed(2)
                        : ""
                    }
                    disabled
                    required
                  />
                  <label className="inp-caption">XII Percentage</label>
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={
                      hiringCriteriaData?.minimumCutoffCGPAGrad!==undefined
                        ? hiringCriteriaData?.minimumCutoffCGPAGrad?.toFixed(2)
                        : ""
                    }
                    disabled
                    required
                  />
                  <label className="inp-caption">UG CGPA</label>
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={
                      hiringCriteriaData?.minimumCutoffPercentageGrad!==undefined
                        ? hiringCriteriaData?.minimumCutoffPercentageGrad?.toFixed(2)
                        : ""
                    }
                    disabled
                    required
                  />
                  <label className="inp-caption">UG Percentage</label>
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
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
                  <label className="inp-caption">Year of Passing</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 p-1">
                <div className="modal-grp">
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
                  <label className="inp-caption">Active Backlogs allowed</label>
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    defaultValue={isEduGapsAllowed()}
                    disabled
                    required
                  />
                  <label className="inp-caption">Education Gaps allowed</label>
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    defaultValue={hiringCriteriaData?.eduGapsSchoolAllowed ? `Yes - ${hiringCriteriaData?.eduGapsSchool} months` : "No"}
                    disabled
                    required
                  />
                  <label className="inp-caption">During Schooling</label>
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    defaultValue={hiringCriteriaData?.eduGaps11N12Allowed ? `Yes - ${hiringCriteriaData?.eduGaps11N12} months` : "No"}
                    disabled
                    required
                  />
                  <label className="inp-caption">During XI - XII</label>
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    defaultValue={hiringCriteriaData?.eduGaps12NGradAllowed ? `Yes - ${hiringCriteriaData?.eduGaps12NGrad} months` : "No"}
                    disabled
                    required
                  />
                  <label className="inp-caption">Between XII - Grad</label>
                </div>
              </div>
              <div className="col-md-2 p-1">
                <div className="modal-grp">
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    defaultValue={hiringCriteriaData?.eduGapsGradAllowed ? `Yes - ${hiringCriteriaData?.eduGapsGrad} months` : "No"}
                    disabled
                    required
                  />
                  <label className="inp-caption">During Grad</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 p-1">
                <div className="modal-grp">
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
                  <label className="inp-caption">Remarks</label>
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

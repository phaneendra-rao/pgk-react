import React from "react";
import PgkTextField from '../../../../Components/FormFields/PgkTextField';

const HiringModal = ({ detailsModal, modelData }) => {
  const getValueByType = (val, type) => {
    if(val && type) {
      const parsedData = JSON.parse(val);
      return parsedData.length > 0 ? parsedData[0][type]!==undefined ? parsedData[0][type] : '' : '';
    } else {
      return '-'
    }
  }

  const isEduGapsAllowed = () => {
    return modelData?.eduGapsSchoolAllowed || modelData?.eduGaps11N12Allowed || modelData?.eduGaps12NGradAllowed || modelData?.eduGapsGradAllowed || modelData?.eduGapsGradNPGAllowed;
  }

  return (
    <div className="hiring-modal">
    <div className="modal-header hiring-modal-header">
      <h5 className="modal-title" id="exampleModalLabel">
        Hiring Criteria Details {modelData?.hiringCriteriaName}
      </h5>
      <button
        type="button"
        className="close"
        onClick={detailsModal}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <form className="hiring-modal-form">
      <div className="row">
        <div className="col-md p-1">
          <div className="modal-grp">
            {/* <PgkTextField 
              value={
                modelData?.hiringCriteriaName
                  ? modelData?.hiringCriteriaName
                  : ""
              }            
            /> */}
            <input
              type="text"
              name=""
              className="modal-inp"
              value={
                modelData?.hiringCriteriaName
                  ? modelData?.hiringCriteriaName
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
              value={getValueByType(modelData?.hcProgramsInString, 'programID')}
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
              value={getValueByType(modelData?.hcProgramsInString, 'branchName')}
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
                modelData?.minimumCutoffPercentage10th!==undefined
                  ? modelData?.minimumCutoffPercentage10th?.toFixed(2)
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
                modelData?.minimumCutoffPercentage12th!==undefined
                  ? modelData?.minimumCutoffPercentage12th?.toFixed(2)
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
                modelData?.minimumCutoffCGPAGrad!==undefined
                  ? modelData?.minimumCutoffCGPAGrad?.toFixed(2)
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
                modelData?.minimumCutoffPercentageGrad!==undefined
                  ? modelData?.minimumCutoffPercentageGrad?.toFixed(2)
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
                modelData?.yearOfPassing
                  ? modelData?.yearOfPassing
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
                modelData?.allowActiveBacklogs
                  ? `Yes ${modelData?.numberOfAllowedBacklogs} Backlogs`
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
              defaultValue={modelData?.eduGapsSchoolAllowed ? `Yes - ${modelData?.eduGapsSchool} months` : "No"}
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
              defaultValue={modelData?.eduGaps11N12Allowed ? `Yes - ${modelData?.eduGaps11N12} months` : "No"}
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
              defaultValue={modelData?.eduGaps12NGradAllowed ? `Yes - ${modelData?.eduGaps12NGrad} months` : "No"}
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
              defaultValue={modelData?.eduGapsGradAllowed ? `Yes - ${modelData?.eduGapsGrad} months` : "No"}
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
                modelData?.remarks
                  ? modelData?.remarks
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
  );
};

export default HiringModal;

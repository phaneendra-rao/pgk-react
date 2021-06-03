import React from "react";

const HiringModal = ({ detailsModal, modelData }) => {
  const parseObj = (val) => {
      const parsedData = JSON.parse(val);
      const program = parsedData.length > 0 ? parsedData[0] : ''
      return program;
  }
  return (
    <div className="hiring-modal">
      <div className="modal-header hiring-modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Hiring Criteria Details
        </h5>
        <button
          type="button"
          className="close"
          onClick={detailsModal}
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <form className="hiring-modal-form">
        <div className="row">
          <div className="col-md">
            <div className="modal-grp d-grp">
              <input
                type="text"
                className="modal-inp"
                defaultValue={modelData.hiringCriteriaName}
                placeholder="Name of the Hiring Criteria *"
                required
              />
              <label className="inp-caption">Name of the Hiring Criteria</label>
            </div>
          </div>
          <div className="col-md">
            <div className="modal-grp">
              <input
                type="text"
                className="modal-inp"
                defaultValue={parseObj(modelData.hcProgramsInString)?.programID}
                placeholder="Name of the Hiring Criteria *"
                required
              />
              <label className="inp-caption">Program</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="modal-grp">
              <input
                type="text"
                className="modal-inp"
                defaultValue={parseObj(modelData.hcProgramsInString)?.branchName}
                placeholder="Name of the Hiring Criteria *"
                required
              />
              <label className="inp-caption">Course</label>
            </div>
          </div>
          <div className="col-md-3">
            <div className="modal-grp">
              <input
                type="text"
                className="modal-inp"
                defaultValue={modelData.minimumCutoffPercentageGrad}
                placeholder="Name of the Hiring Criteria *"
                required
              />
              <label className="inp-caption">Cutoff Percentage</label>
            </div>
          </div>
          <div className="col-md">
            <div className="modal-grp">
              <input
                type="text"
                className="modal-inp"
                defaultValue={modelData.yearOfPassing}
                placeholder="Name of the Hiring Criteria *"
                required
              />
              <label className="inp-caption">Year of Passing</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div className="modal-grp">
              <input
                type="text"
                className="modal-inp"
                defaultValue={modelData.numberOfAllowedBacklogs}
                placeholder="Name of the Hiring Criteria *"
                required
              />
              <label className="inp-caption">Backlogs Allowed</label>
            </div>
          </div>
          <div className="col-md px-1">
            <div className="modal-grp">
              <input
                type="text"
                className="modal-inp"
                defaultValue={modelData.eduGapsGradAllowed ? "Yes" : "No"}
                placeholder="Name of the Hiring Criteria *"
                required
              />
              <label className="inp-caption">Education gaps</label>
            </div>
          </div>
          <div className="col-md px-1">
            <div className="modal-grp">
              <input
                type="text"
                className="modal-inp"
                defaultValue={modelData.eduGapsSchoolAllowed ? "Yes" : "No"}
                placeholder="Name of the Hiring Criteria *"
                required
              />
              <label className="inp-caption">During Schooling</label>
            </div>
          </div>
          <div className="col-md px-1">
            <div className="modal-grp">
              <input
                type="text"
                className="modal-inp"
                defaultValue={modelData.eduGaps11N12Allowed ? "Yes" : "No"}
                placeholder="Name of the Hiring Criteria *"
                required
              />
              <label className="inp-caption">Between XII - Grad.</label>
            </div>
          </div>
          <div className="col-md pl-1">
            <div className="modal-grp">
              <input
                type="text"
                className="modal-inp"
                defaultValue={modelData.eduGapsGradAllowed ? "Yes" : "No"}
                placeholder="Name of the Hiring Criteria *"
                required
              />
              <label className="inp-caption">Grad.</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md">
            <div className="modal-grp">
              <input
                type="text"
                className="modal-inp"
                defaultValue={modelData.remarks}
                placeholder="Remarks related text will be present here"
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

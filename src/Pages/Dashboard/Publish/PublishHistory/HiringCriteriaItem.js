import React, {useState} from 'react';
import moment from "moment";
import CustomModal from "../../../../Components/CustomModal";

const HiringCriteriaItem = (props) => {

    const [showModal, setShowModal] = useState(false);

    return (<>
    <div
        className="w-full d-flex justify-content-center align-items-center"
        key={props?.index}
      >
        <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full">
          <div className="item d-flex flex-row justify-content-between align-items-center w-full">
            <div className="job-icon d-flex justify-content-center align-items-center">
              <i className="fas fa-file-alt" style={{ color: "#004FD0" }}></i>
            </div>
            <p className="job-label">
              {props?.item?.hiringCriteriaName ? props.item.hiringCriteriaName : "-"}
            </p>
            <button className="btn2">
              {props?.item?.programID ? props.item.programID : "-"}
            </button>
            <p className="job-published-date">
              {props?.item?.course ? props.item.course : "-"}
            </p>
            <p className="job-published-date">
              {props?.parentItem?.dateOfPublish
                ? `Published on ${moment(props.parentItem?.dateOfPublish).format(
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
                marginRight: "10px",
                borderRadius: "4px",
              }}
              onClick={() => {
                  setShowModal(true);
              }}
            >
              <p>Details</p>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
      {<CustomModal show={showModal} modalStyles={{ minWidth: "75%" }}>
        <div className="hiring-modal">
          <div className="modal-header hiring-modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Hiring Criteria Details {props?.item?.hiringCriteriaName}
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
                        props?.item?.hiringCriteriaName
                        ? props?.item?.hiringCriteriaName
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
                        props?.item?.programID
                        ? props?.item?.programID
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
                        props?.item?.course
                        ? props?.item?.course
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
                        props?.item?.cutOff
                        ? props?.item?.cutOff
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
                        props?.item?.yearOfPassing
                        ? props?.item?.yearOfPassing
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
                        props?.item?.allowActiveBacklogs
                        ? `Yes ${props?.item?.numberOfAllowedBacklogs} Backlogs`
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
                        props?.item?.remarks
                        ? props?.item?.remarks
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
      </CustomModal>}
    </>);
}

export default HiringCriteriaItem;
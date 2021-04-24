import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {actionPostAddOtherInformationRequest} from '../../../../Store/Actions/SagaActions/OtherInformationSagaActions';

const PublishProfile = () => {
  const [otherInfo, setOtherInfo] = useState({
    title: "",
    information: "",
    attachment: undefined,
  });

  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (name === "attachment") {
      if (event.target.files) {
        setOtherInfo((prevOtherInfo) => ({
          ...prevOtherInfo,
          [name]: event.target.files[0],
        }));
      }
    } else {
      setOtherInfo((prevOtherInfo) => ({
        ...prevOtherInfo,
        [name]: value,
      }));
    }
  };

  const resetPublishOtherInformation = () => {
    setOtherInfo({
        title: "",
        information: "",
        attachment: undefined,
      });
  }

  const cancelPublishProfile = () => {};

  const isFormValid = () => {
    if(otherInfo?.title && otherInfo?.information) {
        return true;
    } else {
        return false;
    }
  }

  const onPublish = (response) => {
    console.log('response ', response);
  }

  const publishOtherInformation = () => {
      dispatch(actionPostAddOtherInformationRequest({
        apiPayloadRequest: otherInfo,
        callback: onPublish
      }));
  }

  return (
    <div className="main" style={{ marginTop: 0 }}>
      <h3 className="main-title">Other Information</h3>

      <div className="gbl-profile-set other-info">
          <div className="row">
            <div className="col-md">
              <div className="d-grp">
                <input
                  type="text"
                  name="title"
                  className="d-inp"
                  placeholder="Title"
                  value={otherInfo?.title ? otherInfo?.title : ""}
                  onChange={onChangeHandler}
                  required
                />
              </div>
              <div className="d-grp">
                <textarea
                  name="information"
                  rows="6"
                  value={otherInfo?.information ? otherInfo?.information : ""}
                  className="d-inp d-textarea"
                  placeholder="Information/Text"
                  onChange={onChangeHandler}
                  required
                ></textarea>
              </div>
              <div className="d-attach">
              <p className="float-left mt-2 ml-2">{otherInfo?.attachment?.name}</p>
                <input
                  type="file"
                  className="d-inp"
                  name="attachment"
                  id="attachment"
                  accept=".pdf"
                  onChange={onChangeHandler}
                />
                <label for="attachment" className="d-label">
                  Attachment
                </label>
              </div>
            </div>
          </div>

          <div className="w-100 text-center mt-4">
            <button type="button" onClick={resetPublishOtherInformation} className="btn mr-1">
              Reset
            </button>
            <button
              type="button"
              className="btn ml-1"
              disabled={!isFormValid()}
              onClick={publishOtherInformation}
            >
              Publish
            </button>
          </div>
      </div>

      <div className="row jobs-saved-section">
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full">Information Publish History</p>
        </div>
      </div>
      <div className="row jobs-saved-section-list">
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="no-list-message w-full">
            No other information publish history to display here
          </p>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full">
        <div className="item d-flex flex-row justify-content-between align-items-center w-full">
          <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center">
            <i className="fas fa-cube"></i>
          </div>
          <p className="job-label">INFH001</p>
          <button className="btn2">B.Tech</button>
          <p className="job-published-date">
            Change in Hiring Criteria for Job-2
          </p>
          <p className="job-published-date">Published on 09/02/2021</p>
        </div>
        <div className="vertical-divider"></div>
        <div className="job-list-item-details-container d-flex flex-row justify-content-center align-items-center">
          <div
            className="job-details-btn d-flex flex-row justify-content-around align-items-center"
            data-toggle="modal"
            data-target="#information"
          >
            <p>Details</p>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishProfile;

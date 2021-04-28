import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OtherInformationList from '../Components/OtherInformationList';
import {actionPostAddOtherInformationRequest, actionPostPublishOtherInformationRequest, actionGetPublishOtherInformationListRequest} from '../../../../Store/Actions/SagaActions/OtherInformationSagaActions';
import CustomToastModal from "../../../../Components/CustomToastModal";

const PublishProfile = () => {
  const [otherInfo, setOtherInfo] = useState({
    title: "",
    information: "",
    attachment: undefined,
  });

  const [showModal, setShowModal] = useState(false);
  const [otherInformationList, setOtherInformationList] = useState([]);

  const dispatch = useDispatch();

  const onOtherInformationListResponse = (response) => {
    if (response?.length) {
      setOtherInformationList(response);
    }
  };

  const getPublishedOtherInformation = () => {
    dispatch(
      actionGetPublishOtherInformationListRequest({
        callback: onOtherInformationListResponse,
      })
    );
  }

  useEffect(()=>{
    getPublishedOtherInformation();
  }, [])

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

  const isFormValid = () => {
    if(otherInfo?.title && otherInfo?.information) {
        return true;
    } else {
        return false;
    }
  }
  

  const onPublish = () => {
    resetPublishOtherInformation();
    getPublishedOtherInformation();
    setShowModal(true);
  }

  const onAddOtherInformation = (response) => {
    if(response?.id) {
      dispatch(actionPostPublishOtherInformationRequest({
        apiPayloadRequest: [response.id],
        callback: onPublish
      }))
    }
  }

  const addOtherInformation = () => {
      dispatch(actionPostAddOtherInformationRequest({
        apiPayloadRequest: otherInfo,
        callback: onAddOtherInformation
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
                <label htmlFor="attachment" className="d-label">
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
              onClick={addOtherInformation}
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
      <OtherInformationList otherInformationList={otherInformationList} />
      <CustomToastModal
        onClose={() => {
          setShowModal(false);
        }}
        show={showModal}
        iconNameClass={"fa-file"}
        message={"Selected Information has been Published Successfully"}
      />
    </div>
  );
};

export default PublishProfile;

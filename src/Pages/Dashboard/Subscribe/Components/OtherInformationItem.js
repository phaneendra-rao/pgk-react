import React, { useState } from "react";
import moment from "moment";
import CustomModal from "../../../../Components/CustomModal";
import PgkTextField from '../../../../Components/FormFields/PgkTextField';

const OtherInformationItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="univ-sub-item d-flex justify-content-between align-items-center"
        key={props?.index}
        style={{padding:15}}
      >
        <div className="sub-type-container d-flex">
          <i className="far fa-file-alt icon" />
          <p className="sub-label" style={{fontWeight:'bold'}}>{props?.item?.generalNote}</p>
        </div>
        <div className="vertical-border" />
        <div className="name-address d-flex flex-column align-items-start">
          <p className="title">{props?.item?.publisherName}</p>
          {props?.item?.location?.trim()!=='' && <p className="sub-title">
            <i className="fas fa-map-marker-alt" /> {props?.item?.location}
          </p>}
        </div>
        <div className="vertical-border" />
        <button
          type="button"
          className="view-info-btn btn d-flex justify-content-around align-items-center"
          style={{
            height: "20px",
            maxWidth: "100px",
            fontSize: ".600rem",
            borderRadius: "4px",
          }}
          onClick={() => {
            setShowModal(true);
          }}
        >
          View Information
        </button>
      </div>

      <CustomModal show={showModal}>
        <div className="hiring-modal">
          <div className="modal-header hiring-modal-header">
            <h5
              className="modal-title"
              style={{ fontSize: "1rem" }}
              id="exampleModalLabel"
            >
              Published Information Details
            </h5>
            <button
              type="button"
              className="close"
              style={{ fontSize: "1rem" }}
              onClick={() => {
                setShowModal(false);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form className="hiring-modal-form">
            <div className="row">
              <div className="col-md">
                <div className="modal-grp">
                  <PgkTextField
                      value={props?.item?.publishID}
                      label={'Publish ID'}
                      inputLabelProps={{style:{fontSize: '.800rem'}}}
                      inputProps={{style:{fontSize: '.800rem'}}}
                      disabled
                  />
                </div>
              </div>
              <div className="col-md">
                <div className="modal-grp">
                  <PgkTextField 
                      value={props?.item?.creationDate ? `Published on ${moment(props?.item?.creationDate).format("DD-MM-YYYY")}`: ''}
                      label={'Published Date & Time'}
                      inputLabelProps={{style:{fontSize: '.800rem'}}}
                      inputProps={{style:{fontSize: '.800rem'}}}
                      disabled
                  />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md">
                <div className="modal-grp">
                  <PgkTextField 
                      value={props?.item?.title ? props?.item?.title : ''}
                      label={'Title'}
                      inputLabelProps={{style:{fontSize: '.800rem'}}}
                      inputProps={{style:{fontSize: '.800rem'}}}
                      disabled
                  />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md">
                <div className="modal-grp">
                  <PgkTextField
                    value={props?.item?.information ? props?.item?.information : ''}
                    label={"Content"}
                    disabled
                    multiline={true}
                    minRows={6}
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}}}
                  />
                </div>
              </div>
              <div className="w-100"></div>
              {(props?.item?.attachment?.trim()!=='' && props?.item?.attachmentName?.trim()!=='') ?
                <div className="d-flex justify-content-between align-items-center attachmentStripeContainer w-full">
                <p className="label">Attachment Present (if any)</p>
                <a href={'data:application/pdf;base64,'+props?.item?.attachment} style={{textDecoration:'none', outline:'none', width:'70%'}} download>
                  <div className="attachmentStripe d-flex justify-content-between align-items-center">
                      <p>{props?.item?.attachmentName}</p>
                      <i className="fas fa-paperclip"></i>
                  </div>
                </a>
              </div> : null}
            </div>
          </form>
        </div>
      </CustomModal>
    </>
  );
};

export default OtherInformationItem;

import React, { useState } from "react";
import moment from "moment";
import CustomModal from "../../../../Components/CustomModal";

const CampusHiringItem = (props) => {
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
          <p className="sub-label" style={{fontWeight:'bold'}}>Campus Drive Request</p>
        </div>
        <div className="vertical-border" />
        <div className="name-address d-flex flex-column align-items-start">
          <p className="title">{props?.item?.publisherName}</p>
          {props?.item?.location?.trim()!=='' && <p className="sub-title">
            <i className="fas fa-map-marker-alt" /> {props?.item?.location}
          </p>}
        </div>
        <div className="vertical-border" />
        <div className="sub-item-container d-flex justify-content-around align-items-center">
          <p className="sub-title">Status</p>
          {props?.item?.campusDriveStatus==='Accepted' ? <span className="badge badge-md" style={{backgroundColor: '#20BDC9', color:'white', padding: '6px 15px', fontWeight: '500', marginLeft: 10, borderRadius: '20px'}}>Accepted</span> : props?.item?.campusDriveStatus==='Pending' ? <span className="badge badge-md" style={{backgroundColor: '#FEAD43', color:'white', padding: '6px 15px', fontWeight: '500', marginLeft: 10, borderRadius: '20px'}}>Sent</span> : props?.item?.campusDriveStatus==='Rejected' ? <span className="badge badge-md" style={{backgroundColor: '#F70D0D', color:'white', padding: '6px 15px', fontWeight: '500', marginLeft: 10, borderRadius: '20px'}}>Rejected</span> : undefined}
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
          View More
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
                  <label className="inp-caption">Publish ID</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={props?.item?.publishID ? props?.item?.publishID : ""}
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="col-md">
                <div className="modal-grp">
                  <label className="inp-caption">Published Date & Time</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={
                      props?.item?.creationDate
                        ? `Published on ${moment(
                            props?.item?.creationDate
                          ).format("DD/MM/YYYY")}`
                        : ""
                    }
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md">
                <div className="modal-grp">
                  <label className="inp-caption">Title</label>
                  <input
                    type="text"
                    name=""
                    className="modal-inp"
                    value={props?.item?.title ? props?.item?.title : ""}
                    disabled
                    required
                  />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md">
                <div className="modal-grp">
                  <label className="inp-caption">Content</label>
                  <textarea
                    name=""
                    rows="6"
                    className="modal-inp modal-textarea"
                    placeholder="Write in brief about the company"
                    value={
                      props?.item?.information ? props?.item?.information : ""
                    }
                    disabled
                    required
                  ></textarea>
                </div>
              </div>
              <div className="w-100"></div>
              <div className="d-flex justify-content-center align-items-center attachmentStripeContainer w-full">
                <p className="label">Attachment Present (if any)</p>
                <div className="attachmentStripe d-flex justify-content-between align-items-center">
                  <p>New Hiring Criteria for Job-2.pdf</p>
                  <i className="fas fa-paperclip"></i>
                </div>
              </div>
            </div>
          </form>
        </div>
      </CustomModal>
    </>
  );
};

export default CampusHiringItem;

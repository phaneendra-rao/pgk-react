import React, {useState} from 'react';
import moment from "moment";
import CustomModal from "../../../../Components/CustomModal";

const OtherInformationItem = (props) => {
    const [showModal, setShowModal] = useState(false);

    console.log('other info ', props?.item);

    return (<>
    <div
        className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full"
        key={props?.index}
      >
        <div className="item d-flex flex-row justify-content-between align-items-center w-full">
          <div className="job-icon d-flex justify-content-center align-items-center">
            <i className="fas fa-file" style={{ color: "#004FD0" }}></i>
          </div>
          <p className="job-label">{"Other Information"}</p>
          <p className="job-published-date" style={{textOverflow:'ellipsis', fontWeight: 'bold'}}>{props?.item?.title}</p>
          <p className="job-published-date">
          {props?.parentItem?.dateOfPublish
                ? `Published on ${moment(props?.parentItem?.dateOfPublish).format(
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
                borderRadius: "4px",
              }}
              onClick={() => {
                  setShowModal(true);
              }}
            >
              <p>Details</p>
            </button>
        </div>
      </div>
      <CustomModal
        show={showModal}
      >
        <div className="hiring-modal">
          <div className="modal-header hiring-modal-header">
            <h5 className="modal-title" style={{fontSize: '1rem'}} id="exampleModalLabel">
              Published Information Details
            </h5>
            <button
              type="button"
              className="close"
              style={{fontSize: '1rem'}}
              onClick={()=>{
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
                    value={props?.item?.publishID ? props?.item?.publishID : ''}
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
                    value={props?.item?.creationDate ? `Published on ${moment(props?.item?.creationDate).format("DD/MM/YYYY")}`: ''}
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
                    value={props?.item?.title ? props?.item?.title : ''}
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
                    value={props?.item?.information ? props?.item?.information : ''}
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
    </>);
}

export default OtherInformationItem;
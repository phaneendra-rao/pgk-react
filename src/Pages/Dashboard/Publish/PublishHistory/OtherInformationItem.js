import React, {useState} from 'react';
import moment from "moment";
import CustomModal from "../../../../Components/CustomModal";

const OtherInformationItem = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (<>
    <div className="w-full d-flex justify-content-center align-items-center" >

          <div className="row align-items-center jobs-list-item w-full p-0" style={{height: '80px'}}>
        <div className="col-md-2 row align-items-center p-0">
          <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center m-0">
            <i className="fas fa-cube" />
          </div>
          <p
            className="job-label text-ellipsis"
            style={{ marginLeft: "14px", textTransform: "capitalize" }}
          >
            {"Other Information"}
          </p>
        </div>
        <div className="col-md-5 align-items-center">
          <p className="job-published-date text-ellipsis" style={{maxWidth: '300px', textAlign:'left'}}>{props?.item?.title}</p>
        </div>
        <div className={`col-md-2 item align-items-center`}>
          <p className="job-published-date" style={{ color: "#454545", fontSize: '.750rem' }}>
          {props?.parentItem?.dateOfPublish
                ? `Published on ${moment(props?.parentItem?.dateOfPublish).format(
                    "DD-MM-YYYY"
                  )}`
                : "-"}
          </p>
        </div>
        <div className={`col-md-3 row item p-0 d-flex justify-content-between align-items-center w-full`}>
          <div></div>
          <div className="vertical-divider" />
          <button
            type="button"
            className="btn d-flex justify-content-around align-items-center"
            style={{
              height: "30px",
              width: "100px",
              fontSize: ".700rem",
              marginRight: "10px",
              borderRadius: "4px",
              textTransform: "uppercase",
              fontWeight: "bolder",
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
                    value={props?.parentItem?.publishID ? props?.parentItem?.publishID : ''}
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
                    value={props?.item?.creationDate ? `Published on ${moment(props?.item?.creationDate).format("DD-MM-YYYY")}`: ''}
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
              {(props?.item?.attachment?.trim()!=='' && props?.item?.attachmentName?.trim()!=='') ?
                <div className="d-flex justify-content-center align-items-center attachmentStripeContainer w-full">
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
    </>);
}

export default OtherInformationItem;
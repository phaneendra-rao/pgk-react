import React, { useEffect, useState } from "react";
import CustomModal from "../../../../Components/CustomModal";
import moment from "moment";
import PgkTextField from '../../../../Components/FormFields/PgkTextField';

const OtherInformationList = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [otherInformation, setOtherInformation] = useState();

  const OtherInformationListItem = (info) => {
    return (
      <div
        className="row align-items-center jobs-list-item w-full"
        key={info?.id}
      >
        <div className="col-md-2 row align-items-center p-0">
          <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center">
            <i className="fas fa-cube"></i>
          </div>
          <p 
            className="job-label text-ellipsis"
            style={{
              marginLeft: "14px",
              maxWidth: "200px",
              textTransform: "capitalize",
              fontWeight: 'bold'
            }}
          >{info?.publishID ? info?.publishID : "-"}</p>
        </div>
        <div className="col-md-3">
          <p className="job-published-date" style={{textOverflow:'ellipsis', fontWeight: 'bold'}}>{info?.title}</p>
        </div>
        <div className="col-md-1">
        </div>
        <div className="col-md-3">
          <p className="job-published-date"style={{ color: "#454545", textAlign:'center', fontSize: '13px', fontWeight: 'bold'}}>
              {info?.creationDate &&
              `Published on`}
          </p>
          <p className="job-published-date"style={{ color: "#454545", textAlign:'center', fontSize: '13px', fontWeight: 'bold'}}>
              {info?.creationDate &&
              `${moment(info.creationDate).format("DD-MMM-YYYY")}`}
          </p>
        </div>
        <div className={`col-md-2 row item p-0 d-flex justify-content-between align-items-center`}>
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
              setOtherInformation(info);
              setShowModal(true);
            }}
          >
            <p>Details</p>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    );
  };

  const getOtherInformationList = () => {
    return props?.otherInformationList.map((item) => {
      return OtherInformationListItem(item);
    });
  };

  return props?.otherInformationList?.length ? (
    <>
      {getOtherInformationList()}
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
                <div className="mb-20">
                  <PgkTextField 
                      onChange={()=>{}}
                      value={otherInformation?.publishID}
                      label={'Publish ID'}
                      inputLabelProps={{style:{fontSize: '.800rem'}}}
                      inputProps={{style:{fontSize: '.800rem'}}}
                      disabled
                  />
                </div>
              </div>
              <div className="col-md">
                <div className="mb-20">
                  <PgkTextField 
                      onChange={()=>{}}
                      value={otherInformation?.creationDate ? `Published on ${moment(otherInformation?.creationDate).format("DD-MM-YYYY")}`: ''}
                      label={'Published Date & Time'}
                      inputLabelProps={{style:{fontSize: '.800rem'}}}
                      inputProps={{style:{fontSize: '.800rem'}}}
                      disabled
                  />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md">
                <div className="mb-20">
                  <PgkTextField 
                      onChange={()=>{}}
                      value={otherInformation?.title ? otherInformation?.title : ''}
                      label={'Title'}
                      inputLabelProps={{style:{fontSize: '.800rem'}}}
                      inputProps={{style:{fontSize: '.800rem'}}}
                      disabled
                  />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md">
                <div className="mb-20">
                  <PgkTextField
                    value={otherInformation?.information ? otherInformation?.information : ''}
                    label={"Content"}
                    disabled
                    onChange={()=>{}}
                    multiline={true}
                    minRows={6}
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}}}
                  />
                </div>
              </div>
              <div className="w-100"></div>
              {(otherInformation?.attachment?.trim()!=='' && otherInformation?.attachmentName?.trim()!=='') ?
                <div className="d-flex justify-content-between align-items-center attachmentStripeContainer w-full">
                <p className="label">Attachment Present (if any)</p>
                <a href={'data:application/pdf;base64,'+otherInformation?.attachment} style={{textDecoration:'none', outline:'none', width:'70%'}} download>
                  <div className="attachmentStripe d-flex justify-content-between align-items-center">
                      <p>{otherInformation?.attachmentName}</p>
                      <i className="fas fa-paperclip"></i>
                  </div>
                </a>
              </div> : null}
            </div>
          </form>
        </div>
      </CustomModal>
    </>
  ) : (
    <div className="row jobs-saved-section-list">
      <div className="d-flex flex-column justify-content-start align-items-center w-full">
        <p className="no-list-message w-full">
          No other information publish history to display here
        </p>
      </div>
    </div>
  );
};

export default OtherInformationList;

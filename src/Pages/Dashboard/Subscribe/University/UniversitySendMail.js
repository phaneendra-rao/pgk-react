import React from "react";

const UniversitySendMail = (props) => {
  return (
    <div className={'mail-modal'}>
      <form onSubmit={props.sendMail}>
      <div className="modal-header d-block">
      <span className="modal-title" style={{fontSize: '1.1rem', padding: 6}}>
          New mail to {props.universityName} University requesting Campus
          Placement Drive
        </span>
        <i
          className="far fa-times-circle close-icon"
          onClick={props.closeSendModal}
          data-dismiss="modal"
        />
      </div>
      <div className="modal-body">
        <div className="card">
          <span className="control-label" style={{fontSize: '1rem'}}>From&nbsp;:</span>
          <input
            type="email"
            name="emailFrom"
            style={{fontSize: '1rem'}}
            defaultValue={props.email}
            onChange={props.handleChange}
            required
            readOnly
          />
        </div>
        <div className="card">
          <span className="control-label" style={{fontSize: '1rem'}}>To&nbsp;:</span>
          <input
            type="email"
            name="emailTo"
            style={{fontSize: '1rem'}}
            defaultValue={props.emailTo}
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="card">
          <span className="control-label" style={{fontSize: '1rem'}}>Subject&nbsp;:</span>
          <input
            type="text"
            name="emailSubject"
            style={{fontSize: '1rem'}}
            defaultValue={props.emailSubject}
            onChange={props.handleChange}
            required
          />
        </div>
        <div className="card b-none">
          <textarea
            name="emailBody"
            defaultValue={""}
            style={{fontSize: '.850rem'}}
            onChange={props.handleChange}
            rows={5}
          />
        </div>
        <div className="card ">
          <div className="attachment">
            <i className="fas fa-paperclip" />
            <span>Selected Students list for Campus Hiring (Attachment)</span>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="submit" className="btn3 ">
          Send
        </button>
        &nbsp;
        <button
          type="button"
          onClick={props.closeSendModal}
          className="btn3 "
          data-dismiss="modal"
        >
          Cancel
        </button>
      </div>
    </form>
    </div>
  );
};

export default UniversitySendMail;

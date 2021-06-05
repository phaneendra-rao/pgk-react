import React, { useState } from "react";
import { toast } from "react-toastify";

const UniversitySendMail = (props) => {
  const [sendMailObj, setSendMailObj] = useState({
    emailTo: '',
    emailSubject: '',
    emailBody: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSendMailObj(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const sendMail = (event) => {
    event.preventDefault();
    const { emailTo, emailSubject, emailBody } = sendMailObj;
    if (!emailTo && !emailSubject && !emailBody) {
      toast.warning('Please enter all inout fields')
      return;
    }
    const model = {
      emailTo: emailTo,
      emailSubject: emailSubject ? emailSubject : 'Campus Hiring Request',
      emailBody: emailBody
    };
    props.sendMail(model)
  }

  return (
    <div className={'mail-modal'}>
      <form onSubmit={sendMail}>
        <div className="modal-header d-block">
          <span className="modal-title" style={{ fontSize: '1.1rem', padding: 6 }}>
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
            <span className="control-label" style={{ fontSize: '1rem' }}>From&nbsp;:</span>
            <input
              type="email"
              name="emailFrom"
              style={{ fontSize: '1rem' }}
              defaultValue={props.email}
              // onChange={handleChange}
              required
              readOnly
            />
          </div>
          <div className="card">
            <span className="control-label" style={{ fontSize: '1rem' }}>To&nbsp;:</span>
            <input
              type="email"
              name="emailTo"
              style={{ fontSize: '1rem' }}
              defaultValue={props.emailTo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="card">
            <span className="control-label" style={{ fontSize: '1rem' }}>Subject&nbsp;:</span>
            <input
              type="text"
              name="emailSubject"
              style={{ fontSize: '1rem' }}
              defaultValue={props.emailSubject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="card b-none">
            <textarea
              name="emailBody"
              defaultValue={props.emailBody}
              style={{ fontSize: '.850rem' }}
              onChange={handleChange}
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

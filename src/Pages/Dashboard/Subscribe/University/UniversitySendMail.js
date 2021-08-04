import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UniversitySendMail = (props) => {
  const [sendMailObj, setSendMailObj] = useState({
    emailTo: '',
    emailSubject: '',
    emailBody: ''
  });

  useEffect(()=>{
    if(props?.emailTo) {
      setSendMailObj((prevState)=>({
        ...prevState,
        emailTo: props.emailTo
      }))
    }
  }, [props?.emailTo])

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
    if (emailTo?.trim()!=='' && emailSubject?.trim()!=='' && emailBody?.trim()!=='') {
      toast.warning('Please enter all input fields')
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
    <div className={'mail-modal'} style={{minHeight: '100%'}}>
      <form onSubmit={sendMail}>
        <div className="modal-header d-block" style={{padding: '26px'}}>
          <span className="modal-title" style={{ fontSize: '1.1rem', padding: 0 }}>
            Request for Campus Drive : {props.universityName}
        </span>
          <i
            className="far fa-times-circle close-icon"
            onClick={props.closeSendModal}
            data-dismiss="modal"
          />
        </div>
        <div className="modal-body">
          <div className="card d-none">
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
          <div className="card d-none">
            <span className="control-label" style={{ fontSize: '1rem' }}>To&nbsp;:</span>
            <input
              type="email"
              name="emailTo"
              style={{ fontSize: '1rem' }}
              defaultValue={props.emailTo}
              // onChange={handleChange}
              required
            />
          </div>
          <div className="card" style={{padding: '12px 20px'}}>
            <span className="control-label" style={{ fontSize: '1rem' }}>Subject&nbsp;:</span>
            <input
              type="text"
              name="emailSubject"
              style={{ fontSize: '1rem' }}
              defaultValue={props.emailSubject}
              // onChange={handleChange}
              required
            />
          </div>
          <div className="card" style={{minWidth: '100%', padding: '20px'}}>
            <textarea
              name="emailBody"
              defaultValue={props.emailBody}
              // readOnly
              style={{ fontSize: '.850rem', minWidth: '100%', minHeight: '400px' }}
              // onChange={handleChange}
              rows={20}
            />
          </div>
          <div className="card d-none">
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

import React from 'react';

const UniversitySendMail = (props) => {
    return (
        <div className="modal fade" id="mailModal">
            <div className="modal-dialog modal-dialog-centered mail-modal" style={{ maxWidth: '990px' }}>
                <div className="modal-content">
                    <form onSubmit={props.sendMail}>
                        <div className="modal-header d-block">
                            <span className="modal-title">New mail to {props.universityName} University requesting Campus Placement Drive</span>
                            <i className="far fa-times-circle close-icon" onClick={props.closeSendModal} data-dismiss="modal" />
                        </div>
                        <div className="modal-body">
                            <div className="card">
                                <span className="control-label">From&nbsp;:</span>
                                <input type="email" name="emailFrom" defaultValue={props.email} onChange={props.handleChange} required readOnly />
                            </div>
                            <div className="card">
                                <span className="control-label">To&nbsp;:</span>
                                <input type="email" name="emailTo" defaultValue={props.emailTo} onChange={props.handleChange} required />
                            </div>
                            <div className="card">
                                <span className="control-label">Subject&nbsp;:</span>
                                <input type="text" name="emailSubject" defaultValue={props.emailSubject} onChange={props.handleChange} required />
                            </div>
                            <div className="card b-none">
                                <textarea name="emailBody" defaultValue={""} onChange={props.handleChange} rows={5} />
                            </div>
                            <div className="card ">
                                <div className="attachment">
                                    <i className="fas fa-paperclip" />
                                    <span>Selected Students list for Campus Hiring (Attachment)</span>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn3 ">Send</button>&nbsp;
                            <button type="button" onClick={props.closeSendModal} className="btn3 " data-dismiss="modal">Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default UniversitySendMail;

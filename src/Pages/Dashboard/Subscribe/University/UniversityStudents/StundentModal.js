import React from 'react'

const StundentModal = () => {
    return (
        <div className="modal fade" id="mailModal">
            <div className="modal-dialog modal-dialog-centered mail-modal" style={{ maxWidth: '990px' }}>
                <div className="modal-content">
                    <div className="modal-header d-block">
                        <span className="modal-title">New mail to Osmania University requesting Campus Placement Drive</span>
                        <i className="far fa-times-circle close-icon" data-dismiss="modal" />
                    </div>
                    <div className="modal-body">
                        <div className="card">
                            <span className="control-label">From&nbsp;:</span>
                            <input type="text" defaultValue="shalmalia.a@pgktechnolgies.com" />
                        </div>
                        <div className="card">
                            <span className="control-label">To&nbsp;:</span>
                            <input type="text" />
                        </div>
                        <div className="card">
                            <span className="control-label">Subject&nbsp;:</span>
                            <input type="text" />
                        </div>
                        <div className="card b-none">
                            <textarea defaultValue={"\n              "} />
                        </div>
                        <div className="card ">
                            <div className="attachment">
                                <i className="fas fa-paperclip" />
                                <span>Selected Students list for Campus Hiring (Attachment)</span>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn3 " data-dismiss="modal">Send</button>&nbsp;
        <button type="button" className="btn3 " data-dismiss="modal">Cancel</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default StundentModal

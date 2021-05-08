import React from 'react'

const UniversitySubscribeSuccessModal = (props) => {
    let subscribeType;
    if (props.subscribeType === 'unvInsight')
        subscribeType = 'University Insights'
    else if (props.subscribeType === 'unvStuData')
        subscribeType = 'Students data'
    else
        subscribeType = 'CAMPUS HIRING REQUEST'

    return (
        <div className="modal fade" id="subSuccess">
            <div className="modal-dialog modal-dialog-centered subscribe-success-modal" style={{ maxWidth: '600px' }}>
                <div className="modal-content">
                    <div className="modal-body">
                        {/* <i className="far fa-times-circle close-icon" onClick={props.closeModal} data-dismiss="modal" /> */}
                        <div className="folder-blc">
                            <span className="circle">
                                <i className="far fa-folder-open" />
                            </span>
                        </div>
                        <label className="sub-lbl">Subscription</label>
                        <span className="sub-msg my-3 px-4 text-success">
                            Your have successfully subscribed to access the {subscribeType} of
                        </span>
                        <div className="card">
                            <div className="d-flex">
                                <span className="square">
                                    <i className="fas fa-university" />
                                </span>
                                <div className="university">
                                    <span className="name d-block">{props?.universityName}</span>
                                    <span className="location">
                                        <i className="fas fa-map-marker-alt" />{props?.universityHQAddressCity}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="modal-footer mt-5"
                        data-dismiss="modal"
                        type="button"
                        data-toggle="modal"
                        data-target="#viewInsight"
                        onClick={props.openViewInfoModal}>
                        Access the Information
                    </button>
                </div>
            </div>
        </div>

    )
}

export default UniversitySubscribeSuccessModal

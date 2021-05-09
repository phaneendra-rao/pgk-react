import React from 'react';

const UniversitySendMailSuccessModal = (props) => {
    return (
        <div className="modal fade mail-sent-success" id="mailSentSuccess">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <i className="far fa-times-circle close-icon" data-dismiss="modal" />
                        <div className="circle-block">
                            <div className="circle">
                                <i className="far fa-check" />
                            </div>
                        </div>
                        <span className="mail-sent py-2">Mail sent successfully to</span>
                        <div className="d-flex justify-content-center pb-3">
                            <div className="card">
                                <span className="square">
                                    <i className="fas fa-university" />
                                </span>
                                <span className="univ-name">
                                    {props.universityName} University
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UniversitySendMailSuccessModal;

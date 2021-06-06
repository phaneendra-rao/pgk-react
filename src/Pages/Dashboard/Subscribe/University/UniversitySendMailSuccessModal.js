import React from 'react';

const UniversitySendMailSuccessModal = (props) => {
    return (
        <div className="mail-sent-success">
            <div className="modal-body">
                <i className="far fa-times-circle close-icon" style={{cursor:'pointer'}} onClick={props?.closeModal} />
                <div className="circle-block">
                    <div className="circle">
                        <i className="fas fa-check" />
                    </div>
                </div>
                <span className="mail-sent py-2">Mail sent successfully to</span>
                <div className="d-flex justify-content-center pb-3">
                    <div className="card">
                        <span className="square">
                            <i className="fas fa-university" />
                        </span>
                        <span className="univ-name">
                            {props?.universityName} University
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UniversitySendMailSuccessModal;

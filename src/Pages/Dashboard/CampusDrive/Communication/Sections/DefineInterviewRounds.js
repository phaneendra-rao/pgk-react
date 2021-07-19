import React, { useState, useEffect } from "react";
import { TextField } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { Modal, ModalBody } from 'reactstrap'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { actionGetCampusDriveDefineJobsListRequestSaga } from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import ShareInterviewRounds from './ShareInterviewRounds';

const DefineInterviewRounds = (props) => {
    const dispatch = useDispatch();
    const [jobsList, setJobsList] = useState([]);
    const [enableRoundDetails, setEnableRoundDetails] = useState(false);
    const [enableSuccessModal, setEnableSuccessModal] = useState(false);
    const [selectedJobID, setSelectedJobID] = useState("");
    const [selectedJobName, setSelectedJobName] = useState("");

    const getJobData = (data) => {
        setJobsList(data);
    }

    const toggleRoundDetails = () => {
        setEnableRoundDetails(!enableRoundDetails);
    }

    const toggleSuccessModal = () => {
        setEnableSuccessModal(!enableSuccessModal);
        onCancel();
    }

    const onDefineRounds = (jobID, jobName) => {
        setSelectedJobID(jobID);
        setSelectedJobName(jobName);
        toggleRoundDetails();
    }

    const onCancel = () => {
        toggleRoundDetails();
    }

    const onSuccess = () => {
        setEnableSuccessModal(!enableSuccessModal);
    }

    useEffect(() => {
        dispatch(actionGetCampusDriveDefineJobsListRequestSaga({
            campusDriveId: props?.campusDriveId,
            callback: getJobData
        }));

    }, []);

    return (
        <>
            <div className="bgWhite h-full">
                {
                    enableRoundDetails
                        ?
                        <>
                            <ShareInterviewRounds
                                campusDriveId={props?.campusDriveId}
                                jobId={selectedJobID}
                                jobName={selectedJobName}
                                onCancel={onCancel}
                                onSuccess={onSuccess}
                            />
                        </>
                        :
                        <>
                            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                                <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                                    Interview Round Details
                                </p>
                            </div>
                            <br />
                            {jobsList.map((item) => (
                                <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full">
                                    <div className="item d-flex flex-row justify-content-between align-items-center w-full">
                                        <div className="col-sm-5">
                                            <div className="row">
                                                <div className="col-sm-3">
                                                    <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center">
                                                        <i className="fas fa-cube" style={{ float: "right" }} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-9">
                                                    <p className="job-label" style={{ float: "left", fontWeight: "bold", fontFamily: "Poppins-Regular" }}>Job Name</p>
                                                    <br />
                                                    <p className="job-label" style={{ float: "left", fontFamily: "Poppins-Regular" }}>{item.jobName}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <p className="job-label" style={{ float: "left", fontWeight: "bold", fontFamily: "Poppins-Regular" }}> Job Status </p>
                                            <br />
                                            <p className="job-label" style={{ float: "left", fontFamily: "Poppins-Regular" }}>{item.status === "o" ? "Open" : "Closed"} </p>
                                        </div>
                                        <div className="col-sm-4">
                                            <button className="btn" onClick={() => { onDefineRounds(item.jobID, item.jobName) }}>Interview Rounds </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </>
                }
            </div>
            {
                enableSuccessModal
                    ?
                    <>
                        <div>
                            <Modal isOpen={enableSuccessModal} toggle={toggleSuccessModal}>
                                <ModalBody style={{ textAlign: "center" }} >
                                    <CancelOutlinedIcon className="cancelbtn" onClick={toggleSuccessModal} />
                                    <div className="notification-icon d-flex flex-column justify-content-center align-items-center">
                                        <div style={{ color: "#253AA3", background: "lightblue", borderRadius: "50%", width: "100px", height: "100px", textAlign: "center", display: "inline-block" }}>
                                            <i className="fa fa-file-alt fa-4x" style={{ marginTop: "10px" }} />
                                        </div>
                                    </div>
                                    <p style={{ textAlign: "center" }} className="paragraph">Inteview rounds</p>
                                    <p style={{ textAlign: "center" }} className="paragraph2">added Successfully</p>
                                </ModalBody>
                            </Modal>
                        </div>
                    </>
                    :
                    <>
                    </>

            }


        </>
    );
};

export default DefineInterviewRounds;

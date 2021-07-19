import React, { useState, useEffect } from "react";
import { TextField } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { actionGetCampusDriveDefineJobsListRequestSaga } from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import ShareInterviewRounds from './ShareInterviewRounds';

const DefineInterviewRounds = (props) => {
    const dispatch = useDispatch();
    const [jobsList, setJobsList] = useState([]);
    const [numberOfRounds, setNumberOfRounds] = useState(1);
    const [enableRoundDetails, setEnableRoundDetails] = useState(false);
    const [selectedJobID, setSelectedJobID] = useState("");
    const [selectedJobName, setSelectedJobName] = useState("");

    const getJobData = (data) => {
        setJobsList(data);
    }

    const toggleRoundDetails = () => {
        setEnableRoundDetails(!enableRoundDetails);
    }

    const onDefineRounds = (jobID, jobName) => {
        setSelectedJobID(jobID);
        setSelectedJobName(jobName);
        toggleRoundDetails();
    }

    const onCancel = () => {
        toggleRoundDetails();
    }

    useEffect(() => {
        dispatch(actionGetCampusDriveDefineJobsListRequestSaga({
            campusDriveId: props?.campusDriveId,
            callback: getJobData
        }));

    }, []);

    return (
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
    );
};

export default DefineInterviewRounds;

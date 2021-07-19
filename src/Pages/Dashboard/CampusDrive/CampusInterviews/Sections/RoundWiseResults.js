import React, { useState, useEffect } from "react";
import { TextField } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { actionGetCampusDriveDefineJobsListRequestSaga } from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import { actionGetInterviewRoundsRequestSaga, actionGetStudentsListSaga } from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/CampusInterviewSagaAction';

import CaptureResults from './CaptureResults';

const RoundWiseResults = (props) => {
    const dispatch = useDispatch();
    const [jobsList, setJobsList] = useState([]);
    const [selectedJobID, setSelectedJobID] = useState("");
    const [selectedJobName, setSelectedJobName] = useState("");
    const [interviewRoundsInfo, setInterviewRoundsInfo] = useState({});
    const [enableCaptureResults, setEnableCaptureResults] = useState(false);
    const [captureResultsModel, setCaptureResultsModel] = useState({});
    const [studentsListForRound, setStudentsListForRound] = useState([]);

    const onJobChange = (event) => {
        const { name, value } = event.target;
        setSelectedJobID(value);
        jobsList.map((item) => {
            if (item.jobID === value) {
                setSelectedJobName(item.jobName);
            }
        });
        getinteviewRoundsInformation(value);
    }

    const toggleCaptureResults = () => {
        setEnableCaptureResults(!enableCaptureResults);
    }

    const onCaptureResults = (roundName, startDate, endDate, roundType) => {
        setCaptureResultsModel({
            jobName: selectedJobName,
            roundName: roundName,
            startDate: startDate,
            endDate: endDate,
            roundType: roundType
        });
        getStudentsList();
    }

    const getStudentsList = () => {
        // const inputModel = {
        //     cdID: props.campusDriveId,
        //     jobID: selectedJobID,
        //     interviewRoundID: interviewRoundsInfo.interviewRoundID
        // };

        const inputModel = {
            cdID: "CCDI20000007",
            jobID: "JB20000002",
            interviewRoundID: "0"
        };

        const params = Object.keys(inputModel).map(item => {
            if (inputModel[item]) {
                return `${item}=${inputModel[item]}&`
            }
        }).join('').replace(/&$/, "");

        dispatch(actionGetStudentsListSaga({
            apiPayloadRequest: params,
            callback: getStudentsListForRound
        }));
        toggleCaptureResults();
    }

    const getStudentsListForRound = (data) => {
        setStudentsListForRound(data);
    }

    const getinteviewRoundsInformation = (jobID) => {
        const inputModel = {
            campusDriveID: props?.campusDriveId,
            jobID: jobID
        };
        dispatch(actionGetInterviewRoundsRequestSaga({
            apiPayloadRequest: inputModel,
            callback: getRoundsInformation
        }));
    }

    const getRoundsInformation = (data) => {
        setInterviewRoundsInfo(data);
    }

    const getJobData = (data) => {
        setJobsList(data);
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
                enableCaptureResults ?
                    <>
                        <CaptureResults />
                    </>
                    :
                    <div className="container">
                        <div className="d-flex flex-column justify-content-start align-items-center w-full">
                            <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                                Round Wise Results
                            </p>
                        </div>
                        <br />
                        <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                            <TextField
                                select
                                label="Job Name"
                                variant="outlined"
                                style={{ width: "80%" }}
                                InputLabelProps={{
                                    shrink: true,
                                    style: { fontFamily: "Poppins-Regular", display: "block" }
                                }}
                                inputProps={{
                                    name: 'programType',
                                    style: { fontFamily: "Poppins-Regular", display: "block" }
                                }}
                                SelectProps={{
                                    native: true,
                                }}
                                select
                                required={true}
                                onChange={onJobChange}
                            >
                                <option value={'DEFAULT'}>Select a Job</option>
                                {jobsList?.length && (
                                    jobsList.map((item) => {
                                        return <option value={item.jobID}
                                            key={item.jobID}
                                        >{item.jobName}</option>
                                    })
                                )}
                            </TextField>
                        </div>
                        <br />
                        <div style={{ borderTop: "1px solid black", width: "100%", marginLeft: 20, marginRight: 20 }}></div>
                        <br />
                        {
                            interviewRoundsInfo?.noOfRounds ?
                                <>
                                    <table className="table table-striped table-bordered">
                                        <thead style={{ backgroundColor: "#253AA3", color: "white" }}>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Round Name</th>
                                                <th scope="col">From Date</th>
                                                <th scope="col">To Date</th>
                                                <th scope="col">Type</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </>
                                :
                                <>
                                    {/* <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                        Please select Job to capture results
                    </p>
                </div> */}
                                    <table className="table table-striped table-bordered">
                                        <thead style={{ backgroundColor: "#253AA3", color: "white" }}>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Round Name</th>
                                                <th scope="col">From Date</th>
                                                <th scope="col">To Date</th>
                                                <th scope="col">Type</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                interviewRoundsInfo?.round1 ?
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>{interviewRoundsInfo?.round1} </td>
                                                        <td>{interviewRoundsInfo?.round1StartDate}</td>
                                                        <td>{interviewRoundsInfo?.round1EndDate}</td>
                                                        <td>{interviewRoundsInfo?.round1Type}</td>
                                                        <td> <button type="button" className="btn" onClick={onCaptureResults(
                                                            interviewRoundsInfo?.round1,
                                                            interviewRoundsInfo?.round1StartDate,
                                                            interviewRoundsInfo?.round1EndDate,
                                                            interviewRoundsInfo?.round1Type
                                                        )} style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                                                    </tr>
                                                    :                                                    
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Round 1 </td>
                                                            <td>01-Jul-2021</td>
                                                            <td>01-Jul-2021</td>
                                                            <td>Written Test</td>
                                                            <td> <button type="button" className="btn" onClick={ () => {onCaptureResults(
                                                                "Round1",
                                                                "2021-07-01T00:00:00Z",
                                                                "2021-07-01T00:00:00Z",
                                                                "string"
                                                            )}} style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                                                        </tr>
                                                    
                                            }

                                        </tbody>
                                    </table>
                                </>
                        }
                    </div>
            }

        </div>
    );
};

export default RoundWiseResults;
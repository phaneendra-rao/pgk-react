import React, { useState, useEffect } from "react";
import { TextField } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { actionGetCampusDriveDefineJobsListRequestSaga } from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import { actionGetInterviewRoundsRequestSaga, actionGetStudentsListSaga } from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/CampusInterviewSagaAction';
import { Modal, ModalBody } from 'reactstrap'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';

import CaptureResults from './CaptureResults';

const RoundWiseResults = (props) => {
    const dispatch = useDispatch();
    const [jobsList, setJobsList] = useState([]);
    const [selectedJobID, setSelectedJobID] = useState("");
    const [selectedJobName, setSelectedJobName] = useState("");
    const [interviewRoundsInfo, setInterviewRoundsInfo] = useState({});
    const [enableCaptureResults, setEnableCaptureResults] = useState(false);
    const [enableSuccessModal, setEnableSuccessModal] = useState(false);
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
    const toggleSuccessModal = () => {
        setEnableSuccessModal(!enableSuccessModal);
    }

    const onSucess = () => {
        onCancel();
        toggleSuccessModal();
    }

    function getFormattedDate(date) {
        var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
            'Nov', 'Dec'];
        var d = new Date(date);
        return d.getDate() + '-' + month[d.getMonth()] + '-' + d.getFullYear();
    }

    const toggleCaptureResults = () => {
        setEnableCaptureResults(!enableCaptureResults);
    }

    const onCaptureResults = (roundNumber, roundName, startDate, endDate, roundType) => {
        setCaptureResultsModel({
            jobName: selectedJobName,
            roundName: roundName,
            startDate: startDate,
            endDate: endDate,
            roundType: roundType,
            totalRounds: interviewRoundsInfo.noOfRounds,
            campusDriveId: props.campusDriveId,
            roundNumber: roundNumber,
            jobId: interviewRoundsInfo.jobID
        });

        getStudentsList(roundNumber);
    }

    const getStudentsList = (roundNumber) => {
        const inputModel = {
            cdID: props.campusDriveId,
            jobID: selectedJobID,
            interviewRoundID: roundNumber
        };

        const params = Object.keys(inputModel).map(item => {
            // if (inputModel[item]) {
            return `${item}=${inputModel[item]}&`
            //}
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

    const onCancel = () => {
        setEnableCaptureResults(false);
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
                        <CaptureResults
                            captureResultsModel={captureResultsModel}
                            studentsListForRound={studentsListForRound}
                            onCancel={onCancel}
                            onSucess={onSucess}
                        />
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
                                            selected={selectedJobID === item.jobID ? true : false}
                                        >{item.jobName}</option>
                                    })
                                )}
                            </TextField>
                        </div>
                        <br />
                        <div style={{ borderTop: "1px solid black", width: "100%", marginLeft: 20, marginRight: 20 }}></div>
                        <br />
                        {
                            interviewRoundsInfo?.noOfRounds > 0 ?
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
                                            {
                                                interviewRoundsInfo?.round1 ?
                                                    <tr>
                                                        <th scope="row">1</th>
                                                        <td>{interviewRoundsInfo?.round1} </td>
                                                        <td> {getFormattedDate(interviewRoundsInfo?.round1StartDate)}</td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round1EndDate)}</td>
                                                        <td>{interviewRoundsInfo?.round1Type}</td>
                                                        <td> <button type="button" className="btn" onClick={() => {
                                                            onCaptureResults(
                                                                1,
                                                                interviewRoundsInfo?.round1,
                                                                interviewRoundsInfo?.round1StartDate,
                                                                interviewRoundsInfo?.round1EndDate,
                                                                interviewRoundsInfo?.round1Type
                                                            )
                                                        }} style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                                                    </tr>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                interviewRoundsInfo?.round2 ?
                                                    <tr>
                                                        <th scope="row">2</th>
                                                        <td>{interviewRoundsInfo?.round2} </td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round2StartDate)}</td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round2EndDate)}</td>
                                                        <td>{interviewRoundsInfo?.round2Type}</td>
                                                        <td> <button type="button" className="btn" onClick={() => {
                                                            onCaptureResults(
                                                                2,
                                                                interviewRoundsInfo?.round2,
                                                                interviewRoundsInfo?.round2StartDate,
                                                                interviewRoundsInfo?.round2EndDate,
                                                                interviewRoundsInfo?.round2Type
                                                            )
                                                        }} style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                                                    </tr>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                interviewRoundsInfo?.round3 ?
                                                    <tr>
                                                        <th scope="row">3</th>
                                                        <td>{interviewRoundsInfo?.round3} </td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round3StartDate)}</td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round3EndDate)}</td>
                                                        <td>{interviewRoundsInfo?.round3Type}</td>
                                                        <td> <button type="button" className="btn" onClick={() => {
                                                            onCaptureResults(
                                                                3,
                                                                interviewRoundsInfo?.round3,
                                                                interviewRoundsInfo?.round3StartDate,
                                                                interviewRoundsInfo?.round3EndDate,
                                                                interviewRoundsInfo?.round3Type
                                                            )
                                                        }} style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                                                    </tr>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                interviewRoundsInfo?.round4 ?
                                                    <tr>
                                                        <th scope="row">4</th>
                                                        <td>{interviewRoundsInfo?.round4} </td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round4StartDate)}</td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round4EndDate)}</td>
                                                        <td>{interviewRoundsInfo?.round4Type}</td>
                                                        <td> <button type="button" className="btn" onClick={() => {
                                                            onCaptureResults(
                                                                4,
                                                                interviewRoundsInfo?.round4,
                                                                interviewRoundsInfo?.round4StartDate,
                                                                interviewRoundsInfo?.round4EndDate,
                                                                interviewRoundsInfo?.round4Type
                                                            )
                                                        }} style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                                                    </tr>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                interviewRoundsInfo?.round5 ?
                                                    <tr>
                                                        <th scope="row">5</th>
                                                        <td>{interviewRoundsInfo?.round5} </td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round5StartDate)}</td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round5EndDate)}</td>
                                                        <td>{interviewRoundsInfo?.round5Type}</td>
                                                        <td> <button type="button" className="btn" onClick={() => {
                                                            onCaptureResults(
                                                                5,
                                                                interviewRoundsInfo?.round5,
                                                                interviewRoundsInfo?.round5StartDate,
                                                                interviewRoundsInfo?.round5EndDate,
                                                                interviewRoundsInfo?.round5Type
                                                            )
                                                        }} style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                                                    </tr>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                interviewRoundsInfo?.round6 ?
                                                    <tr>
                                                        <th scope="row">6</th>
                                                        <td>{interviewRoundsInfo?.round6} </td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round6StartDate)}</td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round6EndDate)}</td>
                                                        <td>{interviewRoundsInfo?.round6Type}</td>
                                                        <td> <button type="button" className="btn" onClick={() => {
                                                            onCaptureResults(
                                                                6,
                                                                interviewRoundsInfo?.round6,
                                                                interviewRoundsInfo?.round6StartDate,
                                                                interviewRoundsInfo?.round6EndDate,
                                                                interviewRoundsInfo?.round6Type
                                                            )
                                                        }} style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                                                    </tr>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                interviewRoundsInfo?.round6 ?
                                                    <tr>
                                                        <th scope="row">6</th>
                                                        <td>{interviewRoundsInfo?.round6} </td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round6StartDate)}</td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round6EndDate)}</td>
                                                        <td>{interviewRoundsInfo?.round6Type}</td>
                                                        <td> <button type="button" className="btn" onClick={() => {
                                                            onCaptureResults(
                                                                6,
                                                                interviewRoundsInfo?.round6,
                                                                interviewRoundsInfo?.round6StartDate,
                                                                interviewRoundsInfo?.round6EndDate,
                                                                interviewRoundsInfo?.round6Type
                                                            )
                                                        }} style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                                                    </tr>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                interviewRoundsInfo?.round7 ?
                                                    <tr>
                                                        <th scope="row">7</th>
                                                        <td>{interviewRoundsInfo?.round7} </td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round7StartDate)}</td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round7EndDate)}</td>
                                                        <td>{interviewRoundsInfo?.round7Type}</td>
                                                        <td> <button type="button" className="btn" onClick={() => {
                                                            onCaptureResults(
                                                                7,
                                                                interviewRoundsInfo?.round7,
                                                                interviewRoundsInfo?.round7StartDate,
                                                                interviewRoundsInfo?.round7EndDate,
                                                                interviewRoundsInfo?.round7Type
                                                            )
                                                        }} style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                                                    </tr>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                interviewRoundsInfo?.round8 ?
                                                    <tr>
                                                        <th scope="row">8</th>
                                                        <td>{interviewRoundsInfo?.round8} </td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round8StartDate)}</td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round8EndDate)}</td>
                                                        <td>{interviewRoundsInfo?.round8Type}</td>
                                                        <td> <button type="button" className="btn" onClick={() => {
                                                            onCaptureResults(
                                                                8,
                                                                interviewRoundsInfo?.round8,
                                                                interviewRoundsInfo?.round8StartDate,
                                                                interviewRoundsInfo?.round8EndDate,
                                                                interviewRoundsInfo?.round8Type
                                                            )
                                                        }} style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                                                    </tr>
                                                    :
                                                    <>
                                                    </>
                                            }
                                            {
                                                interviewRoundsInfo?.round9 ?
                                                    <tr>
                                                        <th scope="row">9</th>
                                                        <td>{interviewRoundsInfo?.round9} </td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round9StartDate)}</td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round9EndDate)}</td>
                                                        <td>{interviewRoundsInfo?.round9Type}</td>
                                                        <td> <button type="button" className="btn" onClick={() => {
                                                            onCaptureResults(
                                                                9,
                                                                interviewRoundsInfo?.round9,
                                                                interviewRoundsInfo?.round9StartDate,
                                                                interviewRoundsInfo?.round9EndDate,
                                                                interviewRoundsInfo?.round9Type
                                                            )
                                                        }} style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                                                    </tr>
                                                    :
                                                    <>
                                                    </>
                                            }

                                            {
                                                interviewRoundsInfo?.round10 ?
                                                    <tr>
                                                        <th scope="row">10</th>
                                                        <td>{interviewRoundsInfo?.round10} </td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round10StartDate)}</td>
                                                        <td>{getFormattedDate(interviewRoundsInfo?.round10EndDate)}</td>
                                                        <td>{interviewRoundsInfo?.round10Type}</td>
                                                        <td> <button type="button" className="btn" onClick={() => {
                                                            onCaptureResults(
                                                                10,
                                                                interviewRoundsInfo?.round10,
                                                                interviewRoundsInfo?.round10StartDate,
                                                                interviewRoundsInfo?.round10EndDate,
                                                                interviewRoundsInfo?.round10Type
                                                            )
                                                        }} style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                                                    </tr>
                                                    :
                                                    <>
                                                    </>
                                            }
                                        </tbody>
                                    </table>
                                </>
                                :
                                <>
                                    {
                                        interviewRoundsInfo?.noOfRounds === 0
                                            ?
                                            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                                                <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                                                    Please add rounds to selected job to capture results
                                                </p>
                                            </div>
                                            :
                                            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                                                <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                                                    Please select Job to capture results
                                                </p>
                                            </div>
                                    }

                                </>
                        }
                    </div>
            }

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
                                            <i className="fa fa-envelope fa-4x" style={{ marginTop: "10px" }} />
                                        </div>
                                    </div>
                                    <p style={{ textAlign: "center" }} className="paragraph">Capture Results</p>
                                    <p style={{ textAlign: "center" }} className="paragraph2">saved successfully</p>
                                </ModalBody>
                            </Modal>
                        </div>
                    </>
                    :
                    <>
                    </>
            }
        </div>
    );
};

export default RoundWiseResults;
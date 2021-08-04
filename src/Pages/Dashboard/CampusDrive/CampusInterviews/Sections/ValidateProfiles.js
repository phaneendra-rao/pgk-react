import React, { useState, useEffect, useRef } from "react";
import { FormControl, Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { CSVLink } from 'react-csv';
import { actionGetCampusDriveDefineJobsListRequestSaga } from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import { actionGetInterviewRoundsRequestSaga, actionGetStudentsListSaga } from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/CampusInterviewSagaAction';

const ValidateProfiles = (props) => {
    const dispatch = useDispatch();
    const [jobsList, setJobsList] = useState([]);
    const [selectedJobID, setSelectedJobID] = useState("");
    const [selectedJobName, setSelectedJobName] = useState("");
    const [roundStartDate, setStartDate] = useState("");
    const [interviewRoundsInfo, setInterviewRoundsInfo] = useState({});
    const [studentsListForRound, setStudentsListForRound] = useState([]);
    const csvLink = useRef();

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

    const getRoundsInformation = (data) => {
        setInterviewRoundsInfo(data);
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
    }

    const getStudentsListForRound = (data) => {
        setStudentsListForRound(data);
    }

    const onDownloadData = () => {
        csvLink.current.link.click();
    }

    const onRoundChange = (event) => {
        const { name, value } = event.target;
        getStudentsList(value);
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
            <CSVLink
                data={studentsListForRound?.studentsList && studentsListForRound?.studentsList.length > 0 ? studentsListForRound.studentsList : "DummyData"}
                filename='StudentsData.csv'
                className='hidden'
                ref={csvLink}
                target='_blank'
            />
            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                    Share Captured Results
                </p>
            </div>
            <br />
            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                <TextField
                    select
                    label="Job Name"
                    // type="text"
                    // name="startDate"
                    // onChange={props.handleChange}
                    InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    inputProps={{
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    variant="outlined"
                    margin="dense"
                    style={{ width: "45%" }}
                    required={true}
                    SelectProps={{
                        native: true,
                    }}
                    placeholder="dd-mon-yyyy"
                    onChange={onJobChange}
                // value={props.addProgram.startDate}
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
                <TextField
                    select
                    label="Round Name"
                    // type="text"
                    // name="startDate"
                    // onChange={props.handleChange}
                    InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    inputProps={{
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    variant="outlined"
                    margin="dense"
                    style={{ width: "45%" }}
                    required={true}
                    SelectProps={{
                        native: true,
                    }}
                    onChange={onRoundChange}
                >
                    <option value={'DEFAULT'}>Select a Round</option>
                    {
                        interviewRoundsInfo?.round1
                            ?
                            <option value={1}
                                key={"round1"}
                            >{"Round 1"}</option>
                            :
                            <>
                            </>
                    }
                    {
                        interviewRoundsInfo?.round2
                            ?
                            <option value={2}
                                key={"round2"}
                            >{"Round 2"}</option>
                            :
                            <>
                            </>
                    }
                    {
                        interviewRoundsInfo?.round3
                            ?
                            <option value={3}
                                key={"round3"}
                            >{"Round 3"}</option>
                            :
                            <>
                            </>
                    }
                    {
                        interviewRoundsInfo?.round4
                            ?
                            <option value={4}
                                key={"round4"}
                            >{"Round 4"}</option>
                            :
                            <>
                            </>
                    }
                    {
                        interviewRoundsInfo?.round5
                            ?
                            <option value={5}
                                key={"round5"}
                            >{"Round 5"}</option>
                            :
                            <>
                            </>
                    }
                    {
                        interviewRoundsInfo?.round6
                            ?
                            <option value={6}
                                key={"round6"}
                            >{"Round 6"}</option>
                            :
                            <>
                            </>
                    }
                    {
                        interviewRoundsInfo?.round7
                            ?
                            <option value={7}
                                key={"round7"}
                            >{"Round 7"}</option>
                            :
                            <>
                            </>
                    }
                    {
                        interviewRoundsInfo?.round8
                            ?
                            <option value={8}
                                key={"round8"}
                            >{"Round 8"}</option>
                            :
                            <>
                            </>
                    }
                    {
                        interviewRoundsInfo?.round9
                            ?
                            <option value={9}
                                key={"round9"}
                            >{"Round 9"}</option>
                            :
                            <>
                            </>
                    }
                    {
                        interviewRoundsInfo?.round10
                            ?
                            <option value={10}
                                key={"round10"}
                            >{"Round 10"}</option>
                            :
                            <>
                            </>
                    }

                </TextField>
            </div>
            <br />
            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                <TextField
                    label="From Date"
                    type="text"
                    // name="startDate"
                    // onChange={props.handleChange}
                    InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    inputProps={{
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    variant="outlined"
                    margin="dense"
                    style={{ width: "30%" }}
                    value={studentsListForRound.roundStartDate}
                />


                <TextField
                    label="To Date"
                    type="text"
                    name="endDate"
                    // onChange={props.handleChange}
                    InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    inputProps={{
                        // min: props.addProgram.startDate,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    //disabled={props.addProgram.startDate.length > 0 ? false : true}
                    variant="outlined"
                    margin="dense"
                    style={{ width: "30%" }}
                    value={studentsListForRound.roundEndDate}
                />
                <TextField
                    label="ShortListed Students"
                    type="number"
                    name="rank"
                    // onChange={props.handleChange}
                    className="form-control"
                    InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    inputProps={{
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    variant="outlined"
                    margin="dense"
                    style={{ maxWidth: "30%" }}
                    value={studentsListForRound.noOfStudentsSelected} //{props.addRanking.rank}
                // helperText={props.rankNumberErr}
                // error={props.rankNumberErr ? true : false}
                />
            </div>
            <br />
            <div style={{ borderTop: "1px solid black", width: "100%", marginLeft: 20, marginRight: 20 }}></div>
            <br />
            <table class="table table-striped table-bordered">
                <thead style={{ backgroundColor: "#253AA3", color: "white" }}>
                    <tr>
                        <th scope="col">Student Name</th>
                        <th scope="col">College Roll No.</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Resume</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        studentsListForRound?.studentsList && studentsListForRound?.studentsList?.length > 0
                            ?
                            <>
                                {
                                    studentsListForRound.studentsList.map((studentInfo) => (
                                        <tr>
                                            <td>{studentInfo.name}</td>
                                            <td>{studentInfo.collegeRollNo}</td>
                                            <td>{studentInfo.email}</td>
                                            <td></td>
                                        </tr>
                                    ))
                                }

                            </>
                            :
                            <>
                            </>
                    }
                </tbody>
            </table>
            <br />
            <div style={{ borderTop: "1px solid black", width: "100%", marginLeft: 20, marginRight: 20 }}></div>
            <br />
            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                <button type="button" className="btn" onClick={onDownloadData}><p>Download</p></button>
            </div>
            <br />
            <br />
        </div>
    );
};

export default ValidateProfiles;

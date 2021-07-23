import React, { useState, useEffect } from "react";
import { TextField } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { actionPostStudentsListForRoundSaga }
    from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/CampusInterviewSagaAction';


const CaptureResults = (props) => {

    const dispatch = useDispatch();

    function getFormattedDate(date) {
        var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
            'Nov', 'Dec'];
        var d = new Date(date);

        return d.getDate() + '-' + month[d.getMonth()] + '-' + d.getFullYear();
    }

    const initialStudentResults = {
        "cdID": props.captureResultsModel.campusDriveId,
        "totalInterviewRounds": props.captureResultsModel.totalRounds,
        "interviewRoundID": props.captureResultsModel.roundNumber,
        "jobID": props.captureResultsModel.jobId,
        "selectedApplicantIDs": [],
        "rejectedApplicantIDs": []
    }

    const [captureResults, setCaptureResults] = useState(initialStudentResults);

    const onChange = (event) => {
        var currentSelectedList = captureResults.selectedApplicantIDs;
        if (event.target.checked) {
            if (!currentSelectedList.includes(event.target.name)) {
                currentSelectedList.push(event.target.name);

            }
        }
        else {
            const index = currentSelectedList.indexOf(event.target.name);
            if (index > -1) {
                currentSelectedList.splice(index, 1);
            }
        }

        setCaptureResults((prevOtherInfo) => ({
            ...prevOtherInfo,
            selectedApplicantIDs: currentSelectedList
        }));
    }

    const onSubmit = () => {
        dispatch(actionPostStudentsListForRoundSaga({ apiPayloadRequest: captureResults, callback: onSucess }));
    }

    const onSucess = () => {
        props.onSucess();
    }

    return (
        <div className="bgWhite h-full">
            <div className="bgWhite h-full">
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                        Capture Round Wise Results
                    </p>
                </div>
                <br />
                <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                    <TextField
                        label="Job Name"
                        variant="outlined"
                        type="text"
                        value={props.captureResultsModel.jobName}
                        InputLabelProps={{
                            shrink: true,
                            style: { fontFamily: "Poppins-Regular", display: "block" }
                        }}
                        inputProps={{
                            style: { fontFamily: "Poppins-Regular", display: "block" }
                        }}
                        margin="dense"
                        style={{ width: "45%" }}
                    />
                    <TextField
                        label="Round Name"
                        variant="outlined"
                        type="text"
                        value={props.captureResultsModel.roundName}
                        InputLabelProps={{
                            shrink: true,
                            style: { fontFamily: "Poppins-Regular", display: "block" }
                        }}
                        inputProps={{
                            style: { fontFamily: "Poppins-Regular", display: "block" }
                        }}
                        margin="dense"
                        style={{ width: "45%" }}
                    />
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
                        value={getFormattedDate(props.captureResultsModel.startDate)}
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
                        value={getFormattedDate(props.captureResultsModel.endDate)}
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
                        value={props.studentsListForRound.noOfStudentsSelected} //{props.addRanking.rank}
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
                            <th scope="col">Select/Deselect</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">College Roll No.</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Resume</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.studentsListForRound?.studentsList && props.studentsListForRound?.studentsList?.length > 0
                                ?
                                <>
                                    {
                                        props.studentsListForRound.studentsList.map((studentInfo) => (
                                            <tr>
                                                <th scope="row"><input
                                                    type="checkbox"
                                                    name={studentInfo.applicantID}
                                                    onChange={onChange} /></th>
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
                    <button type="button" className="btn mr-4" onClick={() => { props.onCancel() }}><p>Cancel</p></button>
                    <button type="button" className="btn" onClick={() => { onSubmit() }}><p>Save</p></button>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
};

export default CaptureResults;
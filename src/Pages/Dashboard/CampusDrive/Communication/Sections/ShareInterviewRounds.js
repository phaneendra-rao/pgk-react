import React, { useState, useEffect } from "react";
import { TextField } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { actionGetCampusDriveDefineJobsListRequestSaga } from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import { AddRounded } from "@material-ui/icons";

const ShareInterviewRounds = (props) => {
    const dispatch = useDispatch();
    const [jobsList, setJobsList] = useState([]);
    const [numberOfRounds, setNumberOfRounds] = useState(1);
    const initialData = {
        "cdID": props.jobId,
        "noOfRounds": 1,
        "jobID": props.campusDriveId,
        "interviewRoundID": 0,
        "round1": "",
        "round1StartDate": "",
        "round1EndDate": "",
        "round1Type": "",
        "round2": "",
        "round2StartDate": "",
        "round2EndDate": "",
        "round2Type": "",
        "round3": "",
        "round3StartDate": "",
        "round3EndDate": "",
        "round3Type": "",
        "round4": "",
        "round4StartDate": "",
        "round4EndDate": "",
        "round4Type": "",
        "round5": "",
        "round5StartDate": "",
        "round5EndDate": "",
        "round5Type": "",
        "round6": "",
        "round6StartDate": "",
        "round6EndDate": "",
        "round6Type": "",
        "round7": "",
        "round7StartDate": "",
        "round7EndDate": "",
        "round7Type": "",
        "round8": "",
        "round8StartDate": "",
        "round8EndDate": "",
        "round8Type": "",
        "round9": "",
        "round9StartDate": "",
        "round9EndDate": "",
        "round9Type": "",
        "round10": "",
        "round10StartDate": "",
        "round10EndDate": "",
        "round10Type": ""
    };

    const [addRounds, setAddRounds] = useState(initialData);

    const AddRound = () => {
        if (numberOfRounds == 1) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 2,
            }));
        }
        else if (numberOfRounds == 2) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 3,
            }));
        }
        else if (numberOfRounds == 3) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 4,
            }));
        }
        else if (numberOfRounds == 4) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 5,
            }));
        }
        else if (numberOfRounds == 5) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 6,
            }));
        }
        else if (numberOfRounds == 6) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 7,
            }));
        }
        else if (numberOfRounds == 7) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 8,
            }));
        }
        else if (numberOfRounds == 8) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 9,
            }));
        }
        else if (numberOfRounds == 9) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 10,
            }));
        }
    }

    const onChange = (event) => {
        const { name, value } = event.target;
        setAddRounds((prevOtherInfo) => ({
            ...prevOtherInfo,
            [name]: value,
        }));
    }

    const onSubmit = (event) => {
        event.preventDefault();
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
            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                    Share Interview Round Details
                </p>
            </div>
            <br />
            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                <TextField
                    label="Job Name"
                    variant="outlined"
                    type="text"
                    value={props.jobName}
                    InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    inputProps={{
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    margin="dense"
                    style={{ width: "80%" }}
                />
            </div>
            <br />
            <div style={{ borderTop: "1px solid black", width: "100%", marginLeft: 20, marginRight: 20 }}></div>
            <br />
            <form>
                <button type="button" className="btn" style={{ float: "right" }} onClick={() => { AddRound() }}><p>+ Add Round</p></button>
                <table className="table table-striped table-bordered">
                    <thead style={{ backgroundColor: "#253AA3", color: "white" }}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Round</th>
                            <th scope="col">From Date</th>
                            <th scope="col">To Date</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">
                                1
                            </td>
                            <td>Round 1</td>
                            <td><input
                                name="round1StartDate"
                                onChange={onChange}
                                type="date"
                                required
                            /></td>
                            <td><input
                                name="round1EndDate"
                                onChange={onChange}
                                type="date"
                                required
                            /></td>
                            <td><select
                                required
                                name="round1Type"
                                onChange={onChange}
                            >
                                <option value={'DEFAULT'}>Select Round Type</option>
                                <option value="newTemplate"> + New Value</option>
                            </select></td>
                        </tr>
                        <tr style={{ display: numberOfRounds > 1 ? "" : "none" }}>
                            <td scope="row">
                                2
                            </td>
                            <td>Round 2</td>
                            <td><input
                                name="round2StartDate"
                                onChange={onChange}
                                type="date"
                                required
                            /></td>
                            <td><input
                                name="round2EndDate"
                                onChange={onChange}
                                type="date"
                                required
                            /></td>
                            <td><select
                                name="round2Type"
                                onChange={onChange}
                                required>
                                <option value={'DEFAULT'}>Select Round Type</option>
                                <option value="newTemplate"> + New Value</option>
                            </select></td>
                        </tr>

                        <tr style={{ display: numberOfRounds > 2 ? "" : "none" }}>
                            <td scope="row">
                                3
                            </td>
                            <td>Round 3</td>
                            <td><input
                                name="round3StartDate"
                                onChange={onChange}
                                type="date"
                                required
                            /></td>
                            <td><input
                                name="round3EndDate"
                                onChange={onChange}
                                type="date"
                                required
                            /></td>
                            <td><select
                                name="round3Type"
                                onChange={onChange}
                                required>
                                <option value={'DEFAULT'}>Select Round Type</option>
                                <option value="newTemplate"> + New Value</option>
                            </select></td>
                        </tr>

                        <tr style={{ display: numberOfRounds > 3 ? "" : "none" }}>
                            <td scope="row">
                                4
                            </td>
                            <td>Round 4</td>
                            <td><input
                                name="round4StartDate"
                                onChange={onChange}
                                type="date"
                                required
                            /></td>
                            <td><input
                                name="round4EndDate"
                                onChange={onChange}
                                type="date"
                                required
                            /></td>
                            <td><select
                                name="roundType"
                                onChange={onChange}
                                type="date"
                                required>
                                <option value={'DEFAULT'}>Select Round Type</option>
                                <option value="newTemplate"> + New Value</option>
                            </select></td>
                        </tr>

                        <tr style={{ display: numberOfRounds > 4 ? "" : "none" }}>
                            <td scope="row">
                                5
                            </td>
                            <td>Round 5</td>
                            <td><input
                                type="date"
                                required
                            /></td>
                            <td><input
                                type="date"
                                required
                            /></td>
                            <td><select
                                required>
                                <option value={'DEFAULT'}>Select Round Type</option>
                                <option value="newTemplate"> + New Value</option>
                            </select></td>
                        </tr>

                        <tr style={{ display: numberOfRounds > 5 ? "" : "none" }}>
                            <td scope="row">
                                6
                            </td>
                            <td>Round 6</td>
                            <td><input
                                type="date"
                                required
                            /></td>
                            <td><input
                                type="date"
                                required
                            /></td>
                            <td><select
                                required>
                                <option value={'DEFAULT'}>Select Round Type</option>
                                <option value="newTemplate"> + New Value</option>
                            </select></td>
                        </tr>

                        <tr style={{ display: numberOfRounds > 6 ? "" : "none" }}>
                            <td scope="row">
                                7
                            </td>
                            <td>Round 7</td>
                            <td><input
                                type="date"
                                required
                            /></td>
                            <td><input
                                type="date"
                                required
                            /></td>
                            <td><select
                                required>
                                <option value={'DEFAULT'}>Select Round Type</option>
                                <option value="newTemplate"> + New Value</option>
                            </select></td>
                        </tr>
                        <tr style={{ display: numberOfRounds > 7 ? "" : "none" }}>
                            <td scope="row">
                                8
                            </td>
                            <td>Round 8</td>
                            <td><input
                                type="date"
                                required
                            /></td>
                            <td><input
                                type="date"
                                required
                            /></td>
                            <td><select
                                required>
                                <option value={'DEFAULT'}>Select Round Type</option>
                                <option value="newTemplate"> + New Value</option>
                            </select></td>
                        </tr>
                        <tr style={{ display: numberOfRounds > 8 ? "" : "none" }}>
                            <td scope="row">
                                9
                            </td>
                            <td>Round 9</td>
                            <td><input
                                type="date"
                                required
                            /></td>
                            <td><input
                                type="date"
                                required
                            /></td>
                            <td><select
                                required>
                                <option value={'DEFAULT'}>Select Round Type</option>
                                <option value="newTemplate"> + New Value</option>
                            </select></td>
                        </tr>
                        <tr style={{ display: numberOfRounds > 9 ? "" : "none" }}>
                            <td scope="row">
                                10
                            </td>
                            <td>Round 10</td>
                            <td><input
                                type="date"
                                required
                            /></td>
                            <td><input
                                type="date"
                                required
                            /></td>
                            <td><select
                                required>
                                <option value={'DEFAULT'}>Select Round Type</option>
                                <option value="newTemplate"> + New Value</option>
                            </select></td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div style={{ borderTop: "1px solid black", width: "100%", marginLeft: 20, marginRight: 20 }}></div>
                <br />
                <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                    <button type="button" className="btn" style={{ paddingRight: "10px" }} onClick={() => { props.onCancel() }} ><p>Cancel</p></button>
                    <button type="submit" className="btn"><p>Share</p></button>
                </div>
                <br />
            </form>
            <br />
        </div>
    );
};

export default ShareInterviewRounds;

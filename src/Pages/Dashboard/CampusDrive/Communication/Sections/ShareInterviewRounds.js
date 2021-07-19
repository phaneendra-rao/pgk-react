import React, { useState, useEffect } from "react";
import { TextField } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { actionGetCampusDriveDefineJobsListRequestSaga } from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import { actionPostInterviewRoundsSaga } from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/CommunicationSagaAction';
import { AddRounded } from "@material-ui/icons";

const ShareInterviewRounds = (props) => {
    const dispatch = useDispatch();
    const [jobsList, setJobsList] = useState([]);
    const initialData = {
        "cdID": props.jobId,
        "noOfRounds": 1,
        "jobID": props.campusDriveId,
        "interviewRoundID": 0,
        "round1": "Round 1",
        "round1StartDate": "0001-01-01T00:00:00Z",
        "round1EndDate": "0001-01-01T00:00:00Z",
        "round1Type": "",
        "round2": "",
        "round2StartDate": "0001-01-01T00:00:00Z",
        "round2EndDate": "0001-01-01T00:00:00Z",
        "round2Type": "",
        "round3": "",
        "round3StartDate": "0001-01-01T00:00:00Z",
        "round3EndDate": "0001-01-01T00:00:00Z",
        "round3Type": "",
        "round4": "",
        "round4StartDate": "0001-01-01T00:00:00Z",
        "round4EndDate": "0001-01-01T00:00:00Z",
        "round4Type": "",
        "round5": "",
        "round5StartDate": "0001-01-01T00:00:00Z",
        "round5EndDate": "0001-01-01T00:00:00Z",
        "round5Type": "",
        "round6": "",
        "round6StartDate": "0001-01-01T00:00:00Z",
        "round6EndDate": "0001-01-01T00:00:00Z",
        "round6Type": "",
        "round7": "",
        "round7StartDate": "0001-01-01T00:00:00Z",
        "round7EndDate": "0001-01-01T00:00:00Z",
        "round7Type": "",
        "round8": "",
        "round8StartDate": "0001-01-01T00:00:00Z",
        "round8EndDate": "0001-01-01T00:00:00Z",
        "round8Type": "",
        "round9": "",
        "round9StartDate": "0001-01-01T00:00:00Z",
        "round9EndDate": "0001-01-01T00:00:00Z",
        "round9Type": "",
        "round10": "",
        "round10StartDate": "0001-01-01T00:00:00Z",
        "round10EndDate": "0001-01-01T00:00:00Z",
        "round10Type": ""
    };

    const [addRounds, setAddRounds] = useState(initialData);

    const AddRound = () => {
        if (addRounds.noOfRounds == 1) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 2,
            }));
        }
        else if (addRounds.noOfRounds == 2) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 3,
            }));
        }
        else if (addRounds.noOfRounds == 3) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 4,
            }));
        }
        else if (addRounds.noOfRounds == 4) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 5,
            }));
        }
        else if (addRounds.noOfRounds == 5) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 6,
            }));
        }
        else if (addRounds.noOfRounds == 6) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 7,
            }));
        }
        else if (addRounds.noOfRounds == 7) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 8,
            }));
        }
        else if (addRounds.noOfRounds == 8) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 9,
            }));
        }
        else if (addRounds.noOfRounds == 9) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                noOfRounds: 10,
            }));
        }
    }

    const onChange = (event) => {
        let { name, value } = event.target;
        setAddRounds((prevOtherInfo) => ({
            ...prevOtherInfo,
            [name]: value,
        }));
        if (name.includes("2")) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                round2: "Round 2",
            }));
            if (name.includes("StartDate")) {
                setAddRounds((prevOtherInfo) => ({
                    ...prevOtherInfo,
                    round2EndDate: "",
                }));
            }
        }
        else if (name.includes("3")) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                round3: "Round 3",
            }));
            if (name.includes("StartDate")) {
                setAddRounds((prevOtherInfo) => ({
                    ...prevOtherInfo,
                    round3EndDate: "",
                }));
            }
        }
        else if (name.includes("4")) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                round4: "Round 4",
            }));
            if (name.includes("StartDate")) {
                setAddRounds((prevOtherInfo) => ({
                    ...prevOtherInfo,
                    round4EndDate: "",
                }));
            }
        }
        else if (name.includes("5")) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                round5: "Round 5",
            }));
            if (name.includes("StartDate")) {
                setAddRounds((prevOtherInfo) => ({
                    ...prevOtherInfo,
                    round5EndDate: "",
                }));
            }
        }
        else if (name.includes("6")) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                round6: "Round 6",
            }));
            if (name.includes("StartDate")) {
                setAddRounds((prevOtherInfo) => ({
                    ...prevOtherInfo,
                    round6EndDate: "",
                }));
            }
        }
        else if (name.includes("7")) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                round7: "Round 7",
            }));
            if (name.includes("StartDate")) {
                setAddRounds((prevOtherInfo) => ({
                    ...prevOtherInfo,
                    round7EndDate: "",
                }));
            }
        }
        else if (name.includes("8")) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                round8: "Round 8",
            }));
            if (name.includes("StartDate")) {
                setAddRounds((prevOtherInfo) => ({
                    ...prevOtherInfo,
                    round8EndDate: "",
                }));
            }
        }
        else if (name.includes("9")) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                round9: "Round 9",
            }));
            if (name.includes("StartDate")) {
                setAddRounds((prevOtherInfo) => ({
                    ...prevOtherInfo,
                    round9EndDate: "",
                }));
            }
        }
        else if (name.includes("10")) {
            setAddRounds((prevOtherInfo) => ({
                ...prevOtherInfo,
                round10: "Round 10",
            }));
            if (name.includes("StartDate")) {
                setAddRounds((prevOtherInfo) => ({
                    ...prevOtherInfo,
                    round10EndDate: "",
                }));
            }
        }
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(addRounds);
        const model = {
            ...addRounds
        }

        // dispatch(actionPostInterviewRoundsSaga({
        //     apiPayloadRequest: model,
        //     params: "pgk",
        //     callback: onSuccess
        // }));
        onSuccess();
    }

    const onSuccess = () => {
        props.onSuccess();
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
            <form onSubmit={onSubmit}>
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
                                min={addRounds.round1StartDate}
                                required
                            /></td>
                            <td><select
                                required
                                name="round1Type"
                                onChange={onChange}
                            >
                                <option value="">Select Round Type</option>
                                <option value="Written Test"> Written Test </option>
                                <option value="Coding"> Coding </option>
                                <option value="Personal Interview"> Personal Interview </option>
                            </select></td>
                        </tr>
                        <tr style={{ display: addRounds.noOfRounds > 1 ? "" : "none" }}>
                            <td scope="row">
                                2
                            </td>
                            <td>Round 2</td>
                            <td><input
                                name="round2StartDate"
                                onChange={onChange}
                                type="date"
                                required={addRounds.noOfRounds > 1 ? true : false}
                            /></td>
                            <td><input
                                name="round2EndDate"
                                onChange={onChange}
                                type="date"
                                min={addRounds.round2StartDate}
                                required={addRounds.noOfRounds > 1 ? true : false}
                            /></td>
                            <td><select
                                name="round2Type"
                                onChange={onChange}
                                required={addRounds.noOfRounds > 1 ? true : false}>
                                <option value="">Select Round Type</option>
                                <option value="Written Test"> Written Test </option>
                                <option value="Coding"> Coding </option>
                                <option value="Personal Interview"> Personal Interview </option>
                            </select></td>
                        </tr>

                        <tr style={{ display: addRounds.noOfRounds > 2 ? "" : "none" }}>
                            <td scope="row">
                                3
                            </td>
                            <td>Round 3</td>
                            <td><input
                                name="round3StartDate"
                                onChange={onChange}
                                type="date"
                                required={addRounds.noOfRounds > 2 ? true : false}
                            /></td>
                            <td><input
                                name="round3EndDate"
                                onChange={onChange}
                                type="date"
                                min={addRounds.round3StartDate}
                                required={addRounds.noOfRounds > 2 ? true : false}
                            /></td>
                            <td><select
                                name="round3Type"
                                onChange={onChange}
                                required={addRounds.noOfRounds > 2 ? true : false}>
                                <option value="">Select Round Type</option>
                                <option value="Written Test"> Written Test </option>
                                <option value="Coding"> Coding </option>
                                <option value="Personal Interview"> Personal Interview </option>
                            </select></td>
                        </tr>

                        <tr style={{ display: addRounds.noOfRounds > 3 ? "" : "none" }}>
                            <td scope="row">
                                4
                            </td>
                            <td>Round 4</td>
                            <td><input
                                name="round4StartDate"
                                onChange={onChange}
                                type="date"
                                required={addRounds.noOfRounds > 3 ? true : false}
                            /></td>
                            <td><input
                                name="round4EndDate"
                                onChange={onChange}
                                type="date"
                                min={addRounds.round4StartDate}
                                required={addRounds.noOfRounds > 3 ? true : false}
                            /></td>
                            <td><select
                                name="round4Type"
                                onChange={onChange}
                                type="date"
                                required={addRounds.noOfRounds > 3 ? true : false}>
                                <option value="">Select Round Type</option>
                                <option value="Written Test"> Written Test </option>
                                <option value="Coding"> Coding </option>
                                <option value="Personal Interview"> Personal Interview </option>
                            </select></td>
                        </tr>

                        <tr style={{ display: addRounds.noOfRounds > 4 ? "" : "none" }}>
                            <td scope="row">
                                5
                            </td>
                            <td>Round 5</td>
                            <td><input
                                name="round5StartDate"
                                onChange={onChange}
                                type="date"
                                required={addRounds.noOfRounds > 4 ? true : false}
                            /></td>
                            <td><input
                                name="round5EndDate"
                                onChange={onChange}
                                type="date"
                                min={addRounds.round5StartDate}
                                required={addRounds.noOfRounds > 4 ? true : false}
                            /></td>
                            <td><select
                                name="round5Type"
                                onChange={onChange}
                                required={addRounds.noOfRounds > 4 ? true : false}>
                                <option value="">Select Round Type</option>
                                <option value="Written Test"> Written Test </option>
                                <option value="Coding"> Coding </option>
                                <option value="Personal Interview"> Personal Interview </option>
                            </select></td>
                        </tr>

                        <tr style={{ display: addRounds.noOfRounds > 5 ? "" : "none" }}>
                            <td scope="row">
                                6
                            </td>
                            <td>Round 6</td>
                            <td><input
                                name="round6StartDate"
                                onChange={onChange}
                                type="date"
                                required={addRounds.noOfRounds > 5 ? true : false}
                            /></td>
                            <td><input
                                name="round6EndDate"
                                onChange={onChange}
                                type="date"
                                min={addRounds.round6StartDate}
                                required={addRounds.noOfRounds > 5 ? true : false}
                            /></td>
                            <td><select
                                name="round6Type"
                                onChange={onChange}
                                required={addRounds.noOfRounds > 5 ? true : false}>
                                <option value="">Select Round Type</option>
                                <option value="Written Test"> Written Test </option>
                                <option value="Coding"> Coding </option>
                                <option value="Personal Interview"> Personal Interview </option>
                            </select></td>
                        </tr>
                        <tr style={{ display: addRounds.noOfRounds > 6 ? "" : "none" }}>
                            <td scope="row">
                                7
                            </td>
                            <td>Round 7</td>
                            <td><input
                                name="round7StartDate"
                                onChange={onChange}
                                type="date"
                                required={addRounds.noOfRounds > 6 ? true : false}
                            /></td>
                            <td><input
                                name="round7EndDate"
                                onChange={onChange}
                                type="date"
                                min={addRounds.round7StartDate}
                                required={addRounds.noOfRounds > 6 ? true : false}
                            /></td>
                            <td><select
                                name="round7Type"
                                onChange={onChange}
                                required={addRounds.noOfRounds > 6 ? true : false}>
                                <option value="">Select Round Type</option>
                                <option value="Written Test"> Written Test </option>
                                <option value="Coding"> Coding </option>
                                <option value="Personal Interview"> Personal Interview </option>
                            </select></td>
                        </tr>
                        <tr style={{ display: addRounds.noOfRounds > 7 ? "" : "none" }}>
                            <td scope="row">
                                8
                            </td>
                            <td>Round 8</td>
                            <td><input
                                name="round8StartDate"
                                onChange={onChange}
                                type="date"
                                required={addRounds.noOfRounds > 7 ? true : false}
                            /></td>
                            <td><input
                                name="round8EndDate"
                                onChange={onChange}
                                type="date"
                                min={addRounds.round8StartDate}
                                required={addRounds.noOfRounds > 7 ? true : false}
                            /></td>
                            <td><select
                                name="round8Type"
                                onChange={onChange}
                                required={addRounds.noOfRounds > 7 ? true : false}>
                                <option value="">Select Round Type</option>
                                <option value="Written Test"> Written Test </option>
                                <option value="Coding"> Coding </option>
                                <option value="Personal Interview"> Personal Interview </option>
                            </select></td>
                        </tr>
                        <tr style={{ display: addRounds.noOfRounds > 8 ? "" : "none" }}>
                            <td scope="row">
                                9
                            </td>
                            <td>Round 9</td>
                            <td><input
                                name="round9StartDate"
                                onChange={onChange}
                                type="date"
                                required={addRounds.noOfRounds > 8 ? true : false}
                            /></td>
                            <td><input
                                name="round9EndDate"
                                onChange={onChange}
                                min={addRounds.round9StartDate}
                                type="date"
                                required={addRounds.noOfRounds > 8 ? true : false}
                            /></td>
                            <td><select
                                name="round9Type"
                                onChange={onChange}
                                required={addRounds.noOfRounds > 8 ? true : false}>
                                <option value="">Select Round Type</option>
                                <option value="Written Test"> Written Test </option>
                                <option value="Coding"> Coding </option>
                                <option value="Personal Interview"> Personal Interview </option>
                            </select></td>
                        </tr>
                        <tr style={{ display: addRounds.noOfRounds > 9 ? "" : "none" }}>
                            <td scope="row">
                                10
                            </td>
                            <td>Round 10</td>
                            <td><input
                                name="round10StartDate"
                                onChange={onChange}
                                type="date"
                                required={addRounds.noOfRounds > 9 ? true : false}
                            /></td>
                            <td><input
                                name="round10EndDate"
                                onChange={onChange}
                                type="date"
                                min={addRounds.round10StartDate}
                                required={addRounds.noOfRounds > 9 ? true : false}
                            /></td>
                            <td><select
                                name="round10Type"
                                onChange={onChange}
                                required={addRounds.noOfRounds > 9 ? true : false}>
                                <option value="">Select Round Type</option>
                                <option value="Written Test"> Written Test </option>
                                <option value="Coding"> Coding </option>
                                <option value="Personal Interview"> Personal Interview </option>
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

import React, { useState, useEffect } from "react";
import { TextField } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { actionGetCampusDriveDefineJobsListRequestSaga } from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import { actionGetInterviewRoundsRequestSaga } from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/CampusInterviewSagaAction';
import {
    actionShareInterviewRoundsSaga,
    actionGetCampusDriveEmailTemplatesListRequestSaga
} from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/CommunicationSagaAction';
import { Modal, ModalBody } from 'reactstrap';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import { AddRounded } from "@material-ui/icons";

const ShareInterviewRounds = (props) => {
    const dispatch = useDispatch();
    const [jobsList, setJobsList] = useState([]);
    const [selectedJobID, setSelectedJobID] = useState("");
    const [selectedJobName, setSelectedJobName] = useState("");
    const [enableSubmitButton, setEnableSubmitButton] = useState(false);
    const [enableSuccessModal, setEnableSuccessModal] = useState(false);
    const profileInfo = useSelector(state => state.DashboardReducer.profileInfo);
    const [selectedEmailTemplateName, setSelectedEmailTemplateName] = useState("");

    const initialData = {
        "cdID": props.campusDriveId,
        "noOfRounds": 0,
        "jobID": props.jobId,
        "interviewRoundID": 0,
        "shareDetailsFlag": false,
        "stakeholderID": profileInfo.stakeholderID,
        "emailTemplateID": "",
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
    const [emailTemplateErr, setEmailTemplateErr] = useState("");
    const [allEmailTemplates, setAllEmailTemplates] = useState({});
    const getAllEmailTemplates = (data) => {
        setAddRounds((prevOtherInfo) => ({
            ...prevOtherInfo,
            stakeholderID: profileInfo.stakeholderID,
        }));
        setAllEmailTemplates(data);
    }

    const getEmailTemplateAvailable = () => {
        const model =
        {
            campusDriveID: props.campusDriveId
        };
        dispatch(actionGetCampusDriveEmailTemplatesListRequestSaga({ apiPayloadRequest: model, callback: getAllEmailTemplates }));
    }

    function getEmailTemplateName(templateId) {
        if (allEmailTemplates.length > 0) {
            allEmailTemplates.map((email) => {
                if (templateId == email.emailTemplateID) {
                    return email.emailTemplateName;
                }
            });
        }
    }

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
        else if (name === "emailTemplateID") {
            allEmailTemplates.map((email) => {
                if (value == email.emailTemplateID) {
                    setSelectedEmailTemplateName(email.emailTemplateName);
                }
            });
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
        const model = {
            ...addRounds
        }

        dispatch(actionShareInterviewRoundsSaga({
            apiPayloadRequest: model,
            callback: onSuccess
        }));
        // onSuccess();
    }

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

    function getFormattedDate(date) {
        var d = new Date(date);
        var monthPrefix = "";
        var datePrefix = "";
        if (d.getMonth() < 10) {
            monthPrefix = "0"
        }
        if (d.getDate() < 10) {
            datePrefix = "0"
        }
        return d.getFullYear() + '-' + monthPrefix + d.getMonth() + '-' + datePrefix + d.getDate();
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
        setAddRounds(data);

    }

    const onSuccess = () => {
        toggleSuccessModal();
        getinteviewRoundsInformation(addRounds.jobID);
    }

    const getJobData = (data) => {
        setJobsList(data);
    }

    const toggleSuccessModal = () => {
        setEnableSuccessModal(!enableSuccessModal);
    }

    useEffect(() => {
        getEmailTemplateAvailable();
        dispatch(actionGetCampusDriveDefineJobsListRequestSaga({
            campusDriveId: props?.campusDriveId,
            callback: getJobData
        }));

    }, []);

    return (
        <>
            <div className="bgWhite h-full">
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                        Share Interview Round Details
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
                <form onSubmit={onSubmit}>
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
                            <tr style={{ display: addRounds.noOfRounds > 0 ? "" : "none" }}>
                                <td scope="row">
                                    1
                                </td>
                                <td>Round 1</td>
                                <td>
                                    {
                                        getFormattedDate(addRounds.round1StartDate)
                                    }
                                </td>
                                <td> {
                                    getFormattedDate(addRounds.round1EndDate)
                                }</td>
                                <td>{addRounds.round1Type}</td>
                            </tr>
                            <tr style={{ display: addRounds.noOfRounds > 1 ? "" : "none" }}>
                                <td scope="row">
                                    2
                                </td>
                                <td>Round 2</td>
                                <td>
                                    {
                                        getFormattedDate(addRounds.round2StartDate)
                                    }
                                </td>
                                <td> {
                                    getFormattedDate(addRounds.round2EndDate)
                                }</td>
                                <td>{addRounds.round2Type}</td>
                            </tr>

                            <tr style={{ display: addRounds.noOfRounds > 2 ? "" : "none" }}>
                                <td scope="row">
                                    3
                                </td>
                                <td>Round 3</td>
                                <td>
                                    {
                                        getFormattedDate(addRounds.round3StartDate)
                                    }
                                </td>
                                <td> {
                                    getFormattedDate(addRounds.round3EndDate)
                                }</td>
                                <td>{addRounds.round3Type}</td>
                            </tr>

                            <tr style={{ display: addRounds.noOfRounds > 3 ? "" : "none" }}>
                                <td scope="row">
                                    4
                                </td>
                                <td>Round 4</td>
                                <td>
                                    {
                                        getFormattedDate(addRounds.round4StartDate)
                                    }
                                </td>
                                <td> {
                                    getFormattedDate(addRounds.round4EndDate)
                                }</td>
                                <td>{addRounds.round4Type}</td>
                            </tr>

                            <tr style={{ display: addRounds.noOfRounds > 4 ? "" : "none" }}>
                                <td scope="row">
                                    5
                                </td>
                                <td>Round 5</td>
                                <td>
                                    {
                                        getFormattedDate(addRounds.round5StartDate)
                                    }
                                </td>
                                <td> {
                                    getFormattedDate(addRounds.round5EndDate)
                                }</td>
                                <td>{addRounds.round5Type}</td>
                            </tr>

                            <tr style={{ display: addRounds.noOfRounds > 5 ? "" : "none" }}>
                                <td scope="row">
                                    6
                                </td>
                                <td>Round 6</td>
                                <td>
                                    {
                                        getFormattedDate(addRounds.round6StartDate)
                                    }
                                </td>
                                <td> {
                                    getFormattedDate(addRounds.round6EndDate)
                                }</td>
                                <td>{addRounds.round6Type}</td>
                            </tr>
                            <tr style={{ display: addRounds.noOfRounds > 6 ? "" : "none" }}>
                                <td scope="row">
                                    7
                                </td>
                                <td>Round 7</td>
                                <td>
                                    {
                                        getFormattedDate(addRounds.round7StartDate)
                                    }
                                </td>
                                <td> {
                                    getFormattedDate(addRounds.round7EndDate)
                                }</td>
                                <td>{addRounds.round7Type}</td>
                            </tr>
                            <tr style={{ display: addRounds.noOfRounds > 7 ? "" : "none" }}>
                                <td scope="row">
                                    8
                                </td>
                                <td>Round 8</td>
                                <td>
                                    {
                                        getFormattedDate(addRounds.round8StartDate)
                                    }
                                </td>
                                <td> {
                                    getFormattedDate(addRounds.round8EndDate)
                                }</td>
                                <td>{addRounds.round8Type}</td>
                            </tr>
                            <tr style={{ display: addRounds.noOfRounds > 8 ? "" : "none" }}>
                                <td scope="row">
                                    9
                                </td>
                                <td>Round 9</td>
                                <td>
                                    {
                                        getFormattedDate(addRounds.round9StartDate)
                                    }
                                </td>
                                <td> {
                                    getFormattedDate(addRounds.round9EndDate)
                                }</td>
                                <td>{addRounds.round9Type}</td>
                            </tr>
                            <tr style={{ display: addRounds.noOfRounds > 9 ? "" : "none" }}>
                                <td scope="row">
                                    10
                                </td>
                                <td>Round 10</td>
                                <td>
                                    {
                                        getFormattedDate(addRounds.round10StartDate)
                                    }
                                </td>
                                <td> {
                                    getFormattedDate(addRounds.round10EndDate)
                                }</td>
                                <td>{addRounds.round10Type}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br />
                    <div style={{ borderTop: "1px solid black", width: "100%", marginLeft: 20, marginRight: 20 }}></div>
                    <br />
                    <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                        <div className="d-attach" style={{ maxWidth: "95%" }}>
                            <p style={{ paddingLeft: "150px", fontSize: "18px", fontFamily: "Poppins-Regular", display: "block" }}>
                                {
                                    selectedEmailTemplateName
                                }
                            </p>
                            <p style={{ position: "absolute", top: "40px", fontSize: "18px", fontFamily: "Poppins-Regular", display: "block", color: "red" }}>{emailTemplateErr}</p>
                            <label htmlFor="EmailTemplate" className="d-label" style={{ left: "-1px" }}>
                                <i className="fas fa-envelope mr-2"></i> Email Template
                            </label>
                            <select
                                name="emailTemplateID"
                                class="d-inp"
                                id="inputGroupSelect01"
                                onChange={onChange}
                                required={true}>
                                <option selected>Choose...</option>
                                {
                                    allEmailTemplates?.length > 0 ?
                                        <>
                                            {
                                                allEmailTemplates?.map((email) => (
                                                    <option value={email.emailTemplateID}
                                                    // selected={inductionInfo.emailTemplateID === email.emailTemplateID ? true : false}
                                                    >{email.emailTemplateName}</option>
                                                ))
                                            }
                                        </>
                                        :
                                        <>
                                        </>
                                }
                            </select>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                        <button type="submit" className="btn" disabled={addRounds.shareDetailsFlag}><p>Share</p></button>
                    </div>
                    <br />
                </form>
                <br />
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
                                            <i className="fa fa-envelope fa-4x" style={{ marginTop: "10px" }} />
                                        </div>
                                    </div>
                                    <p style={{ textAlign: "center" }} className="paragraph">Job Interview Round Information </p>
                                    <p style={{ textAlign: "center" }} className="paragraph2">shared successfully</p>
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

export default ShareInterviewRounds;

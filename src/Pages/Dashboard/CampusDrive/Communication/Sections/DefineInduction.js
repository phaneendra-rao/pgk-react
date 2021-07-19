import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { FormControl, Grid, TextField } from '@material-ui/core';
import { Modal, ModalBody } from 'reactstrap';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import {
    actionGetCampusDriveEmailTemplatesListRequestSaga,
    actionGetInductionInfoRequestSaga
} from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/CommunicationSagaAction'

const DefineInduction = () => {

    const initialData = {
        link: "",
        date: "",
        time: "",
        otherInfo: "",
        file: "",
        fileName: "",
        emailTemplate: "",
        emailTemplateId: ""
    };
    const dispatch = useDispatch();

    const [allEmailTemplates, setAllEmailTemplates] = useState({});
    const [enableSuccessModal, setEnableSuccessModal] = useState(false);
    const [inductionInfo, setInductionInfo] = useState(initialData);

    const getAllEmailTemplates = (data) => {
        setAllEmailTemplates(data);
    }

    const getInductionInformation = (data) => {
        if (data) {
            setInductionInfo(data);
        }
        else {
            setInductionInfo(initialData);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInductionInfo((prevOtherInfo) => ({
            ...prevOtherInfo,
            [name]: value,
        }));
    }

    const handleSubmit = () => {

        onSuccess();
    }

    const toggleSuccessModal = () => {
        toggleSuccessModal(!enableSuccessModal);
    }

    const onSuccess = () => {
        toggleSuccessModal();
    }

    const getEmailTemplateAvailable = () => {
        dispatch(actionGetCampusDriveEmailTemplatesListRequestSaga({ callback: getAllEmailTemplates }));
    }

    const getAvilableInductionInformation = () => {
        //dispatch(actionGetInductionInfoRequestSaga({ callback: getInductionInformation }));
        getInductionInformation();
    }

    useEffect(() => {
        getEmailTemplateAvailable();
        getAvilableInductionInformation();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="container" >
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                        Pre-Campus Induction
                    </p>
                </div>
                <br />
                <div style={{ textAlign: "center", backgroundColor: "gray" }}>
                    <div className="card" >
                        <div className="card-header" style={{ textAlign: "center", background: "#253AA3", color: "white" }}>
                            Define Induction
                        </div>
                        <div className="card-body">
                            <Grid container item spacing={3}>
                                <Col xs={12}>
                                    <FormControl className="largeinput" variant="outlined" style={{ width: "100%" }} >
                                        <TextField
                                            label="Link"
                                            type="text"
                                            name="link"
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                                style: { fontFamily: "Poppins-Regular", display: "block" }
                                            }}
                                            inputProps={{
                                                readOnly: true,
                                                style: { fontFamily: "Poppins-Regular", display: "block" }
                                            }}
                                            required={true}
                                            disabled={inductionInfo.link ? true : false}
                                            variant="outlined"
                                            margin="dense"
                                            variant="outlined"
                                        />
                                    </FormControl>
                                </Col>
                                <Col xs={6}>
                                    <FormControl className="largeinput" variant="outlined" style={{ width: "100%" }}>
                                        <TextField
                                            label="Date"
                                            type="Date"
                                            name="date"
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                                style: { fontFamily: "Poppins-Regular", display: "block" }
                                            }}
                                            inputProps={{
                                                readOnly: true,
                                                style: { fontFamily: "Poppins-Regular", display: "block" }
                                            }}
                                            required={true}
                                            disabled={inductionInfo.link ? true : false}
                                            variant="outlined"
                                            margin="dense"
                                            variant="outlined"
                                        />
                                    </FormControl>
                                </Col>
                                <Col xs={6}>
                                    <FormControl className="largeinput" variant="outlined" style={{ width: "100%" }}>
                                        <TextField
                                            label="Time"
                                            type="Time"
                                            name="time"
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                                style: { fontFamily: "Poppins-Regular", display: "block" }
                                            }}
                                            inputProps={{
                                                readOnly: true,
                                                style: { fontFamily: "Poppins-Regular", display: "block" }
                                            }}
                                            required={true}
                                            disabled={inductionInfo.time ? true : false}
                                            variant="outlined"
                                            margin="dense"
                                        />
                                    </FormControl>
                                </Col>
                                <Col xs={12} style={{ paddingBottom: "10px" }}>
                                    <FormControl className="largeinput" variant="outlined" style={{ width: "100%" }} >
                                        <TextField
                                            label="Other Information"
                                            type="text"
                                            name="otherInfo"
                                            onChange={handleChange}
                                            InputLabelProps={{
                                                shrink: true,
                                                style: { fontFamily: "Poppins-Regular", display: "block" }
                                            }}
                                            inputProps={{
                                                readOnly: true,
                                                style: { fontFamily: "Poppins-Regular", display: "block" }
                                            }}
                                            disabled={inductionInfo.otherInfo ? true : false}
                                            variant="outlined"
                                            margin="dense"
                                            variant="outlined"
                                        />
                                    </FormControl>
                                </Col>

                                <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                                    <div className="d-attach" style={{ maxWidth: "95%" }}>
                                        <p className="float-left" style={{ fontSize: "18px", fontFamily: "Poppins-Regular", display: "block" }}>Sample File Name</p>
                                        <input
                                            type="file"
                                            className="d-inp"
                                            accept=".pdf"
                                            name="file"
                                            id="accredationfile"
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="accredationfile" className="d-label">
                                            <i className="fas fa-paperclip mr-2"></i> Attach File
                                        </label>
                                    </div>
                                </div>
                                <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                                    <div className="d-attach" style={{ maxWidth: "95%" }}>
                                        <label htmlFor="EmailTemplate" className="d-label" style={{ left: "-1px" }}>
                                            <i className="fas fa-envelope mr-2"></i> Email Template
                                        </label>
                                        <select class="d-inp" id="inputGroupSelect01"
                                            onChange={handleChange}
                                            required>
                                            <option selected>Choose...</option>
                                            <option value="newTemplate"> + Add New Email Template</option>
                                        </select>
                                    </div>
                                </div>
                            </Grid>
                        </div>
                        <div className="card-footer">
                            <button className="btn" onClick={handleSubmit}>Save</button>
                        </div>
                    </div>
                </div>
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
                                    <p style={{ textAlign: "center" }} className="paragraph">Pre-Induction</p>
                                    <p style={{ textAlign: "center" }} className="paragraph2">sent successfully</p>
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
}

export default DefineInduction
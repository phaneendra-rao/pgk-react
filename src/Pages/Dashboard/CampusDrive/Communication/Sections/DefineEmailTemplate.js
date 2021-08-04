import React, { useState, useEffect, useRef } from "react";
import { FormControl, Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody } from 'reactstrap'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import {
    actionGetCampusDriveEmailTemplatesListRequestSaga,
    actionPostNewEmailTemplateRequestSaga,
    actionGetEmailTemplateInfoRequestSaga,
    actionPatchEmailTemplateInfoRequestSaga,
    actionDeleteEmailTemplateInfoRequestSaga
} from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/CommunicationSagaAction';

import CreateEmailTemplate from './CreateEmailTemplate';

const DefineEmailTemplate = (props) => {
    const [allEmailTemplates, setAllEmailTemplates] = useState({});
    const [creatEmailTemplate, setCreateEmailTemplate] = useState(false);
    const [enableSuccessModal, setEnableSuccessModal] = useState(false);
    const [deleteEmailTemplateId, setDeleteEmailTemplateId] = useState("");
    const [enableDeleteConfirmationModal, setEnableDeleteConfirmationModal] = useState(false);
    const [enableDeleteSuccessModal, setEnableDeleteSuccessModal] = useState(false);
    const dispatch = useDispatch();
    const initialData = {
        "cdID": props.campusDriveId,
        "emailTemplateID": 0,
        "emailTemplateName": "",
        "emailSubject": "",
        "emailBody": "",
        "attachFileName": "",
        "attachFile": ""
    };

    const toggleSuccessModal = () => {
        setEnableSuccessModal(false);
        setCreateEmailTemplate(false);
    }

    const [addEmailTemplate, setAddEmailTemplate] = useState(initialData);

    const getAllEmailTemplates = (data) => {
        setAllEmailTemplates(data);
    }

    const onCreateEmailTemplate = () => {
        setCreateEmailTemplate(true);
    }

    const onCancelEmailTemplate = () => {
        setCreateEmailTemplate(false);
    }

    const onSuccess = () => {
        setEnableSuccessModal(!enableSuccessModal);
    }

    const getEmailTemplateAvailable = () => {
        const model =
        {
            campusDriveID: props.campusDriveId
        };
        dispatch(actionGetCampusDriveEmailTemplatesListRequestSaga({ apiPayloadRequest: model, callback: getAllEmailTemplates }));
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAddEmailTemplate((prevOtherInfo) => ({
            ...prevOtherInfo,
            [name]: value,
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const model = {
            ...addEmailTemplate
        }
        if (addEmailTemplate?.emailTemplateID > 0) {
            updateTemplate(model);
        }
        else {
            addTemplate(model);
        }
        //onSuccess();        
    }

    const updateTemplate = (model) => {
        dispatch(actionPatchEmailTemplateInfoRequestSaga({ apiPayloadRequest: model, callback: addEmailTemplateResp }));
    }

    const addTemplate = (model) => {
        dispatch(actionPostNewEmailTemplateRequestSaga({ apiPayloadRequest: model, callback: addEmailTemplateResp }));
    }

    const addEmailTemplateResp = () => {
        onSuccess();
        getEmailTemplateAvailable();
        setAddEmailTemplate(initialData);
    }

    const onViewDetails = (emailTemplateId) => {
        const model = {
            campusDriveId: props.campusDriveId,
            emailTemplateId: emailTemplateId
        };
        dispatch(actionGetEmailTemplateInfoRequestSaga({ apiPayloadRequest: model, callback: getEmailTemplateInfo }));
    }

    const onDeleteTemplate = (emailTemplateId) => {
        setDeleteEmailTemplateId(emailTemplateId);
        toggleDeleteConfirmationModal();
    }

    const onDelete = () => {
        const model = {
            campusDriveId: props.campusDriveId,
            emailTemplateId: deleteEmailTemplateId
        }
        dispatch(actionDeleteEmailTemplateInfoRequestSaga({ apiPayloadRequest: model, callback: onSuccessfulDelete }));
    }

    const toggleDeleteConfirmationModal = () => {
        setEnableDeleteConfirmationModal(!enableDeleteConfirmationModal);
    }

    const onDeleteCancel = () => {
        toggleDeleteConfirmationModal();
    }

    const onSuccessfulDelete = () => {
        toggleDeleteConfirmationModal();
        toggleDeleteSuccessModal();
        getEmailTemplateAvailable();
    }

    const toggleDeleteSuccessModal = () => {
        //toggleDeleteConfirmationModal();
        setEnableDeleteSuccessModal(!enableDeleteSuccessModal);
    }

    const getEmailTemplateInfo = (data) => {
        setAddEmailTemplate(data[0]);
        setCreateEmailTemplate(true);
    }

    useEffect(() => {
        getEmailTemplateAvailable();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className="bgWhite h-full">
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                        Define Email Template
                    </p>
                </div>
                <br />
                {
                    creatEmailTemplate
                        ?
                        <>
                            <CreateEmailTemplate
                                handleSubmit={handleSubmit}
                                handleChange={handleChange}
                                onCancel={onCancelEmailTemplate}
                                addEmailTemplate={addEmailTemplate}
                            />
                        </>
                        :
                        <>
                            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                                <p className="heading" style={{ fontFamily: "Poppins-Regular", display: "block" }}>
                                    Existing Templates
                                </p>
                            </div>
                            <br />
                            {
                                allEmailTemplates?.length > 0 ?
                                    <>
                                        {
                                            allEmailTemplates?.map((item) => (
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
                                                                    <p className="job-label" style={{ float: "left", fontWeight: "bold", fontFamily: "Poppins-Regular" }}> Name</p>
                                                                    <br />
                                                                    <p className="job-label" style={{ float: "left", fontFamily: "Poppins-Regular" }}>{item.emailTemplateName}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <p className="job-label" style={{ float: "left", fontWeight: "bold", fontFamily: "Poppins-Regular" }}> Subject </p>
                                                            <br />
                                                            <p className="job-label" style={{ float: "left", fontFamily: "Poppins-Regular" }}>{item.emailSubject} </p>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className={'d-flex align-items-center'}>
                                                                <button
                                                                    type="button"
                                                                    className="btn d-flex justify-content-around align-items-center"
                                                                    style={{
                                                                        height: "30px",
                                                                        width: "100px",
                                                                        fontSize: ".700rem",
                                                                        marginRight: "10px",
                                                                        borderRadius: "4px",
                                                                        textTransform: "uppercase",
                                                                        fontWeight: 'bolder'
                                                                    }}
                                                                    onClick={() => { onViewDetails(item.emailTemplateID) }}
                                                                >
                                                                    <p>Details</p>
                                                                    <i className="fas fa-chevron-right"></i>
                                                                </button>
                                                                <IconButton style={{ color: 'white' }} component="span" onClick={() => { onDeleteTemplate(item.emailTemplateID) }}>
                                                                    <Close color={'primary'} />
                                                                </IconButton>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }

                                    </>
                                    :
                                    <>
                                        <div className="d-flex flex-column justify-content-start align-items-center w-full">
                                            <p className="heading" style={{ color: "#253AA3", fontFamily: "Poppins-Regular", display: "block" }}>
                                                No existing email templates available
                                            </p>
                                        </div>
                                    </>
                            }
                            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>

                            </div>
                            <br />
                            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                                <button type="button" className="btn" onClick={onCreateEmailTemplate}><p>Create Email Template</p></button>
                            </div>
                        </>
                }
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
                                    <p style={{ textAlign: "center" }} className="paragraph">Email Template</p>
                                    <p style={{ textAlign: "center" }} className="paragraph2">saved successfully</p>
                                </ModalBody>
                            </Modal>
                        </div>
                    </>
                    :
                    <>
                    </>
            }
            {
                enableDeleteSuccessModal
                    ?
                    <>
                        <div>
                            <Modal isOpen={enableDeleteSuccessModal} toggle={toggleDeleteSuccessModal}>
                                <ModalBody style={{ textAlign: "center" }} >
                                    <CancelOutlinedIcon className="cancelbtn" onClick={toggleDeleteSuccessModal} />
                                    <div className="notification-icon d-flex flex-column justify-content-center align-items-center">
                                        <div style={{ color: "#253AA3", background: "lightblue", borderRadius: "50%", width: "100px", height: "100px", textAlign: "center", display: "inline-block" }}>
                                            <i className="fa fa-envelope fa-4x" style={{ marginTop: "10px" }} />
                                        </div>
                                    </div>
                                    <p style={{ textAlign: "center" }} className="paragraph">Email Template</p>
                                    <p style={{ textAlign: "center" }} className="paragraph2">deleted successfully</p>
                                </ModalBody>
                            </Modal>
                        </div>
                    </>
                    :
                    <>
                    </>
            }
            {
                enableDeleteConfirmationModal
                    ?
                    <>
                        <div>
                            <Modal isOpen={enableDeleteConfirmationModal} toggle={toggleDeleteConfirmationModal}>
                                <ModalBody style={{ textAlign: "center" }} >
                                    <CancelOutlinedIcon className="cancelbtn" onClick={toggleDeleteConfirmationModal} />
                                    <div className="notification-icon d-flex flex-column justify-content-center align-items-center">
                                        <div style={{ color: "#253AA3", background: "lightblue", borderRadius: "50%", width: "100px", height: "100px", textAlign: "center", display: "inline-block" }}>
                                            <i className="fa fa-envelope fa-4x" style={{ marginTop: "10px" }} />
                                        </div>
                                    </div>
                                    <p style={{ textAlign: "center" }} className="paragraph">Are you sure</p>
                                    <p style={{ textAlign: "center" }} className="paragraph2">you want to delete?</p>
                                    <br />
                                    <div className="d-flex flex-row justify-content-center align-items-center job-details-form w-full"
                                        style={{ background: "white" }}>
                                        <button type="button" className="btn mr-4" onClick={() => { onDelete() }}>Yes</button>
                                        <button type="submit" className="btn" onClick={() => { onDeleteCancel() }} >No</button>
                                    </div>
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

export default DefineEmailTemplate;

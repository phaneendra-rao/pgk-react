import React, { useState, useEffect, useRef } from "react";
import { FormControl, Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalBody } from 'reactstrap'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import {
    actionGetCampusDriveEmailTemplatesListRequestSaga,
    actionPostNewEmailTemplateRequestSaga
} from '../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/CommunicationSagaAction';

import CreateEmailTemplate from './CreateEmailTemplate';

const DefineEmailTemplate = (props) => {
    const [allEmailTemplates, setAllEmailTemplates] = useState({});
    const [creatEmailTemplate, setCreateEmailTemplate] = useState(false);
    const [enableSuccessModal, setEnableSuccessModal] = useState(false);
    const dispatch = useDispatch();
    const initialData = {
        "id": "",
        "name": "",
        "subject": "",
        "body": ""
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
        dispatch(actionGetCampusDriveEmailTemplatesListRequestSaga({ callback: getAllEmailTemplates }));
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
        //addTemplate(model);
        onSuccess();
        setAddEmailTemplate(initialData);
    }

    const addTemplate = (model) => {
        dispatch(actionPostNewEmailTemplateRequestSaga({ apiPayloadRequest: model, callback: addEmailTemplateResp }));
    }

    const addEmailTemplateResp = () => {
        onSuccess();
        getEmailTemplateAvailable();
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
        </>

    );
};

export default DefineEmailTemplate;

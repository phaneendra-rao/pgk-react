import React, { useState, useEffect, useRef } from "react";
import { FormControl, Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
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

    const toggleModal = () => {
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
        addTemplate(model);
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
    );
};

export default DefineEmailTemplate;

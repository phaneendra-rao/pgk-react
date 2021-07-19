import {
    ACTION_GET_CAMPUS_DRIVE_EMAIL_TEMPLATES_LIST_REQUEST,
    ACTION_POST_CAMPUS_DRIVE_NEW_EMAIL_TEMPLATE_REQUEST,
    ACTION_GET_CAMPUS_DRIVE_INDUCTION_INFO_REQUEST
} from "../SagaActionTypes"

// GET EMAIL TEMPLATES LIST - CAMPUS DRIVE
export const actionGetCampusDriveEmailTemplatesListRequestSaga = (payload) => {
    return {
        type: ACTION_GET_CAMPUS_DRIVE_EMAIL_TEMPLATES_LIST_REQUEST,
        payload: payload
    }
}

// CREATE NEW EMAIL TEMPLATE LIST - CAMPUS DRIVE
export const actionPostNewEmailTemplateRequestSaga = (payload) => {
    return {
        type: ACTION_POST_CAMPUS_DRIVE_NEW_EMAIL_TEMPLATE_REQUEST,
        payload: payload
    }
}

// GET EXISTING INDUCTION INFO - CAMPUS DRIVE
export const actionGetInductionInfoRequestSaga = (payload) => {
    return {
        type: ACTION_GET_CAMPUS_DRIVE_INDUCTION_INFO_REQUEST,
        payload: payload
    }
}
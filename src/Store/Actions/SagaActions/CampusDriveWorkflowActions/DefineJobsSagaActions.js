import {
    ACTION_GET_CAMPUS_DRIVE_DEFINE_JOBS_LIST_REQUEST,
    ACTION_GET_CAMPUS_DRIVE_HIRING_CRITERIA_LIST_REQUEST,
    ACTION_POST_OR_PATCH_CAMPUS_DRIVE_HIRING_CRITERIA_REQUEST,
    ACTION_POST_OR_PATCH_CAMPUS_DRIVE_JOB_REQUEST,
    ACTION_DELETE_CAMPUS_DRIVE_JOB_REQUEST,
    ACTION_PUBLISH_CAMPUS_DRIVE_PUBLISH_JOBS_REQUEST,
    ACTION_GET_CAMPUS_DRIVE_STUDENTS_LIST_BY_JOB_ID_REQUEST,
    ACTION_GET_CAMPUS_DRIVE_APP_WINDOW_JOB_BY_ID_REQUEST,
    ACTION_POST_CAMPUS_DRIVE_APP_WINDOW_JOB_REQUEST,
} from "../SagaActionTypes"

// GET DEFINE JOBS LIST - CAMPUS DRIVE
export const actionGetCampusDriveDefineJobsListRequestSaga = (payload) => {
    return {
        type: ACTION_GET_CAMPUS_DRIVE_DEFINE_JOBS_LIST_REQUEST,
        payload: payload
    }
}

// GET CAMPUS DRIVE HIRING CRITERIA LIST - CAMPUS DRIVE
export const actionGetCampusDriveHiringCriteriaListRequestSaga = (payload) => {
    return {
        type: ACTION_GET_CAMPUS_DRIVE_HIRING_CRITERIA_LIST_REQUEST,
        payload: payload
    }
}

// POST / PATCH HIRING CRITERIA - CAMPUS DRIVE
export const actionPostOrPatchCampusDriveHiringCriteriaRequestSaga = (payload) => {
    return {
        type: ACTION_POST_OR_PATCH_CAMPUS_DRIVE_HIRING_CRITERIA_REQUEST,
        payload: payload
    }
}

// POST / PATCH JOB - CAMPUS DRIVE
export const actionPostOrPatchCampusDriveJobRequestSaga = (payload) => {
    return {
        type: ACTION_POST_OR_PATCH_CAMPUS_DRIVE_JOB_REQUEST,
        payload: payload
    }
}

// DELETE JOB - CAMPUS DRIVE
export const actionDeleteCampusDriveJobRequestSaga = (payload) => {
    return {
        type: ACTION_DELETE_CAMPUS_DRIVE_JOB_REQUEST,
        payload: payload
    }
}

// PUBLISH JOBS - CAMPUS DRIVE
export const actionPublishJobsCampusDriveRequestSaga = (payload) => {
    return {
        type: ACTION_PUBLISH_CAMPUS_DRIVE_PUBLISH_JOBS_REQUEST,
        payload: payload
    }
}

// GET STUDENTS LIST - CAMPUS DRIVE
export const actionGetStudentsListCampusDriveRequestSaga = (payload) => {
    return {
        type: ACTION_GET_CAMPUS_DRIVE_STUDENTS_LIST_BY_JOB_ID_REQUEST,
        payload: payload
    }
}

// GET DEFINE JOB APPLICATION WINDOW LIST - CAMPUS DRIVE
export const actionGetDefineJobApplicationWindowById = (payload) => {
    return {
        type: ACTION_GET_CAMPUS_DRIVE_APP_WINDOW_JOB_BY_ID_REQUEST,
        payload: payload
    }
}

export const actionPostDefineJobApplicationWindow = (payload) => {
    return {
        type: ACTION_POST_CAMPUS_DRIVE_APP_WINDOW_JOB_REQUEST,
        payload: payload
    }
}
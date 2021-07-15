import {
    ACTION_GET_CAMPUS_DRIVE_DEFINE_JOBS_LIST_REQUEST,
    ACTION_GET_CAMPUS_DRIVE_HIRING_CRITERIA_LIST_REQUEST,
    ACTION_POST_OR_PATCH_CAMPUS_DRIVE_HIRING_CRITERIA_REQUEST
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
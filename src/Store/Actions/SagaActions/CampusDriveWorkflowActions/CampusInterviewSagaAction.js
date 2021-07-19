import {
    ACTION_GET_CAMPUS_DRIVE_INTERVIEW_ROUNDS_REQUEST,
    ACTION_GET_CAMPUS_DRIVE_INTERVIEW_STUDENTS_LIST_REQUEST
} from "../SagaActionTypes";

// GET INTERVIEW ROUNDS - CAMPUS DRIVE
export const actionGetInterviewRoundsRequestSaga = (payload) => {
    return {
        type: ACTION_GET_CAMPUS_DRIVE_INTERVIEW_ROUNDS_REQUEST,
        payload: payload
    }
}

// GET STUDENTS LIST FOR SPECIFIC ROUND - CAMPUS DRIVE
export const actionGetStudentsListSaga = (payload) => {
    return {
        type: ACTION_GET_CAMPUS_DRIVE_INTERVIEW_STUDENTS_LIST_REQUEST,
        payload: payload
    }
}
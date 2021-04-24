import {
    ACTION_GET_CORPORATE_JOBS_BYID_REQUEST,
    ACTION_GET_CORPORATE_JOBS_REQUEST,
    ACTION_POST_CORPORATE_JOBS_REQUEST,
    ACTION_POST_CORPORATE_UPDATEJOBS_REQUEST,
    ACTION_POST_PUBLISH_CORPORATE_JOBS_REQUEST
} from "./SagaActionTypes"

export const GetJobsSagaAction = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_JOBS_REQUEST,
        payload: payload
    }
};

export const GetJobByIdSagaAction = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_JOBS_BYID_REQUEST,
        payload: payload
    }
};

export const AddJobsSagaAction = (payload) => {
    return {
        type: ACTION_POST_CORPORATE_JOBS_REQUEST,
        payload: payload
    }
};

export const EditJobsSagaAction = (payload) => {
    return {
        type: ACTION_POST_CORPORATE_UPDATEJOBS_REQUEST,
        payload: payload
    }
};

export const actionPostPublishCorporateJobsRequest = (payload) => {
    return {
        type: ACTION_POST_PUBLISH_CORPORATE_JOBS_REQUEST,
        payload: payload
    }
}
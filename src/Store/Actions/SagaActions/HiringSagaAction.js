import { ACTION_GET_CORPORATE_HIRING_REQUEST, ACTION_POST_CORPORATE_HIRING_REQUEST, ACTION_POST_PUBLISH_CORPORATE_HIRING_REQUEST } from "./SagaActionTypes"

export const HiringSagaAction = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_HIRING_REQUEST,
        payload: payload
    }
};

export const AddHiringSagaAction = (payload) => {
    return {
        type: ACTION_POST_CORPORATE_HIRING_REQUEST,
        payload: payload
    }
};

export const actionPostPublishCorporateHiringRequest = (payload) => {
    return {
        type: ACTION_POST_PUBLISH_CORPORATE_HIRING_REQUEST,
        payload: payload
    }
}
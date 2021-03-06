import { ACTION_GET_CORPORATE_PROFILE_REQUEST, ACTION_PATCH_CORPORATE_PROFILE_REQUEST, ACTION_POST_PUBLISH_CORPORATE_PROFILE_REQUEST, ACTION_GET_CORPORATE_PROFILE_RESPONSE } from './SagaActionTypes';

export const actionGetCorporateProfileSagaAction = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_PROFILE_REQUEST,
        payload: payload
    }
}

export const actionGetCorporateProfileResponse = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_PROFILE_RESPONSE,
        payload: payload
    }
}

export const actionPatchCorporateProfileSagaAction = (payload) => {
    return {
        type: ACTION_PATCH_CORPORATE_PROFILE_REQUEST,
        payload: payload
    }
}

export const actionPostPublishCorporateProfileSagaAction = (payload) => {
    return {
        type: ACTION_POST_PUBLISH_CORPORATE_PROFILE_REQUEST,
        payload: payload
    }
}
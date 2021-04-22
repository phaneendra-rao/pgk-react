import { ACTION_GET_CORPORATE_PROFILE_REQUEST, ACTION_PATCH_CORPORATE_PROFILE_REQUEST } from './SagaActionTypes';

export const actionGetCorporateProfileSagaAction = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_PROFILE_REQUEST,
        payload: payload
    }
}

export const actionPatchCorporateProfileSagaAction = (payload) => {
    return {
        type: ACTION_PATCH_CORPORATE_PROFILE_REQUEST,
        payload: payload
    }
}
import { ACTION_GET_CORPORATE_PROFILE_REQUEST } from './SagaActionTypes';

export const actionGetCorporateProfileSagaAction = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_PROFILE_REQUEST,
        payload: payload
    }
}
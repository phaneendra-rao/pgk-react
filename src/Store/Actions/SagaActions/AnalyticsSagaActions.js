import {ACTION_GET_ANALYTICS_BI_ACCESS_TOKEN_REQUEST} from './SagaActionTypes';

export const actionGetAnalyticsBiAccessTokenRequest = (payload) => {
    return {
        type: ACTION_GET_ANALYTICS_BI_ACCESS_TOKEN_REQUEST,
        payload: payload
    }
}
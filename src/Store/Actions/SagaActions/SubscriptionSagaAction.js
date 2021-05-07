import {
    ACTION_GET_CORPORATE_HISTORY_UNIVERSITY_REQUEST,
    ACTION_GET_CORPORATE_SUBSCRIBE_TOKENS_REQUEST,
    ACTION_GET_CORPORATE_SUBSCRIBE_UNIVERSITY_REQUEST,
    ACTION_GET_CORPORATE_SUBSCRIBE_UNV_INFO_REQUEST,
    ACTION_POST_CORPORATE_SUBSCRIBESEARCH_REQUEST,
    ACTION_GET_CORPORATE_UNIVERSITY_SUBSCRIPTION_HISTORY_REQUEST
} from "./SagaActionTypes";


export const SubscribeSearchSagaAction = (payload) => {
    return {
        type: ACTION_POST_CORPORATE_SUBSCRIBESEARCH_REQUEST,
        payload: payload
    }
}

export const GetUniversityInfoSagaAction = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_SUBSCRIBE_UNIVERSITY_REQUEST,
        payload: payload
    }
}

export const GetUniversityHistoryInfoSagaAction = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_HISTORY_UNIVERSITY_REQUEST,
        payload: payload
    }
}

export const GetSubscribeTokensSagaAction = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_SUBSCRIBE_TOKENS_REQUEST,
        payload: payload
    }
}

export const SubscribeUnvInfoSagaAction = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_SUBSCRIBE_UNV_INFO_REQUEST,
        payload: payload
    }
}

export const actionSagaGetCorporateUniversitySubscriptionRequest = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_UNIVERSITY_SUBSCRIPTION_HISTORY_REQUEST,
        payload: payload
    }
}
import {
    ACTION_GET_CORPORATE_HISTORY_UNIVERSITY_REQUEST,
    ACTION_GET_CORPORATE_SUBSCRIBE_UNIVERSITY_REQUEST,
    ACTION_POST_CORPORATE_SUBSCRIBESEARCH_REQUEST
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
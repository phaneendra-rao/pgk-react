import {
    ACTION_GET_CORPORATE_SUBSCRIBESEARCH_REQUEST,
    ACTION_POST_CORPORATE_SUBSCRIBESEARCH_REQUEST
} from "./SagaActionTypes";


export const SubscribeSearchSagaAction = (payload) => {
    return {
        type: ACTION_POST_CORPORATE_SUBSCRIBESEARCH_REQUEST,
        payload: payload
    }
}

// export const GetSearchDataSagaAction = (payload) => {
//     return {
//         type: ACTION_GET_CORPORATE_SUBSCRIBESEARCH_REQUEST,
//         payload: payload
//     }
// }
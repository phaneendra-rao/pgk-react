import { ACTION_GET_CORPORATE_TOKENS_REQUEST } from "./SagaActionTypes"

export const getTokensSagaAction = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_TOKENS_REQUEST,
        payload: payload,
    }
}
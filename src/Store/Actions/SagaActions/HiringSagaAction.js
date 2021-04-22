import { ACTION_GET_CORPORATE_HIRING_REQUEST, ACTION_POST_CORPORATE_HIRING_REQUEST } from "./SagaActionTypes"

export const HiringSagaAction = () => {
    return {
        type: ACTION_GET_CORPORATE_HIRING_REQUEST
    }
};

export const AddHiringSagaAction = (payload) => {
    return {
        type: ACTION_POST_CORPORATE_HIRING_REQUEST,
        payload: payload
    }
};
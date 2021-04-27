import {
    ACTION_POST_CORPORATE_SUPPORT_REQUEST
} from "./SagaActionTypes";


export const PostSupportSagaAction = (payload) => {
    return {
        type: ACTION_POST_CORPORATE_SUPPORT_REQUEST,
        payload: payload
    }
}

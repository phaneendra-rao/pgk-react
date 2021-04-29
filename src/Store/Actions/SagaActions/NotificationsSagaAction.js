import {
    ACTION_GET_CORPORATE_NOTIFICATIONS_REQUEST
} from "./SagaActionTypes";


export const GetNotificationsSagaAction = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_NOTIFICATIONS_REQUEST,
        payload: payload
    }
}

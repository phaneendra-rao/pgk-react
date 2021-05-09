import {
    ACTION_GET_CORPORATE_NOTIFICATIONS_REQUEST,
    ACTION_GET_CORPORATE_SINGLE_NOTIFICATION_REQUEST
} from "./SagaActionTypes";


export const GetNotificationsSagaAction = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_NOTIFICATIONS_REQUEST,
        payload: payload
    }
}

export const actionGetCorporateSingleNotificationRequest = (payload) => {
    return {
        type: ACTION_GET_CORPORATE_SINGLE_NOTIFICATION_REQUEST,
        payload: payload
    }
}

import { ACTION_GET_CAMPUS_DRIVE_INVITES_REQUEST, ACTION_POST_RESPOND_TO_CAMPUS_DRIVE_REQUEST_REQUEST, ACTION_GET_CAMPUS_DRIVE_ACCEPTED_INVITES_LIST_REQUEST } from "./SagaActionTypes"

export const actionGetCampusDriveInvites = (payload) => {
    return {
        type: ACTION_GET_CAMPUS_DRIVE_INVITES_REQUEST,
        payload: payload
    }
};

export const actionPostRespondToCampusDriveRequest = (payload) => {
    return {
        type: ACTION_POST_RESPOND_TO_CAMPUS_DRIVE_REQUEST_REQUEST,
        payload: payload
    }
};

export const actionGetCampusDriveAcceptedInvitesListRequest = (payload) => {
    return {
        type: ACTION_GET_CAMPUS_DRIVE_ACCEPTED_INVITES_LIST_REQUEST,
        payload: payload
    }
};
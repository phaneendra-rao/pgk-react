import { call, takeLatest, put } from 'redux-saga/effects';
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
import {
    ACTION_GET_CORPORATE_HISTORY_UNIVERSITY_REQUEST,
    ACTION_GET_CORPORATE_NOTIFICATIONS_REQUEST,
    ACTION_GET_CORPORATE_SUBSCRIBE_TOKENS_REQUEST,
    ACTION_GET_CORPORATE_SUBSCRIBE_UNIVERSITY_REQUEST,
    ACTION_GET_CORPORATE_SUBSCRIBE_UNV_INFO_REQUEST,
    ACTION_POST_CORPORATE_SUBSCRIBESEARCH_REQUEST
} from "../Actions/SagaActions/SagaActionTypes";
import { getTokensSagaAction } from '../Actions/SagaActions/DashboardSagaAction';

const getNotifications = () => {
    const URL = '/nft/10/1';
    return Axios.get(URL).then(res => res.data);
}

function* getNotificationsSaga(action) {
    try {
        const resp = yield call(getNotifications);
        action.payload.callback(resp);
    } catch (err) {
        if (err?.response) {
            toast.error(err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err?.message);
        }
    }
}

export default function* NotificationsWatcherSaga() {
    yield takeLatest(ACTION_GET_CORPORATE_NOTIFICATIONS_REQUEST, getNotificationsSaga);
}
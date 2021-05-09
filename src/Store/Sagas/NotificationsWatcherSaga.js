import { call, takeLatest, put } from 'redux-saga/effects';
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
import {
    ACTION_GET_CORPORATE_NOTIFICATIONS_REQUEST,
    ACTION_GET_CORPORATE_SINGLE_NOTIFICATION_REQUEST
} from "../Actions/SagaActions/SagaActionTypes";
import { getTokensSagaAction } from '../Actions/SagaActions/DashboardSagaAction';

import { actionUpdateGlobalLoaderSagaAction } from '../Actions/SagaActions/CommonSagaActions';

const getNotifications = () => {
    const URL = '/nft/all/10/1';
    return Axios.get(URL).then(res => res.data);
}

function* getNotificationsSaga(action) {
  yield put(actionUpdateGlobalLoaderSagaAction(true));
    
    try {
        const resp = yield call(getNotifications);
        action.payload.callback(resp);
    } catch (err) {
        if (err?.response) {
            toast.error(err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err?.message);
        }
    } finally {
      yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

export default function* NotificationsWatcherSaga() {
    yield takeLatest(ACTION_GET_CORPORATE_NOTIFICATIONS_REQUEST, getNotificationsSaga);
}
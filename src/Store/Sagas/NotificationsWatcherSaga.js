import { call, takeLatest, put } from 'redux-saga/effects';
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
import {
    ACTION_GET_CORPORATE_NOTIFICATIONS_REQUEST,
    ACTION_GET_CORPORATE_SINGLE_NOTIFICATION_REQUEST
} from "../Actions/SagaActions/SagaActionTypes";

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

const getSingleNotification = (notificationId) => {
    const URL = '/nft/nftData/'+notificationId;
    return Axios.get(URL).then(res => res.data);
}

const getNotificationViaPublishedData = (role, publishId) => {
    const URL = '/p/subData/nftData?role='+role+'&publishID='+publishId;
    return Axios.get(URL).then(res => res.data);
}

function* getCorporateSingleNotificationRequest(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));
    
    try {
        let resp;
        if(action.payload.apiPayloadRequest.type==='NOTIFICATION') {
            resp = yield call(getSingleNotification, action.payload.apiPayloadRequest.notificationId);
        } else if(action.payload.apiPayloadRequest.type==='PUBLISHED_DATA') {
            resp = yield call(getNotificationViaPublishedData, action.payload.apiPayloadRequest.role, action.payload.apiPayloadRequest.publishId);
        }

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
    yield takeLatest(ACTION_GET_CORPORATE_SINGLE_NOTIFICATION_REQUEST, getCorporateSingleNotificationRequest);
}
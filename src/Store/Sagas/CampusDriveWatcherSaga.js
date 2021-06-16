import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import Axios from '../../utils/axios';
// import { HiringSagaAction } from '../Actions/SagaActions/HiringSagaAction';
import {
    ACTION_GET_CAMPUS_DRIVE_INVITES_REQUEST,
    ACTION_POST_RESPOND_TO_CAMPUS_DRIVE_REQUEST_REQUEST
} from '../Actions/SagaActions/SagaActionTypes';
import { actionUpdateGlobalLoaderSagaAction } from '../Actions/SagaActions/CommonSagaActions';

const getHiringCriteria = () => {
    const URL = '/p/crp/hiringCriteria/all';
    return Axios.get(URL).then(res => res.data);
}

function* getHiringCriteriaSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const resp = yield call(getHiringCriteria);
        // yield put({ type: ACTION_GET_CORPORATE_HIRING_RESPONSE, payload: resp });
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


const addHiringCriteria = (payload) => {
    const URL = '/p/crp/hiringCriteria/';
    return Axios.post(URL, payload).then(resp => resp.data);
};

function* addHiringCriteriaSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const model = action.payload.apiPayloadRequest;
        let body = {
            hiringCriterias: [model]
        }
        // let formData = new FormData();
        // formData.append('hiringCriterias', JSON.stringify(model));
        const resp = yield call(addHiringCriteria, body);
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

const postRespondToCampusDriveRequest = (listOfHiringCriteria) => {
    const URL = '/s/subscribe/campusDrive/respond';
    return Axios.post(URL, listOfHiringCriteria).then(resp => resp.data);
}

function* postRespondToCampusDriveRequestRequest(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const model = action.payload.apiPayloadRequest;
        let formData = new FormData();
        for (const key in model) {
            formData.append(key, model[key]);
        }

        yield call(postRespondToCampusDriveRequest, model);
        action.payload.callback();

    } catch (err) {
        if (err.response) {
            toast.error(err?.response?.data?.errors?.length && err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err.message);
        }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

const getCampusDriveInvites = (id) => {
    const URL = '/s/campusInvites';
    return Axios.get(URL).then(resp => resp.data);
}

function* getCampusDriveInvitesRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const response = yield call(getCampusDriveInvites);

        if(action?.payload?.callback) {
            action.payload.callback(response);
        }

    } catch (err) {
        if (err.response) {
            toast.error(err?.response?.data?.errors?.length && err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err.message);
        }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

export default function* CampusDriveWatcherSaga() {
    yield takeLatest(ACTION_GET_CAMPUS_DRIVE_INVITES_REQUEST, getCampusDriveInvitesRequestSaga);
    yield takeLatest(ACTION_POST_RESPOND_TO_CAMPUS_DRIVE_REQUEST_REQUEST, postRespondToCampusDriveRequestRequest);
}

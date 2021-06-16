import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import Axios from '../../utils/axios';
// import { HiringSagaAction } from '../Actions/SagaActions/HiringSagaAction';
import {
    ACTION_GET_CAMPUS_DRIVE_INVITES_REQUEST,
    ACTION_POST_RESPOND_TO_CAMPUS_DRIVE_REQUEST_REQUEST
} from '../Actions/SagaActions/SagaActionTypes';
import { actionUpdateGlobalLoaderSagaAction } from '../Actions/SagaActions/CommonSagaActions';


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

        yield call(postRespondToCampusDriveRequest, formData);
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

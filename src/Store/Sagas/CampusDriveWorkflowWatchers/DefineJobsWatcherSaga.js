import { call, takeLatest, put } from 'redux-saga/effects';
import Axios from "../../../utils/axios";
import { toast } from "react-toastify";
import { ACTION_GET_CAMPUS_DRIVE_DEFINE_JOBS_LIST_REQUEST, ACTION_GET_CAMPUS_DRIVE_HIRING_CRITERIA_LIST_REQUEST, ACTION_POST_OR_PATCH_CAMPUS_DRIVE_HIRING_CRITERIA_REQUEST } from '../../Actions/SagaActions/SagaActionTypes';
import { actionUpdateGlobalLoaderSagaAction } from '../../Actions/SagaActions/CommonSagaActions';

// GET DEFINE JOBS - CAMPUS DRIVE
const getDefineJobsListRequest = (campusDriveId) => {
    const URL = '/cdj/job/all/'+campusDriveId;
    return Axios.get(URL).then(resp => resp.data);
}

function* getDefineJobsListRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const data = yield call(getDefineJobsListRequest, action.payload.campusDriveId);
        if(action.payload.callback && data) {
            action.payload.callback(data);
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

// GET CAMPUS DRIVE HIRING CRITERIA LIST - CAMPUS DRIVE
const getCampusDriveHiringCriteriaListRequest = (apiPayloadRequest) => {
    const URL = '/cdj/hc/all/'+apiPayloadRequest.campusDriveId;
    return Axios.get(URL).then(resp => resp.data);
}

function* getCampusDriveHiringCriteriaListRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const data = yield call(getCampusDriveHiringCriteriaListRequest, action.payload.apiPayloadRequest);
        if(action.payload.callback && data) {
            action.payload.callback(data);
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

// POST OR PATCH HIRING CRITERIA - CAMPUS DRIVE
const postOrPatchCampusDriveHiringCriteriaRequest = (apiPayloadRequest) => {
    if (apiPayloadRequest?.hiringCriteriaID) {
        const URL = '/cdj/hc';
        return Axios.patch(URL, apiPayloadRequest).then(resp => resp.data);
    } else {
        const URL = '/cdj/hc';
        return Axios.post(URL, apiPayloadRequest).then(resp => resp.data);
    }
}

function* postOrPatchCampusDriveHiringCriteriaRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const data = yield call(postOrPatchCampusDriveHiringCriteriaRequest, action.payload.apiPayloadRequest);
        if(action.payload.callback) {
            action.payload.callback(data);
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

export default function* DefineJobsWatcherSaga() {
    yield takeLatest(ACTION_GET_CAMPUS_DRIVE_DEFINE_JOBS_LIST_REQUEST, getDefineJobsListRequestSaga);
    yield takeLatest(ACTION_GET_CAMPUS_DRIVE_HIRING_CRITERIA_LIST_REQUEST, getCampusDriveHiringCriteriaListRequestSaga);
    yield takeLatest(ACTION_POST_OR_PATCH_CAMPUS_DRIVE_HIRING_CRITERIA_REQUEST, postOrPatchCampusDriveHiringCriteriaRequestSaga);
}
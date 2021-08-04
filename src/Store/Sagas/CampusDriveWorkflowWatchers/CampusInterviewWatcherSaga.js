import { call, takeLatest, put } from 'redux-saga/effects';
import Axios from "../../../utils/axios";
import { toast } from "react-toastify";
import {
    ACTION_GET_CAMPUS_DRIVE_INTERVIEW_ROUNDS_REQUEST,
    ACTION_GET_CAMPUS_DRIVE_INTERVIEW_STUDENTS_LIST_REQUEST,
    ACTION_POST_CAMPUS_DRIVE_INTERVIEW_STUDENTS_LIST_REQUEST
} from '../../Actions/SagaActions/SagaActionTypes';
import { actionUpdateGlobalLoaderSagaAction } from '../../Actions/SagaActions/CommonSagaActions';

// GET INTERVIEW ROUNDS - CAMPUS DRIVE
const getInterviewRoundsRequest = (model) => {
    const URL = '/ci/ir/rounds/' + model.campusDriveID + "/" + model.jobID;
    return Axios.get(URL, model).then(resp => resp.data);
}

function* getInterviewRoundsRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));
    try {
        const model = action.payload.apiPayloadRequest;
        console.log(model);
        const data = yield call(getInterviewRoundsRequest, model);
        action.payload.callback(data);
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

// GET STUDENTS LIST FOR SPECIFIC ROUND - CAMPUS DRIVE
const getStudentsListRequest = (model) => {
    const URL = '/ci/ir/studentsList?' + model;
    return Axios.get(URL).then(resp => resp.data);
}

function* getStudentsListRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));
    try {
        const model = action.payload.apiPayloadRequest;
        const data = yield call(getStudentsListRequest, model);
        action.payload.callback(data);
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

// POST STUDENTS LIST FOR SPECIFIC ROUND - CAMPUS DRIVE
const postStudentsListRequest = (model) => {
    const URL = '/ci/ir/captureResults';
    return Axios.post(URL, model).then(resp => resp.data);
}

function* postStudentsListRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));
    try {
        const model = action.payload.apiPayloadRequest;
        const data = yield call(postStudentsListRequest, model);
        action.payload.callback(data);
    } catch (err) {
        if (err.response) {
            toast.error(err?.response?.data?.errors?.length && err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err);
        }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

export default function* CampusInterviewWatcherSaga() {
    yield takeLatest(ACTION_GET_CAMPUS_DRIVE_INTERVIEW_ROUNDS_REQUEST, getInterviewRoundsRequestSaga);
    yield takeLatest(ACTION_GET_CAMPUS_DRIVE_INTERVIEW_STUDENTS_LIST_REQUEST, getStudentsListRequestSaga);
    yield takeLatest(ACTION_POST_CAMPUS_DRIVE_INTERVIEW_STUDENTS_LIST_REQUEST, postStudentsListRequestSaga);
}
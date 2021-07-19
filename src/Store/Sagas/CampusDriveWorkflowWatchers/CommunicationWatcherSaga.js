import { call, takeLatest, put } from 'redux-saga/effects';
import Axios from "../../../utils/axios";
import { toast } from "react-toastify";
import {
    ACTION_GET_CAMPUS_DRIVE_EMAIL_TEMPLATES_LIST_REQUEST,
    ACTION_POST_CAMPUS_DRIVE_NEW_EMAIL_TEMPLATE_REQUEST,
    ACTION_GET_CAMPUS_DRIVE_INDUCTION_INFO_REQUEST,
    ACTION_POST_CAMPUS_DRIVE_INTERVIEW_ROUNDS_REQUEST
} from '../../Actions/SagaActions/SagaActionTypes';
import { actionUpdateGlobalLoaderSagaAction } from '../../Actions/SagaActions/CommonSagaActions';

// GET EMAIL TEMPLATES LIST - CAMPUS DRIVE
const getEmailTemplatesListRequest = (model) => {
    const URL = '/et/all/';
    return Axios.get(URL, model).then(resp => resp.data);
}

function* getEmailTemplatesListRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));
    try {
        const model = action.payload.apiPayloadRequest;
        let formData = {
            "api": "v1"
        };
        console.log(formData);
        const data = yield call(getEmailTemplatesListRequest, formData);
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

// GET INDUCTION INFO - CAMPUS DRIVE
const getInductionInfoRequest = (model) => {
    const URL = '/et/id/';
    return Axios.get(URL, model).then(resp => resp.data);
}

function* getInductionInfoRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));
    try {
        const model = action.payload.apiPayloadRequest;
        let formData = {
            "api": "v1"
        };
        console.log(formData);
        const data = yield call(getInductionInfoRequest, formData);
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

const createEmailTemplate = (payload) => {
    const URL = '/et/create';
    return Axios.post(URL, payload).then(res => res.data);
}

function* createEmailTemplateSaga(action) {
    try {
        const model = action.payload.apiPayloadRequest;
        let formData = {
            "api": "v1",
            "template": model
        };
        console.log(formData);
        const resp = yield call(createEmailTemplate, formData);
        action.payload.callback(resp);
    } catch (err) {
        if (err?.response) {
            toast.error(err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err?.message);
        }
    }
}

const addInterViewRounds = (payload, corporateName) => {
    const URL = '/ci/ir/?corporateName=' + corporateName;
    return Axios.post(URL, payload).then(res => res.data);
}

function* addInterViewRoundsSaga(action) {
    try {
        const model = action.payload.apiPayloadRequest;
        const corporateName = action.payload.params;
        let formData = new FormData();
        for (const key in model) {
            formData.append(key, model[key]);
        }

        console.log(formData);
        const resp = yield call(addInterViewRounds, formData, corporateName);
        action.payload.callback(resp);
    } catch (err) {
        if (err?.response) {
            toast.error(err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err?.message);
        }
    }
}

export default function* CommunicationWatcherSaga() {
    yield takeLatest(ACTION_GET_CAMPUS_DRIVE_EMAIL_TEMPLATES_LIST_REQUEST, getEmailTemplatesListRequestSaga);
    yield takeLatest(ACTION_POST_CAMPUS_DRIVE_NEW_EMAIL_TEMPLATE_REQUEST, createEmailTemplateSaga);
    yield takeLatest(ACTION_GET_CAMPUS_DRIVE_INDUCTION_INFO_REQUEST, getInductionInfoRequestSaga);
    yield takeLatest(ACTION_POST_CAMPUS_DRIVE_INTERVIEW_ROUNDS_REQUEST, addInterViewRoundsSaga);
}
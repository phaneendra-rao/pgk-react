import { call, takeLatest, put } from 'redux-saga/effects';
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
import { ACTION_GET_CORPORATE_JOBS_BYID_REQUEST, ACTION_GET_CORPORATE_JOBS_REQUEST, ACTION_POST_CORPORATE_JOBS_REQUEST, ACTION_POST_CORPORATE_UPDATEJOBS_REQUEST, ACTION_POST_PUBLISH_CORPORATE_JOBS_REQUEST } from '../Actions/SagaActions/SagaActionTypes';
import { actionUpdateGlobalLoaderSagaAction } from '../Actions/SagaActions/CommonSagaActions';

const getJobs = () => {
    const URL = '/p/crp/createJob/all';
    return Axios.get(URL).then(res => res.data);
}

function* getJobsSaga(action) {
    try {
        const resp = yield call(getJobs);
        action.payload.callback(resp);
    } catch (err) {
        if (err?.response) {
            toast.error(err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err?.message);
        }
    }

}

const getJobById = (id) => {
    const URL = '/p/crp/createJob/getByID/' + id;
    return Axios.get(URL).then(res => res.data);
}

function* getJobByIdSaga(action) {
    try {
        const resp = yield call(getJobById, action.payload.apiPayloadRequest);
        action.payload.callback(resp);
    } catch (err) {
        if (err?.response) {
            toast.error(err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err?.message);
        }
    }

}



const addJobs = (payload) => {
    const URL = '/p/crp/createJob/';
    const header = {
        headers: {
            // 'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    return Axios.post(URL, payload, header).then(res => res.data);
}

function* addJobsSaga(action) {
    try {
        const model = action.payload.apiPayloadRequest;
        // let formData = new FormData();
        // for (const key in model) {
        //     formData.append(key, model[key]);
        // }
        const resp = yield call(addJobs, model);
        action.payload.callback(resp);
    } catch (err) {
        if (err?.response) {
            toast.error(err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err?.message);
        }
    }

}

const editJobs = (payload, id) => {
    const URL = '/p/crp/createJob/job/' + id;
    const header = {
        headers: {
            // 'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    }
    return Axios.patch(URL, payload, header).then(res => res.data);
}

function* editJobsSaga(action) {
    try {
        const { id, req  } = action.payload.apiPayloadRequest;
        // let formData = new FormData();
        // for (const key in model) {
        //     formData.append(key, model[key]);
        // }
        const resp = yield call(editJobs, req, id);
        toast.success(resp.message);
        action.payload.callback(resp);
    } catch (err) {
        if (err?.response) {
            toast.error(err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err?.message);
        }
    }

}

const postPublishCorporateJobs = (formData) => {
    const URL = '/p/crp/publishJob';
    return Axios.post(URL, formData).then(resp => resp.data);
}

function* postPublishCorporateJobsRequest(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        for (let index = 0; index < action.payload.apiPayloadRequest.length; index++) {
            let formData = new FormData();
            for (const key in action.payload.apiPayloadRequest[index]) {
                formData.append(key, action.payload.apiPayloadRequest[index][key]);
            }
            yield call(postPublishCorporateJobs, formData);
        }
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

export default function* JobsWatcherSaga() {
    yield takeLatest(ACTION_GET_CORPORATE_JOBS_REQUEST, getJobsSaga);
    yield takeLatest(ACTION_GET_CORPORATE_JOBS_BYID_REQUEST, getJobByIdSaga);
    yield takeLatest(ACTION_POST_CORPORATE_JOBS_REQUEST, addJobsSaga);
    yield takeLatest(ACTION_POST_CORPORATE_UPDATEJOBS_REQUEST, editJobsSaga);
    yield takeLatest(ACTION_POST_PUBLISH_CORPORATE_JOBS_REQUEST, postPublishCorporateJobsRequest);
}

// export function* addJobsWatcherSaga() {
//     yield takeLatest(ACTION_POST_CORPORATE_JOBS_REQUEST, addJobsSaga)
// }
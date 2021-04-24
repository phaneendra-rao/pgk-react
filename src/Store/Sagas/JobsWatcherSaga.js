import { call, takeLatest } from 'redux-saga/effects';
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
import { ACTION_GET_CORPORATE_JOBS_BYID_REQUEST, ACTION_GET_CORPORATE_JOBS_REQUEST, ACTION_POST_CORPORATE_JOBS_REQUEST } from '../Actions/SagaActions/SagaActionTypes';

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


export default function* JobsWatcherSaga() {
    yield takeLatest(ACTION_GET_CORPORATE_JOBS_REQUEST, getJobsSaga);
    yield takeLatest(ACTION_GET_CORPORATE_JOBS_BYID_REQUEST, getJobByIdSaga);
    yield takeLatest(ACTION_POST_CORPORATE_JOBS_REQUEST, addJobsSaga);
}

// export function* addJobsWatcherSaga() {
//     yield takeLatest(ACTION_POST_CORPORATE_JOBS_REQUEST, addJobsSaga)
// }
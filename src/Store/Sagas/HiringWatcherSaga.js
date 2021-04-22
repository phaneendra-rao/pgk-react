import { call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import Axios from '../../utils/axios';
// import { HiringSagaAction } from '../Actions/SagaActions/HiringSagaAction';
import {
    ACTION_GET_CORPORATE_HIRING_REQUEST,
    ACTION_GET_CORPORATE_HIRING_RESPONSE,
    ACTION_POST_CORPORATE_HIRING_REQUEST
} from '../Actions/SagaActions/SagaActionTypes';

const getHiringCriteria = () => {
    const URL = '/p/crp/hiringCriteria/all';
    return Axios.get(URL).then(res => res.data);
}

function* getHiringCriteriaSaga(action) {
    try {
        const resp = yield call(getHiringCriteria);
        yield put({ type: ACTION_GET_CORPORATE_HIRING_RESPONSE, payload: resp });
        action.payload.callback(resp);
    } catch (err) {
        if (err?.response) {
            toast.error(err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err?.message);
        }
    }
}


const addHiringCriteria = (payload) => {
    const URL = '/p/crp/hiringCriteria/';
    return Axios.post(URL, payload).then(resp => resp.data);
};

function* addHiringCriteriaSaga(action) {
    try {
        const model = action.payload.body;
        let formData = new FormData();
        formData.append('hiringCriterias', JSON.stringify(model));
        const resp = yield call(addHiringCriteria, formData);
        action.payload.callback(resp);
    } catch (err) {
        console.log(err);
        if (err?.response) {
            toast.error(err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err?.message);
        }
    }
}

export default function* HiringWatcherSaga() {
    yield takeLatest(ACTION_GET_CORPORATE_HIRING_REQUEST, getHiringCriteriaSaga);
    yield takeLatest(ACTION_POST_CORPORATE_HIRING_REQUEST, addHiringCriteriaSaga);
}

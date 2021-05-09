import { call, takeLatest, put } from 'redux-saga/effects';
import Axios from "../../utils/axios";
import { toast } from "react-toastify";

import {
    ACTION_GET_CORPORATE_TOKENS_REQUEST,
    ACTION_GET_CORPORATE_TOKENS_RESPONSE
} from "../Actions/SagaActions/SagaActionTypes";

import { actionUpdateGlobalLoaderSagaAction } from '../Actions/SagaActions/CommonSagaActions';


const getTokens = () => {
    const URL = '/t/balance';
    return Axios.get(URL).then(res => res.data);
}

function* getTokensSaga() {
    try {
        yield put(actionUpdateGlobalLoaderSagaAction(true));

        const resp = yield call(getTokens);
        yield put({ type: ACTION_GET_CORPORATE_TOKENS_RESPONSE, payload: resp })
        // action.payload.callback(resp);
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

export default function* DashboardWatcherSaga() {
    yield takeLatest(ACTION_GET_CORPORATE_TOKENS_REQUEST, getTokensSaga);
}
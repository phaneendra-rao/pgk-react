import { call, takeLatest, put } from 'redux-saga/effects';
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
import { ACTION_POST_CORPORATE_SUBSCRIBESEARCH_REQUEST } from "../Actions/SagaActions/SagaActionTypes";

const getSearchData = (params) => {
    const URL = '/u/unv/search?' + params;
    return Axios.get(URL).then(res => res.data);
}

function* getSearchDataSaga(action) {
    try {
        const params = action.payload.apiPayloadRequest;
        const resp = yield call(getSearchData, params);
        let parseResp;
        if (resp) {
            parseResp = resp.map(item => {
                for (const key in item) {
                    if (key === 'accredations' || key === 'ranking') {
                        item[key] = JSON.parse(item[key])
                    }
                    item[key] = item[key]
                }
                return item;
            });
        } else {
            parseResp = [];
        }
        action.payload.callback(parseResp);
    } catch (err) {
        if (err?.response) {
            toast.error(err?.response?.data?.errors[0]?.message);
        } else {
            toast.error("Something Wrong!", err?.message);
        }
    }
}

export default function* SubscriptionWatcherSaga() {
    yield takeLatest(ACTION_POST_CORPORATE_SUBSCRIBESEARCH_REQUEST, getSearchDataSaga);
}
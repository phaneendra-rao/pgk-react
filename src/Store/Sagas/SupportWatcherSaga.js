import { call, takeLatest, put } from 'redux-saga/effects';
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
import {
    ACTION_POST_CORPORATE_SUPPORT_REQUEST
} from "../Actions/SagaActions/SagaActionTypes";

import { actionUpdateGlobalLoaderSagaAction } from '../Actions/SagaActions/CommonSagaActions';

const postSupportRequest = (formData) => {
    const URL = "/o/addSupport";
    return Axios.post(URL, formData).then((res) => {
      return res.data;
    });
}



function* postSupportSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {

        let formData = new FormData();
        for (const key in action.payload.apiPayloadRequest) {
            formData.append(key, action.payload.apiPayloadRequest[key]);
        }

        const response = yield call(postSupportRequest, formData);
        if(response?.message) {
            action.payload.callback(response);
        } else {
            toast.error("Something went wrong!");
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

export default function* SupportWatcherSaga() {
    yield takeLatest(ACTION_POST_CORPORATE_SUPPORT_REQUEST, postSupportSaga);
}
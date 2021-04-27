import { call, takeLatest, put } from 'redux-saga/effects';
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
import {
    ACTION_POST_CORPORATE_SUPPORT_REQUEST
} from "../Actions/SagaActions/SagaActionTypes";

import { actionUpdateGlobalLoaderSagaAction } from '../Actions/SagaActions/CommonSagaActions';

const postSupportRequest = (formData) => {
    // const URL = "/p/crp/publish/profile";
    // return Axios.post(URL, formData).then((res) => {
    //   return res.data;
    // });
}



function* postSupportSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {

        //   let formData = new FormData();
        //   formData.append('publishData', JSON.stringify(action.payload.apiPayloadRequest));

        //   const response = yield call(postSupportRequest, formData);
        //   action.payload.callback(response);
        // } catch (err) {
        //     if (err.response) {
        //         toast.error(err?.response?.data?.errors?.length && err?.response?.data?.errors[0]?.message);
        //     } else {
        //         toast.error("Something Wrong!", err.message);
        //     }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

export default function* SupportSaga() {
    yield takeLatest(ACTION_POST_CORPORATE_SUPPORT_REQUEST, postSupportSaga);
}
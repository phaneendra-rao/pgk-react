// import packages
import { take, put, call, takeLatest } from "redux-saga/effects";
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
import history from '../../@history';
import { ACTION_GET_CORPORATE_PROFILE_REQUEST } from '../Actions/SagaActions/SagaActionTypes';
import { actionUpdateGlobalLoaderSagaAction } from '../Actions/SagaActions/CommonSagaActions';


const getCorporateProfileRequest = () => {
  const URL = "/u/profile/";
  return Axios.get(URL).then((res) => {
    return res.data;
  });
};

function* getCorporateProfileRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const response = yield call(getCorporateProfileRequest);
        action.payload.callback(response);
    } catch (err) {
        if (err.response) {
            toast.error(err.response.data.errors[0].message);
        } else {
            toast.error("Something Wrong!", err.message);
        }
    } finally {
        yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

export default function* CorporateProfileWatcherSaga() {
  yield takeLatest(ACTION_GET_CORPORATE_PROFILE_REQUEST, getCorporateProfileRequestSaga);
}

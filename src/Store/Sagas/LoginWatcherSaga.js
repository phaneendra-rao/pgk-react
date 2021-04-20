// import packages
import { take, put, call, takeLatest } from "redux-saga/effects";
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
import history from '../../@history';
import { actionUpdateGlobalLoaderSagaAction } from '../Actions/SagaActions/CommonSagaActions';

const loginRequest = (model) => {
  const URL = "/o/login";
  let formData = new FormData();
  formData.append("stakeholder", model.stakeholder);
  formData.append("userID", model.userID);
  formData.append("password", model.password);
  return Axios.post(URL, formData).then((res) => {
    return res.data;
  });
};

function* loginRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {      
        const response = yield call(loginRequest, action.payload.apiPayloadRequest);
        localStorage.setItem('token', response.token);
        toast.success("Login successful");

        action.payload.callback(response.redirectURL);

    } catch (err) {
        if (err.response) {
            toast.error(err.response.data.errors[0].message);
            // console.log("errors.response", err.response.data);
        } else {
            toast.error("Something Wrong!", err.message);
        }

    } finally {
      yield put(actionUpdateGlobalLoaderSagaAction(false));
    }
}

export default function* LoginWatcherSaga() {
  yield takeLatest("LOGIN-REQUEST", loginRequestSaga);
}

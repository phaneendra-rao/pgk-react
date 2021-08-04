// import packages
import { take, put, call, takeLatest } from "redux-saga/effects";
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
import history from '../../@history';
import { actionUpdateGlobalLoaderSagaAction } from '../Actions/SagaActions/CommonSagaActions';
import { actionGetCorporateProfileSagaAction } from '../Actions/SagaActions/CorporateProfileSagaActions';

const validateReferralCodeRequest = (model) => {
  const URL = "/o/validateRefCode/" + model;
  return Axios.get(URL).then(res => res.data);
}

function* validateReferralCodeRequestSaga(action) {
  yield put(actionUpdateGlobalLoaderSagaAction(true));
  try {
    const model = action.payload.apiPayloadRequest;
    const response = yield call(validateReferralCodeRequest, model);
    action.payload.callback(response);
  } catch (err) {
    if (err?.response) {
      action.payload.callback(err?.response?.data?.errors[0]?.message);
      //toast.error(err?.response?.data?.errors[0]?.message);
    } else {
      toast.error("Something Wrong!", err?.message);
    }

  } finally {
    yield put(actionUpdateGlobalLoaderSagaAction(false));
  }
}


const loginRequest = (model) => {
  const URL = "/o/login";
  let formData = new FormData();
  formData.append("stakeholder", model.stakeholder);
  formData.append("userID", model.userID);
  formData.append("password", model.password);
  localStorage.setItem('email', model.userID);
  return Axios.post(URL, formData).then((res) => {
    return res.data;
  });
};

function* loginRequestSaga(action) {
  yield put(actionUpdateGlobalLoaderSagaAction(true));

  try {
    const response = yield call(loginRequest, action.payload.apiPayloadRequest);
    localStorage.setItem('token', response.token);
    yield put(actionGetCorporateProfileSagaAction());
    toast.success("Login successful");

    action.payload.callback(response.redirectURL);

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

const logoutRequest = () => {
  const URL = "/o/logout";
  return Axios.post(URL).then((res) => {
    return res.data;
  });
};

function* logoutRequestSaga(action) {
  yield put(actionUpdateGlobalLoaderSagaAction(true));

  try {
    const response = yield call(logoutRequest);
    localStorage.clear();
    toast.success("Logout successful");

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

export default function* LoginWatcherSaga() {
  yield takeLatest("LOGIN-REQUEST", loginRequestSaga);
  yield takeLatest('LOGOUT-REQUEST', logoutRequestSaga);
  yield takeLatest('VALIDATE-REFERRAL-CODE-REQUEST', validateReferralCodeRequestSaga);
}

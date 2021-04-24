// import packages
import { take, put, call, takeLatest } from "redux-saga/effects";
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
import history from '../../@history';
import { ACTION_GET_CORPORATE_PROFILE_REQUEST, ACTION_PATCH_CORPORATE_PROFILE_REQUEST, ACTION_POST_PUBLISH_CORPORATE_PROFILE_REQUEST } from '../Actions/SagaActions/SagaActionTypes';
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


function patchCorporateProfileRequest(formData) {
  const URL = "/u/profile/";
  return Axios.patch(URL, formData).then((res) => {
    return res.data;
  });
}

function* patchCorporateProfileRequestSaga(action) {
  yield put(actionUpdateGlobalLoaderSagaAction(true));

  try {

    console.log('action ', action);

    let formData = new FormData();
    for (const key in action.payload.apiPayloadRequest) {
        formData.append(key, action.payload.apiPayloadRequest[key]);
    }
    const response = yield call(patchCorporateProfileRequest, formData);
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

const postPublishCorporateProfileRequest = (formData) => {
  const URL = "/p/crp/publish/profile";
  return Axios.post(URL, formData).then((res) => {
    return res.data;
  });
}

function* postPublishCorporateProfileRequestSaga(action) {
  yield put(actionUpdateGlobalLoaderSagaAction(true));

  try {

    let formData = new FormData();
    formData.append('publishData', JSON.stringify(action.payload.apiPayloadRequest));

    const response = yield call(postPublishCorporateProfileRequest, formData);
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
  yield takeLatest(ACTION_PATCH_CORPORATE_PROFILE_REQUEST, patchCorporateProfileRequestSaga);
  yield takeLatest(ACTION_POST_PUBLISH_CORPORATE_PROFILE_REQUEST, postPublishCorporateProfileRequestSaga);
}

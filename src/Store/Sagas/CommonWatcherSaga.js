// import packages
import { put, call, takeLatest } from "redux-saga/effects";
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
// import history from '../../@history';
import { ACTION_GET_DEPENDENCY_LOOKUPS_REQUEST, ACTION_GET_COUNTRY_CODES_REQUEST } from '../Actions/SagaActions/SagaActionTypes';
import { actionUpdateGlobalLoaderSagaAction } from '../Actions/SagaActions/CommonSagaActions';


const getDependencyLookupsRequest = (queryString) => {
  const URL = `/u/lut/?${queryString}`;
  return Axios.get(URL).then((res) => {
    return res.data;
  });
};

const getStringifyLookupKeys = (keys) => {
    if(keys.length) {
        return keys.map((item)=>`lutList=${item}&`).join('').replace(/&$/,"")
    } else {
        return '';
    }
}

function* getDependencyLookupsRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    const lookupQueryString  = getStringifyLookupKeys(action.payload.apiPayloadRequest);
    
    try {
        const response = yield call(getDependencyLookupsRequest, lookupQueryString);
        action.payload.callback(response);
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

const getCountryCodes = (action) => {
    const URL = "http://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes;";
    return Axios.get(URL)
        .then((res) => {
            return res.data;
        });
}

function* getCountryCodesRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const response = yield call(getCountryCodes);
        action.payload.callback(response);

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

// const getCountryCodes = (action) => {
//     const URL = "http://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes;";
//     return Axios.get(URL)
//         .then((res) => {
//             return res.data;
//         });
// }

// function* getCountryCodesRequestSaga(action) {
//     yield put(actionUpdateGlobalLoaderSagaAction(true));

//     try {
//         const response = yield call(getCountryCodes);
//         action.payload.callback(response);

//     } catch (err) {
//         if (err?.response) {
//             toast.error(err?.response?.data?.errors[0]?.message);
//         } else {
//             toast.error("Something Wrong!", err?.message);
//         }
//     } finally {
//         yield put(actionUpdateGlobalLoaderSagaAction(false));
//     }

// }

// const getCountryCodes = (action) => {
//     const URL = "http://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes;";
//     return Axios.get(URL)
//         .then((res) => {
//             return res.data;
//         });
// }

// function* getCountryCodesRequestSaga(action) {
//     yield put(actionUpdateGlobalLoaderSagaAction(true));

//     try {
//         const response = yield call(getCountryCodes);
//         action.payload.callback(response);

//     } catch (err) {
//         if (err?.response) {
//             toast.error(err?.response?.data?.errors[0]?.message);
//         } else {
//             toast.error("Something Wrong!", err?.message);
//         }
//     } finally {
//         yield put(actionUpdateGlobalLoaderSagaAction(false));
//     }

// }

export default function* CommonWatcherSaga() {
  yield takeLatest(ACTION_GET_DEPENDENCY_LOOKUPS_REQUEST, getDependencyLookupsRequestSaga);
  yield takeLatest(ACTION_GET_COUNTRY_CODES_REQUEST, getCountryCodesRequestSaga);
}

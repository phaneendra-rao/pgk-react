// import packages
import { put, call, takeLatest, select } from "redux-saga/effects";
import Axios from "../../utils/axios";
import { toast } from "react-toastify";
// import history from '../../@history';
import { ACTION_GET_DEPENDENCY_LOOKUPS_REQUEST, ACTION_GET_COUNTRY_CODES_REQUEST, ACTION_GET_COUNTRIES_REQUEST, ACTION_GET_STATES_BY_COUNTRY_NAME_REQUEST, ACTION_GET_CITIES_BY_STATE_NAME_REQUEST, ACTION_GET_UNIVERSAL_ACCESS_TOKEN } from '../Actions/SagaActions/SagaActionTypes';
import { actionUpdateGlobalLoaderSagaAction, actionSaveUniversalAccessToken, actionSaveCountries } from '../Actions/SagaActions/CommonSagaActions';


const fullState = (state) => state;

const getDependencyLookupsRequest = (queryString) => {
    alert(queryString);
  const URL = `/lut/?${queryString}`;
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

const getCountries = (accessToken) => {
    const header = {
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer "+accessToken,
        }
    }

    const URL = "https://www.universal-tutorial.com/api/countries/";
    return Axios.get(URL, header)
        .then((res) => {
            return res.data;
        });
}

function* getCountriesRequestSaga(action) {
    const wholeState = yield select(fullState);
    const universalTutorialAccessToken = wholeState.DashboardReducer?.universalTutorialAccessToken;

    yield put(actionUpdateGlobalLoaderSagaAction(true));
    
    try {
        if(universalTutorialAccessToken) {
            const response = yield call(getCountries, universalTutorialAccessToken) 
            yield put(actionSaveCountries(response));
            if(action?.payload?.callback) {
                action.payload.callback(response)
            }
        }
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

const getStates = (accessToken, countryName) => {
    const header = {
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer "+accessToken,
        }
    }

    const URL = "https://www.universal-tutorial.com/api/states/"+countryName;
    return Axios.get(URL, header)
        .then((res) => {
            return res.data;
        });
}

function* getStatesRequestSaga(action) {
    const wholeState = yield select(fullState);
    const universalTutorialAccessToken = wholeState.DashboardReducer?.universalTutorialAccessToken;

    yield put(actionUpdateGlobalLoaderSagaAction(true));
    try {
        if(universalTutorialAccessToken && action?.payload?.countryName) {
            const response = yield call(getStates, universalTutorialAccessToken, action.payload.countryName) 
            if(action?.payload?.callback) {
                action.payload.callback(response)
            }
        }
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

const getCities = (accessToken, stateName) => {
    const header = {
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer "+accessToken,
        }
    }

    const URL = "https://www.universal-tutorial.com/api/cities/"+stateName;
    return Axios.get(URL, header)
        .then((res) => {
            return res.data;
        });
}

function* getCitiesRequestSaga(action) {
    const wholeState = yield select(fullState);
    const universalTutorialAccessToken = wholeState.DashboardReducer?.universalTutorialAccessToken;

    yield put(actionUpdateGlobalLoaderSagaAction(true));
    
    try {
        if(universalTutorialAccessToken && action?.payload?.stateName) {
            const response = yield call(getCities, universalTutorialAccessToken, action.payload.stateName) 
            if(action?.payload?.callback) {
                action.payload.callback(response)
            }
        }
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

const getUniversalAccessTokenRequest = () => {
    const header = {
        headers: {
            "Accept": "application/json",
            "api-token": process.env.REACT_APP_UNIVERSAL_TUTORIAL_API_TOKEN,
            "user-email": process.env.REACT_APP_UNIVERSAL_TUTORIAL_EMAIL
        }
    }

    const URL = "https://www.universal-tutorial.com/api/getaccesstoken";
    return Axios.get(URL, header)
        .then((res) => {
            return res.data;
        });
}

function* getUniversalAccessTokenRequestSaga(action) {
    yield put(actionUpdateGlobalLoaderSagaAction(true));

    try {
        const response = yield call(getUniversalAccessTokenRequest);
        if(response?.auth_token) {
            yield put(actionSaveUniversalAccessToken(response?.auth_token))
        }
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

export default function* CommonWatcherSaga() {
  yield takeLatest(ACTION_GET_DEPENDENCY_LOOKUPS_REQUEST, getDependencyLookupsRequestSaga);
  yield takeLatest(ACTION_GET_COUNTRY_CODES_REQUEST, getCountryCodesRequestSaga);
  yield takeLatest(ACTION_GET_COUNTRIES_REQUEST, getCountriesRequestSaga);
  yield takeLatest(ACTION_GET_STATES_BY_COUNTRY_NAME_REQUEST, getStatesRequestSaga);
  yield takeLatest(ACTION_GET_CITIES_BY_STATE_NAME_REQUEST, getCitiesRequestSaga);
  yield takeLatest(ACTION_GET_UNIVERSAL_ACCESS_TOKEN, getUniversalAccessTokenRequestSaga);
}

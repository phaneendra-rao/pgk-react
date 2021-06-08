import { ACTION_GET_DEPENDENCY_LOOKUPS_REQUEST, ACTION_GET_COUNTRY_CODES_REQUEST, ACTION_SAVE_UNIVERSAL_ACCESS_TOKEN, ACTION_GET_UNIVERSAL_ACCESS_TOKEN, ACTION_GET_COUNTRIES_REQUEST, ACTION_GET_STATES_BY_COUNTRY_NAME_REQUEST, ACTION_GET_CITIES_BY_STATE_NAME_REQUEST, ACTION_SAVE_COUNTRIES } from "./SagaActionTypes";

export const actionGetDependencyLookUpsSagaAction = (payload) => {
  return {
    type: ACTION_GET_DEPENDENCY_LOOKUPS_REQUEST,
    payload: payload,
  };
};

export const actionGetCountryCodesSagaAction = (payload) => {
  return {
    type: ACTION_GET_COUNTRY_CODES_REQUEST,
    payload: payload,
  };
};

export const actionUpdateGlobalLoaderSagaAction = (payload) => {
  return {
    type: "APISTATUS",
    payload: payload,
  };
};

export const actionGetUniversalAccessToken = () => {
  return {
    type: ACTION_GET_UNIVERSAL_ACCESS_TOKEN
  }
}

export const actionSaveUniversalAccessToken = (payload) => {
  return {
    type: ACTION_SAVE_UNIVERSAL_ACCESS_TOKEN,
    payload: payload
  }
}

export const actionGetCountriesRequest = (payload) => {
  return {
    type: ACTION_GET_COUNTRIES_REQUEST,
    payload: payload
  }
}

export const actionSaveCountries = (payload) => {
  return {
    type: ACTION_SAVE_COUNTRIES,
    payload: payload
  }
}

export const actionGetStatesByCountryNameRequest = (payload) => {
  return {
    type: ACTION_GET_STATES_BY_COUNTRY_NAME_REQUEST,
    payload: payload
  }
}

export const actionGetCitiesByStateNameRequest = (payload) => {
  return {
    type: ACTION_GET_CITIES_BY_STATE_NAME_REQUEST,
    payload: payload
  }
}

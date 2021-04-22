import { ACTION_GET_DEPENDENCY_LOOKUPS_REQUEST, ACTION_GET_COUNTRY_CODES_REQUEST } from "./SagaActionTypes";

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

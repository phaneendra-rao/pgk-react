import * as actionTypes from '../Actions/CorporateActions/actionTypes';

const INITIAL = {
    apiStatus: false,
    apiSuccess: false,
    apiError: false,
    corporatePrimaryState: {},
    categoryList: {},
    steps: 0,
    countryCodes: [],
    paymentOrder: {},
    referenceObject: undefined,
}

const CorporateReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case actionTypes.COUNTRYCODES:
            return { ...state, countryCodes: action.payload }

        case actionTypes.APISTATUS:
            return { ...state, apiStatus: action.payload }

        case actionTypes.SUCCESS:
            return { ...state, apiSuccess: action.payload }

        case actionTypes.ERROR:
            return { ...state, apiError: action.payload }

        case actionTypes.RESET:
            return {
                apiSuccess: false,
                apiError: false,
                referenceObject: undefined,
            }

        case actionTypes.CORPORATE:
            return { ...state, corporatePrimaryState: { ...state.corporatePrimaryState, ...action.payload } }

        case actionTypes.CATEGOTYLIST:
            return { ...state, categoryList: action.payload }

        case actionTypes.STEPS:
            return { ...state, steps: action.payload }

        case actionTypes.PAYMENTORDER:
            return { ...state, paymentOrder: action.payload }

        case actionTypes.REFERENCEOBJ:
            return { ...state, referenceObject: action.payload }

        default:
            return state;
    }
}

export default CorporateReducer;
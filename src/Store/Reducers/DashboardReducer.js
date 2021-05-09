import * as actionTypes from '../Actions/DashboardActions/actionTypes';
import * as SagaActionTypes from '../Actions/SagaActions/SagaActionTypes';

const INITIAL = {
    apiStatus: 0,
    apiSuccess: false,
    apiError: false,
    balance: {},
    hiringCriteria: [],
}

const DashboardReducer = (state = INITIAL, action) => {
    switch (action.type) {
        // case actionTypes.BALANCE:
        //     return { ...state, balance: action.payload }

        case SagaActionTypes.ACTION_GET_CORPORATE_TOKENS_RESPONSE:
            return { ...state, balance: action.payload };

        case SagaActionTypes.ACTION_GET_CORPORATE_HIRING_RESPONSE:
            return { ...state, hiringCriteria: action.payload };

        case actionTypes.APISTATUS:
            if(action.payload) {
                return { ...state, apiStatus: state.apiStatus++ }
            } else {
                return { ...state, apiStatus: state.apiStatus-- }
            }

        case actionTypes.SUCCESS:
            return { ...state, apiSuccess: action.payload }


        case actionTypes.RESET:
            return {
                apiSuccess: false,
                apiError: false,
            }

        default:
            return state;
    }
}

export default DashboardReducer;
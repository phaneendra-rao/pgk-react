import * as actionTypes from '../Actions/DashboardActions/actionTypes'
const INITIAL = {
    apiStatus: false,
    apiSuccess: false,
    apiError: false,
    balance: {},
}

const DashboardReducer = (state = INITIAL, action) => {
    switch (action.type) {
        case actionTypes.BALANCE:
            return { ...state, balance: action.payload }

        case actionTypes.APISTATUS:
            return { ...state, apiStatus: action.payload }

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
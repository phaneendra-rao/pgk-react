
import Axios from '../../../utils/axios';
import { toast } from 'react-toastify';
import * as actionTypes from './actionTypes';



// RESET ALL REDUCERES
export const ResetRdrAction = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.RESET,
            payload: undefined
        })
    }
}

export const APISuccess = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SUCCESS,
            payload: true
        })
    }
}
export const APIStatus = (val) => {
    return (dispatch) => {
        dispatch({ type: actionTypes.APISTATUS, payload: val });
    }
}

export const APIError = () => {
    return (dispatch) => {
        dispatch({
            type: actionTypes.ERROR,
            payload: true
        })
    }
}


export const GetCountryCodeAction = () => {
    return (dispatch) => {
        const URL = "http://restcountries.eu/rest/v2/all?fields=name;flag;callingCodes;";
        Axios.get(URL)
            .then((res) => {
                let resp = res.data;
                dispatch({ type: actionTypes.COUNTRYCODES, payload: resp });
            })
            .catch((err) => {
                const val = JSON.stringify(err);
                toast.error(JSON.parse(val).message);
            })
    }
}

// REGISTER (CORPORATE & UNIVERSITY)
export const SignupAction = (model, history, type) => {
    return (dispatch) => {
        // const URL = "/o/signUp/Corporate";
        let URL;
        if (type === 'Corporate') {
            URL = "/o/signUp/Corporate";
        } else if (type === 'University') {
            URL = "/o/signUp/University";
        }
        let formData = new FormData();
        for (const key in model) {
            formData.append(key, model[key]);
        }
        dispatch(APIStatus(true));
        dispatch({ type: actionTypes.CORPORATE, payload: model });
        Axios.post(URL, formData)
            .then((res) => {
                let resp = res.data;
                localStorage.removeItem('imgpath');
                localStorage.setItem('regStatus', JSON.stringify(resp));
                localStorage.setItem('steps', 3);
                dispatch({ type: actionTypes.STEPS, payload: 3 });
                dispatch(APIStatus(false));
                toast.success(resp.message);
                history.push('/register/authentication');
            })
            .catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.errors[0].message);
                } else {
                    toast.error("Something Wrong!", err.message);
                }
                dispatch(APIStatus(false));
            })
    }
}

// REGISTER (STUDENT)
export const StudentSignupAction = (model, history, type) => {
    return (dispatch) => {
        const URL = "/o/signUp/Student";
        let formData = new FormData();
        for (const key in model) {
            formData.append(key, model[key]);
        }
        dispatch(APIStatus(true));
        dispatch({ type: actionTypes.CORPORATE, payload: model });
        Axios.post(URL, formData)
            .then((res) => {
                let resp = res.data;
                localStorage.removeItem('imgpath');
                localStorage.setItem('regStatus', JSON.stringify(resp));
                localStorage.setItem('steps', 3);
                dispatch({ type: actionTypes.STEPS, payload: 3 });
                dispatch(APIStatus(false));
                toast.success(resp.message);
                history.push('/register/studentAuthentication');
            })
            .catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.errors[0].message);
                } else {
                    toast.error("Something Wrong!", err.message);
                }
                dispatch(APIStatus(false));
            })
    }
}

// LOGIN
export const LoginUserAction = (model, history) => {
    return (dispatch) => {
        const URL = "/o/login";
        let formData = new FormData();
        formData.append('stakeholder', model.stakeholder);
        formData.append('userID', model.userID);
        formData.append('password', model.password);
        dispatch(APIStatus(true));
        Axios.post(URL, formData)
            .then((res) => {
                let resp = res.data;
                localStorage.setItem('token', resp.token);
                dispatch(APIStatus(false));
                toast.success("Login successful");
                if (resp.redirectURL === '/dashboard') {
                    history.push('/dashboard');
                } else {
                    history.push('/register/payment');
                }
            })
            .catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.errors[0].message);
                } else {
                    toast.error("Something Wrong!", err.message);
                }
                dispatch(APIStatus(false));
            })
    }
}

// VERIFY OTP
export const VerifyOtpAction = (model, type, history) => {
    return (dispatch) => {
        // const URL = "/verifyMobile";
        const URL = "/o/verifyOTP";
        // if (type === 1) {
        //     URL = "/o/verifyMobile"
        // } else {
        //     URL = "/o/verifyEmail"
        // }
        let formData = new FormData();
        for (const key in model) {
            formData.append(key, model[key]);
        }
        dispatch(APIStatus(true));
        Axios.post(URL, formData)
            .then((res) => {
                let resp = res.data;
                dispatch(APIStatus(false));
                if (resp?.MobileVerified && resp?.emailVerified) {
                    toast.success('OTP verification successful');
                    history.push('/register/completed');
                } else {
                    toast.error('OTP verification failed');
                }
            })
            .catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.errors[0].message);
                } else {
                    toast.error("Something Wrong!", err.message);
                }
                dispatch(APIStatus(false));
            })
    }
}

// RESEND OTP
export const ResendOtpAction = (model) => {
    return (dispatch) => {
        const URL = "/o/resendOtp";
        let formData = new FormData();
        for (const key in model) {
            formData.append(key, model[key]);
        }
        dispatch(APIStatus(true));
        Axios.post(URL, formData)
            .then((res) => {
                let resp = res.data;
                toast.success(resp.message);
                dispatch(APIStatus(false));
            })
            .catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.errors[0].message);
                } else {
                    toast.error("Something Wrong!", err.message);
                }
                dispatch(APIStatus(false));
            })
    }
}

export const GetCategoryListAction = (type) => {
    return (dispatch) => {
        // const URL = "/u/lut/?lutList=corporateType&lutList=corporateCategory&lutList=corporateIndustry";
        let URL;
        if (type === 'Corporate') {
            URL = "/u/lut/?lutList=corporateType&lutList=corporateCategory&lutList=corporateIndustry"
        } else if (type === 'University') {
            URL = "/u/lut/?lutList=universityCategory"
        }
        Axios.get(URL)
            .then((res) => {
                let resp = res.data;
                dispatch({ type: actionTypes.CATEGOTYLIST, payload: resp });
            })
            .catch((err) => {
                const val = JSON.stringify(err);
                toast.error(JSON.parse(val).message);
            })
    }
}

export const SaveCoprorateData = (data, step) => {
    return (dispatch) => {
        localStorage.setItem('steps', step);
        dispatch({ type: actionTypes.CORPORATE, payload: data });
        dispatch({ type: actionTypes.STEPS, payload: step });
    }
}


// CREATE PAYMENT
export const CreatePaymentAction = (model) => {
    return (dispatch) => {
        const URL = "/pg/createPayment";
        let formData = new FormData();
        for (const key in model) {
            formData.append(key, model[key]);
        }
        // formData.append('payType', val);
        // formData.append('payType', 'REG_FEE');
        dispatch(APIStatus(true));
        const token = localStorage.getItem('token');
        const header = {
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/json'
            }
        }
        Axios.post(URL, formData, header)
            .then((res) => {
                let resp = res.data;
                sessionStorage.setItem('orderID', resp.orderID);
                dispatch({ type: actionTypes.PAYMENTORDER, payload: resp });
                dispatch(APIStatus(false));
                // toast.success(resp.message);
                // history.push('/register/completed');
            })
            .catch((err) => {
                if (err.response) {
                    toast.error(err.response.data);
                } else {
                    toast.error("Something Wrong!", err.message);
                }
                dispatch(APIStatus(false));
            })
    }
}

// VALIDATE PAYMENT
export const ValidatePaymentAction = (model) => {
    return (dispatch) => {
        const URL = "/pg/verifyPayment";
        let formData = new FormData();
        formData.append('orderID', model);
        const token = localStorage.getItem('token');
        const header = {
            headers: {
                'Authorization': `Bearer ${token}`,
                // 'Content-Type': 'application/json'
            }
        }
        dispatch(APIStatus(true));
        Axios.post(URL, formData, header)
            .then((res) => {
                let resp = res.data;
                resp?.messages?.forEach(key => {
                    toast.success(key);
                });
                dispatch(APIStatus(false));
                dispatch({ type: actionTypes.REFERENCEOBJ, payload: JSON.parse(resp?.referenceObject) });
                // history.push('/register/completed');
            })
            .catch((err) => {
                if (err.response) {
                    toast.error(err.response.data.errors[0].message);
                } else {
                    toast.error("Something Wrong!", err.message);
                }
                dispatch(APIStatus(false));
            })
    }
}
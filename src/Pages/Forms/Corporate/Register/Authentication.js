import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import AuthenticationCmp from '../../../../Components/Forms/CorporateCmp/RegisterCmp/AuthenticationCmp';
import { VerifyOtpAction, ResendOtpAction } from '../../../../Store/Actions/CorporateActions/CorporateAction';

const Authentication = (props) => {

    const [otp, setOtp] = useState('');
    const [emailOtp, setEmailOtp] = useState('');
    const [errors, setErrors] = useState({ otpErr: '', otp2Err: '' });

    const dispatch = useDispatch();

    // const apiStatus = useSelector(state => state.CorporateReducer.apiStatus);

    // useEffect(() => {
    //     if (apiStatus) {
    //         props.history.push('/register/completed');
    //     }
    //     // return () => {
    //     //     dispatch(ResetRdrAction());
    //     // }
    // }, [apiStatus])

    const handlerChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'otp':
                const num = /^[0-9\b]+$/;
                setOtp(value);
                setEmailOtp('');
                if (num.test(value)) {
                    // if (val.match(phoneno)) {
                    if (value.length === 6) {
                        setErrors(preState => ({
                            ...preState,
                            otpErr: ''
                        }));
                    } else {
                        setErrors(preState => ({
                            ...preState,
                            otpErr: 'Invalid'
                        }));
                    }
                } else {
                    setErrors(preState => ({
                        ...preState,
                        otpErr: 'Invalid'
                    }));
                }
                return;
            case 'emailOtp':
                const num2 = /^[0-9\b]+$/;
                setOtp('');
                setEmailOtp(value);
                if (num2.test(value)) {
                    // if (val.match(phoneno)) {
                    if (value.length === 6) {
                        setErrors(preState => ({
                            ...preState,
                            otp2Err: ''
                        }));
                    } else {
                        setErrors(preState => ({
                            ...preState,
                            otp2Err: 'Invalid'
                        }));
                    }
                } else {
                    setErrors(preState => ({
                        ...preState,
                        otp2Err: 'Invalid'
                    }));
                }
                return;

            default:
                break;
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const { otpErr, otp2Err } = errors;
        let data = JSON.parse(localStorage.getItem('regStatus'));
        if (otp) {
            if (!otpErr) {
                const mobileModel = {
                    stakeholder: data.stakeholder,
                    platformUID: data.platformUID,
                    otp: otp,
                    phone: data.phoneNumber,
                }
                dispatch(VerifyOtpAction(mobileModel, 1, props.history));
                // props.history.push('/register/CorporateSecondary');
            } else {
                toast.error("Please enter Mobile OTP")
            }
        } else {
            if (!otp2Err) {
                const emailModel = {
                    stakeholder: data.stakeholder,
                    platformUID: data.platformUID,
                    otp: emailOtp,
                    email: data.email,
                }
                dispatch(VerifyOtpAction(emailModel, 2, props.history));
            } else {
                toast.error("Please enter Email OTP")
            }
        }
    }

    const resend = (val) => {
        let data = JSON.parse(localStorage.getItem('regStatus'));
        const model = {
            stakeholder: data.stakeholder,
            platformUID: data.platformUID,
            otpType: val,
        }
        dispatch(ResendOtpAction(model));
    }

    return (
        <AuthenticationCmp
            history={props.history}
            errors={errors}
            emailOtp={emailOtp}
            otp={otp}
            resend={resend}
            handlerChange={handlerChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default Authentication;

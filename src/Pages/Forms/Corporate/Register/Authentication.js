import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import AuthenticationCmp from '../../../../Components/Forms/CorporateCmp/RegisterCmp/AuthenticationCmp';
import { VerifyOtpAction, ResendOtpAction } from '../../../../Store/Actions/CorporateActions/CorporateAction';
import { checkObjectProperties } from '../../../../utils/utils';

const Authentication = (props) => {

    const initial = {
        phoneOtp: '',
        emailOtp: '',
    }

    const errorsObj = initial

    // const [phoneOtp, setOtp] = useState('');
    // const [emailOtp, setEmailOtp] = useState('');
    const [otp, setOtp] = useState(initial)
    const [errors, setErrors] = useState(errorsObj);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);

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

    useEffect(() => {
        const isErrorsObjEmpty = checkObjectProperties(errors);
        setIsBtnDisabled(isErrorsObjEmpty);
    }, [errors]);

    const handleChange = (name, value, errorMessage) => {
        setOtp(preState => ({
            ...preState,
            [name]: value
        }));
        setErrors(preState => ({
            ...preState,
            [name]: errorMessage
        }));
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const { otpErr, otp2Err } = errors;
        const { phoneOtp, emailOtp } = otp;
        let data = JSON.parse(localStorage.getItem('regStatus'));
        if (phoneOtp && emailOtp) {
            if (!otpErr && !otp2Err) {
                const model = {
                    stakeholder: data?.stakeholder,
                    platformUID: data?.platformUID,
                    email: data?.email,
                    phone: data?.phoneNumber,
                    phoneOtp: phoneOtp,
                    emailOtp: emailOtp,
                }
                dispatch(VerifyOtpAction(model, props.history));
                // props.history.push('/register/CorporateSecondary');
            } else {
                toast.error("Please enter Mobile & Email OTP")
            }
        }
    }

    const resend = (val) => {
        let data = JSON.parse(localStorage.getItem('regStatus'));
        const model = {
            stakeholder: data?.stakeholder,
            platformUID: data?.platformUID,
            otpType: val,
        }
        dispatch(ResendOtpAction(model));
    }

    return (
        <AuthenticationCmp
            history={props.history}
            errors={errors}
            otp={otp}
            isBtnDisabled={isBtnDisabled}
            resend={resend}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default Authentication;

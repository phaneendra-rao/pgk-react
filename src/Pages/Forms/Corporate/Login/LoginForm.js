import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import LoginCmp from '../../../../Components/Forms/CorporateCmp/LoginCmp';
import { LoginUserAction } from '../../../../Store/Actions/CorporateActions/CorporateAction';

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ emailErr: '', passwordErr: '' });

    const dispatch = useDispatch();
    const apiStatus = useSelector(state => state.CorporateReducer.apiStatus);

    // const type = localStorage.getItem('type') || props.type;
    const type = props.type || localStorage.getItem('type');

    useEffect(() => {
        localStorage.removeItem('amount');
        localStorage.removeItem('regStatus');
        localStorage.removeItem('steps');
        localStorage.removeItem('token');
        localStorage.removeItem('orderID');
    }, [])
    
    // useEffect(() => {
    //     if (apiStatus) {
    //         props.history.push('/register/payment');
    //     }
    //     // return () => {
    //     //     dispatch(ResetRdrAction());
    //     // }
    // }, [apiStatus])

    const handlerChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'email':
                const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (value && mailformat.test(value)) {
                    setEmail(value);
                    setErrors(preState => ({
                        ...preState,
                        emailErr: ''
                    }));
                } else if (!value || !mailformat.test(value)) {
                    setEmail(value);
                    setErrors(preState => ({
                        ...preState,
                        emailErr: 'Email error'
                    }));
                }
                return;
            case 'password':
                if (value && value.length >= 8) {
                    setPassword(value);
                    setErrors(preState => ({
                        ...preState,
                        passwordErr: ''
                    }));
                } else {
                    setPassword(value)
                    setErrors(preState => ({
                        ...preState,
                        passwordErr: 'Password error'
                    }));
                }
                return;

            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { emailErr, passwordErr } = errors;
        if (email && password && !emailErr && !passwordErr) {
            const model = {
                stakeholder: type,
                userID: email,
                password: password
            }
            dispatch(LoginUserAction(model, props.history))
        } else {
            toast.error("Please enter all input fields")
        }
    }

    return (
        <LoginCmp
            email={email}
            type={type}
            password={password}
            handlerChange={handlerChange}
            handleSubmit={handleSubmit}
            errors={errors}
        />
    )
}

export default LoginForm;

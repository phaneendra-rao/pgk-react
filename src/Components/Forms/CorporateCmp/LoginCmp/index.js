import React from 'react';
import { Link } from 'react-router-dom';
import PgkTextField from '../../../FormFields/PgkTextField';

const LoginCmp = (props) => {
    return (
        <form className="login-form" onSubmit={props.handleSubmit}>
            <div className="login-grp">
                <PgkTextField
                    name="email"
                    onChange={props?.handleChange}
                    value={props?.loginObj?.email}
                    label={'Corporate ID / Email'}
                    errorMessage={props?.errors?.email}
                    required={true}
                    validations={['isEmail']}
                />
                {/* <input
                    type="email"
                    name="email"
                    onChange={handlerChange}
                    className={`login-inp${emailErr ? ' login-inp-error' : ''}`}
                    placeholder="test@test.com"
                    required />
                <label className="inp-caption">Corporate ID / Email</label>
                {emailErr ? <p className="inp-errors">{emailErr}</p> : null} */}
            </div>
            <div className="login-grp" style={{ marginTop: '30px' }}>
                <PgkTextField
                    type={'password'}
                    name="password"
                    onChange={props?.handleChange}
                    value={props?.loginObj?.password}
                    label={'Password'}
                    errorMessage={props?.errors?.password}
                    required={true}
                    validations={["minLength_8"]}
                />
                {/* <input
                    type="password"
                    name="password"
                    onChange={handlerChange}
                    className={`login-inp${passwordErr ? ' login-inp-error' : ''}`}
                    placeholder="**********"
                    required />
                <label className="inp-caption">Password</label>
                {passwordErr ? <p className="inp-errors">{passwordErr}</p> : null} */}
            </div>
            <div className="text-center">
                <button type="submit" disabled={props.isBtnDisabled} className="login-btn">Login</button>
            </div>
            <p className="login-register">New here ?</p>
            <div className="text-center">
                <Link to={props.type === 'Student' ? '/register/studentRegister' : '/register'} className="login-reg-link">
                    <button type="button" className="login-btn">Register as new {props.type}</button>
                </Link>
                <Link to="/c2hire" className="login-reg-link">
                    <button type="button" className="btn">C2Hire</button>
                </Link>
            </div>
        </form>
    )
}

export default LoginCmp;

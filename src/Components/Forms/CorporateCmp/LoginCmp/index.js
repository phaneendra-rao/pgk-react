import React from 'react';
import { Link } from 'react-router-dom';

const LoginCmp = ({ type, email, password, handlerChange, handleSubmit, errors }) => {
    const { emailErr, passwordErr } = errors;

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-grp">
                <input
                    type="email"
                    name="email"
                    onChange={handlerChange}
                    className={`login-inp${emailErr ? ' login-inp-error' : ''}`}
                    placeholder="test@test.com"
                    required />
                    <label className="inp-caption">Corporate ID / Email</label>
                {emailErr ? <p className="inp-errors">{emailErr}</p> : null}
            </div>
            <div className="login-grp">
                <input
                    type="password"
                    name="password"
                    onChange={handlerChange}
                    className={`login-inp${passwordErr ? ' login-inp-error' : ''}`}
                    placeholder="**********"
                    required />
                    <label className="inp-caption">Password</label>
                {passwordErr ? <p className="inp-errors">{passwordErr}</p> : null}
            </div>
            <div className="text-center">
                <button
                    type="submit"
                    disabled={emailErr || passwordErr || !email || !password}
                    className="login-btn">Login</button>
            </div>
            <p className="login-register">New here ?</p>
            <div className="text-center">
                <Link to={type === 'Student' ? '/register/studentRegister' : '/register'} className="login-reg-link">
                    <button type="button" className="btn">Register as new {type}</button>
                </Link>
            </div>
        </form>
    )
}

export default LoginCmp;

import React from 'react';

const AuthenticationCmp = ({ history, errors, emailOtp, otp, handlerChange, handleSubmit, resend }) => {
    const { otpErr, otp2Err } = errors;
    return (
        <form className="login-form reg-form" onSubmit={handleSubmit}>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="reg-header justify-content-center">
                        Verify your Primary Email &amp; Phone Number
                    </div>
                    <div className="row justify-content-center reg-center">
                        <div className="col-md-8">
                            <div className="reg-media">
                                <div className="reg-media-icon">
                                    <i className="fas fa-envelope" />
                                </div>
                                <div className="reg-media-grp">
                                    <div className="login-grp">
                                        <label className="login-label">Enter the OTP sent to Primary Contact Email</label>
                                        <input
                                            type="password"
                                            name="emailOtp"
                                            onChange={handlerChange}
                                            value={emailOtp}
                                            className={`login-inp${otp2Err ? ' login-inp-error' : ''}`}
                                            placeholder="xxxxxx"
                                            required={false} />
                                        {otp2Err ? <p className="inp-errors">{otp2Err}</p> : null}
                                        <p className="reg-resend"><a href="javascript:void(0)" onClick={() => resend('Email')}>Resend OTP</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="reg-media">
                                <div className="reg-media-icon">
                                    <i className="far fa-comment-alt" />
                                </div>
                                <div className="reg-media-grp">
                                    <div className="login-grp">
                                        <label className="login-label">Enter the OTP sent to Primary Contact Mobile</label>
                                        <input
                                            type="password"
                                            name="otp"
                                            onChange={handlerChange}
                                            value={otp}
                                            className={`login-inp${otpErr ? ' login-inp-error' : ''}`}
                                            placeholder="xxxxxx"
                                            required={false} />
                                        {otpErr ? <p className="inp-errors">{otpErr}</p> : null}
                                        <p className="reg-resend"><a href="javascript:void(0)" onClick={() => resend('Phone')}>Resend OTP</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <button type="button" onClick={() => { history.push('/register/contactPersonnel') }} className="reg-btn">Previous</button>
                        <button type="submit" className="reg-btn">Next</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default AuthenticationCmp;

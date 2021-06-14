import React from 'react';

const ContactPersonnelCmp = ({history, errors, contactPersonnel, handlerChange, handleSubmit }) => {
    const { emailErr, email2Err, passwordErr, lnameErr, fnameErr, designationErr, repeatPasswordErr, mobileErr, mobile2Err } = errors;
    return (
        <form onSubmit={handleSubmit} className="login-form reg-form">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="reg-header"><i className="far fa-user" />Primary Contact</div>
                    <div className="row">
                        <div className="col-md-4 pr-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="primaryContactFirstName"
                                    onChange={handlerChange}
                                    defaultValue={contactPersonnel.primaryContactFirstName}
                                    className={`login-inp${fnameErr ? ' login-inp-error' : ''}`}
                                    placeholder="First Name"
                                    autoFocus
                                    required={true} />
                                    {fnameErr ? <p className="inp-errors">{fnameErr}</p> : null}
                            </div>
                        </div>
                        <div className="col-md-4 px-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="primaryContactMiddleName"
                                    onChange={handlerChange}
                                    defaultValue={contactPersonnel.primaryContactMiddleName}
                                    className={`login-inp`}
                                    placeholder="Middle Name"
                                    required={false} />
                            </div>
                        </div>
                        <div className="col-md-4 pl-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="primaryContactLastName"
                                    onChange={handlerChange}
                                    defaultValue={contactPersonnel.primaryContactLastName}
                                    className={`login-inp${lnameErr ? ' login-inp-error' : ''}`}
                                    placeholder="Last Name"
                                    required={true} />
                                    {lnameErr ? <p className="inp-errors">{lnameErr}</p> : null}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 pr-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="primaryContactDesignation"
                                    onChange={handlerChange}
                                    defaultValue={contactPersonnel.primaryContactDesignation}
                                    className={`login-inp${designationErr ? ' login-inp-error' : ''}`}
                                    placeholder="Designation"
                                    required={true} />
                                    {designationErr ? <p className="inp-errors">{designationErr}</p> : null}
                            </div>
                        </div>
                        <div className="col-md-4 px-1">
                            <div className="login-grp">
                                <input
                                    type="tel"
                                    name="primaryContactPhone"
                                    onChange={handlerChange}
                                    defaultValue={contactPersonnel.primaryContactPhone}
                                    className={`login-inp${mobileErr ? ' login-inp-error' : ''}`}
                                    placeholder="Phone Number"
                                    required={true} />
                                    {mobileErr ? <p className="inp-errors">{mobileErr}</p> : null}
                            </div>
                        </div>
                        <div className="col-md-4 pl-1">
                            <div className="login-grp">
                                <input
                                    type="email"
                                    name="primaryContactEmail"
                                    onChange={handlerChange}
                                    defaultValue={contactPersonnel.primaryContactEmail}
                                    className={`login-inp${emailErr ? ' login-inp-error' : ''}`}
                                    placeholder="Email"
                                    required={true} />
                                    {emailErr ? <p className="inp-errors">{emailErr}</p> : null}
                            </div>
                        </div>
                    </div>
                    <div className="reg-header"><i className="far fa-user" />Secondary Contact</div>
                    <div className="row">
                        <div className="col-md-4 pr-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="secondaryContactFirstName"
                                    onChange={handlerChange}
                                    defaultValue={contactPersonnel.secondaryContactFirstName}
                                    className={`login-inp`}
                                    placeholder="First Name"
                                    required={false} />
                            </div>
                        </div>
                        <div className="col-md-4 px-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="secondaryContactMiddleName"
                                    onChange={handlerChange}
                                    defaultValue={contactPersonnel.secondaryContactMiddleName}
                                    className={`login-inp`}
                                    placeholder="Middle Name"
                                    required={false} />
                            </div>
                        </div>
                        <div className="col-md-4 pl-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="secondaryContactLastName"
                                    onChange={handlerChange}
                                    defaultValue={contactPersonnel.secondaryContactLastName}
                                    className={`login-inp`}
                                    placeholder="Last Name"
                                    required={false} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 pr-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="secondaryContactDesignation"
                                    onChange={handlerChange}
                                    defaultValue={contactPersonnel.secondaryContactDesignation}
                                    className={`login-inp`}
                                    placeholder="Designation"
                                    required={false} />
                            </div>
                        </div>
                        <div className="col-md-4 px-1">
                            <div className="login-grp">
                                <input
                                    type="tel"
                                    name="secondaryContactPhone"
                                    onChange={handlerChange}
                                    defaultValue={contactPersonnel.secondaryContactPhone}
                                    className={`login-inp${mobile2Err ? ' login-inp-error' : ''}`}
                                    placeholder="Phone Number"
                                    required={false} />
                                    {mobile2Err ? <p className="inp-errors">{mobile2Err}</p> : null}
                            </div>
                        </div>
                        <div className="col-md-4 pl-1">
                            <div className="login-grp">
                                <input
                                    type="email"
                                    name="secondaryContactEmail"
                                    onChange={handlerChange}
                                    defaultValue={contactPersonnel.secondaryContactEmail}
                                    className={`login-inp${email2Err ? ' login-inp-error' : ''}`}
                                    placeholder="Email"
                                    required={false} />
                                    {email2Err ? <p className="inp-errors">{email2Err}</p> : null}
                            </div>
                        </div>
                    </div>
                    <div className="reg-header"><i className="fas fa-unlock-alt" />Password</div>
                    <div className="row">
                        <div className="col-md-6 pr-1">
                            <div className="login-grp">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handlerChange}
                                    defaultValue={contactPersonnel.password}
                                    className={`login-inp${passwordErr ? ' login-inp-error' : ''}`}
                                    placeholder="Choose your login password (Min 8 digits)"
                                    required={true} />
                                    {passwordErr ? <p className="inp-errors">{passwordErr}</p> : null}
                            </div>
                        </div>
                        <div className="col-md-6 pl-1">
                            <div className="login-grp">
                                <input
                                    type="password"
                                    name="repeatPassword"
                                    onChange={handlerChange}
                                    className={`login-inp${repeatPasswordErr ? ' login-inp-error' : ''}`}
                                    placeholder="Repeat the password"
                                    required={true} />
                                    {repeatPasswordErr ? <p className="inp-errors">{repeatPasswordErr}</p> : null}
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <button type="button" className="reg-btn" onClick={() => { history.push('/register/CorporateSecondary') }}>Previous</button>
                        <button type="submit" className="reg-btn">Next</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ContactPersonnelCmp

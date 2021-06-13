import React from 'react';
import PgkTextField from '../../../FormFields/PgkTextField';
import RegisterHeader from './RegisterHeader';

const ContactPersonnelCmp = (props) => {

    const isMatch = (value) => {
        if (props?.contactPersonnel?.password !== value) {
            return 'Password does not match'
        }
    }

    return (
        <form onSubmit={props.handleSubmit} className="login-form reg-form">
            {props.showError ? <div className="alert alert-danger" role="alert">Please check all inputs</div> : null}
            <RegisterHeader title="Primary Contact" />
            <div className="row justify-content-center">
                <div className="col-md-11">
                    <div className="row">
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="primaryContactFirstName"
                                    onChange={props?.handleChange}
                                    value={props?.contactPersonnel?.primaryContactFirstName}
                                    label={'First Name'}
                                    errorMessage={props?.errors?.primaryContactFirstName}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="primaryContactMiddleName"
                                    onChange={props?.handleChange}
                                    value={props?.contactPersonnel?.primaryContactMiddleName}
                                    label={'Middle Name'}
                                    errorMessage={props?.errors?.primaryContactMiddleName}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="primaryContactLastName"
                                    onChange={props?.handleChange}
                                    value={props?.contactPersonnel?.primaryContactLastName}
                                    label={'Last Name'}
                                    errorMessage={props?.errors?.primaryContactLastName}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="primaryContactDesignation"
                                    onChange={props?.handleChange}
                                    value={props?.contactPersonnel?.primaryContactDesignation}
                                    label={'Designation'}
                                    errorMessage={props?.errors?.primaryContactDesignation}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    type={'number'}
                                    name="primaryContactPhone"
                                    onChange={props?.handleChange}
                                    value={props?.contactPersonnel?.primaryContactPhone}
                                    label={'Phone Number'}
                                    errorMessage={props?.errors?.primaryContactPhone}
                                    required={true}
                                    // validations={[(value) => updatePhone(value)]}
                                    validations={['minLength_10', 'maxLength_10']}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="primaryContactEmail"
                                    onChange={props?.handleChange}
                                    value={props?.contactPersonnel?.primaryContactEmail}
                                    label={'Email'}
                                    errorMessage={props?.errors?.primaryContactEmail}
                                    required={true}
                                    validations={['isEmail']}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RegisterHeader title="Secondary Contact" />
            <div className="row justify-content-center">
                <div className="col-md-11">
                    <div className="row">
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="secondaryContactFirstName"
                                    onChange={props?.handleChange}
                                    value={props?.contactPersonnel?.secondaryContactFirstName}
                                    label={'First Name'}
                                    errorMessage={props?.errors?.secondaryContactFirstName}
                                    required={false}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="secondaryContactMiddleName"
                                    onChange={props?.handleChange}
                                    value={props?.contactPersonnel?.secondaryContactMiddleName}
                                    label={'Middle Name'}
                                    errorMessage={props?.errors?.secondaryContactMiddleName}
                                    required={false}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="secondaryContactLastName"
                                    onChange={props?.handleChange}
                                    value={props?.contactPersonnel?.secondaryContactLastName}
                                    label={'Last Name'}
                                    errorMessage={props?.errors?.secondaryContactLastName}
                                    required={false}
                                />
                            </div>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="secondaryContactDesignation"
                                    onChange={props?.handleChange}
                                    value={props?.contactPersonnel?.secondaryContactDesignation}
                                    label={'Designation'}
                                    errorMessage={props?.errors?.secondaryContactDesignation}
                                    required={false}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    type={'number'}
                                    name="secondaryContactPhone"
                                    onChange={props?.handleChange}
                                    value={props?.contactPersonnel?.secondaryContactPhone}
                                    label={'Phone Number'}
                                    errorMessage={props?.errors?.secondaryContactPhone}
                                    required={false}
                                    // validations={[(value) => updatePhone(value)]}
                                    validations={['minLength_10', 'maxLength_10']}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="secondaryContactEmail"
                                    onChange={props?.handleChange}
                                    value={props?.contactPersonnel?.secondaryContactEmail}
                                    label={'Email'}
                                    errorMessage={props?.errors?.secondaryContactEmail}
                                    required={false}
                                    validations={['isEmail']}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <RegisterHeader title="Password" />
            <div className="row justify-content-center">
                <div className="col-md-11">
                    <div className="row">
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    type={'password'}
                                    name="password"
                                    onChange={props?.handleChange}
                                    value={props?.contactPersonnel?.password}
                                    label={'Password (min 8)'}
                                    errorMessage={props?.errors?.password}
                                    required={true}
                                    validations={["minLength_8"]}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    type={'password'}
                                    name="repeatPassword"
                                    onChange={props?.handleChange}
                                    value={props?.repeatPassword}
                                    label={'Repeat the password'}
                                    errorMessage={props?.repeatPasswordErr}
                                    validations={["minLength_8", (value) => isMatch(value)]}
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
                <button type="button" className="reg-btn" onClick={() => { props.history.push('/register/CorporateSecondary') }}>Previous</button>
                <button type="submit" className="reg-btn" disabled={props.isBtnDisabled}>Next</button>
            </div>
        </form>
    )
}

export default ContactPersonnelCmp

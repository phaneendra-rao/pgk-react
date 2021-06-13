import React from 'react';
import { useHistory } from 'react-router-dom';
import PgkSelectField from '../../../FormFields/PgkSelectField';
import PgkTextField from '../../../FormFields/PgkTextField';
import RegisterHeader from './RegisterHeader';

const CorporateSecondaryCmp = (props) => {
    const type = localStorage.getItem('type');
    const countryCodes = props.countryCodes && props.countryCodes.length >= 0
        ? props.countryCodes?.map((item, i) => ({ value: item.name, label: item.name })) : (null);
    const stateList = [
        { value: 'AP', label: 'AP' },
        { value: 'TS', label: 'TS' }
    ]

    const updatePhone = (value) => {
        if (value.length !== 10) {
            return 'Invalid phone number'
        }
    }

    const history = useHistory();

    return (
        <form onSubmit={props.handleSubmit} className="login-form reg-form">
            <RegisterHeader title="Address" />
            <div className="row">
                <div className="col-md-6">
                    <h6 className="reg-label">{type} Headquarters</h6>
                    <div className="mb-15">
                        <PgkTextField
                            name="corporateHQAddressLine1"
                            onChange={props?.handleChange}
                            value={props?.corporateSecondary?.corporateHQAddressLine1}
                            label={'Address (Line 1)'}
                            errorMessage={props?.errors?.corporateHQAddressLine1}
                            required={true}
                        />
                    </div>
                    <div className="mb-15">
                        <PgkTextField
                            name="corporateHQAddressLine2"
                            onChange={props?.handleChange}
                            value={props?.corporateSecondary?.corporateHQAddressLine2}
                            label={'Address (Line 2)'}
                            errorMessage={props?.errors?.corporateHQAddressLine2}
                            required={true}
                        />
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkSelectField
                                    name="corporateHQAddressCountry"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateHQAddressCountry}
                                    label={'Country'}
                                    options={countryCodes}
                                    errorMessage={props?.errors?.corporateHQAddressCountry}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkSelectField
                                    name="corporateHQAddressState"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateHQAddressState}
                                    label={'State'}
                                    options={stateList}
                                    errorMessage={props?.errors?.corporateHQAddressState}
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="corporateHQAddressCity"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateHQAddressCity}
                                    label={'City'}
                                    errorMessage={props?.errors?.corporateHQAddressCity}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="corporateHQAddressDistrict"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateHQAddressDistrict}
                                    label={'District'}
                                    errorMessage={props?.errors?.corporateHQAddressDistrict}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    type={'number'}
                                    name="corporateHQAddressZipCode"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateHQAddressZipCode}
                                    label={'Zipcode'}
                                    errorMessage={props?.errors?.corporateHQAddressZipCode}
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    type={'number'}
                                    name="corporateHQAddressPhone"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateHQAddressPhone}
                                    label={'Phone Number'}
                                    errorMessage={props?.errors?.corporateHQAddressPhone}
                                    required={true}
                                    validations={[(value) => updatePhone(value)]}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="corporateHQAddressEmail"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateHQAddressEmail}
                                    label={'Office mail'}
                                    errorMessage={props?.errors?.corporateHQAddressEmail}
                                    required={true}
                                    validations={['isEmail']}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="d-lg-flex">
                        <h6 className="reg-label">{props.type} Local Branch</h6>
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                onChange={props.saveData}
                                className="custom-control-input"
                                id="save" />
                            <label className="custom-control-label" htmlFor="save">Same as {props.type} Head Quarters</label>
                        </div>
                    </div>
                    <div className="mb-15">
                        <PgkTextField
                            name="corporateLocalBranchAddressLine1"
                            onChange={props?.handleChange}
                            value={props?.corporateSecondary?.corporateLocalBranchAddressLine1}
                            label={'Address (Line 1)'}
                            errorMessage={props?.errors?.corporateLocalBranchAddressLine1}
                            required={true}
                        />
                    </div>
                    <div className="mb-15">
                        <PgkTextField
                            name="corporateLocalBranchAddressLine2"
                            onChange={props?.handleChange}
                            value={props?.corporateSecondary?.corporateLocalBranchAddressLine2}
                            label={'Address (Line 2)'}
                            errorMessage={props?.errors?.corporateLocalBranchAddressLine2}
                            required={true}
                        />
                    </div>
                    <div className="row">
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkSelectField
                                    name="corporateLocalBranchAddressCountry"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateLocalBranchAddressCountry}
                                    label={'Country'}
                                    options={countryCodes}
                                    errorMessage={props?.errors?.corporateLocalBranchAddressCountry}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkSelectField
                                    name="corporateLocalBranchAddressState"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateLocalBranchAddressState}
                                    label={'State'}
                                    options={stateList}
                                    errorMessage={props?.errors?.corporateLocalBranchAddressState}
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="corporateLocalBranchAddressCity"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateLocalBranchAddressCity}
                                    label={'City'}
                                    errorMessage={props?.errors?.corporateLocalBranchAddressCity}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="corporateLocalBranchAddressDistrict"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateLocalBranchAddressDistrict}
                                    label={'District'}
                                    errorMessage={props?.errors?.corporateLocalBranchAddressDistrict}
                                    required={true}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    type={'number'}
                                    name="corporateLocalBranchAddressZipCode"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateLocalBranchAddressZipCode}
                                    label={'Zipcode'}
                                    errorMessage={props?.errors?.corporateLocalBranchAddressZipCode}
                                    required={true}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    type={'number'}
                                    name="corporateLocalBranchAddressPhone"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateLocalBranchAddressPhone}
                                    label={'Phone Number'}
                                    errorMessage={props?.errors?.corporateLocalBranchAddressPhone}
                                    required={true}
                                    validations={[(value) => updatePhone(value)]}
                                />
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="mb-15">
                                <PgkTextField
                                    name="corporateLocalBranchAddressEmail"
                                    onChange={props?.handleChange}
                                    value={props?.corporateSecondary?.corporateLocalBranchAddressEmail}
                                    label={'Office mail'}
                                    errorMessage={props?.errors?.corporateLocalBranchAddressEmail}
                                    required={true}
                                    validations={['isEmail']}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RegisterHeader title="Profile" />
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-15">
                        <PgkTextField
                            name="companyProfile"
                            onChange={props?.handleChange}
                            value={props?.corporateSecondary?.companyProfile}
                            label={'Company Profile (in Brief)'}
                            multiline={true}
                            minRows={8}
                            errorMessage={props?.errors?.companyProfile}
                            required={true}
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="reg-attach">
                        {props?.corporateSecondary?.attachment ? <span><i className="fas fa-check-circle"></i></span> : <span style={{fontSize: 14, top: 10, color: 'grey'}}>Attachment for profile</span>}
                        <input
                            type="file"
                            onChange={props.handleChangeImg}
                            accept="image/*"
                            className="reg-inp"
                            name="attachment"
                            id="attachment"
                            required={false} />
                        <label htmlFor="attachment" className="reg-label">Attach</label>
                    </div>
                    {props.path
                        ? <div className="text-center">
                            <img src={props.path} alt="please select image" className="img-thumbnail mb-3 w-50" />
                        </div>
                        : (null)
                    }
                </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
                <button type="button" className="reg-btn" onClick={() => history.push('/register')}>Previous</button>
                <button type="submit" className="reg-btn">Next</button>
            </div>
        </form>
    )
}

export default CorporateSecondaryCmp;

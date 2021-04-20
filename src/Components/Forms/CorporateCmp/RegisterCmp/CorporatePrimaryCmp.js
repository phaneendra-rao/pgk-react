import React from 'react';

const CorporatePrimaryCmp = ({ history, corporatePrimaryData, errors, saveData, handlerChange, handleSubmit, countryCodes, code, code2 }) => {
    const type = localStorage.getItem('type');
    const { emailErr, email2Err, mobileErr, mobile2Err } = errors;
    return (
        <form onSubmit={handleSubmit} className="login-form reg-form">
            <div className="row">
                <div className="col-md-6">
                    <div className="login-grp">
                        <input
                            type="text"
                            name="corporateName"
                            onChange={handlerChange}
                            defaultValue={corporatePrimaryData.corporateName}
                            className="login-inp"
                            placeholder={`${type} Name`}
                            autoFocus
                            required={true} />
                    </div>
                    <h6 className="reg-label">{type} Headquarters</h6>
                    <div className="login-grp">
                        <input
                            type="text"
                            name="corporateHQAddressLine1"
                            onChange={handlerChange}
                            defaultValue={corporatePrimaryData.corporateHQAddressLine1}
                            className="login-inp"
                            placeholder="Address (Line 1)"
                            required={false} />
                    </div>
                    <div className="login-grp">
                        <input
                            type="text"
                            name="corporateHQAddressLine2"
                            onChange={handlerChange}
                            defaultValue={corporatePrimaryData.corporateHQAddressLine2}
                            className="login-inp"
                            placeholder="Address (Line 2)"
                            required={false} />
                    </div>
                    <div className="row">
                        <div className="col-md-6 pr-1">
                            <div className="login-grp">
                                <select
                                    name="corporateHQAddressCountry"
                                    onChange={handlerChange}
                                    defaultValue={corporatePrimaryData.corporateHQAddressCountry ? corporatePrimaryData.corporateHQAddressCountry : 'DEFAULT'}
                                    // defaultValue={'DEFAULT'}
                                    className="login-inp"
                                    required={false}>
                                    <option value={'DEFAULT'} disabled>Country</option>
                                    {countryCodes && countryCodes.length >= 0
                                        ? countryCodes.map((item, i) => <option key={i} value={item.name}>{item.name}</option>) : (null)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 pl-1">
                            <div className="login-grp">
                                <select
                                    name="corporateHQAddressState"
                                    onChange={handlerChange}
                                    defaultValue={corporatePrimaryData.corporateHQAddressState ? corporatePrimaryData.corporateHQAddressState : 'DEFAULT'}
                                    className="login-inp"
                                    required={false}>
                                    <option value={'DEFAULT'} disabled>State</option>
                                    <option value="TS">TS</option>
                                    <option value="AP">AP</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 pr-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="corporateHQAddressCity"
                                    onChange={handlerChange}
                                    defaultValue={corporatePrimaryData.corporateHQAddressCity}
                                    className="login-inp"
                                    placeholder="City"
                                    required={false} />
                            </div>
                        </div>
                        <div className="col-md-4 px-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="corporateHQAddressDistrict"
                                    onChange={handlerChange}
                                    defaultValue={corporatePrimaryData.corporateHQAddressDistrict}
                                    className="login-inp"
                                    placeholder="District"
                                    required={false} />
                            </div>
                        </div>
                        <div className="col-md-4 pl-1">
                            <div className="login-grp">
                                <input
                                    type="number"
                                    name="corporateHQAddressZipCode"
                                    onChange={handlerChange}
                                    defaultValue={corporatePrimaryData.corporateHQAddressZipCode}
                                    className="login-inp"
                                    placeholder="Zipcode"
                                    required={false} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 pr-1">
                            <div className="login-grp">
                                <div className="d-flex">
                                    <input
                                        type="tel"
                                        name="code"
                                        onChange={handlerChange}
                                        value={code}
                                        className={`login-inp px-1 text-center`}
                                        placeholder=""
                                        style={{ width: '50px' }}
                                        readOnly
                                        disabled
                                        required={true} />
                                    <input
                                        type="tel"
                                        name="corporateHQAddressPhone"
                                        onChange={handlerChange}
                                        defaultValue={corporatePrimaryData.corporateHQAddressPhone}
                                        className={`login-inp${mobileErr ? ' login-inp-error' : ''}`}
                                        placeholder="Phone Number"
                                        required={true} />
                                </div>
                                {mobileErr ? <p className="inp-errors">{mobileErr}</p> : null}
                            </div>
                        </div>
                        <div className="col-md-6 pl-1">
                            <div className="login-grp">
                                <input
                                    type="email"
                                    name="corporateHQAddressEmail"
                                    onChange={handlerChange}
                                    defaultValue={corporatePrimaryData.corporateHQAddressEmail}
                                    className={`login-inp${emailErr ? ' login-inp-error' : ''}`}
                                    placeholder="Office mail"
                                    required={false} />
                                {emailErr ? <p className="inp-errors">{emailErr}</p> : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="login-grp">
                        <input
                            type="text"
                            name="CIN"
                            onChange={handlerChange}
                            defaultValue={corporatePrimaryData.CIN}
                            className="login-inp"
                            placeholder={type === 'Corporate' ? 'CIN' : 'University/College ID'}
                            required={true} />
                    </div>
                    <div className="d-lg-flex">
                        <h6 className="reg-label">{type} Local Branch</h6>
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                onChange={saveData}
                                className="custom-control-input"
                                id="save" />
                            <label className="custom-control-label" htmlFor="save">Same as {type} Head Quarters</label>
                        </div>
                    </div>
                    <div className="login-grp">
                        <input
                            type="text"
                            name="corporateLocalBranchAddressLine1"
                            onChange={handlerChange}
                            defaultValue={corporatePrimaryData.corporateLocalBranchAddressLine1}
                            className="login-inp"
                            placeholder="Address (Line 1)"
                            required={false} />
                    </div>
                    <div className="login-grp">
                        <input
                            type="text"
                            name="corporateLocalBranchAddressLine2"
                            onChange={handlerChange}
                            defaultValue={corporatePrimaryData.corporateLocalBranchAddressLine2}
                            className="login-inp"
                            placeholder="Address (Line 2)"
                            required={false} />
                    </div>
                    <div className="row">
                        <div className="col-md-6 pr-1">
                            <div className="login-grp">
                                <select
                                    name="corporateLocalBranchAddressCountry"
                                    onChange={handlerChange}
                                    value={corporatePrimaryData.corporateLocalBranchAddressCountry ? corporatePrimaryData.corporateLocalBranchAddressCountry : 'DEFAULT'}
                                    className="login-inp"
                                    required={false}>
                                    <option value={'DEFAULT'} disabled>Country</option>
                                    {countryCodes && countryCodes.length >= 0
                                        ? countryCodes.map((item, i) => <option key={i} value={item.name}>{item.name}</option>) : (null)
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 pl-1">
                            <div className="login-grp">
                                <select
                                    name="corporateLocalBranchAddressState"
                                    onChange={handlerChange}
                                    value={corporatePrimaryData.corporateLocalBranchAddressState ? corporatePrimaryData.corporateLocalBranchAddressState : 'DEFAULT'}
                                    className="login-inp"
                                    required={false}>
                                    <option value={'DEFAULT'} disabled>State</option>
                                    <option value="TS">TS</option>
                                    <option value="AP">AP</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 pr-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="corporateLocalBranchAddressCity"
                                    onChange={handlerChange}
                                    defaultValue={corporatePrimaryData.corporateLocalBranchAddressCity}
                                    className="login-inp"
                                    placeholder="City"
                                    required={false} />
                            </div>
                        </div>
                        <div className="col-md-4 px-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="corporateLocalBranchAddressDistrict"
                                    onChange={handlerChange}
                                    defaultValue={corporatePrimaryData.corporateLocalBranchAddressDistrict}
                                    className="login-inp"
                                    placeholder="District"
                                    required={false} />
                            </div>
                        </div>
                        <div className="col-md-4 pl-1">
                            <div className="login-grp">
                                <input
                                    type="number"
                                    name="corporateLocalBranchAddressZipCode"
                                    onChange={handlerChange}
                                    defaultValue={corporatePrimaryData.corporateLocalBranchAddressZipCode}
                                    className="login-inp"
                                    placeholder="Zipcode"
                                    required={false} />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 pr-1">
                            <div className="login-grp">
                                <div className="d-flex">
                                    <input
                                        type="tel"
                                        name="code2"
                                        onChange={handlerChange}
                                        defaultValue={code2}
                                        className={`login-inp px-1 text-center`}
                                        placeholder=""
                                        style={{ width: '50px' }}
                                        readOnly
                                        disabled
                                        required={true} />
                                    <input
                                        type="tel"
                                        name="corporateLocalBranchAddressPhone"
                                        onChange={handlerChange}
                                        defaultValue={corporatePrimaryData.corporateLocalBranchAddressPhone}
                                        className={`login-inp${mobile2Err ? ' login-inp-error' : ''}`}
                                        placeholder="Phone Number"
                                        required={false} />
                                </div>
                                {mobile2Err ? <p className="inp-errors">{mobile2Err}</p> : null}
                            </div>
                        </div>
                        <div className="col-md-6 pl-1">
                            <div className="login-grp">
                                <input
                                    type="email"
                                    name="corporateLocalBranchAddressEmail"
                                    onChange={handlerChange}
                                    defaultValue={corporatePrimaryData.corporateLocalBranchAddressEmail}
                                    className={`login-inp${email2Err ? ' login-inp-error' : ''}`}
                                    placeholder="Office mail"
                                    required={false} />
                                {email2Err ? <p className="inp-errors">{email2Err}</p> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right">
                <button type="submit" className="reg-btn">Next</button>
            </div>
        </form>
    )
}

export default CorporatePrimaryCmp;

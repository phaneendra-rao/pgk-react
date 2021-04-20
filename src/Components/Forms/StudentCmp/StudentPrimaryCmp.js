import React from 'react';

const StudentPrimaryCmp = ({ countryCodes, code, history, studentPrimaryData, errors, saveData, handlerChange, handleSubmit }) => {
    const { emailErr, email2Err, mobileErr, mobile2Err } = errors;
    return (
        <form onSubmit={handleSubmit} className="login-form reg-form">
            <div className="row">
                <div className="col-md-4">
                    <div className="login-grp">
                        <input
                            type="text"
                            name="firstName"
                            onChange={handlerChange}
                            defaultValue={studentPrimaryData.firstName}
                            className="login-inp"
                            placeholder='Student First Name'
                            autoFocus
                            required={true} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="login-grp">
                        <input
                            type="text"
                            name="middleName"
                            onChange={handlerChange}
                            defaultValue={studentPrimaryData.middleName}
                            className="login-inp"
                            placeholder='Middle Name'
                            autoFocus
                            required={true} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="login-grp">
                        <input
                            type="text"
                            name="lastName"
                            onChange={handlerChange}
                            defaultValue={studentPrimaryData.lastName}
                            className="login-inp"
                            placeholder='Last Name'
                            autoFocus
                            required={true} />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="login-grp">
                        <input
                            type="text"
                            name="collegeID"
                            onChange={handlerChange}
                            defaultValue={studentPrimaryData.collegeID}
                            className="login-inp"
                            placeholder='Student College ID'
                            autoFocus
                            required={true} />
                    </div>
                </div>
                <div className="col-md-5">
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
                            <div>
                                <input
                                    type="tel"
                                    name="phoneNuber"
                                    onChange={handlerChange}
                                    defaultValue={studentPrimaryData.phone}
                                    className={`login-inp${mobileErr ? ' login-inp-error' : ''}`}
                                    placeholder="Mobile Number"
                                    required={true} />
                                {mobileErr ? <p className="inp-errors">{mobileErr}</p> : null}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="login-grp">
                        <input
                            type="email"
                            name="email"
                            onChange={handlerChange}
                            defaultValue={studentPrimaryData.email}
                            className={`login-inp${emailErr ? ' login-inp-error' : ''}`}
                            placeholder="Office mail"
                            required={false} />
                        {emailErr ? <p className="inp-errors">{emailErr}</p> : null}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <h6 className="reg-label">Present Address</h6>
                    <div className="login-grp">
                        <input
                            type="text"
                            name="presentAddressLine1"
                            onChange={handlerChange}
                            defaultValue={studentPrimaryData.presentAddressLine1}
                            className="login-inp"
                            placeholder="Address (Line 1)"
                            required={false} />
                    </div>
                    <div className="login-grp">
                        <input
                            type="text"
                            name="presentAddressLine2"
                            onChange={handlerChange}
                            defaultValue={studentPrimaryData.presentAddressLine2}
                            className="login-inp"
                            placeholder="Address (Line 2)"
                            required={false} />
                    </div>
                    <div className="row">
                        <div className="col-md-6 pr-1">
                            <div className="login-grp">
                                <select
                                    name="presentAddressCountry"
                                    onChange={handlerChange}
                                    defaultValue={studentPrimaryData.presentAddressCountry ? studentPrimaryData.presentAddressCountry : 'DEFAULT'}
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
                                    name="presentAddressState"
                                    onChange={handlerChange}
                                    defaultValue={studentPrimaryData.presentAddressState ? studentPrimaryData.presentAddressState : 'DEFAULT'}
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
                                    name="presentAddressCity"
                                    onChange={handlerChange}
                                    defaultValue={studentPrimaryData.presentAddressCity}
                                    className="login-inp"
                                    placeholder="City"
                                    required={false} />
                            </div>
                        </div>
                        <div className="col-md-4 px-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="presentAddressDistrict"
                                    onChange={handlerChange}
                                    defaultValue={studentPrimaryData.presentAddressDistrict}
                                    className="login-inp"
                                    placeholder="District"
                                    required={false} />
                            </div>
                        </div>
                        <div className="col-md-4 pl-1">
                            <div className="login-grp">
                                <input
                                    type="number"
                                    name="presentAddressZipcode"
                                    onChange={handlerChange}
                                    defaultValue={studentPrimaryData.presentAddressZipcode}
                                    className="login-inp"
                                    placeholder="Zipcode"
                                    required={false} />
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-md-6 pr-1">
                            <div className="login-grp">
                                <input
                                    type="tel"
                                    name="corporateHQAddressPhone"
                                    onChange={handlerChange}
                                    defaultValue={studentPrimaryData.corporateHQAddressPhone}
                                    className={`login-inp${mobileErr ? ' login-inp-error' : ''}`}
                                    placeholder="Phone Number"
                                    required={true} />
                                {mobileErr ? <p className="inp-errors">{mobileErr}</p> : null}
                            </div>
                        </div>
                        <div className="col-md-6 pl-1">
                            <div className="login-grp">
                                <input
                                    type="email"
                                    name="corporateHQAddressEmail"
                                    onChange={handlerChange}
                                    defaultValue={studentPrimaryData.corporateHQAddressEmail}
                                    className={`login-inp${emailErr ? ' login-inp-error' : ''}`}
                                    placeholder="Office mail"
                                    required={false} />
                                {emailErr ? <p className="inp-errors">{emailErr}</p> : null}
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="col-md-6">
                    <div className="d-lg-flex">
                        <h6 className="reg-label">Permanent Address</h6>
                        <div className="custom-control custom-checkbox">
                            <input
                                type="checkbox"
                                onChange={saveData}
                                className="custom-control-input"
                                id="save" />
                            <label className="custom-control-label" htmlFor="save">Same as Present Address</label>
                        </div>
                    </div>
                    <div className="login-grp">
                        <input
                            type="text"
                            name="permanentAddressLine1"
                            onChange={handlerChange}
                            defaultValue={studentPrimaryData.permanentAddressLine1}
                            className="login-inp"
                            placeholder="Address (Line 1)"
                            required={false} />
                    </div>
                    <div className="login-grp">
                        <input
                            type="text"
                            name="permanentAddressLine2"
                            onChange={handlerChange}
                            defaultValue={studentPrimaryData.permanentAddressLine2}
                            className="login-inp"
                            placeholder="Address (Line 2)"
                            required={false} />
                    </div>
                    <div className="row">
                        <div className="col-md-6 pr-1">
                            <div className="login-grp">
                                <select
                                    name="permanentAddressCountry"
                                    onChange={handlerChange}
                                    value={studentPrimaryData.permanentAddressCountry ? studentPrimaryData.permanentAddressCountry : 'DEFAULT'}
                                    className="login-inp"
                                    required={false}>
                                    <option value={'DEFAULT'} disabled>Country</option>
                                    <option value="IN">INDIA</option>
                                    <option value="US">US</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 pl-1">
                            <div className="login-grp">
                                <select
                                    name="permanentAddressState"
                                    onChange={handlerChange}
                                    value={studentPrimaryData.permanentAddressState ? studentPrimaryData.permanentAddressState : 'DEFAULT'}
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
                                    name="permanentAddressCity"
                                    onChange={handlerChange}
                                    defaultValue={studentPrimaryData.permanentAddressCity}
                                    className="login-inp"
                                    placeholder="City"
                                    required={false} />
                            </div>
                        </div>
                        <div className="col-md-4 px-1">
                            <div className="login-grp">
                                <input
                                    type="text"
                                    name="permanentAddressDistrict"
                                    onChange={handlerChange}
                                    defaultValue={studentPrimaryData.permanentAddressDistrict}
                                    className="login-inp"
                                    placeholder="District"
                                    required={false} />
                            </div>
                        </div>
                        <div className="col-md-4 pl-1">
                            <div className="login-grp">
                                <input
                                    type="number"
                                    name="permanentAddressZipcode"
                                    onChange={handlerChange}
                                    defaultValue={studentPrimaryData.permanentAddressZipcode}
                                    className="login-inp"
                                    placeholder="Zipcode"
                                    required={false} />
                            </div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-md-6 pr-1">
                            <div className="login-grp">
                                <input
                                    type="tel"
                                    name="corporateLocalBranchAddressPhone"
                                    onChange={handlerChange}
                                    defaultValue={studentPrimaryData.corporateLocalBranchAddressPhone}
                                    className={`login-inp${mobile2Err ? ' login-inp-error' : ''}`}
                                    placeholder="Phone Number"
                                    required={false} />
                                {mobile2Err ? <p className="inp-errors">{mobile2Err}</p> : null}
                            </div>
                        </div>
                        <div className="col-md-6 pl-1">
                            <div className="login-grp">
                                <input
                                    type="email"
                                    name="corporateLocalBranchAddressEmail"
                                    onChange={handlerChange}
                                    defaultValue={studentPrimaryData.corporateLocalBranchAddressEmail}
                                    className={`login-inp${email2Err ? ' login-inp-error' : ''}`}
                                    placeholder="Office mail"
                                    required={false} />
                                {email2Err ? <p className="inp-errors">{email2Err}</p> : null}
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="login-grp">
                        <input
                            type="text"
                            name="fathersFirstName"
                            onChange={handlerChange}
                            defaultValue={studentPrimaryData.fathersFirstName}
                            className="login-inp"
                            placeholder="Father's First Name"
                            autoFocus
                            required={true} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="login-grp">
                        <input
                            type="text"
                            name="fathersMiddleName"
                            onChange={handlerChange}
                            defaultValue={studentPrimaryData.fathersMiddleName}
                            className="login-inp"
                            placeholder="Father's Middle Name"
                            autoFocus
                            required={true} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="login-grp">
                        <input
                            type="text"
                            name="fathersLastName"
                            onChange={handlerChange}
                            defaultValue={studentPrimaryData.fathersLastName}
                            className="login-inp"
                            placeholder="Father's Last Name"
                            autoFocus
                            required={true} />
                    </div>
                </div>
            </div>
            <div className="text-right">
                <button type="submit" className="reg-btn">Next</button>
            </div>
        </form>
    )
}

export default StudentPrimaryCmp;

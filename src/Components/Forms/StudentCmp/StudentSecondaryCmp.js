import React from 'react';

const StudentSecondaryCmp = ({ history, errors, attachment, path, studentSecondary, handleChangeImg, handlerChange, handleSubmit }) => {
    // const { corporateCategory, corporateIndustry, corporateTypes, universityCategory } = categoryList;
    const { passwordErr, repeatPasswordErr, addrErr } = errors;
    const imgPath = "data:image/png;base64," + path;

    return (
        <form onSubmit={handleSubmit} className="login-form reg-form">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-6 pr-1">
                            <div className="login-grp">
                                <select
                                    name="gender"
                                    onChange={handlerChange}
                                    value={studentSecondary.gender ? studentSecondary.gender : 'DEFAULT'}
                                    className="login-inp"
                                    required={false}>
                                    <option value={'DEFAULT'} disabled>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 pl-1">
                            <div className="login-grp">
                                <input
                                    type="date"
                                    name="dateOfBirth"
                                    onChange={handlerChange}
                                    className="login-inp"
                                    title="date Of Birth"
                                    placeholder="dateOfBirth"
                                    required={true} />
                            </div>
                        </div>
                    </div>
                    <div className="login-grp">
                        <input
                            type="number"
                            name="aadharNumber"
                            onChange={handlerChange}
                            defaultValue={studentSecondary.aadharNumber}
                            className={`login-inp${addrErr ? ' login-inp-error' : ''}`}
                            placeholder="Aadhar Number"
                            required={false} />
                        {addrErr ? <p className="inp-errors">{addrErr}</p> : null}
                    </div>
                    <div className="login-grp">
                        <textarea
                            name="studentProfile"
                            onChange={handlerChange}
                            defaultValue={studentSecondary.studentProfile}
                            rows={6}
                            className="login-inp login-txtarea"
                            placeholder="Company Profile (in Brief)"
                            required={false}
                        ></textarea>
                    </div>
                    <div className="reg-attach">
                        {studentSecondary.attachment ? <span><i className="fas fa-check-circle"></i></span> : (null)}
                        <input
                            type="file"
                            name="attachment"
                            onChange={handleChangeImg}
                            accept="image/*"
                            className="reg-inp"
                            id="attachment"
                            required={false} />
                        <label htmlFor="attachment" className="reg-label">Attach</label>
                    </div>
                    {imgPath
                        ? <div className="text-center">
                            <img src={imgPath} alt="please select image" className="img-thumbnail mb-3 w-50" />
                        </div>
                        : (null)
                    }
                    <div className="reg-header"><i className="fas fa-unlock-alt" />Password</div>
                    <div className="row">
                        <div className="col-md-6 pr-1">
                            <div className="login-grp">
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handlerChange}
                                    defaultValue={studentSecondary.password}
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
                        <button type="button" className="reg-btn" onClick={() => { history.push('/register/studentRegister') }}>Previous</button>
                        <button type="submit" className="reg-btn">Next</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default StudentSecondaryCmp;

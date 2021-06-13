import React from 'react';

const CorporateSecondaryCmp = ({ history, selectedName, attachment, path, categoryList, corporateSecondary, handleChangeImg, handlerChange, handleSubmit }) => {
    const { corporateCategory, corporateIndustry, corporateTypes, universityCategory } = categoryList;
    const imgPath = "data:image/png;base64," + path;
    // const imgPath = "data:image/png;base64," + (path ? path : localStorage.getItem('imgpath'));

    return (
        <form onSubmit={handleSubmit} className="login-form reg-form">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    {selectedName === 'Corporate'
                        ? <>
                            <div className="row">
                                <div className="col-md-6 pr-1">
                                    <div className="login-grp">
                                        <select
                                            name="corporateType"
                                            onChange={handlerChange}
                                            value={corporateSecondary.corporateType ? corporateSecondary.corporateType : 'DEFAULT'}
                                            className="login-inp"
                                            autoFocus required={true}>
                                            <option value={'DEFAULT'} disabled>Corporate Type</option>
                                            {React.Children.toArray(
                                                corporateTypes && corporateTypes.map((item) => <option value={item.codeDescription}>{item.codeDescription}</option>)
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-1">
                                    <div className="login-grp">
                                        <select
                                            name="corporateCategory"
                                            onChange={handlerChange}
                                            value={corporateSecondary.corporateCategory ? corporateSecondary.corporateCategory : 'DEFAULT'}
                                            // defaultValue={'DEFAULT'}
                                            className="login-inp"
                                            required={true}>
                                            <option value={'DEFAULT'} disabled>Corporate Category</option>
                                            {React.Children.toArray(
                                                corporateCategory && corporateCategory.map((item) => <option value={item.codeDescription}>{item.codeDescription}</option>)
                                            )}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 pr-1">
                                    <div className="login-grp">
                                        <select
                                            name="corporateIndustry"
                                            onChange={handlerChange}
                                            value={corporateSecondary.corporateIndustry ? corporateSecondary.corporateIndustry : 'DEFAULT'}
                                            // defaultValue={'DEFAULT'}
                                            className="login-inp"
                                            required={false}>
                                            <option value={'DEFAULT'} disabled>{selectedName} Industry</option>
                                            {React.Children.toArray(
                                                corporateIndustry && corporateIndustry.map((item) => <option value={item.codeDescription}>{item.codeDescription}</option>)
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-1">
                                    <div className="login-grp">
                                        <input
                                            type="date"
                                            name="yearOfEstablishment"
                                            onChange={handlerChange}
                                            className="login-inp"
                                            title="Year of Establishment"
                                            placeholder="Year of Establishment"
                                            required={true} />
                                    </div>
                                </div>
                            </div>
                        </>
                        : (null)}
                    {selectedName === 'University'
                        ? <>
                            <div className="row">
                                <div className="col-md-6 pr-1">
                                    <div className="login-grp">
                                        <select
                                            name="corporateIndustry"
                                            onChange={handlerChange}
                                            value={corporateSecondary.corporateIndustry ? corporateSecondary.corporateIndustry : 'DEFAULT'}
                                            // defaultValue={'DEFAULT'}
                                            className="login-inp"
                                            required={false}>
                                            <option value={'DEFAULT'} disabled>University Sector</option>
                                            {/* <option value="Corporate">Corporate</option>
                                            <option value="University">University</option>
                                            <option value="Student">Student</option> */}
                                            {React.Children.toArray(
                                                universityCategory && universityCategory.map((item) => <option value={item.codeDescription}>{item.codeDescription}</option>)
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-1">
                                    <div className="login-grp">
                                        <input
                                            type="date"
                                            name="yearOfEstablishment"
                                            onChange={handlerChange}
                                            className="login-inp"
                                            title="Year of Establishment"
                                            placeholder="Year of Establishment"
                                            required={true} />
                                    </div>
                                </div>
                            </div>
                        </>
                        : (null)}
                    <div className="reg-attach">
                        {attachment ? <span><i className="fas fa-check-circle"></i></span> : (null)}
                        <input
                            type="file"
                            onChange={handleChangeImg}
                            accept="image/*"
                            className="reg-inp"
                            name="attachment"
                            id="attachment"
                            required={false} />
                        <label htmlFor="attachment" className="reg-label">Attach</label>
                    </div>
                    {imgPath ?
                        <div className="text-center">
                            <img src={imgPath} alt="please select image" className="img-thumbnail mb-3 w-50" />
                        </div> : (null)}
                    <div className="login-grp">
                        <textarea
                            name="companyProfile"
                            onChange={handlerChange}
                            defaultValue={corporateSecondary.companyProfile}
                            rows={6}
                            className="login-inp login-txtarea"
                            placeholder="Company Profile (in Brief)"
                            required={false}
                        ></textarea>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <button type="button" className="reg-btn" onClick={() => { history.push('/register') }}>Previous</button>
                        <button type="submit" className="reg-btn">Next</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default CorporateSecondaryCmp;

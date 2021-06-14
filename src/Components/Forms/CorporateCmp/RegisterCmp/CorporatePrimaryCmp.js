import React from 'react';
import { useHistory } from 'react-router-dom';
import PgkSelectField from '../../../FormFields/PgkSelectField';
import PgkTextField from '../../../FormFields/PgkTextField';
import RegisterHeader from './RegisterHeader';

const CorporatePrimaryCmp = (props) => {
    const type = localStorage.getItem('type');
    const { corporateCategory, corporateIndustry, corporateType } = props.lookUpData;
    const corporateCategoryList = corporateCategory && corporateCategory.length >= 0
        ? corporateCategory?.map((item, i) => ({ value: item.categoryCode, label: item.categoryName })) : (null);
    const corporateIndustryList = corporateIndustry && corporateIndustry.length >= 0
        ? corporateIndustry?.map((item, i) => ({ value: item.industryCode, label: item.industryName })) : (null);
    const corporateTypeList = corporateType && corporateType.length >= 0
        ? corporateType?.map((item, i) => ({ value: item.corporateTypeCode, label: item.corporateTypeName })) : (null);

    const history = useHistory();

    return (
        <form onSubmit={props.handleSubmit} className="login-form reg-form">
            <RegisterHeader title="Primary Details" />
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-15">
                        <PgkTextField
                            name="corporateName"
                            onChange={props?.handleChange}
                            value={props?.corporatePrimaryData?.corporateName}
                            label={`${type} Name`}
                            errorMessage={props?.errors?.corporateName}
                            required={true}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-15">
                        <PgkTextField
                            type={'number'}
                            name="CIN"
                            onChange={props?.handleChange}
                            value={props?.corporatePrimaryData?.CIN}
                            label={type === 'Corporate' ? 'CIN' : 'University/College ID'}
                            errorMessage={props?.errors?.CIN}
                            required={true}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-15">
                        <PgkSelectField
                            name="corporateType"
                            onChange={props?.handleChange}
                            value={props?.corporatePrimaryData?.corporateType}
                            label={'Corporate Type'}
                            options={corporateTypeList}
                            errorMessage={props?.errors?.corporateType}
                            required={true}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-15">
                        <PgkSelectField
                            name="corporateCategory"
                            onChange={props?.handleChange}
                            value={props?.corporatePrimaryData?.corporateCategory}
                            label={'Corporate Category'}
                            options={corporateCategoryList}
                            errorMessage={props?.errors?.corporateCategory}
                            required={true}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-15">
                        <PgkSelectField
                            name="corporateIndustry"
                            onChange={props?.handleChange}
                            value={props?.corporatePrimaryData?.corporateIndustry}
                            label={`${type} Industry`}
                            options={corporateIndustryList}
                            errorMessage={props?.errors?.corporateIndustry}
                            required={true}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-15">
                        <PgkTextField
                            name="yearOfEstablishment"
                            onChange={props?.handleChange}
                            value={props?.corporatePrimaryData?.yearOfEstablishment}
                            label={'Year of Establishment'}
                            errorMessage={props?.errors?.yearOfEstablishment}
                            required={true}
                            validations={['minLength_4', 'maxLength_4', 'isNumeric']}
                        />
                    </div>
                    {/* <div className="login-grp">
                        <input
                            type="date"
                            name="yearOfEstablishment"
                            onChange={props.handleChange}
                            className="login-inp"
                            title="Year of Establishment"
                            placeholder="Year of Establishment"
                            required={true} />
                        <label className="inp-caption">Year of Establishment</label>
                    </div> */}
                </div>

                <div className="col-md-12">
                    <div className="reg-attach">
                        {props?.path ? <span style={{ fontSize: 14, top: 10, color: 'grey' }}>{props.filename}</span> : <span style={{ fontSize: 14, top: 10, color: 'grey' }}>Attachment for profile picture</span>}
                        <input
                            type="file"
                            onChange={props.handleChangeImg}
                            accept="image/*"
                            className="reg-inp d-none"
                            name="attachment"
                            id="attachment"
                            required={false} />
                        <label htmlFor="attachment" className="reg-label">Attach</label>
                    </div>
                    {props.actualPath
                        ? <div className="text-center">
                            <img src={props.path} alt="please select image" className="img-thumbnail mb-3 w-50" />
                        </div>
                        : (null)
                    }
                </div>
            </div>



            <RegisterHeader title="Referral Code" />
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-15">
                        <PgkTextField
                            type={'number'}
                            name="referral"
                            onChange={props?.handleChange}
                            value={props?.corporatePrimaryData?.referral}
                            label={'Referral Code'}
                            errorMessage={props?.errors?.referral}
                            required={false}
                        />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between mt-4">
                <button type="button" className="reg-btn" onClick={() => history.push('/')}>Go to login</button>
                <button type="submit" className="reg-btn" disabled={props.isBtnDisabled}>Next</button>
            </div>
        </form>
    )
}

export default CorporatePrimaryCmp;

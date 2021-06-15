import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionGetDependencyLookUpsSagaAction } from "../../../../../Store/Actions/SagaActions/CommonSagaActions";

import PgkTextField from "../../../../../Components/FormFields/PgkTextField";
import PgkSelectField from "../../../../../Components/FormFields/PgkSelectField";

const BasicFormItem = (props) => {



  return (
    <div className="profile-box" style={{marginBottom:0}}>
      <aside className="profile-side" style={{borderRadius:0}}>
        <h3 className="profile-side-title">Basic</h3>
      </aside>
      <div className="profile-data">
        <div className="row">
          <div className="col-md">
            <div className="mb-20">
              <PgkTextField
                  name="CIN"
                  value={props?.profileData?.CIN}
                  label={"Organization Registration ID / CIN"}
                  disabled
                  inputLabelProps={{style:{fontSize: '.800rem'}}}
                  inputProps={{style:{fontSize: '.800rem'}}}
              />
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md">
            <div className="mb-20">
              <PgkSelectField
                name={"corporateType"}
                disabled
                value={props?.profileData?.corporateType}
                options={props?.lookUpData?.corporateType?.length ? props?.lookUpData?.corporateType?.map((item)=>{
                  return {value: item.corporateTypeCode, label: item.corporateTypeName}
                }) : []}
                label={"Corporate Sector"}
                labelStyles={{fontSize: '.800rem'}}
                selectStyles={{fontSize: '.800rem'}}
                menuStyles={{fontSize: '.800rem'}}
              />
            </div>
          </div>
          <div className="col-md">
            <div className="mb-20">
              <PgkSelectField
                name={"corporateCategory"}
                disabled
                value={props?.profileData?.corporateCategory}
                options={props?.lookUpData?.corporateCategory?.length ? props?.lookUpData?.corporateCategory?.map((item)=>{
                  return {value: item.categoryCode, label: item.categoryName}
                }) : []}
                label={"Corporate Category"}
                labelStyles={{fontSize: '.800rem'}}
                selectStyles={{fontSize: '.800rem'}}
                menuStyles={{fontSize: '.800rem'}}
              />
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md">
            <div className="mb-20">
              <PgkSelectField
                name={"corporateIndustry"}
                disabled
                value={props?.profileData?.corporateIndustry}
                options={props?.lookUpData?.corporateIndustry?.length ? props?.lookUpData?.corporateIndustry?.map((item)=>{
                  return {value: item.industryCode, label: item.industryName}
                }) : []}
                label={"Corporate Industry"}
                labelStyles={{fontSize: '.800rem'}}
                selectStyles={{fontSize: '.800rem'}}
                menuStyles={{fontSize: '.800rem'}}
              />
            </div>
          </div>
          <div className="col-md">
            <div className="mb-20">
              <PgkTextField
                type={"number"}
                name="yearOfEstablishment"
                value={
                  props?.profileData?.yearOfEstablishment !== undefined
                    ? parseInt(props?.profileData?.yearOfEstablishment)
                    : ""
                }
                label={"Year of Establishment"}
                disabled
                inputLabelProps={{style:{fontSize: '.800rem'}}}
                inputProps={{style:{fontSize: '.800rem'}}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicFormItem;

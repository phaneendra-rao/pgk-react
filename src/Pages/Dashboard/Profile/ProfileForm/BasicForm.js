import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { actionGetDependencyLookUpsSagaAction } from "../../../../Store/Actions/SagaActions/CommonSagaActions";

const BasicForm = (props) => {
  const dispatch = useDispatch();
  const [corporateTypes, setCorporateTypes] = useState([]);
  const [corporateCategories, setCorporateCategories] = useState([]);
  const [corporateIndustries, setCorporateIndustries] = useState([]);

  const onGetDependencyLookUpsResponse = (response) => {
    setCorporateTypes(
      response?.corporateType?.length
        ? response.corporateType.map((item) => {
            if (item?.corporateTypeCode) {
              return {
                value: item.corporateTypeCode,
                label: item.corporateTypeCode,
              };
            }
          })
        : []
    );

    setCorporateCategories(
      response?.corporateCategory?.length
        ? response.corporateCategory.map((item) => {
            if (item?.categoryName) {
              return {
                value: item.categoryName,
                label: item.categoryName,
              };
            }
          })
        : []
    );

    setCorporateIndustries(
      response?.corporateIndustry?.length
        ? response.corporateIndustry.map((item) => {
            if (item?.industryName) {
              return {
                value: item.industryName,
                label: item.industryName,
              };
            }
          })
        : []
    );
  };

  useEffect(() => {
    dispatch(
      actionGetDependencyLookUpsSagaAction({
        apiPayloadRequest: [
          "corporateType",
          "corporateCategory",
          "corporateIndustry",
        ],
        callback: onGetDependencyLookUpsResponse,
      })
    );
  }, []);

  return (
    <div className="profile-box">
      <aside className="profile-side">
        <h3 className="profile-side-title">Basic</h3>
      </aside>
      <div className="profile-data">
        <div className="row">
          <div className="col-md">
            <div className="d-grp">
              <input
                type="text"
                name="stakeholderID"
                value={
                  props?.profileData?.stakeholderID
                    ? props?.profileData?.stakeholderID
                    : ""
                }
                readOnly
                onChange={props?.onChange}
                className="d-inp"
                required
              />
              <label className="inp-caption">{`Stakeholder ID`}</label>
            </div>
          </div>
          <div className="col-md">
            <div className="d-grp">
                {props?.check && <div className="custom-control custom-checkbox publish-inp">
                <input
                  type="checkbox"
                  name="CIN"
                  id="check-CIN"
                  className="custom-control-input"
                  onChange={(e)=>{ props?.handleCheckData(e.target.name, !props?.checkData?.CIN)}}
                  checked={props?.checkData?.CIN ? true : false}
                />
                <label
                  className="custom-control-label"
                  htmlFor={"check-CIN"}
                ></label>
              </div>}
              <input
                type="text"
                name="CIN"
                value={props?.profileData?.CIN ? props?.profileData?.CIN : ""}
                onChange={props?.onChange}
                className="d-inp"
                readOnly={props?.disable!==undefined ? props?.disable : false}
                required
              />
              <label className="inp-caption">{`Organization Registration ID / CIN `}<sup>*</sup></label>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md">
            <div className="d-grp">
            {props?.check && <div className="custom-control custom-checkbox publish-inp">
                <input
                  type="checkbox"
                  name="corporateType"
                  id="check-corporateType"
                  className="custom-control-input"
                  onChange={(e)=>{ props?.handleCheckData(e.target.name, !props?.checkData?.corporateType)}}
                  checked={props?.checkData?.corporateType ? true : false}
                />
                <label
                  className="custom-control-label"
                  htmlFor={"check-corporateType"}
                ></label>
              </div>}
              <select name="corporateType" className="d-inp" onChange={props?.onChange} disabled value={props?.profileData?.corporateType} required>
                <option value="">Select Corporate Sector</option>
                {corporateTypes?.length && (
                  corporateTypes.map((item) => {
                    return <option value={item.value} key={item.value}>{item.label}</option>;
                  })
                )}
              </select>
              <label className="inp-caption">{`Corporate Sector `}<sup>*</sup></label>
            </div>
          </div>
          <div className="col-md">
            <div className="d-grp">
            {props?.check && <div className="custom-control custom-checkbox publish-inp">
                <input
                  type="checkbox"
                  name="corporateCategory"
                  id="check-corporateCategory"
                  className="custom-control-input"
                  onChange={(e)=>{ props?.handleCheckData(e.target.name, !props?.checkData?.corporateCategory)}}
                  checked={props?.checkData?.corporateCategory ? true : false}
                />
                <label
                  className="custom-control-label"
                  htmlFor={"check-corporateCategory"}
                ></label>
              </div>}
              <select name="corporateCategory" className="d-inp" onChange={props?.onChange} disabled={props?.disable!==undefined ? props?.disable : false} value={props?.profileData?.corporateCategory} required>
                <option value="">Select Corporate Category</option>
                {corporateCategories?.length && (
                  corporateCategories.map((item) => {
                    return <option value={item.value} key={item.value}>{item.label}</option>;
                  })
                )}
              </select>
              <label className="inp-caption">{`Corporate Category `}<sup>*</sup></label>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md">
            <div className="d-grp">
            {props?.check && <div className="custom-control custom-checkbox publish-inp">
                <input
                  type="checkbox"
                  name="corporateIndustry"
                  id="check-corporateIndustry"
                  className="custom-control-input"
                  onChange={(e)=>{ props?.handleCheckData(e.target.name, !props?.checkData?.corporateIndustry)}}
                  checked={props?.checkData?.corporateIndustry ? true : false}
                />
                <label
                  className="custom-control-label"
                  htmlFor={"check-corporateIndustry"}
                ></label>
              </div>}
              <select name="corporateIndustry" className="d-inp" onChange={props?.onChange} disabled={props?.disable!==undefined ? props?.disable : false} value={props?.profileData?.corporateIndustry} required>
                <option value="">Select Industry Vertical</option>
                {corporateIndustries?.length && (
                  corporateIndustries.map((item) => {
                    return <option value={item.value} key={item.value}>{item.label}</option>;
                  })
                )}
              </select>
              <label className="inp-caption">{`Industry Vertical `}<sup>*</sup></label>
            </div>
          </div>
          <div className="col-md">
            <div className="d-grp">
            {props?.check && <div className="custom-control custom-checkbox publish-inp">
                <input
                  type="checkbox"
                  name="dateOfJoining"
                  id="check-dateOfJoining"
                  className="custom-control-input"
                  onChange={(e)=>{props?.handleCheckData(e.target.name, !props?.checkData?.dateOfJoining)}}
                  checked={props?.checkData?.dateOfJoining ? true : false}
                />
                <label
                  className="custom-control-label"
                  htmlFor={"check-dateOfJoining"}
                ></label>
              </div>}
              <input
                type="text"
                name="yearOfEstablishment"
                value={
                  props?.profileData?.yearOfEstablishment ? props?.profileData?.yearOfEstablishment : ''}
                onChange={props?.onChange}
                className="d-inp input-number"
                maxLength={4}
                readOnly={props?.disable!==undefined ? props?.disable : false}
                required
              />
              <label className="inp-caption">{`Year of Establishment `}<sup>*</sup></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicForm;

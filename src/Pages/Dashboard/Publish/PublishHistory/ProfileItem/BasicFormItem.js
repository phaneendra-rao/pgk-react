import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionGetDependencyLookUpsSagaAction } from "../../../../../Store/Actions/SagaActions/CommonSagaActions";

const BasicFormItem = (props) => {
  const dispatch = useDispatch();
  const [corporateTypes, setCorporateTypes] = useState([]);
  const [corporateCategories, setCorporateCategories] = useState([]);
  const [corporateIndustries, setCorporateIndustries] = useState([]);

  const onGetDependencyLookUpsResponse = (response) => {
    setCorporateTypes(
      response?.corporateTypes?.length
        ? response.corporateTypes.map((item) => {
            if (item?.codeDescription) {
              return {
                value: item.codeDescription,
                label: item.codeDescription,
              };
            }
          })
        : []
    );

    setCorporateCategories(
      response?.corporateCategory?.length
        ? response.corporateCategory.map((item) => {
            if (item?.codeDescription) {
              return {
                value: item.codeDescription,
                label: item.codeDescription,
              };
            }
          })
        : []
    );

    setCorporateIndustries(
      response?.corporateIndustry?.length
        ? response.corporateIndustry.map((item) => {
            if (item?.codeDescription) {
              return {
                value: item.codeDescription,
                label: item.codeDescription,
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
    <div className="profile-box" style={{marginBottom:0}}>
      <aside className="profile-side" style={{borderRadius:0}}>
        <h3 className="profile-side-title">Basic</h3>
      </aside>
      <div className="profile-data">
        <div className="row">
          <div className="col-md">
            <div className="d-grp">
              <input
                type="text"
                name="CIN"
                value={props?.profileData?.CIN ? props?.profileData?.CIN : ""}
                className="d-inp"
                placeholder="Organization Registration ID / CIN *"
                readOnly
              />
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md">
            <div className="d-grp">
              <select name="corporateType" className="d-inp" readOnly value={props?.profileData?.corporateType}>
                <option value="">Select Corporate Sector</option>
                {corporateTypes?.length && (
                  corporateTypes.map((item) => {
                    return <option value={item.value} key={item.value}>{item.label}</option>;
                  })
                )}
              </select>
            </div>
          </div>
          <div className="col-md">
            <div className="d-grp">
              <select name="corporateCategory" className="d-inp" value={props?.profileData?.corporateCategory} readOnly>
                <option value="">Select Corporate Category</option>
                {corporateCategories?.length && (
                  corporateCategories.map((item) => {
                    return <option value={item.value} key={item.value}>{item.label}</option>;
                  })
                )}
              </select>
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md">
            <div className="d-grp">
              <select name="corporateIndustry" className="d-inp" value={props?.profileData?.corporateIndustry} readOnly>
                <option value="">Select Industry Vertical</option>
                {corporateIndustries?.length && (
                  corporateIndustries.map((item) => {
                    return <option value={item.value} key={item.value}>{item.label}</option>;
                  })
                )}
              </select>
            </div>
          </div>
          <div className="col-md">
            <div className="d-grp">
              <input
                type="date"
                name="dateOfJoining"
                value={
                  props?.profileData?.dateOfJoining
                    ? new Date(props?.profileData?.dateOfJoining)
                        .toISOString()
                        .substring(0, 10)
                    : undefined
                }
                className="d-inp"
                title="Date of Commencement"
                placeholder="Date of Commencement"
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicFormItem;

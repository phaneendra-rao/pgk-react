import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { actionGetDependencyLookUpsSagaAction } from "../../../../Store/Actions/SagaActions/CommonSagaActions";

const BasicForm = (props) => {
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
                readonly
                onChange={props?.onChange}
                className="d-inp"
                placeholder="Stakeholder ID"
                required
              />
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
                placeholder="Organization Registration ID / CIN *"
                disabled
                required
              />
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
              <select name="corporateType" className="d-inp" disabled={props?.disable ? true : false} value={props?.profileData?.corporateType} required>
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
              <select name="corporateCategory" className="d-inp" disabled={props?.disable ? true : false} value={props?.profileData?.corporateCategory} required>
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
              <select name="corporateIndustry" className="d-inp" disabled={props?.disable ? true : false} value={props?.profileData?.corporateIndustry} required>
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
                type="date"
                name="dateOfJoining"
                value={
                  props?.profileData?.dateOfJoining
                    ? new Date(props?.profileData?.dateOfJoining)
                        .toISOString()
                        .substring(0, 10)
                    : undefined
                }
                onChange={props?.onChange}
                className="d-inp"
                disabled={props?.disable ? true : false}
                title="Date of Commencement"
                placeholder="Date of Commencement"
                required
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicForm;

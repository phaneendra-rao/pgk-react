import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import PgkTextField from "../../../../Components/FormFields/PgkTextField";
import PgkAutoComplete from "../../../../Components/FormFields/PgkAutoComplete";
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

  // const date = new Date();
  // const currentYear = date.getFullYear();

  // const yearOfEstablishment = (value) => {
  //   const years = [
  //     currentYear - 2,
  //     currentYear - 1,
  //     currentYear,
  //     currentYear + 1,
  //     currentYear + 2,
  //   ];
  //   if (!years.includes(parseInt(value))) {
  //     return "Invalid Year of Establishment";
  //   }
  // };

  return (
    <div className="profile-box">
      <aside className="profile-side">
        <h3 className="profile-side-title">Basic</h3>
      </aside>
      <div className="profile-data">
        <div className="row">
          <div className="col-md">
            <div className="mb-20">
              <PgkTextField
                name="stakeholderID"
                value={
                  props?.profileData?.stakeholderID?.value !== undefined
                    ? props?.profileData?.stakeholderID?.value
                    : ""
                }
                errorMessage={props?.profileData?.stakeholderID?.errorMessage}
                label={"Stakeholder ID"}
                disabled
                required={props?.profileData?.stakeholderID?.isRequired}
              />
            </div>
          </div>
          <div className="col-md">
            {props?.check && (
              <div className="custom-control custom-checkbox publish-inp">
                <input
                  type="checkbox"
                  name="CIN"
                  id="check-CIN"
                  className="custom-control-input"
                  onChange={(e) => {
                    props?.handleCheckData(
                      e.target.name,
                      !props?.checkData?.CIN
                    );
                  }}
                  checked={props?.checkData?.CIN ? true : false}
                />
                <label
                  className="custom-control-label"
                  htmlFor={"check-CIN"}
                ></label>
              </div>
            )}
            <div className="mb-20">
              <PgkTextField
                name="CIN"
                value={
                  props?.profileData?.CIN?.value !== undefined
                    ? props?.profileData?.CIN?.value
                    : ""
                }
                onChange={props?.onChange}
                label={"Organization Registration ID / CIN"}
                disabled={props?.disable !== undefined ? props?.disable : false}
                errorMessage={props?.profileData?.CIN?.errorMessage}
                required={props?.profileData?.CIN?.isRequired}
              />
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md">
            <div className="mb-20">
              {props?.check && (
                <div className="custom-control custom-checkbox publish-inp">
                  <input
                    type="checkbox"
                    name="corporateType"
                    id="check-corporateType"
                    className="custom-control-input"
                    onChange={(e) => {
                      props?.handleCheckData(
                        e.target.name,
                        !props?.checkData?.corporateType
                      );
                    }}
                    checked={props?.checkData?.corporateType ? true : false}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={"check-corporateType"}
                  ></label>
                </div>
              )}
              <PgkAutoComplete
                name={"corporateType"}
                onChange={props?.onChange}
                disabled
                value={props?.profileData?.corporateType?.value ? props?.profileData?.corporateType?.value : ''}
                required={props?.profileData?.corporateType?.isRequired}
                options={corporateTypes}
                label={"Corporate Sector"}
              />
            </div>
          </div>
          <div className="col-md">
            <div className="mb-20">
              {props?.check && (
                <div className="custom-control custom-checkbox publish-inp">
                  <input
                    type="checkbox"
                    name="corporateCategory"
                    id="check-corporateCategory"
                    className="custom-control-input"
                    onChange={(e) => {
                      props?.handleCheckData(
                        e.target.name,
                        !props?.checkData?.corporateCategory
                      );
                    }}
                    checked={props?.checkData?.corporateCategory ? true : false}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={"check-corporateCategory"}
                  ></label>
                </div>
              )}
              <PgkAutoComplete
                name={"corporateCategory"}
                onChange={props?.onChange}
                disabled={props?.disable !== undefined ? props?.disable : false}
                value={props?.profileData?.corporateCategory?.value ? props?.profileData?.corporateCategory?.value : ''}
                required={props?.profileData?.corporateCategory?.isRequired}
                options={corporateCategories}
                label={"Corporate Category"}
              />
            </div>
          </div>
          <div className="w-100"></div>
          <div className="col-md">
            <div className="mb-20">
              {props?.check && (
                <div className="custom-control custom-checkbox publish-inp">
                  <input
                    type="checkbox"
                    name="corporateIndustry"
                    id="check-corporateIndustry"
                    className="custom-control-input"
                    onChange={(e) => {
                      props?.handleCheckData(
                        e.target.name,
                        !props?.checkData?.corporateIndustry
                      );
                    }}
                    checked={props?.checkData?.corporateIndustry ? true : false}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={"check-corporateIndustry"}
                  ></label>
                </div>
              )}
              <PgkAutoComplete
                name={"corporateIndustry"}
                onChange={props?.onChange}
                disabled={props?.disable !== undefined ? props?.disable : false}
                value={props?.profileData?.corporateIndustry?.value ? props?.profileData?.corporateIndustry?.value : ''}
                options={corporateIndustries}
                label={"Industry Vertical"}
                required={props?.profileData?.corporateIndustry?.isRequired}
              />
            </div>
          </div>
          <div className="col-md">
            <div className="mb-20">
              {props?.check && (
                <div className="custom-control custom-checkbox publish-inp">
                  <input
                    type="checkbox"
                    name="dateOfJoining"
                    id="check-dateOfJoining"
                    className="custom-control-input"
                    onChange={(e) => {
                      props?.handleCheckData(
                        e.target.name,
                        !props?.checkData?.dateOfJoining
                      );
                    }}
                    checked={props?.checkData?.dateOfJoining ? true : false}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={"check-dateOfJoining"}
                  ></label>
                </div>
              )}
              <PgkTextField
                type={"number"}
                name="yearOfEstablishment"
                value={
                  props?.profileData?.yearOfEstablishment?.value !== undefined
                    ? parseInt(props?.profileData?.yearOfEstablishment?.value)
                    : ""
                }
                onChange={props?.onChange}
                errorMessage={
                  props?.profileData?.yearOfEstablishment?.errorMessage
                }
                label={"Year of Establishment"}
                disabled={props?.disable !== undefined ? props?.disable : false}
                validations={["isNumeric", "minLength_4", "maxLength_4"]}
                required={props?.profileData?.yearOfEstablishment?.isRequired}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicForm;

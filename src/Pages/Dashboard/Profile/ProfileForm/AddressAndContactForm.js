import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actionGetCountryCodesSagaAction } from "../../../../Store/Actions/SagaActions/CommonSagaActions";

const AddressAndContactForm = (props) => {
  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch();

  const onCountryCodesResponse = (response) => {
    if (response?.length) {
      const updatedCountryOptions = response.map((item) => {
        return { value: item?.name, label: item?.name };
      });

      setCountries(updatedCountryOptions);
    }
  };

  useEffect(() => {
    dispatch(
      actionGetCountryCodesSagaAction({
        callback: onCountryCodesResponse,
      })
    );
  }, []);

  return (
    <div className="profile-box">
      <aside className="profile-side">
        <h3 className="profile-side-title">Address & Contact</h3>
      </aside>
      <div className="profile-data">
        <div className="row">
          <div className="col-md-6">
            <div className="row p-0 m-0">
            {props?.check && <div className="custom-control custom-checkbox publish-inp">
                <input
                  type="checkbox"
                  name="corporateHeadQuarters"
                  id="check-corporateHeadQuarters"
                  className="custom-control-input"
                  onChange={(e)=>{props?.handleCheckData(e.target.name, !props?.checkData?.corporateHeadQuarters)}}
                  checked={props?.checkData?.corporateHeadQuarters ? true : false}
                />
                <label
                  className="custom-control-label"
                  htmlFor={"check-corporateHeadQuarters"}
                ></label>
              </div>}
              <h6 className="reg-label">Corporate Headquarters</h6>
            </div>
            <div className="d-grp">
              <input
                type="text"
                name="corporateHQAddressLine1"
                onChange={props?.onChange}
                value={
                  props?.profileData?.corporateHQAddressLine1
                    ? props?.profileData?.corporateHQAddressLine1
                    : ""
                }
                className="d-inp"
                placeholder="Address (Line 1)"
                disabled={props?.disable ? true : false}
              />
            </div>
            <div className="d-grp">
              <input
                type="text"
                name="corporateHQAddressLine2"
                onChange={props?.onChange}
                value={
                  props?.profileData?.corporateHQAddressLine2
                    ? props?.profileData?.corporateHQAddressLine2
                    : ""
                }
                className="d-inp"
                placeholder="Address (Line 2)"
                disabled={props?.disable ? true : false}
              />
            </div>
            <div className="row w-full">
              <div className="col-md-6 p-0 pr-1">
                <div className="d-grp">
                  <select
                    name="corporateHQAddressCountry"
                    onChange={props?.onChange}
                    className="d-inp w-full"
                    value={props?.profileData?.corporateHQAddressCountry}
                    disabled={props?.disable ? true : false}
                  >
                    <option value="">Select Country</option>
                    {countries?.map((item) => {
                      return <option value={item.value}>{item.label}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-6 pl-1">
                <div className="d-grp">
                  <select
                    name="corporateHQAddressState"
                    onChange={props?.onChange}
                    className="d-inp"
                    value={props?.profileData?.corporateHQAddressState}
                    disabled={props?.disable ? true : false}
                  >
                    <option value="">Select State</option>
                    <option value="TS">TS</option>
                    <option
                      value="AP"
                      selected={
                        props?.profileData?.corporateHQAddressState === "AP"
                          ? true
                          : false
                      }
                    >
                      AP
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row w-full">
              <div className="col-md-4 pr-1">
                <div className="d-grp">
                  <input
                    type="text"
                    name="corporateHQAddressCity"
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateHQAddressCity
                        ? props?.profileData?.corporateHQAddressCity
                        : ""
                    }
                    className="d-inp"
                    placeholder="City"
                    disabled={props?.disable ? true : false}
                  />
                </div>
              </div>
              <div className="col-md-4 px-1">
                <div className="d-grp">
                  <input
                    type="text"
                    name="corporateHQAddressDistrict"
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateHQAddressDistrict
                        ? props?.profileData?.corporateHQAddressDistrict
                        : ""
                    }
                    className="d-inp"
                    placeholder="District"
                    disabled={props?.disable ? true : false}
                  />
                </div>
              </div>
              <div className="col-md-4 pl-1">
                <div className="d-grp">
                  <input
                    type="number"
                    name="corporateHQAddressZipCode"
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateHQAddressZipCode
                        ? props?.profileData?.corporateHQAddressZipCode
                        : ""
                    }
                    className="d-inp"
                    placeholder="Zipcode"
                    disabled={props?.disable ? true : false}
                  />
                </div>
              </div>
            </div>
            <div className="row w-full">
              <div className="col-md-6 pr-1">
                <div className="d-grp">
                  <input
                    type="number"
                    name="corporateHQAddressPhone"
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateHQAddressPhone
                        ? parseInt(props?.profileData?.corporateHQAddressPhone)
                        : ""
                    }
                    className="d-inp"
                    placeholder="Phone Number"
                    disabled={props?.disable ? true : false}
                  />
                </div>
              </div>
              <div className="col-md-6 pl-1">
                <div className="d-grp">
                  <input
                    type="email"
                    name="corporateHQAddressEmail"
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateHQAddressEmail
                        ? props?.profileData?.corporateHQAddressEmail
                        : ""
                    }
                    className="d-inp"
                    placeholder="Office mail"
                    disabled={props?.disable ? true : false}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
            <div className="row p-0 m-0">
            {props?.check && <div className="custom-control custom-checkbox publish-inp">
                <input
                  type="checkbox"
                  name="corporateLocalAddress"
                  id="check-corporateLocalAddress"
                  className="custom-control-input"
                  onChange={(e)=>{props?.handleCheckData(e.target.name, !props?.checkData?.corporateLocalAddress)}}
                  checked={props?.checkData?.corporateLocalAddress ? true : false}
                />
                <label
                  className="custom-control-label"
                  htmlFor={"check-corporateLocalAddress"}
                ></label>
              </div>}
                <h6 className="reg-label">Corporate Local Branch</h6>
            </div>
              {props?.toggleCorporateHeadQuarters && <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  onChange={props?.toggleCorporateHeadQuarters}
                  checked={props?.checkStatus}
                  name={"sameAsCorporateHeadquarters"}
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Same as Corporate Head Quarters
                </label>
              </div>}
            </div>
            <div className="d-grp">
              <input
                type="text"
                name="corporateLocalBranchAddressLine1"
                onChange={props?.onChange}
                value={
                  props?.profileData?.corporateLocalBranchAddressLine1
                    ? props?.profileData?.corporateLocalBranchAddressLine1
                    : ""
                }
                className="d-inp"
                placeholder="Address (Line 1)"
                disabled={props?.disable ? true : false}
              />
            </div>
            <div className="d-grp">
              <input
                type="text"
                name="corporateLocalBranchAddressLine2"
                onChange={props?.onChange}
                value={
                  props?.profileData?.corporateLocalBranchAddressLine2
                    ? props?.profileData?.corporateLocalBranchAddressLine2
                    : ""
                }
                className="d-inp"
                placeholder="Address (Line 2)"
                disabled={props?.disable ? true : false}
              />
            </div>
            <div className="row w-full">
              <div className="col-md-6 pr-1">
                <div className="d-grp">
                  <select
                    name="corporateLocalBranchAddressCountry"
                    onChange={props?.onChange}
                    className="d-inp"
                    value={
                      props?.profileData?.corporateLocalBranchAddressCountry
                    }
                    disabled={props?.disable ? true : false}
                  >
                    <option value="">Select Country</option>
                    {countries?.map((item) => {
                      return <option value={item.value}>{item.label}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-6 pl-1">
                <div className="d-grp">
                  <select
                    name="corporateLocalBranchAddressState"
                    onChange={props?.onChange}
                    className="d-inp"
                    value={props?.profileData?.corporateLocalBranchAddressState}
                    disabled={props?.disable ? true : false}
                  >
                    <option value="">Select State</option>
                    <option value="TS">TS</option>
                    <option
                      value="AP"
                      selected={
                        props?.profileData?.corporateLocalBranchAddressState ===
                        "AP"
                          ? true
                          : false
                      }
                    >
                      AP
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row w-full">
              <div className="col-md-4 pr-1">
                <div className="d-grp">
                  <input
                    type="text"
                    name="corporateLocalBranchAddressCity"
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateLocalBranchAddressCity
                        ? props?.profileData?.corporateLocalBranchAddressCity
                        : ""
                    }
                    className="d-inp"
                    placeholder="City"
                    disabled={props?.disable ? true : false}
                  />
                </div>
              </div>
              <div className="col-md-4 px-1">
                <div className="d-grp">
                  <input
                    type="text"
                    name="corporateLocalBranchAddressDistrict"
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateLocalBranchAddressDistrict
                        ? props?.profileData
                            ?.corporateLocalBranchAddressDistrict
                        : ""
                    }
                    className="d-inp"
                    placeholder="District"
                    disabled={props?.disable ? true : false}
                  />
                </div>
              </div>
              <div className="col-md-4 pl-1">
                <div className="d-grp">
                  <input
                    type="number"
                    name="corporateLocalBranchAddressZipCode"
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateLocalBranchAddressZipCode
                        ? props?.profileData?.corporateLocalBranchAddressZipCode
                        : ""
                    }
                    className="d-inp"
                    placeholder="Zipcode"
                    disabled={props?.disable ? true : false}
                  />
                </div>
              </div>
            </div>
            <div className="row w-full">
              <div className="col-md-6 pr-1">
                <div className="d-grp">
                  <input
                    type="number"
                    name="corporateLocalBranchAddressPhone"
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateLocalBranchAddressPhone
                        ? parseInt(
                            props?.profileData?.corporateLocalBranchAddressPhone
                          )
                        : ""
                    }
                    className="d-inp"
                    placeholder="Phone Number"
                    disabled={props?.disable ? true : false}
                  />
                </div>
              </div>
              <div className="col-md-6 pl-1">
                <div className="d-grp">
                  <input
                    type="email"
                    name="corporateLocalBranchAddressEmail"
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateLocalBranchAddressEmail
                        ? props?.profileData?.corporateLocalBranchAddressEmail
                        : ""
                    }
                    className="d-inp"
                    placeholder="Office mail"
                    disabled={props?.disable ? true : false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressAndContactForm;

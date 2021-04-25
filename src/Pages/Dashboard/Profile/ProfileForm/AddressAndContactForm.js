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
            <h6 className="reg-label">Corporate Headquarters</h6>
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
              />
            </div>
            <div className="row">
              <div className="col-md-6 pr-1">
                <div className="d-grp">
                  <select
                    name="corporateHQAddressCountry"
                    id=""
                    className="d-inp"
                  >
                    <option value="">Select Country</option>
                    {countries?.map((item) => {
                      return (
                        <option
                          value={item.value}
                          selected={
                            props?.profileData?.corporateHQAddressCountry ===
                            item.value
                              ? true
                              : false
                          }
                        >
                          {item.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-6 pl-1">
                <div className="d-grp">
                  <select
                    name="corporateHQAddressState"
                    id=""
                    className="d-inp"
                  >
                    <option value="">Select State</option>
                    <option
                      value="TS"
                      selected={
                        props?.profileData?.corporateHQAddressState === "TS"
                          ? true
                          : false
                      }
                    >
                      TS
                    </option>
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
            <div className="row">
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
                  />
                </div>
              </div>
            </div>
            <div className="row">
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
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <h6 className="reg-label">Corporate Headquarters</h6>
              <div className="custom-control custom-checkbox">
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
              </div>
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
              />
            </div>
            <div className="row">
              <div className="col-md-6 pr-1">
                <div className="d-grp">
                  <select
                    name="corporateLocalBranchAddressCountry"
                    id=""
                    className="d-inp"
                  >
                    <option value="">Select Country</option>
                    {countries?.map((item) => {
                      return (
                        <option
                          value={item.value}
                          selected={
                            props?.profileData
                              ?.corporateLocalBranchAddressCountry ===
                            item.value
                              ? true
                              : false
                          }
                        >
                          {item.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-6 pl-1">
                <div className="d-grp">
                  <select
                    name="corporateLocalBranchAddressState"
                    id=""
                    className="d-inp"
                  >
                      <option value="">Select State</option>
                    <option
                      value="TS"
                      selected={
                        props?.profileData?.corporateLocalBranchAddressState ===
                        "TS"
                          ? true
                          : false
                      }
                    >
                      TS
                    </option>
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
            <div className="row">
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
                  />
                </div>
              </div>
            </div>
            <div className="row">
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

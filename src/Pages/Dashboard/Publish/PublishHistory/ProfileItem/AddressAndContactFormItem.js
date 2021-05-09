import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actionGetCountryCodesSagaAction } from "../../../../../Store/Actions/SagaActions/CommonSagaActions";

const AddressAndContactFormItem = (props) => {
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
    <div className="profile-box" style={{marginBottom:0}}>
      <aside className="profile-side" style={{borderRadius:0}}>
        <h3 className="profile-side-title">Address & Contact</h3>
      </aside>
      <div className="profile-data">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex">
            <h6 className="reg-label">Corporate Headquarters</h6>
            </div>
            <div className="d-grp">
              <input
                type="text"
                name="corporateHQAddressLine1"
                value={
                  props?.profileData?.corporateHQAddressLine1
                    ? props?.profileData?.corporateHQAddressLine1
                    : ""
                }
                className="d-inp"
                placeholder="Address (Line 1)"
                readOnly
              />
            </div>
            <div className="d-grp">
              <input
                type="text"
                name="corporateHQAddressLine2"
                value={
                  props?.profileData?.corporateHQAddressLine2
                    ? props?.profileData?.corporateHQAddressLine2
                    : ""
                }
                className="d-inp"
                placeholder="Address (Line 2)"
                readOnly
              />
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <select
                    name="corporateHQAddressCountry"
                    id=""
                    className="d-inp"
                    value={props?.profileData?.corporateHQAddressCountry}
                    readOnly
                  >
                    <option value="">Select Country</option>
                    {countries?.map((item) => {
                      return (
                        <option
                          value={item.value}
                        >
                          {item.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <select
                    name="corporateHQAddressState"
                    id=""
                    className="d-inp"
                    value={props?.profileData?.corporateHQAddressState}
                    readOnly
                  >
                    <option value="">Select State</option>
                    <option
                      value="TS"
                    >
                      TS
                    </option>
                    <option
                      value="AP"
                    >
                      AP
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-4 pr-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="text"
                    name="corporateHQAddressCity"
                    value={
                      props?.profileData?.corporateHQAddressCity
                        ? props?.profileData?.corporateHQAddressCity
                        : ""
                    }
                    className="d-inp"
                    placeholder="City"
                    readOnly
                  />
                </div>
              </div>
              <div className="col-md-4 px-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="text"
                    name="corporateHQAddressDistrict"
                    value={
                      props?.profileData?.corporateHQAddressDistrict
                        ? props?.profileData?.corporateHQAddressDistrict
                        : ""
                    }
                    className="d-inp"
                    placeholder="District"
                    readOnly
                  />
                </div>
              </div>
              <div className="col-md-4 pl-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="number"
                    name="corporateHQAddressZipCode"
                    value={
                      props?.profileData?.corporateHQAddressZipCode
                        ? props?.profileData?.corporateHQAddressZipCode
                        : ""
                    }
                    className="d-inp"
                    placeholder="Zipcode"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="number"
                    name="corporateHQAddressPhone"
                    value={
                      props?.profileData?.corporateHQAddressPhone
                        ? parseInt(props?.profileData?.corporateHQAddressPhone)
                        : ""
                    }
                    className="d-inp"
                    placeholder="Phone Number"
                    readOnly
                  />
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="email"
                    name="corporateHQAddressEmail"
                    value={
                      props?.profileData?.corporateHQAddressEmail
                        ? props?.profileData?.corporateHQAddressEmail
                        : ""
                    }
                    className="d-inp"
                    placeholder="Office mail"
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
              <h6 className="reg-label">Corporate Local Branch</h6>
            </div>
            <div className="d-grp">
              <input
                type="text"
                name="corporateLocalBranchAddressLine1"
                value={
                  props?.profileData?.corporateLocalBranchAddressLine1
                    ? props?.profileData?.corporateLocalBranchAddressLine1
                    : ""
                }
                className="d-inp"
                placeholder="Address (Line 1)"
                readOnly
              />
            </div>
            <div className="d-grp">
              <input
                type="text"
                name="corporateLocalBranchAddressLine2"
                value={
                  props?.profileData?.corporateLocalBranchAddressLine2
                    ? props?.profileData?.corporateLocalBranchAddressLine2
                    : ""
                }
                className="d-inp"
                placeholder="Address (Line 2)"
                readOnly
              />
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <select
                    name="corporateLocalBranchAddressCountry"
                    id=""
                    className="d-inp"
                    value={props?.profileData?.corporateLocalBranchAddressCountry}
                    readOnly
                  >
                    <option value="">Select Country</option>
                    {countries?.map((item) => {
                      return (
                        <option
                          value={item.value}
                        >
                          {item.label}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <select
                    name="corporateLocalBranchAddressState"
                    id=""
                    className="d-inp"
                    value={props?.profileData?.corporateLocalBranchAddressState}
                    readOnly
                  >
                      <option value="">Select State</option>
                    <option
                      value="TS"
                    >
                      TS
                    </option>
                    <option
                      value="AP"
                    >
                      AP
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-4 pr-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="text"
                    name="corporateLocalBranchAddressCity"
                    value={
                      props?.profileData?.corporateLocalBranchAddressCity
                        ? props?.profileData?.corporateLocalBranchAddressCity
                        : ""
                    }
                    className="d-inp"
                    placeholder="City"
                    readOnly
                  />
                </div>
              </div>
              <div className="col-md-4 px-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="text"
                    name="corporateLocalBranchAddressDistrict"
                    value={
                      props?.profileData?.corporateLocalBranchAddressDistrict
                        ? props?.profileData
                            ?.corporateLocalBranchAddressDistrict
                        : ""
                    }
                    className="d-inp"
                    placeholder="District"
                    readOnly
                  />
                </div>
              </div>
              <div className="col-md-4 pl-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="number"
                    name="corporateLocalBranchAddressZipCode"
                    value={
                      props?.profileData?.corporateLocalBranchAddressZipCode
                        ? props?.profileData?.corporateLocalBranchAddressZipCode
                        : ""
                    }
                    className="d-inp"
                    placeholder="Zipcode"
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="number"
                    name="corporateLocalBranchAddressPhone"
                    value={
                      props?.profileData?.corporateLocalBranchAddressPhone
                        ? parseInt(
                            props?.profileData?.corporateLocalBranchAddressPhone
                          )
                        : ""
                    }
                    className="d-inp"
                    placeholder="Phone Number"
                    readOnly
                  />
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="email"
                    name="corporateLocalBranchAddressEmail"
                    value={
                      props?.profileData?.corporateLocalBranchAddressEmail
                        ? props?.profileData?.corporateLocalBranchAddressEmail
                        : ""
                    }
                    className="d-inp"
                    placeholder="Office mail"
                    readOnly
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

export default AddressAndContactFormItem;

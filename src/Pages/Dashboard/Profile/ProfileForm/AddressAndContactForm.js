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
            <div className="d-flex">
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
            <h6 className="reg-label" style={{marginBottom:'20px'}}>Corporate Headquarters <sup>*</sup></h6>
            </div>
            <div className="d-grp">
              <input
                type="text"
                name="corporateHQAddressLine1"
                readOnly={props?.disable!==undefined ? props?.disable : false}
                onChange={props?.onChange}
                value={
                  props?.profileData?.corporateHQAddressLine1
                    ? props?.profileData?.corporateHQAddressLine1
                    : ""
                }
                className="d-inp"
              />
              <label className="inp-caption">{`Address Line 1 `}<sup>*</sup></label>
            </div>
            <div className="d-grp">
              <input
                type="text"
                name="corporateHQAddressLine2"
                readOnly={props?.disable!==undefined ? props?.disable : false}
                onChange={props?.onChange}
                value={
                  props?.profileData?.corporateHQAddressLine2
                    ? props?.profileData?.corporateHQAddressLine2
                    : ""
                }
                className="d-inp"
              />
              <label className="inp-caption">{`Address Line 2`}</label>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <select
                    name="corporateHQAddressCountry"
                    id=""
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    className="d-inp"
                    value={props?.profileData?.corporateHQAddressCountry}
                    onChange={props?.onChange}
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
                  <label className="inp-caption">{`Country `}<sup>*</sup></label>
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <select
                    name="corporateHQAddressState"
                    id=""
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    className="d-inp"
                    value={props?.profileData?.corporateHQAddressState}
                    onChange={props?.onChange}
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
                  <label className="inp-caption">{`State `}<sup>*</sup></label>
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-4 pr-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="text"
                    name="corporateHQAddressCity"
                    readOnly={props?.disable!==undefined ? props?.disable : false}
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateHQAddressCity
                        ? props?.profileData?.corporateHQAddressCity
                        : ""
                    }
                    className="d-inp"
                  />
                <label className="inp-caption">{`City `}<sup>*</sup></label>
                </div>
              </div>
              <div className="col-md-4 px-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="text"
                    name="corporateHQAddressDistrict"
                    readOnly={props?.disable!==undefined ? props?.disable : false}
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateHQAddressDistrict
                        ? props?.profileData?.corporateHQAddressDistrict
                        : ""
                    }
                    className="d-inp"
                  />
                <label className="inp-caption">{`District `}<sup>*</sup></label>
                </div>
              </div>
              <div className="col-md-4 pl-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="number"
                    name="corporateHQAddressZipCode"
                    readOnly={props?.disable!==undefined ? props?.disable : false}
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateHQAddressZipCode
                        ? props?.profileData?.corporateHQAddressZipCode
                        : ""
                    }
                    className="d-inp"
                  />
                  <label className="inp-caption">{`Zipcode `}<sup>*</sup></label>
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="number"
                    name="corporateHQAddressPhone"
                    readOnly={props?.disable!==undefined ? props?.disable : false}
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateHQAddressPhone
                        ? parseInt(props?.profileData?.corporateHQAddressPhone)
                        : ""
                    }
                    className="d-inp"
                  />
                  <label className="inp-caption">{`Phone Number `}<sup>*</sup></label>
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <input
                    type="email"
                    name="corporateHQAddressEmail"
                    readOnly={props?.disable!==undefined ? props?.disable : false}
                    onChange={props?.onChange}
                    value={
                      props?.profileData?.corporateHQAddressEmail
                        ? props?.profileData?.corporateHQAddressEmail
                        : ""
                    }
                    className="d-inp"
                  />
                  <label className="inp-caption">{`Office Email `}<sup>*</sup></label>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex">
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
              <h6 className="reg-label"  style={{marginBottom:'20px'}}>Corporate Local Branch <sup>*</sup></h6>
              {props?.checkData === undefined && <div className="custom-control custom-checkbox" style={{marginLeft: '15px', marginBottom:'20px'}}>
                <input
                  type="checkbox"
                  onChange={props?.toggleCorporateHeadQuarters}
                  checked={props?.checkStatus}
                  name={"sameAsCorporateHeadquarters"}
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" style={{fontSize:'.750rem'}} htmlFor="customCheck1">
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
                readOnly={props?.disable!==undefined ? props?.disable : false}
              />
              <label className="inp-caption">{`Address Line 1`}</label>
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
                readOnly={props?.disable!==undefined ? props?.disable : false}
              />
              <label className="inp-caption">{`Address Line 2`}</label>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <select
                    name="corporateLocalBranchAddressCountry"
                    id=""
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    className="d-inp"
                    value={props?.profileData?.corporateLocalBranchAddressCountry}
                    onChange={props?.onChange}
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
                  <label className="inp-caption">{`Country`}</label>
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="d-grp">
                  <select
                    name="corporateLocalBranchAddressState"
                    id=""
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    className="d-inp"
                    value={props?.profileData?.corporateLocalBranchAddressState}
                    onChange={props?.onChange}
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
                  <label className="inp-caption">{`State`}</label>
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-4 pr-1" style={{margin:0, padding:0}}>
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
                    readOnly={props?.disable!==undefined ? props?.disable : false}
                  />
                  <label className="inp-caption">{`City`}</label>
                </div>
              </div>
              <div className="col-md-4 px-1" style={{margin:0, padding:0}}>
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
                    readOnly={props?.disable!==undefined ? props?.disable : false}
                    placeholder="District"
                  />
                <label className="inp-caption">{`District`}</label>
                </div>
              </div>
              <div className="col-md-4 pl-1" style={{margin:0, padding:0}}>
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
                    readOnly={props?.disable!==undefined ? props?.disable : false}
                  />
                  <label className="inp-caption">{`Zipcode`}</label>
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
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
                    readOnly={props?.disable!==undefined ? props?.disable : false}
                  />
                  <label className="inp-caption">{`Phone Number`}</label>
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
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
                    readOnly={props?.disable!==undefined ? props?.disable : false}
                    className="d-inp"
                  />
                  <label className="inp-caption">{`Office Email`}</label>
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

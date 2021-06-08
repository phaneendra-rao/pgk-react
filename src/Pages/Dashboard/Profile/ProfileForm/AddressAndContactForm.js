import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PgkTextField from "../../../../Components/FormFields/PgkTextField";
import PgkAutoComplete from "../../../../Components/FormFields/PgkAutoComplete";
import { actionGetStatesByCountryNameRequest, actionGetCitiesByStateNameRequest } from "../../../../Store/Actions/SagaActions/CommonSagaActions";

const AddressAndContactForm = (props) => {

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
            <div className="mb-20">
              <PgkTextField
                name="corporateHQAddressLine1"
                value={
                  props?.profileData?.corporateHQAddressLine1?.value
                    ? props?.profileData?.corporateHQAddressLine1?.value
                    : ""
                }
                errorMessage={props?.profileData?.corporateHQAddressLine1?.errorMessage}
                label={"Address Line 1"}
                disabled={props?.disable!==undefined ? props?.disable : false}
                onChange={props?.onChange}
                required={props?.profileData?.corporateHQAddressLine1?.isRequired}
              />
            </div>
            <div className="mb-20">
              <PgkTextField
                name="corporateHQAddressLine2"
                value={
                  props?.profileData?.corporateHQAddressLine2?.value
                    ? props?.profileData?.corporateHQAddressLine2?.value
                    : ""
                }
                label={"Address Line 2"}
                disabled={props?.disable!==undefined ? props?.disable : false}
                onChange={props?.onChange}
                required={props?.profileData?.corporateHQAddressLine2?.isRequired}
              />
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkAutoComplete
                    name={"corporateHQAddressCountry"}
                    onChange={props?.onChange}
                    value={props?.profileData?.corporateHQAddressCountry?.value ? props?.profileData?.corporateHQAddressCountry?.value : ''}
                    errorMessage={props?.profileData?.corporateHQAddressCountry?.errorMessage ? props?.profileData?.corporateHQAddressCountry?.errorMessage : ''}
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    required={props?.profileData?.corporateHQAddressCountry?.isRequired}
                    options={props?.countries}
                    label={"Country"}
                  />
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkAutoComplete
                    name={"corporateHQAddressState"}
                    onChange={props?.onChange}
                    value={props?.profileData?.corporateHQAddressState?.value ? props?.profileData?.corporateHQAddressState?.value : ''}
                    errorMessage={props?.profileData?.corporateHQAddressState?.errorMessage ? props?.profileData?.corporateHQAddressState?.errorMessage : ''}
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    required={props?.profileData?.corporateHQAddressState?.isRequired}
                    options={props?.hqStates}
                    label={"State"}
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-4 pr-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkAutoComplete
                      name={"corporateHQAddressCity"}
                      onChange={props?.onChange}
                      value={props?.profileData?.corporateHQAddressCity?.value ? props?.profileData?.corporateHQAddressCity?.value : ''}
                      errorMessage={props?.profileData?.corporateHQAddressCity?.errorMessage ? props?.profileData?.corporateHQAddressCity?.errorMessage : ''}
                      disabled={props?.disable!==undefined ? props?.disable : false}
                      required={props?.profileData?.corporateHQAddressCity?.isRequired}
                      options={props?.hqCities}
                      label={"City"}
                  />
                </div>
              </div>
              <div className="col-md-4 px-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateHQAddressDistrict"
                    value={
                      props?.profileData?.corporateHQAddressDistrict?.value
                        ? props?.profileData?.corporateHQAddressDistrict?.value
                        : ""
                    }
                    errorMessage={props?.profileData?.corporateHQAddressDistrict?.errorMessage}
                    label={"District"}
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    onChange={props?.onChange}
                    required={props?.profileData?.corporateHQAddressDistrict?.isRequired}
                  />
                </div>
              </div>
              <div className="col-md-4 pl-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateHQAddressZipCode"
                    value={
                      props?.profileData?.corporateHQAddressZipCode?.value
                        ? props?.profileData?.corporateHQAddressZipCode?.value
                        : ""
                    }
                    type={'number'}
                    errorMessage={props?.profileData?.corporateHQAddressZipCode?.errorMessage}
                    label={"Zipcode"}
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    onChange={props?.onChange}
                    required={props?.profileData?.corporateHQAddressZipCode?.isRequired}
                    validations={['isNumeric']}
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateHQAddressPhone"
                    value={
                      props?.profileData?.corporateHQAddressPhone?.value
                        ? parseInt(props?.profileData?.corporateHQAddressPhone?.value)
                        : ""
                    }
                    type={'number'}
                    errorMessage={props?.profileData?.corporateHQAddressPhone?.errorMessage}
                    label={"Phone Number"}
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    onChange={props?.onChange}
                    required={props?.profileData?.corporateHQAddressPhone?.isRequired}
                    validations={['isNumeric']}
                  />
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateHQAddressEmail"
                    value={
                      props?.profileData?.corporateHQAddressEmail?.value
                        ? props?.profileData?.corporateHQAddressEmail?.value
                        : ""
                    }
                    errorMessage={props?.profileData?.corporateHQAddressEmail?.errorMessage}
                    label={"Office Email"}
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    onChange={props?.onChange}
                    required={props?.profileData?.corporateHQAddressEmail?.isRequired}
                    validations={['isEmail']}
                  />
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
            <div className="mb-20">
              <PgkTextField
                name="corporateLocalBranchAddressLine1"
                value={
                  props?.profileData?.corporateLocalBranchAddressLine1?.value
                    ? props?.profileData?.corporateLocalBranchAddressLine1?.value
                    : ""
                }
                errorMessage={props?.profileData?.corporateLocalBranchAddressLine1?.errorMessage}
                label={"Address Line 1"}
                disabled={props?.disable!==undefined ? props?.disable : false}
                onChange={props?.onChange}
                required={props?.profileData?.corporateLocalBranchAddressLine1?.isRequired}
              />
            </div>
            <div className="mb-20">
              <PgkTextField
                name="corporateLocalBranchAddressLine2"
                value={
                  props?.profileData?.corporateLocalBranchAddressLine2?.value
                    ? props?.profileData?.corporateLocalBranchAddressLine2?.value
                    : ""
                }
                errorMessage={props?.profileData?.corporateLocalBranchAddressLine2?.errorMessage}
                label={"Address Line 2"}
                disabled={props?.disable!==undefined ? props?.disable : false}
                onChange={props?.onChange}
                required={props?.profileData?.corporateLocalBranchAddressLine2?.isRequired}
              />
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkAutoComplete
                    name={"corporateLocalBranchAddressCountry"}
                    onChange={props?.onChange}
                    value={props?.profileData?.corporateLocalBranchAddressCountry?.value ? props?.profileData?.corporateLocalBranchAddressCountry?.value : ''}
                    errorMessage={props?.profileData?.corporateLocalBranchAddressCountry?.errorMessage ? props?.profileData?.corporateLocalBranchAddressCountry?.errorMessage : ''}
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    options={props?.countries}
                    label={"Country"}
                    required={props?.profileData?.corporateLocalBranchAddressCountry?.isRequired}
                  />
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkAutoComplete
                    name={"corporateLocalBranchAddressState"}
                    onChange={props?.onChange}
                    value={props?.profileData?.corporateLocalBranchAddressState?.value ? props?.profileData?.corporateLocalBranchAddressState?.value : ''}
                    errorMessage={props?.profileData?.corporateLocalBranchAddressState?.errorMessage ? props?.profileData?.corporateLocalBranchAddressState?.errorMessage : ''}
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    options={props?.localStates}
                    label={"State"}
                    required={props?.profileData?.corporateLocalBranchAddressState?.isRequired}
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-4 pr-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkAutoComplete
                      name={"corporateLocalBranchAddressCity"}
                      onChange={props?.onChange}
                      value={
                        props?.profileData?.corporateLocalBranchAddressCity?.value
                          ? props?.profileData?.corporateLocalBranchAddressCity?.value
                          : ""
                      }
                      errorMessage={props?.profileData?.corporateLocalBranchAddressCity?.errorMessage ? props?.profileData?.corporateLocalBranchAddressCity?.errorMessage : ''}
                      disabled={props?.disable!==undefined ? props?.disable : false}
                      options={props?.localCities}
                      label={"City"}
                      required={props?.profileData?.corporateLocalBranchAddressCity?.isRequired}
                    />
                </div>
              </div>
              <div className="col-md-4 px-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateLocalBranchAddressDistrict"
                    value={
                      props?.profileData?.corporateLocalBranchAddressDistrict?.value
                        ? props?.profileData
                            ?.corporateLocalBranchAddressDistrict?.value
                        : ""
                    }
                    errorMessage={props?.profileData?.corporateLocalBranchAddressDistrict?.errorMessage}
                    label={"District"}
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    onChange={props?.onChange}
                    required={props?.profileData?.corporateLocalBranchAddressDistrict?.isRequired}
                  />
                </div>
              </div>
              <div className="col-md-4 pl-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateLocalBranchAddressZipCode"
                    value={
                      props?.profileData?.corporateLocalBranchAddressZipCode?.value
                        ? props?.profileData?.corporateLocalBranchAddressZipCode?.value
                        : ""
                    }
                    type={'number'}
                    errorMessage={props?.profileData?.corporateLocalBranchAddressZipCode?.errorMessage}
                    label={"Zipcode"}
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    onChange={props?.onChange}
                    required={props?.profileData?.corporateLocalBranchAddressZipCode?.isRequired}
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateLocalBranchAddressPhone"
                    value={
                      props?.profileData?.corporateLocalBranchAddressPhone?.value
                        ? parseInt(props?.profileData?.corporateLocalBranchAddressPhone?.value)
                        : ""
                    }
                    type={'number'}
                    errorMessage={props?.profileData?.corporateLocalBranchAddressPhone?.errorMessage}
                    label={"Phone Number"}
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    onChange={props?.onChange}
                    required={props?.profileData?.corporateLocalBranchAddressPhone?.isRequired}
                  />
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateLocalBranchAddressEmail"
                    value={
                      props?.profileData?.corporateLocalBranchAddressEmail?.value
                        ? props?.profileData?.corporateLocalBranchAddressEmail?.value
                        : ""
                    }
                    errorMessage={props?.profileData?.corporateLocalBranchAddressEmail?.errorMessage}
                    label={"Office Email"}
                    disabled={props?.disable!==undefined ? props?.disable : false}
                    onChange={props?.onChange}
                    required={props?.profileData?.corporateLocalBranchAddressEmail?.isRequired}
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

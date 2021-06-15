import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetCountryCodesSagaAction } from "../../../../../Store/Actions/SagaActions/CommonSagaActions";
import { actionGetStatesByCountryNameRequest, actionGetCitiesByStateNameRequest, actionGetUniversalAccessToken } from "../../../../../Store/Actions/SagaActions/CommonSagaActions";

import PgkTextField from "../../../../../Components/FormFields/PgkTextField";
import PgkSelectField from "../../../../../Components/FormFields/PgkSelectField";

const AddressAndContactFormItem = (props) => {
  const [countries, setCountries] = useState([]);
  const dispatch = useDispatch();


  const universalTutorialAccessToken = useSelector(state => state.DashboardReducer.universalTutorialAccessToken);
  const actualCountries = useSelector(state => state.DashboardReducer.countries);

  const [initHqAddress, setInitHqAddress] = useState({
    states: false,
    cities: false
  });

  const [initLocalAddress, setInitLocalAddress] = useState({
    states: false,
    cities: false
  });


  const [hqStates, setHqStates] = useState([]);
  const [hqCities, setHqCities] = useState([]);
  
  const [localStates, setLocalStates] = useState([]);
  const [localCities, setLocalCities] = useState([]);

  useEffect(()=>{
    if(actualCountries?.length && countries?.length===0) {
      const updatedCountryOptions = actualCountries.map((item) => {
        return { value: item?.country_name, label: item?.country_name };
      });

      setCountries(updatedCountryOptions);
    }
  }, [actualCountries?.length])

  const onStatesResponse = (response, type) => {
    let updatedStatesOptions = [];

    if (response?.length) {
      updatedStatesOptions = response.map((item) => {
        return { value: item?.state_name, label: item?.state_name };
      });
    }

    if(type==='HQ') {
      setHqStates(updatedStatesOptions);
      if(!initHqAddress.states) {
        setInitHqAddress((prevState)=>({
          ...prevState,
          states: true
        }))
      }
    } else {
      setLocalStates(updatedStatesOptions);
      if(!initLocalAddress.states) {
        setInitLocalAddress((prevState)=>({
          ...prevState,
          states: true
        }))
      }
    }
  }

  const onCitiesResponse = (response, type) => {
    let updatedCitiesOptions = [];

    if (response?.length) {
      updatedCitiesOptions = response.map((item) => {
        return { value: item?.city_name, label: item?.city_name };
      });
    }

    if(type==='HQ') {
      setHqCities(updatedCitiesOptions);
      if(!initHqAddress.cities) {
        setInitHqAddress((prevState)=>({
          ...prevState,
          cities: true
        }))
      }
    } else {
      setLocalCities(updatedCitiesOptions);
      if(!initLocalAddress.cities) {
        setInitLocalAddress((prevState)=>({
          ...prevState,
          cities: true
        }))
      }
    }
  }

  const getStatesByCountryName = (countryName, type) => {
    dispatch(
      actionGetStatesByCountryNameRequest({
        countryName: countryName,
        callback: (response)=>{
          onStatesResponse(response, type)
        },
      })
    );
  }

  const getCitiesByStateName = (stateName, type) => {
    dispatch(
      actionGetCitiesByStateNameRequest({
        stateName: stateName,
        callback: (response)=>{
          onCitiesResponse(response, type)
        },
      })
    );
  }

  useEffect(()=>{
    if(props?.profileData?.corporateHQAddressCountry && universalTutorialAccessToken && !initHqAddress?.states) {
      getStatesByCountryName(props?.profileData?.corporateHQAddressCountry, 'HQ');
    }

  }, [props?.profileData?.corporateHQAddressCountry, universalTutorialAccessToken])

  useEffect(()=>{
    if(props?.profileData?.corporateHQAddressState && universalTutorialAccessToken && !initHqAddress?.cities) {
      getCitiesByStateName(props?.profileData?.corporateHQAddressState, 'HQ');
    }

  }, [props?.profileData?.corporateHQAddressState, universalTutorialAccessToken])

  useEffect(()=>{
    if(props?.profileData?.corporateLocalBranchAddressCountry && universalTutorialAccessToken && initHqAddress?.states && !initLocalAddress?.states) {
      getStatesByCountryName(props?.profileData?.corporateLocalBranchAddressCountry, 'LOCAL');
    }

  }, [props?.profileData?.corporateLocalBranchAddressCountry, universalTutorialAccessToken, initHqAddress?.states])

  useEffect(()=>{
    if(props?.profileData?.corporateLocalBranchAddressState && universalTutorialAccessToken && initHqAddress?.cities && !initLocalAddress?.cities) {
      getCitiesByStateName(props?.profileData?.corporateLocalBranchAddressState, 'LOCAL');
    }
  }, [props?.profileData?.corporateLocalBranchAddressState, universalTutorialAccessToken, initHqAddress?.cities])

  useEffect(()=>{
    if(universalTutorialAccessToken===undefined) {
      dispatch(actionGetUniversalAccessToken());
    }
  }, [universalTutorialAccessToken])

  return (
    <div className="profile-box" style={{marginBottom:0}}>
      <aside className="profile-side" style={{borderRadius:0}}>
        <h3 className="profile-side-title">Address & Contact</h3>
      </aside>
      <div className="profile-data">
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex mb-2">
            <h6 className="reg-label">Corporate Headquarters</h6>
            </div>
            <div className="mb-20">
              <PgkTextField
                name="corporateHQAddressLine1"
                value={
                  props?.profileData?.corporateHQAddressLine1
                    ? props?.profileData?.corporateHQAddressLine1
                    : ""
                }
                errorMessage={props?.profileData?.corporateHQAddressLine1?.errorMessage}
                label={"Address Line 1"}
                disabled
                inputLabelProps={{style:{fontSize: '.800rem'}}}
                inputProps={{style:{fontSize: '.800rem'}}}
              />
            </div>
            <div className="mb-20">
              <PgkTextField
                name="corporateHQAddressLine2"
                value={
                  props?.profileData?.corporateHQAddressLine2
                    ? props?.profileData?.corporateHQAddressLine2
                    : ""
                }
                label={"Address Line 2"}
                disabled
                inputLabelProps={{style:{fontSize: '.800rem'}}}
                inputProps={{style:{fontSize: '.800rem'}}}
              />
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkSelectField
                    name={"corporateHQAddressCountry"}
                    value={props?.profileData?.corporateHQAddressCountry ? props?.profileData?.corporateHQAddressCountry : ''}
                    disabled
                    options={countries}
                    label={"Country"}
                    labelStyles={{fontSize: '.800rem'}}
                    selectStyles={{fontSize: '.800rem'}}
                    menuStyles={{fontSize: '.800rem'}}
                  />
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkSelectField
                    name={"corporateHQAddressState"}
                    value={props?.profileData?.corporateHQAddressState}
                    disabled
                    options={hqStates}
                    label={"State"}
                    labelStyles={{fontSize: '.800rem'}}
                    selectStyles={{fontSize: '.800rem'}}
                    menuStyles={{fontSize: '.800rem'}}
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-4 pr-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkSelectField
                      name={"corporateHQAddressCity"}
                      value={props?.profileData?.corporateHQAddressCity ? props?.profileData?.corporateHQAddressCity : ''}
                      disabled
                      options={hqCities}
                      label={"City"}
                      labelStyles={{fontSize: '.800rem'}}
                      selectStyles={{fontSize: '.800rem'}}
                      menuStyles={{fontSize: '.800rem'}}
                  />
                </div>
              </div>
              <div className="col-md-4 px-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateHQAddressDistrict"
                    value={
                      props?.profileData?.corporateHQAddressDistrict
                        ? props?.profileData?.corporateHQAddressDistrict
                        : ""
                    }
                    label={"District"}
                    disabled
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}}}
                  />
                </div>
              </div>
              <div className="col-md-4 pl-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateHQAddressZipCode"
                    value={
                      props?.profileData?.corporateHQAddressZipCode
                        ? props?.profileData?.corporateHQAddressZipCode
                        : ""
                    }
                    type={'number'}
                    label={"Zipcode"}
                    disabled
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}}}
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
                      props?.profileData?.corporateHQAddressPhone
                        ? parseInt(props?.profileData?.corporateHQAddressPhone)
                        : ""
                    }
                    type={'number'}
                    label={"Phone Number"}
                    disabled
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}}}
                  />
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateHQAddressEmail"
                    value={
                      props?.profileData?.corporateHQAddressEmail
                        ? props?.profileData?.corporateHQAddressEmail
                        : ""
                    }
                    label={"Office Email"}
                    disabled
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}}}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex mb-2">
              <h6 className="reg-label">Corporate Local Branch</h6>
            </div>
            <div className="mb-20">
              <PgkTextField
                name="corporateLocalBranchAddressLine1"
                value={
                  props?.profileData?.corporateLocalBranchAddressLine1
                    ? props?.profileData?.corporateLocalBranchAddressLine1
                    : ""
                }
                label={"Address Line 1"}
                disabled
                inputLabelProps={{style:{fontSize: '.800rem'}}}
                inputProps={{style:{fontSize: '.800rem'}}}
              />
            </div>
            <div className="mb-20">
              <PgkTextField
                name="corporateLocalBranchAddressLine2"
                value={
                  props?.profileData?.corporateLocalBranchAddressLine2
                    ? props?.profileData?.corporateLocalBranchAddressLine2
                    : ""
                }
                label={"Address Line 2"}
                disabled
                inputLabelProps={{style:{fontSize: '.800rem'}}}
                inputProps={{style:{fontSize: '.800rem'}}}
              />
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-6 pr-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkSelectField
                    name={"corporateLocalBranchAddressCountry"}
                    value={props?.profileData?.corporateLocalBranchAddressCountry}
                    disabled
                    options={countries}
                    label={"Country"}
                    labelStyles={{fontSize: '.800rem'}}
                    selectStyles={{fontSize: '.800rem'}}
                    menuStyles={{fontSize: '.800rem'}}
                  />
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkSelectField
                    name={"corporateLocalBranchAddressState"}
                    value={props?.profileData?.corporateLocalBranchAddressState}
                    disabled
                    options={localStates}
                    label={"State"}
                    labelStyles={{fontSize: '.800rem'}}
                    selectStyles={{fontSize: '.800rem'}}
                    menuStyles={{fontSize: '.800rem'}}
                  />
                </div>
              </div>
            </div>
            <div className="row" style={{margin:0, padding:0}}>
              <div className="col-md-4 pr-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkSelectField
                    name={"corporateLocalBranchAddressCity"}
                    value={
                      props?.profileData?.corporateLocalBranchAddressCity
                        ? props?.profileData?.corporateLocalBranchAddressCity
                        : ""
                    }
                    disabled
                    options={localCities}
                    label={"City"}
                    labelStyles={{fontSize: '.800rem'}}
                    selectStyles={{fontSize: '.800rem'}}
                    menuStyles={{fontSize: '.800rem'}}
                  />
                </div>
              </div>
              <div className="col-md-4 px-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateLocalBranchAddressDistrict"
                    value={
                      props?.profileData?.corporateLocalBranchAddressDistrict
                        ? props?.profileData
                            ?.corporateLocalBranchAddressDistrict
                        : ""
                    }
                    label={"District"}
                    labelStyles={{fontSize: '.800rem'}}
                    selectStyles={{fontSize: '.800rem'}}
                    menuStyles={{fontSize: '.800rem'}}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-4 pl-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateLocalBranchAddressZipCode"
                    value={
                      props?.profileData?.corporateLocalBranchAddressZipCode
                        ? parseInt(props?.profileData?.corporateLocalBranchAddressZipCode)
                        : ""
                    }
                    type={'number'}
                    label={"Zipcode"}
                    labelStyles={{fontSize: '.800rem'}}
                    selectStyles={{fontSize: '.800rem'}}
                    menuStyles={{fontSize: '.800rem'}}
                    disabled
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
                      props?.profileData?.corporateLocalBranchAddressPhone
                        ? parseInt(
                            props?.profileData?.corporateLocalBranchAddressPhone
                          )
                        : ""
                    }
                    type={'number'}
                    label={"Phone Number"}
                    labelStyles={{fontSize: '.800rem'}}
                    selectStyles={{fontSize: '.800rem'}}
                    menuStyles={{fontSize: '.800rem'}}
                    disabled
                  />
                </div>
              </div>
              <div className="col-md-6 pl-1" style={{margin:0, padding:0}}>
                <div className="mb-20">
                  <PgkTextField
                    name="corporateLocalBranchAddressEmail"
                    value={
                      props?.profileData?.corporateLocalBranchAddressEmail
                        ? props?.profileData?.corporateLocalBranchAddressEmail
                        : ""
                    }
                    label={"Office Email"}
                    labelStyles={{fontSize: '.800rem'}}
                    selectStyles={{fontSize: '.800rem'}}
                    menuStyles={{fontSize: '.800rem'}}
                    disabled
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

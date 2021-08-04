import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BasicForm from "./ProfileForm/BasicForm";
import AddressAndContactForm from "./ProfileForm/AddressAndContactForm";
import ProfileForm from "./ProfileForm/ProfileForm";
import ReferralForm from "./ProfileForm/ReferralForm";
import AccountSettingsForm from "./ProfileForm/AccountSettingsForm";
import { toast } from "react-toastify";
import moment from "moment";
import CustomToastModal from "../../../Components/CustomToastModal";
import CustomModal from "../../../Components/CustomModal";
import {
  actionGetCorporateProfileSagaAction,
  actionPatchCorporateProfileSagaAction,
} from "../../../Store/Actions/SagaActions/CorporateProfileSagaActions";

import {
  actionGetUniversalAccessToken
} from "../../../Store/Actions/SagaActions/CommonSagaActions";

import { actionGetStatesByCountryNameRequest, actionGetCitiesByStateNameRequest } from "../../../Store/Actions/SagaActions/CommonSagaActions";

const requiredFields = [
  'stakeholderID',
  'CIN',
  'corporateType',
  'corporateCategory',
  'corporateIndustry',
  'yearOfEstablishment',
  'corporateHQAddressLine1',
  'corporateHQAddressCountry',
  'corporateHQAddressState',
  'corporateHQAddressCity',
  'corporateHQAddressDistrict',
  'corporateHQAddressZipCode',
  'corporateHQAddressPhone',
  'corporateHQAddressEmail',
  'primaryContactFirstName',
  'primaryContactLastName',
  'primaryContactPhone',
  'primaryContactEmail'
];

const formFields = [
  'stakeholderID',
  'CIN',
  'corporateType',
  'corporateCategory',
  'corporateIndustry',
  'yearOfEstablishment',

  'corporateHQAddressLine1',
  'corporateHQAddressLine2',
  'corporateHQAddressCountry',
  'corporateHQAddressState',
  'corporateHQAddressCity',
  'corporateHQAddressDistrict',
  'corporateHQAddressZipCode',
  'corporateHQAddressPhone',
  'corporateHQAddressEmail',

  'corporateLocalBranchAddressLine1',
  'corporateLocalBranchAddressLine2',
  'corporateLocalBranchAddressCountry',
  'corporateLocalBranchAddressState',
  'corporateLocalBranchAddressCity',
  'corporateLocalBranchAddressDistrict',
  'corporateLocalBranchAddressZipCode',
  'corporateLocalBranchAddressPhone',
  'corporateLocalBranchAddressEmail',

  'primaryContactFirstName',
  'primaryContactMiddleName',
  'primaryContactLastName',
  'primaryContactPhone',
  'primaryContactEmail',
  'primaryContactDesignation',
  'companyProfile',
  'profilePicture', 
  'attachment'
];

const Profile = () => {
  const [profile, setProfile] = useState();
  const [checkStatus, setCheckStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showTermsAndConditions, setShowTermsAndConditions] = useState(false);
  const [profilePicture, setProfilePicture] = useState();
  const [attachment, setAttachment] = useState({
    attachment: undefined,
    attachmentName: undefined,
    attachmentError: undefined
  });
  const [
    isTermsAndConditionsChecked,
    setIsTermsAndConditionsChecked,
  ] = useState(false);

  const [initHqAddress, setInitHqAddress] = useState({
    states: false,
    cities: false
  });

  const [initLocalAddress, setInitLocalAddress] = useState({
    states: false,
    cities: false
  });

  const [countries, setCountries] = useState([]);

  const [hqStates, setHqStates] = useState([]);
  const [hqCities, setHqCities] = useState([]);
  
  const [localStates, setLocalStates] = useState([]);
  const [localCities, setLocalCities] = useState([]);

  const dispatch = useDispatch();

  const profileInfo = useSelector(state => state.DashboardReducer.profileInfo);
  const universalTutorialAccessToken = useSelector(state => state.DashboardReducer.universalTutorialAccessToken);
  const actualCountries = useSelector(state => state.DashboardReducer.countries);

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
    if(profileInfo) {
      setProfilePicture(profileInfo?.profilePicture);
      setAttachment({
        attachment: profileInfo?.attachment,
        attachmentName: profileInfo?.attachmentName,
        attachmentError: undefined
      });
  
      let profileData = {};
  
      formFields.forEach((key)=>{
        if(['profilePicture', 'attachment'].includes(key)) {
          profileData[key] = {
            value: undefined,
            errorMessage: undefined,
            isRequired: requiredFields.includes(key) ? true : false
          }
        } else if(['corporateHQAddressCountry', 'corporateLocalBranchAddressCountry'].includes(key)) {
          profileData[key] = {
            // value: 'India',
            value: profileInfo[key],
            errorMessage: undefined,
            isRequired: requiredFields.includes(key) ? true : false
          }
        } else if(['corporateHQAddressPhone', 'corporateLocalBranchAddressPhone', 'primaryContactPhone'].includes(key)) {
          profileData[key] = {
            value: profileInfo[key] ? profileInfo[key].substring(profileInfo[key].length - 10) : '',
            errorMessage: undefined,
            isRequired: requiredFields.includes(key) ? true : false
          }
        } else {
          profileData[key] = {
            value: profileInfo[key],
            errorMessage: undefined,
            isRequired: requiredFields.includes(key) ? true : false
          }
        }
      })
      setProfile(profileData);
    }

  }, [profileInfo]);

  useEffect(()=>{
    if(profile?.corporateHQAddressCountry?.value && universalTutorialAccessToken && !initHqAddress?.states) {
      getStatesByCountryName(profile?.corporateHQAddressCountry?.value, 'HQ');
    }

    if(profile?.corporateHQAddressState?.value && universalTutorialAccessToken && !initHqAddress?.cities) {
      getCitiesByStateName(profile?.corporateHQAddressState?.value, 'HQ');
    }

  }, [profile, universalTutorialAccessToken]);

  useEffect(()=>{
    if(profile?.corporateLocalBranchAddressCountry?.value && universalTutorialAccessToken && initHqAddress?.states && !initLocalAddress?.states) {
      getStatesByCountryName(profile?.corporateLocalBranchAddressCountry?.value, 'LOCAL');
    }

  }, [profile, universalTutorialAccessToken, initHqAddress?.states])

  useEffect(()=>{
    if(profile?.corporateLocalBranchAddressState?.value && universalTutorialAccessToken && initHqAddress?.cities && !initLocalAddress?.cities) {
      getCitiesByStateName(profile?.corporateLocalBranchAddressState?.value, 'LOCAL');
    }
  }, [profile, universalTutorialAccessToken, initHqAddress?.cities])

  useEffect(()=>{
    if(universalTutorialAccessToken===undefined) {
      dispatch(actionGetUniversalAccessToken());
    }
  }, [universalTutorialAccessToken])

  const updateProfileData = (name, value, errorMessage) => {
    let data = profile[name];
    data['value'] = value;
    data['errorMessage'] = errorMessage

    let updatedProfile = {...profile}

    if((name==='corporateHQAddressCountry' || name==='corporateLocalBranchAddressCountry')) {
      getStatesByCountryName(value, name==='corporateHQAddressCountry' ? 'HQ' : 'LOCAL')
      if(name==='corporateHQAddressCountry') {
        setHqStates([]);
      } else if(name==='corporateLocalBranchAddressCountry') {
        setLocalStates([]);
      }

      if(name==='corporateHQAddressCountry') {
        setHqCities([]);
      } else if(name==='corporateLocalBranchAddressCountry') {
        setLocalCities([]);
      }

      if(name==='corporateHQAddressCountry') {
        updatedProfile = {
          ...updatedProfile,
          corporateHQAddressState: {
            ...updatedProfile.corporateHQAddressState,
            value: undefined,
            errorMessage: updatedProfile.corporateHQAddressState.isRequired ? 'Required' : ''
          },
          corporateHQAddressCity: {
            ...updatedProfile.corporateHQAddressCity,
            value: undefined,
            errorMessage: updatedProfile.corporateHQAddressCity.isRequired ? 'Required' : ''
          }
        }
      } else if(name==='corporateLocalBranchAddressCountry') {
        updatedProfile = {
          ...updatedProfile,
          corporateLocalBranchAddressState: {
            ...updatedProfile.corporateLocalBranchAddressState,
            value: undefined,
            errorMessage: updatedProfile.corporateLocalBranchAddressState.isRequired ? 'Required' : ''
          },
          corporateLocalBranchAddressCity: {
            ...updatedProfile.corporateLocalBranchAddressCity,
            value: undefined,
            errorMessage: updatedProfile.corporateLocalBranchAddressCity.isRequired ? 'Required' : ''
          }
        }
      }
    }

    if((name==='corporateHQAddressState' || name==='corporateLocalBranchAddressState')) {
      getCitiesByStateName(value, name==='corporateHQAddressState' ? 'HQ' : 'LOCAL')
      if(name==='corporateHQAddressState') {
        setHqCities([]);
      } else if(name==='corporateLocalBranchAddressState') {
        setLocalCities([]);
      }
      if(name==='corporateHQAddressState') {
        updatedProfile = {
          ...updatedProfile,
          corporateHQAddressCity: {
            ...updatedProfile.corporateHQAddressCity,
            value: undefined,
            errorMessage: updatedProfile.corporateHQAddressCity.isRequired ? 'Required' : ''
          }
        }
      } else if(name==='corporateLocalBranchAddressState') {
        updatedProfile = {
          ...updatedProfile,
          corporateLocalBranchAddressCity: {
            ...updatedProfile.corporateLocalBranchAddressCity,
            value: undefined,
            errorMessage: updatedProfile.corporateLocalBranchAddressCity.isRequired ? 'Required' : ''
          }
        }
      }
    }

    
    setProfile((prevProfile) => ({
      ...prevProfile,
      ...updatedProfile,
      ...data,
    }));
  };

  const fileHandler = (event) => {
    event.preventDefault();
    const { name } = event.target;

  if (event.target.files) {
    let errorMessage = undefined;
    const val = event.target.files.length;

    if(val) {
      if(parseFloat((event.target.files[0].size / 1024).toFixed(2)) > 5000) {
        errorMessage = 'Please select file below 5 MB';
      }
    }

    for (let i = 0; i < val; i++) {
      let reader = new FileReader();
      reader.onload = function (ev) {
        if (name === "profilePicture") {
          setProfilePicture(ev.target.result.split(",")[1]);
        } else if (name === "attachment") {
          setAttachment({
            attachment: ev.target.result.split(",")[1],
            attachmentName: event?.target?.files[0]?.name ? event.target.files[0].name : '-',
            attachmentError: errorMessage
          });
        }
      };

      reader.readAsDataURL(event.target.files[i]);
    }

    let data = profile[name];
    data['value'] = event.target.files[0]
    data['errorMessage'] = errorMessage
      setProfile((prevProfile) => ({
        ...prevProfile,
        ...data
      }));
    }
  };

  const toggleCorporateHeadQuarters = () => {
    setCheckStatus(!checkStatus);
    if(!checkStatus) {
      setLocalStates(hqStates);
      setLocalCities(hqCities);

      setProfile((prevState)=>({
        ...prevState,
        corporateLocalBranchAddressLine1: {
          value: prevState.corporateHQAddressLine1.value,
          errorMessage: undefined
        },
        corporateLocalBranchAddressLine2: {
          value: prevState.corporateHQAddressLine2.value,
          errorMessage: undefined
        },
        corporateLocalBranchAddressCountry: {
          value: prevState.corporateHQAddressCountry.value,
          errorMessage: undefined
        },
        corporateLocalBranchAddressState: {
          value: prevState.corporateHQAddressState.value,
          errorMessage: undefined
        },
        corporateLocalBranchAddressCity: {
          value: prevState.corporateHQAddressCity.value,
          errorMessage: undefined
        },
        corporateLocalBranchAddressDistrict: {
          value: prevState.corporateHQAddressDistrict.value,
          errorMessage: undefined
        },
        corporateLocalBranchAddressZipCode: {
          value: prevState.corporateHQAddressZipCode.value,
          errorMessage: undefined
        },
        corporateLocalBranchAddressPhone: {
          value: prevState.corporateHQAddressPhone.value,
          errorMessage: undefined
        },
        corporateLocalBranchAddressEmail: {
          value: prevState.corporateHQAddressEmail.value,
          errorMessage: undefined
        }
      }));
    }
  };

  const saveProfile = () => {
    const profileKeys = profile ? Object.keys(profile) : [];

    let updatedProfile = {};

    profileKeys?.forEach((item)=>{
      if(profile[item]?.value) {
        updatedProfile[item] = profile[item].value
      }
    });

    updatedProfile = {
      ...updatedProfile,
      corporateHQAddressPhone: updatedProfile.corporateHQAddressPhone && updatedProfile.corporateHQAddressPhone.toString().trim()!=='' ? '+91'+updatedProfile.corporateHQAddressPhone : '',
      corporateLocalBranchAddressPhone: updatedProfile.corporateLocalBranchAddressPhone && updatedProfile.corporateLocalBranchAddressPhone.toString().trim()!=='' && updatedProfile.corporateLocalBranchAddressPhone.toString().trim().length===10 ? '+91'+updatedProfile.corporateLocalBranchAddressPhone : '',
      primaryContactPhone: updatedProfile.primaryContactPhone && updatedProfile.primaryContactPhone.toString().trim()!=='' && updatedProfile.primaryContactPhone.toString().trim().length===10 ? '+91'+updatedProfile.primaryContactPhone : '',
      dateOfJoining: moment(updatedProfile.dateOfJoining),
    };

    if (updatedProfile?.attachment === undefined) {
      delete updatedProfile.attachment;
    }

    if (updatedProfile?.profilePicture === undefined) {
      delete updatedProfile.profilePicture;
    }

    dispatch(
      actionPatchCorporateProfileSagaAction({
        apiPayloadRequest: updatedProfile,
        callback: () => {
          setShowModal(true);
        },
      })
    );
  };

  const isFormValid = () => {
    if ((profile && requiredFields.some((item)=>profile[item]?.errorMessage!==undefined)) || attachment.attachmentError) {
      return false;
    } else {
      return true && isTermsAndConditionsChecked;
    }
  };

  return (
    <div className="main" style={{ marginTop: 0 }}>
      <h3 className="main-title">Corporate Profile</h3>
      <div className="profile-pic">
        <img
          src={
            profilePicture
              ? "data:image/png;base64," + profilePicture
              : "../../../images/logo.png"
          }
          className="profile-pic-img"
          alt="no img"
        />
        <div className="upload-pic">
          <label htmlFor="profile">
            Click to <br /> Change your <br /> Logo
          </label>
          <input
            type="file"
            name="profilePicture"
            onChange={fileHandler}
            id="profile"
            accept="image/jpeg, image/jpg, image/png"
            className="upload-pic-inp"
          />
        </div>
      </div>
      <div className={'d-flex welcome-widget flex-row justify-content-end align-items-center'} style={{backgroundColor: 'transparent', border: 'none', padding: 0,}}>
        <div className={'date-of-joining-widget d-flex flex-column justify-content-center'}>
            <p className={'sub-label'}>Date of joining the Platform</p>
            <p className={'label'}>{profileInfo?.dateOfJoining ? moment(profileInfo?.dateOfJoining).format('DD-MM-YYYY') : '-'}</p>
        </div>
      </div>
      <BasicForm profileData={profile} onChange={updateProfileData} />
      <AddressAndContactForm
        profileData={profile}
        onChange={updateProfileData}
        checkStatus={checkStatus}
        toggleCorporateHeadQuarters={toggleCorporateHeadQuarters}
        countries={countries}
        hqStates={hqStates}
        hqCities={hqCities}
        localStates={localStates}
        localCities={localCities}
      />
      <ProfileForm
        profileData={profile}
        onChange={updateProfileData}
        tempAttachment={attachment}
        fileHandler={fileHandler}
      />
      <AccountSettingsForm profileData={profile} onChange={updateProfileData} />
      <ReferralForm />
      <div className="d-grp">
        <div className="custom-control custom-checkbox">
          <input
            onChange={() => {
              setIsTermsAndConditionsChecked(!isTermsAndConditionsChecked);
            }}
            checked={isTermsAndConditionsChecked}
            type="checkbox"
            className="custom-control-input"
            id="accept"
            required
          />
          <label className="custom-control-label" htmlFor="accept">
            I hereby accept the <span onClick={()=>{
              setShowTermsAndConditions(true);
            }} style={{textDecoration: 'underline', color: '#646464', fontWeight: 'bold', cursor: 'pointer'}}><i>Terms & Conditions</i></span> of the Platform
          </label>
        </div>
      </div>

      <div className="w-100 text-center">
        <button
          type="button"
          onClick={saveProfile}
          disabled={!isFormValid()}
          className="btn"
        >
          Save
        </button>
      </div>
      {showModal && <CustomToastModal
        onClose={() => {
          setShowModal(false);
        }}
        show={showModal}
        iconNameClass={"fa-building"}
        message={"Your profile has been updated successfully"}
      />}
      {showTermsAndConditions && <CustomModal
        show={showTermsAndConditions}
      >
        <div className="hiring-modal">
          <div className="modal-header hiring-modal-header">
            <h5 className="modal-title" style={{fontSize: '1rem'}} id="exampleModalLabel">
              Terms and Conditions
            </h5>
            <button
              type="button"
              className="close"
              style={{fontSize: '1rem', color: 'white'}}
              onClick={()=>{
                setShowTermsAndConditions(false);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <p style={{padding: '12px'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          <br/>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </CustomModal>}
    </div>
  );
};

export default Profile;

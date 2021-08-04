import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import BasicForm from "../Profile/ProfileForm/BasicForm";
import AddressAndContactForm from "../Profile/ProfileForm/AddressAndContactForm";
import ProfileForm from "../Profile/ProfileForm/ProfileForm";

import {
  actionGetCorporateProfileSagaAction,
  actionPostPublishCorporateProfileSagaAction,
} from "../../../Store/Actions/SagaActions/CorporateProfileSagaActions";
import CustomToastModal from "../../../Components/CustomToastModal";
import CustomModal from "../../../Components/CustomModal";
import { actionGetStatesByCountryNameRequest, actionGetCitiesByStateNameRequest, actionGetUniversalAccessToken } from "../../../Store/Actions/SagaActions/CommonSagaActions";

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

const PublishProfile = () => {
  const history = useHistory();
  const [profile, setProfile] = useState();
  const [showModal, setShowModal] = useState(false);
  const [profilePicture, setProfilePicture] = useState();
  const [attachment, setAttachment] = useState({
    attachment: undefined,
    attachmentName: undefined
  });

  const [checkData, setCheckData] = useState({
    CIN: false,
    corporateType: false,
    corporateCategory: false,
    corporateIndustry: false,
    yearOfEstablishment: false,
    corporateHeadQuarters: false,
    corporateLocalAddress: false,
    companyProfile: false,
    attachment: false,
  });

  const [
    isTermsAndConditionsChecked,
    setIsTermsAndConditionsChecked,
  ] = useState(false);

  const [showTermsAndConditions, setShowTermsAndConditions] = useState(false);

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

  }, [profile, universalTutorialAccessToken])

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

  const publishProfile = () => {
    let updatedPublishProfile = {};

    if(checkData?.CIN) {
      updatedPublishProfile['CIN'] = profile?.CIN?.value
    }

    if(checkData?.corporateType) {
      updatedPublishProfile['corporateType'] = profile?.corporateType?.value
    }

    if(checkData?.corporateCategory) {
      updatedPublishProfile['corporateCategory'] = profile?.corporateCategory?.value
    }

    if(checkData?.corporateIndustry) {
      updatedPublishProfile['corporateIndustry'] = profile?.corporateIndustry?.value
    }

    if(checkData?.yearOfEstablishment) {
      updatedPublishProfile['yearOfEstablishment'] = profile?.yearOfEstablishment?.value
    }

    if(checkData?.companyProfile) {
      updatedPublishProfile['companyProfile'] = profile?.companyProfile?.value
    }

    // TODO attachment ?

    if(checkData?.corporateHeadQuarters) {
      updatedPublishProfile['corporateHQAddressLine1'] = profile?.corporateHQAddressLine1?.value;
      updatedPublishProfile['corporateHQAddressLine2'] = profile?.corporateHQAddressLine2?.value;
      updatedPublishProfile['corporateHQAddressCountry'] = profile?.corporateHQAddressCountry?.value;
      updatedPublishProfile['corporateHQAddressState'] = profile?.corporateHQAddressState?.value;
      updatedPublishProfile['corporateHQAddressCity'] = profile?.corporateHQAddressCity?.value;
      updatedPublishProfile['corporateHQAddressDistrict'] = profile?.corporateHQAddressDistrict?.value;
      updatedPublishProfile['corporateHQAddressZipCode'] = profile?.corporateHQAddressZipCode?.value;
      updatedPublishProfile['corporateHQAddressPhone'] = profile?.corporateHQAddressPhone?.value;
      updatedPublishProfile['corporateHQAddressEmail'] = profile?.corporateHQAddressEmail?.value;
    }

    if(checkData?.corporateLocalAddress) {
      updatedPublishProfile['corporateLocalBranchAddressLine1'] = profile?.corporateLocalBranchAddressLine1?.value;
      updatedPublishProfile['corporateLocalBranchAddressLine2'] = profile?.corporateLocalBranchAddressLine2?.value;
      updatedPublishProfile['corporateLocalBranchAddressCountry'] = profile?.corporateLocalBranchAddressCountry?.value;
      updatedPublishProfile['corporateLocalBranchAddressState'] = profile?.corporateLocalBranchAddressState?.value;
      updatedPublishProfile['corporateLocalBranchAddressCity'] = profile?.corporateLocalBranchAddressCity?.value;
      updatedPublishProfile['corporateLocalBranchAddressDistrict'] = profile?.corporateLocalBranchAddressDistrict?.value;
      updatedPublishProfile['corporateLocalBranchAddressZipCode'] = profile?.corporateLocalBranchAddressZipCode?.value;
      updatedPublishProfile['corporateLocalBranchAddressPhone'] = profile?.corporateLocalBranchAddressPhone?.value;
      updatedPublishProfile['corporateLocalBranchAddressEmail'] = profile?.corporateLocalBranchAddressEmail?.value;
    }

    console.log('profile ', profile);
    console.log('updatedPublishProfile ', updatedPublishProfile);

    dispatch(
      actionPostPublishCorporateProfileSagaAction({
        apiPayloadRequest: updatedPublishProfile,
        callback: (response)=>{
          setShowModal(true);
        },
      })
    );
  };

  const isFormValid = () => {
    if (
      (checkData?.CIN ||
        checkData?.corporateType ||
        checkData?.corporateCategory ||
        checkData?.corporateIndustry ||
        checkData?.dateOfJoining ||
        checkData?.corporateHeadQuarters ||
        checkData?.corporateLocalAddress ||
        checkData?.companyProfile ||
        checkData?.attachment) &&
      isTermsAndConditionsChecked
    ) {
      return true;
    } else {
      return false;
    }
  };

  const cancelPublishProfile = () => {
    history.goBack();
  };

  const handleCheckData = (name, value) => {
    setCheckData((prevCheckData) => ({
      ...prevCheckData,
      [name]: value,
    }));
  };

  return (
    <div className="main" style={{ marginTop: 0 }}>
      <h3 style={{fontWeight: '500', textAlign:'center', fontSize: '1rem', marginBottom: '20px'}}>Corporate Profile</h3>
      <h4 class="d-profile-name text-center" style={{fontSize: '1.2rem'}}>
        Select the profile information you want to publish
      </h4>
      <BasicForm
        profileData={profile}
        checkData={checkData}
        handleCheckData={handleCheckData}
        check
        disable
      />
      <AddressAndContactForm
        profileData={profile}
        checkData={checkData}
        handleCheckData={handleCheckData}
        check
        disable
        countries={countries}
        hqStates={hqStates}
        hqCities={hqCities}
        localStates={localStates}
        localCities={localCities}
      />
      <ProfileForm
        profileData={profile}
        tempAttachment={attachment}
        checkData={checkData}
        handleCheckData={handleCheckData}
        check
        disable
      />

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
        <button type="button" onClick={cancelPublishProfile} className="btn mr-4">
          Cancel
        </button>
        <button
          type="button"
          onClick={publishProfile}
          disabled={!isFormValid()}
          className="btn"
        >
          Publish
        </button>
      </div>
      {showModal && <CustomToastModal
        onClose={() => {
          setShowModal(false);
        }}
        show={showModal}
        iconNameClass={"fa-building"}
        message={"Your profile (selected information) has been published successfully"}
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

export default PublishProfile;

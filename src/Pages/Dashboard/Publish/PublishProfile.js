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

const PublishProfile = () => {
  const history = useHistory();
  const [profile, setProfile] = useState();
  const [showModal, setShowModal] = useState(false);
  const [attachment, setAttachment] = useState({
    attachment: undefined,
    attachmentName: undefined
  });

  const [checkData, setCheckData] = useState({
    CIN: false,
    corporateType: false,
    corporateCategory: false,
    corporateIndustry: false,
    dateOfJoining: false,
    corporateHeadQuarters: false,
    corporateLocalAddress: false,
    companyProfile: false,
    attachment: false,
  });

  const [
    isTermsAndConditionsChecked,
    setIsTermsAndConditionsChecked,
  ] = useState(false);

  const dispatch = useDispatch();

  const onGetCorporateProfileRequest = (response) => {
    setAttachment({
      attachment: response?.attachment,
      attachmentName: response?.attachmentName
    });

    setProfile({
      ...response,
      profilePicture: undefined,
      attachment: undefined,
    });
  };

  const getProfile = () => {
    dispatch(
      actionGetCorporateProfileSagaAction({
        callback: onGetCorporateProfileRequest,
      })
    );
  };

  useEffect(() => {
    getProfile();
  }, []);

  const publishProfile = () => {
    let updatedPublishProfile = {};

    if(checkData?.CIN) {
      updatedPublishProfile['CIN'] = profile?.CIN
    }

    if(checkData?.corporateType) {
      updatedPublishProfile['corporateType'] = profile?.corporateType
    }

    if(checkData?.corporateCategory) {
      updatedPublishProfile['corporateCategory'] = profile?.corporateCategory
    }

    if(checkData?.corporateIndustry) {
      updatedPublishProfile['corporateIndustry'] = profile?.corporateIndustry
    }

    if(checkData?.dateOfJoining) {
      updatedPublishProfile['dateOfJoining'] = profile?.dateOfJoining
    }

    if(checkData?.companyProfile) {
      updatedPublishProfile['companyProfile'] = profile?.companyProfile
    }

    // TODO attachment ?

    if(checkData?.corporateHeadQuarters) {
      updatedPublishProfile['corporateHQAddressLine1'] = profile?.corporateHQAddressLine1;
      updatedPublishProfile['corporateHQAddressLine2'] = profile?.corporateHQAddressLine2;
      updatedPublishProfile['corporateHQAddressCountry'] = profile?.corporateHQAddressCountry;
      updatedPublishProfile['corporateHQAddressState'] = profile?.corporateHQAddressState;
      updatedPublishProfile['corporateHQAddressCity'] = profile?.corporateHQAddressCity;
      updatedPublishProfile['corporateHQAddressDistrict'] = profile?.corporateHQAddressDistrict;
      updatedPublishProfile['corporateHQAddressZipCode'] = profile?.corporateHQAddressZipCode;
      updatedPublishProfile['corporateHQAddressPhone'] = profile?.corporateHQAddressPhone;
      updatedPublishProfile['corporateHQAddressEmail'] = profile?.corporateHQAddressEmail;
    }

    if(checkData?.corporateLocalAddress) {
      updatedPublishProfile['corporateLocalBranchAddressLine1'] = profile?.corporateLocalBranchAddressLine1;
      updatedPublishProfile['corporateLocalBranchAddressLine2'] = profile?.corporateLocalBranchAddressLine2;
      updatedPublishProfile['corporateLocalBranchAddressCountry'] = profile?.corporateLocalBranchAddressCountry;
      updatedPublishProfile['corporateLocalBranchAddressState'] = profile?.corporateLocalBranchAddressState;
      updatedPublishProfile['corporateLocalBranchAddressCity'] = profile?.corporateLocalBranchAddressCity;
      updatedPublishProfile['corporateLocalBranchAddressDistrict'] = profile?.corporateLocalBranchAddressDistrict;
      updatedPublishProfile['corporateLocalBranchAddressZipCode'] = profile?.corporateLocalBranchAddressZipCode;
      updatedPublishProfile['corporateLocalBranchAddressPhone'] = profile?.corporateLocalBranchAddressPhone;
      updatedPublishProfile['corporateLocalBranchAddressEmail'] = profile?.corporateLocalBranchAddressEmail;
    }

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
      />
      <ProfileForm
        profileData={profile}
        attachment={attachment}
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
            I hereby accept the Terms & Conditions of the Platform
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
      <CustomToastModal
        onClose={() => {
          setShowModal(false);
        }}
        show={showModal}
        iconNameClass={"fa-building"}
        message={"Your profile (selected information) has been published successfully"}
      />
    </div>
  );
};

export default PublishProfile;

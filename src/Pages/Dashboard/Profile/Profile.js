import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BasicForm from "./ProfileForm/BasicForm";
import AddressAndContactForm from "./ProfileForm/AddressAndContactForm";
import ProfileForm from "./ProfileForm/ProfileForm";
import AccountSettingsForm from "./ProfileForm/AccountSettingsForm";
import { toast } from "react-toastify";
import moment from "moment";
import CustomToastModal from "../../../Components/CustomToastModal";
import {
  actionGetCorporateProfileSagaAction,
  actionPatchCorporateProfileSagaAction,
} from "../../../Store/Actions/SagaActions/CorporateProfileSagaActions";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [checkStatus, setCheckStatus] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [profilePicture, setProfilePicture] = useState();
  const [attachment, setAttachment] = useState({
    attachment: undefined,
    attachmentName: undefined
  });
  const [
    isTermsAndConditionsChecked,
    setIsTermsAndConditionsChecked,
  ] = useState(false);

  const dispatch = useDispatch();

  const profileInfo = useSelector(state => state.DashboardReducer.profileInfo);

  useEffect(()=>{
    setProfilePicture(profileInfo?.profilePicture);
    setAttachment({
      attachment: profileInfo?.attachment,
      attachmentName: profileInfo?.attachmentName
    });
    setProfile({
      ...profileInfo,
      profilePicture: undefined,
      attachment: undefined,
    })
  }, [profileInfo]);

  const updateProfileData = (event) => {
    let { name, value } = event.target;

    if(['yearOfEstablishment', 'corporateHQAddressZipCode', 'corporateLocalBranchAddressZipCode'].includes(name)) {
      value = value.replace(/[^0-9.]/g, "");
    }
    
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const fileHandler = (event) => {
    event.preventDefault();
    const { name } = event.target;

    if (event.target.files) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        [name]: event.target.files[0],
      }));
    }

    const val = event.target.files.length;
    for (let i = 0; i < val; i++) {
      let reader = new FileReader();
      reader.onload = function (ev) {
        if (name === "profilePicture") {
          setProfilePicture(ev.target.result.split(",")[1]);
        } else if (name === "attachment") {
          setAttachment({
            attachment: ev.target.result.split(",")[1],
            attachmentName: event?.target?.files[0]?.name ? event.target.files[0].name : '-'
          });
        }
      };

      reader.readAsDataURL(event.target.files[i]);
    }
  };

  const toggleCorporateHeadQuarters = () => {
    setCheckStatus(!checkStatus);
    if(!checkStatus) {
      setProfile((prevState)=>({
        ...prevState,
        corporateLocalBranchAddressLine1: prevState.corporateHQAddressLine1,
        corporateLocalBranchAddressLine2: prevState.corporateHQAddressLine2,
        corporateLocalBranchAddressCountry: prevState.corporateHQAddressCountry,
        corporateLocalBranchAddressState: prevState.corporateHQAddressState,
        corporateLocalBranchAddressCity: prevState.corporateHQAddressCity,
        corporateLocalBranchAddressDistrict: prevState.corporateHQAddressDistrict,
        corporateLocalBranchAddressZipCode: prevState.corporateHQAddressZipCode,
        corporateLocalBranchAddressPhone: prevState.corporateHQAddressPhone,
        corporateLocalBranchAddressEmail: prevState.corporateHQAddressEmail
      }));
    }
  };

  const saveProfile = () => {
    const updatedProfile = {
      ...profile,
      dateOfJoining: moment(profile.dateOfJoining),
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
    if (
      profile?.stakeholderID &&
      profile?.CIN &&
      profile?.corporateType &&
      profile?.corporateCategory &&
      profile?.corporateIndustry &&
      profile?.dateOfJoining &&
      profile?.corporateHQAddressLine1 &&
      profile?.corporateHQAddressCountry &&
      profile?.corporateHQAddressState &&
      profile?.corporateHQAddressCity &&
      profile?.corporateHQAddressDistrict &&
      profile?.corporateHQAddressZipCode &&
      profile?.corporateHQAddressPhone &&
      profile?.corporateHQAddressEmail &&
      isTermsAndConditionsChecked
    ) {
      return true;
    } else {
      return false;
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
            accept="image/*"
            className="upload-pic-inp"
          />
        </div>
      </div>
      <div className={'d-flex welcome-widget flex-row justify-content-end align-items-center'} style={{backgroundColor: 'transparent', border: 'none', padding: 0,}}>
        <div className={'date-of-joining-widget d-flex flex-column justify-content-center'}>
            <p className={'sub-label'}>Date of joining the Platform :</p>
            <p className={'label'}>{profileInfo?.dateOfJoining ? moment(profileInfo?.dateOfJoining).format('DD-MM-YYYY') : '-'}</p>
        </div>
      </div>
      <BasicForm profileData={profile} onChange={updateProfileData} />
      <AddressAndContactForm
        profileData={profile}
        onChange={updateProfileData}
        checkStatus={checkStatus}
        toggleCorporateHeadQuarters={toggleCorporateHeadQuarters}
      />
      <ProfileForm
        profileData={profile}
        onChange={updateProfileData}
        attachment={attachment}
        fileHandler={fileHandler}
      />
      <AccountSettingsForm profileData={profile} onChange={updateProfileData} />
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
        <button
          type="button"
          onClick={saveProfile}
          disabled={!isFormValid()}
          className="btn"
        >
          Save
        </button>
      </div>
      <CustomToastModal
        onClose={() => {
          setShowModal(false);
        }}
        show={showModal}
        iconNameClass={"fa-building"}
        message={"Your profile has been updated successfully"}
      />
    </div>
  );
};

export default Profile;

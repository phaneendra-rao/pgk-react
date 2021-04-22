import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import BasicForm from "./ProfileForm/BasicForm";
import AddressAndContactForm from "./ProfileForm/AddressAndContactForm";
import ProfileForm from "./ProfileForm/ProfileForm";
import AccountSettingsForm from "./ProfileForm/AccountSettingsForm";
import PasswordForm from "./ProfileForm/PasswordForm";

import { actionGetCorporateProfileSagaAction, actionPatchCorporateProfileSagaAction } from "../../../Store/Actions/SagaActions/CorporateProfileSagaActions";

const Profile = () => {
  const [profile, setProfile] = useState();
  const [checkStatus, setCheckStatus] = useState(false);
  const [profilePicture, setProfilePicture] = useState();
  const [attachment, setAttachment] = useState();
  const [
    isTermsAndConditionsChecked,
    setIsTermsAndConditionsChecked,
  ] = useState(false);

  const dispatch = useDispatch();

  const onGetCorporateProfileRequest = (response) => {
    setProfilePicture(response?.profilePicture);
    setAttachment(response?.attachment);

    setProfile({
      ...response,
      profilePicture: undefined,
      attachment: undefined
    });
  };

  const getProfile = () => {
    dispatch(
      actionGetCorporateProfileSagaAction({
        callback: onGetCorporateProfileRequest,
      })
    );
  }

  useEffect(() => {
    getProfile();
  }, []);

  const updateProfileData = (event) => {
    const { name, value } = event.target;

    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleChangeImg = (event) => {
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
        if(name==='profilePicture') {
          setProfilePicture(ev.target.result.split(",")[1]);
        } else if(name==='attachment') {
          setAttachment(ev.target.result.split(",")[1]);
        }
      }.bind(this);

      reader.readAsDataURL(event.target.files[i]);
    }
  };

  const toggleCorporateHeadQuarters = () => {
    setCheckStatus(!checkStatus);
  };

  const saveProfile = () => {
    const updatedProfile = {
      ...profile
    };

    if(updatedProfile?.attachment===undefined) {
      delete updatedProfile.attachment
    }

    if(updatedProfile?.profilePicture===undefined) {
      delete updatedProfile.profilePicture
    }

    dispatch(
      actionPatchCorporateProfileSagaAction({
        apiPayloadRequest: updatedProfile,
        callback: getProfile,
      })
    );
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
            onChange={handleChangeImg}
            id="profile"
            className="upload-pic-inp"
          />
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
        imageHandler={handleChangeImg}
      />
      <AccountSettingsForm profileData={profile} onChange={updateProfileData} />
      {/* <PasswordForm /> */}

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
        <button type="button" onClick={saveProfile} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;

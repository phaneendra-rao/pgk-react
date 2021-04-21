import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import BasicForm from "./ProfileForm/BasicForm";
import AddressAndContactForm from "./ProfileForm/AddressAndContactForm";
import ProfileForm from "./ProfileForm/ProfileForm";
import AccountSettingsForm from "./ProfileForm/AccountSettingsForm";
import PasswordForm from "./ProfileForm/PasswordForm";

import { actionGetCorporateProfileSagaAction } from '../../Store/Actions/SagaActions/CorporateProfileSagaActions';

const Profile = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(actionGetCorporateProfileSagaAction());
  }, [])


  return (
    <div className="main" style={{ marginTop: 0 }}>
      <h3 className="main-title">Corporate Profile</h3>
      <div className="profile-pic">
        <img
          src={"../../../images/logo.png"}
          className="profile-pic-img"
          alt="no img"
        />
        <div className="upload-pic">
          <label htmlFor="profile">
            Click to <br /> Change your <br /> Logo
          </label>
          <input
            type="file"
            name="profile"
            id="profile"
            className="upload-pic-inp"
          />
        </div>
      </div>
      <BasicForm />
      <AddressAndContactForm />
      <ProfileForm />
      <AccountSettingsForm />
      <PasswordForm />
      <div className="d-grp">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="accept"
            required
          />
          <label className="custom-control-label" for="accept">
            I hereby accept the Terms & Conditions of the Platform
          </label>
        </div>
      </div>

      <div className="w-100 text-center">
        <button type="submit" className="btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;

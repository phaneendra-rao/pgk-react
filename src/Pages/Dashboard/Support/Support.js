import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {
  PostSupportSagaAction
} from "../../../Store/Actions/SagaActions/SupportSagaAction";
import {
  actionGetCorporateProfileSagaAction,
} from "../../../Store/Actions/SagaActions/CorporateProfileSagaActions";
import { toast } from "react-toastify";

import PgkTextField from '../../../Components/FormFields/PgkTextField';

import {isEmailValid} from '../../../utils/utils';

const formFields = ['stakeholderID', 'contactPerson', 'contactEmail', 'contactPhone', 'queryOrIssue']

const Support = () => {
  const initialData = {
    stakeholderID: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true
    },
    contactPerson: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true
    },
    contactEmail: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true
    },
    contactPhone: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true
    },
    queryOrIssue: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false
    }
  };

  const profileInfo = useSelector(state => state.DashboardReducer.profileInfo);

  const [formData, setFormData] = useState({...initialData});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if(profileInfo?.stakeholderID) {
      setFormData((prevState)=>({
        ...prevState,
        stakeholderID: {
          ...prevState.stakeholderID,
          value: profileInfo.stakeholderID
        },
        contactPerson: {
          ...prevState.contactPerson,
          value: profileInfo.primaryContactFirstName.trim()+' '+profileInfo.primaryContactMiddleName.trim()+' '+profileInfo.primaryContactLastName
        },
        contactEmail: {
          ...prevState.contactEmail,
          value: profileInfo.primaryContactEmail
        },
        contactPhone: {
          ...prevState.contactPhone,
          value: parseInt(profileInfo.primaryContactPhone)
        }
      }));
    }
  }, [profileInfo]);

  const updateField = (name, value, errorMessage=undefined) => {
    let data = formData[name];
    data["value"] = value;
    data["errorMessage"] = errorMessage;

    setFormData((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const onSubmit = (response) => {
    setShowModal(true);
  }

  const handleSubmit = () => {

    const updatedFormData = {};

    formFields.forEach((item)=>{
      updatedFormData[item] = formData[item].value
    });

    console.log(updatedFormData);

    dispatch(
      PostSupportSagaAction({
        apiPayloadRequest: updatedFormData,
        callback: onSubmit,
      })
    );
  };

  const isFormValid = () => {
    let isValid = true;
    formFields.forEach((item)=>{
      if(isValid) {
        if(formData[item].isRequired && (formData[item].value===undefined || formData[item].value.toString().trim()==='' || formData[item].errorMessage!==undefined)) {
          isValid = false
        }
      }
    });

    return isValid;
  }

  return ( 
    <>
      <div className="main" style={{marginTop:30}}>
        <h3 className="main-title">Support</h3>
       
       {!showModal &&  <div className="gbl-profile-set other-info">
          <form>
            <p className="support-formtitle">
              Kindly write to us for any issue/query and we will try to contact you back at soonest
              possible
                </p>
            <div className="row">
              <div className="col-md">
                <div className="mb-20">
                  <PgkTextField
                    name="stakeholderID"
                    value={formData?.stakeholderID?.value}
                    errorMessage={formData?.stakeholderID?.errorMessage}
                    label={"Stakeholder ID"}
                    disabled={formData?.stakeholderID?.isDisabled}
                    required={formData?.stakeholderID?.isRequired}
                  />
                </div>
              </div>
              <div className="col-md">
                <div className="mb-20">
                  <PgkTextField
                    name="contactPerson"
                    value={formData?.contactPerson?.value}
                    errorMessage={formData?.contactPerson?.errorMessage}
                    label={"Name of the contact person"}
                    onChange={updateField}
                    disabled={formData?.contactPerson?.isDisabled}
                    required={formData?.contactPerson?.isRequired}
                  />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md">
                <div className="mb-20">
                  <PgkTextField
                    name="contactEmail"
                    value={formData?.contactEmail?.value}
                    errorMessage={formData?.contactEmail?.errorMessage}
                    label={"Email ID"}
                    onChange={updateField}
                    validations={['isEmail']}
                    disabled={formData?.contactEmail?.isDisabled}
                    required={formData?.contactEmail?.isRequired}
                  />
                </div>
              </div>
              <div className="col-md">
                <div className="mb-20">
                  <PgkTextField
                    name="contactPhone"
                    value={formData?.contactPhone?.value}
                    errorMessage={formData?.contactPhone?.errorMessage}
                    label={"Phone Number"}
                    onChange={updateField}
                    validations={['isNumeric', 'minLength_10', 'maxLength_10']}
                    disabled={formData?.contactPhone?.isDisabled}
                    required={formData?.contactPhone?.isRequired}
                  />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md">
                <div className="mb-20">
                  <PgkTextField
                    name="queryOrIssue"
                    value={formData?.queryOrIssue?.value}
                    label={"Your issue/query in brief"}
                    required={formData?.queryOrIssue?.isRequired}
                    disabled={formData?.queryOrIssue?.isDisabled}
                    errorMessage={formData?.queryOrIssue?.errorMessage}
                    onChange={updateField}
                    multiline={true}
                    minRows={6}
                  />
                </div>
              </div>
            </div>

            <div className="w-100 text-center mt-4">
              <button type="button" disabled={!isFormValid()} onClick={handleSubmit} className="btn">Send</button>
            </div>
          </form>
        </div>}

        {showModal && <div className="gbl-profile-set other-info">
            <div className="d-flex align-items-center justify-content-center flex-column" style={{minHeight: 400}}>
                <div className="modal-icon btn-blue" style={{ backgroundColor: "#004FD0" }}>
                    <i className="fas fa-check text-white"></i>
                </div>
                <p className="support-formtitle" style={{color:'black'}}>
                    Your message has been sent successfully.
                    <br />
                    We will try to contact you back at soonest possible
                </p>
            </div>
        </div>}
      </div>
    </>
  )
}

export default Support

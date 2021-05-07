import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux';
import {
  PostSupportSagaAction
} from "../../../Store/Actions/SagaActions/SupportSagaAction";
import {
  actionGetCorporateProfileSagaAction,
} from "../../../Store/Actions/SagaActions/CorporateProfileSagaActions";
import { toast } from "react-toastify";

import {isEmailValid} from '../../../utils/utils';

const initialData = {
  stakeholderId:"",
  contactPerson:"",
  contactEmail:"",
  contactPhone:"",
  queryOrIssue:""
}
const Support = () => {
  const [formData, setFormData] = useState({...initialData});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const getProfile = () => {
    dispatch(
      actionGetCorporateProfileSagaAction({
        callback: (response)=> {
          setFormData({
            ...initialData,
            stakeholderId: response?.stakeholderID
          })
        },
      })
    );
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = (response) => {
    console.log('response ', response);

    setShowModal(true);
  }

  const handleSubmit = () => {
    const errors = [];
    if(formData.contactPerson.trim()==='') {
      errors.push('Please enter name..');
    }

    if(formData.contactEmail.trim()==='' || !isEmailValid(formData.contactEmail)) {
      errors.push('Invalid Email');
    }

    if(formData.contactPhone.trim()==='' || formData.contactPhone.length<10) {
      errors.push('Invalid Contact Number');
    }

    if(formData.queryOrIssue.trim()==='') {
      errors.push('Please enter query..');
    }

    if(errors.length) {
      errors.forEach((error)=>{
        toast.error(error);
      })
    } else {
      dispatch(
        PostSupportSagaAction({
          apiPayloadRequest: formData,
          callback: onSubmit,
        })
      );
    }
  };


  return ( 
    <>
      <div className="main" style={{marginTop:30}}>
        <h3 className="main-title">Support</h3>
       
       {!showModal &&  <div className="gbl-profile-set other-info">
          <form onSubmit={handleSubmit} onReset={getProfile}>
            <p className="support-formtitle">
              Kindly write to us for any issue/query and we will try to contact you back at soonest
              possible
                </p>
            <div className="row">
              <div className="col-md">
                <div className="d-grp">
                  <input type="text" name="stakeholderId" className="d-inp" value={formData.stakeholderId} placeholder="Stakeholder ID"  readOnly/>
                </div>
              </div>
              <div className="col-md">
                <div className="d-grp">
                  <input type="text" name="contactPerson" className="d-inp" placeholder="Name of the Contact Person"
                    onChange={handleChange} value={formData.contactPerson} />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md">
                <div className="d-grp">
                  <input type="text" name="contactEmail" className="d-inp" placeholder="Email ID" onChange={handleChange} value={formData.contactEmail} />
                </div>
              </div>
              <div className="col-md">
                <div className="d-grp">
                  <input type="number" min={0} name="contactPhone" className="d-inp" placeholder="Phone Number" onChange={handleChange} value={formData.contactPhone} />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md">
                <div className="d-grp">
                  <textarea name="queryOrIssue" rows="6" className="d-inp d-textarea"
                    placeholder="Your issue/query in brief" onChange={handleChange} value={formData.queryOrIssue}></textarea>
                </div>
              </div>
            </div>

            <div className="w-100 text-center mt-4">
              <button type="button" onClick={handleSubmit} className="btn">Send</button>
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

import React, { useState, useEffect } from 'react'

import {
  PostSupportSagaAction
} from "../../../Store/Actions/SagaActions/SupportSagaAction";


const Support = () => {

  const [formData, setFormData] = useState({})

  useEffect(() => { }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if(name === "contactEmail"){

    }

    if(name === "contactPhoneNumber"){
      
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => { };

  return (
    <>
      <div class="main">
        <h3 class="main-title">Support</h3>

        <div class="gbl-profile-set other-info">
          <form onSubmit={handleSubmit}>
            <p class="support-formtitle">
              Kindly write to us for any issue/query and we will try to contact you back at soonest
              possible
                </p>
            <div class="row">
              <div class="col-md">
                <div class="d-grp">
                  <input type="text" name="stakeholderId" class="d-inp" placeholder="Stakeholder ID" onChange={handleChange} required />
                </div>
              </div>
              <div class="col-md">
                <div class="d-grp">
                  <input type="text" name="contactName" class="d-inp" placeholder="Name of the Contact Person"
                    onChange={handleChange} value={formData.contactName} required />
                </div>
              </div>
              <div class="w-100"></div>
              <div class="col-md">
                <div class="d-grp">
                  <input type="text" name="contactEmail" class="d-inp" placeholder="Email ID" onChange={handleChange} value={formData.contactName} required />
                </div>
              </div>
              <div class="col-md">
                <div class="d-grp">
                  <input type="tel" name="contactPhoneNumber" class="d-inp" placeholder="Phone Number" onChange={handleChange} value={formData.contactName} required />
                </div>
              </div>
              <div class="w-100"></div>
              <div class="col-md">
                <div class="d-grp">
                  <textarea name="" rows="6" class="d-inp d-textarea"
                    placeholder="Your issue/query in brief" onChange={handleChange} value={formData.contactName} required></textarea>
                </div>
              </div>
            </div>

            <div class="w-100 text-center mt-4">
              {/* <button type="reset" class="btn">Reset</button>  */}
              <button type="submit" class="btn">Send</button>
            </div>
          </form>
        </div>


        {/* <div class="gbl-profile-set other-info">
            <div class="d-flex align-items-center justify-content-center flex-column">
                <div class="modal-icon btn-blue">
                    <i class="fas fa-check text-white"></i>
                </div>
                <p class="support-formtitle">
                    Your message has been sent successfully.
                    <br />
                    We will try to contact you back at soonest possible
                </p>
            </div>
        </div>
         */}

      </div>

    </>
  )
}

export default Support

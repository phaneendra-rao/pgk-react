import React from "react";

const ProfileFormItem = (props) => {
  return (
    <div className="profile-box" style={{marginBottom:0}}>
      <aside className="profile-side" style={{borderRadius:0}}>
        <h3 className="profile-side-title">Profile</h3>
      </aside>
      <div className="profile-data">
        <div className="row">
          <div className="col-md">
            <div className="d-grp">
              <textarea
                name="companyProfile"
                value={
                  props?.profileData?.companyProfile
                    ? props?.profileData?.companyProfile
                    : ""
                }
                rows="6"
                className="d-inp d-textarea"
                placeholder="Write in brief about the company"
                readOnly
              ></textarea>
            </div>
            <div className="row d-flex justify-content-center align-items-center" style={{margin:0, padding:0}}>
              <div className="col-md-12" style={{margin:0, padding:0}}>
                <div className="d-attach">
                  <p className="float-left"></p>
                  <input
                    type="file"
                    className="d-inp"
                    name="attachment"
                    id="attachment"
                    readOnly
                  />
                  <label htmlFor="attachment" className="d-label">
                    {" "}
                    <i className="fas fa-paperclip mr-2"></i> Attachment
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFormItem;

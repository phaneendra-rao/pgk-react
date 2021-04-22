import React from "react";

const ProfileForm = (props) => {
  return (
    <div className="profile-box">
      <aside className="profile-side">
        <h3 className="profile-side-title">Profile</h3>
      </aside>
      <div className="profile-data">
        <div className="row">
          <div className="col-md">
            <div className="d-grp">
              <textarea
                name="companyProfile"
                onChange={props?.onChange}
                value={
                  props?.profileData?.companyProfile
                    ? props?.profileData?.companyProfile
                    : ""
                }
                rows="6"
                className="d-inp d-textarea"
                placeholder="Write in brief about the company"
              ></textarea>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-3">
                <img
                  src={
                    props?.attachment
                      ? "data:image/png;base64," + props?.attachment
                      : "../../../../images/logo.png"
                  }
                  className="img img-fluid img-thumbnail"
                  style={{maxHeight:'200px', width: '100%'}}
                />
              </div>
              <div className="col-md-9">
                <div className="d-attach">
                  <p className="float-left"></p>
                  <input
                    type="file"
                    onChange={props?.imageHandler}
                    className="d-inp"
                    name="attachment"
                    id="attachment"
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

export default ProfileForm;

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
            {props?.check && <div className="custom-control custom-checkbox publish-inp">
                <input
                  type="checkbox"
                  name="companyProfile"
                  id="check-companyProfile"
                  className="custom-control-input"
                  onChange={(e)=>{props?.handleCheckData(e.target.name, !props?.checkData?.companyProfile)}}
                  checked={props?.checkData?.companyProfile ? true : false}
                />
                <label
                  className="custom-control-label"
                  htmlFor={"check-companyProfile"}
                ></label>
              </div>}
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
                disabled={props?.disable ? true : false}
                placeholder="Write in brief about the company"
              ></textarea>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-md-12">
                <div className="d-attach">
                  <p className="float-left"></p>
                  <input
                    type="file"
                    onChange={props?.imageHandler}
                    className="d-inp"
                    name="attachment"
                    disabled={props?.disable ? true : false}
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

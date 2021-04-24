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
                placeholder="Write in brief about the company"
                disabled={props?.disable ? true : false}
              ></textarea>
            </div>
            <div className="row d-flex justify-content-start align-items-center w-full">
              <div className="col-md-12 w-full">
              {props?.check && <div className="custom-control custom-checkbox publish-inp">
                  <input
                    type="checkbox"
                    name="attachment"
                    id="check-attachment"
                    className="custom-control-input"
                    onChange={(e)=>{props?.handleCheckData(e.target.name, !props?.checkData?.attachment)}}
                    checked={props?.checkData?.attachment ? true : false}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={"check-attachment"}
                  ></label>
                </div>}
                {!props?.check && 
                <div className="d-attach w-full">
                  <p className="float-left mt-2 ml-2">{props?.profileData?.attachment?.name}</p>
                  <input
                    type="file"
                    onChange={props?.imageHandler}
                    className="d-inp"
                    name="attachment"
                    accept=".pdf"
                    id="attachment"
                  />
                  <label htmlFor="attachment" className="d-label">
                    {" "}
                    <i className="fas fa-paperclip mr-2"></i> Attachment
                  </label>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;

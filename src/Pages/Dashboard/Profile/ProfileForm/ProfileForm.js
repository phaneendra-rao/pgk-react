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
                readOnly={props?.disable!==undefined ? props?.disable : false}
              ></textarea>
              <label className="inp-caption">{`Write in brief about the company `}<sup>*</sup></label>
            </div>
            <div className="row d-flex justify-content-center align-items-center" style={{margin:0, padding:0}}>
              <div className="col-md-11" style={{margin:0, padding:0}}>
                <div className="d-attach">
                  <p className="float-left" style={{padding: '8px'}}>{props?.tempAttachment?.attachmentName}</p>
                  <input
                    type="file"
                    onChange={props?.fileHandler}
                    className="d-inp"
                    name="attachment"
                    disabled={props?.disable ? true : false}
                    id="attachment"
                  />
                  <label htmlFor="attachment" className="d-label">
                    {" "}
                    <i className="fas fa-paperclip mr-2"></i> Attachment
                  </label>
                  {/* <i className="fas fa-download mr-2"></i> Download */}
                </div>
              </div>
              
                <div className="col-md-1" style={{margin:0, padding:0}}>
                <div className="d-attach">
                {props?.tempAttachment?.attachment?.trim()!=='' ? <a href={'data:application/pdf;base64,'+props?.tempAttachment?.attachment} target="blank" style={{textDecoration:'none', outline:'none', width: '100%', cursor:'pointer'}}> <label style={{backgroundColor: '#878BA6', width: '100%', height: '100%', paddingTop: '10px', color: 'white', textAlign: 'center'}}>
                    <i className="fas fa-download mr-2"></i>
                  </label></a> : null}
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

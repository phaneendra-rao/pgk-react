import React from "react";
import PgkTextField from "../../../../../Components/FormFields/PgkTextField";

const ProfileFormItem = (props) => {
  return (
    <div className="profile-box" style={{marginBottom:0}}>
      <aside className="profile-side" style={{borderRadius:0}}>
        <h3 className="profile-side-title">Profile</h3>
      </aside>
      <div className="profile-data">
        <div className="row">
          <div className="col-md">
            <div className="mb-20">
              <PgkTextField
                name="companyProfile"
                value={
                  props?.profileData?.companyProfile
                    ? props?.profileData?.companyProfile
                    : ""
                }
                label={"Write in brief about the company"}
                disabled
                multiline={true}
                minRows={6}
              />
            </div>
           {props?.profileData?.attachment ? <div className="row d-flex justify-content-center align-items-center" style={{margin:0, padding:0}}>
                <div className={`col-md-${props?.profileData?.attachment ? '11' : '12'}`} style={{margin:0, padding:0}}>
                  <div className="d-attach">
                  {props?.profileData?.attachmentName ? <div className={'d-flex justify-content-between align-items-center'} style={{width:'84%'}}>
                      <p className="float-left" style={{padding: '8px', fontSize: '.800rem', flex: '1'}}>{props?.profileData?.attachmentName}</p>
                  </div> : null}
                    <label htmlFor="attachment" className="d-label">
                      {" "}
                      <i className="fas fa-paperclip mr-2"></i> Attachment
                    </label>
                  </div>
                </div>
              
                {props?.profileData?.attachment && <div className="col-md-1" style={{margin:0, padding:0}}>
                  <div className="d-attach" style={{cursor: 'pointer'}}>
                  {props?.profileData?.attachment?.trim()!=='' ? <a href={'data:application/pdf;base64,'+props?.profileData?.attachment} style={{textDecoration:'none', outline:'none', width: '100%', cursor:'pointer'}} download> <label style={{backgroundColor: '#878BA6', width: '100%', height: '100%', paddingTop: '10px', color: 'white', textAlign: 'center', cursor: 'pointer'}} >
                      <i className="fas fa-download mr-2"></i>
                    </label></a> : null}
                  </div>
                </div>}
            </div> : null} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileFormItem;

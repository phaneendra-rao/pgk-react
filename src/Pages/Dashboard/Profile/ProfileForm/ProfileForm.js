import React from "react";
import PgkTextField from "../../../../Components/FormFields/PgkTextField";
import Checkbox from '@material-ui/core/Checkbox';

const ProfileForm = (props) => {
  return (
    <div className="profile-box">
      <aside className="profile-side">
        <h3 className="profile-side-title">Profile</h3>
      </aside>
      <div className="profile-data">
        <div className="row">
          <div className="col-md">
            <div className="mb-20 d-flex align-items-start">
              {props?.check && <Checkbox disableRipple size={'small'} color={'primary'} name={'companyProfile'} checked={props?.checkData?.companyProfile ? true : false} onChange={(e)=>{
                  props?.handleCheckData(
                    e.target.name,
                    !props?.checkData?.companyProfile
                  );
              }} />}
              <PgkTextField
                name="companyProfile"
                value={
                  props?.profileData?.companyProfile?.value
                    ? props?.profileData?.companyProfile?.value
                    : ""
                }
                label={"Write in brief about the company"}
                required={props?.profileData?.companyProfile?.isRequired}
                disabled={props?.disable!==undefined ? props?.disable : false}
                errorMessage={props?.profileData?.companyProfile?.errorMessage}
                onChange={props?.onChange}
                multiline={true}
                minRows={6}
              />
            </div>
            <div className="row d-flex justify-content-center align-items-center" style={{margin:0, padding:0}}>
              <div className={`col-md-${props?.tempAttachment?.attachment ? '11' : '12'}`} style={{margin:0, padding:0}}>
                <div className="d-attach">
                {props?.tempAttachment?.attachmentName ? <div className={'d-flex justify-content-between align-items-center'} style={{width:'84%'}}>
                    <p className="float-left" style={{padding: '8px', fontSize: '.800rem', flex: '1'}}>{props?.tempAttachment?.attachmentName}</p>
                </div> : null}
                  <input
                    type="file"
                    onChange={props?.fileHandler}
                    className="d-inp d-none"
                    name="attachment"
                    accept=".pdf"
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
              
                {props?.tempAttachment?.attachment && <div className="col-md-1" style={{margin:0, padding:0}}>
                  <div className="d-attach" style={{cursor: 'pointer'}}>
                  {props?.tempAttachment?.attachment?.trim()!=='' ? <a href={'data:application/pdf;base64,'+props?.tempAttachment?.attachment} style={{textDecoration:'none', outline:'none', width: '100%', cursor:'pointer'}} download> <label style={{backgroundColor: '#878BA6', width: '100%', height: '100%', paddingTop: '10px', color: 'white', textAlign: 'center', cursor: 'pointer'}} >
                      <i className="fas fa-download mr-2"></i>
                    </label></a> : null}
                  </div>
                </div>}
            </div>
            {props?.tempAttachment?.attachmentError ? <p style={{color:'red', fontSize: '.800rem', marginTop:'-15px'}}>{props?.tempAttachment?.attachmentError}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;

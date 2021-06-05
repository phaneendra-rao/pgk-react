import React from 'react';

const AccountSettingsForm = (props) => {
    return (
        <div className="profile-box">
                        <aside className="profile-side">
                            <h3 className="profile-side-title">Account Settings</h3>
                        </aside>
                        <div className="profile-data">
                            <div className="row">
                                <div className="col-md-12">
                                    <h6 className="d-profile-name">Primary Contact</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="text" name="primaryContactFirstName" onChange={props?.onChange} value={props?.profileData?.primaryContactFirstName ? props?.profileData?.primaryContactFirstName : ''} readOnly={props?.disable!==undefined ? props?.disable : false} className="d-inp" 
                                            required />
                                        <label className="inp-caption">{`First Name`}</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="text" name="primaryContactMiddleName" onChange={props?.onChange} value={props?.profileData?.primaryContactMiddleName ? props?.profileData?.primaryContactMiddleName : ''} readOnly={props?.disable!==undefined ? props?.disable : false} className="d-inp"
                                            required />
                                        <label className="inp-caption">{`Middle Name`}</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="text" name="primaryContactLastName" onChange={props?.onChange} value={props?.profileData?.primaryContactLastName ? props?.profileData?.primaryContactLastName : ''} readOnly={props?.disable!==undefined ? props?.disable : false} className="d-inp" required />
                                        <label className="inp-caption">{`Last Name`}</label>
                                    </div>
                                </div>
                                <div className="w-100"></div>

                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="text" name="primaryContactDesignation" onChange={props?.onChange} value={props?.profileData?.primaryContactDesignation ? props?.profileData?.primaryContactDesignation : ''} readOnly={props?.disable!==undefined ? props?.disable : false} className="d-inp" 
                                            required />
                                        <label className="inp-caption">{`Designation`}</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="text" name="primaryContactPhone" maxLength={12} minLength={12} onChange={props?.onChange} value={props?.profileData?.primaryContactPhone ? parseInt(props?.profileData?.primaryContactPhone) : ''} readOnly={props?.disable!==undefined ? props?.disable : false} className="d-inp input-number"
                                            required />
                                        <label className="inp-caption">{`Mobile Number`}</label>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="email" name="primaryContactEmail" onChange={props?.onChange} value={props?.profileData?.primaryContactEmail ? props?.profileData?.primaryContactEmail : ''} readOnly={props?.disable!==undefined ? props?.disable : false} className="d-inp" required />
                                        <label className="inp-caption">{`Email`}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}

export default AccountSettingsForm;
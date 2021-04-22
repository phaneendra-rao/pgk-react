import React from 'react';

const AccountSettingsForm = (props) => {
    return (
        <div className="profile-box">
                        <aside className="profile-side">
                            <h3 className="profile-side-title">Account Settings</h3>
                        </aside>
                        <div className="profile-data">
                            <h6 className="d-profile-name">Primary Contact</h6>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="text" name="primaryContactFirstName" onChange={props?.onChange} value={props?.profileData?.primaryContactFirstName ? props?.profileData?.primaryContactFirstName : ''} className="d-inp" placeholder="First Name" 
                                            required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="text" name="primaryContactMiddleName" onChange={props?.onChange} value={props?.profileData?.primaryContactMiddleName ? props?.profileData?.primaryContactMiddleName : ''} className="d-inp" placeholder="Middle Name"
                                            required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="text" name="primaryContactLastName" onChange={props?.onChange} value={props?.profileData?.primaryContactLastName ? props?.profileData?.primaryContactLastName : ''} className="d-inp" placeholder="Last Name" required />
                                    </div>
                                </div>
                                <div className="w-100"></div>

                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="text" name="primaryContactDesignation" onChange={props?.onChange} value={props?.profileData?.primaryContactDesignation ? props?.profileData?.primaryContactDesignation : ''} className="d-inp" placeholder="Designation" 
                                            required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="number" name="primaryContactPhone" onChange={props?.onChange} value={props?.profileData?.primaryContactPhone ? parseInt(props?.profileData?.primaryContactPhone) : ''} className="d-inp" placeholder="Phone Number"
                                            required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="email" name="primaryContactEmail" onChange={props?.onChange} value={props?.profileData?.primaryContactEmail ? props?.profileData?.primaryContactEmail : ''} className="d-inp" placeholder="Email" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}

export default AccountSettingsForm;
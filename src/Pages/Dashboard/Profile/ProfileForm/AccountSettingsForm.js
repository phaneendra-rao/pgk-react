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
                                        <input type="text" name="addr" className="d-inp" placeholder="First Name" autoFocus
                                            required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="text" name="addr" className="d-inp" placeholder="Middle Name"
                                            required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="text" name="addr" className="d-inp" placeholder="Last Name" required />
                                    </div>
                                </div>
                                <div className="w-100"></div>

                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="text" name="addr" className="d-inp" placeholder="Designation" autoFocus
                                            required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="number" name="addr" className="d-inp" placeholder="Phone Number"
                                            required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="email" name="addr" className="d-inp" placeholder="Email" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}

export default AccountSettingsForm;
import React from 'react';

const PasswordForm = () => {
    return (
        <div className="profile-box">
                        <aside className="profile-side">
                            <h3 className="profile-side-title">Password</h3>
                        </aside>
                        <div className="profile-data">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="password" name="addr" className="d-inp"
                                            placeholder="Choose your login password (Min 8 digits)" 
                                            required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="password" name="addr" className="d-inp"
                                            placeholder="Repeat the password" required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-grp">
                                        <input type="password" name="addr" className="d-inp"
                                            placeholder="Repeat the password" required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}

export default PasswordForm;
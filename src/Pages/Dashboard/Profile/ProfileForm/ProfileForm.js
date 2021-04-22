import React from 'react';

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
                        <textarea name="" rows="6" className="d-inp d-textarea"
                            placeholder="Write in brief about the company" required></textarea>
                    </div>
                    <div className="d-attach">
                        <input type="file" className="d-inp" name="attachment" id="attachment" />
                        <label htmlFor="attachment" className="d-label"> <i className="fas fa-paperclip mr-2"></i> Attachment</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProfileForm;
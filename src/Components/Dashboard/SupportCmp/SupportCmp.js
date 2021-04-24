import React from 'react'

function SupportCmp() {
    return (
        <div>
            <div className="main-container">
                <div className="topbar" style={{ zIndex: 1 }}>
                    <p className="date">Wednesday, 10th Febraury 2021</p>
                    <div className="input-group search">
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-search" /></span>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle points-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="0,10">
                            <p className="btn-label">
                                Credits
        </p>
                            <span className="p-icon-container">
                                <p className="p-icon">P</p>
                            </span>
                            <p className="points">162</p>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="points-container">
                                <div className="credits-container">
                                    <p className="label-head">PGK CREDITS</p>
                                    <div className="credits-body">
                                        <p className="credits-head">Available Balance</p>
                                        <div className="credits-points">
                                            <div className="credit-points-icon">
                                                <p className="points-icon">P</p>
                                            </div>
                                            <p className="credits-points-label">162</p>
                                        </div>
                                        <table className="credits-table">
                                            <tbody>
                                                <tr className="t-row">
                                                    <td className="t-label">Bonus Credits</td>
                                                    <td className="t-value">50</td>
                                                </tr>
                                                <tr className="t-row">
                                                    <td className="t-label">Purchased Credits</td>
                                                    <td className="t-value">112</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="add-credits-container" data-toggle="modal" data-target="#exampleModalCenter">
                                    <i className="fas fa-plus-circle" />
                                    <p className="label">Add Credits</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-avatar-container">
                        <p className="profile-name">Shalmali</p>
                        <div className="profile-avatar">
                            <i className="fas fa-user" />
                        </div>
                    </div>
                </div>
                <div className="main">
                    <h3 className="main-title">Support</h3>
                    <div className="gbl-profile-set other-info">
                        <form>
                            <p className="support-formtitle">
                                Kindly write to us for any issue/query and we will try to contact you back at soonest
                                possible
        </p>
                            <div className="row">
                                <div className="col-md">
                                    <div className="d-grp">
                                        <input type="text" name className="d-inp" placeholder="Stakeholder ID" required />
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="d-grp">
                                        <input type="text" name className="d-inp" placeholder="Name of the Contact Person" required />
                                    </div>
                                </div>
                                <div className="w-100" />
                                <div className="col-md">
                                    <div className="d-grp">
                                        <input type="text" name className="d-inp" placeholder="Email ID" required />
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="d-grp">
                                        <input type="tel" name className="d-inp" placeholder="Phone Number" required />
                                    </div>
                                </div>
                                <div className="w-100" />
                                <div className="col-md">
                                    <div className="d-grp">
                                        <textarea name rows={6} className="d-inp d-textarea" placeholder="Your issue/query in brief" required defaultValue={""} />
                                    </div>
                                </div>
                            </div>
                            <div className="w-100 text-center mt-4">
                                {/* <button type="reset" class="btn">Reset</button> */}
                                <button type="submit" className="btn">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="gbl-profile-set other-info">
                        <div className="d-flex align-items-center justify-content-center flex-column">
                            <div className="modal-icon btn-blue">
                                <i className="fas fa-check text-white" />
                            </div>
                            <p className="support-formtitle">
                                Your message has been sent successfully.
          <br />
          We will try to contact you back at soonest possible
        </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SupportCmp;

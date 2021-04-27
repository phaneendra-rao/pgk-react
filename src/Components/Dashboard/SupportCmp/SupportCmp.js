import React from 'react'

function SupportCmp() {
    return (

        <div className="main mt-0">
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
    )
}

export default SupportCmp;

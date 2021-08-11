import React from 'react';

const RegistrationCompletedCmp = ({ history, data }) => {
    return (
        <form className="login-form reg-form">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="reg-header justify-content-center">Your Registration is Complete !</div>
                    <div className="row justify-content-center reg-center">
                        <div className="col-md-10">
                            <h6 className="reg-label text-center">Your Corporate ID is</h6>
                            <div className="login-grp text-center mb-1">
                                <input type="text" name="addr" className="login-inp reg-inp2" value={data} readOnly placeholder="Address (Line 1)" required />
                            </div>
                            <p className="reg-inp-info">
                                Preserve this Corporate ID for all your future references
                            </p>
                            <div className="reg-like">
                                <i className="far fa-thumbs-up" />
                            </div>
                            <p className="reg-para">
                                A detailed welcome mail has been sent to your primary email. You have to pay
                                the registration fee in order to access full Dashboard features. You can
                                chose to pay now or pay later at your convenience
                            </p>
                            <div className="reg-payment-btns">
                                <button type="button" onClick={() => { history.push('/') }} className="reg-payment-btn">
                                    <span><i className="fas fa-rupee-sign" /></span> Pay the fee now
                                </button>
                                <button type="button" onClick={() => { history.push('/') }} className="reg-payment-btn">
                                    Proceed lo Login page <span><i className="far fa-user" /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )
}

export default RegistrationCompletedCmp;

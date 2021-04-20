import React from 'react';

const StudentPaymentCmp = () => {
    return (
        <div className="reg-payment">
            <h2 className="reg-payment-title">Choose the Payment mode</h2>
            <div className="row">
                <div className="col-md-7">
                    <ul className="nav nav-pills nav-justified" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="Credit-tab" data-toggle="pill" href="#Credit" role="tab" aria-controls="Credit" aria-selected="true"><i className="far fa-credit-card" /> Credit/Debit Card</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="Net-tab" data-toggle="pill" href="#Net" role="tab" aria-controls="Net" aria-selected="false"><i className="fas fa-university" /> Net Banking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="UPI-tab" data-toggle="pill" href="#UPI" role="tab" aria-controls="UPI" aria-selected="false">UPI/Wallets</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="Credit" role="tabpanel" aria-labelledby="Credit-tab">
                            <form className="login-form reg-form">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="login-grp">
                                            <input type="number" name="card" className="login-inp card-inp" placeholder="Credit Card Number" autofocus required />
                                            <span className="inp-icon"><i className="far fa-credit-card" /></span>
                                        </div>
                                        <div className="login-grp">
                                            <input type="text" name="name" className="login-inp" placeholder="Name of the Card Holder" required />
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 pr-1">
                                                <div className="login-grp">
                                                    <input type="number" name="addr" className="login-inp" placeholder="Expiry Month" required />
                                                </div>
                                            </div>
                                            <div className="col-md-4 px-1">
                                                <div className="login-grp">
                                                    <input type="number" name="addr" className="login-inp" placeholder="Expiry Year" required />
                                                </div>
                                            </div>
                                            <div className="col-md-4 pl-1">
                                                <div className="login-grp">
                                                    <input type="number" name="addr" className="login-inp" placeholder="CVV" required />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="reg-payment-btns reg-payment-btns2">
                                    <button type="button" className="reg-payment-btn"><i className="fas fa-times-circle" /> Cancel Payment</button>
                                    <button type="submit" className="reg-payment-btn"><i className="fas fa-check-circle" /> Make Payment</button>
                                </div>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="Net" role="tabpanel" aria-labelledby="Net-tab">
                            coming soon...
        </div>
                        <div className="tab-pane fade" id="UPI" role="tabpanel" aria-labelledby="UPI-tab">
                            coming soon...
        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="payment-summary">
                        <h5 className="payment-summary-header">Fee Summary</h5>
                        <ul className="payment-data">
                            <li className="payment-data-li">
                                <p className="payment-data-name">Registration Fee</p>
                                <span>`999</span>
                            </li>
                            <li className="payment-data-li">
                                <p className="payment-data-name">GST (18%) <span>rounded</span></p>
                                <span>`999</span>
                            </li>
                            <li className="payment-data-li">
                                <p className="payment-data-name">Total</p>
                                <span>`1178</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default StudentPaymentCmp;

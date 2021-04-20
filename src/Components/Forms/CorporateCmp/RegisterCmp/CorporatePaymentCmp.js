import React from 'react';

const CorporatePaymentCmp = ({paymentData, errors, handlerChange, handleSubmit }) => {
    const { emailErr, nameErr, mobileErr, amtErr } = errors;
    return (
        <form className="login-form reg-form" onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-12">
                    <div className="login-grp">
                        <input
                            type="text"
                            name="name"
                            onChange={handlerChange}
                            className={`login-inp${nameErr ? ' login-inp-error' : ''}`}
                            placeholder="Name"
                            autoFocus
                            required={true} />
                        {nameErr ? <p className="inp-errors">{nameErr}</p> : null}
                    </div>
                    <div className="login-grp">
                        <input
                            type="tel"
                            name="contact"
                            onChange={handlerChange}
                            className={`login-inp${mobileErr ? ' login-inp-error' : ''}`}
                            placeholder="Phone Number"
                            required={true} />
                        {mobileErr ? <p className="inp-errors">{mobileErr}</p> : null}
                    </div>
                    <div className="login-grp">
                        <input
                            type="email"
                            name="email"
                            onChange={handlerChange}
                            className={`login-inp${emailErr ? ' login-inp-error' : ''}`}
                            placeholder="Email"
                            required={true} />
                        {emailErr ? <p className="inp-errors">{emailErr}</p> : null}
                    </div>
                    <div className="login-grp">
                        <input
                            type="number"
                            name="amount"
                            onChange={handlerChange}
                            className={`login-inp${amtErr ? ' login-inp-error' : ''}`}
                            defaultValue={paymentData.amount}
                            placeholder="Amount"
                            required={true} />
                        {amtErr ? <p className="inp-errors">{amtErr}</p> : null}
                    </div>
                    {/* <div className="login-grp">
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
                    </div> */}
                </div>
            </div>
            <div className="reg-payment-btns reg-payment-btns2">
                <button type="reset" className="reg-payment-btn"><i className="fas fa-times-circle" /> Cancel Payment</button>
                <button type="submit" className="reg-payment-btn"><i className="fas fa-check-circle" /> Make Payment</button>
            </div>
        </form>
    )
}

export default CorporatePaymentCmp;

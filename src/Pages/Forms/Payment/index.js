import React from 'react'
import CorporatePayment from '../Corporate/Register/CorporatePayment'

const index = () => {
    return (
        <section className="login">
            <div className="row m-0">
                <div className="col-md-4 p-0 bg-red">
                    <div className="login-box">
                        <img src="images/corporate/login-img.png" alt="login-img" className="login-img1" />
                        <h2 className="login-heading">PGK.</h2>
                        <h3 className="login-subheading">for the perfect <br /> recruitment solutions</h3>
                        <img src="images/corporate/login-img1.png" alt="login-img" className="login-img2" />
                        {/* <img src="images/corporate/login-img1.png" alt="login-img" className="login-img2" /> */}
                    </div>
                </div>
                <div className="col-md-8 p-0">
                    <div className="login-box login-box1">
                        <img src="images/corporate/login-img2.png" alt="login-img" className="login-img1 login-img3" />
                        <h4 className="login-title">Fee <span>Payment</span></h4>
                        <div className="line" />
                        <CorporatePayment />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default index;

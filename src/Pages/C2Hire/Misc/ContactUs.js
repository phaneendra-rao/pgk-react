import React from "react";
import Map from "../Components/Map";
import { ADDRESS, C2HIRE_EMAIL, CONTACT_LOCATION } from "../constants";

function ContactUs() {
  return (
    <section className="c2hirePage-body policy-terms contact-Us">
      <img
        className="landing-bg-img2"
        src="../../../images/c2hire/img/Group 591.png"
        alt=""
        height="240px"
        width="230px"
      />

      <div className="container">
        <img
          className="landing-bg-img1"
          src="../../../images/c2hire/img/ellipseSquare.svg"
          height="180px"
          width="180px"
          alt=""
        />
        <div className="policy-heading ">
          <h1>Contact Us</h1>
        </div>
        <div className="row info-container">
          <div className="col-lg-6 col-sm-12 left-highlight">
            <div>
              <h5 className="text">Let's connect</h5>
              <p className="display">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta…
              </p>
              <div className="contact-info">
                <div className="circle">
                  <img src="../../../images/c2hire/icon/email.svg" alt="" />
                </div>
                <p>
                  <a
                    style={{ color: "white" }}
                    href="mailto:contact@c2hire.com"
                  >
                    {C2HIRE_EMAIL}
                  </a>
                </p>
              </div>
              <div className="contact-info">
                <div className="circle">
                  <img src="../../../images/c2hire/icon/location.svg" alt="" />
                </div>
                <p>
                  {ADDRESS}
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="sendMessageForm">
              <form className="send-form">
                <h3 className="heading">Send us a message</h3>
                <div className="row form-group">
                  <div className="col-12 input-field">
                    <label>
                      Full Name <span className="mandatory">*</span>{" "}
                    </label>
                    <input type="text" />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-6 input-field">
                    <label>
                      Phone number <span className="mandatory">*</span>
                    </label>
                    <input type="text" />
                  </div>
                  <div className="col-6 input-field">
                    <label>
                      Email address <span className="mandatory">*</span>
                    </label>
                    <input type="text" />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-12 input-field">
                    <label>Company name (optional)</label>
                    <input type="text" />
                  </div>
                </div>
                <div className="row form-group">
                  <div className="col-12 input-field">
                    <label>
                      Message <span className="mandatory">*</span>
                    </label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                  </div>
                </div>
                <p>
                  <span className="mandatory">*</span> Fields required
                </p>
                <div>
                  <button className="Btn">Contact us now!</button>
                </div>
              </form>
            </div>
          </div>
          <Map location={CONTACT_LOCATION} />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

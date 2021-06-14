import React from "react";

function ContactUs() {
  return (
    <section className="c2hirePage-body policy-terms contact-Us">
      <img
        className="landing-bg-img2"
        src="../../../images/c2hire/img/Group 591.svg"
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
                <p>contact@c2hire.com</p>
              </div>
              <div className="contact-info">
                <div className="circle">
                  <img src="../../../images/c2hire/icon/location.svg" alt="" />
                </div>
                <p>
                  Plot no 32, Jayabheri Enclave Phase-2, Gachibowli, Hyderabad -
                  500032.
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
                    <label></label>
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
                  {" "}
                  <span className="mandatory">*</span> Fields required
                </p>
                <div>
                  <button className="Btn">Contact us now!</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <div className="get-direction">
              <span className="directions">Get the Directions</span>
              <span className="emptydirect"></span>
              <div id="googleMap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2820741642563!2d78.35934511435401!3d17.44620820569922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c07819bb9d%3A0xdf907daebe89d286!2sPoornakala%2C%20Chhota%20Anjaiah%20Nagar%2C%20Gachibowli%2C%20Hyderabad%2C%20Telangana%20500032!5e0!3m2!1sen!2sin!4v1623575580765!5m2!1sen!2sin"
                  style={{ border: "0", width: "100%", height: "498px" }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

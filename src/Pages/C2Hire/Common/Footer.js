import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ADDRESS, C2HIRE_EMAIL } from "../constants";

function C2hireFooter() {
  return (
    <footer className="footer-block">
      <div className="container container-lg container-md container-xl">
        <div className="footer1stblc">
          <div className="logo">C2Hire.</div>
          <p className="address-details">
            <span>
              {ADDRESS}
            </span>
            <span>
              <i className="far fa-envelope"></i>&nbsp;
              <a style={{ color: "white" }} href="mailto:contact@c2hire.com">
                {C2HIRE_EMAIL}
              </a>
            </span>
          </p>
          <div className="col-lg-6 followUs">
            <div className="socials">
              <span>FOLLOW US &nbsp;&nbsp; |</span>
              <div className=" d-flex justify-content-evenly">
                <span className="social-text">
                  <i className="fab fa-facebook-f"></i> &nbsp;Facebook
                </span>
                <span className="social-text">
                  <i className="fab fa-twitter"></i> &nbsp;Twitter
                </span>
                <span className="social-text">
                  <i className="fab fa-youtube"></i> &nbsp;Youtube
                </span>
              </div>
            </div>
          </div>
          <button className="message-btn Btn">
            <i className="far fa-envelope"></i>&nbsp; Send us a message
          </button>
        </div>
      </div>
      <div className="copyright-box">
        <div className="container container-lg container-md container-xl">
          <span className="copyright">
            © 2021 PGK Technologies. All rights reserved.
          </span>
          <div className=" policy-links">
            <NavLink exact to="/c2hire/userguide/privacypolicy">
              Privacy Policy
            </NavLink>
            |
            <NavLink exact to="/c2hire/userguide/termsandconditions">
              Terms and Conditions
            </NavLink>
            |
            <NavLink exact to="/c2hire/userguide/refundpolicy">
              Refund Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default C2hireFooter;

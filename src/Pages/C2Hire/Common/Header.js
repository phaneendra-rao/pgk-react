import React from "react";
import { NavLink } from "react-router-dom";

function C2hireHeader() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink exact to="/c2hire" className="navbar-brand">
          C2Hire.
        </NavLink>
        {/* <a className="navbar-brand" href="home-page.html">C2Hire.</a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContentXL"
          aria-controls="navbarSupportedContentXL"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContentXL">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact to="/c2hire" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <a className="nav-link" data-toggle="dropdown">
                  About Us
                </a>
                <div className="dropdown-menu">
                  <NavLink
                    replace
                    exact
                    to="/c2hire/whyc2hire"
                    className="dropdown-item"
                  >
                    Why C2Hire
                  </NavLink>
                  <NavLink
                    exact
                    to="/c2hire/members/ourteam"
                    className="dropdown-item"
                  >
                    Our Team
                  </NavLink>
                  <NavLink
                    exact
                    to="/c2hire/members/advisors"
                    className="dropdown-item"
                  >
                    Advisors
                  </NavLink>
                  <NavLink
                    exact
                    to="/c2hire/members/mentors"
                    className="dropdown-item"
                  >
                    Mentors
                  </NavLink>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <a className="nav-link" data-toggle="dropdown">
                  Stakeholders
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Corporate
                  </a>
                  <a className="dropdown-item" href="#">
                    University
                  </a>
                  <a className="dropdown-item" href="#">
                    Student
                  </a>
                  {/* <NavLink to='members/mentors'>Corporate</NavLink>
                                <NavLink to='members/mentors'>University</NavLink>
                                <NavLink to='members/mentors'>Student</NavLink> */}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Partners
              </a>
            </li>
            <li className="nav-item">
              <div className="dropdown">
                <a className="nav-link" data-toggle="dropdown">
                  Support
                </a>
                <div className="dropdown-menu">
                  <NavLink
                    exact
                    to="/c2hire/contactus"
                    className="dropdown-item"
                  >
                    Contact Us
                  </NavLink>
                  <a className="dropdown-item" href="#">
                    News
                  </a>
                  <a className="dropdown-item" href="#">
                    Press
                  </a>
                  <NavLink exact to="/c2hire/faqs" className="dropdown-item">
                    FAQ's
                  </NavLink>
                </div>
              </div>
            </li>
            <li className="form-buttons ml-3">
              <button className="form-btns Btn">Login / Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default C2hireHeader;

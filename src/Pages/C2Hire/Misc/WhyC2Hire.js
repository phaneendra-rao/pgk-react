import React from "react";
import { C2HIRE_EMAIL } from "../constants";

function WhyC2Hire() {
  return (
    <section className="c2hirePage-body policy-terms whyC2hire">
      <img
        className="landing-bg-img2"
        src="../../../images/c2hire/img/Group 591.svg"
        alt=""
        height="240px"
        width="230px"
      />

      <div className="container container-lg container-md container-xl">
        <img
          className="landing-bg-img1"
          src="../../../images/c2hire/img/ellipseSquare.svg"
          height="180px"
          width="180px"
          alt=""
        />
        <div className="policy-heading ">
          <h1>Why C2Hire.</h1>
        </div>
        <div className="container container-lg container-md container-xl policy-terms">
          <div className="container container-lg container-md container-xl policy-paragraphs padspacing">
            <span className="d-block c2hire-subTitle">
              C2Hire. - India's FIRST Blockchain Enabled Campus Hire Platform.
            </span>
            <p>
              <label>Vision :</label> Enable seamless and collaborative
              interaction between Corporates from Industry and Education eco
              system like Universities/ Colleges, Students, Third party
              Assessment & Learning applications to hire right talent at the
              right time from right source by building a Scalable, Secure &
              Integrated platform with required transparency and with built-in
              validation & verification mechanism.
            </p>
            <p>
              We have many platforms which caters to the segment of campus
              hires, however what would you think when we say C2Hire is a
              Marketplace for all the stakeholders - a marketplace which helps
              hire right talent at the right time from the right source.
            </p>
            <p className="d-block my-2">Sounds interesting!</p>
            <p>
              The platform which stands and believes in the Vision, the vision
              of making a difference to the Education eco system - this vision
              is powered by a combined Management Experience of 100+ years
              effectively driving to build a Scalable, Secure & Integrated
              platform with required transparency and with built-in validation &
              verification mechanism.
            </p>
            <p>
              Technology helps to make solutions easy and complex at the same
              time, however we chose to pick the former - the platform helps you
              understand trends, information, analytics at a single click of
              button.
            </p>
            <p>
              We also believe that you are the owner of your information - at
              C2Hire. you control the information which you like to share with
              the world - you publish it! ...and it simply doesn't end there -
              you Earn Tokens for the information you Publish
            </p>
            <p>
              The platform also has catalogued pricing and on demand
              subscription, how does it sound that you could use the Tokens
              earned to Subscribe to information per your needs?
            </p>
            <p>
              We have bundle of features in store for each one of you that will
              unbox as you take the path <br /> - Let's
              <label>JOIN. COLLABORATE. SUCCEED.</label>
            </p>
            <p> Team C2Hire.</p>
            <label><a href="mailto:contact@c2hire.com">{C2HIRE_EMAIL}</a></label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyC2Hire;

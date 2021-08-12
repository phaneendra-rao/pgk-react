import React from "react";
import { C2HIRE_EMAIL, C2HIRE_URL } from "../constants";

function RefundPolicy() {
  return (
    <section className="c2hirePage-body policy-terms">
      <img
        className="landing-bg-img2"
        src="../../../images/c2hire/img/Group 591.png"
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
          <h1>Refund Policy</h1>
        </div>
        <div className="container container-lg container-md container-xl policy-terms">
          <div className="container container-lg container-md container-xl policy-paragraphs padspacing">
            <p>
              Thank you for being a part of us . We want to make sure that our
              stakeholders have an exceptional experience. As with any online
              purchase experience, the below are the terms and conditions that
              govern the Refund Policy. When you registered for a service on the{" "}
              <a href={C2HIRE_URL}>c2hire.com</a>, you agree to Terms and
              Conditions covered below.
            </p>
            <p>
              <label className="d-block">Cancellation & Refunds</label>
              Due to the complex nature of collaboration between stakeholders,
              we cannot refund the payment. However, in remote circumstances
              which could be beyond the scope, we request you to send out an
              email to&nbsp;
              <a href="mailto:contact@c2hire.com">{C2HIRE_EMAIL}</a> with the
              relevant information and we will try our best to accommodate the
              cancellation and refund request.
            </p>
            <p>
              <label className="d-block">Refunds: Duplicate payment</label>
              Refund of the duplicate payment made by the stakeholder will be
              processed by cheque/online payment within 30 days after intimation
              by the stakeholders.
            </p>
            <p>
              <label>Note:</label> All refunds will be processed within 30 days
              of receipt of the refund request and the transaction/payment
              gateway charges will be deducted as per actuals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RefundPolicy;

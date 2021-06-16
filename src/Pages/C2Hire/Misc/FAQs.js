import React from "react";

function FAQs() {
  return (
    <section className="c2hirePage-body policy-terms FAQs-page">
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
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="container container-lg container-md container-xl Faqs-container container-lg container-md container-xl">
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="row">
                <div className="col-12 left-links">
                  <div className="table-content tab-blue">
                    <h5 className="table-title">
                      <img src="../../../images/c2hire/icon/info.svg" /> &nbsp;
                      Table of contents
                    </h5>
                    <ul>
                      <li>General</li>
                      <li>Corporate</li>
                      <li>Products & Services</li>
                      <li>Order issues</li>
                      <li>Payments</li>
                      <li>Returns & Refunds</li>
                      <li>Technical issues</li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 left-links">
                  <div className="table-content Top-questions">
                    <h5 className="table-title">
                      <i className="far fa-star"></i>&nbsp; Popular questions
                    </h5>
                    <ul className="">
                      <li>What is the pricing for corporate ?</li>
                      <li>How should we post the job on C2Hire?</li>
                      <li>How does C2Hire help with our hiring ?</li>
                      <li>
                        What information does a corporate needs to furnish for
                        registration ?
                      </li>
                      <li>How to access the dashboard ?</li>
                      <li>What is Hiring Criteria ?</li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 left-links">
                  <div className="table-content">
                    <h5 className="table-title">
                      <img src="../../../images/c2hire/icon/help-circle.svg" />
                      &nbsp; Can't find an answer?
                    </h5>
                    <button className="btn email-btn">
                      <i className="far fa-envelope"></i> Email Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12 right-block">
              <div className="search-box">
                <input
                  placeholder="Search...."
                  className="form-control"
                  type="text"
                />
                <i className="far fa-search"></i>
                <p>Find topics by entering terms in the search box.</p>
              </div>
              <div className="faq-content">
                <div className="breadcrump">
                  <span>FAQs</span> <i className="fa fa-chevron-right"></i>{" "}
                  <span>Corporate</span>
                </div>
                <div className="faq-answers">
                  <div className="title">
                    <h1>Corporate</h1>
                    <img src="../../../images/c2hire/icon/share.svg" />
                  </div>

                  <hr />
                  <div className="faq-blk">
                    <ol>
                      <li className="list">
                        <span className="question">
                          What is the pricing for corporate?
                        </span>
                        <span className="answers">
                          No, currently we do not support EU shipping.
                        </span>
                      </li>
                      <li className="list">
                        <span className="question">
                          How should we post the job on C2Hire?
                        </span>
                        <span className="answers">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat.
                        </span>
                      </li>
                      <li className="list">
                        <span className="question">
                          How does C2Hire help with our hiring process?
                        </span>
                        <span className="answers">
                          Facilisis leo vel fringilla est ullamcorper. Venenatis
                          lectus magna fringilla urna porttitor rhoncus dolor
                          purus. Nulla at volutpat diam ut venenatis tellus in
                          metus vulputate. Faucibus pulvinar elementum integer
                          enim neque volutpat ac. Consequat interdum varius sit
                          amet mattis vulputate enim. Pharetra massa massa
                          ultricies mi quis hendrerit dolor magna eget.
                        </span>
                      </li>
                      <li className="list">
                        <span className="question">
                          What information does a corporate needs to furnish for
                          registration on the portal?
                        </span>
                        <span className="answers">
                          Odio tempor orci dapibus ultrices in iaculis nunc sed
                          augue, that you can read here.
                        </span>
                      </li>
                      <li className="list">
                        <span className="question">
                          What is Hiring Criteria and how to post it?
                        </span>
                        <span className="answers">
                          Ed blandit libero volutpat sed cras ornare arcu.
                          Mauris augue neque gravida in fermentum et
                          sollicitudin. Rhoncus urna neque viverra justo nec
                          ultrices dui sapien.
                        </span>
                      </li>
                    </ol>

                    <div className="article">
                      <span className="text">Was this article helpful?</span>
                      <span className="likes">
                        <img src="../../../images/c2hire/icon/thumbs-up.svg" />
                        <img src="../../../images/c2hire/icon/thumbs-down.svg" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;

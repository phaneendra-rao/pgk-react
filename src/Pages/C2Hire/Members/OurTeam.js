import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurTeam() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 468,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <section className="c2hirePage-body Team-creds">
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
        <div className="Team-heading ">
          <h1>Team & Credentials</h1>
        </div>
        <div className="container info-container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 left-highlight">
              <h1 className="highlight-text">
                Cutting edge expertise a tap away.
              </h1>
              <p className="description">
                With decades of experience across multiple industry{" "}
              </p>
              <p className="desc2">
                verticals and equipped with industry leading certifications —
                our team will be more than happy to help.
              </p>
            </div>
            <div className="col-lg-6 col-sm-12 right-img">
              <img
                src="../../../images/c2hire/img/teamCredSvg.svg"
                alt=""
                height="316px"
                width="515px"
              />
            </div>
          </div>
        </div>
        <div className="container team-container">
          <div className="our-team">
            <div>
              <label className="team-head">
                <span>Our</span>&nbsp;<span>Team</span>
              </label>
              <hr />
            </div>
            <div className="card-carousel">
              <Slider {...settings}>
                <div>
                  <div
                    className="card"
                    data-toggle="modal"
                    data-target="#member1"
                  >
                    <span className="bg-blue"></span>
                    <div className="center-bck">
                      <span className="circle">
                        <img
                          src="../../../images/c2hire/img/team_members/ramesh-pgk.png"
                          alt=""
                        />
                      </span>
                      <span className="name">Ramesh Pisupati</span>
                      <span className="designation">Founder - Director</span>
                      <div className="socials">
                        <span className="linkedin">
                          <i className="fab fa-linkedin"></i>
                        </span>
                        <span className="twitter">
                          <i className="fab fa-twitter"></i>
                        </span>
                        <span className="facebook">
                          <i className="fab fa-facebook-f"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="card" data-toggle="modal"
                    data-target="#member2">
                    <span className="bg-blue"></span>
                    <div className="center-bck">
                      <span className="circle">
                        <img
                          src="../../../images/c2hire/img/team_members/rajnikanth-pgk.png"
                          alt=""
                        />
                      </span>
                      <span className="name">Rajanikanth</span>
                      <span className="designation">Co-Founder - Director</span>
                      <div className="socials">
                        <span className="linkedin">
                          <i className="fab fa-linkedin"></i>
                        </span>
                        <span className="twitter">
                          <i className="fab fa-twitter"></i>
                        </span>
                        <span className="facebook">
                          <i className="fab fa-facebook-f"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card" data-toggle="modal"
                  data-target="#member3">
                  <span className="bg-blue"></span>
                  <div className="center-bck">
                    <span className="circle">
                      <img
                        src="../../../images/c2hire/img/team_members/Shaker.jpg"
                        alt=""
                      />
                    </span>
                    <span className="name">Shaker</span>
                    <span className="designation">Director</span>
                    <div className="socials">
                      <span className="linkedin">
                        <i className="fab fa-linkedin"></i>
                      </span>
                      <span className="twitter">
                        <i className="fab fa-twitter"></i>
                      </span>
                      <span className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card" data-toggle="modal"
                  data-target="#member4">
                  <span className="bg-blue"></span>
                  <div className="center-bck">
                    <span className="circle">
                      <img className="strategy-ofc"
                        src="../../../images/c2hire/img/team_members/Sumit.JPG"
                        alt=""
                      />
                    </span>
                    <span className="name">Sumit Puntambekar</span>
                    <span className="designation">
                      Chief Strategy Officer - Product & Marketing
                      </span>
                    <div className="socials">
                      <span className="linkedin">
                        <i className="fab fa-linkedin"></i>
                      </span>
                      <span className="twitter">
                        <i className="fab fa-twitter"></i>
                      </span>
                      <span className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card" data-toggle="modal"
                  data-target="#member5">
                  <span className="bg-blue"></span>
                  <div className="center-bck">
                    <span className="circle">
                      <img className="architect"
                        src="../../../images/c2hire/img/team_members/Shalmali.png"
                        alt=""
                      />
                    </span>
                    <span className="name">Shalmali</span>
                    <span className="designation">
                      Solution Architect, Product Development
                      </span>
                    <div className="socials">
                      <span className="linkedin">
                        <i className="fab fa-linkedin"></i>
                      </span>
                      <span className="twitter">
                        <i className="fab fa-twitter"></i>
                      </span>
                      <span className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card" data-toggle="modal"
                  data-target="#member6">
                  <span className="bg-blue"></span>
                  <div className="center-bck">
                    <span className="circle"></span>
                    <span className="name">Kishan</span>
                    <span className="designation">
                      Senior Software Engineer, Product Development
                      </span>
                    <div className="socials">
                      <span className="linkedin">
                        <i className="fab fa-linkedin"></i>
                      </span>
                      <span className="twitter">
                        <i className="fab fa-twitter"></i>
                      </span>
                      <span className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card" data-toggle="modal"
                  data-target="#member7">
                  <span className="bg-blue"></span>
                  <div className="center-bck">
                    <span className="circle">
                      <img
                        src="../../../images/c2hire/img/team_members/Sricharan.jpg"
                        alt=""
                      />
                    </span>
                    <span className="name">Sricharan</span>
                    <span className="designation">
                      Intern, Product Developmemt
                      </span>
                    <div className="socials">
                      <span className="linkedin">
                        <i className="fab fa-linkedin"></i>
                      </span>
                      <span className="twitter">
                        <i className="fab fa-twitter"></i>
                      </span>
                      <span className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card" data-toggle="modal"
                  data-target="#member8">
                  <span className="bg-blue"></span>
                  <div className="center-bck">
                    <span className="circle">
                      <img className="intern"
                        src="../../../images/c2hire/img/team_members/srinikhil.jpeg"
                        alt=""
                      />
                    </span>
                    <span className="name">Srinikhil</span>
                    <span className="designation">
                      Intern, Product Developmemt
                      </span>
                    <div className="socials">
                      <span className="linkedin">
                        <i className="fab fa-linkedin"></i>
                      </span>
                      <span className="twitter">
                        <i className="fab fa-twitter"></i>
                      </span>
                      <span className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="card" data-toggle="modal"
                  data-target="#member9">
                  <span className="bg-blue"></span>
                  <div className="center-bck">
                    <span className="circle"></span>
                    <span className="name">Mehul</span>
                    <span className="designation">
                      Intern, Product Developmemt
                      </span>
                    <div className="socials">
                      <span className="linkedin">
                        <i className="fab fa-linkedin"></i>
                      </span>
                      <span className="twitter">
                        <i className="fab fa-twitter"></i>
                      </span>
                      <span className="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </Slider>

            </div>
          </div>
        </div>
      </div>

      <div className="modal fade team-modal" id="member1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="far fa-times-circle"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="description">
                <div className="title-block">
                  <div className="circle">
                    <img
                      src="../../../images/c2hire/img/team_members/ramesh-pgk.png"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <span>Ramesh Pisupati</span>
                    <span>Founder & Director</span>
                  </div>
                </div>
                <p>
                  An outlier with his skin perennially in the game, Ramesh is a
                  proven risk-taker with a knack for building successes out of
                  failures. He entered the industry over 25 years ago as a
                  Scientist/Engineer at the Indian Space Research Organization
                  (ISRO) in 1993. Over the years, he has worked with the world’s
                  most leading MNCs as well as global tech and consulting firms
                  like Infosys Limited, General Electric, Ernst & Young LLP,
                  Wipro Systems, Intelligroup Inc and Genpact.
                </p>

                <p>
                  The last 15 years have seen Ramesh don the hats of several
                  crucial leadership roles: as a Program Manager for large
                  global transformation programs, Customer Account Manager with
                  P&L responsibility, Practice Head for handling large practices
                  that involve Oracle and SAP technologies, Competency Leader in
                  incubating niche technologies, Quality Leader in driving
                  6-Sigma and CMMI Initiatives, and as an AMS Head in setting
                  customer GDC up.
                </p>
                <p>
                  With a penchant for architecting low-risk, high-return
                  solutions, Ramesh is known for his innovative and decisive
                  approach and has significant expertise in handling
                  transformational programs and incubating Centres of
                  Excellence. Known for his entrepreneurial mindset and
                  cross-functional capabilities, it comes as no surprise that
                  Ramesh decided to shift from the conventional IT journey and
                  become the Founder-CEO at PGK Technologies Private Limited.
                  With a passion for staying abreast of the latest developments
                  in tech and understanding their applications — especially in
                  blockchain, AI, and IoT — Ramesh garnered deep insights about
                  how organizations can benefit from blockchain’s scalability,
                  security, immutability, and P2P features, making it a natural
                  choice for PGK Technologies.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <div className="socials">
                <span className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </span>
                <span className="twitter">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade team-modal" id="member2">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="far fa-times-circle"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="description">
                <div className="title-block">
                  <div className="circle">
                    <img
                      src="../../../images/c2hire/img/team_members/rajnikanth-pgk.png"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <span>Rajanikanth</span>
                    <span>Co-Founder & Director</span>
                  </div>
                </div>
                <p>
                  A doer and a seeker, Rajanikanth brings professional work experience in the IT industry that spans across 25 eventful years. With unparalleled expertise in managing large IT engagements that have global delivery models, he has demonstrated his considerable range of skills in a series of challenging roles: Research and Innovation Head, Solution/COE Leader, Pre-sales Leader, Practice Leader, Program/Delivery/Account Manager, and Project Manager.
                </p>

                <p>
                  Known for his close involvement in everything he does, Rajanikanth has been instrumental in architecting multiple success stories for organizations across verticals — be it through driving large transformation programs or in enabling niche technology for industry solutions.
                </p>
                <p>
                  He has expertise in managing large IT engagements with global delivery models and has worked with global organizations — including Fortune 500 companies. These days, he finds his peace in providing Thought Leadership and working in an environment that focuses on pioneering solutions, which explains his keen interest in empowering organizations with blockchain, IoT, and AI.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <div className="socials">
                <span className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </span>
                <span className="twitter">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade team-modal" id="member3">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="far fa-times-circle"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="description">
                <div className="title-block">
                  <div className="circle">
                    <img
                      src="../../../images/c2hire/img/team_members/Shaker.jpg"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <span>Shaker</span>
                    <span>Director</span>
                  </div>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis deserunt illum corporis quod, doloremque nam, dolores illo pariatur id reprehenderit expedita magni voluptates perspiciatis quam minima ex ratione! At, blanditiis!
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <div className="socials">
                <span className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </span>
                <span className="twitter">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade team-modal" id="member4">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="far fa-times-circle"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="description">
                <div className="title-block">
                  <div className="circle">
                    <img
                      src="../../../images/c2hire/img/team_members/Sumit.jpg"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <span>Sumit Puntambekar</span>
                    <span>Chief Strategy Officer - Product & Marketing</span>
                  </div>
                </div>
                <p>
                  Sumit Puntambekar is the Chief Strategy Officer - Product and Marketing. He has over 16 years of professional experience in the field of IT working in various roles as Strategic and Business Consultant, Operational Excellence, Compliance Assurance, Project and Portfolio Management. He has worked with the likes of TCS, Broadridge and Wipro across the globe in the domains of Telecom, Pharma, Finance and Compliance. He has a bachelor's degree in Computer Sciences and Engineering from Osmania University along with being NSE Certified in Financial Markets and Advanced Certification Program in Blockchain Technology & Solutions from IIIT Hyderabad.
                </p>
                <p>
                  Prior to this assignment, Sumit has founded ZeroBlocks (a Blockchain based IT Consulting and Product company) and LearnVed (Connecting the roots of Indian Learning). He is currently on Board and Director at MySoul Retail Pvt. Ltd. He is an avid Speaker at technical conferences, Start Up Advisor, and a serial investor in the Start Up Ecosystem.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <div className="socials">
                <span className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </span>
                <span className="twitter">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade team-modal" id="member5">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="far fa-times-circle"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="description">
                <div className="title-block">
                  <div className="circle">
                    <img
                      src="../../../images/c2hire/img/team_members/Shalmali.png"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <span>Shalmali</span>
                    <span>Solution Architect, Product Development</span>
                  </div>
                </div>
                <p>
                  Shalmali Ayachit is a seasoned professional with over 13 years of experience in the field of Computers which includes Blockchain Solutions, Start Up Advisor, Educationist, Solutions, Research & Development and Delivery. She also works as a consultant with IIIT Hyderabad for their Blockchain program.
                </p>

                <p>
                  She has worked as Start Up Advisor at AsliMedicine(Blockchain and Supply Chain), Zoreum, and at ZeroBlocks(Blockchain and Real Estate). She was part of policy building group for Blockchain district, Telangana Government.
                </p>
                <p>
                  Shalmali works as a Solution Architect for our product C2Hire, India's First Blockchain enabled Campus hire platform.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <div className="socials">
                <span className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </span>
                <span className="twitter">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade team-modal" id="member6">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="far fa-times-circle"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="description">
                <div className="title-block">
                  <div className="circle">
                    <img
                      src=""
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <span>Kishan</span>
                    <span>Senior Software Engineer, Product Development</span>
                  </div>
                </div>
                <p>
                  Kishan has over 3.6 years of experience in Business Intelligence tools.
                </p>

                <p>
                  Prior to joining C2Hire. he has worked with Acuvate Software Pvt Ltd and DSmart systems, where he has gained sound knowledge in Power BI, Dax with SQL.
                </p>

              </div>
            </div>
            <div className="modal-footer">
              <div className="socials">
                <span className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </span>
                <span className="twitter">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade team-modal" id="member7">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="far fa-times-circle"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="description">
                <div className="title-block">
                  <div className="circle">
                    <img
                      src="../../../images/c2hire/img/team_members/Sricharan.jpg"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <span>Sricharan</span>
                    <span>Intern, Product Developmemt</span>
                  </div>
                </div>
                <p>
                  He is an intern working with PGK Technologies from JAN-2021
                </p>

                <p>
                  Sricharan Pisupati is currently pursuing B.Tech Graduate program in Electronics and Communication Engineering from SRM University. He is in his’ final semester of B.Tech program and approached PGK Technologies for an internship program.
                  During B.Tech program
                  He has done multiple projects with novelty
                  Published Papers into reputed Journals

                </p>
                <p>
                  Sricharan has been very active and his’ contribution was appreciated by the Leaders and the Management from time to time.
                  
                          He was part of 2 major workshops and played vital role
                          Business Process Model workshop
                          Product Design workshop
                          and contributed towards
                          Functional requirement specification (FRS)
                          Blue print of Product Design
                </p>
                <p>
                During these past few months, he has learnt
                Adobe XD
                Power BI and
                MySQL
                </p>
                <p>
                His current responsibilities include
                UX Design Using Adobe XD
                Design of OLTP Database
                Creation of Database Tables and their keys
                Contribution towards development of Analytics Dashboard using POWER BI
                Documentation of Functional Requirements Specification (FRS) and it’s version control
                His’ achievements during internship at PGK include
                Development and modification of 300 UX pages
                Designed and developed 74 database tables & their associated Keys
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <div className="socials">
                <span className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </span>
                <span className="twitter">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade team-modal" id="member8">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="far fa-times-circle"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="description">
                <div className="title-block">
                  <div className="circle">
                    <img
                      src="../../../images/c2hire/img/team_members/srinikhil.jpeg"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <span>Srinikhil</span>
                    <span>Intern, Product Developmemt</span>
                  </div>
                </div>
                <p>
                Srinikhil is a final year Undergraduate Student with a specialization in Computer Science Engineering. 
                </p>

                <p>
                He works as an Intern for our Product C2Hire, India’s First Blockchain enabled Campus hire platform.
                </p>
              </div>
            </div>
            <div className="modal-footer">
              <div className="socials">
                <span className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </span>
                <span className="twitter">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade team-modal" id="member9">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
                <i className="far fa-times-circle"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="description">
                <div className="title-block">
                  <div className="circle">
                    <img
                      src=""
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <span>Mehul</span>
                    <span>Intern, Product Developmemt</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis porro doloremque ad minima dolores dolorum, dolore tenetur placeat repellat veniam magni quam vel nihil doloribus! Veniam pariatur ipsa corrupti.
                  </p>

              </div>
            </div>
            <div className="modal-footer">
              <div className="socials">
                <span className="linkedin">
                  <i className="fab fa-linkedin"></i>
                </span>
                <span className="twitter">
                  <i className="fab fa-twitter"></i>
                </span>
                <span className="facebook">
                  <i className="fab fa-facebook-f"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </section>
  );
}

export default OurTeam;

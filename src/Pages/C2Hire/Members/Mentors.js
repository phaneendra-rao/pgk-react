import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Mentors() {
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
          <h1>Mentors</h1>
        </div>
        <div className="container info-container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 left-highlight">
              <h1 className="highlight-text">
                Lorem Ipsum is simply dummy text
                </h1>
              <p className="description">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <p className="desc2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                <span>Our</span>&nbsp;<span>Mentors</span>
              </label>
              <hr />
            </div>
            <div className="card-carousel">
              <Slider {...settings}>
                <div>
                  <div
                    className="card"
                    data-toggle="modal"
                    data-target="#mentor1"
                  >
                    <span className="bg-blue"></span>
                    <div className="center-bck">
                      <span className="circle">
                        <img
                          src="../../../images/c2hire/img/team_members/mentor1.png"
                          alt=""
                        />
                      </span>
                      <span className="name">Dr. S.S. Prasada Rao Ph.D</span>
                      <span className="designation">Mentor</span>
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
                    data-target="#mentor2" >

                    <span className="bg-blue"></span>
                    <div className="center-bck">
                      <span className="circle">
                        <img
                          src="../../../images/c2hire/img/team_members/mentor2.png"
                          alt=""
                        />
                      </span>
                      <span className="name">Dr.M.SREEDHAR REDDY</span>
                      <span className="designation">Mentor</span>
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
              </Slider>

            </div>
          </div>
        </div>
      </div>

      <div className="modal fade team-modal" id="mentor1">
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
                      src="../../../images/c2hire/img/team_members/mentor1.png"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <span>Dr. S.S. Prasada Rao Ph.D</span>
                    <span>Mentor</span>
                  </div>
                </div>
                <p>
                  During the three decades of my ardent academic career, I happened to play many lead roles and
                  adorn several strategic positions in our University as well as outside the university. In whichever
                  position I am placed, as an institution builder, I sincerely strove to strengthen the organizations
                  in all aspects.
                </p>

                <p>
                  I have made a considerable contribution to the world of research as a research scholar and as a
                  member and editor of several repute journals. The best B-schools of India have bestowed upon
                  me numerous honours and awards.
                </p>
                <p>
                  My love for learning, passion for teaching, and enthusiasm for guiding research students have
                  not prevented me from allotting physical education time. Being a fitness enthusiast, I have
                  participated in several trekking expeditions and sporting events and encouraged my students
                  towards active participation. So also, my presence in several socio-spiritual events is
                  conspicuous.
                </p>
                <p>
                  It’s my staunch belief that the best practices in the field of education, especially, Engineering and
                  Management studies, can lead to human wellbeing.
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
      <div className="modal fade team-modal" id="mentor2">
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
                      src="../../../images/c2hire/img/team_members/mentor2.png"
                      alt=""
                    />
                  </div>
                  <div className="title">
                    <span>Dr.M.SREEDHAR REDDY</span>
                    <span>Mentor</span>
                  </div>
                </div>
                <p>
                  A highly-skilled, talented and qualified college principal with more than 28 years of experience in
                  administration and management of college activities in the learning environment.
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

export default Mentors;

import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { homeStatsData } from "../Services";

function C2hireHome() {
  const [homeStats, setHomeStats] = useState({});
  const [count, setCount] = useState(0);

  const getHomeStats = async () => {
    const result = await homeStatsData();

    if (result.data) {
      setHomeStats(result.data);
    }
  };

  useEffect(()=>{getHomeStats();},[])

  useEffect(() => {
    setTimeout(() => {
      setCount(1 + (count % flashTexts.length));
    }, 2000);
  }, [count]);

  const flashTexts = [
    "A marketplace to collaborateand hire.",
    "Earn credits as you Register and Publish.",
    "Token Payments.",
    "Futuristic Model : On demand subscription.",
    "In-built analytics engine.",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="c2hirePage-body landing-page">
      <img
        className="landing-bg-img2"
        src="../../../images/c2hire/img/Group 591.png"
        alt=""
        height="240px"
        width="230px"
      />
      <div className="showcaseBox">
        <img
          className="bg-img1"
          src="../../../images/c2hire/img/Rectangle 341.png"
          alt=""
          width="80%"
        />
        <img
          className="bg-img2"
          src="../../../images/c2hire/img/Rectangle 342.png"
          alt=""
          width="80%"
        />
        <div className="container container-lg container-md container-xl">
          <img
            className="landing-bg-img1"
            src="../../../images/c2hire/img/ellipseSquare.svg"
            height="180px"
            width="180px"
            alt=""
          />
          <div className="row">
            <div className="col-lg-5 col-sm-12">
              <p className="highlightText">
                India's First Blockchain Enabled Campus Hire Platform
              </p>
            </div>
            <div className="col-lg-7 col-sm-12">
              <div className="vid">
                <div className="videoBlock">
                  <div>
                    <ReactPlayer
                      className="c2hire-platform"
                      playing={true}
                      controls={true}
                      responsive={true}
                      light={true}
                      //light="../images/c2hire/img/platform-thumbnail.png"
                      url="https://player.vimeo.com/video/562748881?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    />
                  </div>
                </div>
                <p className="vidBtm-text">
                  {flashTexts[count] || "Validated and Verified profiles."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="collab">
        <span>JOIN. COLLABORATE. SUCCEED.</span>
      </div>
      <div className="homepage-info">
        <div className="container container-lg container-md container-xl infograph">
          <img
            src="../../../images/c2hire/img/Homepage-Infographics.png"
            alt="homepage-infograph"
          />
        </div>
      </div>
      <div className="reviewComments">
        <div className="container container-lg container-md container-xl">
          <img
            className="ellipse-square"
            src="../../../images/c2hire/img/ellipsenew.svg"
            height="330px"
            width="330px"
            alt=""
          />
          <h5 className="main-titles text-center">HEAR FROM THE PEOPLE</h5>
          <div className="commnets-detail">
            <Slider {...settings}>
              <div>
                <div className="comments-detail-block light-slider-box">
                  <div className="d-flex flex-column">
                    <img
                      className="quote-icon"
                      src="../../../images/c2hire/icon/quotes.png"
                    />
                    <div className="d-flex justify-content-center">
                      <span className="circle"></span>
                    </div>
                    <p className="text-center title">PAVAN KUMAR</p>
                    <p className="text-center title2">sr. data Analyts</p>
                    <p className="message">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae exercitationem maxime excepturi provident?
                      Facere, vel tempore sapiente, consequatur{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="comments-detail-block light-slider-box">
                  <div className="d-flex flex-column">
                    <img
                      className="quote-icon"
                      src="../../../images/c2hire/icon/quotes.png"
                    />
                    <div className="d-flex justify-content-center">
                      <span className="circle"></span>
                    </div>
                    <p className="text-center title">VASUNDARA</p>
                    <p className="text-center title2">sr. data Analyts</p>
                    <p className="message">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae exercitationem maxime excepturi provident?
                      Facere, vel tempore sapiente, consequatur{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="comments-detail-block light-slider-box">
                  <img
                    className="quote-icon"
                    src="../../../images/c2hire/icon/quotes.png"
                  />
                  <div className="d-flex flex-column">
                    <div className="d-flex justify-content-center">
                      <span className="circle"></span>
                    </div>
                    <p className="text-center title">PRUDHVI</p>
                    <p className="text-center title2">B-TECH</p>
                    <p className="message">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repudiandae exercitationem maxime excepturi provident?
                      Facere, vel tempore sapiente, consequatur{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
            </Slider>
          </div>
        </div>
        <div className="corporates-slides">
          <h5 className="main-titles text-center">
            Happy Corporates & Universities Partnered With Us
          </h5>
          <div id="demo" className="carousel slide" data-ride="carousel">
            <div className="container container-lg container-md container-xl">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row commnets-detail">
                    <img
                      width="100%"
                      src="../../../images/c2hire/img/partners.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row commnets-detail">
                    <img
                      width="100%"
                      src="../../../images/c2hire/img/partners.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row commnets-detail">
                    <img
                      width="100%"
                      src="../../../images/c2hire/img/partners.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#demo"
                data-slide="prev"
              >
                <i className="fas fa-angle-left"></i>
              </a>
              <a
                className="carousel-control-next"
                href="#demo"
                data-slide="next"
              >
                <i className="fas fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-lg container-md container-xl">
        <div className="col-12 text-center">
          <h5 className="main-titles">CURRENT STATS</h5>
        </div>
        <div className="row Stats">
          <div className="col-lg-4 col-sm-12 col-md-6 stat-widget">
            <p className="statNo">
              {homeStats.studentsRegisteredInLastWeek || 0}
            </p>
            <div className="d-flex align-items-center stat-content">
              <p className="title">
                Student Registered <br /> in The Last week
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-6 stat-widget">
            <p className="statNo">{homeStats.candidatesHiredInLastWeek || 0}</p>
            <div className="d-flex align-items-center stat-content">
              <p className="title">
                Candidates Hired <br /> In The Last 7 Days
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-12 stat-widget">
            <p className="statNo">{homeStats.jobsPostedInLastWeek || 0}</p>
            <div className="d-flex align-items-center stat-content">
              <p className="title">
                jobs posted <br /> in the last 7 days
              </p>
            </div>
          </div>
        </div>

        <div className="row  stats-detail">
          <div className="col-lg-4 col-sm-12 col-md-4 form-group">
            <div className="stats-detail-block">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="../../../images/c2hire/icon/studRegister.svg"
                  height="80px"
                  width="64px"
                  alt=""
                />
                <p className="text-center value">
                  {homeStats.studentsRegistered || 0}
                </p>
                <p className="text">STUDENTS REGISTERED TILL DATE</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-4 form-group">
            <div className="stats-detail-block">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="../../../images/c2hire/icon/team.svg"
                  height="80px"
                  width="64px"
                  alt=""
                />
                <p className="text-center value">
                  {homeStats.candidatesHiredSoFar || 0}
                </p>
                <p className="text">CANDIDATES GOT HIRED SO FAR</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-4 form-group">
            <div className="stats-detail-block">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="../../../images/c2hire/icon/resume.svg"
                  height="80px"
                  width="64px"
                  alt=""
                />
                <p className="text-center value">
                  {homeStats.jobsPostedTillDate || 0}
                </p>
                <p className="text">JOBS POSTED TILL DATE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row CUS_Stats-block">
          <div className="col-lg-4 col-sm-12 col-md-4">
            <div className=" stat-info-widget corp-rad">
              <div className="d-flex flex-column justify-content-between align-items-start stat-info-content">
                <p className="title">Corporates</p>
                <p className="sub-title">Registered</p>
                <p className="stat-info-no">
                  {homeStats.corporatesRegistered || 0}
                </p>
              </div>
              <i className="fas fa-briefcase stat-icons"></i>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-4">
            <div className=" stat-info-widget univ-rad">
              <div className="d-flex flex-column justify-content-between align-items-start stat-info-content">
                <p className="title">Universities</p>
                <p className="sub-title">Registered</p>
                <p className="stat-info-no">
                  {homeStats.universitiesRegistered || 0}
                </p>
              </div>
              <i className="fas fa-university stat-icons"></i>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12 col-md-4">
            <div className=" stat-info-widget stud-rad">
              <div className="d-flex flex-column justify-content-between align-items-start stat-info-content">
                <p className="title">Students</p>
                <p className="sub-title">Registered</p>
                <p className="stat-info-no">
                  {homeStats.studentsRegistered || 0}
                </p>
              </div>
              <i className="fas fa-user-circle stat-icons"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default C2hireHome;

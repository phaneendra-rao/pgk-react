import React from "react";
import OtherInformationItem from "../../Components/OtherInformationItem";
import UniversityItem from "../../Components/UniversityItem";
import StudentListItem from "../../Components/StudentListItem";
import CampusHiringItem from "../../Components/CampusHiringItem";

const UniversityCmp = (props) => {
  return (
    <>
      <div className="row single-university-section">
        <div className="header d-flex align-items-center w-full">
          <div className="backBtn d-flex justify-content-start align-items-center">
            <i className="fas fa-chevron-left" />
            <p className="btnLabel" onClick={props.goBack}>
              Go Back
            </p>
          </div>
          <div className="title-container">
            <p className="title">University Information</p>
          </div>
        </div>
        <div className="university-info-widget w-full">
          <div className="d-flex flex-column">
            <div className="university-info-plain-stripe" />
            <div className="univ-info d-flex justify-content-between align-items-start">
              <div className="univ-header d-flex justify-content-center align-items-center">
                <div className="univ-logo">
                  <img
                    src="../../../images/univ.png"
                    className="img img-fluid univ-icon"
                    alt="univ-logo"
                  />
                </div>
                <div className="univ-header-name d-flex flex-column align-items-start">
                  <p className="title">
                    {props.universityInfoList?.universityName}
                  </p>
                  <p className="sub-title">
                    <i className="fas fa-map-marker-alt" />{" "}
                    {props.universityInfoList?.universityHQAddressCity}
                  </p>
                </div>
              </div>
              <div className="univ-verticle-border" />
              <div className="d-flex flex-column align-items-center univ-info-widget">
                <div className="univ-info-data-list d-flex justify-content-between align-items-start w-full">
                  <div className="univ-info-data d-flex flex-column align-items-center">
                    <p className="title">University ID</p>
                    <p className="sub-title">{props.universityId}</p>
                  </div>
                  <div className="univ-verticle-border-3" />
                  <div className="univ-info-data d-flex flex-column align-items-center">
                    <p className="title">NIRF Ranking</p>
                    <p className="sub-title">
                      {props.universityInfoList?.ranking?.rank}
                    </p>
                  </div>
                  <div className="univ-verticle-border-3" />
                  <div className="univ-info-data d-flex flex-column align-items-center">
                    <p className="title">Accreditions</p>
                    <p className="sub-title">
                      {props.universityInfoList?.accredations?.issuingAuthority}
                    </p>
                  </div>
                  <div className="univ-verticle-border-3" />
                  <div className="univ-info-data d-flex flex-column align-items-center">
                    <p className="title">Year Of Establishment</p>
                    <p className="sub-title">
                      {props.universityInfoList?.yearOfEstablishment}
                    </p>
                  </div>
                </div>
                <div className="univ-course-stripe d-flex justify-content-start align-items-center w-full">
                  <p className="title">Programs Offered</p>
                  <p className="sub-title">
                    {props.universityInfoList?.programsOffered}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="univ-profile-container d-flex justify-content-start align-items-center w-full">
          <div className="profile-bar" />
          <div className="univ-profile d-flex flex-column">
            <p className="title">University Profile</p>
            <p className="sub-title">
              {props.universityInfoList?.universityProfile}
            </p>
          </div>
        </div>

        <div className="univ-quick-widgets-container d-flex justify-content-between align-items-center w-full">
          <div
            className={`univ-quick-widget d-flex flex-column align-items-center ${
              props.universityInfoList?.universityInsight ? "" : "gaps-disable"
            }`}
          >
            <i className="fas far fa-file-alt"></i>
            <p className="title">University Information</p>
            {props.universityInfoList?.universityInsight ? (
              <button
                type="button"
                data-toggle="modal"
                data-target="#subscribe"
                onClick={() => props.subscribeModal("unvInsight")}
                className="quick-widget-btn"
              >
                Subscribe to view
              </button>
            ) : (
              <button type="button" className="quick-widget-btn">
                Subscribe to view
              </button>
            )}
          </div>
          <div
            className={`univ-quick-widget d-flex flex-column align-items-center ${
              props.universityInfoList?.studentDbAvailable ? "" : "gaps-disable"
            }`}
          >
            <i className="fas fa-user-circle" />
            <p className="title">Generate Student List</p>
            {/* <button className="quick-widget-btn">Subscribe to Access</button> */}

            {props.universityInfoList?.studentDbAvailable ? (
              <button
                type="button"
                data-toggle="modal"
                data-target="#subscribe"
                onClick={() => props.subscribeModal("unvStuData")}
                className="quick-widget-btn"
              >
                Subscribe to Access
              </button>
            ) : (
              <button
                type="button"
                onClick={props.navigateToStudent}
                className="quick-widget-btn"
              >
                Subscribe to Access
              </button>
            )}
          </div>
          <div
            className={`univ-quick-widget d-flex flex-column align-items-center`}
          >
            <i className="fas fa-university" />
            <p className="title">Request To Attend Campus Drive</p>
            {/* <button className="quick-widget-btn">Subscribe to Place the request</button> */}
            <button
              type="button"
              data-toggle="modal"
              data-target="#subscribe"
              onClick={() => props.subscribeModal("campusDrive")}
              className="quick-widget-btn"
            >
              Subscribe to Place the request
            </button>
          </div>
        </div>
        <div className="univ-subscription-history-stripe">
          <p className="label">Subscription / Campus Drive History</p>
        </div>
        <div className={"blueHeaderStrip w-full"} style={{marginTop: '15px', paddingBottom:'0px'}}>
          <div className={"row"}>
            <div className={"col-md-2 item"}>
              <div className={"d-grp"}>
                <select name="subscriptionType" className="d-inp" value={""}>
                  <option value="">Subscription Type</option>
                </select>
                <label className="inp-caption">{`Subscription Type`}</label>
              </div>
            </div>
            <div className={"col-md-8 item"}>
            </div>
            <div className={"col-md-2 item"}>
              <div className={"d-grp"}>
                <select name="sortBy" className="d-inp" value={""}>
                  <option value="">Sort By</option>
                </select>
                <label className="inp-caption">{`Sort By`}</label>
              </div>
            </div>
          </div>
        </div>
        <div className="univ-subscription-list-container d-flex flex-column align-items-center w-full">
          {props.universityInfoList?.subscriptions?.length &&
            props.universityInfoList?.subscriptions.map((item, index) => {
              switch (item?.generalNote) {
                case "Other Information":
                  return (
                    <OtherInformationItem
                      item={{
                        ...item,
                        publisherName: props.universityInfoList?.universityName,
                      }}
                      index={index}
                    />
                  );
                case "Profile":
                  return "";
                case "University Information":
                  return (
                    <UniversityItem
                      item={{
                        ...item,
                        publisherName: props.universityInfoList?.universityName,
                      }}
                      index={index}
                    />
                  );
                case "Student Database":
                  return (
                    <StudentListItem
                      item={{
                        ...item,
                        publisherName: props.universityInfoList?.universityName,
                      }}
                      index={index}
                    />
                  );
                case "Campus Hiring":
                  return (
                    <CampusHiringItem
                      item={{
                        ...item,
                        publisherName: props.universityInfoList?.universityName,
                      }}
                      index={index}
                    />
                  );
                default:
                  return undefined;
              }
            })}

          {/* <div className="univ-sub-item d-flex justify-content-between align-items-center">
                        <div className="sub-type-container d-flex">
                            <i className="fas fa-file-certificate icon" />
                            <p className="sub-label">University Information</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="name-address d-flex flex-column align-items-start">
                            <p className="title">Osmania University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Amberpet, Hyderabad</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="sub-item-container d-flex flex-column align-items-center">
                            <p className="title">University ID</p>
                            <p className="sub-title">XXXX2002</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="view-info-btn">View Information</div>
                    </div>
                    <div className="univ-sub-item d-flex justify-content-between align-items-center">
                        <div className="sub-type-container d-flex">
                            <i className="fas fa-file-certificate icon" />
                            <p className="sub-label">University Information</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="name-address d-flex flex-column align-items-start">
                            <p className="title">Osmania University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Amberpet, Hyderabad</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="sub-item-container d-flex flex-column align-items-center">
                            <p className="title">University ID</p>
                            <p className="sub-title">XXXX2002</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="view-info-btn">View Information</div>
                    </div> */}
        </div>
      </div>
    </>
  );
};

export default UniversityCmp;

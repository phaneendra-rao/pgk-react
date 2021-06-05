import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import moment from 'moment';
import CustomModal from '../../../../Components/CustomModal';

const NotificationsCmp = (props) => {
  const [activeNotificationIndex, setActiveNotificationIndex] = useState();

  const acceptNotification = () => {
    // if(activeNotificationIndex!==undefined) {
    //   props?.notificationsList
    // }
  }

  const notificationHeader = (item) => {
    switch (item?.notificationType) {
      case "HiringCriteria":
        return "HiringCriteria";
      case "OtherInformation":
        return "OtherInformation";
      case "CorporateProfile":
        return "CorporateProfile";
      case "JobPublish":
        return "JobPublish";
      case "UniversityProfile":
        return "UniversityProfile";
      case "UniversityOtherInformation":
        return item?.senderName + " University";
      case "RequestVerification":
        return "RequestVerification";
      case "ProcessVerification":
        return "ProcessVerification";
      case "CampusHiring Request":
        return item?.senderName + " University";
      case "CampusHiring Response":
        return item?.senderName + " University";
      default:
        break;
    }
  };

  const notificationContent = (item) => {
    switch (item?.notificationType) {
        case "HiringCriteria":
          return "HiringCriteria";
        case "OtherInformation":
          return "OtherInformation";
        case "CorporateProfile":
          return "CorporateProfile";
        case "JobPublish":
          return "JobPublish";
        case "UniversityProfile":
          return "UniversityProfile";
        case "UniversityOtherInformation":
          return item?.senderName + " University";
        case "RequestVerification":
          return "RequestVerification";
        case "ProcessVerification":
          return "ProcessVerification";
        case "CampusHiring Request":
          return "has requested for Campus hiring";
        case "CampusHiring Response":
          return "";
        default:
          break;
      }
  };

  const getTypeOfRequest = (notification) => {
    switch (notification?.notificationType) {
      case "CampusHiring Request":
        return "Campus Hiring From University"  
      default:
        break;
    }
  }

  return (
    <>
      <div className="main mt-0 pr-0 pt-0">
        <div className="row m-0 p-0">
          <div className="col-md-7 p-0 pt-4 m-0">
            <h4 className="notification-title">Notifications</h4>
            <div className="table-responsive mb-4">
              <table className="table table-data mb-0">
                <thead>
                  <tr>
                    <th scope="col">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          onChange={props.selectAll}
                          checked={props?.isSelectAll ? true : false}
                          className="custom-control-input"
                          id="selectALl"
                        />
                        <label
                          className="custom-control-label mt-1"
                          htmlFor="selectALl"
                        ></label>
                      </div>
                    </th>
                    <th scope="col">
                      <button className="btn3 btn-lightgreen">
                        Mark as Read
                      </button>
                      <button
                        className="btn3 btn-lightgreen"
                        data-toggle="modal"
                        data-target="#accept"
                      >
                        Delete
                      </button>
                    </th>
                    <th colSpan={2} scope="col">
                      <div className="d-flex justify-content-around">
                        <div className="d-grp mb-0 mr-1" style={{ flex: 1 }}>
                          <select name className="d-inp" required>
                            <option value>Filter All</option>
                            <option value>Program</option>
                            <option value>Program</option>
                          </select>
                        </div>
                        <div className="d-grp mb-0">
                          <select name className="d-inp" required>
                            <option value>Sort by Relevance</option>
                            <option value>Program</option>
                            <option value>Program</option>
                          </select>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props?.notificationsList &&
                  props?.notificationsList?.length > 0 ? (
                    props?.notificationsList?.map((item, i) => {
                      if (item.notificationType!=='OtherInformation' && item.notificationType!=='CampusHiring Response'  && item.notificationType!=='UniversityOtherInformation') {
                        return(
                          <tr key={i} onClick={()=>{
                            setActiveNotificationIndex(i);
                          }}>
                            <td>
                              <div className="custom-control custom-checkbox">
                                <input
                                  type="checkbox"
                                  name={item.isChecked}
                                  onChange={props.handleChange}
                                  className="custom-control-input"
                                  checked={item?.isChecked ? true : false}
                                  value={item?.notificationID}
                                  id={item?.notificationID}
                                />
                                <label
                                  className="custom-control-label mt-1"
                                  htmlFor={item?.notificationID}
                                ></label>
                              </div>
                            </td>
                            <td>
                              <div className="basic-info">
                                <div className="basic-img">
                                  <p className="basic-name">
                                    <i className="fas fa-building" />
                                  </p>
                                </div>
                                <div className="basic-content">
                                  <h5 className="basic-title">
                                    {notificationHeader(item)}
                                  </h5>
                                  <p className="basic-subtitle">
                                    {notificationContent(item)}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <button className="btn action" style={{backgroundColor:'#5473E8', fontWeight:'700', fontSize: '.600rem'}}>
                                {item?.senderUserRole}
                              </button>
                              <button className="btn action" style={{backgroundColor:'#FE4394', fontWeight:'700', fontSize: '.600rem'}}>
                                Action required
                              </button>
                            </td>
                            <td className="time" style={{fontSize:'.600rem'}}>
                              {moment(item?.dateofNotification).fromNow()}
                            </td>
                          </tr>
                        )
                      }
                    }
                    )
                  ) : (
                    <td colSpan="3">No data</td>
                  )}
                  {/* <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label mt-1" htmlFor="customCheck1">
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="basic-info">
                                                <div className="basic-img">
                                                    <p className="basic-name"><i className="fas fa-building" /></p>
                                                </div>
                                                <div className="basic-content">
                                                    <h5 className="basic-title">Osmania University</h5>
                                                    <p className="basic-subtitle">has requested for Campus Hiring</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <button className="btn action tb-btn-green">University</button>
                                            <button className="btn action tb-btn-grey">Action required</button>
                                        </td>
                                        <td className="time">2 hrs ago</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label className="custom-control-label mt-1" htmlFor="customCheck1">
                                                </label>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="basic-info">
                                                <div className="basic-img">
                                                    <p className="basic-name"><i className="fas fa-building" /></p>
                                                </div>
                                                <div className="basic-content">
                                                    <h5 className="basic-title">Osmania University</h5>
                                                    <p className="basic-subtitle">has requested for Campus Hiring</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <button className="btn action">University</button>
                                            <button className="btn action tb-btn-pink">Action required</button>
                                        </td>
                                        <td className="time">2 hrs ago</td>
                                    </tr> */}
                </tbody>
              </table>
            </div>
          </div>
          {activeNotificationIndex!==undefined && <div className="col-md-5 p-0 m-0">
            <div className="info" style={{minHeight: '100vh', padding: 15}}>
              <div style={{border: '1px solid #cacaca', padding: '20px 40px', margin:0}}>
              <h6 className="info-title">
                Notification from <br /> {JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.universityDetails?.universityName} University
              </h6>
              <hr />
              <ul className="info-data" >
                <li>
                  <span>University Name</span>
                  <span>{JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.universityDetails?.universityName}</span>
                </li>
                <li>
                  <span>Location</span>
                  <span>{JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.universityDetails?.location}</span>
                </li>
                <li>
                  <span>Year of Establishment</span>
                  <span>{JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.universityDetails?.yearOfEstablishment}</span>
                </li>
                <li>
                  <span>University ID</span>
                  <span>{props?.notificationsList[activeNotificationIndex]?.senderID}</span>
                </li>
                <li>
                  <span>Accredition</span>
                  <span>{JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.universityDetails?.accredations}</span>
                </li>
                <li>
                  <span>Type of Request</span>
                  <span>{getTypeOfRequest(props?.notificationsList[activeNotificationIndex])}</span>
                </li>
                <li>
                  <span>Request made on</span>
                  <span>{moment(props?.notificationsList[activeNotificationIndex]?.dateofNotification).format('DD - MMM - YYYY')}</span>
                </li>
              </ul>
              <div className="d-flex justify-content-center info-space">
                <button className="btn3">View more Info</button>
                <button
                  className="btn3 btn-lightgreen"
                  onClick={acceptNotification}
                >
                  Accept
                </button>
                <button className="btn3 btn-yellow">Reject</button>
              </div>
              </div>
            </div>
          </div>}
        </div>
      </div>

                  {/* <div className="info">
              <h6 className="info-title">
                Notification from <br /> Osmania University
              </h6>
              <hr />
              <ul className="info-data">
                <li>
                  <span>University Name</span>
                  <span>OSMANIA UNIVERSITY</span>
                </li>
                <li>
                  <span>Location</span>
                  <span>Hyderabad</span>
                </li>
                <li>
                  <span>Year of Establishment</span>
                  <span>1917</span>
                </li>
                <li>
                  <span>University ID</span>
                  <span>XXXXXXXXX</span>
                </li>
                <li>
                  <span>Accredition</span>
                  <span>NAAC 'A'</span>
                </li>
                <li>
                  <span>Type of Request</span>
                  <span>Campus Hiring from University</span>
                </li>
                <li>
                  <span>Request made on</span>
                  <span>10 - Feb - 2021</span>
                </li>
              </ul>
              <div className="d-flex justify-content-around info-space">
                <button className="btn3">View more Info</button>
                <button className="btn3 btn-lightgreen2 txt-lightgreen btn-prevent">
                  Accepted on 10 - Feb - 2021
                </button>
              </div>
            </div>
            <div className="info">
              <h6 className="info-title">
                Notification from <br /> Osmania University
              </h6>
              <hr />
              <ul className="info-data">
                <li>
                  <span>University Name</span>
                  <span>OSMANIA UNIVERSITY</span>
                </li>
                <li>
                  <span>Location</span>
                  <span>Hyderabad</span>
                </li>
                <li>
                  <span>Year of Establishment</span>
                  <span>1917</span>
                </li>
                <li>
                  <span>University ID</span>
                  <span>XXXXXXXXX</span>
                </li>
                <li>
                  <span>Accredition</span>
                  <span>NAAC 'A'</span>
                </li>
                <li>
                  <span>Type of Request</span>
                  <span>Campus Hiring from University</span>
                </li>
                <li>
                  <span>Request made on</span>
                  <span>10 - Feb - 2021</span>
                </li>
              </ul>
              <div className="d-flex justify-content-around info-space">
                <button className="btn3">View more Info</button>
                <button className="btn3 btn-yellow2 txt-yellow btn-prevent">
                  Rejected on 10 - Feb - 2021
                </button>
              </div>
              <div className="d-grp">
                <label className="rejected-reason">
                  Reason/remarks for rejection
                </label>
                <input
                  type="text"
                  name
                  className="d-inp"
                  defaultValue="University is not matching to Hiring Criteria specified for Job-1"
                />
              </div>
            </div>
            <div className="info">
              <h6 className="info-title">
                Notification from <br /> Vasundhara(Student)
              </h6>
              <hr />
              <ul className="info-data">
                <li>
                  <span>Student Name</span>
                  <span>Raju</span>
                </li>
                <li>
                  <span>Program</span>
                  <span>B.Tech</span>
                </li>
                <li>
                  <span>Course</span>
                  <span>ECE</span>
                </li>
                <li>
                  <span>University</span>
                  <span>University</span>
                </li>
                <li>
                  <span>Aggregate CGPA</span>
                  <span>8.1</span>
                </li>
                <li>
                  <span>Applied for </span>
                  <span>Campus</span>
                </li>
                <li>
                  <span>Applied on</span>
                  <span>10 - Feb - 2021</span>
                </li>
              </ul>
            </div> */}
    </>
  );
};



export default NotificationsCmp;
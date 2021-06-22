import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import moment from 'moment';
import CustomModal from '../../CustomModal';
import Checkbox from '@material-ui/core/Checkbox';

import PgkSelectField from '../../../Components/FormFields/PgkSelectField';
import { useHistory } from "react-router";

const NotificationsCmp = (props) => {
  const [activeNotificationIndex, setActiveNotificationIndex] = useState();

  const history = useHistory();

  const acceptNotification = () => {
    // if(activeNotificationIndex!==undefined) {
    //   props?.notificationsList
    // }
  }

  const notificationHeader = (item) => {
    switch (item?.notificationType) {
      case "HiringCriteria":
        return "Hiring Criteria";
      case "OtherInformation":
        return "Other Information";
      case "CorporateProfile":
        return "Corporate Profile";
      case "JobPublish":
        return "Job Publish";
      case "UniversityProfile":
        return item?.senderName + " University";
      case "UniversityOtherInformation":
        return item?.senderName + " University";
      case "RequestVerification":
        return "Request Verification";
      case "ProcessVerification":
        return "Process Verification";
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
          return "Hiring Criteria";
        case "OtherInformation":
          return "Other Information";
        case "CorporateProfile":
          return "Corporate Profile";
        case "JobPublish":
          return "Job Publish";
        case "UniversityProfile":
          return item?.content;
        case "UniversityOtherInformation":
          return item?.content;
        case "RequestVerification":
          return "Request Verification";
        case "ProcessVerification":
          return "Process Verification";
        case "CampusHiring Request":
          return "has requested for Campus hiring";
        case "CampusHiring Response":
          return "has responded for Campus hiring";
        default:
          break;
      }
  };

  const getTypeOfRequest = (notification) => {
    switch (notification?.notificationType) {
      case "CampusHiring Request":
        return "Campus Hiring From University"
      case "CampusHiring Response":
        return "Campus Hiring From University"
      case "UniversityOtherInformation":
        return "University Other Information"  
      case "UniversityProfile":
        return "University Profile"  
      default:
        break;
    }
  }

  return (
    <>
      <div className="main mt-0 pr-0 pt-0">
        <div className="row m-0 p-0">
          <div className="col-md-7 p-0 pt-4 m-0">
            <h4 className="notification-title" style={{fontWeight: '400'}}>Notifications</h4>
            <div>
              <div className={'row d-flex flex-nowrap align-items-center'}>
                  <Checkbox size={'small'} className={'p-0'} color={'primary'} checked={props?.isSelectAll ? true : false} onChange={props.selectAll} />
                  <button className="btn btn-lightgreen" style={{width: '90px', backgroundColor:'#20BDC9', height: '35px', margin:'2px', marginLeft:'4px'}}>
                    Mark as Read
                  </button>
                  <button
                    className="btn btn-lightgreen"
                    data-toggle="modal"
                    data-target="#accept"
                    style={{width: '50px', backgroundColor:'#20BDC9', height: '35px', margin: '2px'}}
                  >
                    Delete
                  </button>
                    <PgkSelectField 
                        name="stakeholderType"
                        value={props?.filter?.stakeholderType}
                        onChange={props?.handleFilterChange}
                        label={`Stakeholder Type`}
                        options={props?.lookUpData?.stakeholderType?.length ? props?.lookUpData?.stakeholderType?.map((item)=>{
                          return {value: item.oneLtrCode, label: item.stakeholdertypeName}
                        }) : []}
                        labelStyles={{fontSize: '.800rem', backgroundColor: 'white', padding: '0px 3px 0px 3px'}}
                        selectStyles={{fontSize: '.800rem', backgroundColor: 'white', margin: '2px'}}
                        menuStyles={{fontSize: '.800rem'}}
                    />
                    <PgkSelectField 
                      name="notificationType"
                      value={props?.filter?.notificationType}
                      onChange={props?.handleFilterChange}
                      label={`Notification Type`}
                      options={props?.lookUpData?.notificationType?.length ? props?.lookUpData?.notificationType?.map((item)=>{
                        return {value: item.notificationTypeID, label: item.notificationType}
                      }) : []}
                      labelStyles={{fontSize: '.800rem', backgroundColor: 'white', padding: '0px 3px 0px 3px'}}
                      selectStyles={{fontSize: '.800rem', backgroundColor: 'white', margin: '2px'}}
                      menuStyles={{fontSize: '.800rem'}}
                    />

                      <PgkSelectField 
                        name="sortBy"
                        value={props?.filter?.sortBy}
                        onChange={props?.handleFilterChange}
                        label={`Sort By`}
                        options={props?.lookUpData?.sortBy?.length ? props?.lookUpData?.sortBy?.map((item)=>{
                          if(['TA', 'TD'].includes(item.sortByCode)) {
                            return {value: item.sortByCode, label: item.sortBy} 
                          }
                        }) : []}
                        labelStyles={{fontSize: '.800rem', backgroundColor: 'white', padding: '0px 3px 0px 3px'}}
                        selectStyles={{fontSize: '.800rem', backgroundColor: 'white', margin: '2px'}}
                        menuStyles={{fontSize: '.800rem'}}
                      />
              </div>
              {props?.notificationsList &&
                  props?.notificationsList?.length > 0 ? (
                    props?.notificationsList?.map((item, i) => {
                      if (item && ['UniversityOtherInformation', 'UniversityProfile', 'CampusHiring Request', 'CampusHiring Response'].includes(item?.notificationType)) {
                        return(
                            <div key={i} className={'d-flex align-items-center notificationMain'}>
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
                            <div className="row d-flex align-items-center basic-info w-full" style={{maxWidth: '300px'}} onClick={()=>{
                              setActiveNotificationIndex(i);
                            }}>
                              <div className="basic-img d-flex justify-content-center align-items-center" style={{backgroundColor:'rgb(84, 115, 232)', color: 'white', height: '45px', width: '45px', borderRadius: '50%'}}>
                                <p className="basic-name">
                                  <i className="fas fa-building" />
                                </p>
                              </div>
                              <div className="basic-content" style={{marginLeft: '10px'}}>
                                <h5 className="basic-title text-ellipsis" style={{fontSize: '1rem', maxWidth: '220px', lineHeight:'12px'}}>
                                  {notificationHeader(item)}
                                </h5>
                                <p className="basic-subtitle text-ellipsis" style={{maxWidth: '220px', lineHeight:'12px'}}>
                                  {notificationContent(item)}
                                </p>
                              </div>
                            </div>
                            <button className="btn action" type="button" style={{backgroundColor:'#5473E8', fontWeight:'700', fontSize: '.600rem', height: '20px', width: '80px', marginRight: '10px'}}>
                              {item?.senderUserRole}
                            </button>
                            <button className="btn action" type="button" style={{backgroundColor:'#FE4394', fontWeight:'700', fontSize: '.600rem', height: '20px', width: '80px', marginRight: '10px'}}>
                              Action required
                            </button>
                            <p className="time" style={{fontSize:'.600rem'}}>
                              {moment(item?.dateofNotification).fromNow()}
                            </p>
                          </div>
                        )
                      }
                    }
                    )
                  ) : (
                    <td colSpan="6">No data</td>
                  )}
            </div>
          </div>
          {activeNotificationIndex!==undefined && <div className="col-md-5 p-0 m-0">
            <div className="info" style={{minHeight: '100vh', padding: 15}}>
              <div style={{border: '1px solid #cacaca', padding: '20px 40px', margin:0}}>
              <h6 className="info-title">
                Notification from <br /> {["UniversityOtherInformation", "UniversityProfile", "CampusHiring Request"].includes(props?.notificationsList[activeNotificationIndex]?.notificationType) ? props?.notificationsList[activeNotificationIndex]?.senderName : JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.universityDetails?.universityName} University
              </h6>
              <hr />
              <ul className="info-data" >
                <li>
                  <span>University Name</span>
                  <span className={'text-ellipsis'} style={{width:'200px'}}>{["UniversityOtherInformation", "UniversityProfile"].includes(props?.notificationsList[activeNotificationIndex]?.notificationType) ? props?.notificationsList[activeNotificationIndex]?.senderName : ["CampusHiring Response"].includes(props?.notificationsList[activeNotificationIndex]?.notificationType) ? JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.requestContent?.universityDetails?.universityName : JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.universityDetails?.universityName}</span>
                </li>
                <li>
                  <span>Location</span>
                  <span>{["UniversityOtherInformation", "UniversityProfile"].includes(props?.notificationsList[activeNotificationIndex]?.notificationType) ? '-' : ["CampusHiring Response"].includes(props?.notificationsList[activeNotificationIndex]?.notificationType) ? JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.requestContent?.universityDetails?.location : JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.universityDetails?.location}</span>
                </li>
                <li>
                  <span>Year of Establishment</span>
                  <span>{["UniversityOtherInformation", "UniversityProfile"].includes(props?.notificationsList[activeNotificationIndex]?.notificationType) ? '-' : ["CampusHiring Response"].includes(props?.notificationsList[activeNotificationIndex]?.notificationType) ? JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.requestContent?.universityDetails?.yearOfEstablishment : JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.universityDetails?.yearOfEstablishment}</span>
                </li>
                <li>
                  <span>University ID</span>
                  <span>{props?.notificationsList[activeNotificationIndex]?.senderID}</span>
                </li>
                {/* <li>
                  <span>Accredition</span>
                  <span className={'text-ellipsis'} style={{width:'200px'}}>{["UniversityOtherInformation", "UniversityProfile"].includes(props?.notificationsList[activeNotificationIndex]?.notificationType) ? '-' : ["CampusHiring Response"].includes(props?.notificationsList[activeNotificationIndex]?.notificationType) ? JSON.parse(JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.requestContent?.universityDetails?.accredations).name : JSON.parse(JSON.parse(props?.notificationsList[activeNotificationIndex]?.content)?.universityDetails?.accredations).name}</span>
                </li> */}
                <li>
                  <span>Type of Request</span>
                  <span className={'text-ellipsis'} style={{width:'200px'}}>{getTypeOfRequest(props?.notificationsList[activeNotificationIndex])}</span>
                </li>
                <li>
                  <span>Request made on</span>
                  <span>{moment(props?.notificationsList[activeNotificationIndex]?.dateofNotification).format('DD-MMM-YYYY')}</span>
                </li>
              </ul>
              <div className="d-flex justify-content-center info-space">
                <button type="button" onClick={()=>{
                  if(["CampusHiring Request", "CampusHiring Response"].includes(props?.notificationsList[activeNotificationIndex]?.notificationType)) {
                    history.push('/dashboard/requests');
                  } else {
                    history.push('/dashboard/subscribe/newuniversity/'+props?.notificationsList[activeNotificationIndex]?.senderID)
                  }
                }} className="btn3">View more Info</button>
              </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </>
  );
};



export default NotificationsCmp;

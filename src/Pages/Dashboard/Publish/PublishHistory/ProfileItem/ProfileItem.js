import React, {useEffect, useState} from 'react';
import moment from "moment";
import {ucwords} from '../../../../../utils/utils';
import CustomModal from "../../../../../Components/CustomModal";
import BasicFormItem from './BasicFormItem';
import AddressAndContactFormItem from './AddressAndContactFormItem';
import ProfileFormItem from './ProfileFormItem';

const ProfileItem = (props) => {
  const [showModal, setShowModal] = useState(false);

  const [basicForm, setBasicForm] = useState(false);
  const [address, setAddress] = useState(false);
  const [profile, setProfile] = useState(false);

  useEffect(()=>{
    let publishedProfileItems = Object.keys(props?.item);

    if(publishedProfileItems?.length) {
      if(publishedProfileItems.some((_item)=>['CIN', 'corporateCategory', 'corporateIndustry', 'corporateType', 'monthOfHiring'].includes(_item))) {
        setBasicForm(true)
      } else {
        setBasicForm(false)
      }
    }
  }, [props?.item])

  useEffect(()=>{
    let publishedProfileItems = Object.keys(props?.item);

    if(publishedProfileItems?.length) {
      if(publishedProfileItems.some((_item)=>['companyProfile'].includes(_item))) {
        setProfile(true)
      } else {
        setProfile(false)
      }
    }
  }, [props?.item]);

  useEffect(()=>{
    let publishedProfileItems = Object.keys(props?.item);

    if(publishedProfileItems?.length) {
      if(publishedProfileItems.some((_item)=>['corporateHQAddressCountry', 'corporateLocalBranchAddressCountry'].includes(_item))) {
        setAddress(true)
      } else {
        setAddress(false)
      }
    }
  }, [props?.item]);

    const getProfileItemTagLine = (item) => {
        const profileItems = ['CIN', 'companyProfile', 'corporateCategory', 'corporateHQAddressCountry', 'corporateIndustry', 'corporateLocalBranchAddressCountry', 'corporateType', 'dateOfJoining'];
        let publishedProfileItems = Object.keys(item);
    
        let tagLine = '';
    
        if(publishedProfileItems?.length) {
          const updatedPublishedItems = [];
    
          publishedProfileItems.forEach((_item)=> {
            if(profileItems.includes(_item)) {
              if(_item==='corporateHQAddressCountry') {
                updatedPublishedItems.push('Corporate Address');
              } else if(_item==='corporateLocalBranchAddressCountry') {
                updatedPublishedItems.push('Local Address');
              } else {
                updatedPublishedItems.push(_item.replace(/([a-z0-9])([A-Z])/g, '$1 $2'));
              }
            }
          });
    
          tagLine = updatedPublishedItems.join(', ')
        }
    
        return ucwords(tagLine);
      }

  return (<>
      <div className="w-full d-flex justify-content-center align-items-center">
      <div className="row align-items-center jobs-list-item w-full p-0">
        <div className="col-md-2 row align-items-center p-0">
          <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center m-0">
            <i className="fas fa-building" style={{ color: "#ffffff" }}></i>
          </div>
          <p
            className="job-label text-ellipsis"
            style={{ marginLeft: "14px", textTransform: "capitalize", fontWeight: 'bold' }}
          >
              {"Profile"}
          </p>
        </div>
        <div className="col-md-5 align-items-center">
          <p className="job-published-date text-ellipsis" style={{maxWidth: '450px', fontSize: '.850rem'}}>{getProfileItemTagLine(props?.item)}</p>
        </div>
        <div className="col-md-3 item align-items-center">
        <p className="job-published-date" style={{ color: "#454545", fontSize: '.750rem' }}>
          {props?.parentItem?.dateOfPublish
              ? `Published on`
              : "-"}
          </p>
          <p className="job-published-date" style={{ color: "#454545", fontSize: '.750rem' }}>
          {props?.parentItem?.dateOfPublish
              ? `${moment(props?.parentItem?.dateOfPublish).format(
                  "DD-MMM-YYYY"
                )}`
              : "-"}
          </p>
        </div>
        <div className={`col-md-2 row item p-0 d-flex justify-content-between align-items-center w-full`}>
          <div className="vertical-divider" />
          <button
            type="button"
            className="btn d-flex justify-content-around align-items-center"
            style={{
              height: "30px",
              width: "100px",
              fontSize: ".700rem",
              marginRight: "10px",
              borderRadius: "4px",
              textTransform: "uppercase",
              fontWeight: "bolder",
            }}
            onClick={() => {
              setShowModal(true);
            }}
          >
            <p>Details</p>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      </div>
      {showModal ? <CustomModal show={showModal} modalStyles={{ minWidth: "80%" }}>
            <div className="d-flex justify-content-between align-items-center">
              <div></div>
              <div className="align-self-center">  
                <p
                  className="heading"
                  style={{ padding: 15}}
                >
                  Published Profile Information
                </p>
              </div>
              <button
                type="button"
                className="close m-2"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {basicForm && <BasicFormItem lookUpData={props?.lookUpData} profileData={props?.item} />}
            {address && <AddressAndContactFormItem lookUpData={props?.lookUpData} profileData={props?.item} />}
            {profile && <ProfileFormItem lookUpData={props?.lookUpData} profileData={props?.item} />}
      </CustomModal> : null}
      </>);
}

export default ProfileItem;
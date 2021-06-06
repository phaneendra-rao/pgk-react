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
      if(publishedProfileItems.some((_item)=>['CIN', 'corporateCategory', 'corporateIndustry', 'corporateType', 'dateOfJoining'].includes(_item))) {
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
    <div
        className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full"
        key={props?.index}
      >
        <div className="item d-flex flex-row justify-content-between align-items-center w-full">
          <div className="job-icon d-flex justify-content-center align-items-center">
            <i className="fas fa-building" style={{ color: "#004FD0" }}></i>
          </div>
          <p className="job-label">{"Profile"}</p>
          <p className="job-published-date" style={{textOverflow:'ellipsis', fontWeight: 'bold'}}>{getProfileItemTagLine(props?.item)}</p>
          <p className="job-published-date">
          {props?.parentItem?.dateOfPublish
                ? `Published on ${moment(props?.parentItem?.dateOfPublish).format(
                    "DD-MM-YYYY"
                  )}`
                : "-"}
          </p>
        </div>
        <div className="vertical-divider"></div>
        <div className="job-list-item-details-container d-flex flex-row justify-content-center align-items-center">
        <button
              type="button"
              className="btn d-flex justify-content-around align-items-center"
              style={{
                height: "30px",
                maxWidth: "100px",
                fontSize: ".600rem",
                borderRadius: "4px",
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
      {<CustomModal show={showModal} modalStyles={{ minWidth: "80%" }}>
            <div className="d-flex justify-content-end align-items-center">
              <div className="align-self-center">  
                <p
                  className="heading"
                  style={{ padding: 15, marginRight: 250 }}
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
            {basicForm && <BasicFormItem profileData={props?.item} />}
            {address && <AddressAndContactFormItem profileData={props?.item} />}
            {profile && <ProfileFormItem profileData={props?.item} />}
      </CustomModal>}
      </>);
}

export default ProfileItem;
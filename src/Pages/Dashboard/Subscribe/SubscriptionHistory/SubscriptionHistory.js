import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionSagaGetCorporateUniversitySubscriptionRequest } from "../../../../Store/Actions/SagaActions/SubscriptionSagaAction";
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';

import OtherInformationItem from '../Components/OtherInformationItem';
import UniversityItem from '../Components/UniversityItem';
import StudentListItem from '../Components/StudentListItem';
import CampusHiringItem from '../Components/CampusHiringItem';
import ProfileInfoItem from '../Components/ProfileInfoItem';

import PgkTextField from '../../../../Components/FormFields/PgkTextField';
import PgkSelectField from '../../../../Components/FormFields/PgkSelectField';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const SubscriptionHistory = () => {
  const dispatch = useDispatch();
  const [subscriptionList, setSubscriptionList] = useState([]);
  const [filter, setFilter] = useState({
    stakeholderType: undefined,
    subscriptionType: undefined,
    stakeholderName: undefined
  })
  const [lookUpData, setLookUpData] = useState();


  const getAllSubscriptions = (response) => {
    if (response?.length) {
      setSubscriptionList(response);
    }
  };

  useEffect(() => {
    dispatch(
      actionSagaGetCorporateUniversitySubscriptionRequest({
        callback: getAllSubscriptions,
      })
    );
  }, []);

  useEffect(() => {
    dispatch(actionGetDependencyLookUpsSagaAction({
        apiPayloadRequest: ['subscriptionType', 'sortBy', 'stakeholderType'],
        callback: (list) => {
            if(list) {
                setLookUpData(list);
            }
        }
    }));
  }, []);

  const handleFilterChange = (name, value, errorMessage=undefined) => {
    setFilter(prevState=>({
      ...prevState,
      [name]: value
  }));
  }

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <div className="single-university-section">
        <div
          className="univ-subscription-history-stripe"
          style={{ backgroundColor: "transparent", marginTop: "10px" }}
        >
          <p
            className="label"
            style={{ color: "grey", fontSize: "1.2rem", fontWeight: 500 }}
          >
            Subscription History
          </p>
        </div>
        <div className={'blueHeaderStrip'}>
          <div className={'row'}>
            <div className={'col-md-2 item'}>
              <div className={'d-grp'}>
                <PgkSelectField 
                    name="stakeholderType"
                    value={filter?.stakeholderType}
                    onChange={handleFilterChange}
                    label={`Stakeholder Type`}
                    options={lookUpData?.stakeholderType?.length ? lookUpData?.stakeholderType?.map((item)=>{
                      return {value: item.stakeholderTypeCode, label: item.stakeholdertypeName}
                    }) : []}
                    labelStyles={{fontSize: '.800rem', backgroundColor: 'white', padding: '0px 3px 0px 3px'}}
                    selectStyles={{fontSize: '.800rem', backgroundColor: 'white'}}
                    menuStyles={{fontSize: '.800rem'}}
                />
              </div>
            </div>
            <div className={'col-md-2 item'}>
              <div className={'d-grp'}>
                <PgkSelectField 
                    name="subscriptionType"
                    value={filter?.subscriptionType}
                    onChange={handleFilterChange}
                    label={`Subscription Type`}
                    options={lookUpData?.subscriptionType?.length ? lookUpData?.subscriptionType?.map((item)=>{
                      if(['CR', 'SD', 'UI', 'UO', 'UP'].includes(item.subscriptionTypeCode)) {
                        return {value: item.subscriptionTypeCode, label: item.subscriptionType}
                      }
                    }) : []}
                    labelStyles={{fontSize: '.800rem', backgroundColor: 'white', padding: '0px 3px 0px 3px'}}
                    selectStyles={{fontSize: '.800rem', backgroundColor: 'white'}}
                    menuStyles={{fontSize: '.800rem'}}
                />
              </div>
            </div>
            <div className={'col-md-3 item'}>
              <div className={'d-grp'}>
                <PgkTextField
                  name="stakeholderName"
                  value={filter?.stakeholderName}
                  onChange={handleFilterChange}
                  label={"Name of the Stakeholder"}
                  inputLabelProps={{style:{fontSize: '.800rem', backgroundColor: '#ffffff',}}}
                  inputProps={{style:{fontSize: '.800rem', backgroundColor: '#ffffff', borderRadius: '4px'}}}
                />
              </div>
            </div>
            <div className={'col-md-2 item'}>
              <div className={'d-grp'}>
                <PgkSelectField 
                    name="sortBy"
                    value={filter?.sortBy}
                    onChange={handleFilterChange}
                    label={`Sort By`}
                    options={lookUpData?.sortBy?.length ? lookUpData?.sortBy?.map((item)=>{
                      if(['TA', 'TD'].includes(item.sortByCode)) {
                        return {value: item.sortByCode, label: item.sortBy} 
                      }
                    }) : []}
                    labelStyles={{fontSize: '.800rem', backgroundColor: 'white', padding: '0px 3px 0px 3px'}}
                    selectStyles={{fontSize: '.800rem', backgroundColor: 'white'}}
                    menuStyles={{fontSize: '.800rem'}}
                />
              </div>
            </div>
            <div className={'col-md-1 item'}>
            </div>
            <div className={'col-md-2 item'}>
            </div>
          </div>
        </div>
        <div className="row w-full">
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor={'primary'}
            style={{backgroundColor: 'white', width: '100%'}}
          >
            <Tab label="Campus Drive" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
            <Tab label="Other Information" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
            <Tab label="Student List" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
            <Tab label="Profile" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
          </Tabs>
        </div>
        <div className={'row'}>
          {tabValue===0 && <div className="univ-subscription-list-container d-flex flex-column align-items-center w-full">
            {!subscriptionList?.some(item => item?.generalNote==='Campus Hiring') && "No subscriptions subscribed yet"}
            {subscriptionList.length &&
              subscriptionList.map((item, index) => {
                if(item?.generalNote==='Campus Hiring') {
                  return <CampusHiringItem item={item} index={index} />;
                }
            })}
          </div>}
          {tabValue===1 && <div className="univ-subscription-list-container d-flex flex-column align-items-center w-full">
            {!subscriptionList?.some(item => !['Other Information', 'University Information'].includes(item?.generalNote)) && "No subscriptions subscribed yet"}
            {subscriptionList.length &&
              subscriptionList.map((item, index) => {
                switch (item?.generalNote) {
                  case "Other Information":
                    return <OtherInformationItem item={item} index={index} getDetails />;
                  case "University Information":
                    return <UniversityItem item={item} index={index} />;
                  default:
                    return undefined;
                }
              })}
          </div>}
          {tabValue===2 && <div className="univ-subscription-list-container d-flex flex-column align-items-center w-full">
            {!subscriptionList?.some(item => item?.generalNote==='Student Database') && "No subscriptions subscribed yet"}
            {subscriptionList.length &&
              subscriptionList.map((item, index) => {
                switch (item?.generalNote) {
                  case "Student Database":
                    return <StudentListItem item={item} index={index} />;
                  default:
                    return undefined;
                }
              })}
          </div>}
          {tabValue===3 && <div className="univ-subscription-list-container d-flex flex-column align-items-center w-full">
            {!subscriptionList?.some(item => item?.generalNote==='Profile') && "No subscriptions subscribed yet"}
            {subscriptionList.length &&
              subscriptionList.map((item, index) => {
                switch (item?.generalNote) {
                  case "Profile":
                    return <ProfileInfoItem item={item} getDetails />;
                  default:
                    return undefined;
                }
              })}
          </div>}
        </div>
      </div>
    </>
  );
};

export default SubscriptionHistory;

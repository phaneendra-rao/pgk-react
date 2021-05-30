import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionSagaGetCorporateUniversitySubscriptionRequest } from "../../../../Store/Actions/SagaActions/SubscriptionSagaAction";

import OtherInformationItem from '../Components/OtherInformationItem';
import UniversityItem from '../Components/UniversityItem';
import StudentListItem from '../Components/StudentListItem';
import CampusHiringItem from '../Components/CampusHiringItem';

const SubscriptionHistory = () => {
  const dispatch = useDispatch();
  const [subscriptionList, setSubscriptionList] = useState([]);

  const getAllSubscriptions = (response) => {
    console.log("response ", response);
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
                <select name="stakeholderType" className="d-inp" value={""}>
                  <option value="">Stakeholder Type</option>
                </select>
                <label className="inp-caption">{`Stakeholder Type`}</label>
              </div>
            </div>
            <div className={'col-md-2 item'}>
              <div className={'d-grp'}>
                <select name="subscriptionType" className="d-inp" value={""}>
                  <option value="">Subscription Type</option>
                </select>
                <label className="inp-caption">{`Subscription Type`}</label>
              </div>
            </div>
            <div className={'col-md-3 item'}>
              <div className={'d-grp'}>
              <input
                type="text"
                name="stakeholderName"
                value={''}
                onChange={()=>{}}
                className="d-inp"
                required
              />
              <label className="inp-caption">{`Name of the Stakeholder`}</label>
              </div>
            </div>
            <div className={'col-md-3 item'}>
            </div>
            <div className={'col-md-2 item'}>
              <div className={'d-grp'}>
                <select name="sortBy" className="d-inp" value={""}>
                  <option value="">Sort By</option>
                </select>
                <label className="inp-caption">{`Sort By`}</label>
              </div>
            </div>
          </div>
        </div>
        <div className={'row'}>
          <div className="univ-subscription-list-container d-flex flex-column align-items-center w-full">
            {!subscriptionList.length && "No subscriptions subscribed yet"}

            {subscriptionList.length &&
              subscriptionList.map((item, index) => {
                switch (item?.generalNote) {
                  case "Other Information":
                    return <OtherInformationItem item={item} index={index} />;
                  case "Profile":
                    return "";
                  case "University Information":
                    return <UniversityItem item={item} index={index} />;
                  case "Student Database":
                    return <StudentListItem item={item} index={index} />;
                  case "Campus Hiring":
                      return <CampusHiringItem item={item} index={index} />;
                  default:
                    return undefined;
                }
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionHistory;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionSagaGetCorporateUniversitySubscriptionRequest } from "../../../../Store/Actions/SagaActions/SubscriptionSagaAction";

import OtherInformationItem from '../Components/OtherInformationItem';
import UniversityItem from '../Components/UniversityItem';
import StudentListItem from '../Components/StudentListItem';

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
      <div className="row single-university-section">
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
                  console.log('student ', item);
                  return <StudentListItem item={item} index={index} />;
                default:
                  return undefined;
              }
            })}
        </div>
      </div>
    </>
  );
};

export default SubscriptionHistory;

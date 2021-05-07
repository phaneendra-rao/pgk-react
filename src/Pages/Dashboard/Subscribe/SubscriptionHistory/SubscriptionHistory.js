import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionSagaGetCorporateUniversitySubscriptionRequest } from "../../../../Store/Actions/SagaActions/SubscriptionSagaAction";

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

  const getUniversityItem = (item) => {
    return (
      <div className="univ-sub-item d-flex justify-content-between align-items-center">
        <div className="sub-type-container d-flex">
          <i className="fas fa-file-certificate icon" />
          <p className="sub-label">University Information</p>
        </div>
        <div className="vertical-border" />
        <div className="name-address d-flex flex-column align-items-start">
          <p className="title">Osmania University</p>
          <p className="sub-title">
            <i className="fas fa-map-marker-alt" /> Amberpet, Hyderabad
          </p>
        </div>
        <div className="vertical-border" />
        <div className="sub-item-container d-flex flex-column align-items-center">
          <p className="title">University ID</p>
          <p className="sub-title">XXXX2002</p>
        </div>
        <div className="vertical-border" />
        <div className="view-info-btn">View Information</div>
      </div>
    );
  };

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
            subscriptionList.map((item) => {
              switch (item?.generalNote) {
                case "Other Information":
                  return "haha";
                case "Profile":
                  return "haha";
                case "University Information":
                  return "haha";
                case "Student Database":
                  return "haha";
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

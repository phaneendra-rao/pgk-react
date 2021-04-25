import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import HiringCriteriaListItem from "./HiringCriteriaListItem";

import { HiringSagaAction } from "../../../../Store/Actions/SagaActions/HiringSagaAction";

const PublishHiringCriteria = (props) => {
  const dispatch = useDispatch();
  const [hiringCriteriaList, setHiringCriteriaList] = useState([]);
  const [
    publishedHiringCriteriaList,
    setPublishedHiringCriteriaList,
  ] = useState([]);

  const onHiringCriteriaResponse = (response) => {
    console.log("response ", response);
    if (response?.length) {
      let updatedHiringCriteriaList = [];
      let updatedPublishedHiringCriteriaList = [];

      response.forEach((item) => {
        if (item?.publishedFlag === false) {
          updatedHiringCriteriaList.push(item);
        } else if (item?.publishedFlag === true) {
          updatedPublishedHiringCriteriaList.push(item);
        }
      });

      setHiringCriteriaList(updatedHiringCriteriaList);
      setPublishedHiringCriteriaList(updatedPublishedHiringCriteriaList);
    }
  };

  const getAllHiringCriteria = () => {
    dispatch(
      HiringSagaAction({
        callback: onHiringCriteriaResponse,
      })
    );
  };

  useEffect(() => {
    getAllHiringCriteria();
  }, []);

  return (
    <>
      <div className="page-body" style={{ marginTop: 30 }}>
        <div
          className="row published-jobs-section"
          style={{ marginTop: 0, paddingTop: 0 }}
        >
          <div
            className="d-flex flex-column justify-content-start align-items-center w-full"
            style={{ marginTop: 0, paddingTop: 0 }}
          >
            <p className="heading" style={{ fontWeight: "bold" }}>
              Publish Hiring Criteria
            </p>
            
            {hiringCriteriaList?.length &&
              hiringCriteriaList.map((item, index) => {
                return <HiringCriteriaListItem key={index} item={item} />;
              })}
          </div>
        </div>
      </div>
      <div className="row jobs-saved-section">
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full">Jobs Saved</p>
        </div>
      </div>
      <div className="row jobs-saved-section-list">
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="no-list-message w-full">
            No jobs saved to display here
          </p>
        </div>
      </div>
    </>
  );
};

export default PublishHiringCriteria;

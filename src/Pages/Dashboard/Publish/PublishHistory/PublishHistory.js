import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actionGetPublishHistoryRequest } from "../../../../Store/Actions/SagaActions/PublishHistorySagaActions";
import { HiringSagaAction } from "../../../../Store/Actions/SagaActions/HiringSagaAction";

import HiringCriteriaItem from './HiringCriteriaItem';
import ProfileItem from './ProfileItem/ProfileItem';
import OtherInformation from './OtherInformationItem';
import JobItem from './JobItem';

const PublishHistory = (props) => {
  const dispatch = useDispatch();
  const [historyList, setHistoryList] = useState([]);
  const [hiringCriteriaList, setHiringCriteriaList] = useState([]);

  const onResponseReceived = (response) => {
    if (response?.length) {
      setHistoryList(response);
    }
  };

  const getAllHirings = (data) => {
    if (data?.length) {
      setHiringCriteriaList(data);
    }
  };

  useEffect(() => {
    dispatch(HiringSagaAction({ callback: getAllHirings }));

    dispatch(
      actionGetPublishHistoryRequest({
        callback: onResponseReceived,
      })
    );
  }, [dispatch]);


  const getListItem = (listItem, index) => {
    if (listItem?.hiringCriteriaPublished) {
      return <HiringCriteriaItem parentItem={listItem} item={JSON.parse(listItem?.publishData)} index={index}/>
    } else if (listItem?.jobsPublished) {
      return <JobItem parentItem={listItem} item={JSON.parse(listItem?.publishData)} hiringCriteriaList={hiringCriteriaList} index={index} />
    } else if (listItem?.otherPublished) {
      return <OtherInformation parentItem={listItem} item={JSON.parse(listItem?.publishData)} index={index} />
    } else if (listItem?.profilePublished) {
        console.log('JSON.parse(listItem?.publishData) ', JSON.parse(listItem?.publishData));
        return <ProfileItem parentItem={listItem} item={JSON.parse(listItem?.publishData)} index={index} />
    } else {
      return undefined;
    }
  };

  return (
    <>
      <div className="page-body" style={{ marginTop: 30 }}>
        <div className="row" style={{ marginTop: 0, paddingTop: 0 }}>
          <div
            className="d-flex flex-column justify-content-start align-items-center w-full"
            style={{ marginTop: 0, paddingTop: 0 }}
          >
            <p
              className="heading"
              style={{ fontWeight: "bold", marginBottom: 30 }}
            >
              Publish History
            </p>
            {historyList?.length ? (
              historyList.map((listItem, index) => getListItem(listItem, index))
            ) : (
              <div className="row jobs-saved-section-list">
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                  <p className="no-list-message w-full">
                    Nothing to display here
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PublishHistory;

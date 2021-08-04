import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actionGetPublishHistoryRequest } from "../../../../Store/Actions/SagaActions/PublishHistorySagaActions";
import { HiringSagaAction } from "../../../../Store/Actions/SagaActions/HiringSagaAction";
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import HiringCriteriaListItem from '../Components/HiringCriteriaListItem';
import JobListItem from '../Components/JobsListItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import HiringCriteriaItem from './HiringCriteriaItem';
import ProfileItem from './ProfileItem/ProfileItem';
import OtherInformation from './OtherInformationItem';
import JobItem from './JobItem';

const PublishHistory = (props) => {
  const dispatch = useDispatch();
  const [historyList, setHistoryList] = useState([]);
  const [hiringCriteriaList, setHiringCriteriaList] = useState([]);
  const [lookUpData, setLookUpData] = useState([]);
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

  useEffect(() => {
    dispatch(actionGetDependencyLookUpsSagaAction({
        apiPayloadRequest: [
          'branchCatalog', 
          'programCatalog', 
          "corporateType",
          "corporateCategory",
          "corporateIndustry",
        ],
        callback: dropdowns
    }));
  }, []);

  const dropdowns = (data) => {
    setLookUpData(data);
  }


  const getListItem = (listItem, index, type) => {
    if (listItem?.hiringCriteriaPublished && type==='HC') {
      return <HiringCriteriaListItem parentItem={listItem} lookUpData={lookUpData} item={JSON.parse(listItem?.publishData)} index={index}/>
    } else if (listItem?.jobsPublished && type==='JOBS') {
      return <JobListItem parentItem={listItem} item={JSON.parse(listItem?.publishData)} hiringCriteriaList={hiringCriteriaList} index={index} />
    } else if (listItem?.otherPublished && type==='OI') {
      return <OtherInformation parentItem={listItem} item={JSON.parse(listItem?.publishData)} index={index} />
    } else if (listItem?.profilePublished && type==='PROFILE') {
        return <ProfileItem parentItem={listItem} lookUpData={lookUpData} item={JSON.parse(listItem?.publishData)} index={index} />
    } else {
      return undefined;
    }
  };

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
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
              style={{ fontWeight: "bold"}}
            >
              Publish History
            </p>
            <div className="row w-full">
              <Tabs
                value={tabValue}
                onChange={handleChange}
                indicatorColor={'primary'}
                style={{backgroundColor: 'white', width: '100%'}}
              >
                <Tab label="Hiring Criteria" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
                <Tab label="Jobs" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
                <Tab label="Other Information" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
                <Tab label="Profile" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
              </Tabs>
            </div>

            {tabValue === 0 && <div className={'w-full'}>
              {historyList?.length ? (
                historyList.map((listItem, index) => getListItem(listItem, index, 'HC'))
              ) : (
                <div className="row jobs-saved-section-list">
                  <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="no-list-message w-full">
                      Nothing to display here
                    </p>
                  </div>
                </div>
              )}
            </div>}

            {tabValue === 1 && <div className={'w-full'}>
              {historyList?.length ? (
                historyList.map((listItem, index) => getListItem(listItem, index, 'JOBS'))
              ) : (
                <div className="row jobs-saved-section-list">
                  <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="no-list-message w-full">
                      Nothing to display here
                    </p>
                  </div>
                </div>
              )}
            </div>}

            {tabValue === 2 && <div className={'w-full'}>
              {historyList?.length ? (
                historyList.map((listItem, index) => getListItem(listItem, index, 'OI'))
              ) : (
                <div className="row jobs-saved-section-list">
                  <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="no-list-message w-full">
                      Nothing to display here
                    </p>
                  </div>
                </div>
              )}
            </div>}

            {tabValue === 3 && <div className={'w-full'}>
              {historyList?.length ? (
                historyList.map((listItem, index) => getListItem(listItem, index, 'PROFILE'))
              ) : (
                <div className="row jobs-saved-section-list">
                  <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="no-list-message w-full">
                      Nothing to display here
                    </p>
                  </div>
                </div>
              )}
            </div>}

          </div>
        </div>
      </div>
    </>
  );
};

export default PublishHistory;

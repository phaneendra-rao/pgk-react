import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import JobsListItem from "../Components/JobsListItem";
import {
  GetJobsSagaAction,
  actionPostPublishCorporateJobsRequest,
  GetJobByIdSagaAction,
} from "../../../../Store/Actions/SagaActions/JobsSagaAction";
import { HiringSagaAction } from "../../../../Store/Actions/SagaActions/HiringSagaAction";
import CustomModal from "../../../../Components/CustomModal";
import moment from "moment";
import CustomToastModal from "../../../../Components/CustomToastModal";
import Checkbox from '@material-ui/core/Checkbox';
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const PublishJobs = () => {
  const [hiringCriteriaList, setHiringCriteriaList] = useState([]);
  const [jobsList, setJobsList] = useState([]);
  const [singleJob, setSingleJob] = useState();
  const [singleJobSkills, setSingleJobSkills] = useState([]);
  const [showSingleJobDetails, setShowSingleJobDetails] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showToastModal, setShowToastModal] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);

  const dispatch = useDispatch();

  const [lookUpData, setLookUpData] = useState([]);

  useEffect(() => {
    getHiring();
    dispatch(actionGetDependencyLookUpsSagaAction({
        apiPayloadRequest: ['skills', 'jobType'],
        callback: dropdowns
    }));
  }, []);

  const dropdowns = (data) => {
    setLookUpData(data);
  }

  const onJobsResponse = (response) => {
    if (response?.length) {
      setJobsList(response);
    }
  };

  const getJobs = () => {
    dispatch(
      GetJobsSagaAction({
        callback: onJobsResponse,
      })
    );
  };

  const getJobByIdResp = (response) => {
    setSingleJob(response);
    if(response?.skillsInString?.trim()!=='' && JSON.parse(response.skillsInString)) {
      setSingleJobSkills(JSON.parse(response.skillsInString));
    }
    setShowModal(true);
  };

  const getJobById = (id) => {
    dispatch(
      GetJobByIdSagaAction({ apiPayloadRequest: id, callback: getJobByIdResp })
    );
  };

  const getAllHirings = (data) => {
    if (data?.length) {
      setHiringCriteriaList(data);
    }
  };

  const getHiring = () => {
    dispatch(HiringSagaAction({ callback: getAllHirings }));
  };

  useEffect(() => {
    getJobs();
    getHiring();
  }, []);

  const onCheckHandler = (id) => {
    let updatedSelectedItems = [...selectedItems];

    if (updatedSelectedItems.includes(id)) {
      var deleteItemIndex = updatedSelectedItems.indexOf(id);
      if (deleteItemIndex > -1) {
        updatedSelectedItems.splice(deleteItemIndex, 1);
      }
    } else {
      updatedSelectedItems.push(id);
    }

    setSelectedItems(updatedSelectedItems);
    setSelectAll(updatedSelectedItems.length === jobsList.length);
  };

  const onPublishSuccess = () => {
    getJobs();
    setShowModal(false);
    setShowToastModal(true);
  };

  const publishSelectedItems = (items) => {
    dispatch(
      actionPostPublishCorporateJobsRequest({
        apiPayloadRequest: items,
        callback: onPublishSuccess,
      })
    );
  };

  const publishSelected = () => {
    if (selectedItems.length) {
    let updatedSelectedItems = [];

      jobsList.forEach((item) => {
        if (selectedItems.includes(item.jobID)) {
          updatedSelectedItems.push({ jobID: item.jobID });
        }
      });

      if (updatedSelectedItems?.length) {
        publishSelectedItems(updatedSelectedItems);
      }
    }
  };

  const finalSubmit = (id) => {
    let updatedSelectedItems = [];
    jobsList.forEach((item) => {
      if (item && item.jobID === id) {
        updatedSelectedItems.push({ jobID: item.jobID });
      } 
    });

    if (updatedSelectedItems?.length) {
      publishSelectedItems(updatedSelectedItems);
    }
  };

  const onSelect = (id) => {
    let updatedSelectedItems = [...selectedItems];

    if (id === "ALL") {
      updatedSelectedItems = [];

      if (selectAll === false) {
        jobsList.forEach((item) => {
          updatedSelectedItems.push(item?.jobID);
        });
      }
      setSelectedItems(updatedSelectedItems);
      setSelectAll(!selectAll);
    } else {
      setSelectedItems(updatedSelectedItems);
    }
  };

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <div className="page-body" style={{ marginTop: 30 }}>
      <p className="heading text-center" style={{fontWeight: "bold"}}>Publish Jobs</p>
      <div className="row">
        <Tabs
          value={tabValue}
          onChange={handleChange}
          indicatorColor={'primary'}
          style={{backgroundColor: 'white', width: '100%'}}
        >
          <Tab label="Publish Jobs" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
          <Tab label="Publish Jobs History" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
        </Tabs>
      </div>
      {tabValue===0 && <div className="row published-jobs-section">
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          {(jobsList?.length && jobsList.some((item)=>!item.publishedFlag)) ? (
            <div className="w-full d-flex justify-content-start align-content-center publish-selected-btn-container">
              <Checkbox size={'small'} color={'primary'} checked={selectAll} onChange={(e)=>{
                  onSelect("ALL");
              }} />
              <button
                type="button"
                className="btn"
                style={{ height: "35px", width: "100px", fontSize: ".700rem" }}
                onClick={publishSelected}
              >
                Publish Selected
              </button>
            </div>
          ) : (<div className="row jobs-saved-section-list">
          <div className="d-flex flex-column justify-content-start align-items-center w-full">
            <p className="no-list-message w-full">
              Create a new job to publish
            </p>
          </div>
        </div>)
        }
          {jobsList?.length &&
            jobsList.map((item, index) => {
              if(!item.publishedFlag) {
                return (
                  <JobsListItem
                    key={index}
                    item={item}
                    hiringCriteriaList={hiringCriteriaList}
                    lookUpData={lookUpData}
                    checkHandler={onCheckHandler}
                    onPublish={() => {
                      finalSubmit(item.jobID);
                    }}
                    isCheck={selectedItems.includes(item?.jobID) ? true : false}
                  />
                );
              }
            })}
        </div>
      </div>}
      {tabValue===1 && <div style={{padding: '12px'}}>
        {jobsList?.length &&
          jobsList.map((item, index) => {
            if(item.publishedFlag) {
              return (
                <JobsListItem
                  key={index}
                  item={item}
                  hiringCriteriaList={hiringCriteriaList}
                  lookUpData={lookUpData}
                />
              );
            }
          })}
     </div>}

      {<CustomToastModal
        onClose={() => {
            setShowToastModal(false);
        }}
        show={showToastModal}
        iconNameClass={"fa-briefcase"}
        message={"Selected Job/Jobs Have been Published Successfully"}
      />}
      </div>
    </>
  );
};

export default PublishJobs;

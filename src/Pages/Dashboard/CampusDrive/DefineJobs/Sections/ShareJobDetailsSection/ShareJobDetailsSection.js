import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {actionGetCampusDriveDefineJobsListRequestSaga, actionPostOrPatchCampusDriveHiringCriteriaRequestSaga, actionPostOrPatchCampusDriveJobRequestSaga} from '../../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import {actionGetCampusDriveHiringCriteriaListRequestSaga, actionDeleteCampusDriveJobRequestSaga, actionPublishJobsCampusDriveRequestSaga, actionGetStudentsListCampusDriveRequestSaga} from '../../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import HiringCriteriaFormSection from "../../Components/HiringCriteriaFormSection";
import JobFormSection from "../../Components/JobFormSection";
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import CustomToastModal from "../../../../../../Components/CustomToastModal";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Checkbox from '@material-ui/core/Checkbox';
import StudentsListSection from './StudentsListSection';

const ShareJobDetailsSection = (props) => {

  const dispatch = useDispatch();
  const [section, setSection] = useState({
    firstSection: false,
    secondSection: false
  });
  const [hiringCriteriaList, setHiringCriteriaList] = useState([{hiringCriteriaID: 'ADD_NEW_HC', hiringCriteriaName: 'Add New', iconName: 'fa-plus'}]);
  const [selectedHcId, setSelectedHcId] = useState();
  const [selectedJob, setSelectedJob] = useState();
  const [jobsList, setJobsList] = useState([]);
  const [toastModal, setToastModal] = useState(false);
  const [showToastModal, setShowToastModal] = useState(false);
  const [mode, setMode] = useState('ADD');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showStudentsList, setShowStudentsList] = useState(false);
  const [studentsList, setStudentsList] = useState([]);

  useEffect(()=>{
    getAllJobs();
    getHiringCriteriaList();
  }, []);

  const getAllJobs = () => {
    dispatch(actionGetCampusDriveDefineJobsListRequestSaga({
      campusDriveId: props?.campusDriveId,
      callback: (response) => {
        if(response?.length) {
          setJobsList(response);
        }
      }
    }));
  }

  const getHiringCriteriaList = () => {
    dispatch(actionGetCampusDriveHiringCriteriaListRequestSaga({
      apiPayloadRequest: {
        campusDriveId: props.campusDriveId
      },
      callback: (hcResponseList) => {
        if(hcResponseList?.length) {
          setHiringCriteriaList([...hcResponseList, {hiringCriteriaID: 'ADD_NEW_HC', hiringCriteriaName: 'Add New', iconName: 'fa-plus'}]);
        }
      }
    }))
  }

  const submitHcData = (data) => {
    if(['EDIT', 'ADD'].includes(mode)) {
      dispatch(actionPostOrPatchCampusDriveHiringCriteriaRequestSaga({
        apiPayloadRequest: {
          ...data, 
          cdID: props?.campusDriveId
        },
        callback: (hcResponse) => {
          if (hcResponse?.hiringCriteriaID) {
            setSelectedHcId(hcResponse.hiringCriteriaID)
            setSection({
              firstSection: false,
              secondSection: true
            });
          } else if (data?.hiringCriteriaID) {
            setSelectedHcId(data.hiringCriteriaID)
            setSection({
              firstSection: false,
              secondSection: true
            });
          }
  
          getHiringCriteriaList();
        }
      }));
    } else {
      setSection({
        firstSection: false,
        secondSection: true
      });
    }
  }

  const submitJobData = (data) => {
    if(['EDIT', 'ADD'].includes(mode)) {
      dispatch(actionPostOrPatchCampusDriveJobRequestSaga({
        apiPayloadRequest: {
          ...data, 
          cdID: props?.campusDriveId
        },
        callback: (jobResponse) => {
          console.log('jobResponse ', jobResponse);
          setToastModal(true);
          closeWindow();
          getAllJobs();
        }
      }));
    } else {
      closeWindow();
    }
  }

  const closeWindow = () => {
    setSection({
      firstSection: false,
      secondSection: false
    })
  }

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

  const publishSelectedItems = (items) => {
    dispatch(actionPublishJobsCampusDriveRequestSaga({
      apiPayloadRequest: {
        cdID: props?.campusDriveId,
        jobIds: items
      },
      callback: (response) => {
        setShowToastModal(true);
        getAllJobs();
      } 
    }));
  };

  const publishSelected = () => {
    if (selectedItems.length) {
    let updatedSelectedItems = [];

      jobsList.forEach((item) => {
        if (selectedItems.includes(item.jobID)) {
          updatedSelectedItems.push(item.jobID);
        }
      });

      if (updatedSelectedItems?.length) {
        publishSelectedItems(updatedSelectedItems);
      }
    }
  };

  const viewStudentsList = (item) => {
    setSelectedJob(item);
    dispatch(actionGetStudentsListCampusDriveRequestSaga({
      apiPayloadRequest: {
        jobId: item.jobId,
        campusDriveId: props?.campusDriveId
      },
      callback: (response) => {
        setStudentsList(response);
        setShowStudentsList(true);
      }
    }));
  }

  const getJobsList = () => {
    if(jobsList.length) {
      return jobsList.map((item) => {
        return !item.publishFlag && tabValue === 0 ? <div className="d-flex justify-content-between align-items-center w-full cd-job-list-item" style={{maxWidth: '900px', marginBottom: '10px', paddingLeft: '0px'}}>
        
        <div className="row align-items-center">
        <Checkbox
          size={"small"}
          color={"primary"}
          checked={selectedItems.includes(item?.jobID) ? true : false}
          onChange={(e) => {
            onCheckHandler(item?.jobID);
          }}
        />
          <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center" style={{borderRadius: '5px'}}>
              <i className="fas fa-briefcase" style={{color: 'white', padding: '10px'}} />
          </div>
          <p className="job-label text-ellipsis" style={{marginLeft: '14px', maxWidth: '220px', textTransform:'capitalize'}}>{item.jobName}</p>
        </div>
        <div style={{border: '1px solid #cacaca', borderRadius: '4px', padding: '8px 4px', minWidth: '120px'}}>
            <p style={{marginLeft: '10px', textTransform:'capitalize', fontSize: '.800rem'}}>{item.status}</p>
        </div>
        <div className={'d-flex align-items-center'}>
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
                  fontWeight: 'bolder'
              }}
              onClick={() => {
                setMode('VIEW');
                setSelectedHcId(item.hiringCriteriaID);
                setSection({
                  firstSection: true,
                  secondSection: false
                });
                setSelectedJob(item);
              }}
          >
              <p>Details</p>
              <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div> : item.publishFlag && tabValue === 1 ? <div className="d-flex justify-content-between align-items-center w-full cd-job-list-item" style={{maxWidth: '900px', marginBottom: '10px'}}>
          <div className="row align-items-center">
            <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center" style={{borderRadius: '5px'}}>
                <i className="fas fa-briefcase" style={{color: 'white', padding: '10px'}} />
            </div>
            <p className="job-label text-ellipsis" style={{marginLeft: '14px', maxWidth: '220px', textTransform:'capitalize'}}>{item.jobName}</p>
          </div>
          <div className={'row align-items-center'}>
            <p className="job-label" style={{marginLeft: '0px', fontSize: '12px', maxWidth: '220px', textTransform:'capitalize'}}>No of Students: {item?.noOfStudentsApplied} Applied</p>
          </div>
          <div style={{border: '1px solid #cacaca', borderRadius: '4px', padding: '8px 4px', minWidth: '120px'}}>
              <p style={{marginLeft: '10px', textTransform:'capitalize', fontSize: '.800rem'}}>{item.status}</p>
          </div>
          <div className={'d-flex align-items-center'}>
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
                    fontWeight: 'bolder'
                }}
                onClick={() => {
                  viewStudentsList(item)
                }}
            >
                <p>List</p>
                <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div> : undefined
      })
    } else {
      return 
    }
  }

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
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

  return (
    <div className="bgWhite">
        <p className="text-center text-primary p-2">Share Job Details</p>
        {!showStudentsList ? <div className="CD-define-jobs-list">
          {section.firstSection || section.secondSection ? <div className="define-job-modal">
            <div className="define-job-header"><div></div><p className="text-white">Define Job</p><span><i className="fas fa-times-circle text-white" style={{cursor: 'pointer'}} onClick={closeWindow}></i></span></div>
            {section.firstSection ? <HiringCriteriaFormSection
              cancelHandler={closeWindow}
              hiringCriteriaList={hiringCriteriaList}
              submitHandler={submitHcData}
              mode={mode}
              noEditBtn
              saveLabel={'Next'}
              hcId={selectedHcId}
            /> : undefined}
            {section.secondSection ? <JobFormSection noEditBtn selectedJob={selectedJob} mode={mode} hcId={selectedHcId} hiringCriteriaList={hiringCriteriaList} cancelHandler={closeWindow} submitHandler={submitJobData} /> : undefined}
          </div> : undefined}
           {!section.firstSection && !section.secondSection ? <div className="row">
              <Tabs
                value={tabValue}
                onChange={handleChange}
                indicatorColor={'primary'}
                style={{backgroundColor: 'white', width: '100%'}}
              >
                <Tab label="Publish Jobs" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
                <Tab label="Publish Jobs History" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
              </Tabs>
            </div> : undefined} 
          {jobsList.length === 0 && !section.firstSection && !section.secondSection ? <div className="center"><p className="no-list-label">Please add jobs to continue...</p></div> : undefined}
          {(jobsList?.length && !section.firstSection && !section.secondSection && tabValue === 0 && jobsList.some((item)=>!item.publishFlag)) ? (
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
          ) : undefined }
          {jobsList.length && !section.firstSection && !section.secondSection ? getJobsList() : undefined}
        </div> : undefined}
        {showStudentsList ? <StudentsListSection jobItem={selectedJob} studentsList={studentsList} onClose={()=>{
          setShowStudentsList(false);
        }} /> : undefined}
        {toastModal && <CustomToastModal
                onClose={() => {
                    setToastModal(false);
                    setShowToastModal(false);
                }}
                show={toastModal || showToastModal ? true : false}
                iconNameClass={"fa-briefcase"}
                message={showToastModal ? 'Selected Jobs Have Been Published' : toastModal ? props.mode === 'ADD' ? "Job Saved Successfully!" : "Job Updated Successfully!" : ''}
            />}
    </div>
  );
};

export default ShareJobDetailsSection;

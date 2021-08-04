import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {actionGetCampusDriveDefineJobsListRequestSaga, actionPostOrPatchCampusDriveHiringCriteriaRequestSaga, actionPostOrPatchCampusDriveJobRequestSaga} from '../../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import {actionGetCampusDriveHiringCriteriaListRequestSaga, actionDeleteCampusDriveJobRequestSaga, actionPublishJobsCampusDriveRequestSaga, actionGetStudentsListCampusDriveRequestSaga, actionGetDefineJobApplicationWindowById, actionPostDefineJobApplicationWindow} from '../../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import HiringCriteriaFormSection from "../../Components/HiringCriteriaFormSection";
import JobFormSection from "../../Components/JobFormSection";
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import CustomToastModal from "../../../../../../Components/CustomToastModal";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Checkbox from '@material-ui/core/Checkbox';
import ApplicationWindowForm from "./ApplicationWindowForm";

const DefineJobApplicationWindowSection = (props) => {

  const dispatch = useDispatch();
  const [selectedJob, setSelectedJob] = useState(false);
  const [mode, setMode] = useState('ADD');
  const [jobsList, setJobsList] = useState([]);
  const [toastModal, setToastModal] = useState(false);
  const [showToastModal, setShowToastModal] = useState(false);

  useEffect(()=>{
    getAllJobs();
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

  const getSingleWindowDetails = (item) => {
    dispatch(actionGetDefineJobApplicationWindowById({
      apiPayloadRequest: {
        jobID: item?.jobID
      },
      callback: (response) => {
        if(response?.jobApplWindowFromDate && response?.jobApplWindowFromTime && response?.jobApplWindowToDate && response?.jobApplWindowToTime) {
          setSelectedJob({...item, jobApplWindowFromDate: response?.jobApplWindowFromDate, jobApplWindowFromTime: response?.jobApplWindowFromTime, jobApplWindowToDate: response?.jobApplWindowToDate, jobApplWindowToTime: response?.jobApplWindowToTime, accepted: true});
          setMode('VIEW');
        }
      }
    }));
  }

  const getJobsList = () => {
    if(jobsList.length) {
      return jobsList.map((item) => {
        return item.publishFlag && !item.jobAppWindowDefined && tabValue === 0 ? <div className="d-flex justify-content-between align-items-center w-full cd-job-list-item" style={{maxWidth: '900px', marginBottom: '10px'}}>
          <div className="row align-items-center">
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
                  setSelectedJob(item);
                }}
            >
                <p>Define Job Window</p>
            </button>
          </div>
        </div> : item.publishFlag && item.jobAppWindowDefined && tabValue === 1 ? <div className="d-flex justify-content-between align-items-center w-full cd-job-list-item" style={{maxWidth: '900px', marginBottom: '10px'}}>
          <div className="row align-items-center">
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
                  getSingleWindowDetails(item)
                }}
            >
                <p>Details</p>
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

  const submitWindowForm = (windowFormData) => {
    delete windowFormData['accepted'];
    if(mode==='EDIT') {
      windowFormData['update'] = true
    }

    dispatch(actionPostDefineJobApplicationWindow({
      apiPayloadRequest: {
        data: {...windowFormData, cdID: props?.campusDriveId}
      },
      callback: (response) => {
        getAllJobs();
      }
    }))
  }

  return (
    <div className="bgWhite">
        <p className="text-center text-primary p-2">Define Job Window</p>
        {!selectedJob ? <div className="CD-define-jobs-list">
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor={'primary'}
            style={{backgroundColor: 'white', width: '100%', marginBottom: '12px'}}
          >
            <Tab label="Jobs Published" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
            <Tab label="Job Window Defined" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
          </Tabs>
  
            {jobsList.length === 0 && !selectedJob ? <div className="center"><p className="no-list-label">Please add jobs to continue...</p></div> : undefined}
            
            {jobsList.length && !selectedJob ? getJobsList() : undefined}
          </div> : <ApplicationWindowForm openClose={()=>{
            setSelectedJob(false);
          }} job={selectedJob} mode={mode} submit={submitWindowForm} updateMode={(_mode) =>{
            setMode(_mode);
          }} />}
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

export default DefineJobApplicationWindowSection;

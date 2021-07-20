import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {actionGetCampusDriveDefineJobsListRequestSaga, actionPostOrPatchCampusDriveHiringCriteriaRequestSaga, actionPostOrPatchCampusDriveJobRequestSaga} from '../../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import {actionGetCampusDriveHiringCriteriaListRequestSaga, actionDeleteCampusDriveJobRequestSaga} from '../../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import HiringCriteriaFormSection from "../../Components/HiringCriteriaFormSection";
import JobFormSection from "../../Components/JobFormSection";
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import CustomToastModal from "../../../../../../Components/CustomToastModal";

const DefineJobsSection = (props) => {
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
  const [mode, setMode] = useState('ADD');

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
    });
    setSelectedHcId();
    setSelectedJob();
    setMode('ADD');
  }

  const deleteJob = (jobId) => {
    dispatch(actionDeleteCampusDriveJobRequestSaga({
      apiPayloadRequest: {
        jobID: jobId
      },
      callback: (deleteJobResponse) => {
        getAllJobs();
      }
    }))
  }

  const getJobsList = () => {
    if(jobsList.length) {
      return jobsList.map((item) => {
        return <div className="d-flex justify-content-between align-items-center w-full cd-job-list-item" style={{maxWidth: '900px', marginBottom: '10px'}}>
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
            <IconButton style={{color:'white'}} onClick={() => {deleteJob(item.jobID)}} component="span">
              <Close color={'primary'} />
            </IconButton>
          </div>
        </div>
      })
    }
  }

  return (
    <div className="bgWhite">
        <p className="text-center text-primary p-2">Define Jobs</p>
        <div className="CD-define-jobs-list">
          {jobsList.length === 0 && !section.firstSection && !section.secondSection ? <div className="center"><p className="no-list-label">Please add jobs to continue...</p></div> : undefined}
          {section.firstSection || section.secondSection ? <div className="define-job-modal">
            <div className="define-job-header"><div></div><p className="text-white">Define Job</p><span><i className="fas fa-times-circle text-white" style={{cursor: 'pointer'}} onClick={closeWindow}></i></span></div>
            {section.firstSection ? <HiringCriteriaFormSection
              cancelHandler={closeWindow}
              hiringCriteriaList={hiringCriteriaList}
              submitHandler={submitHcData}
              mode={mode}
              hcId={selectedHcId}
              updateMode={(_mode)=>{setMode(_mode)}}
            /> : undefined}
            {section.secondSection ? <JobFormSection selectedJob={selectedJob} mode={mode} updateMode={(_mode)=>{setMode(_mode)}} hcId={selectedHcId} hiringCriteriaList={hiringCriteriaList} cancelHandler={closeWindow} submitHandler={submitJobData} /> : undefined}
          </div> : undefined}
          {jobsList.length && !section.firstSection && !section.secondSection ? getJobsList() : undefined}
        </div>
        {!section.firstSection && !section.secondSection ? <div className="row add-btn">
          <button type="button" onClick={()=>{
              setSection({
                firstSection: true,
                secondSection: false
              });
          }} className="btn">Add new Job</button>
        </div> : undefined}

        {toastModal && <CustomToastModal
                onClose={() => {
                    setToastModal(false);
                }}
                show={toastModal ? true : false}
                iconNameClass={"fa-briefcase"}
                message={toastModal ? props.mode === 'ADD' ? "Job Saved Successfully!" : "Job Updated Successfully!" : ''}
            />}
    </div>
  );
};

export default DefineJobsSection;

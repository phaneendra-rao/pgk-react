import React, {useState, useEffect} from "react";
import moment from "moment";
import Checkbox from "@material-ui/core/Checkbox";
import CustomDialogPopup from '../../../../Components/CustomDialogPopup';
import {  GetJobByIdSagaAction } from '../../../../Store/Actions/SagaActions/JobsSagaAction';
import { useDispatch } from 'react-redux'
import AddJobs from '../../CreateJob/Jobs/AddJobs';

const jobFormFields = ['jobName', 'jobType', 'skills', 'hiringCriteria', 'salaryMinRange', 'salaryMaxRange', 'monthOfHiring', 'remarks', 'attachment', 'status', 'noOfPositions', 'location'];

const JobsListItem = (props) => {
  const initialJobFormData = {
    jobName: {
        value: undefined,
        isRequired: true,
        isDisabled: false,
        errorMessage: undefined
    },
    jobType: {
        value: undefined,
        isRequired: true,
        isDisabled: false,
        errorMessage: undefined
    },
    skills: {
        value: [],
        isRequired: true,
        isDisabled: false,
        errorMessage: undefined
    },
    hiringCriteria: {
        value: undefined,
        isRequired: true,
        isDisabled: false,
        errorMessage: undefined
    },
    salaryMinRange: {
        value: undefined,
        isRequired: true,
        isDisabled: false,
        errorMessage: undefined
    },
    salaryMaxRange: {
        value: undefined,
        isRequired: true,
        isDisabled: false,
        errorMessage: undefined
    },
    monthOfHiring: {
        value: undefined,
        isRequired: true,
        isDisabled: false,
        errorMessage: undefined
    },
    remarks: {
        value: undefined,
        isRequired: false,
        isDisabled: false,
        errorMessage: undefined
    },
    attachment: {
        value: undefined,
        isRequired: true,
        isDisabled: false,
        errorMessage: undefined
    },
    status: {
        value: 'open',
        isRequired: true,
        isDisabled: true,
        errorMessage: undefined
    },
    noOfPositions: {
        value: undefined,
        isRequired: true,
        isDisabled: false,
        errorMessage: undefined
    },
    location: {
        value: undefined,
        isRequired: true,
        isDisabled: false,
        errorMessage: undefined
    }
}


const [jobFormData, setJobFormData] = useState(initialJobFormData);
const [mode, setMode] = useState('ADD');
const [isModalOpen, setIsModalOpen] = useState(false);

const dispatch = useDispatch();


const openCloseJobModal = (_mode = 'CLOSE') => {
  if(_mode==='CLOSE') {
      setJobFormData(initialJobFormData);
      setMode();
  } else {
      setMode(_mode);
  }
  setIsModalOpen(!isModalOpen);
}

const viewDetails = (id) => {
  dispatch(GetJobByIdSagaAction({ apiPayloadRequest: id, callback: (jobDetailsResponse)=>{

      let updatedJobData = initialJobFormData;

      if(jobDetailsResponse?.jobID) {
          jobFormFields.forEach((item)=>{
              if(item==='attachment') {
                  updatedJobData[item] = {
                      ...initialJobFormData[item],
                      value: {
                          attachment: jobDetailsResponse['attachment'],
                          attachmentName: jobDetailsResponse['attachmentName']
                      },
                      isDisabled: true,
                  }
              } else if(item==='hiringCriteria') {
                  updatedJobData[item] = {
                      ...initialJobFormData[item],
                      value: jobDetailsResponse['hiringCriteriaID'],
                      isDisabled: true,
                  }
              } else if(item==='status') {
                  updatedJobData[item] = {
                      ...initialJobFormData[item],
                      value: jobDetailsResponse['status'],
                      isDisabled: true
                  }
              } else if(item==='monthOfHiring') {
                  updatedJobData[item] = {
                      ...initialJobFormData[item],
                      value: moment(jobDetailsResponse[item].value).format('YYYY-MM-DD'),
                      isDisabled: true,
                  }
              } else if(item==='skills') {
                  const newSkills = JSON.parse(jobDetailsResponse['skillsInString']);

                  updatedJobData[item] = {
                      ...initialJobFormData[item],
                      value: newSkills?.length ? newSkills.map((item)=>{
                          return {value: item.skillID, label: item.skillName}
                      }) : [],
                      isDisabled: true,
                  }
              } else {
                  updatedJobData[item] = {
                      ...initialJobFormData[item],
                      value: jobDetailsResponse[item],
                      isDisabled: true,
                  }
              }
          })

          setJobFormData({...updatedJobData, jobID: jobDetailsResponse.jobID});
      }

      openCloseJobModal('DETAILS');
  } }));
}

  return (
    <div className="w-full d-flex justify-content-center align-content-center publish-selected-btn-container" style={{margin:'0px'}}>
      {props?.checkHandler && (
        <Checkbox
          size={"small"}
          color={"primary"}
          checked={props?.isCheck ? props?.isCheck : false}
          onChange={(e) => {
            props?.checkHandler(props?.item?.jobID);
          }}
        />
      )}
      <div
        className="row align-items-center jobs-list-item w-full"
      >
        <div className="col-md-2 row align-items-center p-0">
          <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center">
            <i className="fas fa-briefcase" />
          </div>
          <p
            className="job-label text-ellipsis"
            style={{
              marginLeft: "14px",
              maxWidth: "120px",
              textTransform: "capitalize",
              fontWeight: 'bold'
            }}
          >
            {props?.item?.jobName ? props?.item?.jobName : "-"}
          </p>
        </div>
        <div className="col-md-3">
          <div
            style={{
              border: "1px solid #454545",
              borderRadius: "4px",
              padding: "8px 4px",
            }}
          >
            <p
              className="text-ellipsis"
              style={{
                marginLeft: "10px",
                textTransform: "capitalize",
                fontSize: ".800rem",
              }}
            >
              {props?.item?.hiringCriteriaName}
            </p>
          </div>
        </div>
        <div className={`col-md-1`}>
          <div
            style={{
              border: "1px solid #454545",
              borderRadius: "4px",
              padding: "8px 4px",
              minWidth: "120px",
            }}
          >
            <p
              style={{
                marginLeft: "10px",
                textTransform: "capitalize",
                fontSize: ".800rem",
              }}
            >
              {props.item.status}
            </p>
          </div>
        </div>
        <div className="col-md-1">
        </div>
        <div className={`col-md-3 item align-items-center`}>
          <p className="job-published-date" style={{ color: "#454545", textAlign:'center' }}>
            {props?.item?.creationDate
              ? (props?.parentItem?.dateOfPublish || props?.item?.publishedFlag)
                ? `Published on`
                : `Created on`
              : "-"}
          </p>
          <p className="job-published-date" style={{ color: "#454545", textAlign:'center'}}>
            {props?.item?.creationDate
              ? (props?.parentItem?.dateOfPublish || props?.item?.publishedFlag)
                ? `${moment(props?.item?.dateOfPublish).format(
                    "DD-MMM-YYYY"
                  )}`
                : `${moment(props?.item?.creationDate).format(
                    "DD-MMM-YYYY"
                  )}`
              : "-"}
          </p>
        </div>
        <div className={`col-md-2 row item p-0 d-flex justify-content-between align-items-center w-full`}>
          <div className="vertical-divider" />
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
              fontWeight: "bolder",
            }}
            onClick={() => viewDetails(props.item.jobID)}
          >
            <p>Details</p>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      {isModalOpen && <CustomDialogPopup
          isOpenDialog={isModalOpen}
          // maxWidth={'lg'}
          isCancelBtnRequired={false}
          isConfirmBtnRequired={false}
          disableBackdropClick={true}
          contentStyles={{backgroundColor:'#F8F9FE', padding:'0px', paddingBottom: '12px'}}
          dialogContent={<AddJobs
              lookUpData={props?.lookUpData}
              hiringCriteria={props?.hiringCriteriaList}
              jobFormData={jobFormData}
              mode={mode}
              handleCloseModal={()=>{
                  openCloseJobModal('CLOSE')
              }}
          />}
      />}
    </div>
  );
};

export default JobsListItem;

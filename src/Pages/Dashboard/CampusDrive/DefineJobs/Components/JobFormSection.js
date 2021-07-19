import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionGetDependencyLookUpsSagaAction, actionUpdateGlobalLoaderSagaAction } from '../../../../../Store/Actions/SagaActions/CommonSagaActions';
import AddJobs from '../../../CreateJob/Jobs/AddJobs';
import moment from 'moment';
import { toast } from 'react-toastify';

const jobFormFields = ['jobName', 'jobType', 'skills', 'hiringCriteria', 'salaryMinRange', 'salaryMaxRange', 'monthOfHiring', 'remarks', 'attachment', 'status', 'noOfPositions', 'location'];

const JobFormSection = (props) => {
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
        isDisabled: true,
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

  const dispatch = useDispatch();

  const [jobFormData, setJobFormData] = useState(initialJobFormData);
  const [hiringCriteriaList, setHiringCriteriaList] = useState([]);
  const [lookUpData, setLookUpData] = useState([]);

  useEffect(() => {
    if(props?.hiringCriteriaList?.length && props?.hcId) {
      setHiringCriteriaList(props.hiringCriteriaList.filter((hc)=>hc.hiringCriteriaID === props.hcId));
      updateField('hiringCriteria', props.hcId);
    }
  }, [props?.hiringCriteriaList, props?.hcId]);

  useEffect(()=>{
    if(props?.selectedJob) {
        prepareJobFormData(props.selectedJob, props?.mode==='VIEW' ? false : true);
    }
  }, [props?.selectedJob, props?.mode]);

  useEffect(() => {
    dispatch(actionGetDependencyLookUpsSagaAction({
        apiPayloadRequest: ['skills', 'jobType'],
        callback: prepareLookUpData
    }));
  }, []);

  const prepareLookUpData = (data) => {
    setLookUpData(data);
  }

  const updateField = (name, value, errorMessage=undefined) => {
    let data = jobFormData[name];
    data["value"] = value;
    data["errorMessage"] = errorMessage;

    setJobFormData((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const validateMinAndMaxSalary = (name, value, errorMessage) => {
    switch (name) {
        case 'salaryMinRange':
            if(value!==undefined && jobFormData?.salaryMaxRange?.value!==undefined && parseFloat(value) > parseFloat(jobFormData?.salaryMaxRange?.value)) {
                updateField(name, value, 'Invalid Minimum Range');
            } else {
                updateField(name, value, errorMessage);
            }
            break;
        case 'salaryMaxRange':
            if(value!==undefined && jobFormData?.salaryMinRange?.value!==undefined && parseFloat(value) < parseFloat(jobFormData?.salaryMinRange?.value)) {
                updateField(name, value, 'Invalid Maximum Range');
            } else {
                updateField(name, value, errorMessage);
            }
            break;
        default:
            break;
    }
  }

  const handleChange = (name, value, errorMessage) => {
    switch (name) {
        case 'jobName':
        case 'jobType':
        case 'skills':
        case 'hiringCriteria':
        case 'noOfPositions':
        case 'monthOfHiring':
        case 'location':
        case 'status':
        case 'remarks':
            updateField(name, value, errorMessage);
            break; 
        case 'salaryMinRange':
        case 'salaryMaxRange':
            validateMinAndMaxSalary(name, value, errorMessage);
            break;
        default:
            break;
    }
  } 

  const fileHandler = (name, e, _errorMessage = undefined) => {
    if(_errorMessage) {
        let data = jobFormData[name];
        data["value"] = undefined;
        data["errorMessage"] = _errorMessage;
    
        setJobFormData((prevState) => ({
          ...prevState,
          ...data,
        }));

        return
    }

    const file = e.target.files[0];
    if (!file) {
        return;
    }

    let errorMessage = undefined;

    if(parseFloat((e.target.files[0].size / 1024).toFixed(2)) > 5000) {
        errorMessage = 'Please select file below 5 MB';
    }
    
    // dispatch(actionUpdateGlobalLoaderSagaAction(true));

    try {

        const reader = new FileReader();
        reader.readAsBinaryString(file);

        reader.onloadend = () => {
            let data = jobFormData[name];
            data["value"] = {
                attachment: btoa(reader.result),
                attachmentName: e.target.files[0].name
            };
            data["errorMessage"] = errorMessage;
        
            setJobFormData((prevState) => ({
              ...prevState,
              ...data,
            }));
        };

        reader.onerror = () => {    
            toast.error("Something went wrong!");
        };
    } catch (error) {
        toast.error("Something went wrong!");
    } finally {
        // dispatch(actionUpdateGlobalLoaderSagaAction(false));
    }
  }

  const resetFile = (name) => {
      // $('#'+name).value = '';
      updateField(name, undefined);
  }

  const submitJobForm = (model) => {

      let updatedJobData = {};

      jobFormFields.forEach((item)=>{
          if(item==='attachment') {
              updatedJobData['attachment'] = jobFormData[item].value.attachment;
              updatedJobData['attachmentName'] = jobFormData[item].value.attachmentName;
          } else if (item==='skills') {
              updatedJobData['skills'] = jobFormData[item].value.map((item) => {
                  return { skillID: item.value, skill: item.label }
              })
          } else if (item==='hiringCriteria') {
              const hiringCriteriaData = hiringCriteriaList.find((hc) => hc.hiringCriteriaID === jobFormData[item].value);

              updatedJobData['hiringCriteriaID'] = hiringCriteriaData?.hiringCriteriaID;
              updatedJobData['hiringCriteriaName'] = hiringCriteriaData?.hiringCriteriaName;
          } else if (item==='monthOfHiring') {
              updatedJobData[item] = moment(jobFormData[item].value)
          } else if (item==='noOfPositions') {
              updatedJobData[item] = parseFloat(jobFormData[item].value)
          } else {
              updatedJobData[item] = jobFormData[item].value
          }
      });

      if (props?.submitHandler) {
          if(props?.selectedJob) {
            props.submitHandler({...updatedJobData, jobID: props.selectedJob.jobID});
          } else {
            props.submitHandler(updatedJobData);
          }
      }
}

    const prepareJobFormData = (jobDetailsResponse, isEditable=false) => {
            console.log('jobDetailsResponse ', jobDetailsResponse);

            let updatedJobData = initialJobFormData;

            if(jobDetailsResponse?.jobID) {
                jobFormFields.forEach((item)=>{
                    if(item==='attachment') {
                        updatedJobData[item] = {
                            ...initialJobFormData[item],
                            isDisabled: isEditable ? initialJobFormData[item].isDisabled : true,
                            value: {
                                attachment: jobDetailsResponse['attachment'],
                                attachmentName: jobDetailsResponse['attachmentName']
                            }
                        }
                    } else if(item==='hiringCriteria') {
                        updatedJobData[item] = {
                            ...initialJobFormData[item],
                            isDisabled: isEditable ? initialJobFormData[item].isDisabled : true,
                            value: jobDetailsResponse['hiringCriteriaID']
                        }
                    } else if(item==='status') {
                        updatedJobData[item] = {
                            ...initialJobFormData[item],
                            value: jobDetailsResponse['status'],
                            isDisabled: isEditable ? initialJobFormData[item].isDisabled : false,
                        }
                    } else if(item==='monthOfHiring') {
                        updatedJobData[item] = {
                            ...initialJobFormData[item],
                            value: moment(jobDetailsResponse[item].value).format('YYYY-MM-DD'),
                            isDisabled: isEditable ? initialJobFormData[item].isDisabled : true,
                        }
                    } else if(item==='skills') {
                        const newSkills = JSON.parse(jobDetailsResponse['skillsInString']);

                        updatedJobData[item] = {
                            ...initialJobFormData[item],
                            value: newSkills?.length ? newSkills.map((item)=>{
                                return {value: item.skillID, label: item.skill}
                            }) : [],
                            isDisabled: isEditable ? initialJobFormData[item].isDisabled : true,
                        }
                    } else {
                        updatedJobData[item] = {
                            ...initialJobFormData[item],
                            value: jobDetailsResponse[item],
                            isDisabled: isEditable ? initialJobFormData[item].isDisabled : true,
                        }
                    }
                })

                setJobFormData({...updatedJobData, jobID: jobDetailsResponse.jobID});
            }
    }

  return (
    <div className="bgWhite">
      <AddJobs
          noHeading
          lookUpData={lookUpData}
          hiringCriteria={hiringCriteriaList}
          jobFormData={jobFormData}
          mode={props?.mode}
          cdJob
          handleChange={handleChange}
          fileHandler={fileHandler}
          resetFile={resetFile}
          submitJobForm={submitJobForm}
          noEditBtn={props?.noEditBtn}
          handleCloseModal={props?.mode === 'VIEW' ? ()=>{
              if(props?.updateMode) {
                  props.updateMode('EDIT')
              }
          } : props?.cancelHandler}
          editLabel={props?.mode === 'VIEW' ? 'EDIT' : ['EDIT', 'ADD'].includes(props?.mode) ? 'CANCEL' : ''}
          saveLabel={props?.mode === 'VIEW' ? 'CLOSE' : ['EDIT', 'ADD'].includes(props?.mode) ? 'Save' : ''}
      />
    </div>
  );
};

export default JobFormSection;

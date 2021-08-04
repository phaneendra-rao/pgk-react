import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import JobsCmp from '../../../../Components/Dashboard/JobsCmp/JobsCmp'
import PortalHiringModal from '../../../../Portals/PortalHiringModal';
import { actionGetDependencyLookUpsSagaAction, actionUpdateGlobalLoaderSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import { HiringSagaAction } from '../../../../Store/Actions/SagaActions/HiringSagaAction';
import { AddJobsSagaAction, EditJobsSagaAction, GetJobByIdSagaAction, GetJobsSagaAction } from '../../../../Store/Actions/SagaActions/JobsSagaAction';
import AddJobs from './AddJobs';
import JobDetailsModal from './JobDetailsModal';
import CustomModal from '../../../../Components/CustomModal';
import CustomDialogPopup from '../../../../Components/CustomDialogPopup';
import CustomToastModal from "../../../../Components/CustomToastModal";
import { toast } from 'react-toastify';
import moment from 'moment';

const jobFormFields = ['jobName', 'jobType', 'skills', 'hiringCriteria', 'salaryMinRange', 'salaryMaxRange', 'monthOfHiring', 'remarks', 'attachment', 'status', 'noOfPositions', 'location'];

const Jobs = () => {
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

    const [allJobs, setAllJobs] = useState([]);
    const [hiringCriteria, setHiringCriteria] = useState([]);
    const [jobFormData, setJobFormData] = useState(initialJobFormData);
    const [lookUpData, setLookUpData] = useState([]);
    const [mode, setMode] = useState('ADD');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [toastModal, setToastModal] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        getHiring();
        getJobs();
        dispatch(actionGetDependencyLookUpsSagaAction({
            apiPayloadRequest: ['skills', 'jobType'],
            callback: dropdowns
        }));
    }, []);

    const getHiring = () => {
        dispatch(HiringSagaAction({ callback: getAllHirings }));
    }

    const getJobs = () => {
        dispatch(GetJobsSagaAction({ callback: getAllJobs }));
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
                const hiringCriteriaData = hiringCriteria.find((hc)=>hc.hiringCriteriaID===jobFormData[item].value);

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

        if(mode==='EDIT') {
            dispatch(EditJobsSagaAction({ apiPayloadRequest: {id: jobFormData.jobID, req: updatedJobData}, callback: (addJobsResp)=>{
                getJobs();
                openCloseJobModal();
                setToastModal('EDIT');
            } }));
        } else {
            dispatch(AddJobsSagaAction({ apiPayloadRequest: updatedJobData, callback: (addJobsResp)=>{
                getJobs();
                openCloseJobModal();
                setToastModal('NEW');
            } }));
        }
    }

    const viewDetails = (id, isEditable=false) => {
        dispatch(GetJobByIdSagaAction({ apiPayloadRequest: id, callback: (jobDetailsResponse)=>{

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
                                return {value: item.skillID, label: item.skillName}
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

            if(isEditable) {
                openCloseJobModal('EDIT', true);
            } else {
                openCloseJobModal('DETAILS');
            }
        } }));
    }
    
    const getAllHirings = (data) => {
        setHiringCriteria(data);
    }

    const getAllJobs = (data) => {
        setAllJobs(data)
    }

    const dropdowns = (data) => {
        setLookUpData(data);
    }

    const openCloseJobModal = (_mode = 'CLOSE', modalOpen = !isModalOpen) => {
        if(_mode==='CLOSE') {
            setJobFormData(initialJobFormData);
            setMode();
        } else {
            setMode(_mode);
        }
        setIsModalOpen(modalOpen);
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

    return (
        <>
            <JobsCmp
                hiringCriteria={hiringCriteria}
                allJobs={allJobs}
                viewDetails={viewDetails}
                openCloseJobModal={()=>{
                    openCloseJobModal('ADD')
                }}
            />
            {isModalOpen && <CustomDialogPopup
                isOpenDialog={isModalOpen}
                // maxWidth={'lg'}
                isCancelBtnRequired={false}
                isConfirmBtnRequired={false}
                disableBackdropClick={true}
                contentStyles={{backgroundColor:'#F8F9FE', padding:'0px', paddingBottom: '12px'}}
                dialogContent={<AddJobs
                    lookUpData={lookUpData}
                    hiringCriteria={hiringCriteria}
                    jobFormData={jobFormData}
                    mode={mode}
                    editJob={()=>{
                        viewDetails(jobFormData?.jobID, true);
                    }}
                    handleChange={handleChange}
                    fileHandler={fileHandler}
                    resetFile={resetFile}
                    submitJobForm={submitJobForm}
                    handleCloseModal={()=>{
                        openCloseJobModal('CLOSE')
                    }}
                />}
            />}

            {toastModal && <CustomToastModal
                onClose={() => {
                    setToastModal();
                }}
                show={toastModal ? true : false}
                iconNameClass={"fa-briefcase"}
                message={toastModal === 'NEW' ? "Job Saved Successfully!" : "Job Updated Successfully!"}
            />}
        </>
    )
}

export default Jobs;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PgkSelectField from '../../../../../../Components/FormFields/PgkSelectField';
import PgkTextField from '../../../../../../Components/FormFields/PgkTextField';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import moment from "moment";
import {isFirstDateSameOrBefore} from '../../../../../../utils/utils';
import Checkbox from '@material-ui/core/Checkbox';

const applicationFormFields = ['publishID', 'jobID', 'jobName', 'jobApplWindowFromDate', 'jobApplWindowToDate', 'jobApplWindowFromTime', 'jobApplWindowToTime', 'accepted'];

const CampusDriveDatesFinalizationSection = (props) => {

  const initialApplicationWindowForm = {
    publishID: {
        value: undefined,
        errorMessage: undefined,
        isRequired: true,
        isDisabled: false,
    },
    jobID: {
        value: undefined,
        errorMessage: undefined,
        isRequired: true,
        isDisabled: false,
    },
    jobName: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false,
    },
    jobApplWindowFromDate: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false,
    },
    jobApplWindowToDate: {
        value: undefined,
        errorMessage: undefined,
        isRequired: true,
        isDisabled: false,
    },
    jobApplWindowFromTime: {
        value: undefined,
        errorMessage: undefined,
        isRequired: true,
        isDisabled: false,
    },
    jobApplWindowToTime: {
        value: undefined,
        errorMessage: undefined,
        isRequired: true,
        isDisabled: false,
    },
    accepted: {
        value: undefined,
        errorMessage: undefined,
        isRequired: true,
        isDisabled: false,
    }
  };

    const [applicationForm, setApplicationForm] = useState(initialApplicationWindowForm);

    const dispatch = useDispatch();

    useEffect(()=>{
        if (props?.mode && props?.job?.jobID) {
            prepareAppWindowFormData(props?.job);
        }
    }, [props?.mode, props?.job?.jobID])

    const handleFormChange = (name, value, errorMessage = undefined) => {
        let data = applicationForm[name];
        data["value"] = value;
        data["errorMessage"] = errorMessage;
    
        setApplicationForm((prevState) => ({
          ...prevState,
          ...data,
        }));
    }

    const checkFromToDate = (name, value, errorMessage = undefined) => {
        switch (name) {
            case 'jobApplWindowFromDate':
                if(applicationForm?.jobApplWindowToDate?.value!==undefined && !isFirstDateSameOrBefore(value, applicationForm?.jobApplWindowToDate?.value)) {
                    return 'Invalid From Date';
                } else {
                    return undefined;
                }
            case 'jobApplWindowToDate':
                if(applicationForm?.jobApplWindowFromDate?.value!==undefined && !isFirstDateSameOrBefore(applicationForm?.jobApplWindowFromDate?.value, value)) {
                    return 'Invalid To Date';
                } else {
                    return undefined;
                }
            default:
                break;
        }
    }

    const prepareAppWindowFormData = (jobDetailsResponse) => {
        let updatedAppWindowJobData = initialApplicationWindowForm;

        if(jobDetailsResponse?.jobID) {
            applicationFormFields.forEach((item)=>{
                updatedAppWindowJobData[item] = {
                    ...initialApplicationWindowForm[item],
                    value: jobDetailsResponse[item],
                    isDisabled: props?.mode === 'ADD' || props?.mode==='EDIT' ? initialApplicationWindowForm[item].isDisabled : true,
                }
            })

            setApplicationForm((prevState) => ({
                ...prevState,
                ...updatedAppWindowJobData,
            }));
        }
    }

    const isFormValid = () => {
        console.log('applicationForm ', applicationForm);
        let isValid = true;
        applicationFormFields.forEach((item)=>{
            if(isValid) {

                if(applicationForm[item].isRequired && applicationForm[item].errorMessage) {
                    isValid = false;
                    handleFormChange(item, applicationForm[item].value, 'Required');
                } else if(applicationForm[item].isRequired && (typeof applicationForm[item].value === 'string' ||  typeof applicationForm[item].value === 'number' || typeof applicationForm[item].value === 'undefined')) {
                    if(applicationForm[item].value === undefined || applicationForm[item].value?.toString().trim()==='') {
                        isValid = false;
                        handleFormChange(item, applicationForm[item].value, 'Required');
                    }
                } else if(applicationForm[item].isRequired && typeof applicationForm[item].value === 'object') {
                    if(applicationForm[item].value === undefined || applicationForm[item].value?.length===0) {
                        isValid = false;
                        handleFormChange(item, applicationForm[item].value, 'Required');
                    }
                }
            }
        });

        return isValid;
    }

    const submitHandler = () => {
        if (['ADD', 'EDIT'].includes(props?.mode)) {
            const _isValid = isFormValid();
            
            if(_isValid) {
                const updatedWindowForm = {};

                applicationFormFields.forEach((item) =>{
                    updatedWindowForm[item] = applicationForm[item].value
                });

                if(props?.submit) {
                    props.submit(updatedWindowForm);
                }
            }
        } else {
            if(props?.openClose) {
                props.openClose();
            }
        }
    }

    const cancelHandler = () => {
        if(props?.mode === 'VIEW') {
            props.updateMode('EDIT')
        } else {
            if(props?.openClose) {
                props.openClose();
            }
        }
    }

    return (
        <div className={'d-flex flex-column justify-content-center align-items-center'}>
        <p className="text-center text-primary p-2">Dates Finalization</p>
        <div className="hiring-modal" style={{backgroundColor:'white', border: '1px solid #cacaca', width: '90%'}}>
            <div className="modal-header hiring-modal-header" style={{padding: '12px', alignSelf: 'center'}}>
                <h5 className="modal-title" style={{fontSize: '14px', alignSelf: 'center'}}>
                    Campus Drive - Tentative Dates
                </h5>
                <IconButton style={{color:'white'}} size={'small'} onClick={props?.openClose} component="span">
                    <Close />
                </IconButton>
             </div>
            <div className={'row'}>
                <PgkTextField 
                    name="startDate"
                    onChange={handleFormChange}
                    value={applicationForm?.jobApplWindowFromDate?.value ? applicationForm?.jobApplWindowFromDate?.value : null}
                    label={'Start Date'}
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}, min: moment().format('YYYY-MM-DD')}}
                    errorMessage={applicationForm?.jobApplWindowFromDate?.errorMessage}
                    required={applicationForm?.jobApplWindowFromDate?.isRequired}
                    disabled={applicationForm?.jobApplWindowFromDate?.isDisabled}
                    type={'date'}
                    validations={[(value)=>{
                        return checkFromToDate('jobApplWindowFromDate', value)
                    }]}
                />
            </div>
            <div className={'row'}>
                <PgkTextField 
                    name="endDate"
                    onChange={handleFormChange}
                    value={applicationForm?.jobApplWindowToDate?.value ? applicationForm?.jobApplWindowToDate?.value : null}
                    label={'End Date'}
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}, min: moment().format('YYYY-MM-DD')}}
                    errorMessage={applicationForm?.jobApplWindowToDate?.errorMessage}
                    required={applicationForm?.jobApplWindowToDate?.isRequired}
                    disabled={applicationForm?.jobApplWindowToDate?.isDisabled}
                    type={'date'}
                    validations={[(value)=>{
                        return checkFromToDate('jobApplWindowToDate', value)
                    }]}
                />
            </div>
            <div className={'row'}>
                <div className={'d-attach'} style={{border: '1px solid #cacaca'}}>
                <div className={'d-flex justify-content-between align-items-center'}>
                                                        
                                                        </div>
                                                        <label htmlFor="attachment" className="d-label">
                                                          <i className="fas fa-paperclip mr-2"></i>
                                                          Attach File
                                                        </label>
                                                        <input
                                                          type="file"
                                                          className="d-inp d-none"
                                                          name="attachment"
                                                          id="attachment"
                                                          accept=".pdf"
                                                          onChange={(e)=>{}}
                                                        />
                                      
                </div>
            </div>
            
            <div className="d-flex flex-row justify-content-center align-items-center w-full mb-2 mt-4">
                {/* <button type="button" onClick={cancelHandler} style={{height: '40px', maxWidth: '130px', marginRight: '12px'}} className="btn job-btn">{['ADD', 'EDIT'].includes(props?.mode) ? 'Cancel' : 'Edit'}</button> */}
                <button type="button" onClick={submitHandler} style={{height: '40px', maxWidth: '130px'}} className="btn job-btn">{props?.mode==='ADD' ? 'Confirm' : props?.mode==='EDIT' ? 'Save' : 'Save'}</button>
            </div>
        </div>
        </div>
    )
}

export default CampusDriveDatesFinalizationSection;

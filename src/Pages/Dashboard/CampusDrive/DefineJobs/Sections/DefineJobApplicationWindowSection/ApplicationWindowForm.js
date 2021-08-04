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

const ApplicationWindowForm = (props) => {

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
      isDisabled: true,
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

            console.log('updatedAppWindowJobData ', updatedAppWindowJobData);

            setApplicationForm((prevState) => ({
                ...prevState,
                ...updatedAppWindowJobData,
            }));
        }
    }

    const isFormValid = () => {
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
        <div className="hiring-modal" style={{backgroundColor:'white', border: '1px solid #cacaca'}}>
            <div className="modal-header hiring-modal-header" style={{padding: '12px', alignSelf: 'center'}}>
                <h5 className="modal-title" style={{fontSize: '12px', alignSelf: 'center'}}>
                    Define Published Job Window
                </h5>
                <IconButton style={{color:'white'}} size={'small'} onClick={props?.openClose} component="span">
                    <Close />
                </IconButton>
             </div>
            <div className={'row'}>
                <PgkTextField 
                    name="jobName"
                    onChange={handleFormChange}
                    value={applicationForm?.jobName?.value}
                    label={'Job Name'}
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}}}
                    errorMessage={applicationForm?.jobName?.errorMessage}
                    required={applicationForm?.jobName?.isRequired}
                    disabled={applicationForm?.jobName?.isDisabled}
                />
            </div>
            <div className={'d-flex justify-content-evenly'} style={{padding: '0px 12px 12px'}}>
                <PgkTextField 
                    name="jobApplWindowFromDate"
                    onChange={handleFormChange}
                    value={applicationForm?.jobApplWindowFromDate?.value ? moment(applicationForm?.jobApplWindowFromDate?.value).format('YYYY-MM-DD') : null}
                    label={'From Date'}
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}, min: moment().format('YYYY-MM-DD')}}
                    errorMessage={applicationForm?.jobApplWindowFromDate?.errorMessage}
                    required={applicationForm?.jobApplWindowFromDate?.isRequired}
                    disabled={applicationForm?.jobApplWindowFromDate?.isDisabled}
                    type={'date'}
                    validations={[(value)=>{
                        return checkFromToDate('jobApplWindowFromDate', value)
                    }]}
                    styles={{marginRight: '6px', width: '100%'}}
                />
                <PgkTextField 
                    name="jobApplWindowToDate"
                    onChange={handleFormChange}
                    value={applicationForm?.jobApplWindowToDate?.value ? moment(applicationForm?.jobApplWindowToDate?.value).format('YYYY-MM-DD') : null}
                    label={'To Date'}
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}, min: moment().format('YYYY-MM-DD')}}
                    errorMessage={applicationForm?.jobApplWindowToDate?.errorMessage}
                    required={applicationForm?.jobApplWindowToDate?.isRequired}
                    disabled={applicationForm?.jobApplWindowToDate?.isDisabled}
                    type={'date'}
                    validations={[(value)=>{
                        return checkFromToDate('jobApplWindowToDate', value)
                    }]}
                    styles={{marginLeft: '6px', width: '100%'}}
                />
            </div>
            <div className={'d-flex justify-content-evenly'} style={{padding: '0px 12px 12px'}}>
                <PgkTextField 
                    name="jobApplWindowFromTime"
                    onChange={handleFormChange}
                    value={applicationForm?.jobApplWindowFromTime?.value}
                    label={'From Time'}
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}}}
                    errorMessage={applicationForm?.jobApplWindowFromTime?.errorMessage}
                    required={applicationForm?.jobApplWindowFromTime?.isRequired}
                    disabled={applicationForm?.jobApplWindowFromTime?.isDisabled}
                    type={'time'}
                    styles={{marginRight: '6px', width: '100%'}}
                />
                <PgkTextField 
                    name="jobApplWindowToTime"
                    onChange={handleFormChange}
                    value={applicationForm?.jobApplWindowToTime?.value}
                    label={'To Time'}
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}}}
                    errorMessage={applicationForm?.jobApplWindowToTime?.errorMessage}
                    required={applicationForm?.jobApplWindowToTime?.isRequired}
                    disabled={applicationForm?.jobApplWindowToTime?.isDisabled}
                    type={'time'}
                    styles={{marginLeft: '6px', width: '100%'}}
                />
            </div>
            <div className="row align-items-center">
                <Checkbox size={'small'} checked={applicationForm?.accepted?.value === undefined ? false : applicationForm?.accepted?.value} onClick={()=>{
                    handleFormChange('accepted', applicationForm?.accepted?.value === undefined ? true : !applicationForm?.accepted?.value)
                }} color={'primary'} disabled={applicationForm?.accepted?.isDisabled} />
                <p style={{fontSize: '14px'}}>
                    On Clicking publish, a notification and email will be triggered to the university and its students
                </p>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center w-full mb-2 mt-4">
                <button type="button" onClick={cancelHandler} style={{height: '40px', maxWidth: '130px', marginRight: '12px'}} className="btn job-btn">{['ADD', 'EDIT'].includes(props?.mode) ? 'Cancel' : 'Edit'}</button>
                <button type="button" onClick={submitHandler} style={{height: '40px', maxWidth: '130px'}} className="btn job-btn">{props?.mode==='ADD' ? 'Confirm' : props?.mode==='EDIT' ? 'Save' : 'Close'}</button>
            </div>
        </div>
    )
}

export default ApplicationWindowForm;

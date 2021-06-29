import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PgkTextField from '../../../../Components/FormFields/PgkTextField';
import PgkSelectField from '../../../../Components/FormFields/PgkSelectField';
import PgkMultiSelectField from '../../../../Components/FormFields/PgkMultiSelectField';
import moment from "moment";
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import { actionGetStatesByCountryNameRequest } from "../../../../Store/Actions/SagaActions/CommonSagaActions";
const $ = window.$;

const jobFormFields = ['jobName', 'jobType', 'skills', 'salaryMinRange', 'hiringCriteria', 'noOfPositions', 'salaryMaxRange', 'monthOfHiring', 'location', 'status', 'remarks', 'attachment'];

const AddJobs = (props) => {
    const dispatch = useDispatch();
    const [states, setStates] = useState([]);
  const countryName = useSelector(state => state.DashboardReducer.profileInfo?.corporateHQAddressCountry);

  const onStatesResponse = (response, type) => {
    let updatedStatesOptions = [];

    if (response?.length) {
      updatedStatesOptions = response.map((item) => {
        return { value: item?.state_name, label: item?.state_name };
      });
    }

    setStates(updatedStatesOptions);
  }

  useEffect(()=>{
    if(states?.length===0) {
        dispatch(actionGetStatesByCountryNameRequest({
            countryName: countryName,
            callback: (response)=>{
              onStatesResponse(response)
            },
        }))
    }
  }, [countryName]);


    const isFormValid = () => {
        let isValid = true;
        if(props?.jobFormData) {
            jobFormFields.forEach((item)=>{
                if(isValid) {

                    if(item==='attachment' && props.jobFormData[item].isRequired && (props.jobFormData[item].value === undefined || props.jobFormData[item].value.attachment === undefined || props.jobFormData[item].value.attachmentName===undefined)) {
                        props?.fileHandler(item, undefined, 'Required')
                        isValid = false;
                    }

                    if(props.jobFormData[item].isRequired && props.jobFormData[item].errorMessage) {
                        isValid = false;
                        props?.handleChange(item, props.jobFormData[item].value, 'Required');
                    } else if(props.jobFormData[item].isRequired && (typeof props.jobFormData[item].value === 'string' ||  typeof props.jobFormData[item].value === 'number' || typeof props.jobFormData[item].value === 'undefined')) {
                        if(props.jobFormData[item].value === undefined || props.jobFormData[item].value?.toString().trim()==='') {
                            isValid = false;
                            props?.handleChange(item, props.jobFormData[item].value, 'Required');
                        }
                    } else if(props.jobFormData[item].isRequired && typeof props.jobFormData[item].value === 'object') {
                        if(props.jobFormData[item].value === undefined || props.jobFormData[item].value?.length===0) {
                            isValid = false;
                            props?.handleChange(item, props.jobFormData[item].value, 'Required');
                        }
                    }
                }
            });
        } else {
            isValid = false
        }

        return isValid;
    }

    const handleSubmit = () => {
        if(isFormValid()) {
            if(props?.submitJobForm) {
                props?.submitJobForm();
            }
        }
    }

    return (
        <form>
            <div className="add-new-jobs-section">
            <div className="d-flex justify-content-between align-items-center w-full" style={{backgroundColor:'#253AA3'}}>
                <p></p>
                <p className="heading" style={{color:'white'}}>{props?.mode==='ADD' ? 'Create Job' : props?.mode==='EDIT' ? 'Edit '+props?.jobFormData?.jobName?.value : props?.jobFormData?.jobName?.value}</p>
                <IconButton style={{color:'white'}} onClick={props?.handleCloseModal} component="span">
                    <Close />
                </IconButton>
            </div>
            <div className=" py-4">
                <div className="row m-0">
                    <div className="col-md-3">
                        <div className="mb-20">
                            <PgkTextField 
                                name="jobName"
                                onChange={props?.handleChange}
                                value={props?.jobFormData?.jobName?.value}
                                label={'Name of the job'}
                                inputLabelProps={{style:{fontSize: '.800rem'}}}
                                inputProps={{style:{fontSize: '.800rem'}}}
                                errorMessage={props?.jobFormData?.jobName?.errorMessage}
                                required={props?.jobFormData?.jobName?.isRequired}
                                disabled={props?.jobFormData?.jobName?.isDisabled}
                            />
                        </div>
                        <div className="mb-20">
                            <PgkSelectField 
                                name="hiringCriteria"
                                value={props?.jobFormData?.hiringCriteria?.value}
                                onChange={props?.handleChange}
                                label={`Hiring Criteria`}
                                options={props?.hiringCriteria?.length ? props.hiringCriteria.map((item)=>{
                                    return {value: item.hiringCriteriaID, label: item.hiringCriteriaName}
                                }) : []}
                                labelStyles={{fontSize: '.800rem'}}
                                selectStyles={{fontSize: '.800rem'}}
                                menuStyles={{fontSize: '.800rem'}}
                                errorMessage={props?.jobFormData?.hiringCriteria?.errorMessage}
                                required={props?.jobFormData?.hiringCriteria?.isRequired}
                                disabled={props?.jobFormData?.hiringCriteria?.isDisabled}
                            />
                        </div>
                        <div className="mb-20">
                            <PgkTextField 
                                name="monthOfHiring"
                                onChange={props?.handleChange}
                                value={props?.jobFormData?.monthOfHiring?.value ? moment(props?.jobFormData?.monthOfHiring?.value).format('YYYY-MM-DD') : null}
                                label={'Date of hiring'}
                                inputLabelProps={{style:{fontSize: '.800rem'}}}
                                inputProps={{style:{fontSize: '.800rem'}, min: moment().format('YYYY-MM-DD')}}
                                errorMessage={props?.jobFormData?.monthOfHiring?.errorMessage}
                                required={props?.jobFormData?.monthOfHiring?.isRequired}
                                disabled={props?.jobFormData?.monthOfHiring?.isDisabled}
                                type={'date'}
                            />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="mb-20">
                            <PgkSelectField 
                                name="jobType"
                                value={props?.jobFormData?.jobType?.value}
                                onChange={props?.handleChange}
                                label={`Job Type`}
                                options={props?.lookUpData?.jobType?.length ? props?.lookUpData?.jobType?.map((item)=>{
                                    return {value: item.jobTypeCode, label: item.jobType}
                                }) : []}
                                labelStyles={{fontSize: '.800rem'}}
                                selectStyles={{fontSize: '.800rem'}}
                                menuStyles={{fontSize: '.800rem'}}
                                errorMessage={props?.jobFormData?.jobType?.errorMessage}
                                required={props?.jobFormData?.jobType?.isRequired}
                                disabled={props?.jobFormData?.jobType?.isDisabled}
                            />
                        </div>
                        <div className="mb-20">
                            <PgkTextField 
                                name="noOfPositions"
                                onChange={props?.handleChange}
                                value={props?.jobFormData?.noOfPositions?.value}
                                label={'No of positions'}
                                inputLabelProps={{style:{fontSize: '.800rem'}}}
                                inputProps={{style:{fontSize: '.800rem'}}}
                                validations={['isNumeric']}
                                errorMessage={props?.jobFormData?.noOfPositions?.errorMessage}
                                required={props?.jobFormData?.noOfPositions?.isRequired}
                                disabled={props?.jobFormData?.noOfPositions?.isDisabled}
                            />
                        </div>
                        <div className="mb-20">
                            <PgkSelectField
                                name="location"
                                value={props?.jobFormData?.location?.value}
                                onChange={props?.handleChange}
                                label={`Location`}
                                // options={[{value: 'Hyderabad', label: 'Hyderabad'}, {value: 'Delhi', label: 'Delhi'}, {value: 'Mumbai', label: 'Mumbai'}]}
                                options={states}
                                labelStyles={{fontSize: '.800rem'}}
                                selectStyles={{fontSize: '.800rem'}}
                                menuStyles={{fontSize: '.800rem'}}
                                errorMessage={props?.jobFormData?.location?.errorMessage}
                                required={props?.jobFormData?.location?.isRequired}
                                disabled={props?.jobFormData?.location?.isDisabled}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-20">
                            <PgkMultiSelectField 
                                name={'skills'}
                                values={props?.jobFormData?.skills?.value}
                                onChange={props?.handleChange}
                                options={props?.lookUpData?.skills?.length ? props?.lookUpData?.skills?.map((item)=>{
                                    return {value: item.skillCode, label: item.skillName}
                                }) : []}
                                labelStyles={{fontSize: '.800rem'}}
                                selectStyles={{fontSize: '.800rem'}}
                                menuStyles={{fontSize: '.800rem'}}
                                label={`Skills`}
                                errorMessage={props?.jobFormData?.skills?.errorMessage}
                                required={props?.jobFormData?.skills?.isRequired}
                                disabled={props?.jobFormData?.skills?.isDisabled}
                            />
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="mb-20">
                            <PgkTextField 
                                name="salaryMinRange"
                                onChange={props?.handleChange}
                                value={props?.jobFormData?.salaryMinRange?.value}
                                label={'Minimum Salary'}
                                validations={['isNumericWithDecimal', 'min_1']}
                                inputLabelProps={{style:{fontSize: '.800rem'}}}
                                inputProps={{style:{fontSize: '.800rem'}}}
                                errorMessage={props?.jobFormData?.salaryMinRange?.errorMessage}
                                required={props?.jobFormData?.salaryMinRange?.isRequired}
                                disabled={props?.jobFormData?.salaryMinRange?.isDisabled}
                            />
                        </div>
                        <div className="mb-20">
                            <PgkTextField 
                                name="salaryMaxRange"
                                onChange={props?.handleChange}
                                value={props?.jobFormData?.salaryMaxRange?.value}
                                label={'Maximum Salary'}
                                validations={['isNumericWithDecimal']}
                                inputLabelProps={{style:{fontSize: '.800rem'}}}
                                inputProps={{style:{fontSize: '.800rem'}}}
                                errorMessage={props?.jobFormData?.salaryMaxRange?.errorMessage}
                                required={props?.jobFormData?.salaryMaxRange?.isRequired}
                                disabled={props?.jobFormData?.salaryMaxRange?.isDisabled}
                            />
                        </div>
                        <div className="mb-20">
                            <PgkSelectField
                                name="status"
                                value={props?.jobFormData?.status?.value}
                                onChange={props?.handleChange}
                                label={`Status`}
                                options={[{value: 'open', label: 'Open'}, {value: 'close', label: 'Close'}]}
                                labelStyles={{fontSize: '.800rem'}}
                                selectStyles={{fontSize: '.800rem'}}
                                menuStyles={{fontSize: '.800rem'}}
                                errorMessage={props?.jobFormData?.status?.errorMessage}
                                required={props?.jobFormData?.status?.isRequired}
                                disabled={props?.jobFormData?.status?.isDisabled}
                            />
                        </div>
                    </div>
                </div>
                <div className="row m-0">
                    <div className={'flex flex-column w-full'}>
                        <div className={'col-md'}>
                            <PgkTextField
                                name="remarks"
                                value={props?.jobFormData?.remarks?.value}
                                label={"Remarks"}
                                required={props?.jobFormData?.remarks?.isRequired}
                                disabled={props?.jobFormData?.remarks?.isDisabled}
                                errorMessage={props?.jobFormData?.remarks?.errorMessage}
                                onChange={props?.handleChange}
                                inputLabelProps={{style:{fontSize: '.800rem'}}}
                                inputProps={{style:{fontSize: '.800rem'}}}
                                multiline={true}
                                minRows={6}
                            />
                        </div>
                        <div className={'col-md mt-3'}>
                            <div className="row d-flex justify-content-center align-items-center" style={{margin:0, padding:0}}>
                                <div className={`col-md-${props?.jobFormData?.attachment?.value?.attachment ? '11' : '12'}`} style={{margin:0, padding:0}}>
                                    <div className="d-attach">
                                        {props?.jobFormData?.attachment?.value?.attachmentName ? <div className={'d-flex justify-content-between align-items-center'} style={{width:'84%'}}>
                                            <p className="float-left" style={{padding: '8px', fontSize: '.800rem', flex: '1'}}>{props?.jobFormData?.attachment?.value?.attachmentName}</p>
                                            {(props?.mode==='DETAILS' && props?.editJob===undefined) || props?.mode==='EDIT' || props?.mode==='ADD' ? <Close style={{fontSize:'20px', float:'right'}} onClick={()=>{
                                                if(props?.resetFile) {
                                                    var $el = $('#attachment');
                                                    $el.wrap('<form>').closest('form').get(0).reset();
                                                    $el.unwrap();
                                                    props.resetFile('attachment');
                                                }
                                            }} style={{cursor:'pointer', color:'#878BA6'}} /> : null}
                                        </div> : null}
                                        <label htmlFor="attachment" className="d-label">
                                            {" "}
                                            <i className="fas fa-paperclip mr-2"></i> Attachment
                                        </label>
                                        <input
                                            type="file"
                                            onChange={(e)=>{
                                                if(props?.fileHandler) {
                                                    props.fileHandler('attachment', e)
                                                }
                                            }}
                                            className="d-inp d-none"
                                            name="attachment"
                                            accept=".pdf"
                                            disabled={props?.jobFormData?.attachment?.isDisabled}
                                            id="attachment"
                                        />
                                    </div>
                                </div>                            
                               {props?.jobFormData?.attachment?.value?.attachment && <div className="col-md-1" style={{margin:0, padding:0}}>
                                    <div className="d-attach" style={{cursor: 'pointer'}}>
                                    {props?.jobFormData?.attachment?.value?.attachment?.trim()!=='' ? <a href={'data:application/pdf;base64,'+props?.jobFormData?.attachment?.value?.attachment} style={{textDecoration:'none', outline:'none', width: '100%', cursor:'pointer'}} download> <label style={{backgroundColor: '#878BA6', width: '100%', height: '100%', paddingTop: '10px', color: 'white', textAlign: 'center', cursor: 'pointer'}} >
                                        <i className="fas fa-download mr-2"></i>
                                        </label></a> : null}
                                    </div>
                                </div>}
                            </div>
                            {props?.jobFormData?.attachment?.errorMessage ? <p style={{color:'red', fontSize: '.800rem', marginTop:'-15px'}}>{props?.jobFormData?.attachment?.errorMessage}</p> : null}
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center w-full mt-4">
                <button type="buttpn" onClick={props?.handleCloseModal}  style={{height: '18px', maxWidth: '160px'}} className="btn job-btn">Cancel</button>
                {props?.mode==='DETAILS' && props?.editJob ? <button type="button" onClick={props?.editJob} style={{height: '18px', maxWidth: '160px'}} className="btn job-btn">Edit Job</button> : null}
                {props?.mode!=='DETAILS' ? <button type="button" onClick={handleSubmit} style={{height: '18px', maxWidth: '160px'}} className="btn job-btn">Save Job</button> : null}
            </div>
        </div>
        </form>
    )
}

export default AddJobs;

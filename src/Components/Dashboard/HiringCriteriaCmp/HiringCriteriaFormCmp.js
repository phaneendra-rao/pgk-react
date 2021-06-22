import React from 'react';
import Select from 'react-select';

import PgkTextField from '../../FormFields/PgkTextField';
import PgkSelectField from '../../FormFields/PgkSelectField';
import PgkMultiSelectField from '../../FormFields/PgkMultiSelectField';

const HiringCriteriaFormCmp = (props) => {

    const isFormValid = () => {
        if(props?.hiringData) {
            const keys = [
                'programID', 
                'hiringCriteriaName', 
                'minimumCutoffPercentage10th', 
                'minimumCutoffPercentage12th', 
                'minimumCutoffCGPAGrad', 
                'minimumCutoffPercentageGrad',
                'eduGapsAllowed',
                'eduGapsSchoolAllowed',
                'eduGaps11N12Allowed',
                'eduGapsGradAllowed',
                'eduGapsGradNPGAllowed',   
                'allowActiveBacklogs',
                'numberOfAllowedBacklogs',
                'eduGapsSchool',
                'eduGaps11N12',
                'eduGaps12NGrad',
                'eduGapsGrad',
                'eduGapsGradNPG',
                'yearOfPassing',
                'remarks',
                'hcPrograms'
            ];

            let isValid = true;

            keys.forEach((item)=>{
                if(isValid) {
                    if(props.hiringData[item] && !props.hiringData[item].isDisabled) {

                        if(props.hiringData[item].isRequired && props.hiringData[item].errorMessage) {
                            isValid = false;
                        } else if(props.hiringData[item].isRequired && (typeof props.hiringData[item].value === 'string' ||  typeof props.hiringData[item].value === 'number' || typeof props.hiringData[item].value === 'undefined')) {
                            if(props.hiringData[item].value === undefined || props.hiringData[item].value?.toString().trim()==='') {
                                isValid = false;
                            }
                        } else if(props.hiringData[item].isRequired && typeof props.hiringData[item].value === 'object') {
                            if(props.hiringData[item].value === undefined || props.hiringData[item].value?.length===0) {
                                isValid = false;
                            }
                        }
                    }
                }
            })

            return isValid;

        } else {
            return true
        }
    }

    const currentYear = new Date().getFullYear();

    const yearOfPassingOptions = [currentYear-2, currentYear-1, currentYear, currentYear+1, currentYear+2].map((item)=>{
        return {value: item.toString(), label: item.toString()}
    });

    return (
        <form className="hiring-modal-form">
            <div className="row">
                <div className="w-full"style={{margin: '0px 4px 15px 4px'}}>
                    <PgkTextField 
                        name="hiringCriteriaName"
                        onChange={props?.handleChange}
                        value={props?.hiringData?.hiringCriteriaName?.value}
                        label={'Name of the Hiring Criteria'}
                        inputLabelProps={{style:{fontSize: '.800rem'}}}
                        inputProps={{style:{fontSize: '.800rem'}}}
                        errorMessage={props?.hiringData?.hiringCriteriaName?.errorMessage}
                        required={props?.hiringData?.hiringCriteriaName?.isRequired}
                        disabled={props?.hiringData?.hiringCriteriaName?.isDisabled}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3" style={{padding: '0px 4px'}}>
                    <div className="mb-15">
                        <PgkSelectField 
                            name="programID"
                            value={props?.hiringData?.programID?.value}
                            onChange={props?.handleChange}
                            label={`Program`}
                            options={props?.programCatalog}
                            labelStyles={{fontSize: '.800rem'}}
                            selectStyles={{fontSize: '.800rem'}}
                            menuStyles={{fontSize: '.800rem'}}
                            errorMessage={props?.hiringData?.programID?.errorMessage}
                            required={props?.hiringData?.programID?.isRequired}
                            disabled={props?.hiringData?.programID?.isDisabled}
                        />
                    </div>
                </div>
                <div className="col-md-3" style={{padding: '0px 4px'}}>
                    <div className="mb-15">
                        <PgkMultiSelectField 
                            name={'hcPrograms'}
                            values={props?.hiringData?.hcPrograms?.value}
                            onChange={props?.handleChange}
                            options={props?.branchCatalog}
                            labelStyles={{fontSize: '.800rem'}}
                            selectStyles={{fontSize: '.800rem'}}
                            menuStyles={{fontSize: '.800rem'}}
                            label={`Branch`}
                            errorMessage={props?.hiringData?.hcPrograms?.errorMessage}
                            required={props?.hiringData?.hcPrograms?.isRequired}
                            disabled={props?.hiringData?.hcPrograms?.isDisabled}
                        />
                    </div>
                </div>
                <div className="col-md-3" style={{padding: '0px 4px'}}>
                    <div className="mb-15">
                        <PgkTextField 
                            name="minimumCutoffPercentage10th"
                            onChange={props?.handleChange}
                            value={props?.hiringData?.minimumCutoffPercentage10th?.value}
                            label={'Cutoff Percentage 10th'}
                            validations={['isNumericWithDecimal', 'max_100.00']}
                            inputLabelProps={{style:{fontSize: '.800rem'}}}
                            inputProps={{style:{fontSize: '.800rem'}}}
                            errorMessage={props?.hiringData?.minimumCutoffPercentage10th?.errorMessage}
                            required={props?.hiringData?.minimumCutoffPercentage10th?.isRequired}
                            disabled={props?.hiringData?.minimumCutoffPercentage10th?.isDisabled}
                        />
                    </div>
                </div>
                <div className="col-md-3" style={{padding: '0px 4px'}}>
                    <div className="mb-15">
                        <PgkSelectField 
                            name="yearOfPassing"
                            onChange={props?.handleChange}
                            value={props?.hiringData?.yearOfPassing?.value}
                            label={'Year of Passing'}
                            options={yearOfPassingOptions}
                            labelStyles={{fontSize: '.800rem'}}
                            selectStyles={{fontSize: '.800rem'}}
                            menuStyles={{fontSize: '.800rem'}}
                            errorMessage={props?.hiringData?.yearOfPassing?.errorMessage}
                            required={props?.hiringData?.yearOfPassing?.isRequired}
                            disabled={props?.hiringData?.yearOfPassing?.isDisabled}
                        />
                    </div>
                </div>
                <div className="modal-grp d-flex justify-content-start align-items-center col-md-4" style={{padding: '0px 4px', maxWidth:'240px'}}>
                    <span style={{fontSize:'.800rem'}}>Active Backlogs <sup>*</sup></span>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input
                            type="radio"
                            id="backlogs1"
                            name="allowActiveBacklogs"
                            onChange={(e)=>{
                                if(props.handleChange) {
                                    props.handleChange('allowActiveBacklogs', true)
                                }
                            }}
                            value={true}
                            className="custom-control-input"
                            checked={props?.hiringData?.allowActiveBacklogs?.value ? true : false}
                            disabled={props?.hiringData?.allowActiveBacklogs?.isDisabled}
                        />
                        <label className="custom-control-label" style={{fontSize:'.800rem'}} htmlFor="backlogs1">Yes</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input
                            type="radio"
                            id="backlogs2"
                            name="allowActiveBacklogs"
                            onChange={(e)=>{
                                if(props.handleChange) {
                                    props.handleChange('allowActiveBacklogs', false)
                                }
                            }}
                            value={false}
                            className="custom-control-input"
                            checked={!props?.hiringData?.allowActiveBacklogs?.value ? true : false}
                            disabled={props?.hiringData?.allowActiveBacklogs?.isDisabled}
                            />
                        <label className="custom-control-label" style={{fontSize:'.800rem'}} htmlFor="backlogs2">No</label>
                    </div>
                </div>
                <div className="col-md-3" style={{padding: '0px 4px', maxWidth:'207px'}}>
                    <div className="mb-15">
                        <PgkTextField 
                            name="numberOfAllowedBacklogs"
                            onChange={props?.handleChange}
                            disabled={props.hiringData?.numberOfAllowedBacklogs?.isDisabled}
                            value={props.hiringData?.numberOfAllowedBacklogs?.value}
                            label={'How many Backlogs ?'}
                            validations={['isNumeric']}
                            inputLabelProps={{style:{fontSize: '.800rem'}}}
                            inputProps={{style:{fontSize: '.800rem'}}}
                            errorMessage={props?.hiringData?.numberOfAllowedBacklogs?.errorMessage}
                            required={props.hiringData?.numberOfAllowedBacklogs?.isRequired}
                        />
                    </div>
                </div>

                <div className="col-md-3" style={{padding: '0px 4px'}}>
                    <div className="mb-15">
                        <PgkTextField 
                            name="minimumCutoffPercentage12th"
                            onChange={props?.handleChange}
                            value={props?.hiringData?.minimumCutoffPercentage12th?.value}
                            label={'Cutoff Percentage 12th'}
                            validations={['isNumericWithDecimal', 'max_100.00']}
                            inputLabelProps={{style:{fontSize: '.800rem'}}}
                            inputProps={{style:{fontSize: '.800rem'}}}
                            errorMessage={props?.hiringData?.minimumCutoffPercentage12th?.errorMessage}
                            disabled={props.hiringData?.minimumCutoffPercentage12th?.isDisabled}
                            required={props.hiringData?.minimumCutoffPercentage12th?.isRequired}
                        />
                    </div>
                </div>
            </div>
            <div className={'row'}>
                <div className="col-md-3">
                </div>
                <div className="col-md-3">
                </div>
                <div className="col-md-3" style={{padding: '0px 4px'}}>
                    <div className="mb-15">
                        <PgkTextField 
                            name="minimumCutoffCGPAGrad"
                            onChange={props?.handleChange}
                            value={props?.hiringData?.minimumCutoffCGPAGrad?.value}
                            disabled={props?.hiringData?.minimumCutoffCGPAGrad?.isDisabled}
                            label={'Cutoff CGPA UG'}
                            validations={['isNumericWithDecimal', 'max_100.00']}
                            inputLabelProps={{style:{fontSize: '.800rem'}}}
                            inputProps={{style:{fontSize: '.800rem'}}}
                            errorMessage={props?.hiringData?.minimumCutoffCGPAGrad?.errorMessage}
                            required={props?.hiringData?.minimumCutoffCGPAGrad?.isRequired}
                        />
                    </div>
                </div>
            </div>
            <div className={'row'}>
                <div className="col-md-3">
                </div>
                <div className="col-md-3">
                </div>
                <div className="col-md-3" style={{padding: '0px 4px'}}>
                    <div className="mb-15">
                        <PgkTextField 
                            name="minimumCutoffPercentageGrad"
                            onChange={props?.handleChange}
                            value={props?.hiringData?.minimumCutoffPercentageGrad?.value}
                            label={'Cutoff Percentage UG'}
                            validations={['isNumericWithDecimal', 'max_100.00']}
                            inputLabelProps={{style:{fontSize: '.800rem'}}}
                            inputProps={{style:{fontSize: '.800rem'}}}
                            errorMessage={props?.hiringData?.minimumCutoffPercentageGrad?.errorMessage}
                            required={props?.hiringData?.minimumCutoffPercentageGrad?.isRequired}
                            disabled={props?.hiringData?.minimumCutoffPercentageGrad?.isDisabled}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                </div>
                <div className="col-md-6">
                    <div className="modal-grp">
                        <span>Educational Gaps if any *</span>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="gaps1"
                                onChange={(e)=>{
                                    if(props.handleChange) {
                                        props.handleChange('eduGapsAllowed', true, undefined)
                                    }
                                }}
                                name="eduGapsAllowed"
                                value={true}
                                className="custom-control-input"
                                checked={props?.hiringData?.eduGapsAllowed?.value}
                                disabled={props?.hiringData?.eduGapsAllowed?.isDisabled}
                            />
                            <label className="custom-control-label" htmlFor="gaps1">Yes</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="gaps2"
                                name="eduGapsAllowed"
                                onChange={(e)=>{
                                    if(props.handleChange) {
                                        props.handleChange('eduGapsAllowed', false, undefined)
                                    }
                                }}
                                value={false}
                                className="custom-control-input"
                                checked={!props?.hiringData?.eduGapsAllowed?.value}
                                disabled={props?.hiringData?.eduGapsAllowed?.isDisabled}
                            />
                            <label className="custom-control-label" htmlFor="gaps2">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-start">
                <div className="col-md-6">
                    <div className="mb-15">
                        <PgkTextField
                            name="remarks"
                            value={props?.hiringData?.remarks?.value}
                            label={"Remarks"}
                            onChange={props?.handleChange}
                            multiline={true}
                            minRows={14}
                            inputLabelProps={{style:{fontSize: '.800rem'}}}
                            inputProps={{style:{fontSize: '.800rem'}}}
                            required={props?.hiringData?.remarks?.isRequired}
                            disabled={props?.hiringData?.remarks?.isDisabled}
                            errorMessage={props?.hiringData?.remarks?.errorMessage}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="gaps">
                            <div className={'row'} style={{paddingBottom:'0px'}}>
                                <div className={'col-md-7'}>
                                    <div className="gaps-item d-flex justify-content-start align-items-center" style={{width:'100%', marginBottom: '0px', paddingBottom:'0px'}}>
                                        <h3 className="gaps-title" style={{fontWeight:'bolder', marginBottom: '0px', paddingBottom:'0px'}}>GAPS DURING</h3><h6 style={{color:'#a3a3a3', marginBottom: '0px', paddingBottom:'0px', textDecoration: 'none', fontWeight:'normal'}}>(In Months)</h6>
                                    </div>
                                </div>
                                <div className={'col'}></div>
                            </div>
                            <div className="gaps-item">
                                <p className="gaps-name">Schooling</p>
                                <div className="gaps-content">
                                    <div className="modal-grp" style={{margin: '1rem 0px'}}>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="Schooling1"
                                                name="eduGapsSchoolAllowed"
                                                onChange={(e)=>{
                                                    if(props?.handleChange) {
                                                        props.handleChange('eduGapsSchoolAllowed', true)
                                                    }
                                                }}
                                                value={true}
                                                className="custom-control-input"
                                                disabled={props?.hiringData?.eduGapsSchoolAllowed?.isDisabled}
                                                checked={props?.hiringData?.eduGapsSchoolAllowed?.value}
                                            />
                                            <label className="custom-control-label" htmlFor="Schooling1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="Schooling2"
                                                name="eduGapsSchoolAllowed"
                                                onChange={(e)=>{
                                                    if(props?.handleChange) {
                                                        props.handleChange('eduGapsSchoolAllowed', false)
                                                    }
                                                }}
                                                value={false}
                                                className="custom-control-input"
                                                disabled={props?.hiringData?.eduGapsSchoolAllowed?.isDisabled}
                                                checked={!props?.hiringData?.eduGapsSchoolAllowed?.value}
                                            />
                                            <label className="custom-control-label" htmlFor="Schooling2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp" style={{maxWidth:'140px'}}>
                                        <PgkTextField                         
                                            name="eduGapsSchool"
                                            onChange={props?.handleChange}
                                            value={props.hiringData?.eduGapsSchool?.value}
                                            label={'Mention in months'}
                                            validations={['isNumeric']}
                                            inputLabelProps={{style:{fontSize: '.700rem'}}}
                                            inputProps={{style:{fontSize: '.800rem'}}}
                                            errorMessage={props?.hiringData?.eduGapsSchool?.errorMessage}
                                            required={props.hiringData?.eduGapsSchool?.isRequired}
                                            disabled={props.hiringData?.eduGapsSchool?.isDisabled}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item mb-3">
                                <p className="gaps-name">XI - XII</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="inter1"
                                                name="eduGaps11N12Allowed"
                                                onChange={(e)=>{
                                                    if(props?.handleChange) {
                                                        props.handleChange('eduGaps11N12Allowed', true)
                                                    }
                                                }}
                                                value={true}
                                                className="custom-control-input"
                                                disabled={props?.hiringData?.eduGaps11N12Allowed?.isDisabled}
                                                checked={props?.hiringData?.eduGaps11N12Allowed?.value}
                                            />
                                            <label className="custom-control-label" htmlFor="inter1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="inter2"
                                                name="eduGaps11N12Allowed"
                                                onChange={(e)=>{
                                                    if(props?.handleChange) {
                                                        props.handleChange('eduGaps11N12Allowed', false)
                                                    }
                                                }}
                                                value={false}
                                                className="custom-control-input"
                                                disabled={props?.hiringData?.eduGaps11N12Allowed?.isDisabled}
                                                checked={!props?.hiringData?.eduGaps11N12Allowed?.value}
                                            />
                                            <label className="custom-control-label" htmlFor="inter2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp" style={{maxWidth:'140px'}}>
                                        <PgkTextField 
                                            
                                            name="eduGaps11N12"
                                            onChange={props?.handleChange}
                                            value={props.hiringData?.eduGaps11N12?.value}
                                            label={'Mention in months'}
                                            validations={['isNumeric']}
                                            inputLabelProps={{style:{fontSize: '.700rem'}}}
                                            inputProps={{style:{fontSize: '.800rem'}}}
                                            errorMessage={props?.hiringData?.eduGaps11N12?.errorMessage}
                                            required={props.hiringData?.eduGaps11N12?.isRequired}
                                            disabled={props.hiringData?.eduGaps11N12?.isDisabled}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item mb-3">
                                <p className="gaps-name">Between XII - Graduation</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="Between1"
                                                name="eduGaps12NGradAllowed"
                                                onChange={(e)=>{
                                                    if(props?.handleChange) {
                                                        props.handleChange('eduGaps12NGradAllowed', true)
                                                    }
                                                }}
                                                value={true}
                                                className="custom-control-input"
                                                disabled={props?.hiringData?.eduGaps12NGradAllowed?.isDisabled}
                                                checked={props?.hiringData?.eduGaps12NGradAllowed?.value}
                                            />
                                            <label className="custom-control-label" htmlFor="Between1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="Between2"
                                                name="eduGaps12NGradAllowed"
                                                onChange={(e)=>{
                                                    if(props?.handleChange) {
                                                        props.handleChange('eduGaps12NGradAllowed', false)
                                                    }
                                                }}
                                                value={false}
                                                className="custom-control-input"
                                                disabled={props?.hiringData?.eduGaps12NGradAllowed?.isDisabled}
                                                checked={!props?.hiringData?.eduGaps12NGradAllowed?.value}
                                            />
                                            <label className="custom-control-label" htmlFor="Between2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp" style={{maxWidth:'140px'}}>
                                        <PgkTextField 
                                            
                                            name="eduGaps12NGrad"
                                            onChange={props?.handleChange}
                                            value={props.hiringData?.eduGaps12NGrad?.value}
                                            label={'Mention in months'}
                                            validations={['isNumeric']}
                                            inputLabelProps={{style:{fontSize: '.700rem'}}}
                                            inputProps={{style:{fontSize: '.800rem'}}}
                                            errorMessage={props?.hiringData?.eduGaps12NGrad?.errorMessage}
                                            required={props.hiringData?.eduGaps12NGrad?.isRequired}
                                            disabled={props.hiringData?.eduGaps12NGrad?.isDisabled}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item mb-3">
                                <p className="gaps-name">During Graduation</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="Graduation1"
                                                name="eduGapsGradAllowed"
                                                onChange={(e)=>{
                                                    if(props?.handleChange) {
                                                        props.handleChange('eduGapsGradAllowed', true)
                                                    }
                                                }}
                                                value={true}
                                                className="custom-control-input"
                                                disabled={props?.hiringData?.eduGapsGradAllowed?.isDisabled}
                                                checked={props?.hiringData?.eduGapsGradAllowed?.value}
                                            />
                                            <label className="custom-control-label" htmlFor="Graduation1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="Graduation2"
                                                name="eduGapsGradAllowed"
                                                onChange={(e)=>{
                                                    if(props?.handleChange) {
                                                        props.handleChange('eduGapsGradAllowed', false)
                                                    }
                                                }}
                                                value={false}
                                                className="custom-control-input"
                                                disabled={props?.hiringData?.eduGapsGradAllowed?.isDisabled}
                                                checked={!props?.hiringData?.eduGapsGradAllowed?.value}
                                            />
                                            <label className="custom-control-label" htmlFor="Graduation2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp" style={{maxWidth:'140px'}}>
                                        <PgkTextField 
                                            
                                            name="eduGapsGrad"
                                            onChange={props?.handleChange}
                                            value={props.hiringData?.eduGapsGrad?.value}
                                            label={'Mention in months'}
                                            validations={['isNumeric']}
                                            inputLabelProps={{style:{fontSize: '.700rem'}}}
                                            inputProps={{style:{fontSize: '.800rem'}}}
                                            errorMessage={props?.hiringData?.eduGapsGrad?.errorMessage}
                                            required={props.hiringData?.eduGapsGrad?.isRequired}
                                            disabled={props.hiringData?.eduGapsGrad?.isDisabled}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item mb-3">
                                <p className="gaps-name">Between Graduation - PG</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="pg"
                                                name="eduGapsGradNPGAllowed"
                                                onChange={(e)=>{
                                                    if(props?.handleChange) {
                                                        props.handleChange('eduGapsGradNPGAllowed', true)
                                                    }
                                                }}
                                                className="custom-control-input" 
                                                disabled={props?.hiringData?.eduGapsGradNPGAllowed?.isDisabled}
                                                checked={props?.hiringData?.eduGapsGradNPGAllowed?.value}
                                            />
                                            <label className="custom-control-label" htmlFor="pg">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="pg1"
                                                name="eduGapsGradNPGAllowed"
                                                onChange={(e)=>{
                                                    if(props?.handleChange) {
                                                        props.handleChange('eduGapsGradNPGAllowed', false)
                                                    }
                                                }}
                                                className="custom-control-input" 
                                                disabled={props?.hiringData?.eduGapsGradNPGAllowed?.isDisabled}
                                                checked={!props?.hiringData?.eduGapsGradNPGAllowed?.value}
                                            />
                                            <label className="custom-control-label" htmlFor="pg1">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp" style={{maxWidth:'140px'}}>
                                        <PgkTextField 
                                            
                                            name="eduGapsGradNPG"
                                            onChange={props?.handleChange}
                                            value={props.hiringData?.eduGapsGradNPG?.value}
                                            label={'Mention in months'}
                                            validations={['isNumeric']}
                                            inputLabelProps={{style:{fontSize: '.700rem'}}}
                                            inputProps={{style:{fontSize: '.800rem'}}}
                                            errorMessage={props?.hiringData?.eduGapsGradNPG?.errorMessage}
                                            required={props.hiringData?.eduGapsGradNPG?.isRequired}
                                            disabled={props.hiringData?.eduGapsGradNPG?.isDisabled}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="text-center mt-4">
                {props?.isNew || props?.editable ? <button type="button" onClick={props.handleSubmit} disabled={!isFormValid()} className="btn mr-4">Save</button> : null}
                <button type="button" onClick={props.openCloseModal} data-dismiss="modal" className="btn">{props?.editable ? 'Cancel' : 'Close'}</button>
            </div>
        </form>
    )
}

export default HiringCriteriaFormCmp

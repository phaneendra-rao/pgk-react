import React from 'react';
import Select from 'react-select';

const HiringCriteriaFormCmp = (props) => {
    return (
        <form className="hiring-modal-form" onSubmit={props.handleSubmit}>
            <div className="modal-grp">
                <input
                    type="text"
                    name="hiringCriteriaName"
                    onChange={props.handleChange}
                    className="modal-inp"
                    value={props?.hiringData?.hiringCriteriaName}
                    required />
                <label className="inp-caption">{`Name of the Hiring Criteria`}<sup>*</sup></label>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="modal-grp">
                        <select
                            name="programID"
                            onChange={props.handleChange}
                            defaultValue={'DEFAULT'}
                            className="modal-inp"
                            value={props?.hiringData?.programID}
                            required
                        >
                            <option value={'DEFAULT'} disabled>Program</option>
                            {props.lookUpData && props.lookUpData?.programCatalog?.length >= 0
                                ? props.lookUpData?.programCatalog.map((item, i) => <option key={i} value={item.programCode}>{`${item.programName}(${item.programCode})`}</option>) : (null)
                            }
                        </select>
                        <label className="inp-caption">{`Program`}</label>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="modal-grp">
                        <Select
                            closeMenuOnSelect={false}
                            label="Branch"
                            isMulti
                            zIndex={100}
                            isSearchable
                            options={props.branchCatalog}
                            onChange={props.handleChangeBranch}
                            placeholder={'Branch'}
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="modal-grp">
                        <input
                            type="number"
                            name="minimumCutoffPercentage10th"
                            max={100}
                            onChange={props.handleChange}
                            value={props?.hiringData?.minimumCutoffPercentage10th}
                            className="modal-inp input-number"
                        />
                        <label className="inp-caption">{`Cutoff Percentage 10th`}<sup>*</sup></label>
                    </div>
                </div>
                <div className={'col-md-3'}>
                    <div className="modal-grp">
                        <input
                            type="text"
                            name="yearOfPassing"
                            maxLength={4}
                            onChange={props.handleChange}
                            value={props?.hiringData?.yearOfPassing}
                            className="modal-inp input-number"
                            required 
                        />
                        <label className="inp-caption">{`Year of Passing`}</label>
                    </div>
                </div>

                <div className="modal-grp w-100 col-md-3">
                    <span>Active Backlogs *</span>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input
                            type="radio"
                            id="backlogs1"
                            name="allowActiveBacklogs"
                            onChange={props.handleChange}
                            value={true}
                            className="custom-control-input"
                            required 
                        />
                        <label className="custom-control-label" htmlFor="backlogs1">Yes</label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                        <input
                            type="radio"
                            id="backlogs2"
                            name="allowActiveBacklogs"
                            onChange={props.handleChange}
                            value={false}
                            className="custom-control-input"
                            required />
                        <label className="custom-control-label" htmlFor="backlogs2">No</label>
                    </div>
                </div>

                <div className={'col-md-3'}>
                    <div className="modal-grp">
                        <input
                            type="text"
                            name="numberOfAllowedBacklogs"
                            onChange={props.handleChange}
                            disabled={!props.hiringData?.allowActiveBacklogs}
                            value={props.hiringData?.numberOfAllowedBacklogs}
                            className="modal-inp input-number"
                            required 
                        />
                        <label className="inp-caption">How many Backlogs ?</label>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="modal-grp">
                        <input
                            type="number"
                            name="minimumCutoffPercentage12th"
                            max={100}
                            onChange={props.handleChange}
                            value={props?.hiringData?.minimumCutoffPercentage12th}
                            className="modal-inp input-number"
                        />
                        <label className="inp-caption">{`Cutoff Percentage 12th`}<sup>*</sup></label>
                    </div>
                </div>
            </div>
            <div className={'row'}>
                <div className="col-md-3">
                </div>
                <div className="col-md-3">
                </div>
                <div className="col-md-3">
                    <div className="modal-grp">
                        <input
                            type="number"
                            name="minimumCutoffCGPAGrad"
                            max={100}
                            onChange={props.handleChange}
                            value={props?.hiringData?.minimumCutoffCGPAGrad}
                            className="modal-inp input-number"
                        />
                        <label className="inp-caption">{`Cutoff CGPA UG`}<sup>*</sup></label>
                    </div>
                </div>
            </div>
            <div className={'row'}>
                <div className="col-md-3">
                </div>
                <div className="col-md-3">
                </div>
                <div className="col-md-3">
                    <div className="modal-grp">
                        <input
                            type="number"
                            name="minimumCutoffPercentageGrad"
                            max={100}
                            onChange={props.handleChange}
                            value={props?.hiringData?.minimumCutoffPercentageGrad}
                            className="modal-inp input-number" 
                        />
                        <label className="inp-caption">{`Cutoff Percentage UG`}<sup>*</sup></label>
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
                                onChange={props.handleChange}
                                name="eduGaps"
                                value={true}
                                className="custom-control-input"
                                required />
                            <label className="custom-control-label" htmlFor="gaps1">Yes</label>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                id="gaps2"
                                name="eduGaps"
                                onChange={props.handleChange}
                                value={false}
                                className="custom-control-input"
                                required />
                            <label className="custom-control-label" htmlFor="gaps2">No</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4">
                    <div className="modal-grp">
                        <textarea
                            name="remarks"
                            onChange={props.handleChange}
                            className="modal-inp modal-textarea"
                            value={props?.hiringData?.remarks}
                            rows={8} 
                            placeholder="Remarks"
                        />
                    </div>
                </div>
                <div className="col">
                    {props.eduGaps === true
                        ? <div className="gaps">
                            <div className="gaps-item mb-3">
                                <h3 className="gaps-title">GAPS DURING</h3>
                                <div className="modal-grp" />
                            </div>
                            <div className="gaps-item">
                                <p className="gaps-name">Schooling</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="Schooling1"
                                                name="eduGapsSchoolAllowed"
                                                onChange={props.handleChange}
                                                value={true}
                                                className="custom-control-input"
                                                required />
                                            <label className="custom-control-label" htmlFor="Schooling1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="Schooling2"
                                                name="eduGapsSchoolAllowed"
                                                onChange={props.handleChange}
                                                value={false}
                                                className="custom-control-input"
                                                required />
                                            <label className="custom-control-label" htmlFor="Schooling2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input
                                            type="text"
                                            name="eduGapsSchool"
                                            onChange={props.handleChange}
                                            value={props.hiringData?.eduGapsSchool}
                                            className="modal-inp input-number" 
                                            required 
                                        />
                                        <label className="inp-caption">{`Mention in months`}</label>
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
                                                onChange={props.handleChange}
                                                value={true}
                                                className="custom-control-input"
                                                required />
                                            <label className="custom-control-label" htmlFor="inter1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="inter2"
                                                name="eduGaps11N12Allowed"
                                                onChange={props.handleChange}
                                                value={false}
                                                className="custom-control-input"
                                                required />
                                            <label className="custom-control-label" htmlFor="inter2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" name="eduGaps11N12"
                                            onChange={props.handleChange}
                                            value={props.hiringData?.eduGaps11N12}
                                            className="modal-inp input-number"
                                            required
                                        />
                                        <label className="inp-caption">{`Mention in months`}</label>
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
                                                name="eduGapsGradAllowed"
                                                onChange={props.handleChange}
                                                value={true}
                                                className="custom-control-input"
                                                required />
                                            <label className="custom-control-label" htmlFor="Between1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="Between2"
                                                name="eduGapsGradAllowed"
                                                onChange={props.handleChange}
                                                value={false}
                                                className="custom-control-input"
                                                required />
                                            <label className="custom-control-label" htmlFor="Between2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" 
                                            name="eduGaps12NGrad"
                                            onChange={props.handleChange}
                                            value={props.hiringData?.eduGaps12NGrad}
                                            className="modal-inp input-number" 
                                            required 
                                        />
                                        <label className="inp-caption">{`Mention in months`}</label>
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
                                                name="eduGapsPGAllowed"
                                                onChange={props.handleChange}
                                                value={true}
                                                className="custom-control-input"
                                                required />
                                            <label className="custom-control-label" htmlFor="Graduation1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="Graduation2"
                                                name="eduGapsPGAllowed"
                                                onChange={props.handleChange}
                                                value={false}
                                                className="custom-control-input"
                                                required />
                                            <label className="custom-control-label" htmlFor="Graduation2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" 
                                            name="eduGapsGrad"
                                            onChange={props.handleChange}
                                            value={props.hiringData?.eduGapsGrad}
                                            className="modal-inp input-number" 
                                            required 
                                        />
                                        <label className="inp-caption">{`Mention in months`}</label>
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
                                                onChange={props.handleChange}
                                                className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="pg">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="pg1"
                                                name="eduGapsGradNPGAllowed"
                                                onChange={props.handleChange}
                                                className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="pg1">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" name="eduGapsGradNPG"
                                            onChange={props.handleChange}
                                            value={props.hiringData?.eduGapsGradNPG}
                                            className="modal-inp input-number" />
                                        <label className="inp-caption">{`Mention in months`}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : <div className="gaps gaps-disable">
                            <div className="gaps-item mb-3">
                                <h3 className="gaps-title">GAPS DURING</h3>
                                <div className="modal-grp" />
                            </div>
                            <div className="gaps-item mb-3">
                                <p className="gaps-name">Schooling</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" />
                                            <label className="custom-control-label">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" />
                                            <label className="custom-control-label">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" className="modal-inp" />
                                        <label className="inp-caption">{`Mention in months`}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item mb-3">
                                <p className="gaps-name">XI - XII</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" />
                                            <label className="custom-control-label">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" />
                                            <label className="custom-control-label">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" className="modal-inp" />
                                        <label className="inp-caption">{`Mention in months`}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item mb-3">
                                <p className="gaps-name">Between XII - Graduation</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" />
                                            <label className="custom-control-label">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" />
                                            <label className="custom-control-label">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" className="modal-inp" />
                                        <label className="inp-caption">{`Mention in months`}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item mb-3">
                                <p className="gaps-name">During Graduation</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" />
                                            <label className="custom-control-label">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" />
                                            <label className="custom-control-label">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" name className="modal-inp" />
                                        <label className="inp-caption">{`Mention in months`}</label>
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item mb-3">
                                <p className="gaps-name">Between Graduation - PG</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" />
                                            <label className="custom-control-label">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" className="custom-control-input" />
                                            <label className="custom-control-label">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" name className="modal-inp" />
                                        <label className="inp-caption">{`Mention in months`}</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
            <div className="text-center mt-4">
                <button type="submit" className="btn mr-4">Save</button>
                <button type="button" onClick={props.openCloseModal} data-dismiss="modal" className="btn">Cancel</button>
            </div>
        </form>
    )
}

export default HiringCriteriaFormCmp

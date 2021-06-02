import React from 'react';
import Select from 'react-select';

const HiringCriteriaFormCmp = (props) => {
    const year = new Date().getFullYear();
    return (
        <form className="hiring-modal-form" onSubmit={props.handleSubmit}>
            <div className="modal-grp">
                <input
                    type="text"
                    name="hiringCriteriaName"
                    onChange={props.handleChange}
                    className="modal-inp"
                    required />
                <label className="inp-caption">{`Name of the Hiring Criteria`}<sup>*</sup></label>
            </div>
            <div className="row">
                <div className="col-md">
                    <div className="modal-grp">
                        <select
                            name="programID"
                            onChange={props.handleChange}
                            defaultValue={'DEFAULT'}
                            className="modal-inp" required>
                            <option value={'DEFAULT'} disabled>Program</option>
                            {props.lookUpData && props.lookUpData?.programCatalog?.length >= 0
                                ? props.lookUpData?.programCatalog.map((item, i) => <option key={i} value={item.programCode}>{`${item.programName}(${item.programCode})`}</option>) : (null)
                            }
                        </select>
                        <label className="inp-caption">{`Program`}</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="modal-grp">
                        {/* <select
                            name="courseID"
                            onChange={props.handleChange}
                            defaultValue={'DEFAULT'}
                            className="modal-inp" required>
                            <option value={''}>Branch</option>
                            {props.branchCatalog && props?.branchCatalog?.length >= 0
                                ? props?.branchCatalog.map((item, i) => <option key={i} value={item.branchID}>{item.branchName}</option>) : (null)
                            }
                        </select> */}
                        <Select
                            closeMenuOnSelect={false}
                            label="Branch"
                            isMulti
                            zIndex={100}
                            options={props.branchCatalog}
                            onChange={props.handleChangeBranch}
                        />
                    </div>
                </div>
                <div className="w-100"></div>
                <div className="col-md-4">
                    <div className="modal-grp">
                        <input
                            type="number"
                            name="minimumCutoffPercentage10th"
                            min="0"
                            onChange={props.handleChange}
                            className="modal-inp"/>
                        <label className="inp-caption">{`Cutoff Percentage 10th`}<sup>*</sup></label>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="modal-grp">
                        <input
                            type="number"
                            name="minimumCutoffPercentage12th"
                            min="0"
                            onChange={props.handleChange}
                            className="modal-inp"/>
                        <label className="inp-caption">{`Cutoff Percentage 12th`}<sup>*</sup></label>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="modal-grp">
                        <input
                            type="number"
                            name="minimumCutoffCGPAGrad"
                            min="0"
                            onChange={props.handleChange}
                            className="modal-inp"/>
                        <label className="inp-caption">{`Cutoff Percentage UG`}<sup>*</sup></label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="modal-grp">
                        <input
                            type="number"
                            name="minimumCutoffPercentageGrad"
                            min="0"
                            onChange={props.handleChange}
                            className="modal-inp" />
                        <label className="inp-caption">{`Cutoff Percentage PG`}<sup>*</sup></label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="modal-grp">
                        <input
                            type="number"
                            name="yearOfPassing"
                            min="1900"
                            max={year}
                            maxLength={4}
                            onChange={props.handleChange}
                            className="modal-inp"
                            required />
                        <label className="inp-caption">{`Year of Passing`}</label>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="row align-items-center">
                        <div className="col">
                            <div className="modal-grp w-100">
                                <span>Active Backlogs *</span>
                                <div className="custom-control custom-radio custom-control-inline">
                                    <input
                                        type="radio"
                                        id="backlogs1"
                                        name="allowActiveBacklogs"
                                        onChange={props.handleChange}
                                        value={true}
                                        className="custom-control-input"
                                        required />
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
                        </div>
                        <div className="col">
                            <div className="modal-grp">
                                <input
                                    type="number"
                                    name="numberOfAllowedBacklogs"
                                    min="0"
                                    onChange={props.handleChange}
                                    disabled={!props.hiringData?.allowActiveBacklogs}
                                    value={props.hiringData?.numberOfAllowedBacklogs?.toString()}
                                    className="modal-inp"
                                    required />
                                <label className="inp-caption">How many Backlogs ?</label>
                            </div>
                        </div>
                    </div>
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
            <div className="row">
                <div className="col-md-4">
                    <div className="modal-grp">
                        <textarea
                            name="remarks"
                            onChange={props.handleChange}
                            className="modal-inp modal-textarea"
                            rows={8} placeholder="Remarks"
                            defaultValue={""} />
                    </div>
                </div>
                <div className="col">
                    {props.eduGaps === true
                        ? <div className="gaps">
                            <div className="gaps-item mb-3">
                                <h3 className="gaps-title">GAPS DURING</h3>
                                <div className="modal-grp" />
                            </div>
                            <div className="gaps-item mb-3">
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
                                            type="number"
                                            name="eduGapsSchool"
                                            onChange={props.handleChange}
                                            min="0"
                                            value={props.hiringData?.eduGapsSchool?.toString()}
                                            className="modal-inp" required />
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
                                        <input type="number" name="eduGaps11N12"
                                            onChange={props.handleChange}
                                            min="0"
                                            value={props.hiringData?.eduGaps11N12?.toString()}
                                            className="modal-inp" required />
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
                                        <input type="number" name="eduGaps12NGrad"
                                            onChange={props.handleChange}
                                            min="0"
                                            value={props.hiringData?.eduGaps12NGrad?.toString()}
                                            className="modal-inp" required />
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
                                        <input type="number" name="eduGapsGrad"
                                            onChange={props.handleChange}
                                            min="0"
                                            value={props.hiringData?.eduGapsGrad?.toString()}
                                            className="modal-inp" required />
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
                                        <input type="number" name="eduGapsGradNPG"
                                            onChange={props.handleChange}
                                            min="0"
                                            value={props.hiringData?.eduGapsGradNPG?.toString()}
                                            className="modal-inp" />
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

import React from 'react';

const HiringCriteriaFormCmp = ({ hiringData, openCloseModal, handleChange, handleSubmit, eduGaps, lookUpData }) => {
    return (
        <form className="hiring-modal-form" onSubmit={handleSubmit}>
            <div className="modal-grp">
                <input
                    type="text"
                    name="hiringCriteriaName"
                    onChange={handleChange}
                    className="modal-inp"
                    placeholder="Name of the Hiring Criteria *"
                    required />
            </div>
            <div className="row">
                <div className="col-md">
                    <div className="modal-grp">
                        <select
                            name="programID"
                            onChange={handleChange}
                            className="modal-inp" required>
                            <option value={'DEFAULT'} disabled>Program</option>
                            {lookUpData && lookUpData?.programs?.length >= 0
                                ? lookUpData?.programs.map((item, i) => <option key={i} value={item.ProgramID}>{item.program}</option>) : (null)
                            }
                        </select>
                    </div>
                </div>
                <div className="col-md">
                    <div className="modal-grp">
                        <select
                            name="courseID"
                            onChange={handleChange}
                            defaultValue={'DEFAULT'}
                            className="modal-inp" required>
                            <option value={'DEFAULT'} disabled selected>Course</option>
                            {lookUpData && lookUpData?.departments?.length >= 0
                                ? lookUpData?.departments.map((item, i) => <option key={i} value={item.departmentID}>{item.ProgramID}</option>) : (null)
                            }
                        </select>
                    </div>
                </div>
                <div className="col-md">
                    <div className="modal-grp">
                        <input
                            type="number"
                            name="cutOff"
                            min="0"
                            onChange={handleChange}
                            className="modal-inp"
                            placeholder="Cutoff Percentage *"
                            required />
                    </div>
                </div>
                <div className="col-md">
                    <div className="modal-grp">
                        <select
                            name="yearOfPassing"
                            onChange={handleChange}
                            className="modal-inp" required>
                            <option value={''} disabled>Year</option>
                            <option>2018</option>
                            <option>2017</option>
                            <option>2019</option>
                            <option>2020</option>
                        </select>
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
                                        onChange={handleChange}
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
                                        onChange={handleChange}
                                        value={false}
                                        className="custom-control-input"
                                        required />
                                    <label className="custom-control-label" htmlFor="backlogs2">No</label>
                                </div>
                            </div>
                        </div>
                        <div className="col" style={{ maxWidth: '100px' }}>
                            <div className="modal-grp">
                                {hiringData?.allowActiveBacklogs
                                    ? <select
                                        name="numberOfAllowedBacklogs"
                                        onChange={handleChange}
                                        className="modal-inp"
                                        required>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                    : <select
                                        className="modal-inp" disabled>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                }
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                            onChange={handleChange}
                            className="modal-inp modal-textarea"
                            rows={8} placeholder="Remarks"
                            defaultValue={""} />
                    </div>
                </div>
                <div className="col">
                    {eduGaps === true
                        ? <div className="gaps">
                            <div className="gaps-item">
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
                                                onChange={handleChange}
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
                                                onChange={handleChange}
                                                value={false}
                                                className="custom-control-input"
                                                required />
                                            <label className="custom-control-label" htmlFor="Schooling2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" className="modal-inp" placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item">
                                <p className="gaps-name">XI - XII</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="inter1"
                                                name="eduGaps11N12Allowed"
                                                onChange={handleChange}
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
                                                onChange={handleChange}
                                                value={false}
                                                className="custom-control-input"
                                                required />
                                            <label className="custom-control-label" htmlFor="inter2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" className="modal-inp" placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item">
                                <p className="gaps-name">Between XII - Graduation</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="Between1"
                                                name="eduGapsGradAllowed"
                                                onChange={handleChange}
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
                                                onChange={handleChange}
                                                value={false}
                                                className="custom-control-input"
                                                required />
                                            <label className="custom-control-label" htmlFor="Between2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" className="modal-inp" placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item">
                                <p className="gaps-name">During Graduation</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                id="Graduation1"
                                                name="eduGapsPGAllowed"
                                                onChange={handleChange}
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
                                                onChange={handleChange}
                                                value={false}
                                                className="custom-control-input"
                                                required />
                                            <label className="custom-control-label" htmlFor="Graduation2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" className="modal-inp" placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="gaps-item">
                                <p className="gaps-name">Between Graduation - PG</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input
                                             type="radio"
                                              id="pg1"
                                               name="pg" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="pg1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="pg2" name="pg" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="pg2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" name className="modal-inp" placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        : <div className="gaps gaps-disable">
                            <div className="gaps-item">
                                <h3 className="gaps-title">GAPS DURING</h3>
                                <div className="modal-grp" />
                            </div>
                            <div className="gaps-item">
                                <p className="gaps-name">Schooling</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="Schooling1" name="Schooling" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="Schooling1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="Schooling2" name="Schooling" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="Schooling2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" className="modal-inp" placeholder="Remarks *" />
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item">
                                <p className="gaps-name">XI - XII</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="inter1" name="inter" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="inter1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="inter2" name="inter" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="inter2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" className="modal-inp" placeholder="Remarks *" />
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item">
                                <p className="gaps-name">Between XII - Graduation</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="Between1" name="Between" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="Between1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="Between2" name="Between" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="Between2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" className="modal-inp" placeholder="Remarks *" />
                                    </div>
                                </div>
                            </div>
                            <div className="gaps-item">
                                <p className="gaps-name">During Graduation</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="Graduation1" name="Graduation" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="Graduation1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="Graduation2" name="Graduation" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="Graduation2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" name className="modal-inp" placeholder="Remarks *" />
                                    </div>
                                </div>
                            </div>
                            {/* <div className="gaps-item">
                                <p className="gaps-name">Between Graduation - PG</p>
                                <div className="gaps-content">
                                    <div className="modal-grp m-0">
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="pg1" name="pg" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="pg1">Yes</label>
                                        </div>
                                        <div className="custom-control custom-radio custom-control-inline">
                                            <input type="radio" id="pg2" name="pg" className="custom-control-input" />
                                            <label className="custom-control-label" htmlFor="pg2">No</label>
                                        </div>
                                    </div>
                                    <div className="modal-grp">
                                        <input type="text" className="modal-inp" placeholder="Remarks *" required />
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    }
                </div>
            </div>
            <div className="text-center mt-4">
                <button type="submit" className="btn mr-4">Save</button>
                <button type="button" onClick={openCloseModal} data-dismiss="modal" className="btn">Cancel</button>
            </div>
        </form>
    )
}

export default HiringCriteriaFormCmp

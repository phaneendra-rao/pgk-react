import React from 'react';
import Select from 'react-select';

const AddJobsCmp = (props) => {
    return (
        <form className="add-new-jobs-section" onSubmit={props.handleSubmit}>
            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                <p className="heading">{props.isEdit ? 'Update ' : 'Add New '} Job</p>
            </div>
            <div className="job-details-form py-4">
                <div className="row m-0">
                    <div className="col-md-3">
                        <div className="d-grp">
                            <input type="text"
                                name="jobName"
                                onChange={props.handleChange}
                                value={props.addJobs.jobName}
                                className="d-inp bg-white"
                                placeholder="Name of the job"
                                required />
                            <label className="inp-caption">Name of the job</label>
                        </div>
                        <div className="d-grp">
                            <select
                                name="jobType"
                                onChange={props.handleChange}
                                value={props.addJobs.jobType}
                                className="d-inp bg-white"
                                required>
                                <option value={'DEFAULT'} disabled>Job Type</option>
                                {props.lookUpData && props.lookUpData?.jobType?.length >= 0
                                    ? props.lookUpData?.jobType.map((item, i) => <option key={i} value={item.jobTypeCode}>{item.jobType}</option>) : (null)
                                }
                                {/* <option value="FT">Full Time</option>
                                <option value="PT">Part Time</option>
                                <option value="PM">Permanent</option> */}
                            </select>
                            <label className="inp-caption">Job Type</label>
                        </div>
                        <div className="d-grp">
                            <select
                                name="hiringCriteriaID"
                                onChange={props.handleChange}
                                // value={props.addJobs.hiringCriteriaID + "," + props.addJobs.hiringCriteriaName}
                                value={props.addJobs.hiringCriteriaID}
                                className="d-inp bg-white"
                            >
                                <option value={'DEFAULT'} disabled>Select Hiring Criteria</option>
                                {props.hiringCriteria && props.hiringCriteria?.length >= 0
                                    ? props.hiringCriteria?.map((item, i) => <option key={i} value={item.hiringCriteriaID + ',' + item.hiringCriteriaName}>{item.hiringCriteriaName}</option>)
                                    : (null)
                                }
                            </select>
                            <label className="inp-caption">Hiring Criteria</label>
                        </div>
                        <div className="d-grp">
                            <input
                                type="date"
                                name="monthOfHiring"
                                onChange={props.handleChange}
                                value={props.dateFormat(props.addJobs.monthOfHiring)}
                                className="d-inp bg-white"
                                placeholder="Date of hiring"
                                required />
                            <label className="inp-caption">Date of hiring</label>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="d-grp">
                            <select
                                name="status"
                                onChange={props.handleChange}
                                value={props.addJobs.status}
                                className="d-inp bg-white"
                                required>
                                <option value={'DEFAULT'} disabled>Select Status</option>
                                <option value="Open">Open</option>
                                <option value="Close">Close</option>
                            </select>
                            <label className="inp-caption">Status</label>
                        </div>
                        <div className="d-grp">
                            <input
                                type="number"
                                name="noOfPositions"
                                onChange={props.handleChange}
                                value={props.addJobs.noOfPositions}
                                className="d-inp bg-white"
                                min={1}
                                placeholder="No of positions input-number"
                                required />
                            <label className="inp-caption">No of positions</label>
                        </div>
                        <div className="d-grp">
                            <select
                                name="location"
                                onChange={props.handleChange}
                                value={props.addJobs.location}
                                className="d-inp bg-white"
                                required>
                                <option value={'DEFAULT'}>Select the location</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                            </select>
                            <label className="inp-caption">Location</label>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="d-grp">
                            {/* <select
                                name="skillID"
                                onChange={(e) => props.handleChangeSkills(e)}
                                // value={item.skillID + ',' + item.skill}
                                className="d-inp bg-white"
                                required>
                                <option value={'DEFAULT'} disabled>Select the skill set</option>
                                {props.lookUpData && props.lookUpData?.skills?.length >= 0
                                    ? props.lookUpData?.skills.map((item, i) => <option key={i} value={item.SkillID + ',' + item.skill}>{item.skill}</option>) : (null)
                                }
                            </select> */}
                            <Select
                                closeMenuOnSelect={false}
                                defaultValue={props.addskills[1]}
                                label="Select Skills"
                                placeholder={'Select Skill(s)'}
                                isMulti
                                options={props.skillsList}
                                onChange={props.handleChangeSkills}
                            />
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="d-grp">
                            <input
                                type="number"
                                name="salaryMinRange"
                                onChange={props.handleChange}
                                defaultValue={props.addJobs.salaryMinRange}
                                className="d-inp bg-white input-number"
                                min={0}
                                placeholder="Salary Range"
                                required />
                            <label className="inp-caption">Min Salary</label>
                        </div>
                        <div className="d-grp">
                            <input
                                type="number"
                                name="salaryMaxRange"
                                onChange={props.handleChange}
                                defaultValue={props.addJobs.salaryMaxRange}
                                className="d-inp bg-white input-number"
                                min={0}
                                placeholder="Salary Range"
                                required />
                            <label className="inp-caption">Max Salary</label>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full">
                <input type="text"
                    name="jobName"
                    onChange={props.handleChange}
                    defaultValue={props.addJobs.jobName}
                    className="form-control"
                    placeholder="Name of the job"
                    required />
                <select
                    name="hiringCriteriaID"
                    onChange={props.handleChange}
                    value={props.addJobs.hiringCriteriaID + "," + props.addJobs.hiringCriteriaName}
                    className="form-control"
                    required>
                    <option value={'DEFAULT'} disabled>Select Hiring Criteria</option>
                    {props.hiringCriteria && props.hiringCriteria?.length >= 0
                        ? props.hiringCriteria?.map((item, i) => <option key={i} value={item.hiringCriteriaID + ',' + item.hiringCriteriaName}>{item.hiringCriteriaName}</option>)
                        : (null)
                    }
                </select>
                <select
                    name=""
                    onChange={props.handleChange}
                    className="form-control"
                    required>
                    <option>Open</option>
                    <option>Close</option>
                </select>
            </div>
             <div className="add-new-jobs-section-list  w-full">
                {props.addskills?.map((item, i) => (
                    <div className="add-new-jobs-section-item d-flex flex-row justify-content-between align-items-center" key={i}>
                        <p className="sno">{i + 1}</p>
                        <select
                            name="skillID"
                            onChange={(e) => props.handleChangeSkills(e, i)}
                            value={item.skillID + ',' + item.skill}
                            className="form-control"
                            required>
                            <option value={'DEFAULT'} disabled>Select the skill set</option>
                            {props.lookUpData && props.lookUpData?.skills?.length >= 0
                                ? props.lookUpData?.skills.map((item, i) => <option key={i} value={item.SkillID + ',' + item.skill}>{item.skill}</option>) : (null)
                            }
                        </select>
                        <input
                            type="number"
                            name="noOfPositions"
                            onChange={(e) => props.handleChangeSkills(e, i)}
                            value={item.noOfPositions}
                            className="form-control"
                            min="1"
                            placeholder="No of positions"
                            required />
                        <select
                            name="location"
                            onChange={(e) => props.handleChangeSkills(e, i)}
                            value={item.location}
                            className="form-control"
                            required>
                            <option>Select the location</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                        </select>
                        <input
                            type="text"
                            name="salaryRange"
                            onChange={(e) => props.handleChangeSkills(e, i)}
                            defaultValue={item.salaryRange}
                            className="form-control"
                            placeholder="Salary Range"
                            required />
                        <input
                            type="date"
                            name="dateOfHiring"
                            onChange={(e) => props.handleChangeSkills(e, i)}
                            value={props.dateFormat(item?.dateOfHiring)}
                            className="form-control"
                            placeholder="Date of hiring"
                            required />
                        {props.addskills?.length - 1 !== i && <button
                            type="button"
                            onClick={() => props.removeItem(i)}
                            className="round-btn d-flex justify-content-center align-items-center">
                            <i className="fas fa-minus" />
                        </button>
                        }
                        {props.addskills?.length - 1 == i && <button
                            type="button"
                            onClick={props.addNewItem}
                            className="round-btn d-flex justify-content-center align-items-center">
                            <i className="fas fa-plus" />
                        </button>
                        }

                    </div>
                ))}
            </div> */}
            <div className="d-flex flex-row justify-content-center align-items-center w-full mt-4">
                <button type="submit" className="job-btn">{props.isEdit ? 'Update' : 'Save'} Job</button>
                <button type="reset" onClick={props.handleClick} className="job-btn">Cancel</button>
            </div>
        </form>
    )
}

export default AddJobsCmp;

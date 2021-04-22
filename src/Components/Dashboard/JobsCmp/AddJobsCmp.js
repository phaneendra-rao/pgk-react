import React from 'react'

const AddJobsCmp = (props) => {
    return (
        <form className="row add-new-jobs-section" onSubmit={props.handleSubmit}>
            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                <p className="heading">Add New Job</p>
            </div>
            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full">
                <input type="text"
                    name="jobName"
                    onChange={props.handleChange}
                    className="form-control"
                    placeholder="Name of the job"
                    required />
                <select
                    name="hiringCriteriaID"
                    onChange={props.handleChange}
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
                    <div className="add-new-jobs-section-item d-flex flex-row justify-content-between align-items-center">
                        <p className="sno">{i + 1}</p>
                        <select
                            name="skillID"
                            onChange={(e) => props.handleChangeSkills(e, i)}
                            className="form-control"
                            required>
                            {/* <option value>Select the skill set</option> */}
                            <option value={'DEFAULT'} disabled>Select the skill set</option>
                            {props.lookUpData && props.lookUpData?.skills?.length >= 0
                                ? props.lookUpData?.skills.map((item, i) => <option key={i} value={item.SkillID + ',' + item.skill}>{item.skill}</option>) : (null)
                            }
                        </select>
                        <input
                            type="number"
                            name="noOfPositions"
                            onChange={(e) => props.handleChangeSkills(e, i)}
                            className="form-control"
                            min="1"
                            placeholder="No of positions"
                            required />
                        <select
                            name="location"
                            onChange={(e) => props.handleChangeSkills(e, i)}
                            className="form-control"
                            required>
                            <option>Select the location</option>
                            <option>Hyderabad</option>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                        </select>
                        <input
                            type="text"
                            name="salaryRange"
                            onChange={(e) => props.handleChangeSkills(e, i)}
                            className="form-control"
                            placeholder="Salary Range"
                            required />
                        <input
                            type="date"
                            name="dateOfHiring"
                            onChange={(e) => props.handleChangeSkills(e, i)}
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
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center w-full mt-4">
                <button type="submit" className="job-btn">Save Job</button>
                <button type="reset" className="job-btn">Cancel</button>
            </div>
        </form>
    )
}

export default AddJobsCmp;

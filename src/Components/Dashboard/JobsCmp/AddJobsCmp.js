import React from 'react'

const AddJobsCmp = () => {
    return (
        <div className="row add-new-jobs-section">
            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                <p className="heading">Add New Job</p>
            </div>
            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full">
                <input type="text" className="form-control" placeholder="Name of the job" />
                <select name className="form-control">
                    <option>Select Hiring Criteria</option>
                </select>
                <select name className="form-control">
                    <option>Open</option>
                </select>
            </div>
            <div className="add-new-jobs-section-list  w-full">
                <div className="add-new-jobs-section-item d-flex flex-row justify-content-between align-items-center">
                    <p className="sno">1</p>
                    <select name className="form-control" id>
                        <option value>Select the skill set</option>
                    </select>
                    <input type="number" className="form-control" placeholder="No of positions" />
                    <select name className="form-control" id>
                        <option value>Select the location</option>
                    </select>
                    <input type="text" className="form-control" placeholder="Salary Range" />
                    <input type="date" className="form-control" placeholder="Date of hiring" />
                    <div className="round-btn d-flex justify-content-center align-items-center"><i className="fas fa-plus" /></div>
                </div>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-center w-full mt-4">
                <div className="job-btn">Save Job</div>
                <div className="job-btn">Cancel</div>
            </div>
        </div>
    )
}

export default AddJobsCmp;

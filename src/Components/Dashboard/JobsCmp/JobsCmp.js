import React from 'react'

const JobsCmp = (props) => {
    return (
        <div className="row published-jobs-section">
            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                <p className="heading">Jobs Created</p>
                {!props.allJobs && !props.allJobs?.length >= 0
                    ? <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full">
                        <div className="item d-flex flex-row justify-content-between align-items-center w-full">
                            <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center">
                                <i className="fas fa-cube" />
                            </div>
                            <p className="job-label">Job - 1</p>
                            <select name className="form-control job-dropdown">
                                <option value>Hiring Criteria</option>
                            </select>
                            <select name className="form-control job-dropdown">
                                <option value>Open</option>
                            </select>
                            <p className="job-published-date">Created on 09/02/2021</p>
                        </div>
                        <div className="vertical-divider" />
                        <div className="job-list-item-details-container d-flex flex-row justify-content-center align-items-center">
                            <button className="job-details-btn d-flex flex-row justify-content-around align-items-center" onClick={() => props.detailsModal({})} data-toggle="modal" data-target="#jobDetails">
                                <p>Details</p>
                                <i className="fas fa-chevron-right" />
                            </button>
                        </div>
                    </div> : "No data"}
                {/* <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full">
                    <div className="item d-flex flex-row justify-content-between align-items-center w-full">
                        <div className="job-icon job-orange-icon d-flex justify-content-center align-items-center">
                            <i className="fas fa-cube" />
                        </div>
                        <p className="job-label">Job - 2</p>
                        <select name className="form-control job-dropdown">
                            <option value>Hiring Criteria</option>
                        </select>
                        <select name className="form-control job-dropdown">
                            <option value>Open</option>
                        </select>
                        <p className="job-published-date">Created on 09/02/2021</p>
                    </div>
                    <div className="vertical-divider" />
                    <div className="job-list-item-details-container d-flex flex-row justify-content-center align-items-center">
                        <div className="job-details-btn d-flex flex-row justify-content-around align-items-center" data-toggle="modal" data-target="#exampleModalCenter">
                            <p>Details</p>
                            <i className="fas fa-chevron-right" />
                        </div>
                    </div>
                </div> */}
                <button type="button" onClick={props.handleClick} className="add-job-btn"> Add New Job</button>
            </div>
        </div>

    )
}

export default JobsCmp

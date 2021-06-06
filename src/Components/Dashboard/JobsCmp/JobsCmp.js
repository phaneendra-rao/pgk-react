import React from 'react'
import moment from 'moment';
const JobsCmp = (props) => {
    return (
        <div className="row published-jobs-section">
            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                <p className="heading">Jobs Created</p>
                {props.allJobs && props.allJobs?.length >= 0
                    ? props.allJobs?.map((item, i) => <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full" key={i}>
                        <div className="item d-flex flex-row justify-content-between align-items-center w-full">
                            <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center">
                                <i className="fas fa-cube" />
                            </div>
                            <p className="job-label">{item.jobName}</p>
                            <select name="" className="form-control job-dropdown">
                                <option>{item.hiringCriteriaName}</option>
                            </select>
                            <select name="status" defaultValue={item.status} className="form-control job-dropdown">
                                <option value={'DEFAULT'} disabled>Select Status</option>
                                <option value="Open">Open</option>
                                <option value="Close">Close</option>
                            </select>
                            <p className="job-published-date">Created on {item?.creationDate ? moment(item?.creationDate).format("DD-MM-YYYY") : ''}</p>
                        </div>
                        <div className="vertical-divider" />
                        <div className="job-list-item-details-container d-flex flex-row justify-content-center align-items-center">
                            <button 
                                className="btn d-flex flex-row justify-content-around align-items-center" 
                                style={{
                                    height: "30px",
                                    width: "100px",
                                    fontSize: ".600rem",
                                    marginRight: "10px",
                                    borderRadius: "4px",
                                }} 
                                onClick={() => props.detailsModal(item.jobID)}>
                                <p>Details</p>
                                <i className="fas fa-chevron-right" />
                            </button>
                        </div>
                    </div>) : "No data"}
                <button type="button" onClick={props.handleClick} className="btn"> Add New Job</button>
            </div>
        </div>

    )
}

export default JobsCmp

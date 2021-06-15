import React from 'react'
import moment from 'moment';
import { useSelector } from 'react-redux';

const JobsCmp = (props) => {
    const apiStatus = useSelector(state => state.DashboardReducer.apiStatus);

    return (
        <div className="row published-jobs-section">
            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                <p className="heading">Jobs Created</p>
                {props.allJobs && props.allJobs?.length 
                    ? props.allJobs?.map((item, i) => <div className="row align-items-center jobs-list-item w-full" key={i}  style={{height: '80px'}}>
                        <div className="col-md-2 row align-items-center p-0">
                                    <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center">
                                        <i className="fas fa-cube" />
                                    </div>
                                    <p className="job-label text-ellipsis" style={{marginLeft: '14px', maxWidth: '120px', textTransform:'capitalize'}}>{item.jobName}</p>
                                </div>
                                <div className="col-md-2">
                                    <div style={{border: '1px solid #454545', borderRadius: '4px', padding: '8px 4px',}}>
                                        <p className="text-ellipsis" style={{marginLeft: '10px', textTransform:'capitalize', fontSize: '.800rem'}}>{item.hiringCriteriaName}</p>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <div style={{border: '1px solid #454545', borderRadius: '4px', padding: '8px 4px', minWidth: '120px'}}>
                                        <p style={{marginLeft: '10px', textTransform:'capitalize', fontSize: '.800rem'}}>{item.status}</p>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                </div>

                        <div className="col-md-3 item align-items-center">
                                    <p className="job-published-date" style={{color: '#454545'}}>
                                        {item?.creationDate
                                        ? `Created on ${moment(item?.creationDate).format(
                                            "DD-MM-YYYY"
                                        )}`
                                        : "-"}
                                    </p>
                                </div>
                        <div className="col-md-2 row item p-0 d-flex justify-content-between align-items-center w-full">
                                    <div className="vertical-divider" />
                                    <button
                                        type="button"
                                        className="btn d-flex justify-content-around align-items-center"
                                        style={{
                                            height: "30px",
                                            width: "100px",
                                            fontSize: ".700rem",
                                            marginRight: "10px",
                                            borderRadius: "4px",
                                            textTransform: "uppercase",
                                            fontWeight: 'bolder'
                                        }}
                                        onClick={() => props.viewDetails(item.jobID)}
                                    >
                                        <p>Details</p>
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                                </div>
                    </div>): apiStatus ? 'Loading...' : 'No jobs created, Please add to continue.'}
                <button type="button" onClick={props.openCloseJobModal} className="btn add-job-btn" style={{height: '20px'}}> Add New Job</button>
            </div>
        </div>

    )
}

export default JobsCmp

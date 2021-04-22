import React from 'react'

const HiringCriteriaCmp = ({ openCloseModal }) => {
    return (
        <>
            <div className="row published-jobs-section">
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="heading">Hiring Criteria</p>
                    <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full">
                        <div className="item d-flex flex-row justify-content-between align-items-center w-full">
                            <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center">
                                <i className="fas fa-cube" />
                            </div>
                            <p className="job-label">Hiring Criteria - 1</p>
                            <button className="btn2">B.Tech</button>
                            <p className="job-published-date">Computer Science &amp; Engineering</p>
                            <p className="job-published-date">Published on 09/02/2021</p>
                        </div>
                        <div className="vertical-divider" />
                        <div className="job-list-item-details-container d-flex flex-row justify-content-center align-items-center">
                            <div className="job-details-btn d-flex flex-row justify-content-around align-items-center" data-toggle="modal" data-target="#hiringCriteriaDetails">
                                <p>Details</p>
                                <i className="fas fa-chevron-right" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full">
                        <div className="item d-flex flex-row justify-content-between align-items-center w-full">
                            <div className="job-icon job-orange-icon d-flex justify-content-center align-items-center">
                                <i className="fas fa-cube" />
                            </div>
                            <p className="job-label">Hiring Criteria - 1</p>
                            <button className="btn2">B.Tech</button>
                            <p className="job-published-date">Computer Science &amp; Engineering</p>
                            <p className="job-published-date">Published on 09/02/2021</p>
                        </div>
                        <div className="vertical-divider" />
                        <div className="job-list-item-details-container d-flex flex-row justify-content-center align-items-center">
                            <div className="job-details-btn d-flex flex-row justify-content-around align-items-center" data-toggle="modal" data-target="#hiringCriteriaDetails">
                                <p>Details</p>
                                <i className="fas fa-chevron-right" />
                            </div>
                        </div>
                    </div>
                    {/* <div class="add-job-btn"> Add New Job</div> */}
                    <button type="button" onClick={openCloseModal} className="add-job-btn" data-toggle="modal" data-target="#hiringCriteria">
                        Add new Hiring Criteria
                    </button>
                </div>
            </div>

        </>
    )
}

export default HiringCriteriaCmp;
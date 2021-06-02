import React from 'react'

const HiringCriteriaCmp = (props) => {
    const parseObj = (val) => {
        const parsedData = JSON.parse(val);
        const programID = parsedData.length > 0 ? parsedData[0]?.programID : ''
        return programID;
    }
    return (
        <>
            <div className="row published-jobs-section">
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="heading">Hiring Criteria</p>
                    {props.hiringCriteria?.length
                        ?
                        props.hiringCriteria?.map((item, i) =>
                            <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full" key={i}>
                                <div className="item d-flex flex-row justify-content-between align-items-center w-full">
                                    <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center">
                                        <i className="fas fa-cube" />
                                    </div>
                                    <p className="job-label">{item.hiringCriteriaName}</p>
                                    <button className="btn2">{parseObj(item.hcProgramsInString)}</button>
                                    <p className="job-published-date">{item.course}</p>
                                    <p className="job-published-date">Created on {item.creationDate}</p>
                                </div>
                                <div className="vertical-divider" />
                                <div className="job-list-item-details-container d-flex flex-row justify-content-center align-items-center">
                                    <div className="job-details-btn d-flex flex-row justify-content-around align-items-center" onClick={() => props.detailsModal(item)} data-toggle="modal" data-target="#hiringCriteriaDetails">
                                        <p>Details</p>
                                        <i className="fas fa-chevron-right" />
                                    </div>
                                </div>
                            </div>) : 'no data'}
                    <button type="button" onClick={props.openCloseModal} className="add-job-btn" data-toggle="modal" data-target="#hiringCriteria">
                        Add new Hiring Criteria
                    </button>
                </div>
            </div>

        </>
    )
}

export default HiringCriteriaCmp;
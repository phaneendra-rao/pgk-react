import React from 'react';

const JobDetailsModal = (props) => {
    return (
        <div className="modal fade" id="jobDetails" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                <div className="modal-content job-publish-modal">
                    <div className="modal-header job-publish-modal-header">
                        <p className="heading w-full">Job Details</p>
                        <button type="button" onClick={() => props.closeDetailsModal()} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body job-publish-modal-body d-flex flex-column justify-content-center align-items-center">
                        <div className="heading-section d-flex justify-content-start align-items-start w-full">
                            <div className="body-section">
                                <div className="header d-flex flex-row justify-content-between align-items-center w-full">
                                    <p className="job-label">{props.modelData?.jobName}</p>
                                    <div className="job-heading-btn">Open</div>
                                    <select name="hiringCriteriaID" className="form-control">
                                        {/* <option value>Hiring Criteria</option> */}
                                        <option value={'DEFAULT'} disabled>Select Hiring Criteria</option>
                                        {props.hiringCriteria && props.hiringCriteria?.length >= 0
                                            ? props.hiringCriteria?.map((item, i) => <option key={i} value={item.hiringCriteriaID + ',' + item.hiringCriteriaName}>{item.hiringCriteriaName}</option>)
                                            : (null)
                                        }
                                    </select>
                                    <div
                                        className="d-flex flex-row justify-content-between align-items-center"
                                        data-toggle="collapse" data-target="#details" aria-expanded="false" aria-controls="collapseExample">
                                        <p className="label">Details</p>
                                        <i className="fas fa-chevron-up" />
                                    </div>
                                </div>
                                <div className="collapse" id="details">
                                    <table className="table table-borderless table-striped job-publish-table" id="details">
                                        <thead className="job-publish-table-header">
                                            <tr>
                                                <td className="table-heading">Skill Set</td>
                                                <td className="table-heading">No of Positions</td>
                                                <td className="table-heading">Location</td>
                                                <td className="table-heading">Salary Range</td>
                                                <td className="table-heading">Date of hiring</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {props.modelData?.skills && props.modelData?.skills?.length >= 0
                                                ? props.modelData?.skills?.map((item, i) => <tr key={i}>
                                                    <td>{item.skillID}</td>
                                                    <td>{item.noOfPositions}</td>
                                                    <td>{item.location}</td>
                                                    <td>{item.salaryRange}</td>
                                                    <td>{item.dateOfHiring}</td>
                                                </tr>)
                                                : <tr><td colSpan="5" className="text-center">Programming</td></tr>
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="d-flex flex-row justify-content-center align-items-center w-full mt-4">
                                    <button type="button" data-dismiss="modal" onClick={props.editJobsBtn} className="job-btn">Edit Job</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default JobDetailsModal;

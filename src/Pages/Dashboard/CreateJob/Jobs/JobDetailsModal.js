import React from 'react';

const JobDetailsModal = (props) => {
    const dateFormat = (date) => {
        let d = new Date(date);
        const dt = d.toLocaleDateString().split("/");
        return dt[2] + "-" + dt[1] + "-" + dt[0];
    }
    return (
        <div className={'job-publish-modal'}>
            <div className="modal-header job-publish-modal-header">
                <p className="heading w-full">Job Details</p>
                <button type="button" onClick={() => props.closeDetailsModal()} className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div className="modal-body job-publish-modal-body">
                <div className="d-job-details">
                    <h4 className="d-job-detials-title">{props.modelData?.jobName}</h4>
                    <div className="row m-0">
                        <div className="col-md-9 p-0">
                            <div className="row m-0">
                                <div className="col-md-4">
                                    <div className="d-job-box d-flex">
                                        <label className="d-job-label">Status:</label> <div className="d-job-box-status">{props.modelData?.status}</div>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="d-job-box d-flex">
                                        <label className="d-job-label w-100">Hiring Criteria Mapped:</label>
                                        {/* <select name="status"
                                            defaultValue={props.modelData?.hiringCriteriaName}
                                            disabled className="form-control job-dropdown w-100">
                                            <option value={'DEFAULT'} disabled>Select Status</option>
                                            <option value="Open">Open</option>
                                            <option value="Close">Close</option>
                                        </select> */}

                                        <input
                                            type="text"
                                            name=""
                                            value={props.modelData?.hiringCriteriaName}
                                            className="form-control d-inp bg-white"
                                            readOnly
                                            disabled
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="col-md-4">
                                    <div className="d-job-box d-grp">
                                        <label className="d-job-label">Tentative Month of Hiring:</label>
                                        <input
                                            type="date"
                                            name=""
                                            value={dateFormat(props.modelData?.monthOfHiring)}
                                            className="d-inp bg-white"
                                            required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-job-box d-grp">
                                        <label className="d-job-label">No. of Positions:</label>
                                        <input
                                            type="number"
                                            name=""
                                            value={props.modelData?.noOfPositions}
                                            className="d-inp bg-white"
                                            required />
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="d-job-box d-grp">
                                        <label className="d-job-label">Location:</label>
                                        <input
                                            type="text"
                                            name=""
                                            value={props.modelData?.location}
                                            className="d-inp bg-white"
                                            required />
                                    </div>
                                </div>
                            </div>
                            <div className="row m-0">
                                <div className="col-md-8">
                                    <div className="d-job-box d-grp">
                                        <label className="d-job-label">Salary Range:</label>
                                        <div className="d-flex align-items-end">
                                            <input
                                                type="number"
                                                name=""
                                                value={props.modelData?.salaryMinRange}
                                                className="d-inp bg-white"
                                                required />
                                            <label className="d-job-label mx-2">To</label>
                                            <input
                                                type="number"
                                                name=""
                                                value={props.modelData?.salaryMaxRange}
                                                className="d-inp bg-white"
                                                required />
                                            <label className="d-job-label text-white small">(Lakhs)</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md p-0">
                            <div className="d-job-box d-flex">
                                <label className="d-job-label">Skills:</label>
                                <ul className="d-job-list mb-0">
                                    {props.skills && props.skills?.length >= 0
                                        ? props.skills?.map((item, i) => <li key={i}>{item.skillName}</li>)
                                        : (null)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="heading-section d-flex justify-content-start align-items-start w-full">
                            <div className="body-section">
                                <div className="header d-flex flex-row justify-content-between align-items-center w-full">
                                    <p className="job-label">{props.modelData?.jobName}</p>
                                    <div className="job-heading-btn">Open</div>
                                    <select name="hiringCriteriaID" className="form-control" defaultValue={props.modelData?.hiringCriteriaID + ',' + props.modelData?.hiringCriteriaName}>

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
                                                    <td>{item.skillID +','+item.skill}</td>
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
                        </div> */}
                <div className="d-flex flex-row justify-content-center align-items-center w-full mt-4">
                    <button type="button" data-dismiss="modal" onClick={props.editJobsBtn} className="btn job-btn">Edit Job</button>
                </div>
            </div>
        </div>
    )
}

export default JobDetailsModal;

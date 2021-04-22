import React from 'react'

const HiringModal = ({ detailsModal, modelData }) => {
    return (
        <div className="modal fade" id="hiringCriteriaDetails" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
                <div className="modal-content">
                    <div className="hiring-modal">
                        <div className="modal-header hiring-modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Hiring Criteria Details</h5>
                            <button type="button" className="close" onClick={detailsModal} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <form className="hiring-modal-form">
                            <div className="row">
                                <div className="col-md">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Name of the Hiring Criteria</label>
                                        <input type="text" className="modal-inp" defaultValue={modelData.hiringCriteriaName} placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Program</label>
                                        <input type="text" className="modal-inp" defaultValue={modelData.programID} placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Course</label>
                                        <input type="text" className="modal-inp" defaultValue={modelData.departmentID} placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Cutoff Percentage</label>
                                        <input type="text" className="modal-inp" defaultValue={modelData.cutOff} placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Year of Passing</label>
                                        <input type="text" className="modal-inp" defaultValue={modelData.yearOfPassing} placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Backlogs Allowed</label>
                                        <input type="text" className="modal-inp" defaultValue={modelData.numberOfAllowedBacklogs} placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                                <div className="col-md px-1">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Education gaps</label>
                                        <input type="text" className="modal-inp" defaultValue={modelData.eduGapsGradAllowed ? 'Yes' : 'No'} placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                                <div className="col-md px-1">
                                    <div className="modal-grp">
                                        <label className="inp-caption">During Schooling</label>
                                        <input type="text" className="modal-inp" defaultValue={modelData.eduGapsSchoolAllowed ? 'Yes' : 'No'} placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                                <div className="col-md px-1">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Between XII - Grad.</label>
                                        <input type="text" className="modal-inp" defaultValue={modelData.eduGaps11N12Allowed ? 'Yes' : 'No'} placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                                <div className="col-md pl-1">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Grad.</label>
                                        <input type="text" className="modal-inp" defaultValue={modelData.eduGapsGradAllowed ? 'Yes' : 'No'} placeholder="Name of the Hiring Criteria *" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Remarks</label>
                                        <input type="text" className="modal-inp" defaultValue={modelData.remarks} placeholder="Remarks related text will be present here" required />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HiringModal

import React from 'react';

const ViewInfoModal = (props) => {
    return (
        <>
            <div className="modal fade viewInsight-modal" id="viewInsight">
                <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: '900px' }}>
                    <div className="modal-content">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">View Insights of '{props.universityName}'</h4>
                            <i className="far fa-times-circle close-icon" onClick={props.closeModal} data-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-4">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Average CGPA recorded last year</label>
                                        <input type="text" className="modal-inp" defaultValue={props.subscribedUnvData?.averageCGPA} placeholder="Average CGPA recorded last year *" required readOnly />
                                    </div>
                                </div>
                                <div className="col-4 p-0">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Highest CGPA recorded last year</label>
                                        <input type="text" className="modal-inp" defaultValue={props.subscribedUnvData?.highestCGPA} placeholder="Highest CGPA recorded last year *" required readOnly />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Highest Package received during last CH</label>
                                        <input type="text" className="modal-inp" defaultValue={props.subscribedUnvData?.highestPackage} placeholder="Highest Package received during last CH *" required readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="modal-grp">
                                                <label className="inp-caption">Top Skills offered by this University</label>
                                                <div className="modal-inp inp-textarea" value="7.5">
                                                    <ul>
                                                    {props.subscribedUnvData?.top5Skills?.map((item, i) => <li>{item}</li>)}
                                                        {/* <li>Java</li>
                                                        <li>Blockchain</li>
                                                        <li>Python</li>
                                                        <li>C++</li>
                                                        <li>Oracle</li>
                                                        <li>Business Marketing</li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 p-0">
                                            <div className="modal-grp">
                                                <label className="inp-caption">Top Recruiting Corporates Last year</label>
                                                <div className="modal-inp inp-textarea">
                                                    <ul>
                                                    {props.subscribedUnvData?.top5Recruiters?.map((item, i) => <li>{item}</li>)}
                                                        {/* <li>Cognizant (310 recruited)</li>
                                                        <li>TCS (285 recruited)</li>
                                                        <li>Infosys (251 recruited)</li>
                                                        <li>Wipro (175 recruited)</li>
                                                        <li>Accenture (148 recruited)</li>
                                                        <li>Tech Mahindra (124 recruited)</li> */}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="col-12 p-0">
                                        <div className="modal-grp">
                                            <label className="inp-caption">Average Package received during last CH</label>
                                            <input type="text" className="modal-inp" defaultValue={props.subscribedUnvData?.averagePackage} placeholder="Average Package received during last CH *" required />
                                        </div>
                                    </div>
                                    <div className="col-12 p-0">
                                        <div className="modal-grp">
                                            <label className="inp-caption">University Conversion Rate Last year</label>
                                            <input type="text" className="modal-inp" defaultValue={props.subscribedUnvData?.universityConvertionRatio} placeholder="Average CGPA recorded last year *" required />
                                        </div>
                                    </div>
                                    <div className="col-12 p-0">
                                        <div className="modal-grp">
                                            <label className="inp-caption">Tentative Passing Month</label>
                                            <input type="text" className="modal-inp" defaultValue={props.subscribedUnvData?.tentativeMonthOfPassing} placeholder="Average CGPA recorded last year *" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ViewInfoModal;

import React from 'react';

const UniversityStudentsCmp = (props) => {
    return (
        <>
            <div className="row single-university-section">
                <div className="header d-flex align-items-center w-full">
                    <div className="backBtn d-flex justify-content-start align-items-center">
                        <i className="fas fa-chevron-left" />
                        <p className="btnLabel" onClick={props.goBack}>Go Back</p>
                    </div>
                    <div className="title-container">
                        <p className="title">Student List</p>
                    </div>
                </div>
                <div className="university-info-widget w-full">
                    <div className="d-flex flex-column">
                        <div className="university-info-plain-stripe" />
                        <div className="univ-info d-flex justify-content-between align-items-start">
                            <div className="univ-header d-flex justify-content-center align-items-center">
                                <div className="univ-logo">
                                    <img src="../../../images/univ.png" className="img img-fluid univ-icon" alt="univ-logo" />
                                </div>
                                <div className="univ-header-name d-flex flex-column align-items-start">
                                    <p className="title">{props.universityInfoList?.universityName}</p>
                                    <p className="sub-title"><i className="fas fa-map-marker-alt" /> {props.universityInfoList?.universityHQAddressCity}</p>
                                </div>
                            </div>
                            <div className="univ-verticle-border" />
                            <div className="d-flex flex-column align-items-center univ-info-widget">
                                <div className="univ-info-data-list d-flex justify-content-between align-items-start w-full">
                                    <div className="univ-info-data d-flex flex-column align-items-center">
                                        <p className="title">University ID</p>
                                        <p className="sub-title">{props.universityId}</p>
                                    </div>
                                    <div className="univ-verticle-border-3" />
                                    <div className="univ-info-data d-flex flex-column align-items-center">
                                        <p className="title">NIRF Ranking</p>
                                        <p className="sub-title">{props.universityInfoList?.ranking?.rank}</p>
                                    </div>
                                    <div className="univ-verticle-border-3" />
                                    <div className="univ-info-data d-flex flex-column align-items-center">
                                        <p className="title">Accreditions</p>
                                        <p className="sub-title">{props.universityInfoList?.accredations?.issuingAuthority}</p>
                                    </div>
                                    <div className="univ-verticle-border-3" />
                                    <div className="univ-info-data d-flex flex-column align-items-center">
                                        <p className="title">Year Of Establishment</p>
                                        <p className="sub-title">{props.universityInfoList?.yearOfEstablishment}</p>
                                    </div>
                                </div>
                                <div className="univ-course-stripe d-flex justify-content-start align-items-center w-full">
                                    <p className="title">Programs Offered</p>
                                    <p className="sub-title">{props.universityInfoList?.programsOffered}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="filter-heading w-full">
                    <p className="label">Specify your search criteria to display the students list</p>
                </div>
                <div className="search-filter-container d-flex justify-content-between align-items-center w-full">
                    <select className="form-control item">
                        <option value>By Hiring Criteria</option>
                    </select>
                    <p className="dividerWord">Or</p>
                    <div className="item four-filters d-flex flex-column justify-content-between align-content-center w-full">
                        <div className="d-flex justify-content-between align-content-center">
                            <select className="form-control">
                                <option value>By Program</option>
                            </select>
                            <select className="form-control">
                                <option value>By Tentative Passing month</option>
                            </select>
                        </div>
                        <div className="d-flex justify-content-between align-content-center">
                            <select className="form-control">
                                <option value>By Program</option>
                            </select>
                            <select className="form-control">
                                <option value>By Tentative Passing month</option>
                            </select>
                        </div>
                    </div>
                    <div className="item students-list-btn">Get the Students List</div>
                </div>
                <div className="table-responsive mb-4 mt-4">
                    <table className="table table-data mb-0">
                        <thead>
                            <tr>
                                <th scope="col" colSpan="2">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="all" />
                                        <label className="custom-control-label mt-1" htmlFor="all"> Select all
                                        </label>
                                    </div>
                                </th>
                                <th scope="col" colSpan="4">
                                    <button className="btn3 btn-lightgreen" data-toggle="modal" data-target="#mailModal">Mark as Read</button>
                                    {/* <button className="btn3 btn-lightgreen" data-toggle="modal" data-target="#accept">Delete</button> */}
                                </th>
                            </tr>
                            <tr>
                                <th className="bg-white" scope="col"></th>
                                <th className="bg-white" scope="col">Roll No.</th>
                                <th className="bg-white" scope="col">Name of the student</th>
                                <th className="bg-white" scope="col">Program</th>
                                <th className="bg-white" scope="col">Branch</th>
                                <th className="bg-white" scope="col">Aggregate CGPA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label mt-1" htmlFor="customCheck1">
                                        </label>
                                    </div>
                                </td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label mt-1" htmlFor="customCheck1">
                                        </label>
                                    </div>
                                </td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label mt-1" htmlFor="customCheck1">
                                        </label>
                                    </div>
                                </td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label mt-1" htmlFor="customCheck1">
                                        </label>
                                    </div>
                                </td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label mt-1" htmlFor="customCheck1">
                                        </label>
                                    </div>
                                </td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label mt-1" htmlFor="customCheck1">
                                        </label>
                                    </div>
                                </td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                                <td>2 hrs ago</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default UniversityStudentsCmp;

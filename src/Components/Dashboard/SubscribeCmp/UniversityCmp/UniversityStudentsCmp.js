import React from 'react';
import Select from 'react-select';

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
                {!props.studentSearchList?.studentsData ?
                    <form onSubmit={props.searchSubmit} className="search-filter-container d-flex justify-content-between align-items-center w-full">
                        <div className="modal-grp" style={{ flex: 1 }}>
                            <label className="text-white small mb-0"> Hiring Criteria</label>
                            <Select
                                closeMenuOnSelect={false}
                                name="hiringCriteriaID"
                                label="By Hiring Criteria"
                                isMulti
                                options={props.hiringCriteriaOptions}
                                onChange={props.handleChange}
                            />
                        </div>
                        {/* <div className="dropdown dropdown-col">
                            <button className="dropdown-select dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                By Hiring Criteria
                        </button>
                            <ul className="dropdown-menu dropdown-menu-form">
                                {props.hiringCriteria && props.hiringCriteria?.length >= 0
                                    ? props.hiringCriteria?.map((item, i) =>
                                        <div className="custom-control custom-checkbox" key={i}>
                                            <input
                                                type="checkbox"
                                                className="custom-control-input"
                                                name="hiringCriteriaID"
                                                onChange={props.handleChange}
                                                value={item.hiringCriteriaID}
                                                id={item.hiringCriteriaID} />
                                            <label className="custom-control-label" htmlFor={item.hiringCriteriaID}>{item.hiringCriteriaName}</label>
                                        </div>)
                                    : (null)
                                }
                            </ul>
                        </div> */}
                        <p className="dividerWord">Or</p>
                        <div className="item four-filters d-flex flex-column justify-content-between align-content-center w-full">
                            <div className="d-flex justify-content-between align-content-center search-filter-grid">
                                {/* <div className="dropdown dropdown-col">
                                    <button className="dropdown-select dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Program
                                </button>
                                    <ul className="dropdown-menu dropdown-menu-form">
                                        {props.lookUpData && props.lookUpData?.departments?.length >= 0
                                            ? props.lookUpData?.departments.map((item, i) =>
                                                <div className="custom-control custom-checkbox" key={i}>
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        name="programID"
                                                        onChange={props.handleChange}
                                                        value={item.departmentID}
                                                        id={item.departmentID} />
                                                    <label className="custom-control-label" htmlFor={item.departmentID}>{item.ProgramID}</label>
                                                </div>)
                                            : (null)
                                        }
                                    </ul>
                                </div> */}
                                {/* <div className="dropdown dropdown-col">
                                    <button className="dropdown-select dropdown-toggle" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        By Tentative Passing month
                                </button>
                                    <ul className="dropdown-menu dropdown-menu-form">
                                        {props.months && props.months?.length >= 0
                                            ? props.months?.map((item, i) =>
                                                <div className="custom-control custom-checkbox" key={i}>
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        name="monthOfHiring"
                                                        onChange={props.handleChange}
                                                        value={item}
                                                        id={item} />
                                                    <label className="custom-control-label" htmlFor={item}>{item}</label>
                                                </div>)
                                            : (null)
                                        }
                                    </ul>
                                </div> */}
                                <div className="modal-grp mb-2 w-50" style={{ flex: 1, zIndex: 999 }}>
                                    <label className="text-white small mb-0"> Program</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        label="Program"
                                        name="programID"
                                        isMulti
                                        options={props.programCatalog}
                                        onChange={props.handleChange}
                                    />
                                </div>
                                <div className="modal-grp mb-2 w-50" style={{ flex: 1, zIndex: 999 }}>
                                    <label className="text-white small mb-0"> By Tentative Passing month</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        label="By Tentative Passing month"
                                        name="monthOfHiring"
                                        isMulti
                                        options={props.months}
                                        onChange={props.handleChange}
                                    />
                                </div>

                            </div>
                            <div className="d-flex justify-content-between align-content-center search-filter-grid">

                                {/* <div className="dropdown dropdown-col">
                                    <button className="dropdown-select dropdown-toggle" type="button" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        By Branch
                                </button>
                                    <ul className="dropdown-menu dropdown-menu-form">
                                        {props.lookUpData && props.lookUpData?.programs?.length >= 0
                                            ? props.lookUpData?.programs?.map((item, i) =>
                                                <div className="custom-control custom-checkbox" key={i}>
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        name="branchID"
                                                        onChange={props.handleChange}
                                                        value={item.ProgramID}
                                                        id={item.ProgramID} />
                                                    <label className="custom-control-label" htmlFor={item.ProgramID}>{item.program}</label>
                                                </div>)
                                            : (null)
                                        }
                                    </ul>
                                </div> */}

                                <div className="modal-grp mb-2 w-50" style={{ flex: 1 }}>
                                    <label className="text-white small mb-0">By Branch</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        label="By Branch"
                                        name="branchID"
                                        isMulti
                                        options={props.branchCatalog}
                                        onChange={props.handleChange}
                                    />
                                </div>
                                <div className="modal-grp mb-2 w-50" style={{ flex: 1 }}>
                                    <label className="text-white small mb-0">By Skills</label>
                                    <Select
                                        closeMenuOnSelect={false}
                                        label="By Skills"
                                        name="skills"
                                        isMulti
                                        onChange={props.handleChange}
                                        options={props.skillsList}
                                    />
                                </div>
                                {/* <div className="dropdown dropdown-col">
                                    <button className="dropdown-select dropdown-toggle" type="button" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        By Skills
                                </button>
                                    <ul className="dropdown-menu dropdown-menu-form">
                                        {props.lookUpData && props.lookUpData?.skills?.length >= 0
                                            ? props.lookUpData?.skills?.map((item, i) =>
                                                <div className="custom-control custom-checkbox" key={i}>
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        name="skills"
                                                        onChange={props.handleChange}
                                                        value={item.skillCode}
                                                        id={item.skillCode} />
                                                    <label className="custom-control-label" htmlFor={item.SkillID}>{item.skillName}</label>
                                                </div>)
                                            : (null)
                                        }
                                    </ul>
                                </div> */}
                            </div>
                        </div>
                        <button type="submit" className="item students-list-btn">Get the Students List</button>
                    </form>
                    : (null)
                }
                {props.studentSearchList &&
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
                                        <button className="btn3 btn-lightgreen" data-toggle="modal" data-target="#mailModal">Request for campus drive</button>
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
                                {props.studentSearchList?.studentsData?.length >= 0
                                    ? props.studentSearchList?.studentsData?.map((item, i) => <tr key={i}>
                                        <td>
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id={item.studentID + i} />
                                                <label className="custom-control-label mt-1" htmlFor={item.studentID + i}>
                                                </label>
                                            </div>
                                        </td>
                                        <td>{item.studentID}</td>
                                        <td>{item.studentName}</td>
                                        <td>{item.programID}</td>
                                        <td>{item.branchName}</td>
                                        <td>{item.avgPercentage}</td>
                                    </tr>)
                                    : <tr><td colSpan="6" className="text-center">No data</td></tr>
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </>
    )
}

export default UniversityStudentsCmp;

import React from 'react'

function NotificationsCmp() {
    return (
        <div>
            <div className="main-container">
                <div className="topbar" style={{ zIndex: 1 }}>
                    <p className="date">Wednesday, 10th Febraury 2021</p>
                    <div className="input-group search">
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="input-group-append">
                            <span className="input-group-text"><i className="fas fa-search" /></span>
                        </div>
                    </div>
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary dropdown-toggle points-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="0,10">
                            <p className="btn-label">
                                Credits
                            </p>
                            <span className="p-icon-container">
                                <p className="p-icon">P</p>
                            </span>
                            <p className="points">162</p>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="points-container">
                                <div className="credits-container">
                                    <p className="label-head">PGK CREDITS</p>
                                    <div className="credits-body">
                                        <p className="credits-head">Available Balance</p>
                                        <div className="credits-points">
                                            <div className="credit-points-icon">
                                                <p className="points-icon">P</p>
                                            </div>
                                            <p className="credits-points-label">162</p>
                                        </div>
                                        <table className="credits-table">
                                            <tbody>
                                                <tr className="t-row">
                                                    <td className="t-label">Bonus Credits</td>
                                                    <td className="t-value">50</td>
                                                </tr>
                                                <tr className="t-row">
                                                    <td className="t-label">Purchased Credits</td>
                                                    <td className="t-value">112</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="add-credits-container" data-toggle="modal" data-target="#exampleModalCenter">
                                    <i className="fas fa-plus-circle" />
                                    <p className="label">Add Credits</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile-avatar-container">
                        <p className="profile-name">Shalmali</p>
                        <div className="profile-avatar">
                            <i className="fas fa-user" />
                        </div>
                    </div>
                </div>
                <div className="main">
                    <h3 className="main-title">Other Information</h3>
                    <div className="row m-0">
                        <div className="col-md-7 p-0">
                            <div className="table-responsive mb-4">
                                <table className="table table-data mb-0">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="all" />
                                                    <label className="custom-control-label mt-1" htmlFor="all">
                                                    </label>
                                                </div>
                                            </th>
                                            <th scope="col">
                                                <button className="btn3 btn-lightgreen">Mark as Read</button>
                                                <button className="btn3 btn-lightgreen" data-toggle="modal" data-target="#accept">Delete</button>
                                            </th>
                                            <th colSpan={2} scope="col">
                                                <div className="d-flex justify-content-around">
                                                    <div className="d-grp mb-0 mr-1" style={{ flex: 1 }}>
                                                        <select name className="d-inp" required>
                                                            <option value>Filter All</option>
                                                            <option value>Program</option>
                                                            <option value>Program</option>
                                                        </select>
                                                    </div>
                                                    <div className="d-grp mb-0">
                                                        <select name className="d-inp" required>
                                                            <option value>Sort by Relevance</option>
                                                            <option value>Program</option>
                                                            <option value>Program</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </th>
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
                                            <td>
                                                <div className="basic-info">
                                                    <div className="basic-img">
                                                        <p className="basic-name"><i className="fas fa-building" /></p>
                                                    </div>
                                                    <div className="basic-content">
                                                        <h5 className="basic-title">Osmania University</h5>
                                                        <p className="basic-subtitle">has requested for Campus Hiring</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn action tb-btn-red">University</button>
                                                <button className="btn action tb-btn-yellow">Action required</button>
                                            </td>
                                            <td className="time">2 hrs ago</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label mt-1" htmlFor="customCheck1">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="basic-info">
                                                    <div className="basic-img">
                                                        <p className="basic-name"><i className="fas fa-building" /></p>
                                                    </div>
                                                    <div className="basic-content">
                                                        <h5 className="basic-title">Osmania University</h5>
                                                        <p className="basic-subtitle">has requested for Campus Hiring</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn action tb-btn-green">University</button>
                                                <button className="btn action tb-btn-grey">Action required</button>
                                            </td>
                                            <td className="time">2 hrs ago</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label mt-1" htmlFor="customCheck1">
                                                    </label>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="basic-info">
                                                    <div className="basic-img">
                                                        <p className="basic-name"><i className="fas fa-building" /></p>
                                                    </div>
                                                    <div className="basic-content">
                                                        <h5 className="basic-title">Osmania University</h5>
                                                        <p className="basic-subtitle">has requested for Campus Hiring</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button className="btn action">University</button>
                                                <button className="btn action tb-btn-pink">Action required</button>
                                            </td>
                                            <td className="time">2 hrs ago</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-5 p-0">
                            <div className="info">
                                <h6 className="info-title">
                                    Notification from <br /> Osmania University
          </h6>
                                <hr />
                                <ul className="info-data">
                                    <li>
                                        <span>University Name</span>
                                        <span>OSMANIA UNIVERSITY</span>
                                    </li>
                                    <li>
                                        <span>Location</span>
                                        <span>Hyderabad</span>
                                    </li>
                                    <li>
                                        <span>Year of Establishment</span>
                                        <span>1917</span>
                                    </li>
                                    <li>
                                        <span>University ID</span>
                                        <span>XXXXXXXXX</span>
                                    </li>
                                    <li>
                                        <span>Accredition</span>
                                        <span>NAAC 'A'</span>
                                    </li>
                                    <li>
                                        <span>Type of Request</span>
                                        <span>Campus Hiring from University</span>
                                    </li>
                                    <li>
                                        <span>Request made on</span>
                                        <span>10 - Feb - 2021</span>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-center info-space">
                                    <button className="btn3">View more Info</button>
                                    <button className="btn3 btn-lightgreen" data-toggle="modal" data-target="#accept">Accept</button>
                                    <button className="btn3 btn-yellow">Reject</button>
                                </div>
                            </div>
                            <div className="info">
                                <h6 className="info-title">
                                    Notification from <br /> Osmania University
          </h6>
                                <hr />
                                <ul className="info-data">
                                    <li>
                                        <span>University Name</span>
                                        <span>OSMANIA UNIVERSITY</span>
                                    </li>
                                    <li>
                                        <span>Location</span>
                                        <span>Hyderabad</span>
                                    </li>
                                    <li>
                                        <span>Year of Establishment</span>
                                        <span>1917</span>
                                    </li>
                                    <li>
                                        <span>University ID</span>
                                        <span>XXXXXXXXX</span>
                                    </li>
                                    <li>
                                        <span>Accredition</span>
                                        <span>NAAC 'A'</span>
                                    </li>
                                    <li>
                                        <span>Type of Request</span>
                                        <span>Campus Hiring from University</span>
                                    </li>
                                    <li>
                                        <span>Request made on</span>
                                        <span>10 - Feb - 2021</span>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-around info-space">
                                    <button className="btn3">View more Info</button>
                                    <button className="btn3 btn-lightgreen2 txt-lightgreen btn-prevent">Accepted on 10 - Feb -
              2021</button>
                                </div>
                            </div>
                            <div className="info">
                                <h6 className="info-title">
                                    Notification from <br /> Osmania University
          </h6>
                                <hr />
                                <ul className="info-data">
                                    <li>
                                        <span>University Name</span>
                                        <span>OSMANIA UNIVERSITY</span>
                                    </li>
                                    <li>
                                        <span>Location</span>
                                        <span>Hyderabad</span>
                                    </li>
                                    <li>
                                        <span>Year of Establishment</span>
                                        <span>1917</span>
                                    </li>
                                    <li>
                                        <span>University ID</span>
                                        <span>XXXXXXXXX</span>
                                    </li>
                                    <li>
                                        <span>Accredition</span>
                                        <span>NAAC 'A'</span>
                                    </li>
                                    <li>
                                        <span>Type of Request</span>
                                        <span>Campus Hiring from University</span>
                                    </li>
                                    <li>
                                        <span>Request made on</span>
                                        <span>10 - Feb - 2021</span>
                                    </li>
                                </ul>
                                <div className="d-flex justify-content-around info-space">
                                    <button className="btn3">View more Info</button>
                                    <button className="btn3 btn-yellow2 txt-yellow btn-prevent">Rejected on 10 - Feb -
              2021</button>
                                </div>
                                <div className="d-grp">
                                    <label className="rejected-reason">Reason/remarks for rejection</label>
                                    <input type="text" name className="d-inp" defaultValue="University is not matching to Hiring Criteria specified for Job-1" />
                                </div>
                            </div>
                            <div className="info">
                                <h6 className="info-title">
                                    Notification from <br /> Vasundhara(Student)
          </h6>
                                <hr />
                                <ul className="info-data">
                                    <li>
                                        <span>Student Name</span>
                                        <span>Raju</span>
                                    </li>
                                    <li>
                                        <span>Program</span>
                                        <span>B.Tech</span>
                                    </li>
                                    <li>
                                        <span>Course</span>
                                        <span>ECE</span>
                                    </li>
                                    <li>
                                        <span>University</span>
                                        <span>University</span>
                                    </li>
                                    <li>
                                        <span>Aggregate CGPA</span>
                                        <span>8.1</span>
                                    </li>
                                    <li>
                                        <span>Applied for </span>
                                        <span>Campus</span>
                                    </li>
                                    <li>
                                        <span>Applied on</span>
                                        <span>10 - Feb - 2021</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotificationsCmp;

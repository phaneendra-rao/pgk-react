import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = () => {
    return (
        <aside className="sidebar" id="side-bar">
            <div className="logo-section">
                <img src="../../../images/logo.png" alt="logo" className="img img-fluid logo" />
                <p className="label">Corporate</p>
            </div>
            <ul className="sidebar-list" id="accordion">
                <li className="sidebar-item">
                    <NavLink to="/dashboard" exact activeClassName="active" className="sidebar-link">
                        <i className="fas fa-th-large"></i>
                        Dashboard
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/dashboard/profile/" exact activeClassName="active" className="sidebar-link">
                        <i className="fas fa-building"></i>
                        Profile
                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link" data-toggle="collapse" href="#job" role="button"
                        aria-expanded="false"
                        aria-controls="job">
                        <div>
                            <i className="fas fa-plus-square"></i>
                            Create a job
                            </div>
                        <span><i className="fas fa-chevron-up"></i></span>
                    </a>
                    <div id="job" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <ul className="sidebar-list">
                            <li className="sidebar-item">
                                <NavLink to="/dashboard/createjob/hiring" exact activeClassName="active" className="sidebar-link">
                                    <i className="fas fa-file-alt"></i>
                                    Hiring Criteria
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="/dashboard/createjob/jobs" exact className="sidebar-link">
                                    <i className="fas fa-briefcase"></i>
                                Job
                                </NavLink></li>
                        </ul>
                    </div>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link" data-toggle="collapse" href="#Publish" role="button" aria-expanded="false" aria-controls="Publish">
                        <div>
                            <i className="fas fa-share-square"></i>
                            Publish
                        </div>
                        <span><i className="fas fa-chevron-up"></i></span>
                    </a>
                    <div id="Publish" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <ul className="sidebar-list">
                            <li className="sidebar-item">
                                <NavLink to="/dashboard/batch/createbatch" exact activeClassName="active" className="sidebar-link">
                                    <i className="fas fa-building"></i>
                                    Profile
                                    </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="/dashboard/batch/createcoachingbatch" exact activeClassName="active" className="sidebar-link">
                                    <i className="fas fa-file-alt"></i>
                                    Hiring Criteria
                                    </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="/dashboard/master/createtopic" exact activeClassName="active" className="sidebar-link">
                                    <i className="fas fa-briefcase"></i>
                                    Jobs
                                    </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="/dashboard/batch/createbatchtregister" exact activeClassName="active" className="sidebar-link">
                                    <i className="fas fa-file"></i>Other Information
                                    </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="/dashboard/batch/createbatchtregister" exact activeClassName="active" className="sidebar-link">
                                    <i className="fas fa-history"></i>Publish History
                                    </NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="sidebar-item">
                    <a className="sidebar-link" data-toggle="collapse" href="#Subscribe" role="button" aria-expanded="false" aria-controls="Subscribe">
                        <div>
                            <i className="far fa-folder-open"></i>
                            Subscribe
                        </div>
                        <span><i className="fas fa-chevron-up"></i></span>
                    </a>
                    <div id="Subscribe" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                        <ul className="sidebar-list">
                            <li className="sidebar-item">
                                <NavLink to="/dashboard/subscribe/newuniversity" exact activeClassName="active" className="sidebar-link">
                                    <i className="fas fa-university"></i>New Univ.
                                    </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink to="/dashboard/subscribe/subscriptionhistory" exact activeClassName="active" className="sidebar-link">
                                    <i className="fas fa-university"></i>Subscribed Univ.
                                    </NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/dashboard/analytics" exact activeClassName="active" className="sidebar-link">
                        <i className="fas fa-chart-pie"></i>Analytics
                                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/dashboard/notifications" exact activeClassName="active" className="sidebar-link">
                        <i className="fas fa-bell"></i>Notifications
                                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/dashboard/transactionhistory" exact activeClassName="active" className="sidebar-link">
                        <i className="fas fa-file"></i>Transaction History
                                    </NavLink>
                </li>
                <li className="sidebar-item">
                    <NavLink to="/dashboard/support" exact activeClassName="active" className="sidebar-link">
                        <i className="fas fa-comment"></i>Support
                                    </NavLink>
                </li>
            </ul>
            <a href="#" className="logout">
                <p className="label">Logout</p>
            </a>
        </aside>
    )
}

export default DashboardSidebar;

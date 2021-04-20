import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-9" style={{ padding: '0px' }}>
                    <div className="row welcome-widget d-flex flex-row justify-content-start align-items-center">
                        <div className="row d-flex flex-row justify-content-start align-items-center">
                            <div className="welcome-avatar d-flex flex-column justify-content-center align-items-center">
                                <img src="./images/logo.png" alt="logo" className="welcome-avatar-logo" />
                            </div>
                            <div className="welcome-content d-flex flex-column justify-content-start align-items-start">
                                <p className="title">Welcome, Shalmali!</p>
                                <p className="sub-title">Human Resource Director</p>
                                <p className="content">PGK Technologies Pvt Ltd.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                        <div className="d-flex flex-column justify-content-between align-items-center quick-widget">
                            <div className="d-flex flex-row justify-content-center align-items-center quick-widget-1">
                                <i className="fas fa-share" />
                                <p>Jobs Published</p>
                            </div>
                            <p className="quick-widget-value">34</p>
                            <p className="quick-widget-label">8 Published in the recent month</p>
                        </div>
                        <div className="d-flex flex-column justify-content-between align-items-center quick-widget">
                            <div className="d-flex flex-row justify-content-center align-items-center quick-widget-2">
                                <i className="fas fa-file" />
                                <p>Applications Received</p>
                            </div>
                            <p className="quick-widget-value">697</p>
                            <p className="quick-widget-label">8 Received in the last 2 days</p>
                        </div>
                        <div className="d-flex flex-column justify-content-between align-items-center quick-widget">
                            <div className="d-flex flex-row justify-content-center align-items-center quick-widget-3">
                                <i className="fas fa-briefcase" />
                                <p>Job Offers Made</p>
                            </div>
                            <p className="quick-widget-value">321</p>
                            <p className="quick-widget-label">10 Made in the recent month</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex flex-column justify-content-start feature-widget">
                            <div className="d-flex flex-row justify-content-between align-items-center feature-widget-header">
                                <p className="label">Tentative Passouts &amp; Passing Month</p>
                                <button className="btn btn-secondary" type="button">Check Analytics</button>
                            </div>
                            <table className="table table-borderless">
                                <thead className="table-header">
                                    <tr>
                                        <td>University</td>
                                        <td>Passing Month</td>
                                        <td>Passouts</td>
                                        <td />
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    <tr>
                                        <td>JNTU</td>
                                        <td>June, 2021</td>
                                        <td>767</td>
                                        <td>
                                            <div className="table-btn">Subscribe</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>JNTU</td>
                                        <td>June, 2021</td>
                                        <td>767</td>
                                        <td>
                                            <div className="table-btn">Subscribe</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>JNTU</td>
                                        <td>June, 2021</td>
                                        <td>767</td>
                                        <td>
                                            <div className="table-btn">Subscribe</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>JNTU</td>
                                        <td>June, 2021</td>
                                        <td>767</td>
                                        <td>
                                            <div className="table-btn">Subscribe</div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>JNTU</td>
                                        <td>June, 2021</td>
                                        <td>767</td>
                                        <td>
                                            <div className="table-btn">Subscribe</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex flex-column justify-content-start feature-widget">
                            <div className="d-flex flex-row justify-content-between align-items-center feature-widget-header">
                                <p className="label">Universities Conversion Ratio Last Year</p>
                                <button className="btn btn-secondary" type="button">Check Analytics</button>
                            </div>
                            <div style={{ height: '350px' }}>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3" style={{ padding: '0px' }}>
                    <div className="row d-flex flex-row justify-content-between align-items-center account-info-widget">
                        <div className="avatar-circle d-flex flex-column justify-content-center align-items-center">
                            <i className="fas fa-check" />
                        </div>
                        <div className="d-flex flex-column justify-content-start align-items-start account-info-content">
                            <p className="label">Your Account is active</p>
                            <p className="label">Valid till <span>20-03-2021</span></p>
                        </div>
                    </div>
                    <div className="row d-flex flex-row justify-content-center align-items-center notifications-widget">
                        <div className="d-flex flex-row justify-content-start align-items-center header w-full">
                            <i className="fas fa-bell" />
                            <p className="label">Notifications</p>
                        </div>
                        <div className="notification-list d-flex flex-column justify-content-start align-items-start">
                            <div className="notification-list-item d-flex flex-row justify-content-between align-items-center">
                                <div className="notification-icon d-flex flex-column justify-content-center align-items-center">
                                    <i className="fas fa-university" />
                                </div>
                                <div className="d-flex flex-column justify-content-start align-items-start notification-content">
                                    <div className="title-with-badge d-flex flex-row justify-content-between align-items-center">
                                        <p className="title">Osmania University</p>
                                        <span className="icon-badge d-flex flex-row justify-content-between align-items-center"><i className="fas fa-clock" /> 5 min
                  ago</span>
                                    </div>
                                    <p className="sub-title">has requested for Campus Hiring</p>
                                </div>
                            </div>
                            <div className="notification-list-item d-flex flex-row justify-content-between align-items-center">
                                <div className="notification-icon d-flex flex-column justify-content-center align-items-center">
                                    <i className="fas fa-university" />
                                </div>
                                <div className="d-flex flex-column justify-content-start align-items-start notification-content">
                                    <div className="title-with-badge d-flex flex-row justify-content-between align-items-center">
                                        <p className="title">Osmania University</p>
                                        <span className="icon-badge d-flex flex-row justify-content-between align-items-center"><i className="fas fa-clock" /> 5 min
                  ago</span>
                                    </div>
                                    <p className="sub-title">has requested for Campus Hiring</p>
                                </div>
                            </div>
                            <div className="notification-list-item d-flex flex-row justify-content-between align-items-center">
                                <div className="notification-icon d-flex flex-column justify-content-center align-items-center">
                                    <i className="fas fa-university" />
                                </div>
                                <div className="d-flex flex-column justify-content-start align-items-start notification-content">
                                    <div className="title-with-badge d-flex flex-row justify-content-between align-items-center">
                                        <p className="title">Osmania University</p>
                                        <span className="icon-badge d-flex flex-row justify-content-between align-items-center"><i className="fas fa-clock" /> 5 min
                  ago</span>
                                    </div>
                                    <p className="sub-title">has requested for Campus Hiring</p>
                                </div>
                            </div>
                            <div className="notification-list-item d-flex flex-row justify-content-between align-items-center">
                                <div className="notification-icon d-flex flex-column justify-content-center align-items-center">
                                    <i className="fas fa-university" />
                                </div>
                                <div className="d-flex flex-column justify-content-start align-items-start notification-content">
                                    <div className="title-with-badge d-flex flex-row justify-content-between align-items-center">
                                        <p className="title">Osmania University</p>
                                        <span className="icon-badge d-flex flex-row justify-content-between align-items-center"><i className="fas fa-clock" /> 5 min
                  ago</span>
                                    </div>
                                    <p className="sub-title">has requested for Campus Hiring</p>
                                </div>
                            </div>
                            <div className="notification-list-item d-flex flex-row justify-content-between align-items-center">
                                <div className="notification-icon d-flex flex-column justify-content-center align-items-center">
                                    <i className="fas fa-university" />
                                </div>
                                <div className="d-flex flex-column justify-content-start align-items-start notification-content">
                                    <div className="title-with-badge d-flex flex-row justify-content-between align-items-center">
                                        <p className="title">Osmania University</p>
                                        <span className="icon-badge d-flex flex-row justify-content-between align-items-center"><i className="fas fa-clock" /> 5 min
                  ago</span>
                                    </div>
                                    <p className="sub-title">has requested for Campus Hiring</p>
                                </div>
                            </div>
                            <div className="notification-list-item d-flex flex-row justify-content-between align-items-center">
                                <div className="notification-icon d-flex flex-column justify-content-center align-items-center">
                                    <i className="fas fa-university" />
                                </div>
                                <div className="d-flex flex-column justify-content-start align-items-start notification-content">
                                    <div className="title-with-badge d-flex flex-row justify-content-between align-items-center">
                                        <p className="title">Osmania University</p>
                                        <span className="icon-badge d-flex flex-row justify-content-between align-items-center"><i className="fas fa-clock" /> 5 min
                  ago</span>
                                    </div>
                                    <p className="sub-title">has requested for Campus Hiring</p>
                                </div>
                            </div>
                            <div className="notification-btn">View all notifications</div>
                        </div>
                    </div>
                    <div className="row d-flex flex-row justify-content-center align-items-center univ-widget">
                        <div className="d-flex flex-row justify-content-center align-items-center univ-header">
                            <p className="label">Top 5 Universities in (2020)</p>
                        </div>
                        <div className="univ-table d-flex flex-column justify-content-start align-items-start">
                            <table className="table table-borderless">
                                <thead className="table-universities-header">
                                    <tr>
                                        <td>Rank</td>
                                        <td>Name of the University</td>
                                        <td>Hirings</td>
                                    </tr>
                                </thead>
                                <tbody className="table-universities-body">
                                    <tr>
                                        <td>1</td>
                                        <td>JNTU, Hyd</td>
                                        <td>542</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Osmania Univ., Hyd</td>
                                        <td>496</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>University of Hyd</td>
                                        <td>401</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>IIT, Hyderabad</td>
                                        <td>387</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>GITAM, Hyderabad</td>
                                        <td>313</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="univ-btn">Go to Analytics</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="d-flex flex-row justify-content-between align-items-center w-full px-3">
                    <div className="d-flex flex-row justify-content-center align-items-center flex-fill stat-widget">
                        <p className="statNo">157</p>
                        <div className="d-flex flex-column justify-content-center align-items-center stat-content">
                            <p className="title">Currently</p>
                            <p className="sub-title-1">Online</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center flex-fill stat-widget">
                        <p className="statNo">82</p>
                        <div className="d-flex flex-column justify-content-center align-items-center stat-content">
                            <p className="sub-title-1">Joined In</p>
                            <p className="sub-title-1">Last Hour</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center flex-fill stat-widget">
                        <p className="statNo">785</p>
                        <div className="d-flex flex-column justify-content-center align-items-center stat-content">
                            <p className="title">Got Placed</p>
                            <p className="sub-title">Through Our</p>
                            <p className="sub-title-1">Platform</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="d-flex flex-row justify-content-between align-items-center w-full px-3">
                    <div className="d-flex flex-row justify-content-start align-items-center stat-info-widget">
                        <div className="d-flex flex-column justify-content-between align-items-start stat-info-content">
                            <p className="title">Corporates</p>
                            <p className="sub-title">Registered</p>
                            <p className="stat-info-no">258</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-start align-items-center stat-info-widget">
                        <div className="d-flex flex-column justify-content-between align-items-start stat-info-content">
                            <p className="title">Universities</p>
                            <p className="sub-title">Registered</p>
                            <p className="stat-info-no">364</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-start align-items-center stat-info-widget">
                        <div className="d-flex flex-column justify-content-between align-items-start stat-info-content">
                            <p className="title">Students</p>
                            <p className="sub-title">Registered</p>
                            <p className="stat-info-no">1098</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Dashboard;

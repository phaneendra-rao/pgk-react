import React from 'react'

const UniversityCmp = () => {
    return (
        <>
            <div className="row single-university-section">
                <div className="header d-flex align-items-center w-full">
                    <div className="backBtn d-flex justify-content-start align-items-center">
                        <i className="fas fa-chevron-left" />
                        <p className="btnLabel">Go Back</p>
                    </div>
                    <div className="title-container">
                        <p className="title">University Information</p>
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
                                    <p className="title">Osmania University</p>
                                    <p className="sub-title"><i className="fas fa-map-marker-alt" /> Amberpet,
              Hyderabad
            </p>
                                </div>
                            </div>
                            <div className="univ-verticle-border" />
                            <div className="d-flex flex-column align-items-center univ-info-widget">
                                <div className="univ-info-data-list d-flex justify-content-between align-items-start w-full">
                                    <div className="univ-info-data d-flex flex-column align-items-center">
                                        <p className="title">University ID</p>
                                        <p className="sub-title">XXXX2003</p>
                                    </div>
                                    <div className="univ-verticle-border-3" />
                                    <div className="univ-info-data d-flex flex-column align-items-center">
                                        <p className="title">NIRF Ranking</p>
                                        <p className="sub-title">53 (National)</p>
                                    </div>
                                    <div className="univ-verticle-border-3" />
                                    <div className="univ-info-data d-flex flex-column align-items-center">
                                        <p className="title">Accreditions</p>
                                        <p className="sub-title">NAAC 'A'</p>
                                    </div>
                                    <div className="univ-verticle-border-3" />
                                    <div className="univ-info-data d-flex flex-column align-items-center">
                                        <p className="title">Year Of Establishment</p>
                                        <p className="sub-title">1918</p>
                                    </div>
                                </div>
                                <div className="univ-course-stripe d-flex justify-content-start align-items-center w-full">
                                    <p className="title">Programs Offered</p>
                                    <p className="sub-title">B.Tech, B.E, B.Arch, B.Sc, B.B.A, M.Tech, M.Sc, M.B.A
            </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="univ-profile-container d-flex justify-content-start align-items-center">
                    <div className="profile-bar" />
                    <div className="univ-profile d-flex flex-column">
                        <p className="title">University Profile</p>
                        <p className="sub-title">Osmania University, established in 1918, is the seventh oldest in
                        India, the third oldest in south India and the first to be established in the erstwhile
                        princely state of Hyderabad. Through out its existence of over eight decades, it has
                        shown remarkable progress and sustained an integrated deve- lopment of all faculties. It
                        has significantly contributed to the academic and economic development of not only the
                        region but also of the Country. Its alumni have distinguished themselves nationally and
                        internationally in various spheres of life and are spread far and wide around the world.
      </p>
                    </div>
                </div>
                <div className="univ-quick-widgets-container d-flex justify-content-between align-items-center w-full">
                    <div className="univ-quick-widget d-flex flex-column align-items-center">
                        <i className="fas fa-file-certificate" />
                        <p className="title">University Information</p>
                        <div className="quick-widget-btn">Subscribe to view</div>
                    </div>
                    <div className="univ-quick-widget d-flex flex-column align-items-center">
                        <i className="fas fa-user-circle" />
                        <p className="title">Generate Student List</p>
                        <div className="quick-widget-btn">Subscribe to Access</div>
                    </div>
                    <div className="univ-quick-widget d-flex flex-column align-items-center">
                        <i className="fas fa-university" />
                        <p className="title">Request To Attend Campus Drive</p>
                        <div className="quick-widget-btn">Subscribe to Place the request</div>
                    </div>
                </div>
                <div className="univ-subscription-history-stripe">
                    <p className="label">Subscription / Campus Drive History</p>
                </div>
                <div className="univ-subscription-list-container d-flex flex-column align-items-center w-full">
                    <div className="univ-sub-item d-flex justify-content-between align-items-center">
                        <div className="sub-type-container d-flex">
                            <i className="fas fa-file-certificate icon" />
                            <p className="sub-label">University Information</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="name-address d-flex flex-column align-items-start">
                            <p className="title">Osmania University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Amberpet, Hyderabad</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="sub-item-container d-flex flex-column align-items-center">
                            <p className="title">University ID</p>
                            <p className="sub-title">XXXX2002</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="view-info-btn">View Information</div>
                    </div>
                    <div className="univ-sub-item d-flex justify-content-between align-items-center">
                        <div className="sub-type-container d-flex">
                            <i className="fas fa-file-certificate icon" />
                            <p className="sub-label">University Information</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="name-address d-flex flex-column align-items-start">
                            <p className="title">Osmania University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Amberpet, Hyderabad</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="sub-item-container d-flex flex-column align-items-center">
                            <p className="title">University ID</p>
                            <p className="sub-title">XXXX2002</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="view-info-btn">View Information</div>
                    </div>
                    <div className="univ-sub-item d-flex justify-content-between align-items-center">
                        <div className="sub-type-container d-flex">
                            <i className="fas fa-file-certificate icon" />
                            <p className="sub-label">University Information</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="name-address d-flex flex-column align-items-start">
                            <p className="title">Osmania University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Amberpet, Hyderabad</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="sub-item-container d-flex flex-column align-items-center">
                            <p className="title">University ID</p>
                            <p className="sub-title">XXXX2002</p>
                        </div>
                        <div className="vertical-border" />
                        <div className="view-info-btn">View Information</div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UniversityCmp;

import React from 'react'

const NewUniCmp = (props) => {
    return (
        <div className="page-body">
            <div className="row universities-section">
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="heading">Subscribe to new University/Universities</p>
                    <div className="universities-filter-section d-flex align-items-center w-full">
                        <div className="filter-input-container d-flex flex-column align-items-center">
                            <input type="text" className="form-control search-univ" placeholder="Enter the name of any specific university" />
                            <div className="drop-down-inputs-container d-flex justify-content-between align-items-center w-full">
                                <select className="form-control select-filter">
                                    <option value>By Hiring Criteria</option>
                                </select>
                                <p className="dividerWord">Or</p>
                                <select className="form-control select-filter">
                                    <option value>By Location</option>
                                </select>
                                <select className="form-control select-filter">
                                    <option value>By Skills</option>
                                </select>
                                <select className="form-control select-filter">
                                    <option value>By Average CGPA</option>
                                </select>
                            </div>
                        </div>
                        <div className="filter-search-btn-container d-flex justify-content-center align-items-center">
                            <div className="univ-search-btn d-flex justify-content-between align-items-center">
                                <p>Search</p> <i className="fas fa-search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row universities-list-container">
                <div className="d-flex flex-column align-items-center w-full">
                    <p className="heading">5 Universities found matching your search criteria</p>
                    <div className="row filter-chips-list d-flex justify-content-end align-items-center w-full">
                        <div className="filter-chip d-flex justify-content-between align-items-center">
                            <p>Hyderabad</p> <i className="fas fa-times" />
                        </div>
                        <div className="filter-chip d-flex justify-content-between align-items-center">
                            <p>Blockchain</p> <i className="fas fa-times" />
                        </div>
                        <div className="filter-chip d-flex justify-content-between align-items-center">
                            <p>Java</p> <i className="fas fa-times" />
                        </div>
                        <div className="filter-chip d-flex justify-content-between align-items-center">
                            <p>7.0 and above</p> <i className="fas fa-times" />
                        </div>
                    </div>
                </div>
                <div className="university-item d-flex justify-content-between align-items-center w-full">
                    <div className="univ-item-container d-flex justify-content-start align-items-center">
                        <div className="univ-icon">
                            <i className="fas fa-university" />
                        </div>
                        <div className="univ-basic-info d-flex flex-column align-items-start">
                            <p className="title">Jawaharal Nehru Technology University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Kukatpally, Hyderabad</p>
                        </div>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">University ID</p>
                        <p className="sub-title">XXXX2002</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">NIRF Ranking</p>
                        <p className="sub-title">54 (National)</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">Accredations</p>
                        <p className="sub-title">NAAC 'A'</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-view-more-btn">View more</div>
                </div>
                <div className="university-item d-flex justify-content-between align-items-center w-full">
                    <div className="univ-item-container d-flex justify-content-start align-items-center">
                        <div className="univ-icon">
                            <i className="fas fa-university" />
                        </div>
                        <div className="univ-basic-info d-flex flex-column align-items-start">
                            <p className="title">Osmania University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Kukatpally, Hyderabad</p>
                        </div>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">University ID</p>
                        <p className="sub-title">XXXX2002</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">NIRF Ranking</p>
                        <p className="sub-title">54 (National)</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">Accredations</p>
                        <p className="sub-title">NAAC 'A'</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-view-more-btn">View more</div>
                </div>
                <div className="university-item d-flex justify-content-between align-items-center w-full">
                    <div className="univ-item-container d-flex justify-content-start align-items-center">
                        <div className="univ-icon">
                            <i className="fas fa-university" />
                        </div>
                        <div className="univ-basic-info d-flex flex-column align-items-start">
                            <p className="title">Jawaharal Nehru Technology University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Kukatpally, Hyderabad</p>
                        </div>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">University ID</p>
                        <p className="sub-title">XXXX2002</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">NIRF Ranking</p>
                        <p className="sub-title">54 (National)</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">Accredations</p>
                        <p className="sub-title">NAAC 'A'</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-view-more-btn">View more</div>
                </div>
                <div className="university-item d-flex justify-content-between align-items-center w-full">
                    <div className="univ-item-container d-flex justify-content-start align-items-center">
                        <div className="univ-icon">
                            <i className="fas fa-university" />
                        </div>
                        <div className="univ-basic-info d-flex flex-column align-items-start">
                            <p className="title">Osmania University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Kukatpally, Hyderabad</p>
                        </div>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">University ID</p>
                        <p className="sub-title">XXXX2002</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">NIRF Ranking</p>
                        <p className="sub-title">54 (National)</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">Accredations</p>
                        <p className="sub-title">NAAC 'A'</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-view-more-btn">View more</div>
                </div>
                <div className="university-item d-flex justify-content-between align-items-center w-full">
                    <div className="univ-item-container d-flex justify-content-start align-items-center">
                        <div className="univ-icon">
                            <i className="fas fa-university" />
                        </div>
                        <div className="univ-basic-info d-flex flex-column align-items-start">
                            <p className="title">Jawaharal Nehru Technology University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Kukatpally, Hyderabad</p>
                        </div>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">University ID</p>
                        <p className="sub-title">XXXX2002</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">NIRF Ranking</p>
                        <p className="sub-title">54 (National)</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">Accredations</p>
                        <p className="sub-title">NAAC 'A'</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-view-more-btn">View more</div>
                </div>
                <div className="university-item d-flex justify-content-between align-items-center w-full">
                    <div className="univ-item-container d-flex justify-content-start align-items-center">
                        <div className="univ-icon">
                            <i className="fas fa-university" />
                        </div>
                        <div className="univ-basic-info d-flex flex-column align-items-start">
                            <p className="title">Osmania University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Kukatpally, Hyderabad</p>
                        </div>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">University ID</p>
                        <p className="sub-title">XXXX2002</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">NIRF Ranking</p>
                        <p className="sub-title">54 (National)</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">Accredations</p>
                        <p className="sub-title">NAAC 'A'</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-view-more-btn">View more</div>
                </div>
                <div className="university-item d-flex justify-content-between align-items-center w-full">
                    <div className="univ-item-container d-flex justify-content-start align-items-center">
                        <div className="univ-icon">
                            <i className="fas fa-university" />
                        </div>
                        <div className="univ-basic-info d-flex flex-column align-items-start">
                            <p className="title">Jawaharal Nehru Technology University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Kukatpally, Hyderabad</p>
                        </div>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">University ID</p>
                        <p className="sub-title">XXXX2002</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">NIRF Ranking</p>
                        <p className="sub-title">54 (National)</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">Accredations</p>
                        <p className="sub-title">NAAC 'A'</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-view-more-btn">View more</div>
                </div>
                <div className="university-item d-flex justify-content-between align-items-center w-full">
                    <div className="univ-item-container d-flex justify-content-start align-items-center">
                        <div className="univ-icon">
                            <i className="fas fa-university" />
                        </div>
                        <div className="univ-basic-info d-flex flex-column align-items-start">
                            <p className="title">Osmania University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Kukatpally, Hyderabad</p>
                        </div>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">University ID</p>
                        <p className="sub-title">XXXX2002</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">NIRF Ranking</p>
                        <p className="sub-title">54 (National)</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">Accredations</p>
                        <p className="sub-title">NAAC 'A'</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-view-more-btn">View more</div>
                </div>
                <div className="university-item d-flex justify-content-between align-items-center w-full">
                    <div className="univ-item-container d-flex justify-content-start align-items-center">
                        <div className="univ-icon">
                            <i className="fas fa-university" />
                        </div>
                        <div className="univ-basic-info d-flex flex-column align-items-start">
                            <p className="title">Jawaharal Nehru Technology University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Kukatpally, Hyderabad</p>
                        </div>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">University ID</p>
                        <p className="sub-title">XXXX2002</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">NIRF Ranking</p>
                        <p className="sub-title">54 (National)</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">Accredations</p>
                        <p className="sub-title">NAAC 'A'</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-view-more-btn">View more</div>
                </div>
                <div className="university-item d-flex justify-content-between align-items-center w-full">
                    <div className="univ-item-container d-flex justify-content-start align-items-center">
                        <div className="univ-icon">
                            <i className="fas fa-university" />
                        </div>
                        <div className="univ-basic-info d-flex flex-column align-items-start">
                            <p className="title">Osmania University</p>
                            <p className="sub-title"><i className="fas fa-map-marker-alt" /> Kukatpally, Hyderabad</p>
                        </div>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">University ID</p>
                        <p className="sub-title">XXXX2002</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">NIRF Ranking</p>
                        <p className="sub-title">54 (National)</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-info-item d-flex flex-column align-items-center">
                        <p className="title">Accredations</p>
                        <p className="sub-title">NAAC 'A'</p>
                    </div>
                    <div className="vertical-divider-2" />
                    <div className="univ-view-more-btn">View more</div>
                </div>
            </div>
        </div>

    )
}

export default NewUniCmp;
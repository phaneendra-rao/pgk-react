import React from 'react'

const NewUniCmp = (props) => {
    return (
        <>
            <div className="row universities-list-container">
                <div className="d-flex flex-column align-items-center w-full">
                    <p className="heading">{props.searchList?.length != 0 ? props.searchList?.length : 0} Universities found matching your search criteria</p>
                    {/* <div className="row filter-chips-list d-flex justify-content-end align-items-center w-full">
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
                    </div> */}
                </div>
                {props.searchList && props.searchList?.length
                    ? props.searchList?.map((item, i) =>
                        <div className="university-item d-flex justify-content-between align-items-center w-full" key={i}>
                            <div className="univ-item-container d-flex justify-content-start align-items-center">
                                <div className="univ-icon">
                                    <i className="fas fa-university" />
                                </div>
                                <div className="univ-basic-info d-flex flex-column align-items-start">
                                    <p className="title">{item.universityName}</p>
                                    <p className="sub-title"><i className="fas fa-map-marker-alt" /> {item.locations}</p>
                                </div>
                            </div>
                            <div className="vertical-divider-2" />
                            <div className="univ-info-item d-flex flex-column align-items-center">
                                <p className="title">University ID</p>
                                <p className="sub-title">{item.universityID}</p>
                            </div>
                            <div className="vertical-divider-2" />
                            <div className="univ-info-item d-flex flex-column align-items-center">
                                <p className="title">NIRF Ranking</p>
                                <p className="sub-title">{item?.ranking?.rank}</p>
                            </div>
                            <div className="vertical-divider-2" />
                            <div className="univ-info-item d-flex flex-column align-items-center">
                                <p className="title">Accredations</p>
                                <p className="sub-title">{item?.accredations?.issuingAuthority}</p>
                            </div>
                            <div className="vertical-divider-2" />
                            <button type="button" onClick={() => props.viewMore(item.universityID)} className="univ-view-more-btn">View more</button>
                        </div>)
                    : "No data"
                }
            </div>
        </>
    )
}

export default NewUniCmp;
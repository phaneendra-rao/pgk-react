import React from 'react'

const SubscribeSearchCmp = (props) => {
    return (
        <div className="row universities-section">
            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                <h4 className="heading">Subscribe to new University/Universities</h4>
                <form className="universities-filter-section d-flex align-items-center w-full" onSubmit={props.handleSubmit}>
                    <div className="filter-input-container d-flex flex-column align-items-center">
                        <input type="text"
                            name="universityName"
                            onChange={props.handleChange}
                            className="form-control search-univ" placeholder="Enter the name of any specific university" />
                        <div className="drop-down-inputs-container d-flex justify-content-between align-items-center w-full">
                            <select
                                name="hcID"
                                onChange={props.handleChange}
                                disabled={props.hcEnable}
                                className="form-control select-filter">
                                <option value>By Hiring Criteria</option>
                                {props.hiringCriteria && props.hiringCriteria?.length >= 0
                                    ? props.hiringCriteria?.map((item, i) => <option key={i} value={item.hiringCriteriaID}>{item.hiringCriteriaName}</option>)
                                    : (null)
                                }
                            </select>
                            <p className="dividerWord">Or</p>
                            <select
                                name="locations"
                                onChange={props.handleChange}
                                className="form-control select-filter"
                                disabled={props.hcID}
                                required>
                                <option value="">By Location</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Mumbai">Mumbai</option>
                            </select>
                            <select
                                name="skills"
                                onChange={props.handleChange}
                                disabled={props.hcID}
                                className="form-control select-filter">
                                <option value={'DEFAULT'} disabled>By Skills</option>
                                {props.lookUpData && props.lookUpData?.skills?.length >= 0
                                    ? props.lookUpData?.skills.map((item, i) => <option key={i} value={item.SkillID}>{item.skill}</option>) : (null)
                                }
                            </select>
                            <select className="form-control select-filter"
                                disabled={props.hcID}>
                                <option>By Average CGPA</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </div>
                    </div>
                    <div className="filter-search-btn-container d-flex justify-content-center align-items-center">
                        <button type="submit" style={{cursor:'pointer'}} className="univ-search-btn d-flex justify-content-between align-items-center">
                            Search <i className="fas fa-search ml-2" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SubscribeSearchCmp;

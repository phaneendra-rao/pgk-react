import React from 'react'
import PgkTextField from '../../../../Components/FormFields/PgkTextField';
import PgkSelectField from '../../../../Components/FormFields/PgkSelectField';

const SubscribeSearchCmp = (props) => {
    return (
        <div className="row universities-section">
            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                <h4 className="heading">Subscribe to new University/Universities</h4>
                <form className="universities-filter-section d-flex align-items-center w-full" onSubmit={props.handleSubmit}>
                    <div className="filter-input-container d-flex flex-column align-items-center">
                        <div style={{marginBottom: '10px', width: '100%'}}>
                            <PgkTextField
                                name="universityName"
                                value={props?.universityName}
                                label={"Enter the name of any specific university"}
                                onChange={props?.onChange}
                                inputLabelProps={{style:{fontSize: '.800rem', backgroundColor: 'white', padding: '0px 3px 0px 3px'}}}
                                inputProps={{style:{fontSize: '.800rem', backgroundColor: 'white', borderRadius: '5px'}}}
                            />
                        </div>
                        <div className="drop-down-inputs-container d-flex justify-content-between align-items-center w-full">
                            <PgkSelectField 
                                name="hcID"
                                value={props?.hcID}
                                onChange={props?.onChange}
                                label={`By Hiring Criteria`}
                                options={props?.hiringCriteria?.length ? props.hiringCriteria.map((item)=>{
                                    return {value: item.hiringCriteriaID, label: item.hiringCriteriaName}
                                }) : []}
                                labelStyles={{fontSize: '.800rem', backgroundColor: 'white', padding: '0px 3px 0px 3px'}}
                                selectStyles={{fontSize: '.800rem', backgroundColor: 'white'}}
                                menuStyles={{fontSize: '.800rem'}}
                            />
                            <p className="dividerWord">Or</p>
                            <PgkSelectField 
                                name="locations"
                                value={props?.locations}
                                onChange={props?.onChange}
                                label={`By Location`}
                                options={['Hyderabad', 'Delhi', 'Mumbai'].map((item)=>{
                                    return {value: item, label: item}
                                })}
                                labelStyles={{fontSize: '.800rem', backgroundColor: 'white', padding: '0px 3px 0px 3px'}}
                                selectStyles={{fontSize: '.800rem', backgroundColor: 'white', marginRight: '2px'}}
                                menuStyles={{fontSize: '.800rem'}}
                            />
                            <PgkSelectField 
                                name="skills"
                                value={props?.skills}
                                onChange={props?.onChange}
                                label={`By Skills`}
                                options={props.lookUpData?.skills?.length ? props.lookUpData?.skills.map((item)=>{
                                    return {value: item.skillCode, label: item.skillName}
                                }) : []}
                                labelStyles={{fontSize: '.800rem', backgroundColor: 'white', padding: '0px 3px 0px 3px'}}
                                selectStyles={{fontSize: '.800rem', backgroundColor: 'white', marginLeft: '2px', marginRight: '2px'}}
                                menuStyles={{fontSize: '.800rem'}}
                            />
                            <PgkSelectField 
                                name="locations"
                                value={props?.cgpa}
                                onChange={props?.onChange}
                                label={`By Average CGPA`}
                                options={['8', '9', '10'].map((item)=>{
                                    return {value: item, label: item}
                                })}
                                labelStyles={{fontSize: '.800rem', backgroundColor: 'white', padding: '0px 3px 0px 3px'}}
                                selectStyles={{fontSize: '.800rem', backgroundColor: 'white', marginLeft: '2px'}}
                                menuStyles={{fontSize: '.800rem'}}
                            />
                        </div>
                    </div>
                    <div className="filter-search-btn-container d-flex justify-content-center align-items-center">
                        <button type="submit" style={{height: '25px', maxWidth: '80px'}} className="btn univ-search-btn d-flex justify-content-between align-items-center">
                            Search <i className="fas fa-search ml-2" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SubscribeSearchCmp;

import React from 'react';
import {moment} from 'moment';
import HiringCriteriaListItem from '../../../../../Components/Dashboard/HiringCriteria/HiringCriteriaListItem';

const HiringCriteriaCmp = (props) => {

    return (
        <>
            <div className="row published-jobs-section">
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="heading">Hiring Criteria</p>
                    {props.hiringCriteria?.length
                        ?
                        props.hiringCriteria?.map((item, i) =>
                            <HiringCriteriaListItem item={item} />
                        ) : 'no data'}
                    <button type="button" onClick={props.openCloseModal} className="btn">
                        Add new Hiring Criteria
                    </button>
                </div>
            </div>

        </>
    )
}

export default HiringCriteriaCmp;
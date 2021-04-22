import React, { useState } from 'react'
import HiringCriteriaFormCmp from '../../../../Components/Dashboard/HiringCriteriaCmp/HiringCriteriaFormCmp'

const HiringCriteriaForm = ({ openCloseModal, addHiringCriteria, lookUpData }) => {

    const initialData = {
        hiringCriteriaName: '',
        programID: '',
        departmentID: '',
        cutOffCategory: '',
        cutOff: '',
        eduGapsSchoolAllowed: false,
        eduGaps11N12Allowed: false,
        eduGapsGradAllowed: false,
        eduGapsPGAllowed: false,
        allowActiveBacklogs: false,
        numberOfAllowedBacklogs: '',
        yearOfPassing: '',
        remarks: ''
    };

    const [hiringData, setHiringData] = useState(initialData);
    const [eduGaps, setEduGaps] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(value);

        switch (name) {
            case 'hiringCriteriaName':
            case 'programID':
            case 'departmentID':
            case 'cutOffCategory':
            case 'cutOff':
            case 'numberOfAllowedBacklogs':
            case 'yearOfPassing':
            case 'remarks':
                setHiringData(preState => ({
                    ...preState,
                    [name]: value
                }));

            case 'eduGaps':
                const eduGaps = value === 'true' ? true : false;
                // setHiringData(preState => ({
                //     ...preState,
                //     [name]: eduGaps
                // }));
                setEduGaps(eduGaps)
                break;
            case 'allowActiveBacklogs':
                case 'eduGapsSchoolAllowed':
                case 'eduGaps11N12Allowed':
                case 'eduGapsGradAllowed':
                case 'eduGapsPGAllowed':
                const allowActiveBacklogs = value === 'true' ? true : false;
                setHiringData(preState => ({
                    ...preState,
                    [name]: allowActiveBacklogs
                }));
                break;

            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addHiringCriteria(hiringData);
    }


    return (
        <div className="modal fade" id="hiringCriteria" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered  modal-lg" role="document">
                <div className="modal-content">
                    <div className="hiring-modal">
                        <div className="modal-header hiring-modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create a new Hiring Criteria</h5>
                            <button type="button" className="close" onClick={openCloseModal} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <HiringCriteriaFormCmp
                            hiringData={hiringData}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            openCloseModal={openCloseModal}
                            eduGaps={eduGaps}
                            lookUpData={lookUpData}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HiringCriteriaForm;

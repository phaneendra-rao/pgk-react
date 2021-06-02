import React, { useState } from 'react'
import { toast } from 'react-toastify';
import HiringCriteriaFormCmp from '../../../../Components/Dashboard/HiringCriteriaCmp/HiringCriteriaFormCmp'

const HiringCriteriaForm = (props) => {

    const initialData = {
        hiringCriteriaName: '',
        // programID: '',
        // courseID: '',
        // cutOffCategory: 'CGPA',
        // cutOff: '',
        minimumCutoffPercentage10th: 0,
        minimumCutoffPercentage12th: 0,
        minimumCutoffCGPAGrad: 0,
        minimumCutoffPercentageGrad: 0,
        eduGapsSchoolAllowed: false,
        eduGaps11N12Allowed: false,
        eduGaps12NGradAllowed: false,
        eduGapsGradAllowed: false,
        eduGapsGradNPGAllowed: false,
        eduGapsPGAllowed: false,
        allowActiveBacklogs: false,
        numberOfAllowedBacklogs: 0,
        eduGapsSchool: 0,
        eduGaps11N12: 0,
        eduGaps12NGrad: 0,
        eduGapsGrad: 0,
        eduGapsGradNPG: 0,
        yearOfPassing: 0,
        remarks: ''
    };

    const [hiringData, setHiringData] = useState(initialData);
    const [eduGaps, setEduGaps] = useState(false);
    const [branchCatalog, setBranchCatalog] = useState([]);
    const [hcPrograms, setHcPrograms] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'programID':
                const programObj = props.lookUpData?.programCatalog?.find(program => program.programCode === value);
                const filteredBranches = props.lookUpData?.branchCatalog?.filter(branch => branch.programID === value);
                const branchCatalog = filteredBranches.map(item => (
                    {
                        value: item.branchID,
                        label: item.branchName,
                        programID: item.programID,
                        programName: programObj.programName,
                    }
                ));
                setBranchCatalog(branchCatalog);
                break;
            case 'minimumCutoffPercentage10th':
            case 'minimumCutoffPercentage12th':
            case 'minimumCutoffCGPAGrad':
            case 'minimumCutoffPercentageGrad':
                setHiringData(preState => ({
                    ...preState,
                    [name]: parseFloat(value)
                }));
                break;
            case 'hiringCriteriaName':
            case 'remarks':
                setHiringData(preState => ({
                    ...preState,
                    [name]: value
                }));
                break;
            case 'cutOff':
                setHiringData(preState => ({
                    ...preState,
                    [name]: parseFloat(value)
                }));
                break;
            case 'numberOfAllowedBacklogs':
            case 'eduGapsSchool':
            case 'eduGaps11N12':
            case 'eduGaps12NGrad':
            case 'eduGapsGrad':
            case 'eduGapsGradNPG':
                setHiringData(preState => ({
                    ...preState,
                    [name]: parseInt(value)
                }));
                break;
            case 'yearOfPassing':
                setHiringData(preState => ({
                    ...preState,
                    [name]: parseInt(value)
                }));
                break;
            case 'eduGaps':
                const eduGaps = value === 'true' ? true : false;
                setEduGaps(eduGaps);
                if (!eduGaps) {
                    setHiringData(preState => ({
                        ...preState,
                        eduGapsSchoolAllowed: false,
                        eduGaps11N12Allowed: false,
                        eduGaps12NGradAllowed: false,
                        eduGapsGradAllowed: false,
                        eduGapsGradNPGAllowed: false,
                        eduGapsPGAllowed: false,
                        eduGapsSchool: 0,
                        eduGaps11N12: 0,
                        eduGaps12NGrad: 0,
                        eduGapsGrad: 0,
                        eduGapsGradNPG: 0,
                    }))
                }
                break;
            case 'allowActiveBacklogs':
                const allowActiveBacklogs = value === 'true' ? true : false;
                if (allowActiveBacklogs) {
                    setHiringData(preState => ({
                        ...preState,
                        [name]: allowActiveBacklogs
                    }));
                } else {
                    setHiringData(preState => ({
                        ...preState,
                        numberOfAllowedBacklogs: 0,
                        [name]: allowActiveBacklogs
                    }));
                }
                break;
            case 'eduGapsSchoolAllowed':
            case 'eduGaps11N12Allowed':
            case 'eduGaps12NGradAllowed':
            case 'eduGapsGradAllowed':
            case 'eduGapsGradNPGAllowed':
            case 'eduGapsPGAllowed':
                const isTrue = value === 'true' ? true : false;
                setHiringData(preState => ({
                    ...preState,
                    [name]: isTrue
                }));
                break;

            default:
                break;
        }
    }

    const handleChangeBranch = (selected) => {
        const hcPrograms = selected.map(item => ({
            branchID: item.value,
            branchName: item.label,
            programID: item.programID,
            programName: item.programName,
        }))
        setHcPrograms(hcPrograms);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { hiringCriteriaName,
            minimumCutoffPercentage10th,
            minimumCutoffPercentage12th,
            minimumCutoffCGPAGrad,
            minimumCutoffPercentageGrad,
            yearOfPassing } = hiringData;
        const year = new Date().getFullYear();
        if (hcPrograms.length > 0 && hiringCriteriaName && minimumCutoffPercentage10th && minimumCutoffPercentage12th
            && minimumCutoffCGPAGrad && minimumCutoffPercentageGrad && yearOfPassing < year) {
            const model = {
                ...hiringData,
                hcPrograms: hcPrograms
            }
            props.addHiringCriteria(model);
        } else {
            toast.error('please enter required fields')
        }
    }


    return (
        <div className="hiring-modal">
            <div className="modal-header hiring-modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create a new Hiring Criteria</h5>
                <button type="button" className="close" onClick={props.openCloseModal} data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <HiringCriteriaFormCmp
                hiringData={hiringData}
                eduGaps={eduGaps}
                branchCatalog={branchCatalog}
                openCloseModal={props.openCloseModal}
                lookUpData={props.lookUpData}
                handleChange={handleChange}
                handleChangeBranch={handleChangeBranch}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default HiringCriteriaForm;

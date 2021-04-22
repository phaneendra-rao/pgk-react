import React, { useState } from 'react'
import AddJobsCmp from '../../../../Components/Dashboard/JobsCmp/AddJobsCmp'

const AddJobs = () => {
    const initialData = {
        jobName: '',
        hiringCriteriaID: '',
        hiringCriteriaName: '',
    }

    const [addJobs, setAddJobs] = useState(initialData);
    const [addskills, setAddSkills] = useState({
        skillID: '',
        skill: '',
        noOfPositions: Number,
        location: '',
        salaryRange: '',
        dateOfHiring: '',
        remarks: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'skillID':
            case 'skill':
            case 'location':
            case 'noOfPositions':
            case 'salaryRange':
            case 'dateOfHiring':
            case 'remarks':
                setAddSkills(preState => ({
                    ...preState,
                    [name]: value
                }));
                break;

            case 'jobName':
            case 'hiringCriteriaID':
            case 'hiringCriteriaName':
                setAddJobs(preState => ({
                    ...preState,
                    [name]: value
                }));
                break;

            default:
                break;
        }
    }

    return (
        <>
            <AddJobsCmp
                handleChange={handleChange}
                addskills={addskills}
            />
        </>
    )
}

export default AddJobs;

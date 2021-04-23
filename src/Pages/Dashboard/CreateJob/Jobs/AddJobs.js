import React, { useState } from 'react'
import { toast } from 'react-toastify'
import AddJobsCmp from '../../../../Components/Dashboard/JobsCmp/AddJobsCmp'

const AddJobs = (props) => {
    const initialData = {
        jobName: '',
        hiringCriteriaID: '',
        hiringCriteriaName: '',
    }

    const skillItems = {
        skillID: '',
        skill: '',
        noOfPositions: Number,
        location: '',
        salaryRange: '',
        dateOfHiring: '',
        remarks: '',
    }

    const [addJobs, setAddJobs] = useState(initialData);
    const [addskills, setAddSkills] = useState([skillItems]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            // case 'skillID':
            // case 'skill':
            // case 'location':
            // case 'noOfPositions':
            // case 'salaryRange':
            // case 'dateOfHiring':
            // case 'remarks':
            //     setAddSkills(preState => ({
            //         ...preState,
            //         addskills[i][name]: value
            //     }));
            //     break;

            case 'jobName':
                const hiringList = value.split(",");
                setAddJobs(preState => ({
                    ...preState,
                    [name]: value
                }));
                break;
            case 'hiringCriteriaID':
                const hiringVal = value.split(",");
                setAddJobs(preState => ({
                    ...preState,
                    hiringCriteriaID: hiringVal[0],
                    hiringCriteriaName: hiringVal[1]
                }));
                break;

            default:
                break;
        }
    }

    const handleChangeSkills = (event, i) => {
        const { name, value } = event.target;
        let list = [...addskills];
        if (name === "skillID") {
            const skillVal = value.split(",");
            list[i]['skillID'] = skillVal[0];
            list[i]['skill'] = skillVal[1];
        } else {
            list[i][name] = value
        }
        setAddSkills(list);
        // switch (name) {
        //     case 'skillID':
        //     case 'skill':
        //     case 'location':
        //     case 'noOfPositions':
        //     case 'salaryRange':
        //     case 'dateOfHiring':
        // case 'remarks':
        // setAddSkills(preState => ({
        //     ...preState,
        //     addskills: {
        //         [i]: { [name]: value }
        //     }
        // }));
        //         break;

        //     default:
        //         break;
        // }
    }

    const addNewItem = () => {
        setAddSkills([...addskills, skillItems]);
    }

    const removeItem = (id) => {
        // let newItems = [...addskills];
        // newItems.splice(id, 1);
        // setAddSkills(newItems);
        let newItems = addskills.filter((item, i) => i !== id);
        setAddSkills(newItems);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!addJobs.jobName && !addJobs.hiringCriteriaID && !addJobs.hiringCriteriaName && addskills.length === 0 ) {
            toast.error("Please enter all required fields");
         return;   
        }
        const model = {
            ...addJobs,
            skills: JSON.stringify(addskills),
        }
        // console.log(model);
        props.addJobsForm(model);
    }


    return (
        <>
            <AddJobsCmp
                hiringCriteria={props.hiringCriteria}
                lookUpData={props.lookUpData}
                handleChange={handleChange}
                handleChangeSkills={handleChangeSkills}
                addNewItem={addNewItem}
                removeItem={removeItem}
                handleSubmit={handleSubmit}
                addskills={addskills}
            />
        </>
    )
}

export default AddJobs;

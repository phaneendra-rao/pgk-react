import React, { useEffect, useState } from 'react'
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

    useEffect(() => {
        if (props.isAddJobEnable) {
            setAddJobs(initialData);
            setAddSkills([skillItems]);
            if (props.isEdit && props.modelData) {
                setAddSkills(props.modelData?.skills);
                setAddJobs({
                    jobName: props.modelData?.jobName,
                    hiringCriteriaID: props.modelData?.hiringCriteriaID,
                    hiringCriteriaName: props.modelData?.hiringCriteriaName,
                });
            }
        }
    }, [])

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
            if (name === 'noOfPositions') {
                list[i][name] = parseInt(value);
            } else if (name === 'dateOfHiring') {
                list[i][name] = new Date(value).toISOString();
            } else {
                list[i][name] = value;
            }
        }
        setAddSkills(list);
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

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!addJobs.jobName && !addJobs.hiringCriteriaID && !addJobs.hiringCriteriaName && addskills.length === 0) {
            toast.error("Please enter all required fields");
            return;
        }
        const model = {
            ...addJobs,
            // skills: JSON.stringify(addskills),
            skills: addskills,
        }
        props.addJobsForm(model);
    }

    const dateFormat = (date) => {
        let d = new Date(date);
        const dt = d.toLocaleDateString().split("/");
        return dt[2]+"-"+dt[1]+"-"+dt[0];
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
                dateFormat={dateFormat}
                addskills={addskills}
                addJobs={addJobs}
                isEdit={props.isEdit}
                hiringCriteria={props.hiringCriteria}
                lookUpData={props.lookUpData}
                handleClick={props.handleClick}
            />
        </>
    )
}

export default AddJobs;

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import AddJobsCmp from './Components/AddJobsCmp'

const AddJobs = (props) => {
    const initialData = {
        jobName: '',
        jobType: '',
        hiringCriteriaID: 'CT',
        hiringCriteriaName: 'CT',
        salaryMinRange: '',
        salaryMaxRange: '',
        monthOfHiring: '',
        remarks: '',
        attachment: '/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP//////////////////////////////////////////////////////////////////////////////////////2wBDAf//////////////////////////////////////////////////////////////////////////////////////wAARCADqATkDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECA//EACQQAQEBAAIBBAMBAQEBAAAAAAABESExQQISUXFhgZGxocHw/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQH/2gAMAwEAAhEDEQA/AMriLyCKgg1gQwCgs4FTMOdutepjQak+FzMSVqgxZdRdPPIIvH5WzzGdBriphtTeAXg2ZjKA1pqKDUGZca3foBek8gFv8Ie3fKdA1qb8s7hoL6eLVt51FsAnql3Ut1M7AWbflLMDkEMX/F6/YjK/pADFQAUNA6alYagKk72m/j9p4Bq2fDDSYKLNXPNLoHE/NT6RYC31cJxZ3yWVM+aBYi/S2ZgiAsnYJx5D21vPmqrm3PTfpQQwyAC8JZvSKDni41ZrMuUVVl+Uz9w9v/1QWrZsZ5nFPHYH+JZyureQSF5M+fJ0CAfwRAVRBQA1DAWVUayoJUWoDpsxntPsueBV4+VxhdyAtv8AjOLGpIDMLbeGvbF4iozJfr/WukAVABAXAQXEAAASzVAZdO2WNordm+emFl7XcQSNZiFtv0C9w90nhJf4mA1u+GcJFwIyAqL/AOovwgGNfSRqdIrNa29M0gKCAojU9PAMjWXpckEJFNFEAAXEUBABYz6rZ0ureQc9vyt9XxDF2QAXtABcQAs0AZywkvluJbyipifas52DcyxjlZweAO0xri/hc+wZOEKIu6nSyeToVZyWXwvCg53gW81QQ7aTNAn5dGZJPs1UXURQAUEMCXQLZE93PRZ5hPTgNMrbIzKCm52LZwCs+2M8w2g3sjPuZAXb4IsMAUACzVUGM4/K+md6vEXUUyM5PDR0IxYe6ramih0VNBrS4xoqN8Q1BFQk3yqyAsioioAAKgDSJL4/jQIn5igLrPqtOuf6oOaxbMoAltUAhhIoJiiggrPu+AaOIxtAX3JbaAIaLwi4t9X4T3fg2AFtqcrUUarP20zUDAmqoE0WRBZPNVUVEAAAAVAC8kvih2DSKxOdBqs7Z0l0gI0mKAC4AuHE7ZtBriM+744QAAAAABAFsveIttBICyaikvy1+r/Cen5rWQHIBQa4rIDRqSl5qDWqziqgAAAATA7BpGdqXb2C2+J/UgAtRQBSQtkBWb6vhLbQAAAAAEBRAAAAAUbm+GZNdPxAP+ql2Tjwx7/wIgZ8iKvBk+CJoCXii9gaqZ/qqihAAAEVABGkBFUwBftNkZ3QW34QAAABFAQAVAAAAAARVkl8gs/43sk1jL45LvHArepk+E9XTG35oLqsmIKmLAEygKg0y1AFQBUXwgAAAoBC34S3UAAABAVAAAAAABAUQAVABdRQa1PcYyit2z58M8C4ouM2NXpOEGeWtNZUatiAIoAKIoCoAoG4C9MW6dgIoAIAAAAAAACKWAgL0CAAAALiANCKioNLgM1CrLihmTafkt1EF3SZ5ZVUW4mnIKvAi5fhEURVDWVQBRAAAAAAAAQFRVyAyulgAqCKlF8IqLsEgC9mGoC+IusqCrv5ZEUVOk1RuJfwSLOOkGFi4XPCoYYrNiKauosBGi9ICstM1UAAAAAAFQ0VcTBAXUGgIqGoKhKAzRRUQUAwxoSrGRpkQA/qiosOL9oJptMRRVZa0VUqSiChE6BqMgCwqKqIogAIAqKCKgKoogg0lBFuIKgAAAKNRlf2gqsftsEtZWoAAqAACKoMqAAeSoqp39kL2AqLOlE8rEBFQARYALhigrNC9gGmooLp4TweEQFFBFAECgIoAu0ifIAqAAA//9k=',
        attachmentName: '1kb.jpg',
        status: '',
        noOfPositions: '',
        location: ''
    }

    const [addJobs, setAddJobs] = useState(initialData);
    const [addskills, setAddSkills] = useState([]);

    useEffect(() => {
        if (props.isAddJobEnable) {
            if (props.isEdit && props.modelData) {
                const jobSkills = props?.jobSkills?.map(item => ({ value: item.skillID, label: item.skillName }))
                setAddSkills(jobSkills);
                setAddJobs({
                    jobName: props.modelData?.jobName,
                    jobType: props.modelData?.jobType,
                    hiringCriteriaID: props.modelData?.hiringCriteriaID,
                    hiringCriteriaName: props.modelData?.hiringCriteriaName,
                    salaryMinRange: props.modelData?.salaryMinRange,
                    salaryMaxRange: props.modelData?.salaryMaxRange,
                    monthOfHiring: props.modelData?.monthOfHiring,
                    remarks: props.modelData?.remarks,
                    attachment: props.modelData?.attachment,
                    attachmentName: props.modelData?.attachmentName,
                    status: props.modelData?.status,
                    location: props.modelData?.location,
                    noOfPositions: props.modelData?.noOfPositions
                });
            }
        }
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'monthOfHiring') {
            setAddJobs(prevState => ({
                ...prevState,
                [name]: new Date(value).toISOString()
            }))
        } else if (name === 'noOfPositions') {
            setAddJobs(prevState => ({
                ...prevState,
                [name]: parseInt(value)
            }))
        } else {
            setAddJobs(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
        // switch (name) {
        //     case 'hiringCriteriaID':
        //         const hiringVal = value.split(",");
        //         setAddJobs(preState => ({
        //             ...preState,
        //             hiringCriteriaID: hiringVal[0],
        //             hiringCriteriaName: hiringVal[1]
        //         }));
        //         break;

        //     default:
        //         break;
        // }
    }

    const handleChangeSkills = (selectedOption) => {
        setAddSkills(selectedOption);
        // const { name, value } = event.target;
        // let list = [...addskills];
        // if (name === "skillID") {
        //     const skillVal = value.split(",");
        //     list[i]['skillID'] = skillVal[0];
        //     list[i]['skill'] = skillVal[1];
        // } else {
        //     if (name === 'noOfPositions') {
        //         list[i][name] = parseInt(value);
        //     } else if (name === 'dateOfHiring') {
        //         list[i][name] = new Date(value).toISOString();
        //     } else {
        //         list[i][name] = value;
        //     }
        // }
        // setAddSkills(list);
    }

    // const addNewItem = () => {
    //     setAddSkills([...addskills, skillItems]);
    // }

    // const removeItem = (id) => {
    //     // let newItems = [...addskills];
    //     // newItems.splice(id, 1);
    //     // setAddSkills(newItems);
    //     let newItems = addskills.filter((item, i) => i !== id);
    //     setAddSkills(newItems);
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (addJobs.jobName && addJobs.hiringCriteriaID || addJobs.hiringCriteriaName
            || addJobs.jobType || addJobs.monthOfHiring || addJobs.salaryMaxRange || addJobs.location
            || addJobs.salaryMinRange || addJobs.status || addskills.length >= 0) {
            const model = {
                ...addJobs,
                skills: addskills?.map(item => ({ skillID: item.value, skill: item.label })),
            }
            props.addJobsForm(model);
        } else {
            toast.error("Please enter all required fields");
        }
    }

    const dateFormat = (date) => {
        let d = new Date(date);
        const dt = d.toLocaleDateString().split("/");
        return dt[2] + "-" + dt[1] + "-" + dt[0];
    }

    const skillsList = props.lookUpData?.skills?.map(item => ({ value: item.skillCode, label: item.skillName }))

    return (
        <>
            <AddJobsCmp
                hiringCriteria={props.hiringCriteria}
                lookUpData={props.lookUpData}
                handleChange={handleChange}
                handleChangeSkills={handleChangeSkills}
                // addNewItem={addNewItem}
                // removeItem={removeItem}
                skillsList={skillsList}
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

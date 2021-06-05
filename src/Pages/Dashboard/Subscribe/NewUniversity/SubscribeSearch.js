import React, { useState } from 'react';
import { toast } from 'react-toastify';
import SubscribeSearchCmp from './NewUniCmp/SubscribeSearchCmp';

const SubscribeSearch = (props) => {
    const [universityName, setUniversityName] = useState('');
    const [locations, setLocations] = useState('');
    const [hcID, setHcID] = useState('');
    const [skills, setSkills] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'universityName':
                setUniversityName(value);
                // setHcID('');
                break;

            case 'locations':
                setLocations(value);
                setHcID('');
                break;

            case 'skills':
                setSkills(value);
                setHcID('');
                break;

            case 'hcID':
                setHcID(value);
                setLocations('');
                setSkills('');
                break;

            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (universityName || skills || locations || hcID) {
            const params = {
                hcID: hcID,
                skills: skills,
                locations: locations,
                universityName: universityName
            }
            const reqParams = Object.keys(params).map(item => {
                if (params[item]) {
                    return `${item}=${params[item]}&`
                }
            }).join('').replace(/&$/, "");
            props.getSeachData(reqParams);
        } else {
            toast.warning("Select/Enter to search")
        }
    }

    const hcEnable = skills || locations;

    return (
        <>
            <SubscribeSearchCmp
                hcID={hcID}
                hcEnable={hcEnable}
                lookUpData={props.lookUpData}
                hiringCriteria={props.hiringCriteria}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default SubscribeSearch;

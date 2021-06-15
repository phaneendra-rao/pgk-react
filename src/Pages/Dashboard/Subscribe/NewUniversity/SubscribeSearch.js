import React, { useState } from 'react';
import { toast } from 'react-toastify';
import SubscribeSearchCmp from '../../../../Components/Dashboard/SubscribeCmp/NewUniCmp/SubscribeSearchCmp';

const SubscribeSearch = (props) => {
    const [universityName, setUniversityName] = useState('');
    const [locations, setLocations] = useState('');
    const [hcID, setHcID] = useState('');
    const [skills, setSkills] = useState('');

    const onChange = (name, value, errorMessage=undefined) => {
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
                universityName={universityName}
                locations={locations}
                skills={skills}
                lookUpData={props.lookUpData}
                hiringCriteria={props.hiringCriteria}
                onChange={onChange}
                handleSubmit={handleSubmit}
            />
        </>
    )
}

export default SubscribeSearch;

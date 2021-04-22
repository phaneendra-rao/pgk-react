import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import JobsCmp from '../../../../Components/Dashboard/JobsCmp/JobsCmp'
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import { HiringSagaAction } from '../../../../Store/Actions/SagaActions/HiringSagaAction';
import { AddJobsSagaAction, GetJobsSagaAction } from '../../../../Store/Actions/SagaActions/JobsSagaAction';
import AddJobs from './AddJobs';

const Jobs = () => {

    const [allJobs, setAllJobs] = useState([]);
    const [hiringCriteria, setHiringCriteria] = useState([]);
    const [lookUpData, setLookUpData] = useState([]);

    const dispatch = useDispatch();

    const getHiring = () => {
        dispatch(HiringSagaAction({ callback: getAllHirings }));
    }

    const getJobs = () => {
        dispatch(GetJobsSagaAction({ callback: getAllJobs }));
    }

    useEffect(() => {
        getHiring();
        getJobs();
        dispatch(actionGetDependencyLookUpsSagaAction({
            apiPayloadRequest: ['skills'],
            callback: dropdowns
        }));
    }, []);


    const getAllHirings = (data) => {
        setHiringCriteria(data);
    }

    const getAllJobs = (data) => {
        setAllJobs(data)
    }

    const dropdowns = (data) => {
        setLookUpData(data);
    }

    const addJobsForm = (model) => {
        dispatch(AddJobsSagaAction({apiPayloadRequest: model, callback: addJobsResp}));
    }
    
    const addJobsResp = (data) => {
        console.log(data);
    }
    
    return (
        <>
            <AddJobs
                lookUpData={lookUpData}
                hiringCriteria={hiringCriteria}
                addJobsForm={addJobsForm}
            />
            <JobsCmp
                hiringCriteria={hiringCriteria}
                allJobs={allJobs}
            />
        </>
    )
}

export default Jobs;

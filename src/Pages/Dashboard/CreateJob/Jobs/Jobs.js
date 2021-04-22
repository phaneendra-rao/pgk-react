import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import JobsCmp from '../../../../Components/Dashboard/JobsCmp/JobsCmp'
import { GetJobsSagaAction } from '../../../../Store/Actions/SagaActions/JobsSagaAction';
import AddJobs from './AddJobs';

const Jobs = () => {

    const [allJobs, setAllJobs] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetJobsSagaAction({ callback: getJobs }))
    }, []);

    const getJobs = (data) => {
        setAllJobs(data)
    }

    return (
        <>
            <AddJobs />
            <JobsCmp
                allJobs={allJobs}
            />
        </>
    )
}

export default Jobs;

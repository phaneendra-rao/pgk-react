import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import JobsCmp from '../../../../Components/Dashboard/JobsCmp/JobsCmp'
import PortalHiringModal from '../../../../Portals/PortalHiringModal';
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import { HiringSagaAction } from '../../../../Store/Actions/SagaActions/HiringSagaAction';
import { AddJobsSagaAction, GetJobsSagaAction } from '../../../../Store/Actions/SagaActions/JobsSagaAction';
import AddJobs from './AddJobs';
import JobDetailsModal from './JobDetailsModal';

const Jobs = () => {

    const [allJobs, setAllJobs] = useState([]);
    const [hiringCriteria, setHiringCriteria] = useState([]);
    const [lookUpData, setLookUpData] = useState([]);
    const [isDetailsModal, setIsDetailsModal] = useState(false);
    const [modelData, setModelData] = useState({});
    const [isAddJobEnable, setIsAddJobEnable] = useState(false)

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

    const handleClick = () => {
        setIsAddJobEnable(!isAddJobEnable);
    }

    const addJobsForm = (model) => {
        dispatch(AddJobsSagaAction({ apiPayloadRequest: model, callback: addJobsResp }));
    }

    const addJobsResp = (data) => {
        console.log(data);
        handleClick();
    }

    const detailsModal = (val) => {
        setIsDetailsModal(!isDetailsModal);
        setModelData(val);
    }

    return (
        <>
            {isAddJobEnable ?
                <AddJobs
                    lookUpData={lookUpData}
                    hiringCriteria={hiringCriteria}
                    addJobsForm={addJobsForm}
                    handleClick={handleClick}
                />
                : <JobsCmp
                    hiringCriteria={hiringCriteria}
                    allJobs={allJobs}
                    detailsModal={detailsModal}
                    handleClick={handleClick}
                />
            }

            {isDetailsModal
                ? <PortalHiringModal>
                    <JobDetailsModal
                        hiringCriteria={hiringCriteria}
                        detailsModal={detailsModal}
                        modelData={modelData}
                    />
                </PortalHiringModal>
                : (null)
            }
        </>
    )
}

export default Jobs;

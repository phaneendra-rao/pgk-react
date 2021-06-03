import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import JobsCmp from '../../../../Components/Dashboard/JobsCmp/JobsCmp'
import PortalHiringModal from '../../../../Portals/PortalHiringModal';
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import { HiringSagaAction } from '../../../../Store/Actions/SagaActions/HiringSagaAction';
import { AddJobsSagaAction, EditJobsSagaAction, GetJobByIdSagaAction, GetJobsSagaAction } from '../../../../Store/Actions/SagaActions/JobsSagaAction';
import AddJobs from './AddJobs';
import JobDetailsModal from './JobDetailsModal';
import CustomModal from '../../../../Components/CustomModal';

const Jobs = () => {

    const [allJobs, setAllJobs] = useState([]);
    const [hiringCriteria, setHiringCriteria] = useState([]);
    const [lookUpData, setLookUpData] = useState([]);
    const [isDetailsModal, setIsDetailsModal] = useState(false);
    const [modelData, setModelData] = useState({});
    const [isAddJobEnable, setIsAddJobEnable] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        getHiring();
        getJobs();
        dispatch(actionGetDependencyLookUpsSagaAction({
            apiPayloadRequest: ['skills', 'jobType'],
            callback: dropdowns
        }));
    }, []);

    const getHiring = () => {
        dispatch(HiringSagaAction({ callback: getAllHirings }));
    }

    const getJobs = () => {
        dispatch(GetJobsSagaAction({ callback: getAllJobs }));
    }

    const addJobsForm = (model) => {
        if (isEdit) {
            const body = { id: modelData.jobID, req: model }
            dispatch(EditJobsSagaAction({ apiPayloadRequest: body, callback: addJobsResp }));
        } else {
            dispatch(AddJobsSagaAction({ apiPayloadRequest: model, callback: addJobsResp }));
        }
    }

    const getJobById = (id) => {
        dispatch(GetJobByIdSagaAction({ apiPayloadRequest: id, callback: getJobByIdResp }))
    }


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
        setIsEdit(false);
    }

    const addJobsResp = (data) => {
        handleClick();
        getJobs();
        setIsEdit(false);
    }

    const detailsModal = (val) => {
        setIsDetailsModal(!isDetailsModal);
        getJobById(val);
    }

    const closeDetailsModal = () => {
        setIsDetailsModal(false);
        setModelData({});
    }

    const getJobByIdResp = (data) => {
        setModelData(data);
    }

    const editJobsBtn = () => {
        setIsDetailsModal(false);
        setIsAddJobEnable(true);
        setIsEdit(true);
    }

    const jobSkills = modelData && modelData?.skillsInString ? JSON.parse(modelData?.skillsInString) : [];

    return (
        <>
            {isAddJobEnable ?
                <AddJobs
                    lookUpData={lookUpData}
                    hiringCriteria={hiringCriteria}
                    isAddJobEnable={isAddJobEnable}
                    modelData={modelData}
                    jobSkills={jobSkills}
                    isEdit={isEdit}
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
                ? <CustomModal show={isDetailsModal}>
                    <JobDetailsModal
                        hiringCriteria={hiringCriteria}
                        modelData={modelData}
                        skills={jobSkills}
                        closeDetailsModal={closeDetailsModal}
                        editJobsBtn={editJobsBtn}
                    />
                </CustomModal>
                : (null)
            }
        </>
    )
}

export default Jobs;

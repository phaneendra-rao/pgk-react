import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HiringCriteriaCmp from '../../../../Components/Dashboard/HiringCriteriaCmp/HiringCriteriaCmp';
import PortalHiringModal from '../../../../Portals/PortalHiringModal';
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import { AddHiringSagaAction, HiringSagaAction } from '../../../../Store/Actions/SagaActions/HiringSagaAction';
import HiringCriteriaForm from './HiringCriteriaForm';
// import getHiringCriteriaSaga from '../../../../Store/Sagas/HiringWatcherSaga';

const Index = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [lookUpData, setLookUpData] = useState([]);
    const dispatch = useDispatch();
    const hiringCriteria = useSelector(state => state.DashboardReducer.hiringCriteria);

    const dropdowns = (data) =>{
        setLookUpData(data)
    }

    useEffect(() => {
        dispatch(HiringSagaAction());
        dispatch(actionGetDependencyLookUpsSagaAction({
            apiPayloadRequest: ['programs', 'branches', ],
            callback: dropdowns
        }))
    }, []);

    const openCloseModal = () => {
        setIsOpen(!isOpen);
    }

    const addHiringCriteria = (body) => {
        dispatch(AddHiringSagaAction({
            body: body
        }))
    }

    return (
        <>
            <HiringCriteriaCmp
                openCloseModal={openCloseModal}
            />
            {isOpen
                ? <PortalHiringModal>
                    <HiringCriteriaForm
                        openCloseModal={openCloseModal}
                        addHiringCriteria={addHiringCriteria}
                        lookUpData={lookUpData}
                    />
                </PortalHiringModal>
                : (null)
            }
        </>
    )
}

export default Index;

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HiringCriteriaCmp from '../../../../Components/Dashboard/HiringCriteriaCmp/HiringCriteriaCmp';
import PortalHiringModal from '../../../../Portals/PortalHiringModal';
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import { AddHiringSagaAction, HiringSagaAction } from '../../../../Store/Actions/SagaActions/HiringSagaAction';
import HiringCriteriaForm from './HiringCriteriaForm';
import HiringModal from './HiringModal';
// import getHiringCriteriaSaga from '../../../../Store/Sagas/HiringWatcherSaga';
const $ = window.$;

const Index = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDetailsModal, setIsDetailsModal] = useState(false);
    const [lookUpData, setLookUpData] = useState([]);
    const [modelData, setModelData] = useState({});

    const dispatch = useDispatch();
    const hiringCriteria = useSelector(state => state.DashboardReducer.hiringCriteria);


    useEffect(() => {
        getHiring();
        dispatch(actionGetDependencyLookUpsSagaAction({
            apiPayloadRequest: ['programs', 'branches'],
            callback: dropdowns
        }))
    }, []);

    const dropdowns = (data) => {
        setLookUpData(data);
    }

    const getHiring = () => {
        dispatch(HiringSagaAction({ callback: closeModel }));
    }

    const closeModel = () => {
        $('#hiringCriteria').modal('hide');
        setIsOpen(false);
    }

    const formModal = () => {
        setIsOpen(!isOpen);
    }

    const detailsModal = (val) => {
        setIsDetailsModal(!isDetailsModal);
        setModelData(val);
    }

    const addHiringCriteria = (body) => {
        dispatch(AddHiringSagaAction({
            body: body,
            callback: getHiring
        }))
    }

    return (
        <>
            <HiringCriteriaCmp
                openCloseModal={formModal}
                detailsModal={detailsModal}
                hiringCriteria={hiringCriteria}
            />
            {isOpen
                ? <PortalHiringModal>
                    <HiringCriteriaForm
                        openCloseModal={formModal}
                        addHiringCriteria={addHiringCriteria}
                        lookUpData={lookUpData}
                    />
                </PortalHiringModal>
                : (null)
            }
            {isDetailsModal
                ? <PortalHiringModal>
                    <HiringModal
                        detailsModal={detailsModal}
                        modelData={modelData}
                    />
                </PortalHiringModal>
                : (null)
            }
        </>
    )
}

export default Index;

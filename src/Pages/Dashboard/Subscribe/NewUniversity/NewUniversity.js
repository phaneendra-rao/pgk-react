import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import NewUniCmp from '../../../../Components/Dashboard/SubscribeCmp/NewUniCmp/NewUniCmp';
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import { HiringSagaAction } from '../../../../Store/Actions/SagaActions/HiringSagaAction';
import { SubscribeSearchSagaAction } from '../../../../Store/Actions/SagaActions/SubscriptionSagaAction';
import SubscribeSearch from './SubscribeSearch';

const NewUniversity = (props) => {

    const [searchList, setSearchList] = useState([]);
    const [hiringCriteria, setHiringCriteria] = useState([]);
    const [lookUpData, setLookUpData] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        getHiring();
        dispatch(actionGetDependencyLookUpsSagaAction({
            apiPayloadRequest: ['skills'],
            callback: dropdowns
        }));
    }, []);

    const dropdowns = (data) => {
        setLookUpData(data);
    }

    const getHiring = () => {
        dispatch(HiringSagaAction({ callback: getAllHirings }));
    }

    const getAllHirings = (data) => {
        setHiringCriteria(data);
    }

    const getSeachData = (model) => {
        dispatch(SubscribeSearchSagaAction({ apiPayloadRequest: model, callback: getSeachDataRep }))
    }

    const getSeachDataRep = (data) => {
        setSearchList(data);
    }

    const viewMore = (id) => {
        props.history.push('/dashboard/subscribe/newuniversity/'+id)
    }

    return (
        <>
            <SubscribeSearch
                lookUpData={lookUpData}
                hiringCriteria={hiringCriteria}
                getSeachData={getSeachData}
            />
            <NewUniCmp
                searchList={searchList}
                viewMore={viewMore}
            />
        </>
    )
}

export default NewUniversity

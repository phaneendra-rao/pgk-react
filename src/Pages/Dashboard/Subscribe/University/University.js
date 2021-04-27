import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UniversityCmp from '../../../../Components/Dashboard/SubscribeCmp/UniversityCmp/UniversityCmp';
import PortalHiringModal from '../../../../Portals/PortalHiringModal';
import { GetSubscribeTokensSagaAction, GetUniversityHistoryInfoSagaAction, GetUniversityInfoSagaAction } from '../../../../Store/Actions/SagaActions/SubscriptionSagaAction';
import UniversitySubscribeModal from './UniversitySubscribeModal';
import ViewInfoModal from './ViewInfoModal';

const University = (props) => {

    const [universityInfoList, setUniversityInfoList] = useState({});
    const [universityHistoryInfoList, setUniversityHistoryInfoList] = useState({});
    const [isInfoModal, setisInfoModal] = useState(false);
    const [isSubscribe, setIsSubscribe] = useState(false);
    const [tokens, setTokens] = useState(null);


    const balance = useSelector(state => state.DashboardReducer.balance);
    const dispatch = useDispatch();
    const universityId = props.match?.params?.id;

    useEffect(() => {
        dispatch(GetUniversityInfoSagaAction({ apiPayloadRequest: universityId, callback: getUniversityList }));
    }, []);

    const getUniversityList = (data) => {
        setUniversityInfoList(data);
    }

    const getUniversityHistoryList = (data) => {
        setUniversityHistoryInfoList(data);
    }

    const goBack = () => {
        props.history.goBack();
    }

    const viewInfo = (publishId) => {
        setisInfoModal(true);
        dispatch(GetUniversityHistoryInfoSagaAction({ apiPayloadRequest: publishId, callback: getUniversityHistoryList }));
    }

    const getSubscribeTokens = () => {
        setIsSubscribe(true);
        dispatch(GetSubscribeTokensSagaAction({ apiPayloadRequest: universityId, callback: getTokens }));
    }

    const getTokens = (data) => {
        setTokens(data)
    }

    const closeModal = () => {
        setisInfoModal(false);
    }

    const subscribeModal = (data) => {
        getSubscribeTokens();
    }

    return (
        <>
            <UniversityCmp
                universityId={universityId}
                universityInfoList={universityInfoList}
                goBack={goBack}
                viewInfo={viewInfo}
                subscribeModal={subscribeModal}
            />
            {isInfoModal &&
                <PortalHiringModal>
                    <ViewInfoModal
                        closeModal={closeModal}
                    />
                </PortalHiringModal>
            }
            {isSubscribe && <PortalHiringModal>
                <UniversitySubscribeModal
                    tokens={tokens}
                    balance={balance}
                />
            </PortalHiringModal>}
        </>
    )
}

export default University;

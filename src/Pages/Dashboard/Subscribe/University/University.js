import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import UniversityCmp from '../../../../Components/Dashboard/SubscribeCmp/UniversityCmp/UniversityCmp';
import PortalHiringModal from '../../../../Portals/PortalHiringModal';
import { GetUniversityHistoryInfoSagaAction, GetUniversityInfoSagaAction } from '../../../../Store/Actions/SagaActions/SubscriptionSagaAction';
import ViewInfoModal from './ViewInfoModal';

const University = (props) => {

    const [universityInfoList, setUniversityInfoList] = useState({});
    const [universityHistoryInfoList, setUniversityHistoryInfoList] = useState({});
    const [isInfoModal, setisInfoModal] = useState(false);

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

    const viewInfo = async (publishId) => {
        setisInfoModal(true);
        dispatch(GetUniversityHistoryInfoSagaAction({ apiPayloadRequest: publishId, callback: getUniversityHistoryList }));
    }

    const closeModal = () => {
        setisInfoModal(false);
    }

    console.log(universityHistoryInfoList);

    return (
        <>
            <UniversityCmp
                universityId={universityId}
                universityInfoList={universityInfoList}
                goBack={goBack}
                viewInfo={viewInfo}
            />
            {isInfoModal &&
                <PortalHiringModal>
                    <ViewInfoModal
                        closeModal={closeModal}
                    />
                </PortalHiringModal>
            }
        </>
    )
}

export default University;

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import UniversityStudentsCmp from '../../../../../Components/Dashboard/SubscribeCmp/UniversityCmp/UniversityStudentsCmp';
import { GetUniversityInfoSagaAction } from '../../../../../Store/Actions/SagaActions/SubscriptionSagaAction';
import StundentModal from './StundentModal';

const UniversityStudents = (props) => {

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

    const closeModal = () => {
        setisInfoModal(false);
    }


    console.log(universityHistoryInfoList);

    return (
        <>
            <UniversityStudentsCmp
                universityId={universityId}
                universityInfoList={universityInfoList}
                goBack={goBack}
            />
            {/* {isInfoModal &&
                <PortalHiringModal>
                    <ViewInfoModal
                        closeModal={closeModal}
                    />
                </PortalHiringModal>
            } */}
            <StundentModal />

        </>
    )
}

export default UniversityStudents;

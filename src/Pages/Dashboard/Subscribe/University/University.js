import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UniversityCmp from '../../../../Components/Dashboard/SubscribeCmp/UniversityCmp/UniversityCmp';
import PortalHiringModal from '../../../../Portals/PortalHiringModal';
import { GetSubscribeTokensSagaAction, GetUniversityHistoryInfoSagaAction, GetUniversityInfoSagaAction, SubscribeUnvInfoSagaAction } from '../../../../Store/Actions/SagaActions/SubscriptionSagaAction';
import UniversitySubscribeModal from './UniversitySubscribeModal';
import UniversitySubscribeSuccessModal from './UniversitySubscribeSuccessModal';
import ViewInfoModal from './ViewInfoModal';
import HeaderModalForm from '../../../../Components/Common/HeaderModalForm';
const $ = window.$;

const University = (props) => {

    const [universityInfoList, setUniversityInfoList] = useState({});
    const [universityHistoryInfoList, setUniversityHistoryInfoList] = useState({});
    const [isInfoModal, setisInfoModal] = useState(false);
    const [isSubscribe, setIsSubscribe] = useState(false);
    const [tokens, setTokens] = useState(null);
    const [isSubUnvInfoSuccess, setIsSubUnvInfoSuccess] = useState(false);
    const [subscribedUnvData, setSubscribedUnvData] = useState(null);
    const [bonusTokensUsed, setBonusTokensUsed] = useState(0);
    const [additionalTokens, setAdditionalTokens] = useState(null);
    const [subscribeType, setSubscribeType] = useState('');


    const balance = useSelector(state => state.DashboardReducer.balance);
    const dispatch = useDispatch();
    const universityId = props.match?.params?.id;

    useEffect(() => {
        getUniversityById();
    }, []);

    const getUniversityById = () => {
        dispatch(GetUniversityInfoSagaAction({ apiPayloadRequest: universityId, callback: getUniversityList }));
    }

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
        setIsSubUnvInfoSuccess(false);
    }

    const openViewInfoModal = () => {
        setIsSubUnvInfoSuccess(false);
        setisInfoModal(true);
        $("#viewInsight").modal("show");
    }

    const subscribeModal = (data) => {
        setSubscribeType(data);
        getSubscribeTokens();
    }

    // BONUS CALCULATION
    const bonusCalc = (event) => {
        const checked = event.target.checked;
        const percentageOfTokens = Math.round(tokens?.tokensrequired * (tokens?.bonusTokenUsagePercentage / 100));
        const tokensToPay = checked ? percentageOfTokens : 0;
        setBonusTokensUsed(tokensToPay);
    }

    const subscribeUnv = () => {
        const model = {
            universityID: universityId,
            paidTokensUsed: tokens?.tokensrequired - bonusTokensUsed,
            bonusTokensUsed: bonusTokensUsed
        }
        dispatch(SubscribeUnvInfoSagaAction({ apiPayloadRequest: model, type: subscribeType, callback: subscribeUnvInfoRes }))
    }

    const subscribeUnvInfoRes = (data) => {
        $("#subscribe").modal("hide");
        setIsSubscribe(false);
        if (subscribeType === 'unvStuData') {
            navigateToStudent();
        } else {
            setSubscribedUnvData(data)
            setIsSubUnvInfoSuccess(true);
            $("#subSuccess").modal("show");
            getUniversityById();
        }
        console.log(data);
    }

    const navigateToStudent = () => {
        props.history.push('/dashboard/subscribe/students/' + universityId);
    }

    const closeSubModal = (val) => {
        const newVal = Math.abs(val);
        setAdditionalTokens(newVal);
        localStorage.setItem('pathname', props.history.location.pathname);
    }

    return (
        <>
            <UniversityCmp
                universityId={universityId}
                universityInfoList={universityInfoList}
                goBack={goBack}
                viewInfo={viewInfo}
                navigateToStudent={navigateToStudent}
                subscribeModal={subscribeModal}
            />
            {isInfoModal &&
                <PortalHiringModal>
                    <ViewInfoModal
                        universityName={universityInfoList?.universityName}
                        subscribedUnvData={subscribedUnvData}
                        closeModal={closeModal}
                    />
                </PortalHiringModal>
            }
            {isSubscribe && <PortalHiringModal>
                <UniversitySubscribeModal
                    universityName={universityInfoList?.universityName}
                    tokens={tokens}
                    balance={balance}
                    bonusTokensUsed={bonusTokensUsed}
                    subscribeUnv={subscribeUnv}
                    bonusCalc={bonusCalc}
                    closeSubModal={closeSubModal}
                />
            </PortalHiringModal>}
            {isSubUnvInfoSuccess && <PortalHiringModal>
                <UniversitySubscribeSuccessModal
                    universityName={universityInfoList?.universityName}
                    universityHQAddressCity={universityInfoList?.universityHQAddressCity}
                    openViewInfoModal={openViewInfoModal}
                />
            </PortalHiringModal>}

            <div className="modal fade" id="balance" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content purchase-modal">
                        <div className="modal-header purchase-modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <HeaderModalForm additionalTokens={additionalTokens} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default University;

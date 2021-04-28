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
        setIsSubUnvInfoSuccess(false);
    }

    const subscribeModal = (data) => {
        getSubscribeTokens();
    }

    const subscribeUnv = () => {
        const model = {
            publishId: universityInfoList?.studentDbPublishID,
            paidTokensUsed: 0,
            bonusTokensUsed: tokens?.tokensrequired
        }
        dispatch(SubscribeUnvInfoSagaAction({ apiPayloadRequest: model, callback: subscribeUnvInfoRes }))
    }

    const subscribeUnvInfoRes = (data) => {
        $("#subscribe").modal("hide");
        setIsSubscribe(false);
        setIsSubUnvInfoSuccess(true);
        $("#subSuccess").modal("show");
        // if (data?.message === "Successfully subscribed") {
        // }
    }

    const navigateToStudent = () => {
        props.history.push('/dashboard/subscribe/students/'+ universityId);
    }

    console.log(universityHistoryInfoList);

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
                        closeModal={closeModal}
                    />
                </PortalHiringModal>
            }
            {isSubscribe && <PortalHiringModal>
                <UniversitySubscribeModal
                    tokens={tokens}
                    balance={balance}
                    subscribeUnv={subscribeUnv}
                />
            </PortalHiringModal>}
            {isSubUnvInfoSuccess && <PortalHiringModal>
                <UniversitySubscribeSuccessModal
                    closeModal={closeModal}
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
                        {/* <form>
                            <div className="modal-body purchase-modal-body d-flex flex-column justify-content-center align-items-center">
                                <p className="heading">How many credits would you like to purchase ?</p>
                                <input type="number" name="credit_points" className="form-control credits-input" required />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="modal-footer-full-btn w-100 border-0">
                                    Purchase
                            </button>
                            </div>
                        </form> */}
                        <HeaderModalForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default University;

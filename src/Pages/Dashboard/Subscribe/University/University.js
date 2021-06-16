import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UniversityCmp from '../../../../Components/Dashboard/SubscribeCmp/UniversityCmp/UniversityCmp';
import PortalHiringModal from '../../../../Portals/PortalHiringModal';
import CustomModal from '../../../../Components/CustomModal';
import {
    GetSubscribeTokensSagaAction,
    GetUniversityHistoryInfoSagaAction,
    GetUniversityInfoSagaAction,
    SendMailSagaAction,
    SubscribeUnvInfoSagaAction
} from '../../../../Store/Actions/SagaActions/SubscriptionSagaAction';
import UniversitySubscribeModal from './UniversitySubscribeModal';
import UniversitySubscribeSuccessModal from './UniversitySubscribeSuccessModal';
import ViewInfoModal from './ViewInfoModal';
import HeaderModalForm from '../../../../Components/Common/HeaderModalForm';
import UniversitySendMail from './UniversitySendMail';
import { toast } from 'react-toastify';
import UniversitySendMailSuccessModal from './UniversitySendMailSuccessModal';

import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';

const $ = window.$;

const University = (props) => {

    const [universityInfoSubscriptionsList, setUniversityInfoSubscriptionsList] = useState([]);
    const [universityInfoPublishedList, setUniversityInfoPublishedList] = useState([]);

    const [universityInfo, setUniversityInfo] = useState({});

    const [universityHistoryInfoList, setUniversityHistoryInfoList] = useState({});
    const [isInfoModal, setisInfoModal] = useState(false);
    const [isSubscribe, setIsSubscribe] = useState(false);
    const [tokens, setTokens] = useState(null);
    const [isSubUnvInfoSuccess, setIsSubUnvInfoSuccess] = useState(false);
    const [subscribedUnvData, setSubscribedUnvData] = useState(null);
    const [bonusTokensUsed, setBonusTokensUsed] = useState(0);
    const [additionalTokens, setAdditionalTokens] = useState(null);
    const [subscribeType, setSubscribeType] = useState('');
    const [campusDriveID, setCampusDriveID] = useState('');
    const [isSendOpen, setIsSendOpen] = useState(false);
    const [isSendMailSuccess, setIsSendMailSuccess] = useState(false);
    const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
    const [sendMailObj, setSendMailObj] = useState({
        emailTo: '',
        emailSubject: '',
        emailBody: ''
    });

    const [filter, setFilter] = useState({
        subscriptionType: [],
        sortBy: undefined
    });

    const [lookUpData, setLookUpData] = useState();

    useEffect(() => {
        dispatch(actionGetDependencyLookUpsSagaAction({
            apiPayloadRequest: ['subscriptionType', 'sortBy'],
            callback: (list) => {
                if(list) {
                    setLookUpData(list);
                }
            }
        }));
    }, []);

    const balance = useSelector(state => state.DashboardReducer.balance);
    const dispatch = useDispatch();
    const universityId = props.match?.params?.id;
    const email = localStorage.getItem('email');

    useEffect(() => {
        getUniversityById();
    }, []);

    const getUniversityById = () => {
        dispatch(GetUniversityInfoSagaAction({ apiPayloadRequest: universityId, callback: getUniversityList }));
    }

    const getUniversityList = (data) => {
        setUniversityInfoSubscriptionsList(data?.subscriptions?.length ? data.subscriptions : []);
        setUniversityInfoPublishedList(data?.publishedData?.length ? data.publishedData : []);

        setUniversityInfo(data);
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
    }

    const subscribeModal = (type) => {
        setSubscribeType(type);
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
        let model;
        if (subscribeType === 'campusDrive') {
            model = {
                receiverID: universityId,
                paidTokensUsed: tokens?.tokensrequired - bonusTokensUsed,
                bonusTokensUsed: bonusTokensUsed
            };
        } else {
            model = {
                universityID: universityId,
                paidTokensUsed: tokens?.tokensrequired - bonusTokensUsed,
                bonusTokensUsed: bonusTokensUsed
            };
        }
        dispatch(SubscribeUnvInfoSagaAction({ apiPayloadRequest: model, type: subscribeType, callback: subscribeUnvInfoRes }))
    }

    const subscribeUnvInfoRes = (data) => {
        setIsSubscribe(false);
        if (subscribeType === 'unvStuData') {
            localStorage.setItem('subscriptionID', data?.subscriptionID);
            navigateToStudent();
        } else if (subscribeType === 'unvInsight') {
            setSubscribedUnvData(data)
            setIsSubUnvInfoSuccess(true);
            getUniversityById();
        } else {
            console.log(data);
            setCampusDriveID(data?.campusDriveID);
            setIsSendOpen(true);
            // $("#mailModal").modal("show");
        }
    }

    const navigateToStudent = () => {
        props.history.push('/dashboard/subscribe/students/' + universityId);
    }

    const closeSubModal = (val) => {
        const newVal = Math.abs(val);
        setAdditionalTokens(newVal);
        setIsSubscribe(false);
        setIsTokenModalOpen(true);
        localStorage.setItem('pathname', props.history.location.pathname);
    }

    const closeSendModal = () => {
        setIsSendOpen(false);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setSendMailObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const sendMail = (data) => {
        // const model = {
        //     campusDriveID: campusDriveID,
        //     emailFrom: email,
        //     emailTo: 'jaswanth@gmail.com',
        //     emailSubject: emailSubject ? emailSubject : 'Campus Hiring Request',
        //     emailBody: emailBody
        // };
        const model = {
            ...data,
            campusDriveID: campusDriveID,
            emailFrom: email,
        }
        // console.log(model);
        dispatch(SendMailSagaAction({ apiPayloadRequest: model, callback: sendMailResp }));
    }

    const sendMailResp = (data) => {
        toast.success(data?.message);
        setIsSendOpen(false);
        setIsSendMailSuccess(true);
        getUniversityById();
    }

    const handleFilterChange = (name, value, errorMessage = undefined) => {
        setFilter((prevState)=>({
            ...prevState,
            [name]: value
        }))
    }

    const applyFilter = () => {
        if(filter?.subscriptionType?.length || filter?.sortBy) {
            let updatedUniversityInfoSubscriptionsList = [...universityInfoSubscriptionsList];
            if(filter?.subscriptionType) {
                updatedUniversityInfoSubscriptionsList = universityInfoSubscriptionsList?.map((item)=>{
                    if(filter.subscriptionType === item.subscriptionType) {
                        return item
                    }
                });
            }      

            if(filter?.sortBy && updatedUniversityInfoSubscriptionsList?.length) {
                updatedUniversityInfoSubscriptionsList.sort(function(a,b){
                    // Turn your strings into dates, and then subtract them
                    // to get a value that is either negative, positive, or zero.
                    return new Date(b.dateOfSubscription) - new Date(a.dateOfSubscription);
                  });
            }
            
            setUniversityInfoSubscriptionsList(updatedUniversityInfoSubscriptionsList);
        } else {
            setUniversityInfoSubscriptionsList(universityInfo?.subscriptions?.length ? universityInfo?.subscriptions : []);
        }
    }

    // campusDrive
    return (
        <>
            <UniversityCmp
                universityId={universityId}
                universityInfoList={universityInfo}
                universityInfoSubscriptionsList={universityInfoSubscriptionsList}
                goBack={goBack}
                viewInfo={viewInfo}
                navigateToStudent={navigateToStudent}
                subscribeModal={subscribeModal}
                lookUpData={lookUpData}
                filter={filter}
                handleFilterChange={handleFilterChange}
                applyFilter={applyFilter}
            />

            {/* UNIVERSITY INSIGHT MODAL */}
            {isInfoModal &&
                <CustomModal show={isInfoModal} modalStyles={{ minWidth: "80%" }}>
                    <ViewInfoModal
                        universityName={universityInfo?.universityName}
                        subscribedUnvData={subscribedUnvData}
                        closeModal={closeModal}
                    />
                </CustomModal>
            }

            {/* AVAILABLE AND BONUS TOKENS & SUBSCRIBE*/}
            {isSubscribe && <CustomModal show={isSubscribe} modalStyles={{ minWidth: "70%" }}>
                <UniversitySubscribeModal
                    label={ subscribeType==='unvInsight' ? universityInfo?.universityName + ' University Insights' : subscribeType==='unvStuData' ? 'Students Data' : 'Campus Hiring Request to '+universityInfo?.universityName+' University'}
                    tokens={tokens}
                    balance={balance}
                    bonusTokensUsed={bonusTokensUsed}
                    subscribeUnv={subscribeUnv}
                    bonusCalc={bonusCalc}
                    closeSubModal={closeSubModal}
                />
            </CustomModal>}

            {/* SUCCESS MODAL */}
            {isSubUnvInfoSuccess && <CustomModal show={isSubUnvInfoSuccess} modalStyles={{ maxWidth: "60%" }}>
                <UniversitySubscribeSuccessModal
                    subscribeType={subscribeType}
                    universityName={universityInfo?.universityName}
                    universityHQAddressCity={universityInfo?.universityHQAddressCity}
                    openViewInfoModal={openViewInfoModal}
                />
            </CustomModal>}

            {/* SEND MAIL TO UNVIERSITY */}
            {isSendOpen && <CustomModal show={isSendOpen} modalStyles={{ minWidth: "80%" }}>
                <UniversitySendMail
                    email={email}
                    emailTo={'jaswanth@gmail.com'}
                    emailSubject={'Campus Hiring Request'}
                    emailBody={sendMailObj?.emailBody}
                    universityName={universityInfo?.universityName}
                    handleChange={handleChange}
                    closeSendModal={closeSendModal}
                    sendMail={sendMail}
                />
            </CustomModal>}

            {/* SEND MAIL SUCCESS MAIL */}
            {isSendMailSuccess && <CustomModal show={isSendMailSuccess} modalStyles={{ minWidth: "40%", maxWidth: "40%" }}> 
            <UniversitySendMailSuccessModal
                universityName={universityInfo?.universityName}
                closeModal={()=>{
                    setIsSendMailSuccess(false);
                }}
            /></CustomModal>}


             {/* ADD TOKENS MODAL */}
             {isTokenModalOpen && <CustomModal show={isTokenModalOpen} modalStyles={{ maxWidth: "40%" }}>
                 <div className="purchase-modal">
                    <HeaderModalForm additionalTokens={additionalTokens} />
                 </div>
            </CustomModal>}

        </>
    )
}

export default University;

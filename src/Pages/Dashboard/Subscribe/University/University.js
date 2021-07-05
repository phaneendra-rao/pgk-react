import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UniversityCmp from '../../../../Components/Dashboard/SubscribeCmp/UniversityCmp/UniversityCmp';
import CustomModal from '../../../../Components/CustomModal';
import {
    GetSubscribeTokensSagaAction,
    GetUniversityHistoryInfoSagaAction,
    GetUniversityInfoSagaAction,
    SendMailSagaAction,
    SubscribeUnvInfoSagaAction,
    actionSagaGetCorporateSingleSubscriptionRequest
} from '../../../../Store/Actions/SagaActions/SubscriptionSagaAction';
import UniversitySubscribeModal from './UniversitySubscribeModal';
import UniversitySubscribeSuccessModal from './UniversitySubscribeSuccessModal';
import ViewInfoModal from './ViewInfoModal';
import HeaderModalForm from '../../../../Components/Common/HeaderModalForm';
import UniversitySendMail from './UniversitySendMail';
import { toast } from 'react-toastify';
import UniversitySendMailSuccessModal from './UniversitySendMailSuccessModal';
import moment from "moment";
import PgkTextField from '../../../../Components/FormFields/PgkTextField';

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
    const [publishId, setPublishId] = useState('');
    const [campusDriveID, setCampusDriveID] = useState('');
    const [isSendOpen, setIsSendOpen] = useState(false);
    const [isSendMailSuccess, setIsSendMailSuccess] = useState(false);
    const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);

    const [profileInfo, setProfileInfo] = useState();
    const [otherInfo, setOtherInfo] = useState();

    const [sendMailObj, setSendMailObj] = useState({
        emailTo: 'jaswanth@gmail.com',
        emailSubject: '',
        emailBody: ''
    });

    const [subscriptionFilter, setSubscriptionFilter] = useState({
        subscriptionType: undefined,
        sortBy: undefined
    });

    const [publishedDataFilter, setPublishedDataFilter] = useState({
        subscriptionType: undefined,
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
        setSendMailObj(prevState => ({
            ...prevState,
            emailSubject: `Request for Campus Drive : ${data?.universityName}`,
            emailBody: `Dear Sir/Madam,\n\nThis is with regards to the subject line, we <<Company_Name>> <<Company_Address>> would be interested in conducting a recruitment drive in your organization to recruit the final / pre-final year students.\n\nAppreciate if you could revert with your interest to take the process forward using the below link:\n<<link of Campus Drive page of university module>>\n\nYours Sincerely,\n\n<<Primary_contact_org>>\n<<Designation>>\n<<Company_Name>>\n\nNote: Please do not reply to this eamil as this is an unattended mail box.\n\n`
        }));
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

    const subscribeModal = (type, publishId=undefined) => {
        setSubscribeType(type);
        getSubscribeTokens();
        setPublishId(publishId);
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
        if(['profileInfo', 'otherInfo'].includes(subscribeType)) {
            model = {
                publishId: publishId,
                paidTokensUsed: tokens?.tokensrequired - bonusTokensUsed,
                bonusTokensUsed: bonusTokensUsed,
                publisherType: 'University'
            }
        } else if (subscribeType === 'campusDrive') {
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
        if(['profileInfo', 'otherInfo'].includes(subscribeType)) {
            dispatch(actionSagaGetCorporateSingleSubscriptionRequest({
                apiPayloadRequest: {
                    id: publishId,
                    type: subscribeType==='profileInfo' ? 'PROFILE' : 'OTHER_INFORMATION'
                },
                callback: (data) => {
                    console.log('data ', data);
                    if(subscribeType==='profileInfo') {
                        setProfileInfo(JSON.parse(data)?.programs)
                    } else {
                        setOtherInfo(data);
                    }

                    setSubscribeType();
                    getUniversityById();

                    // setPublishId();
                }
            }))
        } else if (subscribeType === 'unvStuData') {
            localStorage.setItem('subscriptionID', data?.subscriptionID);
            navigateToStudent();
        } else if (subscribeType === 'unvInsight') {
            setSubscribedUnvData(data)
            setIsSubUnvInfoSuccess(true);
            getUniversityById();
        } else {
            setCampusDriveID(data?.campusDriveID);
            setIsSendOpen(true);
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
        const model = {
            ...sendMailObj,
            campusDriveID: campusDriveID,
            emailFrom: email,
        }
        dispatch(SendMailSagaAction({ apiPayloadRequest: model, callback: sendMailResp }));
    }

    const sendMailResp = (data) => {
        toast.success(data?.message);
        setIsSendOpen(false);
        setIsSendMailSuccess(true);
        getUniversityById();
    }

    const handleFilterChange = (name, value, errorMessage, type) => {
        if(type==='SUBSCRIPTION') {
            setSubscriptionFilter((prevState)=>({
                ...prevState,
                [name]: value
            }))
            applyFilter('SUBSCRIPTION')
        } else {
            setPublishedDataFilter((prevState)=>({
                ...prevState,
                [name]: value
            }))
            applyFilter('PUBLISHED-DATA')
        }
    }

    const applyFilter = (type) => {
        if(type==='SUBCRIPTION') {
            if(subscriptionFilter?.subscriptionType || subscriptionFilter?.sortBy) {
                let newData = [];
                if(subscriptionFilter?.subscriptionType && subscriptionFilter?.subscriptionType?.trim()!=='') {
                    universityInfoSubscriptionsList?.filter((item)=>{
                        if(subscriptionFilter.subscriptionType === item.subscriptionType) {
                            newData.push(item);
                        }
                    });
                }      
    
                if(subscriptionFilter?.sortBy && subscriptionFilter.sortBy.trim()!=='') {
                    newData = newData.length ? newData : universityInfoSubscriptionsList;
    
                    if(subscriptionFilter.sortBy==='TA') {
                        newData.sort(function(a,b){
                            return new Date(a.dateOfSubscription) - new Date(b.dateOfSubscription);
                        });
                    } else {
                        newData.sort(function(a,b){
                            return new Date(b.dateOfSubscription) - new Date(a.dateOfSubscription);
                        });
                    }
                }
                
                setUniversityInfoSubscriptionsList(newData);
            } else {
                setUniversityInfoSubscriptionsList(universityInfo?.subscriptions?.length ? universityInfo?.subscriptions : []);
            }
        } else {
            let newList = [];

            if(publishedDataFilter.subscriptionType!==undefined && publishedDataFilter.subscriptionType.trim()!=='') {
                universityInfo?.publishedData?.forEach((item)=>{
                    if(publishedDataFilter.subscriptionType==='UO' && item.generalNote==='Other Information') {
                        newList.push(item);
                    } else if(publishedDataFilter.subscriptionType==='UP' && item.generalNote==='Profile') {
                        newList.push(item);
                    }
                });
            } else {
                newList = universityInfo?.publishedData
            }

            
        }
    }

    // campusDrive
    return (
        <>
            <UniversityCmp
                universityId={universityId}
                universityInfoList={universityInfo}
                universityInfoSubscriptionsList={universityInfoSubscriptionsList}
                universityInfoPublishedList={universityInfoPublishedList}
                goBack={goBack}
                viewInfo={viewInfo}
                navigateToStudent={navigateToStudent}
                subscribeModal={subscribeModal}
                lookUpData={lookUpData}
                subscriptionFilter={subscriptionFilter}
                publishedDataFilter={publishedDataFilter}
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
                    label={ subscribeType==='unvInsight' ? universityInfo?.universityName + ' University Insights' : subscribeType==='unvStuData' ? 'Students Data' : subscribeType==='profileInfo' ? 'Profile information' : subscribeType==='otherInfo' ? 'Other information' : 'Campus Hiring Request to '+universityInfo?.universityName+' University'}
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
            {isSendOpen && <CustomModal show={isSendOpen} modalStyles={{ minWidth: "65%" }}>
                <UniversitySendMail
                    email={email}
                    emailTo={sendMailObj?.emailTo}
                    emailSubject={sendMailObj?.emailSubject}
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

            {profileInfo && <CustomModal show={profileInfo? true : false} modalStyles={{minWidth: '70%'}}>
      <div className={'mail-modal'}>

      <div className="modal-header d-block">
        <span className="modal-title" style={{fontSize: '1.1rem', padding: 6}}>
          Profile Publish of Jntu University
        </span>
        <i
          className="far fa-times-circle close-icon"
          onClick={() => {
            setProfileInfo();
          }}
          data-dismiss="modal"
        />
      </div>
      <div className="modal-body d-flex flex-column align-items-center pb-5">
        <div className="circle-block d-flex justify-content-center align-items-center m-3" style={{height: '70px', width: '70px', borderRadius: '50%', backgroundColor: 'rgba(135, 139, 166, 0.31)'}}>
            <div className="circle">
                <i className="fas fa-university" style={{color: '#253AA3', fontSize: '2rem'}} />
            </div>
        </div>
        <p style={{fontWeight:'bolder', fontSize: '.900rem'}} className={'mb-2'}>PUBLISH REVIEW</p>
        <div style={{backgroundColor: 'rgba(135, 139, 166, 0.31)', padding: '10px'}} className={'w-full text-center'}>
          <p>Branches Offered</p>
        </div>
        {profileInfo?.length ? profileInfo.map((item)=>{
          return <div style={{padding: '12px', width: '100%'}}>
                  <div style={{padding: '6px', border:'1px solid #cacaca', borderRadius: '3px'}} className={'w-full d-flex justify-content-between flex-wrap align-items-center'}>
                    <div className="job-icon d-flex justify-content-center align-items-center" style={{backgroundColor:'#20BDC9', padding: '6px', color: 'white', borderRadius: '6px', fontSize: '1rem'}}>
                      <i className="fas fa-cube" />
                    </div>
                      <p style={{fontSize:'.800rem', maxWidth: '200px'}} className={'text-ellipsis px-2'}>{item?.programID}</p>
                      <p style={{fontSize:'.800rem', maxWidth: '200px'}} className={'text-ellipsis px-2'}>{item?.programName}</p>
                      <p style={{fontSize:'.800rem', maxWidth: '200px'}} className={'text-ellipsis px-2'}>Start Date - {moment(item?.startDate).format("DD-MMM-YYYY")}</p>
                      <p style={{fontSize:'.800rem', maxWidth: '200px'}} className={'text-ellipsis px-2'}>End Date - {moment(item?.endDate).format("DD-MM-YYYY")}</p>
                  </div>
                </div>
        }) : 'No information found!'}
      </div>
      </div>
      </CustomModal>}

    {otherInfo && <CustomModal show={otherInfo ? true : false}>
        <div className="hiring-modal">
          <div className="modal-header hiring-modal-header">
            <h5
              className="modal-title"
              style={{ fontSize: "1rem" }}
              id="exampleModalLabel"
            >
              Published Information Details
            </h5>
            <button
              type="button"
              className="close"
              style={{ fontSize: "1rem" }}
              onClick={() => {
                setOtherInfo();
                setPublishId();
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form className="hiring-modal-form">
            <div className="row">
              <div className="col-md">
                <div className="modal-grp">
                  <PgkTextField
                      value={publishId}
                      label={'Publish ID'}
                      inputLabelProps={{style:{fontSize: '.800rem'}}}
                      inputProps={{style:{fontSize: '.800rem'}}}
                      disabled
                  />
                </div>
              </div>
              <div className="col-md">
                <div className="modal-grp">
                  <PgkTextField 
                      value={otherInfo?.dateOfPublish ? `Published on ${moment(otherInfo?.dateOfPublish).format("DD-MM-YYYY")}`: ''}
                      label={'Published Date & Time'}
                      inputLabelProps={{style:{fontSize: '.800rem'}}}
                      inputProps={{style:{fontSize: '.800rem'}}}
                      disabled
                  />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md">
                <div className="modal-grp">
                  <PgkTextField 
                      value={otherInfo?.title ? otherInfo?.title : ''}
                      label={'Title'}
                      inputLabelProps={{style:{fontSize: '.800rem'}}}
                      inputProps={{style:{fontSize: '.800rem'}}}
                      disabled
                  />
                </div>
              </div>
              <div className="w-100"></div>
              <div className="col-md">
                <div className="modal-grp">
                  <PgkTextField
                    value={otherInfo?.information ? otherInfo?.information : ''}
                    label={"Content"}
                    disabled
                    multiline={true}
                    minRows={6}
                    inputLabelProps={{style:{fontSize: '.800rem'}}}
                    inputProps={{style:{fontSize: '.800rem'}}}
                  />
                </div>
              </div>
              <div className="w-100"></div>
              {(otherInfo?.attachment && otherInfo?.attachment?.trim()!=='' && otherInfo?.attachmentName?.trim()!=='') ?
                <div className="d-flex justify-content-between align-items-center attachmentStripeContainer w-full">
                <p className="label">Attachment Present (if any)</p>
                <a href={'data:application/pdf;base64,'+otherInfo?.attachment} style={{textDecoration:'none', outline:'none', width:'70%'}} download>
                  <div className="attachmentStripe d-flex justify-content-between align-items-center">
                      <p>{otherInfo?.attachmentName}</p>
                      <i className="fas fa-paperclip"></i>
                  </div>
                </a>
              </div> : null}
            </div>
          </form>
        </div>
      </CustomModal>}


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

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import UniversityStudentsCmp from '../../../../../Components/Dashboard/SubscribeCmp/UniversityCmp/UniversityStudentsCmp';
import PortalHiringModal from '../../../../../Portals/PortalHiringModal';
import { actionGetDependencyLookUpsSagaAction } from '../../../../../Store/Actions/SagaActions/CommonSagaActions';
import { HiringSagaAction } from '../../../../../Store/Actions/SagaActions/HiringSagaAction';
import {
    actionSagaGetCorporateSingleSubscriptionRequest,
    GetUniversityInfoSagaAction,
    SearchStundentSagaAction,
    SendMailSagaAction
} from '../../../../../Store/Actions/SagaActions/SubscriptionSagaAction';
import UniversitySendMail from '../UniversitySendMail';
const $ = window.$;

const UniversityStudents = (props) => {

    const [universityInfoList, setUniversityInfoList] = useState({});
    const [hiringCriteria, setHiringCriteria] = useState([]);
    const [isInfoModal, setisInfoModal] = useState(false);
    const [lookUpData, setLookUpData] = useState([]);
    const [searchObj, setSearchObj] = useState({
        hiringCriteriaID: [],
        programID: [],
        branchID: [],
        monthOfHiring: [],
        skills: []
    });
    const [studentSearchList, setStudentSearchList] = useState(null);
    const [campusDriveID, setCampusDriveID] = useState('');
    const [isSendOpen, setIsSendOpen] = useState(false);
    const [sendMailObj, setSendMailObj] = useState({
        emailTo: '',
        emailSubject: '',
        emailBody: ''
    });
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']



    const dispatch = useDispatch();
    const universityId = props.match?.params?.id;
    const subscriptionID = localStorage.getItem('subscriptionID');
    const email = localStorage.getItem('email');

    useEffect(() => {
        const queryParam = props.location.search;
        $(document).on('click', '.dropdown-menu', function (e) {
            e.stopPropagation();
        });
        dispatch(GetUniversityInfoSagaAction({ apiPayloadRequest: universityId, callback: getUniversityList }));
        getHiring();
        getLookupData();
        if (queryParam) {
            const subscriptionID = queryParam?.split('=');
            getSubscriptionDetails(subscriptionID[1]);
        }
        return () => {
            // localStorage.removeItem('subscriptionID');
        }
    }, []);

    const getSubscriptionDetails = (subscriptionID) => {
        dispatch(actionSagaGetCorporateSingleSubscriptionRequest({ apiPayloadRequest: { type: 'STUDENTS_LIST', id: subscriptionID }, callback: getStudentSearchList }))
    }

    const getHiring = () => {
        dispatch(HiringSagaAction({ callback: getAllHirings }));
    }
    const getAllHirings = (data) => {
        setHiringCriteria(data);
    }

    const getLookupData = () => {
        dispatch(actionGetDependencyLookUpsSagaAction({
            apiPayloadRequest: ['programCatalog', 'branchCatalog', 'skills'],
            callback: dropdowns
        }));
    }
    const dropdowns = (data) => {
        setLookUpData(data);
    }


    const getUniversityList = (data) => {
        setUniversityInfoList(data);
    }

    const goBack = () => {
        props.history.goBack();
    }

    const closeModal = () => {
        setisInfoModal(false);
    }

    const handleChange = (selectedVal, { name }) => {
        console.log(selectedVal, name);
        // const { name, value, checked } = event.target;
        // let copyObj = [...searchObj[name]]
        // if (checked) {
        //     setSearchObj(prevState => ({
        //         ...prevState,
        //         [name]: copyObj?.concat(value)
        //     }))
        // } else {
        //     let updatedValue = copyObj.filter(item => item !== value);
        //     setSearchObj(prevState => ({
        //         ...prevState,
        //         [name]: updatedValue
        //     }))
        // }
        setSearchObj(prevState => ({
            ...prevState,
            [name]: selectedVal
        }));

    }

    const searchSubmit = (event) => {
        event.preventDefault();
        const { hiringCriteriaID, programID, branchID, monthOfHiring, skills } = searchObj;
        const model = {
            universityID: universityId,
            subscriptionID: subscriptionID,
            hiringCriteriaID: hiringCriteriaID?.map(item => item.value),
            programID: programID?.map(item => item.value),
            branchID: branchID?.map(item => item.value),
            monthOfHiring: monthOfHiring?.map(item => item.value),
            skills: skills?.map(item => item.value)
        };
        dispatch(SearchStundentSagaAction({ apiPayloadRequest: model, callback: getStudentSearchList }));
    }

    const getStudentSearchList = (data) => {
        setStudentSearchList(data);
    }

    const closeSendModal = () => {
        setIsSendOpen(false);
    }

    const handleChangeInput = (event) => {
        const { name, value } = event.target;
        setSendMailObj(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const sendMail = (event) => {
        event.preventDefault();
        const { emailTo, emailSubject, emailBody } = sendMailObj;
        if (!emailTo && !emailSubject && !emailBody) {
            toast.warning('Please enter all inout fields')
            return;
        }
        const model = {
            campusDriveID: campusDriveID,
            emailFrom: email,
            emailTo: 'jaswanth@gmail.com',
            emailSubject: emailSubject ? emailSubject : 'Campus Hiring Request',
            emailBody: emailBody
        };
        dispatch(SendMailSagaAction({ apiPayloadRequest: model, callback: sendMailResp }));
    }
    const sendMailResp = (data) => {
        toast.success(data?.message);
        setIsSendOpen(false);
        $("#mailSentSuccess").modal("show");
    }

    const hiringCriteriaOptions = hiringCriteria.map(item => ({ value: item.hiringCriteriaID, label: item.hiringCriteriaName }));
    const programCatalog = lookUpData?.programCatalog?.map(item => ({ value: item.programCode, label: item.programName }));
    const branchCatalog = lookUpData?.branchCatalog?.map(item => ({ value: item.branchID, label: item.branchName }));
    const skillsList = lookUpData?.skills?.map(item => ({ value: item.skillCode, label: item.skillName }))
    const monthsList = months?.map((item, i) => ({ value: item, label: item }));

    return (
        <>
            <UniversityStudentsCmp
                hiringCriteriaOptions={hiringCriteriaOptions}
                programCatalog={programCatalog}
                branchCatalog={branchCatalog}
                skillsList={skillsList}
                // lookUpData={lookUpData}
                months={monthsList}
                universityId={universityId}
                universityInfoList={universityInfoList}
                studentSearchList={studentSearchList}
                goBack={goBack}
                handleChange={handleChange}
                searchSubmit={searchSubmit}
            />
            {/* {isInfoModal &&
                <PortalHiringModal>
                    <ViewInfoModal
                        closeModal={closeModal}
                    />
                </PortalHiringModal>
            } */}
            {/* SEND MAIL */}
            {isSendOpen && <PortalHiringModal>
                <UniversitySendMail
                    email={email}
                    emailTo={'jaswanth@gmail.com'}
                    emailSubject={'Campus Hiring Request'}
                    emailBody={''}
                    universityName={universityInfoList?.universityName}
                    handleChange={handleChangeInput}
                    closeSendModal={closeSendModal}
                    sendMail={sendMail}
                />
            </PortalHiringModal>}

        </>
    )
}

export default UniversityStudents;

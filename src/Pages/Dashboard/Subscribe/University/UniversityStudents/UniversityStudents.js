import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import UniversityStudentsCmp from '../../../../../Components/Dashboard/SubscribeCmp/UniversityCmp/UniversityStudentsCmp';
import PortalHiringModal from '../../../../../Portals/PortalHiringModal';
import { actionGetDependencyLookUpsSagaAction } from '../../../../../Store/Actions/SagaActions/CommonSagaActions';
import { HiringSagaAction } from '../../../../../Store/Actions/SagaActions/HiringSagaAction';
import {
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
        $(document).on('click', '.dropdown-menu', function (e) {
            e.stopPropagation();
        });
        dispatch(GetUniversityInfoSagaAction({ apiPayloadRequest: universityId, callback: getUniversityList }));
        getHiring();
        getLookupData();
        return () => {
            // localStorage.removeItem('subscriptionID');
        }
    }, []);

    const getHiring = () => {
        dispatch(HiringSagaAction({ callback: getAllHirings }));
    }
    const getAllHirings = (data) => {
        setHiringCriteria(data);
    }

    const getLookupData = () => {
        dispatch(actionGetDependencyLookUpsSagaAction({
            apiPayloadRequest: ['programs', 'branches', 'skills'],
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

    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        console.log(name, value, checked);
        let copyObj = [...searchObj[name]]
        if (checked) {
            setSearchObj(prevState => ({
                ...prevState,
                [name]: copyObj?.concat(value)
            }))
        } else {
            let updatedValue = copyObj.filter(item => item !== value);
            setSearchObj(prevState => ({
                ...prevState,
                [name]: updatedValue
            }))
        }
    }

    const searchSubmit = (event) => {
        event.preventDefault();
        const { hiringCriteriaID, programID, branchID, monthOfHiring, skills } = searchObj;
        const model = {
            universityID: universityId,
            subscriptionID: subscriptionID,
            hiringCriteriaID: hiringCriteriaID,
            programID: programID,
            branchID: branchID,
            monthOfHiring: monthOfHiring,
            skills: skills
        };
        console.log(model);
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


    return (
        <>
            <UniversityStudentsCmp
                months={months}
                hiringCriteria={hiringCriteria}
                lookUpData={lookUpData}
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

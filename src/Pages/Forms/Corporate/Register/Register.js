import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CorporatePrimaryCmp from '../../../../Components/Forms/CorporateCmp/RegisterCmp/CorporatePrimaryCmp';
import { GetCountryCodeAction, SaveCoprorateData } from '../../../../Store/Actions/CorporateActions/CorporateAction';
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import { checkObjectProperties } from '../../../../utils/utils';
import { actionValidateReferralRequestSaga } from '../../../../Store/Actions/SagaActions/DashboardSaga/LoginSagaActions';

const Register = (props) => {
    // =========***Main Object***=========
    const initialState = {
        corporateName: '',
        CIN: '',
        corporateType: '',
        corporateCategory: '',
        corporateIndustry: '',
        attachment: '',
        yearOfEstablishment: '',
        referral: ''
    };

    // =========***Error Object***=========
    const errorsObj = initialState;

    const [corporatePrimaryData, setCorporatePrimaryData] = useState(initialState);
    const [errors, setErrors] = useState(errorsObj);
    const [path, setPath] = useState('');
    const [lookUpData, setLookUpData] = useState([]);
    const [imageObj, setImageObj] = useState({});
    const [filename, setFilename] = useState('')
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [showError, setShowError] = useState(false)

    const dispatch = useDispatch();
    const storeData = useSelector(state => state.CorporateReducer.corporatePrimaryState);

    useEffect(() => {
        dispatch(actionGetDependencyLookUpsSagaAction({
            apiPayloadRequest: ['corporateCategory', 'corporateIndustry', 'corporateType'],
            callback: dropdowns
        }));
        const image1 = JSON.parse(sessionStorage.getItem('image1'));
        const base64Img = sessionStorage.getItem('base64Img');
        const localStorageObj = JSON.parse(sessionStorage.getItem('primary'));
        // const isLocalStorageAvailable = localStorageObj && Object.keys(localStorageObj).length > 5 ? true : false;
        const isLocalStorageAvailable = storeData && Object.keys(storeData).length > 5 ? true : false;
        setPath(base64Img);
        if ((storeData) && isLocalStorageAvailable) {
            // let data = Object.keys(storeData).length > 5 ? storeData : localStorageObj;
            let data = storeData;
            let storeObj = {};
            Object.keys(data).map(keyName => {
                for (const key in initialState) {
                    if (keyName === key) {
                        storeObj[key] = data[key];
                    }
                }
            });
            setCorporatePrimaryData(storeObj);
            setFilename(storeData?.attachment?.name);
            // convertImgToBase64(image1)
            // const size = dataURLtoFile(base64Img, image1?.name, image1?.type)
        }
    }, []);

    useEffect(() => {
        const isErrorsObjEmpty = checkObjectProperties(errors);
        setIsBtnDisabled(isErrorsObjEmpty);
        if (showError) {
            setTimeout(() => {
                setShowError(false)
            }, 2000);
        }
    }, [errors, showError]);

    const dropdowns = (data) => {
        setLookUpData(data);
    }

    const handleChange = (name, value, errorMessage) => {
        setCorporatePrimaryData(preState => ({
            ...preState,
            [name]: value
        }));
        setErrors(preState => ({
            ...preState,
            [name]: errorMessage
        }));
    }

    const handleChangeImg = (event) => {
        event.preventDefault();
        if (event.target.files) {
            if (event.target.files[0].type === "application/pdf") {
                let imageObj = event.target.files[0];
                let obj = {};
                for (const key in imageObj) {
                    obj[key] = imageObj[key]
                }
                setImageObj(obj);
                setFilename(imageObj.name);
                sessionStorage.setItem('image1', JSON.stringify(obj))
                setCorporatePrimaryData(preState => ({
                    ...preState,
                    attachment: event.target.files[0]
                }));
                // const val = event.target.files.length;
                // for (let i = 0; i < val; i++) {
                //     let reader = new FileReader();
                //     reader.onload = function (ev) {
                //         setPath(ev.target.result.split(',')[1]);
                //         sessionStorage.setItem('base64Img', ev.target.result.split(',')[1])
                //     }.bind(this);
                //     reader.readAsDataURL(event.target.files[i]);
                // }
            } else {
                toast.error("PDF only")
            }
        }
    }

    // const convertImgToBase64 = (image1) => {
    //     const file = image1?.name?.split('.').slice(0, -1).join('.')
    //     const convertToFile = new File([file], image1?.name, { type: image1?.type, lastModified: image1?.lastModified });
    //     let reader = new FileReader();
    //     reader.onload = function (ev) {
    //         setPath(ev.target.result.split(','));
    //     }.bind(this);
    //     reader.readAsDataURL(convertToFile);
    // }
    const dataURLtoFile = (dataurl, filename, type) => {
        let arr = dataurl;
        // let mime = arr[0]?.match(/:(.*?);/)[1];
        let bstr = atob(arr);
        let n = bstr?.length;
        let u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr?.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: type });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (corporatePrimaryData.referral.length > 0) {
            validateRefCode(corporatePrimaryData.referral);
        }
        else {
            const { corporateName, CIN, corporateType, corporateCategory, corporateIndustry,
                attachment, yearOfEstablishment } = corporatePrimaryData;
            if (corporateName && CIN && corporateType && corporateCategory && corporateIndustry
                && attachment && yearOfEstablishment) {
                // sessionStorage.setItem('image1', JSON.stringify(imageObj))
                sessionStorage.setItem('primary', JSON.stringify(corporatePrimaryData))
                setShowError(false)
                dispatch(SaveCoprorateData(corporatePrimaryData, 1));
                props.history.push('/register/CorporateSecondary');
            } else {
                setShowError(true)
            }
        }
    }

    const validateRefCode = (model) => {
        dispatch(actionValidateReferralRequestSaga({ apiPayloadRequest: model, callback: onValidationResponse }));
    }

    const onValidationResponse = (data) => {
        if (data.length > 0) {
            setErrors(preState => ({
                ...preState,
                referral: data
            }));
        }
        else {
            dispatch(SaveCoprorateData(corporatePrimaryData, 1));
            props.history.push('/register/CorporateSecondary');
        }
    }

    return (
        <CorporatePrimaryCmp
            corporatePrimaryData={corporatePrimaryData}
            errors={errors}
            // path={"data:image/png;base64," + path}
            actualPath={path}
            filename={filename}
            lookUpData={lookUpData}
            isBtnDisabled={isBtnDisabled}
            showError={showError}
            handleChange={handleChange}
            handleChangeImg={handleChangeImg}
            handleSubmit={handleSubmit}
        />

    )
}

export default Register;

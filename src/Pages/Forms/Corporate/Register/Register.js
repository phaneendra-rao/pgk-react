import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CorporatePrimaryCmp from '../../../../Components/Forms/CorporateCmp/RegisterCmp/CorporatePrimaryCmp';
import { GetCountryCodeAction, SaveCoprorateData } from '../../../../Store/Actions/CorporateActions/CorporateAction';
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import { checkObjectProperties } from '../../../../utils/utils';

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
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);

    const dispatch = useDispatch();
    const storeData = useSelector(state => state.CorporateReducer.corporatePrimaryState);

    useEffect(() => {
        dispatch(actionGetDependencyLookUpsSagaAction({
            apiPayloadRequest: ['corporateCategory', 'corporateIndustry', 'corporateType'],
            callback: dropdowns
        }));
        const localStorageObj = JSON.parse(sessionStorage.getItem('primary'));
        const isLocalStorageAvailable = localStorageObj && Object.keys(localStorageObj).length > 5 ? true : false;
        if ((localStorageObj || storeData) && isLocalStorageAvailable) {
            let data = Object.keys(storeData).length > 5 ? storeData : localStorageObj;
            let storeObj = {};
            Object.keys(data).map(keyName => {
                for (const key in initialState) {
                    if (keyName === key) {
                        storeObj[key] = data[key];
                    }
                }
            });
            setCorporatePrimaryData(storeObj);
            // const image1 = JSON.parse(sessionStorage.getItem('image1'));
            // convertImgToBase64(image1)
        }
    }, []);

    useEffect(() => {
        const isErrorsObjEmpty = checkObjectProperties(errors);
        setIsBtnDisabled(isErrorsObjEmpty);
    }, [errors]);

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
            let imageObj = event.target.files[0];
            console.log(imageObj);
            let obj = {};
            for (const key in imageObj) {
                obj[key] = imageObj[key]
            }
            setImageObj(obj);
            sessionStorage.setItem('image1', JSON.stringify(obj))
            // if (event.target.files[0].type === "application/pdf")
            setCorporatePrimaryData(preState => ({
                ...preState,
                attachment: event.target.files[0]
            }));
            const val = event.target.files.length;
            for (let i = 0; i < val; i++) {
                let reader = new FileReader();
                reader.onload = function (ev) {
                    setPath(ev.target.result.split(',')[1]);
                    console.log(ev.target.result.split(','));
                }.bind(this);
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    }

    // const convertImgToBase64 = (image1) => {
    //     const file = image1?.name?.split('.').slice(0, -1).join('.')
    //     const convertToFile = new File([file], image1?.name, { type: image1?.type, lastModified: image1?.lastModified });
    //     console.log(convertToFile);
    //     let reader = new FileReader();
    //     reader.onload = function (ev) {
    //         setPath(ev.target.result.split(','));
    //         console.log(ev.target.result.split(','));
    //     }.bind(this);
    //     reader.readAsDataURL(convertToFile);
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { corporateName, CIN, corporateType, corporateCategory, corporateIndustry,
            attachment, yearOfEstablishment } = corporatePrimaryData;
        if (corporateName && CIN && corporateType && corporateCategory && corporateIndustry
            && attachment && yearOfEstablishment) {
            sessionStorage.setItem('image1', JSON.stringify(imageObj))
            sessionStorage.setItem('primary', JSON.stringify(corporatePrimaryData))
            dispatch(SaveCoprorateData(corporatePrimaryData, 1));
            props.history.push('/register/CorporateSecondary');
        } else {
            toast.error("Please enter all input fields")
        }
    }

    return (
        <CorporatePrimaryCmp
            corporatePrimaryData={corporatePrimaryData}
            errors={errors}
            path={"data:image/png;base64," + path}
            lookUpData={lookUpData}
            isBtnDisabled={isBtnDisabled}
            handleChange={handleChange}
            handleChangeImg={handleChangeImg}
            handleSubmit={handleSubmit}
        />

    )
}

export default Register;

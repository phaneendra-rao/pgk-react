import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CorporateSecondaryCmp from '../../../../Components/Forms/CorporateCmp/RegisterCmp/CorporateSecondaryCmp';
import { GetCategoryListAction, GetCountryCodeAction, SaveCoprorateData } from '../../../../Store/Actions/CorporateActions/CorporateAction';
import { actionGetCitiesByStateNameRequest, actionGetCountryCodesSagaAction, actionGetStatesByCountryNameRequest } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import { checkObjectProperties } from '../../../../utils/utils';

const CorporateSecondary = (props) => {
    // =========***Main Object***=========
    const initialState = {
        // corporateName: '',
        corporateHQAddressLine1: '',
        corporateHQAddressLine2: '',
        corporateHQAddressCountry: '',
        corporateHQAddressState: '',
        corporateHQAddressCity: '',
        corporateHQAddressDistrict: '',
        corporateHQAddressZipCode: '',
        corporateHQAddressPhone: '',
        corporateHQAddressEmail: '',
        // CIN: '',
        corporateLocalBranchAddressLine1: '',
        corporateLocalBranchAddressLine2: '',
        corporateLocalBranchAddressCountry: '',
        corporateLocalBranchAddressState: '',
        corporateLocalBranchAddressCity: '',
        corporateLocalBranchAddressDistrict: '',
        corporateLocalBranchAddressZipCode: '',
        corporateLocalBranchAddressPhone: '',
        corporateLocalBranchAddressEmail: '',
        companyProfile: '',
        attachment2: ''
    };

    // =========***Error Object***=========
    const errorsObj = initialState;

    // =========***Primary data keys to check validations***=========
    const primaryKeyCheck = {
        corporateName: '',
        CIN: '',
        corporateType: '',
        corporateCategory: '',
        corporateIndustry: '',
        attachment: '',
        yearOfEstablishment: '',
    };

    const [corporateSecondary, setCorporateSecondary] = useState(initialState);
    const [errors, setErrors] = useState(errorsObj);
    const [path, setPath] = useState('');
    const [code, setCode] = useState('');
    const [code2, setCode2] = useState('');
    const [countries, setCountries] = useState([]);
    const [stateList, setStateList] = useState([]);
    const [citylist, setCitylist] = useState([]);
    // const [countriesLocal, setCountriesLocal] = useState([]);
    const [stateListLocal, setStateListLocal] = useState([]);
    const [citylistLocal, setCitylistLocal] = useState([]);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [imageObj, setImageObj] = useState({});
    const [filename, setFilename] = useState('')
    // const [corporateSecondary, setCorporateSecondary] = useState(initialState);
    // const [errors, setErrors] = useState({ profileErr: '' });
    // const [path, setPath] = useState('');

    const storeData = useSelector(state => state.CorporateReducer.corporatePrimaryState);
    const countryCodes = useSelector(state => state.CorporateReducer.countryCodes);
    const selectedName = localStorage.getItem('type');


    const dispatch = useDispatch();

    useEffect(async () => {
        alert(storeData);
        console.log(storeData);
        let isPrimaryDataFilled = false;
        for (const storeKey in storeData) {
            for (const key in primaryKeyCheck) {
                if (storeKey === key) {
                    if (storeData[storeKey] !== '' || storeData[storeKey] !== null || storeData[storeKey] !== undefined) {
                        isPrimaryDataFilled = true
                    }
                }
            }
        }
        if (!isPrimaryDataFilled) {
            return props.history.push('/register');
        }
        dispatch(actionGetCountryCodesSagaAction({
            callback: onCountryCodesResponse,
        }));
        const localStorageObj = JSON.parse(sessionStorage.getItem('secondary'));
        // const isLocalStorageAvailable = localStorageObj && Object.keys(localStorageObj).length > 9 ? true : false;
        const isLocalStorageAvailable = storeData && Object.keys(storeData).length > 9 ? true : false;
        if ((storeData) && isLocalStorageAvailable) {
            // let data = Object.keys(storeData).length > 9 ? storeData : localStorageObj;
            let data = storeData;
            let storeSecondaryObj = {};
            Object.keys(data).map(keyName => {
                for (const key in initialState) {
                    if (keyName === key) {
                        storeSecondaryObj[key] = data[key];
                    }
                }
            });
            setCorporateSecondary(storeSecondaryObj);
            if (storeData?.corporateHQAddressCountry) {
                getStatesByCountryName(storeData?.corporateHQAddressCountry, 'HQ');
            }
            if (storeData.corporateHQAddressState) {
                getCitiesByStateName(storeData?.corporateHQAddressState, 'HQ');
            }
            // if (storeData?.corporateLocalBranchAddressCountry) {
            //     getStatesByCountryName(storeData?.corporateLocalBranchAddressCountry, 'LOCAL');
            // }
            // if (storeData?.corporateLocalBranchAddressState) {
            //     getCitiesByStateName(storeData?.corporateLocalBranchAddressState, 'LOCAL');
            // }
            setFilename(storeData?.attachment?.name);
            let reader = new FileReader();
            reader.onload = function (ev) {
                setPath(ev.target.result.split(',')[1]);
            }.bind(this);
            reader.readAsDataURL(storeData.attachment2);
        }

    }, []);

    useEffect(() => {
        const isErrorsObjEmpty = checkObjectProperties(errors);
        setIsBtnDisabled(isErrorsObjEmpty);
    }, [errors]);


    const onCountryCodesResponse = (response) => {
        if (response?.length) {
            const updatedCountryOptions = response.map((item) => {
                return { value: item?.name, label: item?.name, callingCodes: item?.callingCodes };
            });
            if (storeData?.corporateLocalBranchAddressCountry) {
                getStatesByCountryName(storeData?.corporateLocalBranchAddressCountry, 'LOCAL');
            }
            if (storeData?.corporateLocalBranchAddressState) {
                getCitiesByStateName(storeData?.corporateLocalBranchAddressState, 'LOCAL');
            }
            setCountries(updatedCountryOptions);
        }
    };

    const handleChange = (name, value, errorMessage) => {
        setCorporateSecondary(preState => ({
            ...preState,
            [name]: value
        }));
        setErrors(preState => ({
            ...preState,
            [name]: errorMessage
        }));
        if (name === 'corporateHQAddressCountry') {
            getStatesByCountryName(value, 'HQ');
        } else if (name === 'corporateLocalBranchAddressCountry') {
            getStatesByCountryName(value, 'LOCAL');
        }
        if (name === 'corporateHQAddressState') {
            getCitiesByStateName(value, 'HQ');
        } else if (name === 'corporateLocalBranchAddressState') {
            getCitiesByStateName(value, 'LOCAL');
        }
        // if (name === 'corporateHQAddressCountry') {
        //     const countryCode = countryCodes?.find(item => item.name === corporateSecondary.corporateHQAddressCountry)
        //     setCode('+' + countryCode?.callingCodes[0])
        // } else if (name === 'corporateLocalBranchAddressCountry') {
        //     const countryCode1 = countryCodes?.find(item => item.name === corporateSecondary.corporateLocalBranchAddressCountry)
        //     setCode2('+' + countryCode1?.callingCodes[0])
        // }
    }

    const getStatesByCountryName = (countryName, type) => {
        dispatch(actionGetStatesByCountryNameRequest({
            countryName: countryName,
            callback: (data) => setStatesCitiesHQ(data, type),
        }));
    }

    const getCitiesByStateName = (stateName, type) => {
        dispatch(actionGetCitiesByStateNameRequest({
            stateName: stateName,
            callback: (data) => setStatesCitiesLocal(data, type),
        }));
    }

    const setStatesCitiesHQ = (data, type) => {
        let statesList = data && data.length >= 0
            ? data?.map((item, i) => ({ value: item?.state_name, label: item?.state_name })) : (null);
        if (type === 'HQ') {
            setStateList(statesList);
        } else {
            setStateListLocal(statesList)
        }
    }

    const setStatesCitiesLocal = (data, type) => {
        let citiesList = data && data.length >= 0
            ? data?.map((item, i) => ({ value: item?.city_name, label: item?.city_name })) : (null);
        if (type === 'HQ') {
            setCitylist(citiesList);
        } else {
            setCitylistLocal(citiesList)
        }
    }

    const saveData = (event) => {
        const isCheked = event.target.checked;
        if (isCheked) {
            setCode2(code);
            setStateListLocal(stateList);
            setCitylistLocal(citylist);
            setCorporateSecondary(preState => ({
                ...preState,
                corporateLocalBranchAddressLine1: corporateSecondary.corporateHQAddressLine1,
                corporateLocalBranchAddressLine2: corporateSecondary.corporateHQAddressLine2,
                corporateLocalBranchAddressCountry: corporateSecondary.corporateHQAddressCountry,
                corporateLocalBranchAddressState: corporateSecondary.corporateHQAddressState,
                corporateLocalBranchAddressCity: corporateSecondary.corporateHQAddressCity,
                corporateLocalBranchAddressDistrict: corporateSecondary.corporateHQAddressDistrict,
                corporateLocalBranchAddressZipCode: corporateSecondary.corporateHQAddressZipCode,
                corporateLocalBranchAddressPhone: corporateSecondary.corporateHQAddressPhone,
                corporateLocalBranchAddressEmail: corporateSecondary.corporateHQAddressEmail
            }));
        } else {
            setCode2('');
            setStateListLocal([]);
            setCitylistLocal([]);
            setCorporateSecondary(preState => ({
                ...preState,
                corporateLocalBranchAddressLine1: '',
                corporateLocalBranchAddressLine2: '',
                corporateLocalBranchAddressCountry: '',
                corporateLocalBranchAddressState: '',
                corporateLocalBranchAddressCity: '',
                corporateLocalBranchAddressDistrict: '',
                corporateLocalBranchAddressZipCode: '',
                corporateLocalBranchAddressPhone: '',
                corporateLocalBranchAddressEmail: ''
            }));
        }
    }

    const handleChangeImg = (event) => {
        event.preventDefault();
        let imageObj = event.target.files[0];
        if (event.target.files) {
            setCorporateSecondary(preState => ({
                ...preState,
                attachment2: imageObj
            }))
            let obj = {};
            for (const key in imageObj) {
                obj[key] = imageObj[key]
            }
            setImageObj(obj);
            setFilename(imageObj.name);
            // if (event.target.files[0].type === "application/pdf")
            const val = event.target.files.length;
            for (let i = 0; i < val; i++) {
                let reader = new FileReader();
                reader.onload = function (ev) {
                    setPath(ev.target.result.split(',')[1]);
                }.bind(this);
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { profileErr } = errors;
        const {
            corporateHQAddressLine1, corporateHQAddressLine2, corporateHQAddressCountry, corporateHQAddressState,
            corporateHQAddressCity, corporateHQAddressDistrict, corporateHQAddressZipCode, corporateHQAddressPhone,
            corporateHQAddressEmail, companyProfile, corporateLocalBranchAddressPhone
        } = corporateSecondary;
        if (selectedName === 'Corporate') {
            if (corporateHQAddressLine1 && corporateHQAddressLine2 && corporateHQAddressCountry && corporateHQAddressState
                && corporateHQAddressCity && corporateHQAddressDistrict && corporateHQAddressZipCode && corporateHQAddressPhone
                && corporateHQAddressEmail && companyProfile) {
                const countryCode = countries?.find(item => item?.value === corporateSecondary?.corporateHQAddressCountry);
                const countryCode2 = countries?.find(item => item?.value === corporateSecondary?.corporateLocalBranchAddressCountry);
                corporateSecondary['countryCode'] = '';
                corporateSecondary['countryCode2'] = '';
                sessionStorage.setItem('secondary', JSON.stringify(corporateSecondary));
                dispatch(SaveCoprorateData(corporateSecondary, 2));
                props.history.push('/register/contactPersonnel');

            } else {
                toast.error("Please enter required input fields")
            }
        } else if (selectedName === 'University') {
            if (corporateHQAddressLine1 && corporateHQAddressLine2 && corporateHQAddressCountry && corporateHQAddressState
                && corporateHQAddressCity && corporateHQAddressDistrict && corporateHQAddressZipCode && corporateHQAddressPhone
                && corporateHQAddressEmail && companyProfile) {
                dispatch(SaveCoprorateData(corporateSecondary, 2));
                props.history.push('/register/contactPersonnel');

            } else {
                toast.error("Please enter required input fields")
            }
        }
    }

    return (
        <CorporateSecondaryCmp
            history={props.history}
            selectedName={selectedName}
            path={"data:image/png;base64," + path}
            corporateSecondary={corporateSecondary}
            errors={errors}
            isBtnDisabled={isBtnDisabled}
            attachment={corporateSecondary.attachment2}
            countryCodes={countries}
            stateList={stateList}
            citylist={citylist}
            // countryCodesLocal={countriesLocal}
            stateListLocal={stateListLocal}
            citylistLocal={citylistLocal}
            filename={filename}
            saveData={saveData}
            handleChangeImg={handleChangeImg}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default CorporateSecondary;

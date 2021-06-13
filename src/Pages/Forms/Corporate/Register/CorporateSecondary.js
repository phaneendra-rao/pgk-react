import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CorporateSecondaryCmp from '../../../../Components/Forms/CorporateCmp/RegisterCmp/CorporateSecondaryCmp';
import { GetCategoryListAction, GetCountryCodeAction, SaveCoprorateData } from '../../../../Store/Actions/CorporateActions/CorporateAction';

const CorporateSecondary = (props) => {
    // const initialState = {
    //     corporateType: '',
    //     corporateCategory: '',
    //     corporateIndustry: '',
    //     companyProfile: '',
    //     attachment: '',
    //     yearOfEstablishment: '',
    // };
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

    const [corporateSecondary, setCorporateSecondary] = useState(initialState);
    const [errors, setErrors] = useState(errorsObj);
    const [path, setPath] = useState('');
    const [code, setCode] = useState('');
    const [code2, setCode2] = useState('');

    // const [corporateSecondary, setCorporateSecondary] = useState(initialState);
    // const [errors, setErrors] = useState({ profileErr: '' });
    // const [path, setPath] = useState('');

    const storeData = useSelector(state => state.CorporateReducer.corporatePrimaryState);
    const countryCodes = useSelector(state => state.CorporateReducer.countryCodes);
    const selectedName = localStorage.getItem('type');


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCountryCodeAction());
        // dispatch(GetCategoryListAction(selectedName));
        // if (selectedName === 'Corporate') {
        // }
        console.log("secondary------", storeData);
        const localStorageObj = JSON.parse(sessionStorage.getItem('secondary'));
        const isLocalStorageAvailable = localStorageObj && Object.keys(localStorageObj).length > 9 ? true : false;
        if ((localStorageObj || storeData) && isLocalStorageAvailable) {
            let data = Object.keys(storeData).length > 9 ? storeData : localStorageObj;
            let storeSecondaryObj = {};
            Object.keys(data).map(keyName => {
                for (const key in initialState) {
                    if (keyName === key) {
                        storeSecondaryObj[key] = data[key];
                    }
                }
            });
            setCorporateSecondary(storeSecondaryObj)
        }

    }, []);

    const handleChange = (name, value, errorMessage) => {
        setCorporateSecondary(preState => ({
            ...preState,
            [name]: value
        }));
        setErrors(preState => ({
            ...preState,
            [name]: errorMessage
        }));
        // if (name === 'corporateHQAddressCountry') {
        //     const countryCode = countryCodes?.find(item => item.name === corporateSecondary.corporateHQAddressCountry)
        //     setCode('+' + countryCode?.callingCodes[0])
        // } else if (name === 'corporateLocalBranchAddressCountry') {
        //     const countryCode1 = countryCodes?.find(item => item.name === corporateSecondary.corporateLocalBranchAddressCountry)
        //     setCode2('+' + countryCode1?.callingCodes[0])
        // }
    }

    const saveData = (event) => {
        const isCheked = event.target.checked;
        if (isCheked) {
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
            setCode2(code);
        } else {
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
            setCode2('')
        }
    }

    const handleChangeImg = (event) => {
        event.preventDefault();
        if (event.target.files) {
            setCorporateSecondary(preState => ({
                ...preState,
                attachment2: event.target.files[0]
            }))
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
        console.log(code, code2);
        const { profileErr } = errors;
        const {
            corporateHQAddressLine1, corporateHQAddressLine2, corporateHQAddressCountry, corporateHQAddressState,
            corporateHQAddressCity, corporateHQAddressDistrict, corporateHQAddressZipCode, corporateHQAddressPhone,
            corporateHQAddressEmail, companyProfile, corporateLocalBranchAddressPhone
        } = corporateSecondary;
        const countryCode = countryCodes?.find(item => item.name === corporateSecondary.corporateHQAddressCountry);
        const countryCode2 = countryCodes?.find(item => item.name === corporateSecondary.corporateLocalBranchAddressCountry);
        corporateSecondary['countryCode'] = '+' + countryCode?.callingCodes[0];
        corporateSecondary['countryCode2'] = corporateHQAddressCountry ? '+' + countryCode2?.callingCodes[0] : '';
        if (selectedName === 'Corporate') {
            if (corporateHQAddressLine1 && corporateHQAddressLine2 && corporateHQAddressCountry && corporateHQAddressState
                && corporateHQAddressCity && corporateHQAddressDistrict && corporateHQAddressZipCode && corporateHQAddressPhone
                && corporateHQAddressEmail && companyProfile) {
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
            attachment={corporateSecondary.attachment2}
            countryCodes={countryCodes}
            saveData={saveData}
            handleChangeImg={handleChangeImg}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default CorporateSecondary;

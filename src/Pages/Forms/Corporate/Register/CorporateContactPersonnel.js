import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ContactPersonnelCmp from '../../../../Components/Forms/CorporateCmp/RegisterCmp/ContactPersonnelCmp';
import { ResetRdrAction, SaveCoprorateData, SignupAction } from '../../../../Store/Actions/CorporateActions/CorporateAction';
import { checkObjectProperties } from '../../../../utils/utils';

const CorporateContactPersonnel = (props) => {
    // =========***Main Object***=========
    const initialState = {
        primaryContactFirstName: '',
        primaryContactMiddleName: '',
        primaryContactLastName: '',
        primaryContactDesignation: '',
        primaryContactPhone: '',
        primaryContactEmail: '',
        secondaryContactFirstName: '',
        secondaryContactMiddleName: '',
        secondaryContactLastName: '',
        secondaryContactDesignation: '',
        secondaryContactPhone: '',
        secondaryContactEmail: '',
        password: ''
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
    // =========***Secondary data keys to check validations***=========
    const secondaryKeyCheck = {
        corporateHQAddressLine1: '',
        corporateHQAddressLine2: '',
        corporateHQAddressCountry: '',
        corporateHQAddressState: '',
        corporateHQAddressCity: '',
        corporateHQAddressDistrict: '',
        corporateHQAddressZipCode: '',
        corporateHQAddressPhone: '',
        corporateHQAddressEmail: '',
        companyProfile: '',
    };

    const [contactPersonnel, setContactPersonnel] = useState(initialState);
    const [repeatPassword, setRepeatPassword] = useState('');
    const [repeatPasswordErr, setRepeatPasswordErr] = useState('');
    const [errors, setErrors] = useState(errorsObj);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [showError, setshowError] = useState()

    const storeData = useSelector(state => state.CorporateReducer.corporatePrimaryState);
    const apiStatus = useSelector(state => state.CorporateReducer.apiStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        let isPrimaryDataFilled = false;
        let isSecondaryDataFilled = false;
        for (const storeKey in storeData) {
            for (const key in primaryKeyCheck) {
                if (storeKey === key) {
                    if (storeData[storeKey] !== '' || storeData[storeKey] !== null || storeData[storeKey] !== undefined) {
                        isPrimaryDataFilled = true
                    }
                }
            }
        }
        for (const storeKey2 in storeData) {
            for (const key in secondaryKeyCheck) {
                if (storeKey2 === key) {
                    if (storeData[storeKey2] !== '' || storeData[storeKey2] !== null || storeData[storeKey2] !== undefined) {
                        isSecondaryDataFilled = true
                    }
                }
            }
        }
        if (!isPrimaryDataFilled) {
            sessionStorage.clear();
            return props.history.push('/register');
        }
        if (!isSecondaryDataFilled) {
            sessionStorage.clear();
            return props.history.push('/register/corporateSecondary');
        }
        // const localStorageObj = JSON.parse(sessionStorage.getItem('contact'));
        // const isLocalStorageAvailable = localStorageObj && Object.keys(localStorageObj).length > 7 ? true : false;
        const isLocalStorageAvailable = storeData && Object.keys(storeData).length > 7 ? true : false;
        if (storeData && isLocalStorageAvailable) {
            // let data = storeData && Object.keys(storeData).length > 7 ? storeData : localStorageObj;
            let data = storeData;
            let storeContactObj = {};
            Object.keys(data).map(keyName => {
                for (const key in initialState) {
                    if (keyName === key) {
                        storeContactObj[key] = data[key];
                    }
                }
            })
            setContactPersonnel(storeContactObj);
        }
    }, []);

    useEffect(() => {
        const isErrorsObjEmpty = checkObjectProperties(errors);
        setIsBtnDisabled(isErrorsObjEmpty);
        if (showError) {
            setTimeout(() => {
                setshowError(false);
            }, 2000);
        }
    }, [errors, showError]);

    const handleChange = (name, value, errorMessage) => {
        if (name !== "repeatPassword") {
            setContactPersonnel(preState => ({
                ...preState,
                [name]: value
            }));
            setErrors(preState => ({
                ...preState,
                [name]: errorMessage
            }));
        } else {
            setRepeatPassword(value);
            setRepeatPasswordErr(errorMessage);
        }
    }

    const checkObjectPropertyList = (obj) => {
        let keyList = [];
        for (const key in obj) {
            if (obj[key] === '' || obj[key] === null || obj[key] === undefined) {
                keyList.push(key);
            }
        }
        return keyList;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const selectedName = localStorage.getItem('type');
        const { primaryContactFirstName, primaryContactLastName, primaryContactDesignation, primaryContactPhone, primaryContactEmail, password } = contactPersonnel;
        // const primary = JSON.parse(sessionStorage.getItem('primary'));
        // const secondary = JSON.parse(sessionStorage.getItem('secondary'));
        if (primaryContactFirstName && primaryContactLastName && primaryContactDesignation && primaryContactPhone && primaryContactEmail && (password === repeatPassword)) {
            // const finalData = { ...primary, ...secondary, ...contactPersonnel };
            // const finalData = Object.assign(storeData, contactPersonnel);
            const finalData = { ...storeData, ...contactPersonnel };
            // const image1 = JSON.parse(sessionStorage.getItem('image1'));
            // const file = image1?.name?.split('.').slice(0, -1).join('.')
            // const convertToFile = new File([file], image1?.name, { type: image1?.type, lastModified: image1?.lastModified });
            // finalData.attachment = convertToFile;
            finalData.corporateHQAddressPhone = storeData?.countryCode + storeData?.corporateHQAddressPhone?.toString();
            finalData.corporateLocalBranchAddressPhone = storeData?.corporateLocalBranchAddressPhone ? storeData?.countryCode2 + storeData?.corporateLocalBranchAddressPhone?.toString() : '';
            finalData.stakeholder = selectedName;
            finalData.primaryContactPhone = storeData?.countryCode + contactPersonnel?.primaryContactPhone?.toString();
            finalData.secondaryContactPhone = contactPersonnel?.secondaryContactPhone ? storeData?.countryCode + contactPersonnel?.secondaryContactPhone?.toString() : '';
            // finalData.attachment = convertToFile;
            delete finalData.countryCode;
            delete finalData.countryCode2;
            delete finalData.attachment2;
            delete finalData.referral;
            // sessionStorage.setItem('contact', JSON.stringify(contactPersonnel));

            // await dispatch(SaveCoprorateData(contactPersonnel, 3));
            // await dispatch(SignupAction(finalData, props.history));
            // props.history.push('/register/authentication');
            if (selectedName === 'Corporate') {
                await dispatch(SaveCoprorateData(contactPersonnel, 3));
                await dispatch(SignupAction(finalData, props.history, selectedName));
                setshowError(false);
            } else if (selectedName === 'University') {
                const data = {
                    universityName: finalData.corporateName,
                    universityHQAddressLine1: finalData.corporateHQAddressLine1,
                    universityHQAddressLine2: finalData.corporateHQAddressLine2,
                    universityHQAddressLine3: '',
                    universityHQAddressCountry: finalData.corporateHQAddressCountry,
                    universityHQAddressState: finalData.corporateHQAddressState,
                    universityHQAddressCity: finalData.corporateHQAddressCity,
                    universityHQAddressDistrict: finalData.corporateHQAddressDistrict,
                    universityHQAddressZipcode: finalData.corporateHQAddressZipCode,
                    universityHQAddressPhone: finalData.corporateHQAddressPhone,
                    universityHQAddressemail: finalData.corporateHQAddressEmail,
                    universityLocalBranchAddressLine1: finalData.corporateLocalBranchAddressLine1,
                    universityLocalBranchAddressLine2: finalData.corporateLocalBranchAddressLine2,
                    universityLocalBranchAddressLine3: '',
                    universityLocalBranchAddressCountry: finalData.corporateLocalBranchAddressCountry,
                    universityLocalBranchAddressState: finalData.corporateLocalBranchAddressState,
                    universityLocalBranchAddressCity: finalData.corporateLocalBranchAddressCity,
                    universityLocalBranchAddressDistrict: finalData.corporateLocalBranchAddressDistrict,
                    universityLocalBranchAddressZipcode: finalData.corporateLocalBranchAddressZipCode,
                    universityLocalBranchAddressPhone: finalData.corporateLocalBranchAddressPhone,
                    universityLocalBranchAddressemail: finalData.corporateLocalBranchAddressEmail,
                    primaryContactFirstName: finalData.primaryContactFirstName,
                    primaryContactMiddleName: finalData.primaryContactMiddleName,
                    primaryContactLastName: finalData.primaryContactLastName,
                    primaryContactDesignation: finalData.primaryContactDesignation,
                    primaryContactPhone: finalData.primaryContactPhone,
                    primaryContactEmail: finalData.primaryContactEmail,
                    secondaryContactFirstName: finalData.secondaryContactFirstName,
                    secondaryContactMiddleName: finalData.secondaryContactMiddleName,
                    secondaryContactLastName: finalData.secondaryContactLastName,
                    secondaryContactDesignation: finalData.secondaryContactDesignation,
                    secondaryContactPhone: finalData.secondaryContactPhone,
                    secondaryContactEmail: finalData.secondaryContactEmail,
                    universitySector: finalData.corporateIndustry,
                    yearOfEstablishment: finalData.yearOfEstablishment,
                    universityProfile: finalData.companyProfile,
                    attachment: finalData.attachment,
                    password: finalData.password
                }
                await dispatch(SaveCoprorateData(data, 3));
                await dispatch(SignupAction(data, props.history, selectedName));
            }
        } else {
            setshowError(true)
        }

    }

    return (
        <ContactPersonnelCmp
            history={props.history}
            errors={errors}
            showError={showError}
            isBtnDisabled={isBtnDisabled}
            repeatPasswordErr={repeatPasswordErr}
            repeatPassword={repeatPassword}
            contactPersonnel={contactPersonnel}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default CorporateContactPersonnel;

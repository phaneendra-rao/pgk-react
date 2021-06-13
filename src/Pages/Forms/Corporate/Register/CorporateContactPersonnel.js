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

    const [contactPersonnel, setContactPersonnel] = useState(initialState);
    const [repeatPassword, setRepeatPassword] = useState('');
    const [repeatPasswordErr, setRepeatPasswordErr] = useState('');
    const [errors, setErrors] = useState(errorsObj);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);
    const [showError, setshowError] = useState(false)

    const storeData = useSelector(state => state.CorporateReducer.corporatePrimaryState);
    const apiStatus = useSelector(state => state.CorporateReducer.apiStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        const localStorageObj = JSON.parse(sessionStorage.getItem('contact'));
        const isLocalStorageAvailable = localStorageObj && Object.keys(localStorageObj).length > 7 ? true : false;
        if ((localStorageObj || storeData) && isLocalStorageAvailable) {
            let data = storeData && Object.keys(storeData).length > 7 ? storeData : localStorageObj;
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
    }, [errors]);

    // useEffect(() => {
    //     if (apiStatus) {
    //         props.history.push('/register/authentication');
    //     }
    //     return () => {
    //         dispatch(ResetRdrAction());
    //     }
    // }, [apiStatus])

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        const selectedName = localStorage.getItem('type');
        const { emailErr, email2Err, passwordErr, lnameErr, fnameErr, designationErr, repeatPasswordErr, mobileErr, mobile2Err } = errors;
        const { primaryContactFirstName, primaryContactLastName, primaryContactDesignation, primaryContactPhone, primaryContactEmail, password } = contactPersonnel;

        const primary = JSON.parse(sessionStorage.getItem('primary'));
        const secondary = JSON.parse(sessionStorage.getItem('secondary'));
        const store1 = checkObjectProperties(primary);
        const store2 = checkObjectProperties(secondary);
        if (store1 && store2) {
            setshowError(true);
            return;            
        } else {
            setshowError(false);
        }
        // const finalData = Object.assign(storeData, contactPersonnel);
        const finalData = { ...primary, ...secondary, ...contactPersonnel };
        if (primaryContactFirstName && primaryContactLastName && primaryContactDesignation && primaryContactPhone && primaryContactEmail) {
            const image1 = JSON.parse(sessionStorage.getItem('image1'));
            const file = image1?.name?.split('.').slice(0, -1).join('.')
            const convertToFile = new File([file], image1?.name, { type: image1?.type, lastModified: image1?.lastModified });
            finalData.attachment = convertToFile;
            finalData.corporateHQAddressPhone = secondary?.countryCode + secondary?.corporateHQAddressPhone?.toString();
            finalData.corporateLocalBranchAddressPhone = secondary?.corporateLocalBranchAddressPhone ? secondary?.countryCode2 + secondary?.corporateLocalBranchAddressPhone?.toString() : '';
            finalData.stakeholder = selectedName;
            finalData.yearOfEstablishment = primary?.yearOfEstablishment?.split('-')[0];
            finalData.primaryContactPhone = secondary?.countryCode + contactPersonnel?.primaryContactPhone?.toString();
            finalData.secondaryContactPhone = contactPersonnel?.secondaryContactPhone ? secondary?.countryCode + contactPersonnel?.secondaryContactPhone?.toString() : '';
            // finalData.attachment = convertToFile;
            // finalData.attachment = JSON.parse(sessionStorage.getItem('image1'));
            delete finalData.countryCode;
            delete finalData.countryCode2;
            delete finalData.attachment2;
            delete finalData.referral;
            sessionStorage.setItem('contact', JSON.stringify(contactPersonnel));

            // ========= TO CHECK OBJECT VALUES ARE EMPTY OR NOT
            const isObjEmpty = checkObjectProperties(finalData);
            if (isObjEmpty) {
                setshowError(isObjEmpty);
                return;
            } else {
                setshowError(isObjEmpty);
            }

            // await dispatch(SaveCoprorateData(contactPersonnel, 3));
            // await dispatch(SignupAction(finalData, props.history));
            // props.history.push('/register/authentication');
            if (selectedName === 'Corporate') {
                await dispatch(SaveCoprorateData(contactPersonnel, 3));
                await dispatch(SignupAction(finalData, props.history, selectedName));
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

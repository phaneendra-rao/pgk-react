import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import ContactPersonnelCmp from '../../../../Components/Forms/CorporateCmp/RegisterCmp/ContactPersonnelCmp';
import { ResetRdrAction, SaveCoprorateData, SignupAction } from '../../../../Store/Actions/CorporateActions/CorporateAction';

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

    const storeData = useSelector(state => state.CorporateReducer.corporatePrimaryState);
    const apiStatus = useSelector(state => state.CorporateReducer.apiStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("contact------", storeData);
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

        // const primary = JSON.parse(sessionStorage.getItem('primary'));
        // const secondary = JSON.parse(sessionStorage.getItem('secondary'));
        // const finalData = { ...storeData, ...contactPersonnel }
        // const finalData = { ...secondary, ...primary, ...contactPersonnel }
        const finalData = Object.assign(storeData, contactPersonnel);
        if (primaryContactFirstName && primaryContactLastName && primaryContactDesignation && primaryContactPhone && primaryContactEmail) {
            finalData.corporateHQAddressPhone = finalData.countryCode + finalData.corporateHQAddressPhone?.toString();
            finalData.corporateLocalBranchAddressPhone = finalData.corporateLocalBranchAddressPhone ? finalData.countryCode2 + finalData.corporateLocalBranchAddressPhone?.toString() : '';
            console.log(storeData.yearOfEstablishment);
            finalData.stakeholder = selectedName;
            finalData.yearOfEstablishment = finalData.yearOfEstablishment?.split('-')[0];
            finalData.yearOfEstablishment = finalData.yearOfEstablishment?.split('-')[0];
            finalData.primaryContactPhone = finalData.countryCode + contactPersonnel.primaryContactPhone?.toString();
            finalData.secondaryContactPhone = contactPersonnel.secondaryContactPhone ? finalData.countryCode + contactPersonnel.secondaryContactPhone?.toString() : '';
            // finalData.attachment = JSON.parse(sessionStorage.getItem('image1'));
            delete finalData.countryCode;
            delete finalData.countryCode2;
            delete finalData.attachment2;
            // sessionStorage.setItem('contact', JSON.stringify(finalData));
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
            toast.error("Please enter required input fields")
        }

    }

    return (
        <ContactPersonnelCmp
            history={props.history}
            errors={errors}
            repeatPasswordErr={repeatPasswordErr}
            repeatPassword={repeatPassword}
            contactPersonnel={contactPersonnel}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default CorporateContactPersonnel;

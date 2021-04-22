import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { ResetRdrAction, SaveCoprorateData, SignupAction } from '../../../../Store/Actions/CorporateActions/CorporateAction';
import StudentPersonnelCmp from '../../../Components/Forms/StudentCmp/StudentPersonnelCmp';

const StudentPersonnel = (props) => {
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

    const [contactPersonnel, setContactPersonnel] = useState(initialState);
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errors, setErrors] = useState({ emailErr: '', email2Err: '', passwordErr: '', lnameErr: '', fnameErr: '', designationErr: '', repeatPasswordErr: '', mobileErr: '', mobile2Err: '' });

    const storeData = useSelector(state => state.CorporateReducer.corporatePrimaryState);
    const apiStatus = useSelector(state => state.CorporateReducer.apiStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        if (storeData) {
            Object.keys(initialState).map(keyName => {
                for (const key in storeData) {
                    if (keyName === key) {
                        setContactPersonnel(prevState => ({
                            ...prevState,
                            [key]: storeData[key]
                        }))
                    }
                }
            })
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

    const handlerChange = (event) => {
        const { name, value } = event.target;
        if (name === "repeatPassword") {
            setRepeatPassword(value);
        } else {
            setContactPersonnel(preState => ({
                ...preState,
                [name]: value
            }));
        }

        switch (name) {
            case 'primaryContactEmail':
                const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (value && mailformat.test(value)) {
                    setErrors(preState => ({
                        ...preState,
                        emailErr: ''
                    }));
                } else if (!value || !mailformat.test(value)) {
                    setErrors(preState => ({
                        ...preState,
                        emailErr: 'Email error'
                    }));
                }
                return;
            case 'secondaryContactEmail':
                const mailformat1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (value && mailformat1.test(value)) {
                    setErrors(preState => ({
                        ...preState,
                        email2Err: ''
                    }));
                } else if (!value || !mailformat1.test(value)) {
                    setErrors(preState => ({
                        ...preState,
                        email2Err: 'Email error'
                    }));
                }
                return;
            case 'primaryContactLastName':
                if (value) {
                    setErrors(preState => ({
                        ...preState,
                        lnameErr: ''
                    }));
                } else if (!value) {
                    setErrors(preState => ({
                        ...preState,
                        lnameErr: 'Last name error'
                    }));
                }
                return;
            case 'primaryContactFirstName':
                if (value) {
                    setErrors(preState => ({
                        ...preState,
                        fnameErr: ''
                    }));
                } else if (!value) {
                    setErrors(preState => ({
                        ...preState,
                        fnameErr: 'First name error'
                    }));
                }
                return;
            case 'primaryContactDesignation':
                if (value) {
                    setErrors(preState => ({
                        ...preState,
                        designationErr: ''
                    }));
                } else if (!value) {
                    setErrors(preState => ({
                        ...preState,
                        designationErr: 'primaryContactDesignation error'
                    }));
                }
                return;
            case 'primaryContactPhone':
                const num = /^[+-]?[0-9\b]+$/;
                if (num.test(value)) {
                    // if (val.match(phoneno)) {
                    if (value.length >= 13) {
                        setErrors(preState => ({
                            ...preState,
                            mobileErr: ''
                        }));
                    } else {
                        setErrors(preState => ({
                            ...preState,
                            mobileErr: 'Invalid'
                        }));
                    }
                } else {
                    setErrors(preState => ({
                        ...preState,
                        mobileErr: 'Invalid'
                    }));
                }
                return;
            case 'secondaryContactPhone':
                const num1 = /^[+-]?[0-9\b]+$/;
                if (num1.test(value)) {
                    // if (val.match(phoneno)) {
                    if (value.length >= 13) {
                        setErrors(preState => ({
                            ...preState,
                            mobile2Err: ''
                        }));
                    } else {
                        setErrors(preState => ({
                            ...preState,
                            mobile2Err: 'Invalid'
                        }));
                    }
                } else {
                    setErrors(preState => ({
                        ...preState,
                        mobile2Err: 'Invalid'
                    }));
                }
                return;
            case 'password':
                if (value && value.length >= 8) {
                    setErrors(preState => ({
                        ...preState,
                        passwordErr: ''
                    }));
                } else {
                    setErrors(preState => ({
                        ...preState,
                        passwordErr: 'Password error'
                    }));
                }
                return;
            case 'repeatPassword':
                if (value === contactPersonnel.password) {
                    setErrors(preState => ({
                        ...preState,
                        repeatPasswordErr: ''
                    }));
                } else {
                    setErrors(preState => ({
                        ...preState,
                        repeatPasswordErr: 'Password does not match'
                    }));
                }
                return;

            default:
                break;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const selectedName = localStorage.getItem('type');
        const { emailErr, email2Err, passwordErr, lnameErr, fnameErr, designationErr, repeatPasswordErr, mobileErr, mobile2Err } = errors;
        const { primaryContactFirstName, primaryContactLastName, primaryContactDesignation, primaryContactPhone, primaryContactEmail, password } = contactPersonnel;
        const finalData = Object.assign(storeData, contactPersonnel)
        if (primaryContactFirstName && primaryContactLastName && primaryContactDesignation && primaryContactPhone && primaryContactEmail &&
            !emailErr && !passwordErr && !lnameErr && !fnameErr && !designationErr && !mobileErr && (password === repeatPassword)) {
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
        <StudentPersonnelCmp
            history={props.history}
            errors={errors}
            contactPersonnel={contactPersonnel}
            handlerChange={handlerChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default StudentPersonnel;

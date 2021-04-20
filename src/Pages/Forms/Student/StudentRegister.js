import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { GetCountryCodeAction, SaveCoprorateData } from '../../../Store/Actions/CorporateActions/CorporateAction';
import StudentPrimaryCmp from '../../../Components/Forms/StudentCmp/StudentPrimaryCmp';

const StudentRegister = (props) => {
    const initialState = {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phoneNuber: '',
        collegeID: '',
        permanentAddressLine1: '',
        permanentAddressLine2: '',
        permanentAddressLine3: '',
        permanentAddressCountry: '',
        permanentAddressState: '',
        permanentAddressCity: '',
        permanentAddressDistrict: '',
        permanentAddressZipcode: '',
        permanentAddressPhone: '',
        permanentAddressemail: '',
        presentAddressLine1: '',
        presentAddressLine2: '',
        presentAddressLine3: '',
        presentAddressCountry: '',
        presentAddressState: '',
        presentAddressCity: '',
        presentAddressDistrict: '',
        presentAddressZipcode: '',
        presentAddressPhone: '',
        presentAddressemail: '',
        fathersFirstName: '',
        fathersMiddleName: '',
        fathersLastName: ''
    };

    const [studentPrimaryData, setStudentPrimaryData] = useState(initialState);
    const [errors, setErrors] = useState({ emailErr: '', email2Err: '', mobileErr: '', mobile2Err: '' });
    const [code, setCode] = useState('');
    const [code2, setCode2] = useState('');

    const dispatch = useDispatch();
    const storeData = useSelector(state => state.CorporateReducer.corporatePrimaryState);
    const countryCodes = useSelector(state => state.CorporateReducer.countryCodes);

    useEffect(() => {
        dispatch(GetCountryCodeAction());
        if (storeData) {
            for (const key in storeData) {
                setStudentPrimaryData(prevState => ({
                    ...prevState,
                    [key]: storeData[key]
                }))
            }
        }
    }, []);

    const handlerChange = (event) => {
        const { name, value } = event.target;
        setStudentPrimaryData(preState => ({
            ...preState,
            [name]: value
        }));

        switch (name) {
            case 'email':
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

            // case 'corporateLocalBranchAddressEmail':
            //     const mailformat1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            //     if (value && mailformat1.test(value)) {
            //         setErrors(preState => ({
            //             ...preState,
            //             email2Err: ''
            //         }));
            //     } else if (!value || !mailformat1.test(value)) {
            //         setErrors(preState => ({
            //             ...preState,
            //             email2Err: 'Email error'
            //         }));
            //     }
            //     return;

            case 'phoneNuber':
                const num = /^[+-]?[0-9\b]+$/;
                if (num.test(value)) {
                    // if (val.match(phoneno)) {
                    if (value.length === 10) {
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

            case 'presentAddressCountry':
                const countryCode1 = countryCodes.find(item => item.name === value);
                setCode('+' + countryCode1?.callingCodes[0]);
                return;


            // case 'corporateLocalBranchAddressPhone':
            //     const num2 = /^[+-]?[0-9\b]+$/;
            //     if (num2.test(value)) {
            //         // if (val.match(phoneno)) {
            //         if (value.length >= 13) {
            //             setErrors(preState => ({
            //                 ...preState,
            //                 mobile2Err: ''
            //             }));
            //         } else {
            //             setErrors(preState => ({
            //                 ...preState,
            //                 mobile2Err: 'Invalid'
            //             }));
            //         }
            //     } else {
            //         setErrors(preState => ({
            //             ...preState,
            //             mobile2Err: 'Invalid'
            //         }));
            //     }
            //     return;

            default:
                break;
        }
    }

    const saveData = (event) => {
        const isCheked = event.target.checked;
        // console.log(event.target.checked);
        if (isCheked) {
            setStudentPrimaryData(preState => ({
                ...preState,
                permanentAddressLine1: studentPrimaryData.presentAddressLine1,
                permanentAddressLine2: studentPrimaryData.presentAddressLine2,
                permanentAddressCountry: studentPrimaryData.presentAddressCountry,
                permanentAddressState: studentPrimaryData.presentAddressState,
                permanentAddressCity: studentPrimaryData.presentAddressCity,
                permanentAddressDistrict: studentPrimaryData.presentAddressDistrict,
                permanentAddressZipcode: studentPrimaryData.presentAddressZipcode,
                permanentAddressPhone: studentPrimaryData.presentAddressPhone,
                permanentAddressemail: studentPrimaryData.presentAddressemail
            }))
        } else {
            setStudentPrimaryData(preState => ({
                ...preState,
                permanentAddressLine1: '',
                permanentAddressLine2: '',
                permanentAddressCountry: '',
                permanentAddressState: '',
                permanentAddressCity: '',
                permanentAddressDistrict: '',
                permanentAddressZipcode: '',
                permanentAddressPhone: '',
                permanentAddressemail: ''
            }))
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { emailErr, mobileErr } = errors;
        const { firstName, lastName, email, phoneNuber } = studentPrimaryData;
        if (firstName && lastName && email && phoneNuber && !emailErr && !mobileErr) {
            studentPrimaryData.phoneNuber = code + phoneNuber;
            studentPrimaryData.permanentAddressPhone = code + phoneNuber;
            dispatch(SaveCoprorateData(studentPrimaryData, 1));
            props.history.push('/register/studentSecondary');
        } else {
            toast.error("Please enter all input fields")
        }
    }

    return (
        <StudentPrimaryCmp
            studentPrimaryData={studentPrimaryData}
            code={code}
            countryCodes={countryCodes}
            errors={errors}
            history={props.history}
            saveData={saveData}
            handlerChange={handlerChange}
            handleSubmit={handleSubmit}
        />

    )
}

export default StudentRegister;

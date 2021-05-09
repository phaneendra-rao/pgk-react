import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CorporatePrimaryCmp from '../../../../Components/Forms/CorporateCmp/RegisterCmp/CorporatePrimaryCmp';
import { GetCountryCodeAction, SaveCoprorateData } from '../../../../Store/Actions/CorporateActions/CorporateAction';

const Register = (props) => {
    const initialState = {
        corporateName: '',
        corporateHQAddressLine1: '',
        corporateHQAddressLine2: '',
        corporateHQAddressCountry: '',
        corporateHQAddressState: '',
        corporateHQAddressCity: '',
        corporateHQAddressDistrict: '',
        corporateHQAddressZipCode: '',
        corporateHQAddressPhone: '',
        corporateHQAddressEmail: '',
        CIN: '',
        corporateLocalBranchAddressLine1: '',
        corporateLocalBranchAddressLine2: '',
        corporateLocalBranchAddressCountry: '',
        corporateLocalBranchAddressState: '',
        corporateLocalBranchAddressCity: '',
        corporateLocalBranchAddressDistrict: '',
        corporateLocalBranchAddressZipCode: '',
        corporateLocalBranchAddressPhone: '',
        corporateLocalBranchAddressEmail: ''
    };

    const [corporatePrimaryData, setCorporatePrimaryData] = useState(initialState);
    const [errors, setErrors] = useState({ emailErr: '', email2Err: '', mobileErr: '', mobile2Err: '' });
    const [code, setCode] = useState('');
    const [code2, setCode2] = useState('');

    const dispatch = useDispatch();
    const storeData = useSelector(state => state.CorporateReducer.corporatePrimaryState);
    const countryCodes = useSelector(state => state.CorporateReducer.countryCodes);
    console.log(storeData);

    useEffect(() => {
        dispatch(GetCountryCodeAction());
        if (storeData) {
            for (const key in storeData) {
                setCorporatePrimaryData(prevState => ({
                    // ...prevState,
                    [key]: storeData[key]
                }))
            }
        }
    }, []);

    const handlerChange = (event) => {
        const { name, value } = event.target;
        setCorporatePrimaryData(preState => ({
            ...preState,
            [name]: value
        }));

        switch (name) {
            case 'corporateHQAddressEmail':
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

            case 'corporateLocalBranchAddressEmail':
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

            case 'corporateHQAddressPhone':
                // setCorporatePrimaryData({
                //     corporateHQAddressPhone: code + value
                // });
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
            case 'corporateLocalBranchAddressPhone':
                // setCorporatePrimaryData({
                //     corporateLocalBranchAddressPhone: code + value
                // });
                const num2 = /^[+-]?[0-9\b]+$/;
                if (num2.test(value)) {
                    // if (val.match(phoneno)) {
                    if (value.length === 10) {
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

            case 'corporateHQAddressCountry':
                const countryCode1 = countryCodes.find(item => item.name === value);
                setCode('+' + countryCode1?.callingCodes[0]);
                return;

            case 'corporateLocalBranchAddressCountry':
                const countryCode2 = countryCodes.find(item => item.name === value);
                setCode2('+' + countryCode2.callingCodes[0]);
                return;

            default:
                break;
        }
    }

    const saveData = (event) => {
        const isCheked = event.target.checked;
        if (isCheked) {
            setCorporatePrimaryData(preState => ({
                ...preState,
                corporateLocalBranchAddressLine1: corporatePrimaryData.corporateHQAddressLine1,
                corporateLocalBranchAddressLine2: corporatePrimaryData.corporateHQAddressLine2,
                corporateLocalBranchAddressCountry: corporatePrimaryData.corporateHQAddressCountry,
                corporateLocalBranchAddressState: corporatePrimaryData.corporateHQAddressState,
                corporateLocalBranchAddressCity: corporatePrimaryData.corporateHQAddressCity,
                corporateLocalBranchAddressDistrict: corporatePrimaryData.corporateHQAddressDistrict,
                corporateLocalBranchAddressZipCode: corporatePrimaryData.corporateHQAddressZipCode,
                corporateLocalBranchAddressPhone: corporatePrimaryData.corporateHQAddressPhone,
                corporateLocalBranchAddressEmail: corporatePrimaryData.corporateHQAddressEmail
            }));
            setCode2(code);
        } else {
            setCorporatePrimaryData(preState => ({
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

    const handleSubmit = (event) => {
        event.preventDefault();
        const { emailErr, mobileErr } = errors;
        const { corporateName, CIN, corporateHQAddressPhone, corporateLocalBranchAddressPhone, corporateHQAddressZipCode } = corporatePrimaryData;
        if (corporateName && CIN && corporateHQAddressPhone && corporateHQAddressZipCode && !emailErr && !mobileErr) {
            corporatePrimaryData.corporateHQAddressPhone = code + corporateHQAddressPhone;
            corporatePrimaryData.corporateLocalBranchAddressPhone = code2 + corporateLocalBranchAddressPhone;
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
            code={code}
            code2={code2}
            countryCodes={countryCodes}
            history={props.history}
            saveData={saveData}
            handlerChange={handlerChange}
            handleSubmit={handleSubmit}
        />

    )
}

export default Register;

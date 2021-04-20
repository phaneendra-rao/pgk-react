import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CorporateSecondaryCmp from '../../../../Components/Forms/CorporateCmp/RegisterCmp/CorporateSecondaryCmp';
import { GetCategoryListAction, SaveCoprorateData } from '../../../../Store/Actions/CorporateActions/CorporateAction';

const CorporateSecondary = (props) => {
    const initialState = {
        corporateType: '',
        corporateCategory: '',
        corporateIndustry: '',
        companyProfile: '',
        attachment: '',
        yearOfEstablishment: '',
    };
    const [corporateSecondary, setCorporateSecondary] = useState(initialState);
    const [errors, setErrors] = useState({ profileErr: '' });
    const [path, setPath] = useState('');

    const storeData = useSelector(state => state.CorporateReducer.corporatePrimaryState);
    const categoryList = useSelector(state => state.CorporateReducer.categoryList);

    const selectedName = localStorage.getItem('type');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetCategoryListAction(selectedName));
        // if (selectedName === 'Corporate') {
        // }
        if (storeData) {
            Object.keys(initialState).map(keyName => {
                for (const key in storeData) {
                    // console.log(keyName === key);
                    if (keyName === key) {
                        setCorporateSecondary(prevState => ({
                            ...prevState,
                            [key]: storeData[key]
                        }))
                    }
                }
            })
        }
        // console.log(corporateSecondary);

    }, []);

    const handleChangeImg = (event) => {
        event.preventDefault();
        if (event.target.files) {
            setCorporateSecondary(preState => ({
                ...preState,
                attachment: event.target.files[0]
            }))
            // console.log(event.target.files[0]);
            // if (event.target.files[0].type === "application/pdf")
            const val = event.target.files.length;
            for (let i = 0; i < val; i++) {
                let reader = new FileReader();
                reader.onload = function (ev) {
                    setPath(ev.target.result.split(',')[1]);
                    // localStorage.setItem('imgpath', ev.target.result.split(',')[1]);
                    // setPath(preState => ({
                    //     ...preState,
                    //     path: ev.target.result.split(',')[1]
                    // }))
                }.bind(this);
                reader.readAsDataURL(event.target.files[i]);
            }
        }
    }


    const handlerChange = (event) => {
        const { name, value } = event.target;

        if (name === "yearOfEstablishment") {
            let date = parseInt(value)
            setCorporateSecondary(preState => ({
                ...preState,
                [name]: date
            }));
        } else {
            setCorporateSecondary(preState => ({
                ...preState,
                [name]: value
            }));
        }

        switch (name) {
            case 'companyProfile':
                if (value) {
                    setErrors(preState => ({
                        ...preState,
                        profileErr: ''
                    }));
                } else if (!value) {
                    setErrors(preState => ({
                        ...preState,
                        profileErr: 'profile error'
                    }));
                }
                return;

            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { profileErr } = errors;
        const { corporateType, corporateCategory, companyProfile, attachment, yearOfEstablishment, corporateIndustry } = corporateSecondary;
        if (selectedName === 'Corporate') {
            if (corporateType && corporateCategory && companyProfile && attachment && yearOfEstablishment && !profileErr) {
                dispatch(SaveCoprorateData(corporateSecondary, 2));
                props.history.push('/register/contactPersonnel');

            } else {
                toast.error("Please enter required input fields")
            }
        } else if (selectedName === 'University') {
            if (corporateIndustry && companyProfile && attachment && yearOfEstablishment && !profileErr) {
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
            path={path}
            corporateSecondary={corporateSecondary}
            attachment={corporateSecondary.attachment}
            categoryList={categoryList}
            handleChangeImg={handleChangeImg}
            handlerChange={handlerChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default CorporateSecondary;

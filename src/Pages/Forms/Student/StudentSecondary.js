import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { StudentSignupAction, SaveCoprorateData } from '../../../Store/Actions/CorporateActions/CorporateAction';
import StudentSecondaryCmp from '../../../Components/Forms/StudentCmp/StudentSecondaryCmp';

const StudentSecondary = (props) => {
    const initialState = {
        gender: '',
        dateOfBirth: '',
        aadharNumber: '',
        studentProfile: '',
        attachment: '',
        password: '',
    };
    const [studentSecondary, setStudentSecondary] = useState(initialState);
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errors, setErrors] = useState({ passwordErr: '', repeatPasswordErr: '', addrErr: '' });
    const [path, setPath] = useState('');

    const storeData = useSelector(state => state.CorporateReducer.corporatePrimaryState);
    const categoryList = useSelector(state => state.CorporateReducer.categoryList);

    const selectedName = localStorage.getItem('type');

    const dispatch = useDispatch();

    useEffect(() => {
        if (storeData) {
            Object.keys(initialState).map(keyName => {
                for (const key in storeData) {
                    if (keyName === key) {
                        setStudentSecondary(prevState => ({
                            ...prevState,
                            [key]: storeData[key]
                        }))
                    }
                }
            })
        }
    }, []);

    const handleChangeImg = (event) => {
        event.preventDefault();
        if (event.target.files) {
            setStudentSecondary(preState => ({
                ...preState,
                attachment: event.target.files[0]
            }))
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
        if (name === "repeatPassword") {
            setRepeatPassword(value);
        } else {
            setStudentSecondary(preState => ({
                ...preState,
                [name]: value
            }));
        }

        switch (name) {
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
                if (value === studentSecondary.password) {
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

            // case 'companyProfile':
            //     if (value) {
            //         setErrors(preState => ({
            //             ...preState,
            //             profileErr: ''
            //         }));
            //     } else if (!value) {
            //         setErrors(preState => ({
            //             ...preState,
            //             profileErr: 'profile error'
            //         }));
            //     }
            //     return;

            default:
                break;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { passwordErr, repeatPasswordErr } = errors;
        const { password } = studentSecondary;
        if (password && !repeatPasswordErr && !passwordErr && (password === repeatPassword)) {
            const finalData = Object.assign(storeData, studentSecondary);
            await dispatch(SaveCoprorateData(finalData, 2));
            await dispatch(StudentSignupAction(finalData, props.history, selectedName));
            // props.history.push('/register/studentAuthentication');

        } else {
            toast.error("Please enter required input fields")
        }
    }

    return (
        <StudentSecondaryCmp
            history={props.history}
            errors={errors}
            selectedName={selectedName}
            path={path}
            studentSecondary={studentSecondary}
            attachment={studentSecondary.attachment}
            categoryList={categoryList}
            handleChangeImg={handleChangeImg}
            handlerChange={handlerChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default StudentSecondary;

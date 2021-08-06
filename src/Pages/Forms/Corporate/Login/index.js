import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import LoginForm from './LoginForm';
const $ = window.$;

const Login = (props) => {
    const [type, setType] = useState('Corporate');

    useEffect(() => {
        $('#role').modal({ backdrop: 'static', keyboard: false });
        // $('#role').modal('show');
        localStorage.setItem('type', 'Corporate');

    }, [])

    const closeModal = (event) => {
        event.preventDefault();
        if (type) {
            $('#role').modal('hide');
            localStorage.setItem('type', type);
        } else {
            toast.error('Please select one')
        }
    }


    const handlerChange = (event) => {
        const { name, value } = event.target;
        setType(value);
    }

    return (
        <>
            <section className="login">
                <div className="row m-0">
                    <div className="col-md-5 p-0 bg-red">
                        <div className="login-box">
                            <img src="/images/corporate/login-img.png" alt="login-img" className="login-img1" />
                            <h2 className="login-heading">PGK.</h2>
                            {
                                type === 'Corporate'
                                    ? <h3 className="login-subheading">for the perfect <br /> recruitment solutions</h3>
                                    : type === 'University'
                                        ? <h3 className="login-subheading">open the door of <br /> placement through us</h3>
                                        : <h3 className="login-subheading">a better way  <br /> to get your dream job</h3>
                            }
                            {
                                type === 'Corporate'
                                    ? <img src="/images/corporate/login-img1.png" alt="login-img" className="login-img2" />
                                    : type === 'University'
                                        ? <img src="/images/corporate/university-login.png" alt="login-img" className="login-img2 login-university-img" />
                                        : <img src="/images/corporate/student-login.png" alt="login-img" className="login-img2 login-student-img" />
                            }
                            {/* <img src="images/corporate/login-img1.png" alt="login-img" className="login-img2" /> */}
                        </div>
                    </div>
                    <div className="col-md-7 p-0">
                        <div className="login-box login-box1">
                            <img src="/images/corporate/login-img2.png" alt="login-img" className="login-img1 login-img3" />
                            <h4 className="login-title">Login as <span>{type}</span></h4>
                            <div className="line" />
                            <LoginForm history={props.history} type={type} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;

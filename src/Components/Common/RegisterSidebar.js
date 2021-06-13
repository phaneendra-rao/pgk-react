import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const RegisterSidebar = () => {
    const type = localStorage.getItem('type');
    const [stepUpdate, setStepUpdate] = useState(0);

    const steps = useSelector(state => state.CorporateReducer.steps);

    useEffect(() => {
        const step = sessionStorage.getItem('steps') || steps;
        setStepUpdate(parseInt(step))
        // console.log(steps, stepUpdate, (stepUpdate >= 1 ? '' : 'completed'));
        return () => {
            sessionStorage.removeItem('steps');
        }
    }, [steps]);

    return (
        <div className="login-box reg-box">
            <img src="../images/corporate/login-img.png" alt="login-img" className="login-img1" />
            <h2 className="login-heading">PGK.</h2>

            {type === 'Corporate'
                ? <>
                    <h3 className="login-subheading">for the perfect <br /> recruitment solutions</h3>
                    <ul className="stages">
                        <li className="stages-item">
                            <NavLink to="/register" exact className={`stages-link ${stepUpdate >= 1 ? 'completed' : ''}`}>
                                <div className="stage-circle">{stepUpdate >= 1 ? <i className="fas fa-check" /> : (null)}</div>
                                <p className="stage-link-txt">Corporate Primary</p>
                            </NavLink>
                        </li>
                        <li className="stages-item">
                            <NavLink to="/register/corporateSecondary" className={`stages-link ${stepUpdate >= 2 ? 'completed' : ''}`}>
                                <div className="stage-circle">{stepUpdate >= 2 ? <i className="fas fa-check" /> : null}</div>
                                <p className="stage-link-txt">Corporate Secondary</p>
                            </NavLink>
                        </li>
                        <li className="stages-item">
                            <NavLink to="/register/contactPersonnel" className={`stages-link ${stepUpdate >= 3 ? 'completed' : ''}`}>
                                <div className="stage-circle">{stepUpdate >= 3 ? <i className="fas fa-check" /> : null}</div>
                                <p className="stage-link-txt">Contact Personnel</p>
                            </NavLink>
                            <div className="stage-circle" />
                        </li>
                        <li className="stages-item">
                            <NavLink to="/register/Authentication" className={`stages-link ${stepUpdate >= 4 ? 'completed' : ''}`}>
                                <div className="stage-circle" />
                                <p className="stage-link-txt">Authentication</p>
                            </NavLink>
                        </li>
                    </ul>
                </>
                : type === 'University'
                    ? <>
                        <h3 className="login-subheading">open the door of <br /> placement through us</h3>
                        <ul className="stages">
                            <li className="stages-item">
                                <NavLink to="/register" exact className={`stages-link ${stepUpdate >= 1 ? 'completed' : ''}`}>
                                    <div className="stage-circle">{stepUpdate >= 1 ? <i className="fas fa-check" /> : (null)}</div>
                                    <p className="stage-link-txt">University Primary</p>
                                </NavLink>
                            </li>
                            <li className="stages-item">
                                <NavLink to="/register/corporateSecondary" className={`stages-link ${stepUpdate >= 2 ? 'completed' : ''}`}>
                                    <div className="stage-circle">{stepUpdate >= 2 ? <i className="fas fa-check" /> : (null)}</div>
                                    <p className="stage-link-txt">University Secondary</p>
                                </NavLink>
                            </li>
                            <li className="stages-item">
                                <NavLink to="/register/contactPersonnel" className={`stages-link ${stepUpdate >= 3 ? 'completed' : ''}`}>
                                    <div className="stage-circle">{stepUpdate >= 3 ? <i className="fas fa-check" /> : (null)}</div>
                                    <p className="stage-link-txt">Contact Personnel</p>
                                </NavLink>
                                <div className="stage-circle" />
                            </li>
                            <li className="stages-item">
                                <NavLink to="/register/Authentication" className={`stages-link ${stepUpdate >= 4 ? 'completed' : ''}`}>
                                    <div className="stage-circle">{stepUpdate >= 4 ? <i className="fas fa-check" /> : (null)}</div>
                                    <p className="stage-link-txt">Authentication</p>
                                </NavLink>
                            </li>
                        </ul>
                    </>
                    : <>
                        <h3 className="login-subheading">a better way <br /> to get your dream job</h3>
                        <ul className="stages">
                            <li className="stages-item">
                                <NavLink to="/register/studentRegister" exact className={`stages-link ${stepUpdate >= 1 ? 'completed' : ''}`}>
                                    <div className="stage-circle">{stepUpdate >= 1 ? <i className="fas fa-check" /> : (null)}</div>
                                    <p className="stage-link-txt">Student Primary</p>
                                </NavLink>
                            </li>
                            <li className="stages-item">
                                <NavLink to="/register/studentSecondary" className={`stages-link ${stepUpdate >= 2 ? 'completed' : ''}`}>
                                    <div className="stage-circle">{stepUpdate >= 2 ? <i className="fas fa-check" /> : (null)}</div>
                                    <p className="stage-link-txt">Student Personal</p>
                                </NavLink>
                            </li>
                            <li className="stages-item">
                                <NavLink to="/register/studentAuthentication" className={`stages-link ${stepUpdate >= 3 ? 'completed' : ''}`}>
                                    <div className="stage-circle">{stepUpdate >= 3 ? <i className="fas fa-check" /> : (null)}</div>
                                    <p className="stage-link-txt">Authentication</p>
                                </NavLink>
                            </li>
                        </ul>
                    </>}
        </div>
    )
}

export default RegisterSidebar;

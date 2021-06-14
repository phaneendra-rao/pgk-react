import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import RegisterSidebar from '../Common/RegisterSidebar';
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { actionGetUniversalAccessToken } from '../../Store/Actions/SagaActions/CommonSagaActions';
// import Register from '../../Pages/Forms/Corporate/Register/Register';
// import CorporateSecondary from '../../Pages/Forms/Corporate/Register/CorporateSecondary';

const RegisterLayout = (props) => {

    const apiStatus = useSelector(state => state.CorporateReducer.apiStatus);
    const universalTutorialAccessToken = useSelector(state => state.DashboardReducer.universalTutorialAccessToken);
    const dispatch = useDispatch();

    useEffect(() => {
       if (props.match.url === '/register' && !universalTutorialAccessToken) {
           dispatch(actionGetUniversalAccessToken());
       }
    }, [])

    const getRoutes = (routes) => {
        return routes.map((route, i) => {
            if (route.role === 'corporateReg') {
                return route.component ? (<Route path={route.path}
                    key={i}
                    exact={route.exact}
                    strict={route.strict}
                    name={route.name}
                    render={props => <route.component {...props} />}
                />) : (null)
            }
        });
    }

    const type = localStorage.getItem('type');


    return (
        <>
            {apiStatus
                ? <div className="loader">
                    <svg width="100px" height="100px" version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                        <circle fill="none" stroke="red" strokeWidth={4} cx={50} cy={50} r={44} style={{ opacity: '0.5' }} />
                        <circle fill="#fff" stroke="#e74c3c" strokeWidth={3} cx={8} cy={54} r={6}>
                            <animateTransform attributeName="transform" dur="2s" type="rotate" from="0 50 48" to="360 50 52" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
                :
                (null)}
            <section className="login">
                <div className="row m-0">
                    <div className="col-md-4 p-0 bg-red">
                        <RegisterSidebar />
                    </div>
                    <div className="col-md-8 p-0">
                        <div className="login-box login-box1">
                            {/* <img src="images/corporate/login-img.png" alt="login-img" className="login-img1" /> */}
                            <img src="../images/corporate/login-img2.png" alt="login-img" className="login-img1 login-img3" />
                            <h4 className="login-title">Register as <span>{type}</span></h4>
                            <div className="line" />
                            <Switch>
                                {getRoutes(routes)}
                                {/* <Redirect to="/404" from="*" /> */}
                            </Switch>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterLayout

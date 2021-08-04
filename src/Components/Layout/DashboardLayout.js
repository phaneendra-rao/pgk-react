import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import routes from '../../routes';
import DashboardHeader from '../Common/DashboardHeader';
import DashboardSidebar from '../Common/DashboardSidebar';
import HeaderModalForm from '../Common/HeaderModalForm';
import { useSelector } from 'react-redux';


const DashboardLayout = () => {
    const apiStatus = useSelector(state => state.DashboardReducer.apiStatus);

    const getRoutes = (routes) => {
        const token = localStorage.getItem('token');
        const type = localStorage.getItem('type');
        if (!token && type !== 'Corporate')
            return <Redirect to="/"/>
        return routes.map((route, i) => {
            if (route.role === 'dashboard') {
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


    

    return (
        <>
            {apiStatus ?
                <div className="loader" style={{position: 'fixed'}}>
                    <svg width="100px" height="100px" version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                        <circle fill="none" stroke="red" strokeWidth={4} cx={50} cy={50} r={44} style={{ opacity: '0.5' }} />
                        <circle fill="#fff" stroke="#e74c3c" strokeWidth={3} cx={8} cy={54} r={6}>
                            <animateTransform attributeName="transform" dur="2s" type="rotate" from="0 50 48" to="360 50 52" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
            : null}
            <div className="main-body">
                <DashboardSidebar />
                <div className="main-container">
                    <DashboardHeader />
                    <div className="page-body">
                        <Switch>
                            {getRoutes(routes)}
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardLayout;

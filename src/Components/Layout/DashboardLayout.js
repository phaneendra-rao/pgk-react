import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import routes from '../../routes';
import DashboardHeader from '../Common/DashboardHeader';
import DashboardSidebar from '../Common/DashboardSidebar';
import HeaderModalForm from '../Common/HeaderModalForm';

const DashboardLayout = () => {

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
    )
}

export default DashboardLayout;

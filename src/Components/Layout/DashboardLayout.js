import React from 'react';
import { Route, Switch } from 'react-router';
import routes from '../../routes';
import DashboardHeader from '../Common/DashboardHeader';
import DashboardSidebar from '../Common/DashboardSidebar';
import HeaderModalForm from '../Common/HeaderModalForm';

const DashboardLayout = () => {

    const getRoutes = (routes) => {
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
            <div className="modal fade" id="balance" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content purchase-modal">
                        <div className="modal-header purchase-modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        {/* <form>
                            <div className="modal-body purchase-modal-body d-flex flex-column justify-content-center align-items-center">
                                <p className="heading">How many credits would you like to purchase ?</p>
                                <input type="number" name="credit_points" className="form-control credits-input" required />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="modal-footer-full-btn w-100 border-0">
                                    Purchase
                            </button>
                            </div>
                        </form> */}
                        <HeaderModalForm />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DashboardLayout;

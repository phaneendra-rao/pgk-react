import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';

const Layout = (props) => {
    const [status, setStatus] = useState(false);

    // useEffect(() => {
    //     if (apiStatus) {
    //         setStatus(true);
    //         // props.history.push('/register/authentication');
    //     }
    //     // return () => {
    //     //     dispatch(ResetRdrAction());
    //     // }
    // }, [apiStatus])

    const getRoutes = (routes) => {
        return routes.map((route, i) => {
            return route.component ? (<Route path={route.path}
                key={i}
                exact={route.exact}
                strict={route.strict}
                name={route.name}
                render={props => <route.component {...props} />}
            />) : (null)
        });
    }

    return (
        <>
            <Switch>
                {getRoutes(routes)}
                {/* <Redirect to="/404" from="*" /> */}
            </Switch>

        </>
    )
}

export default Layout;

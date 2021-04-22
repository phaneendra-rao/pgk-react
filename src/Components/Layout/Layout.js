import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import routes from '../../routes';

const Layout = (props) => {
    const [status, setStatus] = useState(false);
    const apiStatus = useSelector(state => state.CorporateReducer.apiStatus);

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
            {apiStatus ?
                <div className="loader">
                    <svg width="100px" height="100px" version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
                        <circle fill="none" stroke="red" strokeWidth={4} cx={50} cy={50} r={44} style={{ opacity: '0.5' }} />
                        <circle fill="#fff" stroke="#e74c3c" strokeWidth={3} cx={8} cy={54} r={6}>
                            <animateTransform attributeName="transform" dur="2s" type="rotate" from="0 50 48" to="360 50 52" repeatCount="indefinite" />
                        </circle>
                    </svg>
                </div>
                : null}
            <Switch>
                {getRoutes(routes)}
                {/* <Redirect to="/404" from="*" /> */}
            </Switch>

        </>
    )
}

export default Layout;

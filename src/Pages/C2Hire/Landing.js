import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/'
import { Route, Router, Switch } from 'react-router';

import { useDispatch } from 'react-redux';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import C2hireHeader from './Common/Header';
import C2hireHome from './Common/Home';
import C2hireFooter from './Common/Footer';
import routes from '../../routes';


const Landing = () => {

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
         <div>

            <C2hireHeader />
            <Switch>
                {getRoutes(routes)}
            </Switch>
            <C2hireFooter />
        </div>
        </>
    )
}

export default Landing;

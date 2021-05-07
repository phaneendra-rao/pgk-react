import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux';

import { actionGetAnalyticsBiAccessTokenRequest } from '../../../Store/Actions/SagaActions/AnalyticsSagaActions';

const Analytics = () => {
    const dispatch = useDispatch();

    const onResponse = (response) => {
        // accessToken and refreshToken
        
        console.log('onResponse ', response);
    }

    useEffect(()=>{
        dispatch(actionGetAnalyticsBiAccessTokenRequest({
            callback: onResponse
        }));
    }, [dispatch])

  return ( 
    <>
      <div className="main" style={{marginTop:10}}>
        <h3 className="main-title">Analytics</h3>
      </div>

    </>
  )
}

export default Analytics;

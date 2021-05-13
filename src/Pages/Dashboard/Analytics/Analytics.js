import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import { actionGetAnalyticsBiAccessTokenRequest } from '../../../Store/Actions/SagaActions/AnalyticsSagaActions';

const Analytics = () => {
    const dispatch = useDispatch();
    const [accessToken, setAccessToken] = useState();
    const [reportId, setReportId] = useState();

    const onResponse = (response) => {
        // accessToken and refreshToken
        setAccessToken(response?.accessToken)
        setReportId(response?.reportID)
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
      {accessToken && reportId && <PowerBIEmbed
          embedConfig = {{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: reportId, 
            embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${reportId}`,
            accessToken: accessToken,    // Keep as empty string, null or undefined
            settings: {},
          }}
          cssClassName = {"analytics-reports-style"}
        />}
    </>
  )
}

export default Analytics;

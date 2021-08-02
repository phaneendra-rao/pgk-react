import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import { actionGetAnalyticsBiAccessTokenRequest, actionGetAnalyticsBiReportIdsRequest } from '../../../Store/Actions/SagaActions/AnalyticsSagaActions';
import { actionGetDependencyLookUpsSagaAction } from '../../../Store/Actions/SagaActions/CommonSagaActions';

const Analytics = () => {
    const dispatch = useDispatch();
    const [accessToken, setAccessToken] = useState();
    const [reportId, setReportId] = useState();

    const onResponse = (response) => {
        // accessToken and refreshToken
        setAccessToken(response?.accessToken)
    }

    const getReports = (reportName) => {
      dispatch(actionGetAnalyticsBiReportIdsRequest({
        apiPayloadRequest: {
          reportName: reportName
        },
        callback: (response) => {
          if(response?.reportID) {
            setReportId(response.reportID);
          }
        }
      }))
    }

    useEffect(()=>{
        dispatch(actionGetAnalyticsBiAccessTokenRequest({
            callback: onResponse
        }));
        dispatch(actionGetDependencyLookUpsSagaAction({
          apiPayloadRequest: ['reportNames'],
          callback: (list) => {
              if(list?.reportNames?.length) {
                const singleReport = list.reportNames.find((item) => item.stakeholderType==='C');
                if(singleReport?.reportName) {
                  getReports(singleReport?.reportName);
                }
              }
          }
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
            embedUrl: `https://app.powerbi.com/reportEmbed?reportId=${reportId}&filterPaneEnabled=false&navContentPaneEnabled=false`,
            accessToken: accessToken,    // Keep as empty string, null or undefined
            settings: {},
          }}
          cssClassName = {"analytics-reports-style"}
        />}
    </>
  )
}

export default Analytics;

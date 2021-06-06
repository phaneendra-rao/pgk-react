import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([]);
    const dispatch = useDispatch();

    const getResponse = (dataList) => {
      if(dataList?.transactionsHistory?.length) {
        setTransactions(dataList?.transactionsHistory);
      }
    }

    useEffect(()=>{
      dispatch({
        type: 'get_all_transactions',
        payload: {
          callback: getResponse
        }
      })
    }, [])

  return ( 
    <>
      <div className="row jobs-saved-section" style={{margin:'10px 0px'}}>
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full" style={{fontWeight: '400'}}>Subscription Transaction History</p>
        </div>
      </div>
      <div className={'transaction-container'}>
        {[1,1,1,1,1,1,1,1,1,1,1].map((element, index) => {
            return <div className={'sub-transaction-item row'} key={index}>
            <div className={'col-md-2'}><p className={'label'}>COEs Offered</p></div>
            <div className={'col-md-2'}><p className={'sub-label'}>Profile</p></div>
            <div className={'col-md-2'}><p className={'sub-label'}>SRM University</p></div>
            <div className={'col-md-2'}><p className={'tokens'}>20 Tokens</p></div>
            <div className={'col-md-2'}><p className={'end-label'}>Date - 10/02/21 </p></div>
            <div className={'col-md-2'}><p className={'end-label'}>Transaction ID - xxxxxxxxxxxx</p></div>
          </div>
        })}
      </div>
      <div className="row jobs-saved-section" style={{margin:'10px 0px'}}>
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full" style={{fontWeight: '400'}}>Transaction History</p>
        </div>
      </div>
      <div className={'transaction-container'}>
        {transactions.map((tran, index) => {
            return <div className={'main-transaction-item row'} key={index}>
            <div className={'col-md-3'}><p className={'tokens'}>{tran?.allocatedTokens!==undefined ? `${tran.allocatedTokens} Tokens` : ''}</p></div>
            <div className={'col-md-2'}><p className={'label'}>Rs. {tran?.amountPaid}</p></div>
            <div className={'col-md-3'}><p className={'end-label'}>Time & Date - {moment(tran?.allocatedDate).format('MMMM Do YYYY, h:mm:ss a')} </p></div>
            <div className={'col-md-2'}><p className={'label'}>{tran?.modeOfTokenissue}</p></div>
            <div className={'col-md-2'}><p className={'end-label'}>Transaction ID - {tran?.paymentID}</p></div>
          </div>
        })}
      </div>
    </>
  )
}

export default TransactionHistory;

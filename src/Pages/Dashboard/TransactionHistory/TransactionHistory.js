import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getTransactionHistoryRequest} from '../../../Store/Actions/SagaActions/TransactionHistoryActions';
import moment from 'moment';

const TransactionHistory = () => {
    const [transactions, setTransactions] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);
    const dispatch = useDispatch();

    const getResponse = (dataList) => {
      if(dataList?.transactionsHistory?.length) {
        setTransactions(dataList?.transactionsHistory);
      }

      if(dataList?.subscriptionHistory?.length) {
        setSubscriptions(dataList?.subscriptionHistory);
      }
    }

    useEffect(()=>{
      dispatch(getTransactionHistoryRequest({
        callback: getResponse
      }))
    }, []);

  return ( 
    <>
      <div className="row jobs-saved-section" style={{margin:'10px 0px'}}>
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full" style={{fontWeight: '400'}}>Subscription Transaction History</p>
        </div>
      </div>
      <div className={'transaction-container'}>
        {subscriptions.map((element, index) => {
            return <div className={'sub-transaction-item row'} key={index}>
            <div className={'col-md-2'}><p className={'label'}>COEs Offered {element?.generalNote}</p></div>
            <div className={'col-md-2'}><p className={'sub-label'}>{element?.publisherName}</p></div>
            <div className={'col-md-3 d-flex justify-content-between align-items-center'}><p className={'tokens'}>{element?.paidTokensTransacted} Paid Tokens</p> <p className={'tokens'} style={{backgroundColor: 'rgb(254, 173, 67)'}}>{element?.bonusTokensTransacted} Bonus Tokens</p></div>
            <div className={'col-md-2'}><p className={'end-label'}>Date - {moment(element?.transactionDate).format('DD-MM-YYYY')} </p></div>
            <div className={'col-md-3'}><p className={'end-label'}>Transaction ID - {element?.transactionID}</p></div>
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
            <div className={'col-md-3'}><p className={'end-label'}>Date & Time - {moment(tran?.allocatedDate).format('MMMM Do YYYY, h:mm:ss a')} </p></div>
            <div className={'col-md-2'}><p className={'label'}>{tran?.modeOfTokenissue}</p></div>
            <div className={'col-md-2'}><p className={'end-label'}>Transaction ID - {tran?.paymentID}</p></div>
          </div>
        })}
      </div>
    </>
  )
}

export default TransactionHistory;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {getTransactionHistoryRequest} from '../../../Store/Actions/SagaActions/TransactionHistoryActions';
import moment from 'moment';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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

    const [tabValue, setTabValue] = useState(0);

    const handleChange = (event, newValue) => {
      setTabValue(newValue);
    };

  return ( 
    <>
      <div className="page-body" style={{ marginTop: 30 }}>
        <p className="heading text-center" style={{fontWeight: "bold"}}>Transaction History</p>
        <div className="row">
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor={'primary'}
            style={{backgroundColor: 'white', width: '100%'}}
          >
            <Tab label="Token Subscription History" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
            <Tab label="Token Purchase History" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
          </Tabs>
        </div>
        {tabValue === 0 && <div className={'transaction-container'}>
        {subscriptions.map((element, index) => {
            return <div className={'sub-transaction-item row'} key={index}>
            <div className={'col-md-2'}><p className={'label'} style={{fontWeight: 'bold'}}>COEs Offered {element?.generalNote}</p></div>
            <div className={'col-md-2'}><p className={'sub-label'}>{element?.publisherName}</p></div>
            <div className={'col-md-3 d-flex justify-content-between align-items-center'}><p className={'tokens'}>{element?.paidTokensTransacted} Paid Tokens</p> <p className={'tokens'} style={{backgroundColor: 'rgb(254, 173, 67)'}}>{element?.bonusTokensTransacted} Bonus Tokens</p></div>
            <div className={'col-md-2'}><p className={'end-label text-center'} style={{fontWeight: 'bolder'}}>Date</p><p className={'end-label text-center'} style={{fontWeight: '600'}}>{moment(element?.transactionDate).format('DD-MMM-YYYY')}</p></div>
            <div className={'col-md-3'}><p className={'end-label text-center'} style={{fontWeight: 'bolder'}}>Transaction ID</p><p className={'end-label text-center'} style={{fontWeight: '600'}}>{element?.transactionID}</p></div>
          </div>
        })}
      </div>}
      {tabValue === 1 && <div className={'transaction-container'}>
        {transactions.map((tran, index) => {
            return <div className={'main-transaction-item row'} key={index}>
            <div className={'col-md-3'}><p className={'tokens'}>{tran?.allocatedTokens!==undefined ? `${tran.allocatedTokens} Tokens` : ''}</p></div>
            <div className={'col-md-2'}><p className={'label'} style={{fontWeight: '600'}}>Rs. {tran?.amountPaid}</p></div>
            <div className={'col-md-3'}><p className={'end-label text-center'} style={{fontWeight: 'bolder'}}>Date & Time</p><p className={'end-label text-center'} style={{fontWeight: '600'}}>{moment(tran?.allocatedDate).format('MMMM Do YYYY, h:mm:ss a')}</p></div>
            <div className={'col-md-2'}><p className={'label'} style={{fontWeight: '600'}}>{tran?.modeOfTokenissue} Tokens</p></div>
            <div className={'col-md-2'}><p className={'end-label text-center'} style={{fontWeight: 'bolder'}}>Transaction ID</p><p className={'end-label text-center'} style={{fontWeight: '600'}}>{tran?.paymentID}</p></div>
          </div>
        })}
      </div>}
      </div>

    </>
  )
}

export default TransactionHistory;

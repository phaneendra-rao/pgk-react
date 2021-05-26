import React, { useState, useEffect } from 'react'

const TransactionHistory = () => {
    

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
        {[1,1,1,1,1,1,1,1,1,1,1,1,1].map((element, index) => {
            return <div className={'main-transaction-item row'} key={index}>
            <div className={'col-md-3'}><p className={'tokens'}>20 Tokens</p></div>
            <div className={'col-md-2'}><p className={'label'}>Rs. 1500</p></div>
            <div className={'col-md-3'}><p className={'end-label'}>Time & Date - 12h-6m-32s 10/02/2021 </p></div>
            <div className={'col-md-2'}><p className={'label'}>Bonus Tokens</p></div>
            <div className={'col-md-2'}><p className={'end-label'}>Transaction ID - xxxxxxxxxxxx</p></div>
          </div>
        })}
      </div>
    </>
  )
}

export default TransactionHistory;

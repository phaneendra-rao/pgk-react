import React, { useState, useEffect } from 'react'

const CampusDrive = () => {

  return ( 
    <>
    {/* <div className={'notification'}>
      <div className={'close-notification'}>
        <i className={'fas fa-times'}></i>
      </div>
      <div className={'notification-header d-flex justify-content-between align-items-center'}>
        <div className={'d-flex flex-column justify-content-center align-items-center'}>
          <p className={'heading'}>Notification from</p>
          <p className={'heading'}>Osmania University</p>
        </div>
        <button type="button" className={"btn status-btn"}>Rejected</button>
      </div>
      <div className={'notification-body d-flex flex-column justify-content-center align-items-center'}>
        <table className={'table table-responsive table-borderless w-full'}>
          <tbody>
            <tr>
              <td className={'keyLabel'}>University Name</td>
              <td className={'valueLabel'}>Osmania University</td>
            </tr>
            <tr>
              <td className={'keyLabel'}>Location</td>
              <td className={'valueLabel'}>Hyderabad</td>
            </tr>
            <tr>
              <td className={'keyLabel'}>Year of Establishment</td>
              <td className={'valueLabel'}>1917</td>
            </tr>
            <tr>
              <td className={'keyLabel'}>University ID</td>
              <td className={'valueLabel'}>XXXXXXXXX</td>
            </tr>
            <tr>
              <td className={'keyLabel'}>Accredation</td>
              <td className={'valueLabel'}>NAAC 'A'</td>
            </tr>
            <tr>
              <td className={'keyLabel'}>Type of Request</td>
              <td className={'valueLabel'}>Campus Hiring from University</td>
            </tr>
            <tr>
              <td className={'keyLabel'}>Request made on</td>
              <td className={'valueLabel'}>15-Apr-2020</td>
            </tr>
          </tbody>
        </table>
        <div className={'notification-body-footer inherit'}>
          <div className={'heading'}>
            <p className={'label'}>Reason for Rejection</p>
          </div>
          <p className={'body'}>We need CSE students with an introduction to Java which does not seem to be there in curriculam </p>
        </div>
      </div>
      <div className={'notification-footer d-flex justify-content-around align-items-center'}>
        <button type="button" className={"btn btn-view-more-info"}>View more info</button>
        <button type="button" className={"btn btn-accept"}>Accept</button>
        <button type="button" className={"btn btn-reject"}>Reject</button>
      </div>
    </div> */}
      <div className="main" style={{marginTop:'10px', marginBottom: '0px'}}>
        <h3 className="main-title" style={{color:'#878BA6'}}>CAMPUS DRIVE</h3>
      </div>
      <div className="row jobs-saved-section" style={{margin:'0px'}}>
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full" style={{textAlign:'left', backgroundColor:'#BCBECC', color: 'black', fontSize: '1.2rem', fontWeight: 'bolder'}}>Requests Received</p>
        </div>
      </div>
      <div style={{height: '200px', overflow:'scroll'}}>
        {[1,1,1,1,1,1,1,1].map(item=>{
          return <div className={'row campus-drive-comp d-flex justify-between align-items-center'}>
          <div className={'col-md-4 univ-comp d-flex justify-between align-items-center'}>
            <div className={'univ-icon'}>
              <i className={'fas fa-university'}></i>
            </div>
            <div className={'univ-info d-flex flex-column justify-center'}>
              <p className={'univ-title'}>Osmania University</p>
              <p className={'univ-sub-title'}>has requested you to attend their campus drive</p>
            </div>
          </div>
          <div className={'col-md-2'}>
            <p className={'date'}>Received on 15-04-2020 14:22:23</p>
          </div>
          <div className={'col-md-3 d-flex justify-between'}>
              <button type="button" className={"btn btn-accept"}>Accept</button>
              <button type="button" className={"btn btn-reject"}>Reject</button>
          </div>
          <div className={'col-md-1'}>
              <button type="button" className={"btn btn-view-more"}>View more info</button>
          </div>
        </div>
        })}
      </div>
      <div className="main" style={{margin: '0px', padding: '10px'}}>
        <h3 style={{color:'#878BA6', fontWeight: '600', fontSize: '1.6rem', textAlign:'center'}}>History</h3>
      </div>
      <div style={{height: '200px', overflow:'scroll'}}>
        {[1,0,1,1,0,1,1,0].map(item=>{
          return <div className={'row campus-drive-comp d-flex justify-between align-items-center'}>
          <div className={'col-md-4 univ-comp d-flex justify-between align-items-center'}>
            <div className={'univ-icon'}>
              <i className={'fas fa-university'}></i>
            </div>
            <div className={'univ-info d-flex flex-column justify-center'}>
              <p className={'univ-title'}>Osmania University</p>
              <p className={'univ-sub-title'}>has requested you to attend their campus drive</p>
            </div>
          </div>
          <div className={'col-md-2'}>
            <p className={'date'}>Received on 15-04-2020 14:22:23</p>
          </div>
          <div className={'col-md-3 d-flex justify-between'}>
              {item ? <button type="button" className={"btn btn-history-accepted"}><p className={'label'}>Accepted</p><p className={'subLabel'}>on 2-2-2020 16.30.23</p></button> : <button type="button" className={"btn btn-history-rejected"}><p className={'label'}>Rejected</p><p className={'subLabel'}>on 2-2-2020 16.30.23</p></button>}
          </div>
          {!item ? <div className={'col-md-1'}>
              <button type="button" className={"btn btn-view-more"}>View more info</button>
          </div> : null}
        </div>
        })}
      </div>
      <div className="row jobs-saved-section" style={{margin:'0px'}}>
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full" style={{textAlign:'left', backgroundColor:'#BCBECC', color: 'black', fontSize: '1.2rem', fontWeight: 'bolder'}}>Requests Sent</p>
        </div>
      </div>
      <div style={{height: '200px', overflow:'scroll'}}>
        {[1,1,1,1,1,1,1,1].map(item=>{
          return <div className={'row campus-drive-comp d-flex justify-between align-items-center'}>
          <div className={'col-md-4 univ-comp d-flex justify-between align-items-center'}>
            <div className={'univ-icon'}>
              <i className={'fas fa-university'}></i>
            </div>
            <div className={'univ-info d-flex flex-column justify-center'}>
              <p className={'univ-title'}>Osmania University</p>
              <p className={'univ-sub-title'}>Your requested to attend campus drive has been sent</p>
            </div>
          </div>
          <div className={'col-md-2'}>
            <p className={'date'}>Received on 15-04-2020 14:22:23</p>
          </div>
          <div className={'col-md-3 d-flex justify-between'}>

          </div>
          <div className={'col-md-1'}>
              <button type="button" className={"btn btn-view-more"}>View more info</button>
          </div>
        </div>
        })}
      </div>
      <div className="main" style={{margin: '0px', padding: '10px'}}>
        <h3 style={{color:'#878BA6', fontWeight: '600', fontSize: '1.6rem', textAlign:'center'}}>History</h3>
      </div>
      <div style={{height: '200px', overflow:'scroll'}}>
        {[1,0,1,1,0,1,1,0].map(item=>{
          return <div className={'row campus-drive-comp d-flex justify-between align-items-center'}>
          <div className={'col-md-4 univ-comp d-flex justify-between align-items-center'}>
            <div className={'univ-icon'}>
              <i className={'fas fa-university'}></i>
            </div>
            <div className={'univ-info d-flex flex-column justify-center'}>
              <p className={'univ-title'}>Osmania University</p>
              <p className={'univ-sub-title'}>has requested you to attend their campus drive</p>
            </div>
          </div>
          <div className={'col-md-2'}>
            <p className={'date'}>Received on 15-04-2020 14:22:23</p>
          </div>
          <div className={'col-md-3 d-flex justify-between'}>
              {item ? <button type="button" className={"btn btn-history-accepted"}><p className={'label'}>Accepted</p><p className={'subLabel'}>on 2-2-2020 16.30.23</p></button> : <button type="button" className={"btn btn-history-rejected"}><p className={'label'}>Rejected</p><p className={'subLabel'}>on 2-2-2020 16.30.23</p></button>}
          </div>
          {!item ? <div className={'col-md-1'}>
              <button type="button" className={"btn btn-view-more"}>View more info</button>
          </div> : null}
        </div>
        })}
      </div>
    </>
  )
}

export default CampusDrive;

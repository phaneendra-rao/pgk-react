import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {
  actionGetCampusDriveInvites,
  actionPostRespondToCampusDriveRequest,
} from "../../../Store/Actions/SagaActions/CampusDriveSagaActions";
import moment from 'moment';

const CampusDrive = () => {

  const dispatch = useDispatch();

  const [requests, setRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);

  const getCampusDriveInvites = () => {
    dispatch(actionGetCampusDriveInvites({
      callback: (data)=>{
        console.log('data ', data);
        
        if(data?.campusInviteReceived?.length) {
          // setRequests(data?.campusInviteReceived);
        }

        if(data?.campusInviteSent?.length) {
          // setSentRequests(data?.campusInvitesSent);
        }

        setRequests([
          {
              "initiatorID": "UA20210000000009",
              "initiatorName": "Divi University Of Technology",
              "initiatorLocation": "Hyderbad",
              "receiverID": "CJC19870000000002",
              "campusDriveID": "UCPI90000002",
              "campusDriveRequested": true,
              "requestedDate": "2021-06-12T09:16:08Z",
              "responseDate": "",
              "campusDriveStatus": "Pending",
              "nftID": "NFTUNV90000007"
          },
          {
              "initiatorID": "UA20210000000009",
              "initiatorName": "Divi University Of Technology",
              "initiatorLocation": "Hyderbad",
              "receiverID": "CJC19870000000002",
              "campusDriveID": "UCPI90000001",
              "campusDriveRequested": true,
              "requestedDate": "2021-06-12T09:13:26Z",
              "responseDate": "",
              "campusDriveStatus": "Pending",
              "nftID": "NFTUNV90000006"
          },
          {
              "initiatorID": "UA20210000000008",
              "initiatorName": "Gayathri Blossom University2",
              "initiatorLocation": "Hyderabad",
              "receiverID": "CJC19870000000002",
              "campusDriveID": "UCPI80000001",
              "campusDriveRequested": true,
              "requestedDate": "2021-06-14T11:55:09Z",
              "responseDate": "",
              "campusDriveStatus": "Pending",
              "nftID": "NFTUNV80000001"
          },
          {
              "initiatorID": "UD19940000000002",
              "initiatorName": "SRM2",
              "initiatorLocation": "Banglore",
              "receiverID": "CJC19870000000002",
              "campusDriveID": "UCPI20000024",
              "campusDriveRequested": true,
              "requestedDate": "2021-06-09T13:21:31Z",
              "responseDate": "2021-06-09T13:22:44Z",
              "campusDriveStatus": "Accepted",
              "nftID": "NFTCRP20000043"
          },
          {
              "initiatorID": "UD19940000000002",
              "initiatorName": "SRM2",
              "initiatorLocation": "Banglore",
              "receiverID": "CJC19870000000002",
              "campusDriveID": "UCPI20000019",
              "campusDriveRequested": true,
              "requestedDate": "2021-06-13T18:03:58Z",
              "responseDate": "",
              "campusDriveStatus": "Pending",
              "nftID": "NFTUNV20000069"
          },
          {
              "initiatorID": "UD19940000000002",
              "initiatorName": "SRM2",
              "initiatorLocation": "Banglore",
              "receiverID": "CJC19870000000002",
              "campusDriveID": "UCPI20000006",
              "campusDriveRequested": true,
              "requestedDate": "2021-05-11T14:30:10Z",
              "responseDate": "",
              "campusDriveStatus": "Pending",
              "nftID": "NFTUNV20000019"
          },
          {
              "initiatorID": "UD19940000000002",
              "initiatorName": "SRM2",
              "initiatorLocation": "Banglore",
              "receiverID": "CJC19870000000002",
              "campusDriveID": "UCPI20000005",
              "campusDriveRequested": true,
              "requestedDate": "2021-05-11T12:59:20Z",
              "responseDate": "2021-05-11T13:00:48Z",
              "campusDriveStatus": "Accepted",
              "nftID": "NFTCRP20000036"
          },
          {
              "initiatorID": "UD19940000000002",
              "initiatorName": "SRM2",
              "initiatorLocation": "Banglore",
              "receiverID": "CJC19870000000002",
              "campusDriveID": "UCPI20000002",
              "campusDriveRequested": true,
              "requestedDate": "2021-05-08T17:09:10Z",
              "responseDate": "",
              "campusDriveStatus": "Pending",
              "nftID": "NFTUNV20000011"
          }
      ]);

        setSentRequests([
          {
              "initiatorID": "CJC19870000000002",
              "receiverID": "UD19940000000002",
              "receiverName": "SRM2",
              "receiverLocation": "Banglore",
              "campusDriveID": "CCDI20000007",
              "campusDriveRequested": true,
              "requestedDate": "2021-06-10T06:23:04Z",
              "responseDate": "2021-06-13T18:12:17Z",
              "campusDriveStatus": "Accepted",
              "nftID": "NFTUNV20000070"
          },
          {
              "initiatorID": "CJC19870000000002",
              "receiverID": "UD19940000000002",
              "receiverName": "SRM2",
              "receiverLocation": "Banglore",
              "campusDriveID": "CCDI20000006",
              "campusDriveRequested": true,
              "requestedDate": "2021-06-10T06:22:49Z",
              "responseDate": "2021-06-14T12:15:45Z",
              "campusDriveStatus": "Accepted",
              "nftID": "NFTUNV20000071"
          },
          {
              "initiatorID": "CJC19870000000002",
              "receiverID": "UD19940000000002",
              "receiverName": "SRM2",
              "receiverLocation": "Banglore",
              "campusDriveID": "CCDI20000005",
              "campusDriveRequested": true,
              "requestedDate": "2021-05-11T13:05:42Z",
              "responseDate": "2021-05-11T13:10:58Z",
              "campusDriveStatus": "Accepted",
              "nftID": "NFTUNV20000018"
          },
          {
              "initiatorID": "CJC19870000000002",
              "receiverID": "UD19940000000002",
              "receiverName": "SRM2",
              "receiverLocation": "Banglore",
              "campusDriveID": "CCDI20000004",
              "campusDriveRequested": true,
              "requestedDate": "2021-05-11T13:02:42Z",
              "responseDate": "2021-06-09T12:34:46Z",
              "campusDriveStatus": "Accepted",
              "nftID": "NFTUNV20000056"
          },
          {
              "initiatorID": "CJC19870000000002",
              "receiverID": "UD19940000000002",
              "receiverName": "SRM2",
              "receiverLocation": "Banglore",
              "campusDriveID": "CCDI20000003",
              "campusDriveRequested": true,
              "requestedDate": "2021-05-08T17:06:54Z",
              "responseDate": "2021-06-09T12:58:14Z",
              "campusDriveStatus": "Accepted",
              "nftID": "NFTUNV20000058"
          },
          {
              "initiatorID": "CJC19870000000002",
              "receiverID": "UD19940000000002",
              "receiverName": "SRM2",
              "receiverLocation": "Banglore",
              "campusDriveID": "CCDI20000002",
              "campusDriveRequested": true,
              "requestedDate": "2021-05-08T16:29:44Z",
              "responseDate": "2021-06-09T12:56:30Z",
              "campusDriveStatus": "Accepted",
              "nftID": "NFTUNV20000057"
          },
          {
              "initiatorID": "CJC19870000000002",
              "receiverID": "UD19940000000002",
              "receiverName": "SRM2",
              "receiverLocation": "Banglore",
              "campusDriveID": "CCDI20000001",
              "campusDriveRequested": true,
              "requestedDate": "0001-01-01T00:00:00Z",
              "responseDate": "2021-05-06T13:31:05Z",
              "campusDriveStatus": "Accepted",
              "nftID": "NFTUNV20000009"
          }
      ]);
      }
    }))
  }

  useEffect(()=>{
    getCampusDriveInvites();
  }, [])


  return ( 
    <>
     <div className={'notification d-none'}>
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
    </div>
      <div className="main" style={{marginTop:'10px', marginBottom: '0px'}}>
        <h3 className="main-title" style={{color:'#878BA6'}}>CAMPUS DRIVE</h3>
      </div>
      <div className="row jobs-saved-section" style={{margin:'0px'}}>
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full" style={{textAlign:'left', backgroundColor:'#BCBECC', color: 'black', fontSize: '1.2rem', fontWeight: 'bolder'}}>Requests Received</p>
        </div>
      </div>
      <div style={{height: '200px', overflow:'scroll'}}>
        {requests.map(item=>{
          if(item?.campusDriveStatus?.toLowerCase()==='pending') {
            return <div className={'row campus-drive-comp d-flex justify-between align-items-center'}>
              <div className={'col-md-4 univ-comp d-flex justify-between align-items-center'}>
                <div className={'univ-icon'}>
                  <i className={'fas fa-university'}></i>
                </div>
                <div className={'univ-info d-flex flex-column justify-center'}>
                  <p className={'univ-title'}>{item?.initiatorName}</p>
                  <p className={'univ-sub-title'}>has requested you to attend their campus drive</p>
                </div>
              </div>
              <div className={'col-md-2'}>
                <p className={'date'}>{item?.requestedDate ? 'Received on '+moment(item?.requestedDate).format('DD-MM-YYYY, h:mm:ss a') : '-'}</p>
              </div>
              <div className={'col-md-3 d-flex justify-between'}>
                <button type="button" className={"btn btn-accept"}>Accept</button>
                <button type="button" className={"btn btn-reject"}>Reject</button>
              </div>
              <div className={'col-md-1'}>
                  <button type="button" className={"btn btn-view-more"}>View more info</button>
              </div>
            </div>
          }
        })}
      </div>
      <div className="main" style={{margin: '0px', padding: '10px'}}>
        <h3 style={{color:'#878BA6', fontWeight: '600', fontSize: '1.6rem', textAlign:'center'}}>History</h3>
      </div>
      <div style={{height: '200px', overflow:'scroll'}}>
        {requests.map(item=>{
          if(item?.campusDriveStatus?.toLowerCase()==='accepted' || item?.campusDriveStatus?.toLowerCase()==='rejected') {
            return <div className={'row campus-drive-comp d-flex justify-between align-items-center'}>
              <div className={'col-md-4 univ-comp d-flex justify-between align-items-center'}>
                <div className={'univ-icon'}>
                  <i className={'fas fa-university'}></i>
                </div>
                <div className={'univ-info d-flex flex-column justify-center'}>
                  <p className={'univ-title'}>{item?.initiatorName}</p>
                  <p className={'univ-sub-title'}>has requested you to attend their campus drive</p>
                </div>
              </div>
              <div className={'col-md-2'}>
                <p className={'date'}>{item?.requestedDate ? 'Received on '+moment(item?.requestedDate).format('DD-MM-YYYY, h:mm:ss a') : '-'}</p>
              </div>
              <div className={'col-md-3 d-flex justify-between'}>
                  {item?.campusDriveStatus?.toLowerCase() === 'accepted' ? <button type="button" className={"btn btn-history-accepted"}><p className={'label'}>Accepted</p><p className={'subLabel'}>{item?.responseDate ? ' on '+moment(item?.responseDate).format('DD-MM-YYYY, h:mm:ss a') : '-'}</p></button> : <button type="button" className={"btn btn-history-rejected"}><p className={'label'}>Rejected</p><p className={'subLabel'}>{item?.responseDate ? ' on '+moment(item?.responseDate).format('DD-MM-YYYY, h:mm:ss a') : '-'}</p></button>}
              </div>
              <div className={'col-md-1'}>
                {item?.campusDriveStatus?.toLowerCase() === 'rejected' ? <button type="button" className={"btn btn-view-more"}>View more info</button> : null }
              </div>
            </div>
          }
        })}
      </div>
      <div className="row jobs-saved-section" style={{margin:'0px'}}>
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full" style={{textAlign:'left', backgroundColor:'#BCBECC', color: 'black', fontSize: '1.2rem', fontWeight: 'bolder'}}>Requests Sent</p>
        </div>
      </div>
      <div style={{height: '200px', overflow:'scroll'}}>
        {sentRequests.map(item=>{
          if(item?.campusDriveStatus?.toLowerCase()==='pending') {
            return <div className={'row campus-drive-comp d-flex justify-between align-items-center'}>
            <div className={'col-md-4 univ-comp d-flex justify-between align-items-center'}>
              <div className={'univ-icon'}>
                <i className={'fas fa-university'}></i>
              </div>
              <div className={'univ-info d-flex flex-column justify-center'}>
                <p className={'univ-title'}>{item?.receiverName}</p>
                <p className={'univ-sub-title'}>Your request to attend campus drive has been sent</p>
              </div>
            </div>
            <div className={'col-md-2'}>
              <p className={'date'}>{item?.requestedDate ? 'Sent on '+moment(item?.requestedDate).format('DD-MM-YYYY, h:mm:ss a') : '-'}</p>
            </div>
            <div className={'col-md-3 d-flex justify-between'}>
  
            </div>
            <div className={'col-md-1'}>
                <button type="button" className={"btn btn-view-more"}>View more info</button>
            </div>
          </div>
          }
        })}
      </div>
      <div className="main" style={{margin: '0px', padding: '10px'}}>
        <h3 style={{color:'#878BA6', fontWeight: '600', fontSize: '1.6rem', textAlign:'center'}}>History</h3>
      </div>
      <div style={{height: '200px', overflow:'scroll'}}>
        {sentRequests.map(item=>{
          if(item?.campusDriveStatus?.toLowerCase()==='accepted' || item?.campusDriveStatus?.toLowerCase()==='rejected') {
            return <div className={'row campus-drive-comp d-flex justify-between align-items-center'}>
                <div className={'col-md-4 univ-comp d-flex justify-between align-items-center'}>
                  <div className={'univ-icon'}>
                    <i className={'fas fa-university'}></i>
                  </div>
                  <div className={'univ-info d-flex flex-column justify-center'}>
                    <p className={'univ-title'}>{item?.receiverName}</p>
                    <p className={'univ-sub-title'}>has replied to your requested you to attend their campus drive</p>
                  </div>
                </div>
                <div className={'col-md-2'}>
                  <p className={'date'}>{item?.requestedDate ? 'Request sent on '+moment(item?.requestedDate).format('DD-MM-YYYY, h:mm:ss a') : '-'}</p>
                </div>
                <div className={'col-md-2'}>
                  <p className={'float-right'} style={{fontSize:'.800rem'}}>Status:</p>
                </div>
                <div className={'col-md-3 d-flex justify-between'}>
                    {item?.campusDriveStatus?.toLowerCase()==='accepted' ? <button type="button" className={"btn btn-history-accepted"}><p className={'label'}>Accepted</p><p className={'subLabel'}>{item?.requestedDate ? 'on '+moment(item?.responseDate).format('DD-MM-YYYY, h:mm:ss a') : '-'}</p></button> : <button type="button" className={"btn btn-history-rejected"}><p className={'label'}>Rejected</p><p className={'subLabel'}>{item?.requestedDate ? 'on '+moment(item?.responseDate).format('DD-MM-YYYY, h:mm:ss a') : '-'}</p></button>}
                </div>
                {item?.campusDriveStatus?.toLowerCase()==='rejected' ? <div className={'col-md-1'}>
                    <button type="button" className={"btn btn-view-more"}>View more info</button>
                </div> : null}
              </div>
          }
        })}
      </div>
    </>
  )
}

export default CampusDrive;

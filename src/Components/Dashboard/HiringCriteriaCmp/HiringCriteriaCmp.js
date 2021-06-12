import React from 'react'
import moment from "moment";
import { useSelector } from 'react-redux';

const HiringCriteriaCmp = (props) => {
    const apiStatus = useSelector(state => state.DashboardReducer.apiStatus);

    const getValueByType = (val, type) => {
        if(val && type) {
          const parsedData = JSON.parse(val);
          return parsedData.length > 0 ? parsedData[0][type]!==undefined ? parsedData[0][type] : '' : '';
        } else {
          return '-'
        }
      }
    return (
        <>
            <div className="row published-jobs-section">
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="heading">Hiring Criteria Created</p>
                    {props.hiringCriteria?.length
                        ?
                        props.hiringCriteria?.map((item, i) =>
                            <div className="row align-items-center jobs-list-item w-full p-0" key={i}>
                                <div className="col-md-2 row align-items-center p-0">
                                    <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center">
                                        <i className="fas fa-cube" />
                                    </div>
                                    <p className="job-label text-ellipsis" style={{marginLeft: '14px', textTransform:'capitalize'}}>{item.hiringCriteriaName}</p>
                                </div>
                                <div className="col-md-1 align-items-center">
                                    <button className="btn2 text-ellipsis" style={{width:'100%'}}>{getValueByType(item.hcProgramsInString, 'programID')}</button>
                                </div>
                                <div className="col-md-4 item align-items-center" style={{ minWidth: '320px'}}>
                                    <p className="job-published-date text-ellipsis" style={{color: '#919191', textAlign:'left', marginLeft: '12px'}}>{getValueByType(item.hcProgramsInString, 'branchName')}</p>
                                </div>
                                <div className="col-md-3 item align-items-center">
                                    <p className="job-published-date" style={{color: '#454545'}}>
                                        {item?.creationDate
                                        ? `Created on ${moment(item?.creationDate).format(
                                            "DD-MM-YYYY"
                                        )}`
                                        : "-"}
                                    </p>
                                </div>
                                <div className="col-md-2 row item p-0 d-flex justify-content-between align-items-center w-full">
                                    <div className="vertical-divider" />
                                    <button
                                        type="button"
                                        className="btn d-flex justify-content-around align-items-center"
                                        style={{
                                            height: "30px",
                                            width: "100px",
                                            fontSize: ".700rem",
                                            marginRight: "10px",
                                            borderRadius: "4px",
                                            textTransform: "uppercase",
                                            fontWeight: 'bolder'
                                        }}
                                        onClick={() => props.detailsModal(item)}
                                    >
                                        <p>Details</p>
                                        <i className="fas fa-chevron-right"></i>
                                    </button>
                                </div>
                            </div>) : apiStatus ? 'Loading...' : 'No hiring criteria records found, Please add to continue.'}
                    <button type="button" onClick={props.openCloseModal} className="btn add-job-btn" style={{height: '20px'}}>
                        Add new Hiring Criteria
                    </button>
                </div>
            </div>

        </>
    )
}

export default HiringCriteriaCmp;
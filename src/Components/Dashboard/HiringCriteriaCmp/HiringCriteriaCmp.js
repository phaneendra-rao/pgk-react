import React from 'react'
import moment from "moment";

const HiringCriteriaCmp = (props) => {
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
                    <p className="heading">Hiring Criteria</p>
                    {props.hiringCriteria?.length
                        ?
                        props.hiringCriteria?.map((item, i) =>
                            <div className="d-flex flex-row justify-content-between align-items-center jobs-list-item w-full" key={i}>
                                <div className="item d-flex flex-row justify-content-between align-items-center w-full">
                                    <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center">
                                        <i className="fas fa-cube" />
                                    </div>
                                    <p className="job-label">{item.hiringCriteriaName}</p>
                                    <button className="btn2">{getValueByType(item.hcProgramsInString, 'programID')}</button>
                                    <p className="job-published-date">{getValueByType(item.hcProgramsInString, 'branchName')}</p>
                                    <p className="job-published-date">
                                        {item?.creationDate
                                        ? item?.publishedFlag ? `Published on ${moment(item?.creationDate).format(
                                            "DD-MM-YYYY"
                                        )}` : `Created on ${moment(item?.creationDate).format(
                                            "DD-MM-YYYY"
                                        )}`
                                        : "-"}
                                    </p>
                                </div>
                                <div className="vertical-divider" />
                                <button
                                    type="button"
                                    className="btn d-flex justify-content-around align-items-center"
                                    style={{
                                        height: "30px",
                                        width: "100px",
                                        fontSize: ".600rem",
                                        marginRight: "10px",
                                        borderRadius: "4px",
                                    }}
                                    onClick={() => props.detailsModal(item)}
                                >
                                    <p>Details</p>
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>) : 'no data'}
                    <button type="button" onClick={props.openCloseModal} className="add-job-btn" data-toggle="modal" data-target="#hiringCriteria">
                        Add new Hiring Criteria
                    </button>
                </div>
            </div>

        </>
    )
}

export default HiringCriteriaCmp;
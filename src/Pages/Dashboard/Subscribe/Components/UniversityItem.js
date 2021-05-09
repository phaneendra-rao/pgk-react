import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import CustomModal from "../../../../Components/CustomModal";

import { actionSagaGetCorporateSingleSubscriptionRequest } from '../../../../Store/Actions/SagaActions/SubscriptionSagaAction';

const UniversityItem = (props) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [subscribedUnvData, setSubscribedUnvData] = useState();

  const getInsightsById = (id) => {
    dispatch(actionSagaGetCorporateSingleSubscriptionRequest({
      apiPayloadRequest:{
        type: 'UNIVERSITY_INFO',
        id:id
      },
      callback: (response)=>{
        setSubscribedUnvData(response);
        setShowModal(true);
      }
    }));
  }

  return (
    <>
      <div
        className="univ-sub-item d-flex justify-content-between align-items-center"
        key={props?.index}
        style={{padding:15}}
      >
        <div className="sub-type-container d-flex">
          <i className="far fa-file icon" />
          <p className="sub-label" style={{fontWeight:'bold'}}>{props?.item?.generalNote}</p>
        </div>
        <div className="vertical-border" />
        <div className="name-address d-flex flex-column align-items-start">
          <p className="title">{props?.item?.publisherName}</p>
          {props?.item?.location?.trim()!=='' && <p className="sub-title">
            <i className="fas fa-map-marker-alt" /> {props?.item?.location}
          </p>}
        </div>
        <div className="vertical-border" />
        <div className="sub-item-container d-flex flex-column align-items-center">
          <p className="title">University ID</p>
          <p className="sub-title">{props?.item?.publisher}</p>
        </div>
        <div className="vertical-border" />
        <button
          type="button"
          className="view-info-btn btn d-flex justify-content-around align-items-center"
          style={{
            height: "20px",
            maxWidth: "100px",
            fontSize: ".600rem",
            borderRadius: "4px",
          }}
          onClick={() => {
            getInsightsById(props?.item?.subscriptionID)
          }}
        >
          View Information
        </button>
      </div>

      <CustomModal show={showModal} modalStyles={{minWidth: '75%'}}>
      <div className="viewInsight-modal" id="viewInsight">
                        {/* Modal Header */}
                        <div className="modal-header">
                            <h4 className="modal-title">View Insights of '{props?.item?.publisherName}'</h4>
                            <i className="far fa-times-circle close-icon" onClick={()=>{
                              setShowModal(false)
                            }} data-dismiss="modal" />
                        </div>
                        {/* Modal body */}
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-4">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Average CGPA recorded last year</label>
                                        <input type="text" className="modal-inp" defaultValue={subscribedUnvData?.averageCGPA} placeholder="Average CGPA recorded last year *" required readOnly />
                                    </div>
                                </div>
                                <div className="col-4 p-0">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Highest CGPA recorded last year</label>
                                        <input type="text" className="modal-inp" defaultValue={subscribedUnvData?.highestCGPA} placeholder="Highest CGPA recorded last year *" required readOnly />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="modal-grp">
                                        <label className="inp-caption">Highest Package received during last CH</label>
                                        <input type="text" className="modal-inp" defaultValue={subscribedUnvData?.highestPackage} placeholder="Highest Package received during last CH *" required readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="modal-grp">
                                                <label className="inp-caption">Top Skills offered by this University</label>
                                                <div className="modal-inp inp-textarea" value="7.5">
                                                    <ul>
                                                    {subscribedUnvData?.top5Skills?.map((item, i) => <li>{item}</li>)}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-6 p-0">
                                            <div className="modal-grp">
                                                <label className="inp-caption">Top Recruiting Corporates Last year</label>
                                                <div className="modal-inp inp-textarea">
                                                    <ul>
                                                    {subscribedUnvData?.top5Recruiters?.map((item, i) => <li>{item}</li>)}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="col-12 p-0">
                                        <div className="modal-grp">
                                            <label className="inp-caption">Average Package received during last CH</label>
                                            <input type="text" className="modal-inp" defaultValue={subscribedUnvData?.averagePackage} placeholder="Average Package received during last CH *" required />
                                        </div>
                                    </div>
                                    <div className="col-12 p-0">
                                        <div className="modal-grp">
                                            <label className="inp-caption">University Conversion Rate Last year</label>
                                            <input type="text" className="modal-inp" defaultValue={subscribedUnvData?.universityConvertionRatio} placeholder="Average CGPA recorded last year *" required />
                                        </div>
                                    </div>
                                    <div className="col-12 p-0">
                                        <div className="modal-grp">
                                            <label className="inp-caption">Tentative Passing Month</label>
                                            <input type="text" className="modal-inp" defaultValue={subscribedUnvData?.tentativeMonthOfPassing} placeholder="Average CGPA recorded last year *" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
      </CustomModal>
    </>
  );
};

export default UniversityItem;

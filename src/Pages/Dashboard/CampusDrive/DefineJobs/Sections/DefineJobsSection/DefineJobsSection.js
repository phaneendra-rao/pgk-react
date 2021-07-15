import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {actionGetCampusDriveDefineJobsListRequestSaga, actionPostOrPatchCampusDriveHiringCriteriaRequestSaga} from '../../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import {actionGetCampusDriveHiringCriteriaListRequestSaga} from '../../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import HiringCriteriaFormSection from "./Components/HiringCriteriaFormSection";

const DefineJobsSection = (props) => {

  const dispatch = useDispatch();
  const [section, setSection] = useState({
    firstSection: false,
    secondSection: false
  });
  const [hiringCriteriaList, setHiringCriteriaList] = useState([]);

  const [jobsList, setJobsList] = useState([]);

  useEffect(()=>{
    dispatch(actionGetCampusDriveDefineJobsListRequestSaga({
      campusDriveId: props?.campusDriveId,
      callback: (response) => {
        if(response?.length) {
          setJobsList(response);
        }
      }
    }));
    getHiringCriteriaList();
  }, []);

  const getHiringCriteriaList = () => {
    dispatch(actionGetCampusDriveHiringCriteriaListRequestSaga({
      apiPayloadRequest: {
        campusDriveId: props.campusDriveId
      },
      callback: (hcResponseList) => {
        console.log('hc response list ', hcResponseList);
        if(hcResponseList?.length) {
          setHiringCriteriaList([...hcResponseList, {hiringCriteriaID: 'ADD_NEW_HC', hiringCriteriaName: 'Add New Hiring Criteria'}]);
        }
      }
    }))
  }

  const submitHcData = (data) => {
    dispatch(actionPostOrPatchCampusDriveHiringCriteriaRequestSaga({
      apiPayloadRequest: {
        ...data, 
        cdID: props?.campusDriveId
      },
      callback: (hcResponse) => {
        console.log('hcResponse ', hcResponse);
        if (hcResponse?.hiringCriteriaID) {
          setSection({
            firstSection: false,
            secondSection: true
          });
        } else if (data?.hiringCriteriaID) {
          // setSection({
          //   firstSection: false,
          //   secondSection: true
          // });
        }

        getHiringCriteriaList();
      }
    }));
  }

  const closeWindow = () => {
    setSection({
      firstSection: false,
      secondSection: false
    })
  }

  return (
    <div className="bgWhite">
        <p className="text-center text-primary p-2">Define Jobs</p>
        <div className="CD-define-jobs-list">
          {/* <div className="center"><p className="no-list-label">Please add jobs to continue...</p></div> */}
          {section.firstSection || section.secondSection ? <div className="define-job-modal">
            <div className="define-job-header"><div></div><p className="text-white">Define Job</p><span><i className="fas fa-times-circle text-white" style={{cursor: 'pointer'}} onClick={closeWindow}></i></span></div>
            {section.firstSection ? <HiringCriteriaFormSection
              cancelHandler={closeWindow}
              hiringCriteriaList={hiringCriteriaList}
              submitHandler={submitHcData}
            /> : undefined}
            {section.secondSection ? <div></div> : undefined}
          </div> : undefined}
        </div>
        {!section.firstSection && !section.secondSection ? <div className="row add-btn">
          <button type="button" onClick={()=>{
              setSection({
                firstSection: true,
                secondSection: false
              });
          }} className="btn">Add new Job</button>
        </div> : undefined}
    </div>
  );
};

export default DefineJobsSection;

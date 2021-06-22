import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import CustomModal from "../../../../Components/CustomModal";
import Checkbox from "@material-ui/core/Checkbox";

import { actionGetCorporateHiringByIdRequest } from "../../../../Store/Actions/SagaActions/HiringSagaAction";
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';

import CustomDialogPopup from '../../../../Components/CustomDialogPopup';
import HiringCriteriaForm from '../../CreateJob/HiringCriteria/HiringCriteriaForm';


const HiringCriteriaListItem = (props) => {
  const hiringCriteriaInitialData = {
    programID: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false,
    },
    hiringCriteriaName: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false,
    },
    minimumCutoffPercentage10th: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false,
    },
    minimumCutoffPercentage12th: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false,
    },
    minimumCutoffCGPAGrad: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false,
    },
    minimumCutoffPercentageGrad: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false,
    },
    eduGapsAllowed: {
      value: false,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false,
    },
    eduGapsSchoolAllowed: {
      value: false,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true,
    },
    eduGaps11N12Allowed: {
      value: false,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true,
    },
    eduGaps12NGradAllowed: {
      value: false,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true,
    },
    eduGapsGradAllowed: {
      value: false,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true,
    },
    eduGapsGradNPGAllowed: {
      value: false,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true,
    },
    allowActiveBacklogs: {
      value: false,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false,
    },
    numberOfAllowedBacklogs: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true,
    },
    eduGapsSchool: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true,
    },
    eduGaps11N12: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true,
    },
    eduGaps12NGrad: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true,
    },
    eduGapsGrad: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true,
    },
    eduGapsGradNPG: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: true,
    },
    yearOfPassing: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false,
    },
    remarks: {
      value: undefined,
      errorMessage: undefined,
      isRequired: false,
      isDisabled: false,
    },
    hcPrograms: {
      value: [],
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false,
    },
  };

  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [hiringCriteriaData, setHiringCriteriaData] = useState();



  const closeModel = () => {
      setIsOpen(false);
  }

  const onResponse = (hiringData) => {
    const hiringCriteriaKeys = [
        "allowActiveBacklogs",
        "eduGaps11N12Allowed",
        "eduGaps12NGradAllowed",
        "eduGapsAllowed",
        "eduGapsGradAllowed",
        "eduGapsGradNPGAllowed",
        "eduGapsSchoolAllowed",
        "hiringCriteriaName",
        "remarks",
        "minimumCutoffCGPAGrad",
        "minimumCutoffPercentage10th",
        "minimumCutoffPercentage12th",
        "minimumCutoffPercentageGrad",
        "yearOfPassing",
        "numberOfAllowedBacklogs",
        "eduGaps11N12",
        "eduGaps12NGrad",
        "eduGapsGrad",
        "eduGapsGradNPG",
        "eduGapsSchool",
    ];

    let updatedHiringData = hiringCriteriaInitialData;

    hiringCriteriaKeys.forEach((item)=>{
        updatedHiringData[item].value = hiringData[item];
        updatedHiringData[item].isDisabled = true;
    });

    const hcBranches = JSON.parse(hiringData['hcProgramsInString']);

    const updatedHcBranches = hcBranches.map((item)=>{
      return {value: item.branchID, label: item.branchName, programID: item.programID, programName: item.programName}
    })

    updatedHiringData['hcPrograms'].value = updatedHcBranches;
    updatedHiringData['hcPrograms'].isDisabled = true;

    updatedHiringData['programID'].value = hcBranches[0].programID;
    updatedHiringData['programID'].isDisabled = true;

    setHiringCriteriaData(updatedHiringData);
    setIsOpen(true);
  }

  const getHiringCriteriaById = (id) => {
    if (id) {
      dispatch(
        actionGetCorporateHiringByIdRequest({
          apiPayloadRequest: id,
          callback: onResponse,
        })
      );
    }
  };

  const getValueByType = (val, type) => {
    if (val && type) {
      const parsedData = JSON.parse(val);
      return parsedData.length > 0
        ? parsedData[0][type] !== undefined
          ? parsedData[0][type]
          : ""
        : "";
    } else {
      return "-";
    }
  };


  return (
    <div className="w-full d-flex justify-content-center align-items-center" >
      {props?.checkHandler && (
        <Checkbox
          size={"small"}
          color={"primary"}
          checked={props?.isCheck ? props?.isCheck : false}
          onChange={(e) => {
            props?.checkHandler(props?.item?.hiringCriteriaID);
          }}
        />
      )}
      <div className="row align-items-center jobs-list-item w-full p-0" style={{height: '80px'}}>
        <div className="col-md-2 row align-items-center p-0">
          <div className="job-icon job-blue-icon d-flex justify-content-center align-items-center m-0">
            <i className="fas fa-cube" />
          </div>
          <p
            className="job-label text-ellipsis"
            style={{ marginLeft: "14px", textTransform: "capitalize" }}
          >
            {props?.item?.hiringCriteriaName
              ? props?.item?.hiringCriteriaName
              : "-"}
          </p>
        </div>
        <div className="col-md-1 align-items-center">
          <button className="btn2 text-ellipsis" style={{ width: "100%" }}>
            {getValueByType(props?.item?.hcProgramsInString, "programID")}
          </button>
        </div>
        <div
          className={`col-md-${props?.checkHandler ? '2' : '5'} item align-items-center`}
          style={{ minWidth: `${props?.checkHandler ? '320px' : '480px'}` }}
        >
          <p
            className="job-published-date text-ellipsis"
            style={{ color: "#919191", textAlign: "left", marginLeft: "12px" }}
          >
            {getValueByType(props?.item?.hcProgramsInString, "branchName")}
          </p>
        </div>
        <div className={`col-md-2 item align-items-center`}>
          <p className="job-published-date" style={{ color: "#454545", fontSize: '.750rem' }}>
            {props?.item?.creationDate
              ? props?.item?.publishedFlag
                ? `Published on ${moment(props?.item?.creationDate).format(
                    "DD-MM-YYYY"
                  )}`
                : `Created on ${moment(props?.item?.creationDate).format(
                    "DD-MM-YYYY"
                  )}`
              : "-"}
          </p>
        </div>
        <div className={`col-md-${props?.checkHandler ? '2' : '4'} row item p-0 d-flex justify-content-between align-items-center w-full`}>
          <div></div>
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
              fontWeight: "bolder",
            }}
            onClick={() => {
              getHiringCriteriaById(props?.item?.hiringCriteriaID);
            }}
          >
            <p>Details</p>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
        {props?.checkHandler && (
          <div className="col-md-2 row item p-0 d-flex justify-content-between align-items-center w-full">
            <button
              type="button"
              className="btn d-flex justify-content-around align-items-center"
              style={{
                height: "30px",
                width: "100px",
                fontSize: ".600rem",
                borderRadius: "4px",
              }}
              disabled={!props?.isCheck}
              onClick={() => {
                props?.onPublish(props?.item?.hiringCriteriaID);
              }}
            >
              <p>Publish</p>
            </button>
          </div>
        )}
      </div>
      {isOpen && <CustomDialogPopup 
                isOpenDialog={isOpen}
                // maxWidth={'lg'}
                isCancelBtnRequired={false}
                isConfirmBtnRequired={false}
                disableBackdropClick={true}
                dialogContent={<HiringCriteriaForm
                    openCloseModal={closeModel}
                    lookUpData={props?.lookUpData}
                    isNew={false}
                    editable={false}
                    hiringCriteriaData={hiringCriteriaData}
                />}
            />}
    </div>
  );
};

export default HiringCriteriaListItem;

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import HiringCriteriaFormCmp from "../../../../Components/Dashboard/HiringCriteriaCmp/HiringCriteriaFormCmp";
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';

const HiringCriteriaForm = (props) => {
  const [hiringData, setHiringData] = useState();
  const [programCatalog, setProgramCatalog] = useState([]);
  const [branchCatalog, setBranchCatalog] = useState([]);

  useEffect(()=>{
    if(props.hiringCriteriaData) {
        setHiringData(props.hiringCriteriaData)
    }
  }, [props?.hiringCriteriaData])

  useEffect(() => {
    if (props?.lookUpData?.programCatalog?.length) {
      setProgramCatalog(
        props?.lookUpData?.programCatalog?.map((item) => {
          return { label: item?.programName, value: item?.programCode };
        })
      );
    }
  }, [props?.lookUpData?.programCatalog]);

  const updateField = (name, value, errorMessage) => {
    let data = hiringData[name];
    data["value"] = value;
    data["errorMessage"] = errorMessage;

    setHiringData((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const enableEduGaps = (value) => {
    let eduGapsAllowedRadioButtons = {};
    [
      "eduGapsSchoolAllowed",
      "eduGaps11N12Allowed",
      "eduGaps12NGradAllowed",
      "eduGapsGradAllowed",
      "eduGapsGradNPGAllowed",
    ].forEach((item) => {
      eduGapsAllowedRadioButtons[item] = {
        value: hiringData[item].value,
        errorMessage: hiringData[item].errorMessage,
        isRequired: hiringData[item].isRequired,
        isDisabled: !value,
      };
    });

    let eduGapsAllowedFields = {};
    [
      "eduGapsSchool",
      "eduGaps11N12",
      "eduGaps12NGrad",
      "eduGapsGrad",
      "eduGapsGradNPG",
    ].forEach((item) => {
      eduGapsAllowedFields[item] = {
        value: hiringData[item].value,
        errorMessage: hiringData[item].errorMessage,
        isRequired: hiringData[item].isRequired,
        isDisabled: value ? !hiringData[item + "Allowed"].value : !value,
      };
    });

    setHiringData((prevState) => ({
      ...prevState,
      ...eduGapsAllowedRadioButtons,
      ...eduGapsAllowedFields,
    }));
  };

  const enableEduGapField = (name, value) => {
    let data = hiringData[name.replace("Allowed", "")];
    data["isDisabled"] = !value;

    setHiringData((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const enableActiveBacklogsField = (value) => {
    setHiringData((prevState) => ({
      ...prevState,
      numberOfAllowedBacklogs: {
        ...prevState.numberOfAllowedBacklogs,
        isDisabled: !value,
      },
    }));
  };

  const handleChange = (name, value, errorMessage) => {
    switch (name) {
      case "programID":
        const programObj = programCatalog?.find(
          (program) => program.value === value
        );
        const filteredBranches = props.lookUpData?.branchCatalog?.filter(
          (branch) => branch.programID === value
        );
        const _branchCatalog = filteredBranches.map((item) => ({
          value: item.branchID,
          label: item.branchName,
          programID: item.programID,
          programName: programObj.label,
        }));
        setBranchCatalog(_branchCatalog);
        updateField(name, value, errorMessage);
        break;
      case "minimumCutoffPercentage10th":
      case "minimumCutoffPercentage12th":
      case "minimumCutoffCGPAGrad":
      case "minimumCutoffPercentageGrad":
      case "hiringCriteriaName":
      case "remarks":
      case "numberOfAllowedBacklogs":
      case "eduGapsSchool":
      case "eduGaps11N12":
      case "eduGaps12NGrad":
      case "eduGapsGrad":
      case "eduGapsGradNPG":
      case "yearOfPassing":
      case "hcPrograms":
        updateField(name, value, errorMessage);
        break;
      case "eduGapsAllowed":
        updateField(name, value, errorMessage);
        enableEduGaps(value);
        break;
      case "allowActiveBacklogs":
        updateField(name, value, errorMessage);
        enableActiveBacklogsField(value);
        break;
      case "eduGapsSchoolAllowed":
      case "eduGaps11N12Allowed":
      case "eduGaps12NGradAllowed":
      case "eduGapsGradAllowed":
      case "eduGapsGradNPGAllowed":
        updateField(name, value, errorMessage);
        enableEduGapField(name, value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
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
    ];

    const cutOffKeys = [
      "minimumCutoffCGPAGrad",
      "minimumCutoffPercentage10th",
      "minimumCutoffPercentage12th",
      "minimumCutoffPercentageGrad",
      "yearOfPassing",
    ];

    let finalHiringCriteria = {};

    hiringCriteriaKeys.forEach((item) => {
      finalHiringCriteria[item] = hiringData[item].value;
    });

    cutOffKeys.forEach((item) => {
      finalHiringCriteria[item] = hiringData[item].value
        ? parseFloat(hiringData[item].value)
        : 0;
    });

    const activeBackLogKeys = ["numberOfAllowedBacklogs"];

    if (hiringData["allowActiveBacklogs"].value) {
      activeBackLogKeys.forEach((item) => {
        finalHiringCriteria[item] = hiringData[item].value
          ? parseFloat(hiringData[item].value)
          : 0;
      });
    } else {
      activeBackLogKeys.forEach((item) => {
        finalHiringCriteria[item] = 0;
      });
    }

    const eduGapsKeys = [
      "eduGaps11N12",
      "eduGaps12NGrad",
      "eduGapsGrad",
      "eduGapsGradNPG",
      "eduGapsSchool",
    ];

    if (hiringData["eduGapsAllowed"].value) {
      eduGapsKeys.forEach((item) => {
        finalHiringCriteria[item] = hiringData[item + "Allowed"].value
          ? hiringData[item].value
            ? parseFloat(hiringData[item].value)
            : 0
          : 0;
      });
    } else {
      eduGapsKeys.forEach((item) => {
        finalHiringCriteria[item] = 0;
      });
    }

    let updatedHcPropgrams = [];

    if(hiringData["hcPrograms"].value?.length) {
      updatedHcPropgrams = hiringData["hcPrograms"].value.map((item)=>{
        return {branchID: item.value, branchName: item.label, programID: item.programID, programName: item.programName}
      });
    }

    finalHiringCriteria['hcPrograms'] = updatedHcPropgrams;

    if(props?.addHiringCriteria) {
        props.addHiringCriteria(finalHiringCriteria)
    }
  };

  return (
    <div className="hiring-modal">
      <div className="modal-header hiring-modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Create a new Hiring Criteria
        </h5>
        <IconButton style={{color:'white', marginTop:'-10px'}} onClick={props?.openCloseModal} component="span">
            <Close />
        </IconButton>
        {/* <button
          type="button"
          className="close align-self-center"
          onClick={props.openCloseModal}
          style={{color:'white', marginTop:'-25px'}}
        >
          <span aria-hidden="true">×</span>
        </button> */}
      </div>
      <HiringCriteriaFormCmp
        hiringData={hiringData}
        branchCatalog={branchCatalog}
        openCloseModal={props.openCloseModal}
        programCatalog={programCatalog}
        editable={props?.editable}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default HiringCriteriaForm;

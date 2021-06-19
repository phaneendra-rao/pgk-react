import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HiringCriteriaCmp from '../../../../Components/Dashboard/HiringCriteriaCmp/HiringCriteriaCmp';
import PortalHiringModal from '../../../../Portals/PortalHiringModal';
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import { AddHiringSagaAction, HiringSagaAction, actionPatchCorporateHiringCriteriaRequest } from '../../../../Store/Actions/SagaActions/HiringSagaAction';
import HiringCriteriaForm from './HiringCriteriaForm';
import HiringModal from './HiringModal';
import CustomModal from '../../../../Components/CustomModal';
import CustomDialogPopup from '../../../../Components/CustomDialogPopup';

// import getHiringCriteriaSaga from '../../../../Store/Sagas/HiringWatcherSaga';
const $ = window.$;

const Index = () => {
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

    const [isOpen, setIsOpen] = useState(false);
    const [lookUpData, setLookUpData] = useState([]);
    const [isNew, setIsNew] = useState(true);
    const [editable, setEditable] = useState(false);
    const [hiringCriteriaData, setHiringCriteriaData] = useState(hiringCriteriaInitialData);
    const [hiringCriteriaList, setHiringCriteriaList] = useState([]);

    const [hiringCriteriaId, setHiringCriteriaId] = useState();

    const dispatch = useDispatch();
    // const hiringCriteria = useSelector(state => state.DashboardReducer.hiringCriteria);

    const getHiring = () => {
        dispatch(HiringSagaAction({ callback: getAllHirings }));
    }

    useEffect(() => {
        getHiring();
        dispatch(actionGetDependencyLookUpsSagaAction({
            apiPayloadRequest: ['branchCatalog', 'programCatalog'],
            callback: dropdowns
        }));
    }, []);

    const getAllHirings = (data) => {
        setHiringCriteriaList(data);
    }

    const dropdowns = (data) => {
        setLookUpData(data);
    }

    const closeModel = () => {
        getHiring();
        setIsOpen(false);
        setHiringCriteriaId();
        setHiringCriteriaData();
    }

    const formModal = () => {
        setHiringCriteriaData(hiringCriteriaInitialData);
        setIsNew(true);
        setEditable(false);
        setIsOpen(!isOpen);
        setHiringCriteriaId();
    }

    const detailsModal = (hiringData) => {
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
        });

        hiringCriteriaKeys.forEach((item)=>{
          if(item==='allowActiveBacklogs') {
            updatedHiringData['numberOfAllowedBacklogs'].isDisabled = !hiringData[item];
            updatedHiringData['numberOfAllowedBacklogs'].value = hiringData['numberOfAllowedBacklogs'].toString();
          } else if(['eduGapsSchool', 'eduGapsGradNPG', 'eduGapsGrad', 'eduGaps12NGrad', 'eduGaps11N12'].includes(item)) {
            updatedHiringData[item+'Allowed'].isDisabled = !hiringData[item];
            updatedHiringData[item].isDisabled = !hiringData[item+'Allowed'];
            updatedHiringData[item].value = hiringData[item].toString();
          }
        })

        updatedHiringData['eduGapsAllowed'].value = ['eduGapsSchool', 'eduGapsGradNPG', 'eduGapsGrad', 'eduGaps12NGrad', 'eduGaps11N12'].some((item)=>hiringData[item+'Allowed']===true);

        const hcBranches = JSON.parse(hiringData['hcProgramsInString']);

        const updatedHcBranches = hcBranches.map((item)=>{
          return {value: item.branchID, label: item.branchName, programID: item.programID, programName: item.programName}
        })

        updatedHiringData['hcPrograms'].value = updatedHcBranches;

        updatedHiringData['programID'].value = hcBranches[0].programID;

        setHiringCriteriaData(updatedHiringData);
        setIsNew(false);
        setEditable(true);
        setIsOpen(true);

        setHiringCriteriaId(hiringData?.hiringCriteriaID);
    }

    const addHiringCriteria = (body) => {
      if(editable && hiringCriteriaId) {
        console.log('body ', body);
        console.log('hiringCriteriaId ', hiringCriteriaId);
        dispatch(actionPatchCorporateHiringCriteriaRequest({
          apiPayloadRequest: {
            id: hiringCriteriaId,
            body: body,
          },
          callback: () => {
            closeModel();
            setIsNew(true);
            setHiringCriteriaId();
            setEditable(false);         
          }
        }));
      } else {
        dispatch(AddHiringSagaAction({
            apiPayloadRequest: body,
            callback: ()=>{
                closeModel();
                setIsNew(true);
                setHiringCriteriaId();
                setEditable(false);
            }
        }));
      }
    }

    return (
        <>
            <HiringCriteriaCmp
                openCloseModal={formModal}
                detailsModal={detailsModal}
                // hiringCriteria={hiringCriteria?.filter(item=>item?.publishedFlag===false)}
                hiringCriteria={hiringCriteriaList}
            />
            {isOpen && <CustomDialogPopup 
                isOpenDialog={isOpen}
                // maxWidth={'lg'}
                isCancelBtnRequired={false}
                isConfirmBtnRequired={false}
                disableBackdropClick={true}
                dialogContent={<HiringCriteriaForm
                    openCloseModal={formModal}
                    addHiringCriteria={addHiringCriteria}
                    lookUpData={lookUpData}
                    isNew={isNew}
                    editable={editable}
                    hiringCriteriaData={hiringCriteriaData}
                />}
            />}
        </>
    )
}

export default Index;

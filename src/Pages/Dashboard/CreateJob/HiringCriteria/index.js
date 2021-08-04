import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HiringCriteriaCmp from '../../../../Components/Dashboard/HiringCriteriaCmp/HiringCriteriaCmp';
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';
import { AddHiringSagaAction, HiringSagaAction, actionPatchCorporateHiringCriteriaRequest, actionCloneHiringCriteriaRequest } from '../../../../Store/Actions/SagaActions/HiringSagaAction';
import HiringCriteriaForm from './HiringCriteriaForm';
import CustomToastModal from "../../../../Components/CustomToastModal";
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
    const [toastModal, setToastModal] = useState();
    const [lookUpData, setLookUpData] = useState([]);
    const [isNew, setIsNew] = useState(true);
    const [editable, setEditable] = useState(false);
    const [hiringCriteriaActualData, setHiringCriteriaActualData] = useState(undefined);
    const [hiringCriteriaData, setHiringCriteriaData] = useState(hiringCriteriaInitialData);
    const [hiringCriteriaList, setHiringCriteriaList] = useState([]);

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
        setHiringCriteriaActualData();
        setHiringCriteriaData();
    }

    const formModal = () => {
        setHiringCriteriaData(hiringCriteriaInitialData);
        setIsNew(true);
        setEditable(false);
        setIsOpen(!isOpen);
        setHiringCriteriaActualData();
    }

    const detailsModal = (hiringData, isEditable=false) => {
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
          updatedHiringData[item].isDisabled = isEditable ? false : true;
        });

        hiringCriteriaKeys.forEach((item)=>{
          if(item==='allowActiveBacklogs') {
            updatedHiringData['numberOfAllowedBacklogs'].isDisabled = isEditable ? !hiringData[item] : true;
            updatedHiringData['numberOfAllowedBacklogs'].value = hiringData['numberOfAllowedBacklogs'].toString();
          } else if(['eduGapsSchool', 'eduGapsGradNPG', 'eduGapsGrad', 'eduGaps12NGrad', 'eduGaps11N12'].includes(item)) {
            updatedHiringData[item+'Allowed'].isDisabled = isEditable ? !hiringData[item] : true;
            updatedHiringData[item].isDisabled = isEditable ? !hiringData[item+'Allowed'] : true;
            updatedHiringData[item].value = hiringData[item].toString();
          }
        })

        updatedHiringData['eduGapsAllowed'].value = ['eduGapsSchool', 'eduGapsGradNPG', 'eduGapsGrad', 'eduGaps12NGrad', 'eduGaps11N12'].some((item)=>hiringData[item+'Allowed']===true);

        const hcBranches = JSON.parse(hiringData['hcProgramsInString']);

        const updatedHcBranches = hcBranches.map((item)=>{
          return {value: item.branchID, label: item.branchName, programID: item.programID, programName: item.programName}
        })

        updatedHiringData['hcPrograms'].value = updatedHcBranches;
        updatedHiringData['hcPrograms'].isDisabled = isEditable ? false : true;

        updatedHiringData['programID'].value = hcBranches[0].programID;
        updatedHiringData['programID'].isDisabled = isEditable ? false : true;

        setHiringCriteriaData(updatedHiringData);
        setIsNew(false);
        setEditable(isEditable);
        setIsOpen(true);

        setHiringCriteriaActualData(hiringData);
    }

    const addHiringCriteria = (body) => {
      if(editable && hiringCriteriaActualData?.hiringCriteriaID) {
        dispatch(actionPatchCorporateHiringCriteriaRequest({
          apiPayloadRequest: {
            id: hiringCriteriaActualData?.hiringCriteriaID,
            body: body,
          },
          callback: () => {
            closeModel();
            setIsNew(true);
            setHiringCriteriaActualData();
            setEditable(false);        
            
            if(isNew) {
              setToastModal('NEW')
            } else {
              setToastModal('UPDATE')
            }
          }
        }));
      } else {
        dispatch(AddHiringSagaAction({
            apiPayloadRequest: body,
            callback: ()=>{
                closeModel();
                setIsNew(true);
                setHiringCriteriaActualData();
                setEditable(false);

                if(isNew) {
                  setToastModal('NEW')
                } else {
                  setToastModal('UPDATE')
                }
            }
        }));
      }
    }

    const cloneHiringCriteria = (id) => {
      dispatch(actionCloneHiringCriteriaRequest({
        apiPayloadRequest:{
          hiringCriteriaId: id
        },
        callback: (response) => {
          console.log('response ', response);
          getHiring();
        }
      }))
    }

    return (
        <>
            <HiringCriteriaCmp
                openCloseModal={formModal}
                detailsModal={(item)=>{
                  detailsModal(item)
                }}
                cloneHiringCriteria={cloneHiringCriteria}
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
                    editHc={()=>{
                      detailsModal(hiringCriteriaActualData, true);
                    }}
                    lookUpData={lookUpData}
                    isNew={isNew}
                    editable={editable}
                    hiringCriteriaData={hiringCriteriaData}
                />}
            />}
            {toastModal && <CustomToastModal
              onClose={() => {
                setToastModal();
              }}
              show={toastModal ? true : false}
              iconNameClass={"fa-briefcase"}
              message={toastModal === 'NEW' ? "Hiring Criteria Saved Successfully!" : "Hiring Criteria Updated Successfully!"}
            />}
        </>
    )
}

export default Index;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {actionGetCampusDriveDefineJobsListRequestSaga, actionPostOrPatchCampusDriveHiringCriteriaRequestSaga, actionPostOrPatchCampusDriveJobRequestSaga} from '../../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import {actionGetCampusDriveHiringCriteriaListRequestSaga, actionDeleteCampusDriveJobRequestSaga, actionPublishJobsCampusDriveRequestSaga, actionGetStudentsListCampusDriveRequestSaga} from '../../../../../../Store/Actions/SagaActions/CampusDriveWorkflowActions/DefineJobsSagaActions';
import HiringCriteriaFormSection from "../../Components/HiringCriteriaFormSection";
import JobFormSection from "../../Components/JobFormSection";
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import CustomToastModal from "../../../../../../Components/CustomToastModal";
import Checkbox from '@material-ui/core/Checkbox';

const StudentsListSection = (props) => {

  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [studentsList, setStudentsList] = useState([]);
  const [toastModal, setToastModal] = useState(false);

  const onCheckHandler = (id) => {
    let updatedSelectedItems = [...selectedItems];

    if (updatedSelectedItems.includes(id)) {
      var deleteItemIndex = updatedSelectedItems.indexOf(id);
      if (deleteItemIndex > -1) {
        updatedSelectedItems.splice(deleteItemIndex, 1);
      }
    } else {
      updatedSelectedItems.push(id);
    }

    setSelectedItems(updatedSelectedItems);
  };

  const publishSelectedItems = (items) => {
    dispatch(actionPublishJobsCampusDriveRequestSaga({
      apiPayloadRequest: {
        cdID: props?.campusDriveId,
        jobIds: items
      },
      callback: (response) => {} 
    }));
  };

  const publishSelected = () => {
    if (selectedItems.length) {
    let updatedSelectedItems = [];

      [].forEach((item) => {
        if (selectedItems.includes(item.jobID)) {
          updatedSelectedItems.push(item.jobID);
        }
      });

      if (updatedSelectedItems?.length) {
        publishSelectedItems(updatedSelectedItems);
      }
    }
  };

  const onSelect = (id) => {
    let updatedSelectedItems = [...selectedItems];

    if (id === "ALL") {
      updatedSelectedItems = [];

      if (selectAll === false) {
        [].forEach((item) => {
          updatedSelectedItems.push(item?.jobID);
        });
      }
      setSelectedItems(updatedSelectedItems);
      setSelectAll(!selectAll);
    } else {
      setSelectedItems(updatedSelectedItems);
    }
  };

  return (
    <div className="bgWhite">
        <p className="text-center text-primary p-2" style={{fontSize: '14px'}}>List of Students Applied</p>
        <div className="CD-define-jobs-list">
            <div style={{border: '1px solid #cacaca', borderRadius: '3px', fontSize: '12px', padding: '6px', maxWidth: '250px', marginBottom: '12px', marginTop: '12px'}}>{props?.jobItem?.jobName}</div>
            <table className={'table table-bordered w-full'}>
                <thead>
                    <tr style={{backgroundColor: '#253AA3', color: 'white', fontSize: '12px'}}>
                        <th>Select/Deselect</th>
                        <th>Student Name</th>
                        <th>College Roll No</th>
                        <th>Email ID</th>
                        <th>Attachment</th>
                        <th>Selected by</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{fontSize: '12px'}}>
                        <td className={'d-flex justify-content-center align-items-center'}>
                            <Checkbox size={'small'} color={'primary'} checked={false} onChange={(e)=>{}} />
                        </td>
                        <td>Rahul Kumar</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>Corporate</td>
                    </tr>
                </tbody>
            </table>
            <div className="text-center mt-4">
                <button type="button" onClick={props?.onClose} style={{height: '35px', width: '120px'}} className="btn ml-4">Cancel</button>
                <button type="button" onClick={()=>{}} style={{height: '35px', width: '120px'}} className="btn ml-4">Save</button>
            </div>
        </div>
        {toastModal && <CustomToastModal
                onClose={() => {
                    setToastModal(false);
                }}
                show={toastModal ? true : false}
                iconNameClass={"fa-briefcase"}
                message={toastModal ? props.mode === 'ADD' ? "Job Saved Successfully!" : "Job Updated Successfully!" : ''}
            />}
    </div>
  );
};

export default StudentsListSection;

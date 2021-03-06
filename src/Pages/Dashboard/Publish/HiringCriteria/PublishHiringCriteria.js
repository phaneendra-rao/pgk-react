import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import HiringCriteriaListItem from "../Components/HiringCriteriaListItem";

import { HiringSagaAction, actionPostPublishCorporateHiringRequest } from "../../../../Store/Actions/SagaActions/HiringSagaAction";
import CustomToastModal from "../../../../Components/CustomToastModal";
import Checkbox from '@material-ui/core/Checkbox';
import { actionGetDependencyLookUpsSagaAction } from '../../../../Store/Actions/SagaActions/CommonSagaActions';

const PublishHiringCriteria = (props) => {
  const dispatch = useDispatch();
  const [hiringCriteriaList, setHiringCriteriaList] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [lookUpData, setLookUpData] = useState([]);
  const [
    publishedHiringCriteriaList,
    setPublishedHiringCriteriaList,
  ] = useState([]);

  useEffect(() => {
    dispatch(actionGetDependencyLookUpsSagaAction({
        apiPayloadRequest: ['branchCatalog', 'programCatalog'],
        callback: dropdowns
    }));
  }, []);

  const dropdowns = (data) => {
    setLookUpData(data);
  }

  const onHiringCriteriaResponse = (response) => {
    if (response?.length) {
      let updatedHiringCriteriaList = [];
      let updatedPublishedHiringCriteriaList = [];

      response.forEach((item) => {
        if (item?.publishedFlag === false) {
          updatedHiringCriteriaList.push(item);
        } else if (item?.publishedFlag === true) {
          updatedPublishedHiringCriteriaList.push(item);
        }
      });

      setHiringCriteriaList(updatedHiringCriteriaList);
      setPublishedHiringCriteriaList(updatedPublishedHiringCriteriaList);
    }
  };

  const getAllHiringCriteria = () => {
    dispatch(
      HiringSagaAction({
        callback: onHiringCriteriaResponse,
      })
    );
  };

  useEffect(() => {
    getAllHiringCriteria();
  }, []);

  const onSelect = (id) => {
    let updatedSelectedItems = [...selectedItems];

    if (id === "ALL") {
      updatedSelectedItems = [];

      if (selectAll === false) {
        hiringCriteriaList.forEach((item) => {
          updatedSelectedItems.push(item?.hiringCriteriaID);
        });
      }
      setSelectedItems(updatedSelectedItems);
      setSelectAll(!selectAll);
    } else {
      setSelectedItems(updatedSelectedItems);
    }
  };

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
    setSelectAll(updatedSelectedItems.length === hiringCriteriaList.length);
  };

  const onPublishSuccess = () => {
    getAllHiringCriteria();
    setShowModal(true);
  }

  const publishSelectedItems = (items) => {
    dispatch(actionPostPublishCorporateHiringRequest({
      apiPayloadRequest: items,
      callback: onPublishSuccess
    }))
  }

  const publishSelected = () => {
    if(selectedItems.length) {
      publishSelectedItems(selectedItems)
    }
  }

  const publishItem = (id) => {
    publishSelectedItems([id]);
  }

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <div className="page-body" style={{ marginTop: 30 }}>
        <p className="heading text-center" style={{fontWeight: "bold"}}>Publish Hiring Criteria</p>
        <div className="row">
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor={'primary'}
            style={{backgroundColor: 'white', width: '100%'}}
          >
            <Tab label="Publish Hiring Criteria" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
            <Tab label="Hiring Criteria History" disableRipple style={{outline: 'none', textTransform: 'capitalize'}} />
          </Tabs>
        </div>
        {tabValue===0 && <div
          className="row published-jobs-section"
          style={{ marginTop: 0, paddingTop: 0 }}
        >
          <div
            className="d-flex flex-column justify-content-start align-items-center w-full"
            style={{ marginTop: 0, paddingTop: 0 }}
          >
            {hiringCriteriaList?.length ? <div className="align-self-start d-flex justify-content-center align-items-center mb-3">
              <Checkbox size={'small'} color={'primary'} checked={selectAll} onChange={(e)=>{
                  onSelect("ALL");
              }} />
              <button
                type="button"
                className="btn"
                style={{ height: "35px", width: "100px", fontSize: ".700rem" }}
                onClick={publishSelected}
              >
                Publish Selected
              </button>
            </div> : ''}
            {hiringCriteriaList?.length ?
              hiringCriteriaList.map((item, index) => {
                return (
                  <HiringCriteriaListItem
                    key={index}
                    item={item}
                    checkHandler={onCheckHandler}
                    onPublish={publishItem}
                    lookUpData={lookUpData}
                    isCheck={
                      selectedItems.includes(item?.hiringCriteriaID)
                        ? true
                        : false
                    }
                  />
                );
              }) : ''}
              {tabValue===0 && hiringCriteriaList?.length === 0 && <div className="row jobs-saved-section-list">
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                  <p className="no-list-message w-full">
                    Nothing to display here
                  </p>
                </div>
              </div>}
          </div>
        </div>}
        {tabValue===1 ? publishedHiringCriteriaList.length ?
                <div className="p-2">
                  {publishedHiringCriteriaList.map((item, index) => {
                  return (
                    <HiringCriteriaListItem
                      key={index}
                      item={item}
                      lookUpData={lookUpData}
                    />
                  );
                })}
                </div> :<div className="row jobs-saved-section-list">
          <div className="d-flex flex-column justify-content-start align-items-center w-full">
            <p className="no-list-message w-full">
              Nothing to display here
            </p>
          </div>
        </div> : null}
      </div>
      
      {showModal && <CustomToastModal
        onClose={() => {
          setShowModal(false);
        }}
        show={showModal}
        iconNameClass={"fa-file"}
        message={"Selected Hiring Criteria(s) Published Successfully"}
      />}
    </>
  );
};

export default PublishHiringCriteria;

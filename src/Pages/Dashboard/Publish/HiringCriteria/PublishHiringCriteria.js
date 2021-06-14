import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import HiringCriteriaListItem from "../Components/HiringCriteriaListItem";

import { HiringSagaAction, actionPostPublishCorporateHiringRequest } from "../../../../Store/Actions/SagaActions/HiringSagaAction";
import CustomToastModal from "../../../../Components/CustomToastModal";
import Checkbox from '@material-ui/core/Checkbox';

const PublishHiringCriteria = (props) => {
  const dispatch = useDispatch();
  const [hiringCriteriaList, setHiringCriteriaList] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [
    publishedHiringCriteriaList,
    setPublishedHiringCriteriaList,
  ] = useState([]);

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

  return (
    <>
      <div className="page-body" style={{ marginTop: 30 }}>
        <div
          className="row published-jobs-section"
          style={{ marginTop: 0, paddingTop: 0 }}
        >
          <div
            className="d-flex flex-column justify-content-start align-items-center w-full"
            style={{ marginTop: 0, paddingTop: 0 }}
          >
            <p className="heading" style={{ fontWeight: "bold" }}>
              Publish Hiring Criteria
            </p>
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
                    isCheck={
                      selectedItems.includes(item?.hiringCriteriaID)
                        ? true
                        : false
                    }
                  />
                );
              }) : ''}
              {hiringCriteriaList?.length === 0 && <div className="row jobs-saved-section-list">
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="no-list-message w-full">
            Nothing to display here
          </p>
        </div>
      </div>}
          </div>
        </div>
      </div>
      <div className="row jobs-saved-section" style={{margin:0}}>
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full">Published Hiring Criteria History</p>
        </div>
      </div>
      {publishedHiringCriteriaList.length ?
              <div className="p-2">
                {publishedHiringCriteriaList.map((item, index) => {
                return (
                  <HiringCriteriaListItem
                    key={index}
                    item={item}
                  />
                );
              })}
              </div> :<div className="row jobs-saved-section-list">
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="no-list-message w-full">
            Nothing to display here
          </p>
        </div>
      </div>}
      <CustomToastModal
        onClose={() => {
          setShowModal(false);
        }}
        show={showModal}
        iconNameClass={"fa-file"}
        message={"Selected Hiring Criteria Have been Published Successfully"}
      />
    </>
  );
};

export default PublishHiringCriteria;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OtherInformationList from '../Components/OtherInformationList';
import {actionPostAddOtherInformationRequest, actionPostPublishOtherInformationRequest, actionGetPublishOtherInformationListRequest} from '../../../../Store/Actions/SagaActions/OtherInformationSagaActions';
import CustomToastModal from "../../../../Components/CustomToastModal";
import PgkTextField from '../../../../Components/FormFields/PgkTextField';
import Close from '@material-ui/icons/Close';
import { toast } from 'react-toastify'

const $ = window.$;

const PublishProfile = () => {
  const initialData = {
    title: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false
    },
    information: {
      value: undefined,
      errorMessage: undefined,
      isRequired: true,
      isDisabled: false
    },
    attachment: {
      value: {
        attachment: undefined,
        attachmentName: undefined,
        attachmentBase64: undefined
      },
      errorMessage: undefined,
      isRequired: false,
      isDisabled: false
    },
  }
  const [otherInfo, setOtherInfo] = useState(initialData);

  const [showModal, setShowModal] = useState(false);
  const [otherInformationList, setOtherInformationList] = useState([]);

  const dispatch = useDispatch();

  const onOtherInformationListResponse = (response) => {
    if (response?.length) {
      setOtherInformationList(response);
    }
  };

  const getPublishedOtherInformation = () => {
    dispatch(
      actionGetPublishOtherInformationListRequest({
        callback: onOtherInformationListResponse,
      })
    );
  }

  useEffect(()=>{
    getPublishedOtherInformation();
  }, [])

  const updateField = (name, value, errorMessage=undefined) => {
    let data = otherInfo[name];
    data["value"] = value;
    data["errorMessage"] = errorMessage;

    setOtherInfo((prevState) => ({
      ...prevState,
      ...data,
    }));
  };

  const onChangeHandler = (name, value, errorMessage=undefined) => {

    switch (name) {
      case 'title':
      case 'information':
        updateField(name, value, errorMessage);
        break;
      case 'attachment':
        if (value.target.files) {
          const file = value.target.files[0];

          let errorMessage = undefined;

          if(parseFloat((value.target.files[0].size / 1024).toFixed(2)) > 5000) {
              errorMessage = 'Please select file below 5 MB';
          }

          const reader = new FileReader();
          reader.readAsBinaryString(file);
  
          reader.onloadend = () => {
            setOtherInfo((prevOtherInfo) => ({
              ...prevOtherInfo,
              [name]: {
                ...prevOtherInfo[name],
                value: {
                  attachment: value.target.files[0],
                  attachmentName: value.target.files[0].name,
                  attachmentBase64: btoa(reader.result)
                },
                errorMessage: errorMessage
              },
            }));
          };
  
          reader.onerror = () => {    
              toast.error("Something went wrong!");
          };
        }
        break;

      default:
        break;
    }

    // event.preventDefault();
    // const { name, value } = event.target;

    // if (name === "attachment") {
    //   if (event.target.files) {
    //     setOtherInfo((prevOtherInfo) => ({
    //       ...prevOtherInfo,
    //       [name]: event.target.files[0],
    //     }));
    //   }
    // } else {
    //   setOtherInfo((prevOtherInfo) => ({
    //     ...prevOtherInfo,
    //     [name]: value,
    //   }));
    // }
  };

  const resetPublishOtherInformation = () => {
    setOtherInfo(initialData);
    var $el = $('#attachment');
    $el.wrap('<form>').closest('form').get(0).reset();
    $el.unwrap();
  }

  const isFormValid = () => {
    let isValid = false;

    if((otherInfo?.title?.isRequired && otherInfo?.title?.errorMessage) || (otherInfo?.information?.isRequired && otherInfo?.information?.errorMessage)) {
      isValid = false
    } else {
      isValid = true
    }

    if((otherInfo?.title?.isRequired && otherInfo?.title?.value && otherInfo?.title?.value?.trim()!=='') || (otherInfo?.information?.isRequired && otherInfo?.information?.value && otherInfo?.information?.value?.trim()!=='')) {
      isValid = true
    } else {
      isValid = false
    }

    if(otherInfo?.attachment?.isRequired && otherInfo?.attachment?.errorMessage) {
      isValid = false
    }

    return isValid;
  }
  

  const onPublish = () => {
    resetPublishOtherInformation();
    getPublishedOtherInformation();
    setShowModal(true);
  }

  const onAddOtherInformation = (response) => {
    if(response?.id) {
      dispatch(actionPostPublishOtherInformationRequest({
        apiPayloadRequest: [response.id],
        callback: onPublish
      }))
    }
  }

  const addOtherInformation = () => {
    console.log('otherInfo ', otherInfo);
    const updatedOtherInformation = {
      title: otherInfo?.title?.value,
      information: otherInfo?.information?.value,
      attachment: otherInfo?.attachment?.value?.attachment
    }
      dispatch(actionPostAddOtherInformationRequest({
        apiPayloadRequest: updatedOtherInformation,
        callback: onAddOtherInformation
      }));
  }

  return (
    <div className="main" style={{ marginTop: 0 }}>
      <h3 className="main-title">Other Information</h3>

      <form>
      <div className="gbl-profile-set other-info">
          <div className="row">
            <div className="col-md">
              <div className="mb-20">
                <PgkTextField
                  name="title"
                  value={otherInfo?.title?.value}
                  onChange={onChangeHandler}
                  label={"Title"}
                  disabled={otherInfo?.title?.isDisabled}
                  errorMessage={otherInfo?.title?.errorMessage?.value}
                  required={otherInfo?.title?.isRequired}
                />
              </div>
              <div className="mb-20">
                <PgkTextField
                  name="information"
                  value={otherInfo?.information?.value}
                  label={"Information/Text"}
                  required={otherInfo?.information?.isRequired}
                  disabled={otherInfo?.information?.isDisabled}
                  onChange={onChangeHandler}
                  multiline={true}
                  minRows={6}
                />
              </div>
              <div className="d-attach">
                <div className={`col-md-${otherInfo?.attachment?.value?.attachment ? '11' : '12'}`}>
                  {otherInfo?.attachment?.value?.attachmentName ? <div className={'d-flex justify-content-between align-items-center'} style={{width:'84%'}}>
                      <p className="float-left" style={{padding: '8px', fontSize: '.800rem', flex: '1'}}>{otherInfo?.attachment?.value?.attachmentName}</p>
                      <Close style={{fontSize:'20px', float:'right'}} onClick={()=>{
                          var $el = $('#attachment');
                          $el.wrap('<form>').closest('form').get(0).reset();
                          $el.unwrap();
                          updateField('attachment', undefined);
                      }} style={{cursor:'pointer', color:'#878BA6'}} />                                    
                  </div> : null}
                  <label htmlFor="attachment" className="d-label">
                    <i className="fas fa-paperclip mr-2"></i>
                    Attachment
                  </label>
                  <input
                    type="file"
                    className="d-inp d-none"
                    name="attachment"
                    id="attachment"
                    accept=".pdf"
                    onChange={(e)=>{
                      onChangeHandler('attachment', e);
                    }}
                  />
                </div>
                {otherInfo?.attachment?.value?.attachmentBase64 && <div className="col-md-1" style={{margin:0, padding:0}}>
                    <div className="d-attach" style={{cursor: 'pointer'}}>
                    {otherInfo?.attachmentBase64?.value?.attachmentBase64?.trim()!=='' ? <a href={'data:application/pdf;base64,'+otherInfo?.attachment?.value?.attachmentBase64} style={{textDecoration:'none', outline:'none', width: '100%', cursor:'pointer'}} download> <label style={{backgroundColor: '#878BA6', width: '100%', height: '100%', paddingTop: '10px', color: 'white', textAlign: 'center', cursor: 'pointer'}} >
                        <i className="fas fa-download mr-2"></i>
                        </label></a> : null}
                    </div>
                </div>}
              </div>
              {otherInfo?.attachment?.errorMessage ? <p style={{color:'red', fontSize: '.800rem', marginTop:'-15px'}}>{otherInfo?.attachment?.errorMessage}</p> : null}
            </div>
          </div>

          <div className="w-100 text-center mt-4">
            <button type="button" onClick={resetPublishOtherInformation} className="btn mr-1">
              Reset
            </button>
            <button
              type="button"
              className="btn ml-1"
              disabled={!isFormValid()}
              onClick={addOtherInformation}
            >
              Publish
            </button>
          </div>
      </div>
      </form>

      <div className="row jobs-saved-section">
        <div className="d-flex flex-column justify-content-start align-items-center w-full">
          <p className="heading w-full">Information Publish History</p>
        </div>
      </div>
      <OtherInformationList otherInformationList={otherInformationList} />
      <CustomToastModal
        onClose={() => {
          setShowModal(false);
        }}
        show={showModal}
        iconNameClass={"fa-file"}
        message={"Selected Information has been Published Successfully"}
      />
    </div>
  );
};

export default PublishProfile;

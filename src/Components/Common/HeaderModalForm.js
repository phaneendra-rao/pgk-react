import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PgkTextField from '../FormFields/PgkTextField';

const $ = window.$;


const HeaderModalForm = (props) => {
  const [amountField, setAmountField] = useState({
      value: undefined,
      errorMessage: '',
  });
  let history = useHistory();

  useEffect(() => {
    setAmountField((prevState)=>({
        ...prevState,
        value: props?.additionalTokens,
        errorMessage: undefined
    }));
  }, [props?.additionalTokens]);

  const handleChange = (name, value, errorMessage) => {
    setAmountField((prevState)=>({
        ...prevState,
        value: value,
        errorMessage: errorMessage
    }));
  };

  const handleSubmit = () => {
    if (amountField.value===undefined || amountField.value?.toString()?.trim()==='') return;
    localStorage.setItem("tokensPurchase", amountField.value);
    history.push("/payment");
  };


  return (
    <div className="modal-content purchase-modal">
      <div className="modal-header purchase-modal-header">
        <button
          type="button"
          className="close"
          onClick={props?.onClose}
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
        <div className="modal-body purchase-modal-body d-flex flex-column justify-content-center align-items-center">
          <p className="heading">
            How many credits would you like to purchase ?
          </p>
        <PgkTextField
            type={"number"}
            name="amount"
            value={
                amountField?.value !== undefined
                ? parseInt(amountField?.value)
                : ""
            }
            onChange={handleChange}
            errorMessage={
                amountField?.errorMessage
            }
            className={'credits-input'}
            required
            validations={["isNumeric"]}
            inputProps={{min:1}}
            />
        </div>
        <div className="text-center">
          <button
            type="button"
            className="modal-footer-full-btn w-100 border-0 disabled"
            style={{cursor:'pointer'}}
            disabled={amountField.errorMessage===undefined ? false : true}
            onClick={handleSubmit}
          >
            Purchase
          </button>
        </div>
    </div>
  );
};

export default HeaderModalForm;

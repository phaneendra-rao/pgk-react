import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
const $ = window.$;

const HeaderModalForm = () => {
    const [amount, setAmount] = useState(0);
    let history = useHistory()

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAmount(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!amount) return;
        localStorage.setItem('tokensPurchase', amount);
        $('#balance').modal('hide');
        history.push('/payment');
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="modal-body purchase-modal-body d-flex flex-column justify-content-center align-items-center">
                    <p className="heading">How many credits would you like to purchase ?</p>
                    <input type="number" name="amount" onChange={handleChange} className="form-control credits-input" required />
                </div>
                <div className="text-center">
                    <button type="submit" className="modal-footer-full-btn w-100 border-0">
                        Purchase
                </button>
                </div>
            </form>
        </>
    )
}

export default HeaderModalForm;
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import CorporatePaymentCmp from '../../../../Components/Forms/CorporateCmp/RegisterCmp/CorporatePaymentCmp';
import { CreatePaymentAction, ValidatePaymentAction } from '../../../../Store/Actions/CorporateActions/CorporateAction';
const $ = window.$;

const CorporatePayment = (props) => {
    let history = useHistory()
    const initialState = {
        name: '',
        email: '',
        contact: ''
    }
    const [paymentData, setpaymentData] = useState(initialState);
    const [errors, setErrors] = useState({ emailErr: '', passwordErr: '', nameErr: '', mobileErr: '', amtErr: '' });
    const [gstCalc, setGstCalc] = useState({ total: 0, gst: 0, amount: 0 });

    const paymentOrder = useSelector(state => state.CorporateReducer.paymentOrder);

    const dispatch = useDispatch();

    useEffect(() => {
        let tokensPurchase = localStorage.getItem('tokensPurchase');
        let model;
        if (tokensPurchase) {
            model = {
                payType: 'ADD_TKN',
                tokensToAdd: tokensPurchase
            }
        } else {
            model = {
                payType: 'REG_FEE',
            }            
        }
        dispatch(CreatePaymentAction(model));
        // $('#role').modal('show');
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            localStorage.removeItem('tokensPurchase');
        }
    }, []);

    useEffect(() => {
        const val = paymentOrder.amount;
        const total = val + (val * 0.18);
        setpaymentData({
            amount: val
        })
        setGstCalc({
            amount: val,
            gst: (val * 0.18).toFixed(2),
            total: total.toFixed(2)
        });
    }, [paymentOrder])

    const openPayModal = () => {
        const options = {
            key: "rzp_test_as3TPs08PoZ4UR",
            amount: gstCalc.total * 100, //  = INR 1
            name: "PGK",
            description: "PGK TECHNOLOGIES PRIVATE LIMITED",
            image: "https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png",
            handler: function (response) {
                dispatch(ValidatePaymentAction(paymentOrder.orderID))
                // alert(response.razorpay_payment_id);
                $('#paymentSuccess').modal({ backdrop: 'static', keyboard: false });
                $('#paymentSuccess').modal('show');
            },
            prefill: {
                name: paymentData.name,
                contact: paymentData.contact,
                email: paymentData.email
            },
            notes: {
                address: ""
            },
            theme: {
                color: "blue",
                hide_topbar: false
            }
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };


    const handlerChange = (event) => {
        const { name, value } = event.target;
        setpaymentData(preState => ({
            ...preState,
            [name]: value
        }));

        switch (name) {
            case 'name':
                if (value) {
                    setErrors(preState => ({
                        ...preState,
                        nameErr: ''
                    }));
                } else if (!value) {
                    setErrors(preState => ({
                        ...preState,
                        lnameErr: 'Last name error'
                    }));
                }
                return;
            case 'email':
                const mailformat1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                if (value && mailformat1.test(value)) {
                    setErrors(preState => ({
                        ...preState,
                        email2Err: ''
                    }));
                } else if (!value || !mailformat1.test(value)) {
                    setErrors(preState => ({
                        ...preState,
                        email2Err: 'Email error'
                    }));
                }
                return;
            case 'contact':
                const num = /^[+-]?[0-9\b]+$/;
                if (num.test(value)) {
                    // if (val.match(phoneno)) {
                    if (value.length >= 10) {
                        setErrors(preState => ({
                            ...preState,
                            mobileErr: ''
                        }));
                    } else {
                        setErrors(preState => ({
                            ...preState,
                            mobileErr: 'Invalid'
                        }));
                    }
                } else {
                    setErrors(preState => ({
                        ...preState,
                        mobileErr: 'Invalid'
                    }));
                }
                return;
            case 'amount':
                const val = parseInt(value);
                const total = val + (val * 0.18);
                setGstCalc({
                    amount: val,
                    gst: (val * 0.18).toFixed(2),
                    total: total.toFixed(2)
                });
                if (value.length >= 0) {
                    setErrors(preState => ({
                        ...preState,
                        amtErr: ''
                    }));
                } else {
                    setErrors(preState => ({
                        ...preState,
                        amtErr: 'Invalid'
                    }));
                }
                return;

            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, contact } = paymentData;
        const { nameErr, mobileErr, emailErr, amtErr } = errors;
        if (name && email && contact && !nameErr && !mobileErr && !amtErr) {
            openPayModal();
        } else {
            toast.error("Please enter required input fields");
        }
    }

    const closeModal = () => {
        $('#paymentSuccess').modal('hide');
        history.replace('/dashboard')
    }

    return (
        <>
            <div className="reg-payment">
                <h2 className="reg-payment-title">Choose the Payment mode</h2>
                <div className="row">
                    <div className="col-md-7">
                        <ul className="nav nav-pills nav-justified" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="Credit-tab" data-toggle="pill" href="#Credit" role="tab" aria-controls="Credit" aria-selected="true"><i className="far fa-credit-card" /> Credit/Debit Card</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="Net-tab" data-toggle="pill" href="#Net" role="tab" aria-controls="Net" aria-selected="false"><i className="fas fa-university" /> Net Banking</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="UPI-tab" data-toggle="pill" href="#UPI" role="tab" aria-controls="UPI" aria-selected="false">UPI/Wallets</a>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="Credit" role="tabpanel" aria-labelledby="Credit-tab">
                                <CorporatePaymentCmp
                                    paymentData={paymentData}
                                    errors={errors}
                                    handlerChange={handlerChange}
                                    handleSubmit={handleSubmit}
                                />
                            </div>
                            {/* <div className="tab-pane fade" id="Net" role="tabpanel" aria-labelledby="Net-tab">
                            coming soon...
                        </div>
                        <div className="tab-pane fade" id="UPI" role="tabpanel" aria-labelledby="UPI-tab">
                            coming soon...
                        </div> */}
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="payment-summary">
                            <h5 className="payment-summary-header">Fee Summary</h5>
                            <ul className="payment-data">
                                <li className="payment-data-li">
                                    <p className="payment-data-name">Registration Fee</p>
                                    <span>{gstCalc.amount}</span>
                                </li>
                                <li className="payment-data-li">
                                    <p className="payment-data-name">GST (18%) <span>rounded</span></p>
                                    <span>{gstCalc.gst}</span>
                                </li>
                                <li className="payment-data-li">
                                    <p className="payment-data-name">Total</p>
                                    <span><i className="fas fa-rupee-sign" style={{ fontSize: '12px' }}></i>{gstCalc.total}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="paymentSuccess" tabIndex={-1} role="dialog" data-keyboard="false" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content modal-form">
                        <div className="modal-body">
                            <h4 className="modal-title mb-1 mt-0">Payment is successful</h4>
                            <form className="login-form mx-auto">
                                <div className="login-grp mb-2 mx-auto text-center text-success">
                                    <i className="fas fa-check-circle" style={{ fontSize: '70px' }}></i>
                                </div>
                                <div className="text-center">
                                    <button type="button" onClick={closeModal} className="login-btn mb-0">Proceed</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CorporatePayment;

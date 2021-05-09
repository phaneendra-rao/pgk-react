import React from 'react'

const UniversitySubscribeModal = (props) => {
    const tokensrequired = props?.tokens?.tokensrequired;
    const total = props.balance?.bonusTokenBalance + props.balance?.paidTokenBalance;
    const bonusTokenBalance = props.balance?.bonusTokenBalance;
    const isAdditionalTokensRequired = props.balance?.paidTokenBalance < (tokensrequired - props.bonusTokensUsed);
    const additionalTOkens = props.balance?.paidTokenBalance - (tokensrequired - props.bonusTokensUsed);

    return (

        <div className="subscription-modal">
<div className="modal-header">
                            <label className="modal-title">
                                <i className="far fa-folder-open" />
                                <span>Subscription</span>
                            </label>
                            <i className="far fa-times-circle close-icon" data-dismiss="modal" />
                        </div>
                        <div className="modal-body">
                            <div className="card ">
                                <span>Subscription Cost to access</span>
                                <li className="inner-list"><span>{props.label}</span> </li>
                                <div className="tokens float-right">{tokensrequired} Tokens</div>
                            </div>
                            <div className="card ">
                                <span>Available Tokens in the Wallet</span>
                                <div className="tokens"> {total} Tokens</div>
                            </div>
                            <div className="card ">
                                <span>Available Bonus Tokens</span>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" onChange={props.bonusCalc} className="custom-control-input" id="Bonus" />
                                    <label className="custom-control-label" htmlFor="Bonus">Use Bonus tokens to pay for 10% of the transaction</label>
                                </div>
                                <div className="tokens float-right">
                                    {bonusTokenBalance} Tokens
                                    <span className="badge badge-pill badge-success">{props.bonusTokensUsed}</span>
                                </div>
                            </div>
                            <div className="card">
                                <span>Additional Tokens required</span>
                                <div className="tokens">
                                    {isAdditionalTokensRequired ? additionalTOkens : 0} Tokens
                                </div>
                            </div>
                            <div className="buttons text-center mt-5">
                                <button
                                    type="button"
                                    onClick={props.subscribeUnv}
                                    disabled={isAdditionalTokensRequired}
                                    className={isAdditionalTokensRequired ? 'tb-btn-grey btn3' : 'btn3'}
                                    style={{ cursor: !isAdditionalTokensRequired ? 'pointer' : 'not-allowed' }}>
                                    Complete Subscription
                                    </button>
                                <button
                                    data-dismiss="modal"
                                    data-toggle="modal"
                                    data-target="#balance"
                                    onClick={() => props.closeSubModal(additionalTOkens)}
                                    disabled={!isAdditionalTokensRequired}
                                    className={!isAdditionalTokensRequired ? 'tb-btn-grey btn3' : 'btn3 text-white'}
                                    style={{ cursor: isAdditionalTokensRequired ? 'pointer' : 'not-allowed' }}>
                                    + Add Tokens
                                </button>
                            </div>
                        </div>
        </div>
    )
}

export default UniversitySubscribeModal

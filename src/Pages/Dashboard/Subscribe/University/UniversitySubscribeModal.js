import React from 'react'

const UniversitySubscribeModal = (props) => {
    const tokensrequired = props?.tokens?.tokensrequired;
    const total = props.balance?.bonusTokenBalance + props.balance?.paidTokenBalance;
    const isAdditionalTokensRequired = total > tokensrequired;

    return (
        <>
            <div className="modal fade" id="subscribe">
                <div className="modal-dialog modal-dialog-centered subscription-modal" style={{ maxWidth: '700px' }}>
                    <div className="modal-content">
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
                                <li className="inner-list"><span>Osmania University Insights</span> </li>
                                <div className="tokens float-right">{tokensrequired} Tokens</div>
                            </div>
                            <div className="card ">
                                <span>Available Tokens in the Wallet</span>
                                <div className="tokens"> {total} Tokens</div>
                            </div>
                            <div className="card">
                                <span>Additional Tokens required</span>
                                <div className="tokens">0Tokens</div>
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
                                    onClick={props.closeSubModAL}
                                    disabled={!isAdditionalTokensRequired}
                                    className={!isAdditionalTokensRequired ? 'tb-btn-grey btn3' : 'btn3 text-white'}
                                    style={{ cursor: isAdditionalTokensRequired ? 'pointer' : 'not-allowed' }}>
                                    + Add Tokens
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UniversitySubscribeModal

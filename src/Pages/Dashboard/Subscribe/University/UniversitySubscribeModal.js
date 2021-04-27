import React from 'react'

const UniversitySubscribeModal = (props) => {
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
                                <div className="tokens float-right">{props?.tokens?.tokensrequired} Tokens</div>
                            </div>
                            <div className="card ">
                                <span>Available Tokens in the Wallet</span>
                                <div className="tokens"> {props.balance?.bonusTokenBalance + props.balance?.paidTokenBalance} Tokens</div>
                            </div>
                            <div className="card">
                                <span>Additional Tokens required</span>
                                <div className="tokens">0 Tokens</div>
                            </div>
                            <div className="buttons text-center mt-5">
                                <button className="btn3">Complete Subscription</button>
                                <button className="tb-btn-grey btn3">+ Add Tokens</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UniversitySubscribeModal

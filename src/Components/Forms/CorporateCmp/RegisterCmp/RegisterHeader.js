import React from 'react'

const RegisterHeader = (props) => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="reg-header">
                    <h4 className="reg-header-title">{props?.title}</h4>
                    <hr className="reg-header-hr" />
                </div>
            </div>
        </div>
    )
}

export default RegisterHeader;

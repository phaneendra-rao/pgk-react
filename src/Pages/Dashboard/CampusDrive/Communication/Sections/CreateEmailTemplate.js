import React, { useState } from 'react'
import { TextField } from '@material-ui/core';

const CreateEmailTemplate = (props) => {

    return (
        <>
            <div className="container">
                <form className="row add-new-jobs-section" onSubmit={props.handleSubmit} style={{ background: "white" }}  >
                    <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }} >
                        <TextField
                            label="Email Template ID"
                            type="text"
                            name="id"
                            onChange={props.handleChange}
                            className="form-control"
                            InputLabelProps={{
                                shrink: true,
                                style: { fontFamily: "Poppins-Regular", display: "block" }
                            }}
                            inputProps={{
                                style: { fontFamily: "Poppins-Regular", display: "block" }
                            }}
                            disabled={true}
                            variant="outlined"
                            margin="dense"
                            style={{ maxWidth: "40%" }}
                            value={props.addEmailTemplate.id}
                        />
                        <TextField
                            label="Email Template Name"
                            type="text"
                            name="name"
                            onChange={props.handleChange}
                            className="form-control"
                            InputLabelProps={{
                                shrink: true,
                                style: { fontFamily: "Poppins-Regular", display: "block" }
                            }}
                            inputProps={{
                                style: { fontFamily: "Poppins-Regular", display: "block" }
                            }}
                            required={true}
                            variant="outlined"
                            margin="dense"
                            style={{ maxWidth: "40%" }}
                            value={props.addEmailTemplate.name}
                        />
                    </div>
                    <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }} >
                        <TextField
                            label="Email Subject"
                            type="text"
                            name="subject"
                            onChange={props.handleChange}
                            InputLabelProps={{
                                shrink: true,
                                style: { fontFamily: "Poppins-Regular", display: "block" }
                            }}
                            inputProps={{
                                style: { fontFamily: "Poppins-Regular", display: "block" }
                            }}
                            variant="outlined"
                            margin="dense"
                            style={{ width: "90%" }}
                            required={true}
                            value={props.addEmailTemplate.subject}
                        />
                    </div>
                    <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }} >
                        <TextField
                            label="Email Body"
                            type="text"
                            name="body"
                            onChange={props.handleChange}
                            InputLabelProps={{
                                shrink: true,
                                style: { fontFamily: "Poppins-Regular", display: "block" }
                            }}
                            inputProps={{
                                style: { fontFamily: "Poppins-Regular", display: "block" }
                            }}
                            variant="outlined"
                            margin="dense"
                            rows={6}
                            multiline={true}
                            style={{ width: "90%" }}
                            required={true}
                            value={props.addEmailTemplate.body}
                        />
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center job-details-form w-full"
                        style={{ background: "white" }}>
                        <button type="button" className="btn" onClick={() => { props.onCancel() }}>Cancel</button>
                        <button type="submit" className="btn" >Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateEmailTemplate;
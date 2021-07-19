import React, { useState, useEffect, useRef } from "react";
import { FormControl, Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { CSVLink } from 'react-csv';

const ValidateProfiles = (props) => {
    const dispatch = useDispatch();
    const csvLink = useRef();

    const onDownloadData = () => {
        csvLink.current.link.click();
    }

    return (
        <div className="bgWhite h-full">
            <CSVLink
                data={"DummyData"}
                filename='StudentsData.csv'
                className='hidden'
                ref={csvLink}
                target='_blank'
            />
            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                    View & Validate Profiles
                </p>
            </div>
            <br />
            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                <TextField
                    select
                    label="Job Name"
                    // name="startDate"
                    // onChange={props.handleChange}
                    InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    inputProps={{
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    variant="outlined"
                    margin="dense"
                    style={{ width: "45%" }}
                    required={true}
                // value={props.addProgram.startDate}
                />
                <TextField
                    select
                    label="Round Name"
                    // name="startDate"
                    // onChange={props.handleChange}
                    InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    inputProps={{
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    variant="outlined"
                    margin="dense"
                    style={{ width: "45%" }}
                    required={true}
                // value={props.addProgram.startDate}
                />
            </div>
            <br />
            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                <TextField
                    label="From Date"
                    type="date"
                    // name="startDate"
                    // onChange={props.handleChange}
                    InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    inputProps={{
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    variant="outlined"
                    margin="dense"
                    style={{ width: "30%" }}
                    required={true}
                    placeholder="dd-mon-yyyy"
                // value={props.addProgram.startDate}
                />
                <TextField
                    label="To Date"
                    type="date"
                    name="endDate"
                    // onChange={props.handleChange}
                    InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    inputProps={{
                        // min: props.addProgram.startDate,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    //disabled={props.addProgram.startDate.length > 0 ? false : true}
                    variant="outlined"
                    margin="dense"
                    style={{ width: "30%" }}
                // value={props.addProgram.endDate}
                />
                <TextField
                    label="ShortListed Students"
                    type="number"
                    name="rank"
                    // onChange={props.handleChange}
                    className="form-control"
                    InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    inputProps={{
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    variant="outlined"
                    margin="dense"
                    style={{ maxWidth: "30%" }}
                    value={3} //{props.addRanking.rank}
                // helperText={props.rankNumberErr}
                // error={props.rankNumberErr ? true : false}
                />
            </div>
            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                <button type="button" className="btn"><p>Fetch Students</p></button>
            </div>
            <br />
            <div style={{ borderTop: "1px solid black", width: "100%", marginLeft: 20, marginRight: 20 }}></div>
            <br />
            <table class="table table-striped table-bordered">
                <thead style={{ backgroundColor: "#253AA3", color: "white" }}>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">College Roll No.</th>
                        <th scope="col">Email ID</th>
                        <th scope="col">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Vishwanathan Anand</td>
                        <td>11UQ1A0501</td>
                        <td>vishyanand@gmail.com</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Magnus Carlsen</td>
                        <td>11UQ1A0502</td>
                        <td>magcarl@gmail.com</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mikhal Tal</td>
                        <td>11UQ1A0503</td>
                        <td>MagicianOfRiga@gmail.com</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <br />
            <div style={{ borderTop: "1px solid black", width: "100%", marginLeft: 20, marginRight: 20 }}></div>
            <br />
            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                <button type="button" className="btn" onClick={onDownloadData}><p>Download</p></button>
            </div>
            <br />
            <br />
        </div>
    );
};

export default ValidateProfiles;

import React, { useState, useEffect, useRef } from "react";
import { FormControl, Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { CSVLink } from 'react-csv';

const ReleaseOfferLetters = (props) => {
    const dispatch = useDispatch();
    const csvLink = useRef();

    const onDownloadData = () => {
        csvLink.current.link.click();
    }

    return (
        <div className="bgWhite h-full" style={{ width: "600px", height:"700px" }}>
            <CSVLink
                data={"DummyData"}
                filename='ShortListedStudents.csv'
                className='hidden'
                ref={csvLink}
                target='_blank'
            />
            <div className="d-flex flex-column justify-content-start align-items-center w-full">
                <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                    Release Offer Results
                </p>
            </div>
            <br />
            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full mr-4" style={{ background: "white", width: "500px" }}>
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
                    style={{ maxWidth: "60%" }}
                    value={3} //{props.addRanking.rank}
                // helperText={props.rankNumberErr}
                // error={props.rankNumberErr ? true : false}
                />
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
                        <th scope="col">Designation</th>
                        <th scope="col">Location</th>
                        <th scope="col">JoiningDate</th>
                        <th scope="col">Offer Letter</th>
                        <th scope="col">Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Vishwanathan Anand</td>
                        <td>11UQ1A0501</td>
                        <td>vishyanand@gmail.com</td>
                        <td>Trainer</td>
                        <td>
                            <select
                                name="round1Type"
                            >
                                <option value="">Select Location</option>
                                <option value="Banglore"> Banglore </option>
                                <option value="Chennai"> Chennai </option>
                                <option value="Hyderabad"> Hyderabad </option>
                            </select>
                        </td>
                        <td><input type="date" /></td>
                        <td><input type="file" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Magnus Carlsen</td>
                        <td>11UQ1A0502</td>
                        <td>magcarl@gmail.com</td>
                        <td>Associate Trainer</td>
                        <td> <select
                            name="round1Type"
                        >
                            <option value="">Select Location</option>
                            <option value="Banglore"> Banglore </option>
                            <option value="Chennai"> Chennai </option>
                            <option value="Hyderabad"> Hyderabad </option>
                        </select></td>
                        <td><input type="date" /></td>
                        <td><input type="file" /></td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mikhal Tal</td>
                        <td>11UQ1A0503</td>
                        <td>MagicianOfRiga@gmail.com</td>
                        <td>Lead Manager</td>
                        <td> <select
                            name="round1Type"
                        >
                            <option value="">Select Location</option>
                            <option value="Banglore"> Banglore </option>
                            <option value="Chennai"> Chennai </option>
                            <option value="Hyderabad"> Hyderabad </option>
                        </select></td>
                        <td><input type="date" /></td>
                        <td><input type="file" /></td>
                        <td><input type="text" /></td>
                    </tr>
                </tbody>
            </table>
            <br />
            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                <TextField
                    select
                    label="Email Template for Student"
                    variant="outlined"
                    style={{ width: "45%" }}
                    InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    inputProps={{
                        name: 'programType',
                        style: { fontFamily: "Poppins-Regular", display: "block", paddingRight: "10px" }
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    required={true}
                >
                    <option value="">Select a Template</option>
                    {/* {props.programTypes?.length && (
                            props.programTypes.map((item) => {
                                return <option value={item.programType}
                                    key={item.programType}
                                    selected={props.addProgram.programType === item.programType ? true : false}>{item.programType}</option>
                            })
                        )} */}
                </TextField>
                <TextField
                    select
                    label="Email Template for University"
                    // value={props.addProgram.programName}
                    // onChange={props.handleChange}
                    variant="outlined"
                    style={{ width: "45%" }}
                    InputLabelProps={{
                        shrink: true,
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    inputProps={{
                        name: 'programName',
                        style: { fontFamily: "Poppins-Regular", display: "block" }
                    }}
                    SelectProps={{
                        native: true,
                    }}
                    required={true}
                >
                    <option value="">Select a Template</option>
                    {/* {props.programNames?.length && (
                            props.programNames.map((item) => {
                                return <option value={item.programName}
                                    key={item.programName}
                                    selected={props.addProgram.programName === item.programName ? true : false}>{item.programName}({item.programCode})</option>
                            })
                        )} */}
                </TextField>
            </div>
            <br />
            <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white", width: "600px" }}>
                <button type="button" className="btn" onClick={onDownloadData}><p>Download</p></button>
                <button type="button" className="btn"><p>Release Letters</p></button>
            </div>
            <br />
            <br />
        </div>
    );
};

export default ReleaseOfferLetters;

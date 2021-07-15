import React, { useState, useEffect } from "react";
import { FormControl, Grid, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";

const RoundWiseResults = (props) => {
    const dispatch = useDispatch();
    return (
        <div className="bgWhite h-full">
            <div className="container">
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                        Round Wise Results
                    </p>
                </div>
                <br />
                <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                    <TextField
                        select
                        label="Job Name"
                        variant="outlined"
                        style={{ width: "30%" }}
                        InputLabelProps={{
                            shrink: true,
                            style: { fontFamily: "Poppins-Regular", display: "block" }
                        }}
                        inputProps={{
                            name: 'programType',
                            style: { fontFamily: "Poppins-Regular", display: "block" }
                        }}
                        SelectProps={{
                            native: true,
                        }}
                        select
                        required={true}
                    >
                        <option value="">Select a Job</option>
                        {/* {props.programTypes?.length && (
                            props.programTypes.map((item) => {
                                return <option value={item.programType}
                                    key={item.programType}
                                    selected={props.addProgram.programType === item.programType ? true : false}>{item.programType}</option>
                            })
                        )} */}
                    </TextField>
                </div>
                <br />
                <div style={{ borderTop: "1px solid black", width: "100%", marginLeft: 20, marginRight: 20 }}></div>
                <br />
                <table class="table table-striped table-bordered">
                    <thead style={{ backgroundColor: "#253AA3", color: "white" }}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Round Name</th>
                            <th scope="col">From Date</th>
                            <th scope="col">To Date</th>
                            <th scope="col">Type</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Round 1 </td>
                            <td>17-Jul-2021</td>
                            <td>18-Jul-2021</td>
                            <td> Written Test</td>
                            <td> <button type="button" className="btn" style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Round 2</td>
                            <td>20-Jul-2021</td>
                            <td>21-Jul-2021</td>
                            <td>Coding Test</td>
                            <td> <button type="button" className="btn" style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Round 3</td>
                            <td>20-Jul-2021</td>
                            <td>21-Jul-2021</td>
                            <td>HR Interview</td>
                            <td> <button type="button" className="btn" style={{ backgroundColor: "gray" }}><p>Capture Results</p></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RoundWiseResults;

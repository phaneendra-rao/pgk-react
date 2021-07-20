import React, { useState, useEffect } from "react";
import { TextField } from '@material-ui/core';
import { useDispatch } from "react-redux";

const CaptureResults = (props) => {
    const dispatch = useDispatch();

    function getFormattedDate(date) {
        var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct',
            'Nov', 'Dec'];
        var d = new Date(date);

        return d.getDate() + '-' + month[d.getMonth()] + '-' + d.getFullYear();
    }

    return (
        <div className="bgWhite h-full">
            <div className="bgWhite h-full">
                <div className="d-flex flex-column justify-content-start align-items-center w-full">
                    <p className="heading" style={{ color: "#253AA3", fontWeight: "bold", fontFamily: "Poppins-Regular", display: "block" }}>
                        Capture Round Wise Results
                    </p>
                </div>
                <br />
                <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                    <TextField
                        label="Job Name"
                        variant="outlined"
                        type="text"
                        value={props.captureResultsModel.jobName}
                        InputLabelProps={{
                            shrink: true,
                            style: { fontFamily: "Poppins-Regular", display: "block" }
                        }}
                        inputProps={{
                            style: { fontFamily: "Poppins-Regular", display: "block" }
                        }}
                        margin="dense"
                        style={{ width: "45%" }}
                    />
                    <TextField
                        label="Round Name"
                        variant="outlined"
                        type="text"
                        value={props.captureResultsModel.roundName}
                        InputLabelProps={{
                            shrink: true,
                            style: { fontFamily: "Poppins-Regular", display: "block" }
                        }}
                        inputProps={{
                            style: { fontFamily: "Poppins-Regular", display: "block" }
                        }}
                        margin="dense"
                        style={{ width: "45%" }}
                    />
                </div>
                <br />
                <div className="d-flex flex-row justify-content-around align-items-center job-details-form w-full" style={{ background: "white" }}>
                    <TextField
                        label="From Date"
                        type="text"
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
                        value={getFormattedDate(props.captureResultsModel.startDate)}
                    />
                    <TextField
                        label="To Date"
                        type="text"
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
                        value={getFormattedDate(props.captureResultsModel.endDate)}
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
                <br />
                <div style={{ borderTop: "1px solid black", width: "100%", marginLeft: 20, marginRight: 20 }}></div>
                <br />
                <table class="table table-striped table-bordered">
                    <thead style={{ backgroundColor: "#253AA3", color: "white" }}>
                        <tr>
                            <th scope="col">Select/Deselect</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">College Roll No.</th>
                            <th scope="col">Email ID</th>
                            <th scope="col">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"><input type="checkbox" /></th>
                            <td>Vishwanathan Anand</td>
                            <td>11UQ1A0501</td>
                            <td>vishyanand@gmail.com</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"> <input type="checkbox" /></th>
                            <td>Magnus Carlsen</td>
                            <td>11UQ1A0502</td>
                            <td>magcarl@gmail.com</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"><input type="checkbox" /> </th>
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
                    <button type="button" className="btn"><p>Share</p></button>
                </div>
                <br />
                <br />
            </div>
        </div>
    );
};

export default CaptureResults;
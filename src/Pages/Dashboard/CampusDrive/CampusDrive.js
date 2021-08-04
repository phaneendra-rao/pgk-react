import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Chat from '@material-ui/icons/Chat';
import BusinessCenter from '@material-ui/icons/BusinessCenter';
import Person from '@material-ui/icons/Person';
import QueryBuilder from '@material-ui/icons/QueryBuilder';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { NavLink, useHistory } from "react-router-dom";

import Tooltip from '@material-ui/core/Tooltip';

const CustomToolTip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 450,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
        boxShadow: '5px 10px 18px rgba(0,0,0,0.25), 0px 5px 6px rgba(0,0,0,0.22)',
    },
}))(Tooltip);


const CampusDrive = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const getCommunicationOptionsList = () => {
        return <div className="toolTipContainer">
            <div className="customToolTipRow">
                <div className="toolTipOption"> <p className="toolTipOptionLabel">Pre-campus Induction Session by Corporate </p> <QueryBuilder /></div>
                <div className="toolTipOption"> <p className="toolTipOptionLabel">Define Interview Rounds</p> <QueryBuilder /></div>
            </div>
            <div className="divider"></div>
            <div className="customToolTipRow">
                <div className="toolTipOption"> <p className="toolTipOptionLabel">Define Email Template</p> <QueryBuilder /></div>
                <div className="toolTipOption"> <p className="toolTipOptionLabel">Communicate Interview Schedule Details</p> <QueryBuilder /></div>
            </div>
        </div>
    }

    const getToolTipOptions = (items) => {
        return <div className="defaultToolTipContainer">
            {items.map((item, index) => {
                return <>
                    <div className="toolTipOption"> <p className="toolTipOptionLabel">{item}</p> <QueryBuilder /></div>
                    {index ? items.length - 1 !== index ? <div className="divider"></div> : undefined : <div className="divider"></div>}
                </>
            })}


        </div>
    }

    const navigateTo = (routePath) => {
        history.push('/dashboard/campus-drive/' + props?.match?.params?.campusDriveId + routePath + '/' + props?.match?.params?.universityId)
    }

    return (
        <>
        <div className="bgWhite h-full main-triangle-container">
            <div className="custom-row">
                <CustomToolTip
                    title={getCommunicationOptionsList()}
                    placement="top"
                    interactive>
                    <div className="mainCircle" onClick={() => {
                        navigateTo('/communication')
                    }}>
                        <div className="mainBaseCircle">
                            <div className="outerCircle">
                                <div className="circle">
                                    <div className="baseCircle">
                                        <div className="innerOuterCircle">
                                            <div className="innerCircle">
                                                <Chat fontSize={'large'} className={'innerCircleIcon'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="number-title">2</span>
                            </div>
                        </div>
                        <h4 className="mainCircleTitle">Communication</h4>
                    </div>
                </CustomToolTip>
            </div>
            <div className="dotted-rows">
                    <div className="slant-dotted-row"></div>
                    <div className="slant-dotted-row"></div>
            </div>
            <div className="custom-row">
                <CustomToolTip
                    title={getToolTipOptions(['Campus Drive Dates Finalization', 'Define Jobs', 'Share Job Details', 'Define Job Application Window'])}
                    placement="left"
                    interactive>
                    <div className="mainCircle" onClick={() => {
                        navigateTo('/define-jobs')
                    }}>
                        <div className="mainBaseCircle">
                            <div className="outerCircle">
                                <div className="circle">
                                    <div className="baseCircle">
                                        <div className="innerOuterCircle">
                                            <div className="innerCircle">
                                                <BusinessCenter fontSize={'large'} className={'innerCircleIcon'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="number-title">1</span>
                            </div>
                        </div>
                        <h4 className="mainCircleTitle">Define Jobs</h4>
                    </div>
                </CustomToolTip>
                <div className="dottedLine"></div>
                <CustomToolTip
                    title={getToolTipOptions(['Capture Round-wise Interview Results', 'View & Validate Final List of Students', 'Release Offer Letters'])}
                    placement="right"
                    interactive>
                    <div className="mainCircle" onClick={() => {
                        navigateTo('/campus-interviews')
                    }}>
                        <div className="mainBaseCircle">
                            <div className="outerCircle">
                                <div className="circle">
                                    <div className="baseCircle">
                                        <div className="innerOuterCircle">
                                            <div className="innerCircle">
                                                <Person fontSize={'large'} className={'innerCircleIcon'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="number-title">3</span>
                            </div>
                        </div>
                        <h4 className="mainCircleTitle">Campus Interviews</h4>
                    </div>
                </CustomToolTip>
            </div>
        </div>
        <div className="row" style={{position: 'absolute', marginTop: '-150px'}}>
            <img src='/images/campus-drive-footer.png' style={{width: '100%'}}/>
        </div>
        </>
    );
};

export default CampusDrive;

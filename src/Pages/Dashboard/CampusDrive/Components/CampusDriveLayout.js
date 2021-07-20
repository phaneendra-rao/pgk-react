import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';

const CampusDriveLayout = (props) => {
    const dispatch = useDispatch();

    const getTabSection = () => {
        if (props?.tabs?.length && props.tabs.some((item) => item.isActive === true)) {
            let currentIndex = 0;
            props?.tabs.forEach((item, index) => {
                if (item.isActive) {
                    currentIndex = index
                }
            });

            if (props?.tabs[currentIndex].section) {
                return props?.tabs[currentIndex].section;
            }
        }
    }

    return (
        <div className="bgWhite h-full">
            <div className={"row align-items-center campusDriveNavStripe"}>
                <div className="col-md-3">
                    <NavLink
                        to={"/dashboard/campus-drive/" + props?.campusDriveId + "/home/" + props?.universityId}
                        replace
                        exact
                        activeClassName="campusDriveBtnActive"
                        className="campusDriveBtn"
                    >
                        Go to Home
                    </NavLink>
                </div>
                <div className="col-md-9">
                    <div className="row align-items-center">
                        <div className="col-md-9">
                            <NavLink
                                to={"/dashboard/campus-drive/" + props?.campusDriveId + "/define-jobs/" + props?.universityId}
                                exact
                                activeClassName="campusDriveBtnActive"
                                className="campusDriveBtn"
                            >
                                Define Jobs
                            </NavLink>
                            <NavLink
                                to={"/dashboard/campus-drive/" + props?.campusDriveId + "/communication/" + props?.universityId}
                                exact
                                activeClassName="campusDriveBtnActive"
                                className="campusDriveBtn"
                            >
                                Communication
                            </NavLink>
                            <NavLink
                                to={"/dashboard/campus-drive/" + props?.campusDriveId + "/campus-interviews/" + props?.universityId}
                                exact
                                activeClassName="campusDriveBtnActive"
                                className="campusDriveBtn"
                            >
                                Campus Interviews
                            </NavLink>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
            <div className={"row"}>
                <div className="col-md-3">
                    <div className="campus-drive-sidebar-container">
                        {props?.prevBtn ? <button type="button" disabled={props?.prevBtn?.isDisabled} onClick={props.prevBtn.onClick} className="btn campus-drive-sidebar-btn"><ArrowRightAlt style={{ transform: 'scaleX(-1)' }} /> <p>Previous</p></button> : undefined}
                        {props?.tabs?.length ? props.tabs.map((item, index) => {
                            return <div className="tabSection" onClick={() => {
                                item.onClick(index)
                            }}>
                                <p className={`tabSectionLabel ${item?.isActive ? 'tabSectionLabelActive' : ''}`}>{item?.label}</p>
                                <div className="tabSectionMainCircleContainer">
                                    <div className={`tabSectionMainCircle ${item?.isActive ? 'tabSectionMainCircleActive' : ''}`}>
                                        <div className="tabSectionInnerCircle">
                                            <i className={`fas ${item?.iconName}`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }) : undefined}

                        {props?.nextBtn ? <button type="button" disabled={props?.nextBtn?.isDisabled} onClick={props.nextBtn.onClick} className="btn campus-drive-sidebar-btn"><p>Next</p><ArrowRightAlt /></button> : undefined}
                    </div>
                </div>
                <div className="col-md-9" style={{ border: '1px solid #cacaca', overflow: 'scroll' }}>
                    {!props?.tabs.some((item) => item.isActive === true) ? <div className="center"><p className="text-center" style={{ fontSize: '.850rem', color: '#a1a1a1' }}>Select any option to preview the content here</p></div> : undefined}
                    {getTabSection()}
                </div>
            </div>
        </div>
    );
};

export default CampusDriveLayout;
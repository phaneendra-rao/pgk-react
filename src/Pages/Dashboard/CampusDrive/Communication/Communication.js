import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampusDriveLayout from "../Components/CampusDriveLayout";
import DefineEmailTemplate from "./Sections/DefineEmailTemplate";
import DefineInduction from './Sections/DefineInduction';
import ShareInterviewRounds from './Sections/ShareInterviewRounds';
import DefineInterviewRounds from './Sections/DefineInterviewRounds';

const Communication = (props) => {
    const dispatch = useDispatch();
    const onTabClick = (tabIndex) => {
        const newTabs = tabs.map((item, index) => {
            if (index <= tabIndex) {
                return { ...item, isActive: true }
            } else {
                return { ...item, isActive: false }
            }
        })
        setTabs(newTabs);
    }

    const [tabs, setTabs] = useState([
        {
            label: 'Define Email Template',
            iconName: 'fa-envelope',
            isActive: false,
            isDisabled: false,
            onClick: onTabClick,
            section: <DefineEmailTemplate campusDriveId={props?.match?.params?.campusDriveId} />
        },
        {
            label: 'Pre-Campus Induction Session by Corporate (optional)',
            iconName: 'fa-user',
            isActive: false,
            isDisabled: false,
            onClick: onTabClick,
            section: <DefineInduction campusDriveId={props?.match?.params?.campusDriveId} />
        },
        {
            label: 'Define Interview Rounds',
            iconName: 'fa-briefcase',
            isActive: false,
            isDisabled: false,
            onClick: onTabClick,
            section: <DefineInterviewRounds campusDriveId={props?.match?.params?.campusDriveId} />
        }
        // {
        //     label: 'Share Round Details',
        //     iconName: 'fa-window-restore',
        //     isActive: false,
        //     isDisabled: false,
        //     onClick: onTabClick,
        //     section: <> </>
        // // }
    ])

    const prevBtn = () => {
        let currentIndex = 1;

        tabs.forEach((item, index) => {
            if (item.isActive) {
                currentIndex = index
            }
        })

        onTabClick(currentIndex - 1);
    }

    const nextBtn = () => { }

    const isPrevBtnDisbaled = () => {
        return !tabs.some((item, index) => index ? item.isActive : false)
    }

    const isNextBtnDisbaled = () => {
        return !tabs.every((item) => item.isActive === true)
    }

    return (
        <div className="bgWhite h-full">
            <CampusDriveLayout
                tabs={tabs}
                campusDriveId={props?.match?.params?.campusDriveId}
                prevBtn={{
                    isDisabled: isPrevBtnDisbaled(),
                    onClick: prevBtn
                }}
                nextBtn={{
                    isDisabled: isNextBtnDisbaled(),
                    onClick: nextBtn
                }}
            >
                {!tabs.some((item) => item.isActive === true) ? <div className="center"><p className="text-center" style={{ fontSize: '.850rem', color: '#a1a1a1' }}>Select any option to preview the content here</p></div> : undefined}
            </CampusDriveLayout>
        </div>
    );
};

export default Communication;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampusDriveLayout from "../Components/CampusDriveLayout";

import DefineJobsSection from './Sections/DefineJobsSection/DefineJobsSection';
import ShareJobDetailsSection from './Sections/ShareJobDetailsSection/ShareJobDetailsSection';
import DefineJobApplicationWindowSection from './Sections/DefineJobApplicationWindowSection/DefineJobApplicationWindowSection';

const DefineJobs = (props) => {
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
            label: 'Campus Drive Dates Finalization',
            iconName: 'fa-calendar-alt',
            isActive: false,
            isDisabled: false,
            onClick: onTabClick,
            section: undefined
        },
        {
            label: 'Define Jobs',
            iconName: 'fa-file-alt',
            isActive: false,
            isDisabled: false,
            onClick: onTabClick,
            section: <DefineJobsSection campusDriveId={props?.match?.params?.campusDriveId} />
        },
        {
            label: 'Share Job Details',
            iconName: 'fa-briefcase',
            isActive: false,
            isDisabled: false,
            onClick: onTabClick,
            section: <ShareJobDetailsSection campusDriveId={props?.match?.params?.campusDriveId} />
        },
        {
            label: 'Define Job Application Window',
            iconName: 'fa-window-restore',
            isActive: false,
            isDisabled: false,
            onClick: onTabClick,
            section: <DefineJobApplicationWindowSection campusDriveId={props?.match?.params?.campusDriveId} />
        }
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

    // http://{{hostip}}:{{hostport}}/lut/?ignoreCache=true&lutList=reportName
  return (
    <div className="bgWhite h-full">
        <CampusDriveLayout
            tabs={tabs}
            campusDriveId={props?.match?.params?.campusDriveId}
            universityId={props?.match?.params?.universityId}
            prevBtn={{
                isDisabled: isPrevBtnDisbaled(),
                onClick: prevBtn 
            }}
            nextBtn={{
                isDisabled: isNextBtnDisbaled(),
                onClick: nextBtn
            }}
        />
    </div>
  );
};

export default DefineJobs;

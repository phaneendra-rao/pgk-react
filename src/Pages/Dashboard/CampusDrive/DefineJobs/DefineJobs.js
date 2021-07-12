import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CampusDriveLayout from "../Components/CampusDriveLayout";

const DefineJobs = (props) => {
    const dispatch = useDispatch();
    const onTabClick = (tabIndex) => {
        const newTabs = tabs.map((item, index)=>{
            if(index <= tabIndex) {
                return {...item, isActive: true}
            } else {
                return {...item, isActive: false}
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
            onClick: onTabClick
        },
        {
            label: 'Define Jobs',
            iconName: 'fa-file-alt',
            isActive: false,
            isDisabled: false,
            onClick: onTabClick
        },
        {
            label: 'Share Job Details',
            iconName: 'fa-briefcase',
            isActive: false,
            isDisabled: false,
            onClick: onTabClick
        },
        {
            label: 'Define Job Application Window',
            iconName: 'fa-window-restore',
            isActive: false,
            isDisabled: false,
            onClick: onTabClick
        }
    ])

    const prevBtn = () => {
        let currentIndex = 1;

        tabs.forEach((item, index)=>{
            if(item.isActive) {
                currentIndex = index
            }
        })

        onTabClick(currentIndex-1);
    }

    const nextBtn = () => {}

    const isPrevBtnDisbaled = () => {
        return !tabs.some((item, index)=> index ? item.isActive : false)
    }

    const isNextBtnDisbaled = () => {
        return !tabs.every((item)=> item.isActive === true)
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
            {!tabs.some((item) => item.isActive===true) ? <div className="center"><p className="text-center" style={{fontSize: '.850rem', color: '#a1a1a1'}}>Select any option to preview the content here</p></div>  : undefined}
        </CampusDriveLayout>
    </div>
  );
};

export default DefineJobs;

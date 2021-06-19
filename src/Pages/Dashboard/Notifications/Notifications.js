import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import NotificationsCmp from '../../../Components/Dashboard/NotificationsCmp/NotificationsCmp'
import { GetNotificationsSagaAction } from '../../../Store/Actions/SagaActions/NotificationsSagaAction';
import { actionGetDependencyLookUpsSagaAction } from '../../../Store/Actions/SagaActions/CommonSagaActions';

const Notifications = () => {

    const [actualNotificationsList, setActualNotificationsList] = useState([]);
    const [notificationsList, setNotificationsList] = useState([]);
    const [isSelectAll, setIsSelectAll] = useState(false);

    const dispatch = useDispatch();

    const [filter, setFilter] = useState({
        stakeholderType: '',
        notificationType: '',
        sortBy: ''
    })

    const [lookUpData, setLookUpData] = useState();

    useEffect(() => {
        dispatch(actionGetDependencyLookUpsSagaAction({
            apiPayloadRequest: ['stakeholderType', 'notificationType', 'sortBy'],
            callback: (list) => {
                if(list) {
                    setLookUpData(list);
                }
            }
        }));
    }, []);

    useEffect(() => {
        dispatch(GetNotificationsSagaAction({ callback: getNotificationsResp }));
    }, []);

    const handleFilterChange = (name, value, errorMessage) => {
        setFilter(prevState=>({
            ...prevState,
            [name]: value
        }));
    }

    useEffect(()=>{
        let updatedNotifications = [];
        if(filter.stakeholderType!=='') {
            let newArray = [];

            if(updatedNotifications.length) {
                newArray = [...newArray, ...updatedNotifications];
            } else {
                newArray = actualNotificationsList;
            }

            newArray.forEach((item) => {
                if(filter.stakeholderType === item.senderUserRole) {
                    updatedNotifications.push(item);
                }
            });
        }

        if(filter.notificationType!=='') {
            let newArray = [];

            if(updatedNotifications.length) {
                newArray = [...newArray, ...updatedNotifications];
            } else {
                newArray = actualNotificationsList;
            }

            newArray.map((item)=>{
                if(filter.notificationType === item.notificationTypeID) {
                    updatedNotifications.push(item);
                }
            });
        }

        if(filter.sortBy!=='') {
            let newArray = [];

            if(updatedNotifications.length) {
                newArray = [...newArray, ...updatedNotifications];
            } else {
                newArray = actualNotificationsList;
            }

            if(filter.sortBy==='TA') {
                updatedNotifications = newArray.sort((a, b) => new Date(b.dateofNotification).getTime() - new Date(a.dateofNotification).getTime());
            } else {
                updatedNotifications = newArray.sort((a, b) => new Date(a.dateofNotification).getTime() - new Date(b.dateofNotification).getTime());
            }
        }

        if(filter.stakeholderType.trim()==='' && filter.notificationType.trim()==='' && filter.sortBy.trim()==='') {
            setNotificationsList(actualNotificationsList);
        } else {
            setNotificationsList(updatedNotifications);
        }

    }, [filter.stakeholderType, filter.notificationType, filter.sortBy]);

    const getNotificationsResp = (data) => {
        const list = data.map(item => {
            return {
                ...item,
                isChecked: false
            }
        })
        console.log('data ', data);
        setNotificationsList(data);
        setActualNotificationsList(data);
    }

    const handleChange = (event) => {
        const { checked, value } = event.target;
        let list = [...notificationsList];
        list.forEach(item => {
            if (item.notificationID === value)
                item.isChecked = checked
        });
        setIsSelectAll(false);
        setNotificationsList(list);
    }

    const selectAll = (event) => {
        const { checked } = event.target;
        let list = [...notificationsList];
        list.forEach(item => item.isChecked = checked);
        setIsSelectAll(checked);
        setNotificationsList(list);
    }

    return (
        <>
            <NotificationsCmp
                notificationsList={notificationsList}
                isSelectAll={isSelectAll}
                handleChange={handleChange}
                selectAll={selectAll}
                lookUpData={lookUpData}
                handleFilterChange={handleFilterChange}
                filter={filter}
            />
        </>
    )
}

export default Notifications;

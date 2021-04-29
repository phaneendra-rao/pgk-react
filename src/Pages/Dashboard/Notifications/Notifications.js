import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import NotificationsCmp from '../../../Components/Dashboard/NotificationsCmp/NotificationsCmp'
import { GetNotificationsSagaAction } from '../../../Store/Actions/SagaActions/NotificationsSagaAction';

const Notifications = () => {

    const [notificationsList, setNotificationsList] = useState([]);
    const [isSelectAll, setIsSelectAll] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetNotificationsSagaAction({ callback: getNotificationsResp }));
    }, []);

    const getNotificationsResp = (data) => {
        const list = data.map(item => {
            return {
                ...item,
                isChecked: false
            }
        })
        setNotificationsList(data);
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
            />
        </>
    )
}

export default Notifications;

import React, { useEffect, useState } from 'react';
import RegistrationCompletedCmp from '../../../../Components/Forms/CorporateCmp/RegisterCmp/RegistrationCompletedCmp'

const RegistrationCompleted = (props) => {
    const [data, setData] = useState('');

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('regStatus'));
        if (data) {
            setData(data.platformUID);
        }
        props.history.replace('/')
    }, [])

    return (
        <RegistrationCompletedCmp
            data={data}
            history={props.history}
        />
    )
}

export default RegistrationCompleted;

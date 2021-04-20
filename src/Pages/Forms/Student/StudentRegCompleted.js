import React, { useEffect, useState } from 'react';
import StudentRegCompletedCmp from '../../../Components/Forms/StudentCmp/StudentRegCompletedCmp';

const StudentRegCompleted = (props) => {
    const [data, setData] = useState('');

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('regStatus'));
        setData(data.platformUID);
    }, [])

    return (
        <StudentRegCompletedCmp
            data={data}
            history={props.history}
        />
    )
}

export default StudentRegCompleted;

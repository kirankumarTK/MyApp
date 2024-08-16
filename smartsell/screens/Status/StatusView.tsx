import React, { useEffect } from 'react';
import { Text } from 'react-native';
import AppDatabase from '../../Commons/DataBaseHelper';
const StatusView = () => {
    useEffect(()=>{
        AppDatabase.executeFetch("Select AccountId,AccountName from AccountMaster LIMIT 1").then(result => {
            console.log(result[0].AccountId + '     ' + result[0].AccountName);
        }).catch(error => {
            console.log(error);
        })
    },[])
    return (
        <React.Fragment>
            <Text>Status</Text>
        </React.Fragment>
    );
}

export default StatusView;
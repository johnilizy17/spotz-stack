import React from 'react';
import DashboardAuth from '../../constants/HOC/DashboardAuth';
import { Text } from 'react-native';

export default function Setting(){
 
    return(
        <DashboardAuth>
         <Text>Settings</Text>
        </DashboardAuth>
    )
}
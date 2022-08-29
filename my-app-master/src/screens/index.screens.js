import React, { useContext } from 'react';
import { LoginScreen } from './login.screens';
import { UserContext } from '../serivces/user.services';
import { HomeScreen } from '../screens/home.screens';

export const Index = () => {

    const { user } = useContext(UserContext)

    if (user === null) {
        return (<LoginScreen />)
    }

    return (
        <HomeScreen />
    )
}
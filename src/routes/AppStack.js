import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
import Login from '../pages/Login';
import Tabs from './Tabs';
import Create from '../pages/Create';

export default function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                <Screen name="Login" component={Login} />
                <Screen name="Tabs" component={Tabs} />    
                <Screen name="Create" component={Create} />           
            </Navigator>
        </NavigationContainer>
    );
}
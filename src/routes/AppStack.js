import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
import Login from '../pages/Login';
import Setting from '../pages/Setting';
import Drawer from './Drawer';

export default function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
                <Screen name="Login" component={Login} />       
                <Screen name="Setting" component={Setting} />       
                <Screen name="Drawer" component={Drawer} />           
            </Navigator>
        </NavigationContainer>
    );
}
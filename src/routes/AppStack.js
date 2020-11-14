import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
import Login from '../pages/Login';
import Create from '../pages/Create';
import Setting from '../pages/Setting';
import Drawer from './Drawer';
import Recover from '../pages/Recover';


export default function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">

                <Screen name="Create" component={Create} />           
                <Screen name="Login" component={Login} />       
                <Screen name="Setting" component={Setting} />       
                <Screen name="Drawer" component={Drawer} />    
                <Screen name="Recover" component={Recover} />          

            </Navigator>
        </NavigationContainer>
    );
}
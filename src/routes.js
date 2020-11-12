import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Home from './pages/Home';


export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Home">
                <AppStack.Screen name="Login" component={Login} 
                options={{
                    title: '',
                    headerStyle:{
                        backgroundColor: '#000000'
                    }
                } } />
                <AppStack.Screen name="Home" component={Home} options={{headerShown: false}}/>                
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
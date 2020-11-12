import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Home from './pages/Home';
import Cadastrar from './pages/Cadastrar';


export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Login">
                <AppStack.Screen name="Login" component={Login} 
                options={{
                    title: '',
                    headerStyle:{
                        backgroundColor: '#000000'
                    }
                } } />
                <AppStack.Screen name="Home" component={Home} />
                <AppStack.Screen name="Cadastrar" component={Cadastrar} />                
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
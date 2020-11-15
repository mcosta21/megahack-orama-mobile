import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import Login from '../pages/Login';
import CreateUser from '../pages/CreateUser';
import Recover from '../pages/Recover';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='CreateUser' component={CreateUser} />
        <Stack.Screen name="Recover" component={Recover} />          
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack;
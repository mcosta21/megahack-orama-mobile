import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import Login from '../pages/Login';
import CreateUser from '../pages/CreateUser';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='CreateUser' component={CreateUser} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack;
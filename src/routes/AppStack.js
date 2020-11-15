import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {NavigationContainer} from '@react-navigation/native';

import Setting from '../pages/Setting';
import Drawer from './Drawer';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Drawer" component={Drawer} />    
        <Stack.Screen name="Setting" component={Setting} />       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
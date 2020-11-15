import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { Barlow_900Black } from '@expo-google-fonts/barlow';
import Routes from './src/routes/';

import { LogBox } from 'react-native';

import LoginProvider from './src/contexts/LoginContext';

LogBox.ignoreAllLogs(true);

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold,
    Barlow_900Black
  });

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <LoginProvider>
      <Routes />
      <StatusBar style="light"/>
    </LoginProvider>
  );
}

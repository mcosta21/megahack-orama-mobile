import React from 'react';
import Routes from './src/routes';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

export default function App() {
  
  let [fontsLoaded] = useFonts({
    Ubuntu_400Regular,
    Ubuntu_500Medium,
    Ubuntu_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }
  return (
    <>
      <StatusBar style="dark"/>
      <Routes />
    </>
  );
}

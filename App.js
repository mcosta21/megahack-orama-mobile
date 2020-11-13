import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';
import { Barlow_900Black } from '@expo-google-fonts/barlow';
import AppStack from './src/routes/AppStack';

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
    <>
      <AppStack />
      <StatusBar style="light"/>
    </>
  );
}

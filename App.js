import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Routes from './src/routes';

export default function App() {
  return (
    <Routes />
/*
     <View style={styles.container}>
       <Text>Open up App.js to start working on your app!</Text>
       <StatusBar style="auto" />
     </View>

    <NavigationContainer>
      <Stack.Navigator initialRouteName=""> 
        <Stack.Screen name="" component={Login}/>     
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

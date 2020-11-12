import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Button } from 'react-native';

export default function Login(){
    const { navigate } = useNavigation();

    function handleNavigateToHome(){
      navigate('Tabs');
    }

    return (

      <KeyboardAvoidingView style={styles.containerLogin}>
        <View style={styles.container}>
        <TextInput style={styles.input}                    // Campo do email
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=>{}} />

        <TextInput style={styles.input}                    // Campo da senha
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=>{}} />

        <TouchableOpacity style={styles.btnAcessar} onPress={handleNavigateToHome}>
          <Text>Acessar</Text>
        </TouchableOpacity>
      </View>     

  </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  containerLogin: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input:{
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom:15,
    color:'#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
  },
  btnAcessar:{
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  }
});
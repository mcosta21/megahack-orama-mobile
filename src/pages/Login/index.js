import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

import {  
  Text, 
  View, 
  KeyboardAvoidingView, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';

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

        <TextInput 
          style={styles.input}                    // Campo da senha
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=>{}} 
        />

        <TouchableOpacity 
          style={styles.btnAcessar} 
          onPress={handleNavigateToHome}
        >
          <Text style={styles.textoAcessar}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btnCadastrar}
          onPress={ () => navigation.navigate('Cadastrar')}
        >
          <Text style={styles.textoCadastrar}>Criar conta</Text>
        </TouchableOpacity>
      </View>     

  </KeyboardAvoidingView>

  );
};
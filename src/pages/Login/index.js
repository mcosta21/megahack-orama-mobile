import React from 'react';

import { StyleSheet, 
  Text, 
  View, 
  KeyboardAvoidingView, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';

export default function Login({ navigation }) {
    return (

      <KeyboardAvoidingView style={styles.containerLogin}>
        <View style={styles.container}>
        <TextInput style={styles.input}                    // Campo do Email
          placeholder="Email"
          autoCorrect={false}
          onChangeText={()=>{}} />

        <TextInput style={styles.input}                    // Campo da Senha
          placeholder="Senha"
          autoCorrect={false}
          onChangeText={()=>{}} />

        <TouchableOpacity style={styles.btnAcessar} 
        onPress={ () => navigation.navigate('Home')}>
          <Text style={styles.textoAcessar}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCadastrar}
        onPress={ () => navigation.navigate('Cadastrar')}>
          <Text style={styles.textoCadastrar}>Criar conta</Text>
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
    paddingBottom: 30,
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
  },

  btnCadastrar:{
    marginTop: 10,
  },

  textoAcessar:{
    color: '#FFF',
    fontSize: 18,
  },

  textoCadastrar:{
    color: '#FFF',
  }
});
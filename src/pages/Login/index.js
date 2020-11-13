import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {  Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

export default function Login( {navigation} ){
    const { navigate } = useNavigation();

    function handleNavigateToHome(){
      navigate('Drawer');
    }

    return (

      <KeyboardAvoidingView style={styles.container}>
        
        <ImageBackground source={require('../../assets/login-background.png')} style={styles.container}>

        <View style={styles.header}>
         <Text style={styles.title}>ÓRAMA</Text>
        </View>

        <View style={styles.campoCabecalho}>
         <Text style={styles.cabecalho}>Email</Text>
        </View>

        <TextInput style={styles.input}                    
          placeholder="Digite seu email"
          autoCorrect={false}
          onChangeText={()=>{}} />

        <View style={styles.campoCabecalho}>
         <Text style={styles.cabecalho} >Senha</Text>
        </View>

        <TextInput 
          style={styles.input}                    
          placeholder="Digite sua senha"
          autoCorrect={false}
          onChangeText={()=>{}} />

        <TouchableOpacity style={styles.campoEsqueci}
          onPress={ () => navigation.navigate('Create')}>
          <Text style={styles.textoSenha}>Esqueci minha senha</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btnEntrar} 
          onPress={handleNavigateToHome}>
          <Text style={styles.textoEntrar}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.btnCadastrar}
          onPress={ () => navigation.navigate('Create')}>
          <Text style={styles.textoCadastrar}>Cadastrar</Text>
        </TouchableOpacity>

      </ImageBackground>     

    </KeyboardAvoidingView>

  );
};
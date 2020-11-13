import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {  Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';


export default function Create() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        
        <View style={styles.container}>

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

        <TouchableOpacity 
          style={styles.btnRegistrar} >
          <Text style={styles.textoRegistrar}>Registrar</Text>
        </TouchableOpacity>

        </View>     

      </KeyboardAvoidingView>
 
 );
};
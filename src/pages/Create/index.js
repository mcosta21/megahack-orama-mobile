import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {  Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import InputText from '../../components/InputText';

export default function Create() {
    return (
      <KeyboardAvoidingView style={styles.container}>
        
        <View style={styles.container}>

          <View style={styles.header}>
          <Text style={styles.title}>ÓRAMA</Text>
          </View>

          <View style={styles.campoCabecalho}>
         <Text style={styles.cabecalho}>Nome</Text>
        </View>

        <InputText 
          placeholder="Digite seu nome"
          autoCorrect={false}
          onChangeText={()=>{}}
        />

        <View style={styles.campoCabecalho}>
         <Text style={styles.cabecalho}>E-mail</Text>
        </View>

        <InputText 
          placeholder="Digite seu e-mail"
          autoCorrect={false}
          onChangeText={()=>{}}
        />

        <View style={styles.campoCabecalho}>
         <Text style={styles.cabecalho}>Senha</Text>
        </View>

        <InputText 
          placeholder="Digite sua senha"
          placeholder="Confirme sua senha"
          autoCorrect={false}
          onChangeText={()=>{}}
        />

        <TouchableOpacity 
          style={styles.btnRegistrar} >
          <Text style={styles.textoRegistrar}>Registrar</Text>
        </TouchableOpacity>

        </View>     

      </KeyboardAvoidingView>
 
 );
};
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {  Text, View, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import InputText from '../../components/InputText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

export default function Create( {navigation} ){
  const { navigate } = useNavigation();

  function handleNavigateToHome(){
    navigate('Drawer');
  }

    return (

      <KeyboardAvoidingView style={styles.container}>
        
        <SafeAreaView style={styles.content}>

          <View style={styles.header}>
            <Text style={styles.title}>ÓRAMA</Text>
          </View>

          <View style={styles.SignUp}>
            <Text style={styles.SignUpText}>Cadastrar</Text>
          </View>

          <View style={styles.boxText}>
            <Text style={styles.text}>Nome</Text>
          </View>
          <InputText 
            placeholder="Digite seu nome"
            autoCorrect={false}
            onChangeText={()=>{}}
          />

          <View style={styles.boxText}>
            <Text style={styles.text}>E-mail</Text>
          </View>
          <InputText 
            placeholder="Digite seu e-mail"
            autoCorrect={false}
            onChangeText={()=>{}}
          />

          <View style={styles.boxText}>
            <Text style={styles.text}>Senha</Text>
          </View>
          <InputText 
            placeholder="Digite sua senha"
            autoCorrect={false}
            onChangeText={()=>{}}
          />
          <InputText 
            placeholder="Confirme sua senha"
            autoCorrect={false}
            onChangeText={()=>{}}
          />

          <LinearGradient
            colors={['#24AC6E', '#34F683']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.buttonBackgroundSignUp}
            >
            <RectButton
              onPress={handleNavigateToHome}
              style={styles.buttonSignUp}
              >
              <Text style={styles.textSignUp}>Registrar</Text>
            </RectButton>
          </LinearGradient>

          <TouchableOpacity 
              style={styles.boxAlreadyHaveAcc}
              onPress={handleNavigateToHome}
            >
              <Text style={styles.textAlreadyHaveAcc}>Ja tenho conta!</Text>
            </TouchableOpacity>

        </SafeAreaView>     

      </KeyboardAvoidingView>
 
 );
};
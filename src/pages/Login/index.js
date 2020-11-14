import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {  Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import InputText from '../../components/InputText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

export default function Login( {navigation} ){
    const { navigate } = useNavigation();

    function handleNavigateToHome(){
      navigate('Drawer');
    }

    return (

      <KeyboardAvoidingView style={styles.container}>
        <ImageBackground source={require('../../assets/login-background.png')} style={styles.image}>
        
          <SafeAreaView style={styles.content}>

            <View style={styles.header}>
              <Text style={styles.title}>ÓRAMA</Text>
            </View>

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

            <TouchableOpacity 
              style={styles.boxForgotPassword}
              onPress={ () => navigation.navigate('Create')}
            >
              <Text style={styles.textForgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>

            
            <LinearGradient
              colors={['#24AC6E', '#34F683']}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.buttonBackgroundSignIn}
            >
              <RectButton
                onPress={handleNavigateToHome}
                style={styles.buttonSignIn}
              >
                <Text style={styles.textSignIn}>Entrar</Text>
              </RectButton>
            </LinearGradient>

            <TouchableOpacity 
              style={styles.buttonSignUp}
              onPress={ () => navigation.navigate('Create')}
            >
              <Text style={styles.textSignUp}>Cadastrar</Text>
            </TouchableOpacity>

          </SafeAreaView>

        </ImageBackground>     
    </KeyboardAvoidingView>

  );
};
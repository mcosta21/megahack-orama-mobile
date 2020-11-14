import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {  Text, View, KeyboardAvoidingView, TouchableOpacity, ImageBackground } from 'react-native';
import InputText from '../../components/InputText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { LoginContext } from '../../contexts/LoginContext';
import api from '../../services/api';

export default function Login( {navigation} ){

    const { navigate } = useNavigation();
    const context = useContext(LoginContext);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    function handleNavigateToHome(){
      navigate('Drawer');
    }

    function handleSubmitSignIn(){

      const formData = {
          "email": email !== undefined && email.toLowerCase(),
          "password": password
      };

      api.post('auth', formData).then((response) => {
        console.log(response.data);
      });

      //context.setLogin({id: 'nome', name: 'sobrenome'})
      //handleNavigateToHome();
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
              name="email"
              autoCorrect={false}
              onChangeText={value => setEmail(value)}
            />

            <View style={styles.boxText}>
              <Text style={styles.text}>Senha</Text>
            </View>
            <InputText 
              placeholder="Digite sua senha"
              name="password"
              autoCorrect={false}
              onChangeText={value => setPassword(value)}
            />

            <TouchableOpacity 
              style={styles.boxForgotPassword}
              onPress={ () => navigation.navigate('Recover')}
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
                onPress={handleSubmitSignIn}
                style={styles.buttonSignIn}
              >
                <Text style={styles.textSignIn}>Entrar</Text>
              </RectButton>
            </LinearGradient>

            <TouchableOpacity 
              style={styles.buttonSignUp}
              onPress={() => navigation.navigate('Create')}
            >
              <Text style={styles.textSignUp}>Cadastrar</Text>
            </TouchableOpacity>

          </SafeAreaView>

        </ImageBackground>     
    </KeyboardAvoidingView>

  );
};
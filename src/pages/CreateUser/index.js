import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {  Text, View, Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import InputText from '../../components/InputText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { LoginContext } from '../../contexts/LoginContext';


export default function CreateUser(){
  const context = useContext(LoginContext);

  const { navigate } = useNavigation();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  function handleNavigateToHome(){
    navigate('Drawer');
  }

  async function handleSubmitSignUp(){
    await context.signUp(name, lastName, email, password, passwordConfirm);

    setPassword('');
    setPasswordConfirm('');
    
    if(context.errorMessages[0] !== undefined) {
      setModalVisible(true);
    }
    else {
      handleNavigateToHome();
    }
  }

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false} >
          <KeyboardAvoidingView style={styles.content}>

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
              value={name}
              onChangeText={value => setName(value)}
            />

            <View style={styles.boxText}>
              <Text style={styles.text}>Sobrenome</Text>
            </View>
            <InputText 
              placeholder="Digite seu sobrenome"
              autoCorrect={false}
              value={lastName}
              onChangeText={value => setLastName(value)}
            />

            <View style={styles.boxText}>
              <Text style={styles.text}>E-mail</Text>
            </View>
            <InputText 
              placeholder="Digite seu e-mail"
              autoCorrect={false}
              autoCapitalize='none'
              value={email}
              onChangeText={value => setEmail(value)}
            />

            <View style={styles.boxText}>
              <Text style={styles.text}>Senha</Text>
            </View>
            <InputText 
              placeholder="Digite sua senha"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              value={password}
              onChangeText={value => setPassword(value)}
            />
            <InputText 
              placeholder="Confirme sua senha"
              autoCorrect={false}
              autoCapitalize="none"
              secureTextEntry={true}
              value={passwordConfirm}
              onChangeText={value => setPasswordConfirm(value)}
            />

            <LinearGradient
              colors={['#24AC6E', '#34F683']}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.buttonBackgroundSignUp}
              >
              <TouchableOpacity
                onPress={handleSubmitSignUp}
                style={styles.buttonSignUp}
                >
                <Text style={styles.textSignUp}>Registrar</Text>
              </TouchableOpacity>
            </LinearGradient>

            <TouchableOpacity 
                style={styles.boxAlreadyHaveAcc}
                onPress={handleNavigateToHome}
              >
                <Text style={styles.textAlreadyHaveAcc}>Ja tenho conta!</Text>
              </TouchableOpacity>

          </KeyboardAvoidingView>   
          </ScrollView>  

        </SafeAreaView>
      </TouchableWithoutFeedback>
 );
};
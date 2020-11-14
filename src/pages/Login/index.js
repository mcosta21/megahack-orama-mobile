import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './styles';
import {  Keyboard, TouchableWithoutFeedback, Platform, Text, View, KeyboardAvoidingView, TouchableOpacity, ImageBackground, Modal, ScrollView } from 'react-native';
import InputText from '../../components/InputText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { LoginContext } from '../../contexts/LoginContext';
import api from '../../services/api';

export default function Login(){

    const { navigate } = useNavigation();
    const context = useContext(LoginContext);
    const [modalVisible, setModalVisible] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const [email, setEmail] = useState('admin@orama.com');
    const [password, setPassword] = useState('123123');


    function handleNavigateToHome(){
      navigate('Drawer');
    }

    function handleNavigateToCreateUser(){
      navigate('CreateUser');
    }

    function handleNavigateToRecover(){
      navigate('Recover');
    }

    function handleSubmitSignIn(){
      
      const formData = {
          "email": email !== undefined ? email.toLowerCase() : undefined,
          "password": password
      };

      api.post('auth', formData).then((response) => {
        
        const { status, data } = response;

        switch(status) {
          case 201: 
            const { id, firstName, lastName, token } = data;
            api.defaults.headers.authorization = `Bearer ${token}`;
            context.setLogin({id, name: `${firstName} ${lastName}`});
            handleNavigateToHome();
          break;
          case 203: 
            if(Array.isArray(data)){
              setErrorMessages(data);
            }
            else {
              setErrorMessages([data])
            }
            setModalVisible(true);
          break;
        }
      
      });
      
      
    }

    return (

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
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
                onPress={handleNavigateToRecover}
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
                onPress={handleNavigateToCreateUser}
              >
                <Text style={styles.textSignUp}>Cadastrar</Text>
              </TouchableOpacity>

            </SafeAreaView>

              <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => { setModalVisible(false); }}
              >
                  <View style={styles.modal}>
                    <View style={styles.modalContent}>
                      <ScrollView style={styles.modalScroll}>
                        
                        <View style={styles.modalBorderTitle}>
                          <FontAwesome5 style={styles.modalIcon} name="sad-cry" size={24} color="#34F683"/>
                          <Text style={styles.modalTitle}>Desculpe, mas...</Text>
                        </View>  

                        {
                          errorMessages.map((error, index) => {
                            return (
                              <View key={index} style={styles.message}>
                                <Text style={styles.messageIndex}>#{index+1}</Text>
                                <Text style={styles.messageText}>{error.message}</Text>
                              </View>
                            )
                          })
                        }

                      </ScrollView>
                      <RectButton
                        style={styles.buttonCloseModal}
                        onPress={() => setModalVisible(false)}
                      >
                        <Text style={styles.textCloseModal}>Tudo bem!</Text>
                      </RectButton>
                    </View>
                </View>
              </Modal>
          </ImageBackground>    
        </SafeAreaView>
      </TouchableWithoutFeedback> 

  );
};
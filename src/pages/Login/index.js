import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { ActivityIndicator, Keyboard, TouchableWithoutFeedback, Text, View, KeyboardAvoidingView, TouchableOpacity, ImageBackground } from 'react-native';
import InputText from '../../components/InputText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { LoginContext } from '../../contexts/LoginContext';
import Popup from '../../components/Popup';
import Message from '../../components/Message';

export default function Login(){

    const { navigate } = useNavigation();
    const context = useContext(LoginContext);
    const [modalVisible, setModalVisible] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleNavigateToCreateUser(){
      navigate('CreateUser');
    }

    function handleNavigateToRecover(){
      navigate('Recover');
    }

    async function handleSubmitSignIn(){
      const errors = await context.signIn(email, password);
      
      if(errors !== false) {
        setModalVisible(true);
      }
    }

    return (

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <ImageBackground source={require('../../assets/login-background.png')} style={styles.image}>
          
            <KeyboardAvoidingView 
            style={styles.content} 
            >
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
                  autoCapitalize="none"
                  value={email}
                  onChangeText={value => setEmail(value)}
                />

                <View style={styles.boxText}>
                  <Text style={styles.text}>Senha</Text>
                </View>
                <InputText 
                  placeholder="Digite sua senha"
                  name="password"
                  autoCorrect={false}
                  autoCapitalize="none"
                  secureTextEntry={true}
                  value={password}
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
                  <TouchableOpacity
                    onPress={handleSubmitSignIn}
                    style={styles.buttonSignIn}
                  >
                    {
                      context.loading? (
                        <ActivityIndicator size={30} color='#000' />
                      ) : (
                        <Text style={styles.textSignIn}>Entrar</Text>
                      )
                    }
                  </TouchableOpacity>
                </LinearGradient>

                <TouchableOpacity 
                  style={styles.buttonSignUp}
                  onPress={handleNavigateToCreateUser}
                >
                  <Text style={styles.textSignUp}>Cadastrar</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>

            <Popup
              title={'Ops, mas...'}
              visible={modalVisible && context.errorMessages.length > 0}
              onRequestClose={() => { setModalVisible(false); }}
            >
                {
                  context.errorMessages?.map((error, index) => {
                    return (
                      <Message key={index} index={index} message={error.message} />
                    )
                  })
                }

                <TouchableOpacity
                  style={styles.buttonCloseModal}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textCloseModal}>Tudo bem!</Text>
                </TouchableOpacity>
            </Popup>


          </ImageBackground>    
        </SafeAreaView>
      </TouchableWithoutFeedback> 

  );
};
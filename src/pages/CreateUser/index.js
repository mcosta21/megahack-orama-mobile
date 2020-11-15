import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {  ActivityIndicator, Platform, Text, View, Keyboard, KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback, ScrollView } from 'react-native';
import InputText from '../../components/InputText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { LoginContext } from '../../contexts/LoginContext';
import Popup from '../../components/Popup';
import Message from '../../components/Message';

export default function CreateUser(){
  const context = useContext(LoginContext);

  const { navigate } = useNavigation();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  function handleNavigateToHome(){
    navigate('Login');
  }

  async function handleSubmitSignUp(){
    const errors = await context.signUp(name, lastName, email, password, passwordConfirm);

    setPassword('');
    setPasswordConfirm('');
    
    if(context.id) {
      setEmail('');
      setPassword('');
      setModalVisible(false);
    }

    if(errors !== false) {
      setModalVisible(true);
    }
  }

    return (
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>

            <ScrollView showsVerticalScrollIndicator={false} >
              
                <View style={styles.content}>

                  <View style={styles.header}>
                    <Text style={styles.title}>ÓRAMA</Text>
                  </View>

                  <View style={styles.body}>
                      
                      <View style={styles.SignUp}>
                        <Text style={styles.SignUpText}>Cadastrar</Text>
                      </View>
                      <View style={styles.form}>
                      
                        <View style={styles.boxText}>
                          <Text style={styles.text}>Nome</Text>
                        </View>
                        <InputText 
                          placeholder="Digite seu nome"
                          isBlack={true}
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
                          isBlack={true}
                          value={lastName}
                          onChangeText={value => setLastName(value)}
                        />

                        <View style={styles.boxText}>
                          <Text style={styles.text}>E-mail</Text>
                        </View>
                        <InputText 
                          placeholder="Digite seu e-mail"
                          isBlack={true}
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
                          isBlack={true}
                          autoCapitalize="none"
                          secureTextEntry={true}
                          value={password}
                          onChangeText={value => setPassword(value)}
                        />
                        <InputText 
                          placeholder="Confirme sua senha"
                          isBlack={true}
                          autoCorrect={false}
                          autoCapitalize="none"
                          secureTextEntry={true}
                          value={passwordConfirm}
                          onChangeText={value => setPasswordConfirm(value)}
                        />

                      </View>
                  </View>

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
                        {
                          context.loading? (
                            <ActivityIndicator size={30} color='#000' />
                          ) : (
                            <Text style={styles.textSignUp}>Registrar</Text>
                          )
                        }
                    </TouchableOpacity>
                  </LinearGradient>

                  <TouchableOpacity 
                    style={styles.boxAlreadyHaveAcc}
                    onPress={handleNavigateToHome}
                  >
                    <Text style={styles.textAlreadyHaveAcc}>Ja tenho conta!</Text>
                  </TouchableOpacity>
                </View>
            </ScrollView>  

            <Popup
              title={"Ops, mas..."}
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

          </SafeAreaView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
 );
};
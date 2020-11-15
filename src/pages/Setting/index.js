import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Text, View, TouchableOpacity, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import InputText from '../../components/InputText';
import { AntDesign, Feather } from '@expo/vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { LoginContext } from '../../contexts/LoginContext';

import userImage from '../../assets/user-image.png';
import api from '../../services/api';

export default function Setting() {
  const context = useContext(LoginContext);

  const { navigate } = useNavigation();

  const [name, setName] = useState(context.firstName);
  const [lastName, setLastName] = useState(context.lastName);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  
  function handleNavigateToHome(){
    navigate('Home');
  }

  function handleUpdateUserData() {
    if(password !== passwordConfirmation && password !== '') {
      alert('Senha inválida');
      return;
    }

    const formData = {
      newFirstName: name,
      newLastName: lastName,  
      newPassword: password,
    }

    api.put('/users', formData).then(result => {
      if(result.status === 200) {
        const { firstName, lastName } = result.data;

        setName(firstName);
        setLastName(lastName);
        
        context.setFirstName(firstName);
        context.setLastName(lastName);
      }
    })
  }

  return (

    <KeyboardAvoidingView 
      style={styles.container}
    >
      
      <View style={styles.header}>
        <AntDesign onPress={() => handleNavigateToHome()} name="arrowleft" size={24} color="#FFF"/>
        <Text style={styles.title}>ÓRAMA</Text>
        <Feather name="refresh-cw" size={22} color="#FFF"/>
      </View>
        
        <SafeAreaView style={styles.content}>
          <ScrollView
            showsVerticalScrollIndicator={false}>
            
            <View>
              <Text style={styles.configuracaoName}>Configurações</Text>
              <Text style={styles.configuracaoPhrase}>Personalize seu perfil</Text>
            </View>

            <View style={styles.infoContainer}>
              <View style={styles.infoContent}>
                <View style={styles.avatarContent}>
                  <Image source={userImage} style={styles.userImage}/>
                  <Text style={styles.username}>{context.firstName} {context.lastName}</Text>
                </View>
                <View style={styles.boxText}>
                  <Text style={styles.text}>Nome</Text>
                </View>
                <InputText 
                  isBlack={true}
                  placeholder="Digite o seu nome"
                  autoCorrect={false}
                  value={name}
                  onChangeText={value => setName(value)}
                />

                <View style={styles.boxText}>
                  <Text style={styles.text}>Sobrenome</Text>
                </View>
                <InputText 
                  isBlack={true}
                  placeholder="Digite o seu sobrenome"
                  autoCorrect={false}
                  value={lastName}
                  onChangeText={value => setLastName(value)}
                />

                <View style={styles.boxText}>
                  <Text style={styles.text}>E-mail</Text>
                </View>
                <InputText 
                  isBlack={true}
                  autoCorrect={false}
                  disabled={true}
                  value={context.email}
                  onChangeText={()=>{}}
                />

                <View style={styles.boxText}>
                  <Text style={styles.text}>Senha</Text>
                </View>
                <InputText 
                  isBlack={true}
                  placeholder="Digite sua senha"
                  autoCorrect={false}
                  value={password}
                  onChangeText={value => setPassword(value)}
                />
                <InputText 
                  isBlack={true}
                  placeholder="Confirme sua senha"
                  autoCorrect={false}
                  value={passwordConfirmation}
                  onChangeText={value => setPasswordConfirmation(value)}
                />
              </View>
            </View>
            <LinearGradient
              colors={['#24AC6E', '#34F683']}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.buttonBackgroundSave}
            >
              <TouchableOpacity
                onPress={handleUpdateUserData}
                style={styles.buttonSave}
              >
                <Text style={styles.textSave}>Salvar</Text>
              </TouchableOpacity>
            </LinearGradient>

            <TouchableOpacity 
              style={styles.boxBack}
              onPress={handleNavigateToHome}
            >
            <Text style={styles.textBack}>Voltar</Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>

    </KeyboardAvoidingView>
  );
}
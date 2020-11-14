import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Text, View, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import InputText from '../../components/InputText';
import { AntDesign, Feather } from '@expo/vector-icons';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

export default function Setting() {
    const { navigate } = useNavigation();

    function handleNavigateToHome(){
      navigate('Home');
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

              <View style={styles.boxText}>
                <Text style={styles.text}>Nome</Text>
              </View>
              <InputText 
                placeholder=""
                autoCorrect={false}
                onChangeText={()=>{}}
              />

              <View style={styles.boxText}>
                <Text style={styles.text}>Sobrenome</Text>
              </View>
              <InputText 
                placeholder=""
                autoCorrect={false}
                onChangeText={()=>{}}
              />

              <View style={styles.boxText}>
                <Text style={styles.text}>E-mail</Text>
              </View>
              <InputText 
                placeholder=""
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
              style={styles.buttonBackgroundSave}
            >
              <RectButton
                onPress={handleNavigateToHome}
                style={styles.buttonSave}
              >
                <Text style={styles.textSave}>Salvar</Text>
              </RectButton>
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
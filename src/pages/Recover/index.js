import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {  Text, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import InputText from '../../components/InputText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import { AntDesign, Feather } from '@expo/vector-icons';


export default function Recover( {navigation} ){
    const { navigate } = useNavigation();

    function handleNavigateToHome(){
      navigate('Drawer');
    }

    return (

        <KeyboardAvoidingView style={styles.container}>

            <View style={styles.header}>
              <AntDesign onPress={() => navigation.navigate('Login')} name="arrowleft" size={24} color="#FFF"/>
              <Text style={styles.title}>ÓRAMA</Text>
              <Feather name="refresh-cw" size={22} color="#FFF"/>
            </View>
          
            <SafeAreaView style={styles.content}>

                <View style={styles.boxText}>
                    <Text style={styles.text}>Recuperar senha</Text>
                </View>
                <InputText 
                    placeholder="Digite seu e-mail"
                    autoCorrect={false}
                    onChangeText={()=>{}}
                />

            <TouchableOpacity 
              style={styles.buttonSend}
            >
              <Text style={styles.textSend}>Enviar</Text>
            </TouchableOpacity>


             </SafeAreaView>

        </KeyboardAvoidingView>
    );
 };
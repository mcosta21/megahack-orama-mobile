import React from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {  Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput } from 'react-native';
import InputText from '../../components/InputText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';

export default function Friends( {navigation} ){
    const { navigate } = useNavigation();

    function handleNavigateToHome(){
      navigate('Drawer');
    }

    return (

      <View style={styles.containerProcurar}>

        <SafeAreaView style={{backgroundColor: '#2f363c' }} />
        
          <TextInput
            placeholder="Procurar"
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'#2f363c',
            height: 50,
            fontSize: 18,
            padding: 10,
            color: 'white'
        }} 
        />

        <View style={styles.containerAmigos}>

        </View>

      </View>
  );
};

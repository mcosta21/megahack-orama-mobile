import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {  Text, View, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign  } from '@expo/vector-icons';

import TitleWelcome from '../../components/TitleWelcome';

import api from '../../services/api';

export default function Friends(){
  const { navigate } = useNavigation();

  const [ friends, setFriends ] = useState([]);

  function handleNavigateToHome() {
    navigate('Home');
  }

  useEffect(() => {
    api.get('/friends').then(response => {
      const { status, data } = response;

      if(status === 200) {
        setFriends(data);
      }
    });
  }, []);

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <AntDesign onPress={ handleNavigateToHome } name="arrowleft" size={24} color="#FFF"/>
        <Text style={styles.title}>ÓRAMA</Text>
        <AntDesign name="arrowleft" size={24} color="#182024"/>
      </View>

      <SafeAreaView>
        <TitleWelcome title='Amigos' description='Estes são seus amigos investidores'/>
      </SafeAreaView>

      <LinearGradient
        colors={['#24AC6E', '#34F683']}
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.backgroundImage}
      >
        <View style={styles.resultContainer}>
          {friends?.map((friend, key) => (
            <Text key={key}>{friend.firstName}</Text>
          ))}
        </View>

      </LinearGradient>
    </View>
  );
};

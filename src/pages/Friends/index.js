import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {  Text, ScrollView, View, Image, ImageBackground, TouchableOpacity, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather } from '@expo/vector-icons';
import userImage from '../../assets/user-image.png';

import TitleWelcome from '../../components/TitleWelcome';

import api from '../../services/api';

export default function Friends(){
  const { navigate } = useNavigation();

  const [ friends, setFriends ] = useState([]);

  function handleNavigateToHome() {
    navigate('Home');
  }

  async function handleRemoveFriend(friendId) {
    await api.delete(`/friends/${friendId}`);
  }

  useEffect(() => {
    api.get('/friends').then(response => {
      const { status, data } = response;

      if(status === 200) {
        setFriends(data);
      }
    });
  }, [friends]);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('../../assets/login-background.png')} style={styles.image}>

        <View style={styles.header}>
          <AntDesign onPress={ handleNavigateToHome } name="arrowleft" size={24} color="#FFF"/>
          <Text style={styles.title}>ÓRAMA</Text>
          <AntDesign name="arrowleft" size={24} color="#182024"/>
        </View>

        <SafeAreaView>
          <TitleWelcome title='Amigos' description='Estes são seus amigos investidores'/>
        </SafeAreaView>

        <ScrollView showsVerticalScrollIndicator={false} >
          <LinearGradient
            colors={['#24AC6E', '#34F683']}
            start={{ x: 1, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={styles.backgroundImage}
          >
            <View style={styles.resultContainer}>
              {friends?.map((friend, key) => (
                <View style={styles.boxFriend}>
                  <View style={styles.boxFriendContent}>
                    <Image source={userImage} style={styles.userImage}/>
                    <Text style={styles.userName}>{friend.firstName} {friend.lastName}</Text>
                  </View>
                  <Feather 
                  onPress={() => handleRemoveFriend(friend.id)}
                  name="minus-circle" 
                  size={24} 
                  color="#24AC6E" 
                  />
              </View>
              ))}
            </View>

          </LinearGradient>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

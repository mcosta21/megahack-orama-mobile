import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import {  Text, View, FlatList, TouchableOpacity } from 'react-native';
import InputText from '../../components/InputText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import api from '../../services/api';

export default function Friends(){
  const { navigate } = useNavigation();

  const [ friends, setFriends ] = useState([]);

  function handleSearchUser() {

  }

  return (
    <View style={styles.searchContainer}>
      <SafeAreaView>
        <Text>Amigos</Text>
        
      </SafeAreaView>
        <TouchableOpacity onPress={handleSearchUser} style={styles.searchBtn} >
          <Text>Buscar</Text>
        </TouchableOpacity>
      <View style={styles.resultContainer}>
        
      </View>
    </View>
  );
};

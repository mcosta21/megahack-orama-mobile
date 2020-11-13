import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';

export default function Feed() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Feather name="align-left" size={26} color="#FFF"/>
          <Text style={styles.title}>ÓRAMA</Text>
          <Feather name="settings" size={23} color="#FFF"/>
        </View>
      </View>
  );
}
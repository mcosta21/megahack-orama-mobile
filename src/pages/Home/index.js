import React from 'react';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';

import Loading from '../Loading';
import Login from '../Login';

const Tab = createBottomTabNavigator();

export default function Home() {

    return (
      <View style={styles.container}>

          <View style={styles.header}>
            <Feather name="align-left" size={26} color="#FFF"/>
            <Text style={styles.title}>ÓRAMA</Text>
            <Feather name="settings" size={23} color="#FFF"/>
          </View>
          
          <SafeAreaView style={styles.content}>
            <ScrollView>
              <View style={styles.welcome}>
                <Text style={styles.welcomeName}>Olá, Marcio</Text>
                <Text style={styles.welcomePhrase}>Pronto para investir hoje?</Text>
              </View>
            </ScrollView>
          </SafeAreaView>

     </View>
  );
}

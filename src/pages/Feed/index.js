import React from 'react';
import { View, Text, SafeAreaView, ScrollView, } from 'react-native';
import styles from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import Post from '../../components/Post';
import { useNavigation } from '@react-navigation/native';

export default function Feed() {
    const { navigate } = useNavigation();

    function handleNavigateToHome(){
      navigate('Home');
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign onPress={() => handleNavigateToHome()} name="arrowleft" size={24} color="#FFF"/>
          <Text style={styles.title}>ÓRAMA</Text>
          <Feather name="refresh-cw" size={22} color="#FFF"/>
        </View>

        <SafeAreaView style={styles.content}>
            <ScrollView
              showsVerticalScrollIndicator={false}>
              
              <View style={styles.welcome}>
                <Text style={styles.welcomeName}>Feed</Text>
                <Text style={styles.welcomePhrase}>Veja o que seus amigos estão investindo!</Text>
              </View>

              <View style={styles.posts}>
                <Post />
                <Post />
                <Post />
              </View>


            </ScrollView>
        </SafeAreaView>
      </View>
  );
}
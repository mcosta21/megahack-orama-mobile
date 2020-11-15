import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Keyboard, ScrollView, TouchableWithoutFeedback, Text, View, KeyboardAvoidingView, TouchableOpacity, ImageBackground } from 'react-native';
import InputText from '../../components/InputText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LoginContext } from '../../contexts/LoginContext';
import { AntDesign, FontAwesome  } from '@expo/vector-icons';
import TitleWelcome from '../../components/TitleWelcome';

export default function SearchFriends(){

    const { navigate } = useNavigation();

    const [friend, setFriend] = useState();

    function handleNavigateToHome(){
      navigate('Home');
    }
    return (

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={styles.container}>
            <ImageBackground source={require('../../assets/login-background.png')} style={styles.image}>
              
                <View style={styles.header}>
                    <AntDesign onPress={() => handleNavigateToHome()} name="arrowleft" size={24} color="#FFF"/>
                    <Text style={styles.title}>ÓRAMA</Text>
                    <AntDesign name="arrowleft" size={24} color="#182024"/>
                </View>

                <ScrollView>
                  <View 
                    style={styles.content} 
                  >
                    
                    <TitleWelcome title="Procurar amigos" description="Conecte-se com seus amigos investidores" />

                    <View style={styles.boxSearch}>
                      <InputText 
                        placeholder="Pesquisar por amigo"
                        name="search"
                        autoCorrect={false}
                        value={friend}
                        onChangeText={value => setFriend(value)}
                        width={250}
                      />
                      <TouchableOpacity
                        style={styles.buttonSearch}
                        onPress={() => handleClickSearch()}
                      >
                        <FontAwesome name="search" size={24} color="#24AC6E" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </ScrollView>

            </ImageBackground>    
          </SafeAreaView>
      </TouchableWithoutFeedback> 

  );
};
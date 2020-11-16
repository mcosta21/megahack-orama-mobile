import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { Keyboard, ScrollView, TouchableWithoutFeedback, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import InputText from '../../components/InputText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome, Feather  } from '@expo/vector-icons';
import TitleWelcome from '../../components/TitleWelcome';
import userImage from '../../assets/user-image.png';
import api from '../../services/api';
import { LoginContext } from '../../contexts/LoginContext';

export default function SearchFriends(){

    const { navigate } = useNavigation();
    const context = useContext(LoginContext);

    const userId = context.id;
    const [users, setUsers] = useState([]);

    useEffect(() => {
      setUsers([]);
      api.get('users').then(response => {
        if(response.status === 200) {
          response.data.map(user => {
            if(user.id !== userId)
              setUsers(users => [...users, user]);
          })
        }
      });
    }, []);

    function getUnknownUsers(){
      api.get('friends/unknown').then(response => {
        const unknowns = response.data;
        setFriends(unknowns);
      });
    }
    function handleNavigateToHome(){
      navigate('Home');
    }

    function handleClickAddFriend(id){
      const formData = {
        friendId: id
      }
      api.post('friends', formData).then(response => {
        navigate('Friends');
      });
    }

    function handleClickSearch() {
      alert('To do');
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

                <ScrollView showsVerticalScrollIndicator={false}>
                  <View 
                    style={styles.content} 
                  >
                    
                    <TitleWelcome title="Procurar amigos" description="Conecte-se com seus amigos investidores" />

                    <View style={styles.boxSearch}>
                      <InputText 
                        placeholder="Pesquisar por amigo"
                        name="search"
                        autoCorrect={false}
                        width={250}
                      />
                      <TouchableOpacity
                        style={styles.buttonSearch}
                        onPress={handleClickSearch}
                      >
                        <FontAwesome name="search" size={24} color="#24AC6E" />
                      </TouchableOpacity>
                    </View>

                    {users?.map((user, key) => (
                      <View 
                        key={key} 
                        style={styles.boxFriend}
                      >
                        <View style={styles.boxFriendContent}>
                          <View style={styles.userData}>
                            <Image source={userImage} style={styles.userImage}/>
                            <Text style={styles.userName}>{`${user.firstName} ${user.lastName}`}</Text>
                          </View>
                          <View>
                            <TouchableOpacity onPress={() => handleClickAddFriend(user.id)}>
                              <Feather 
                                  name="plus-circle" 
                                  size={24} 
                                  color="#24AC6E"
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    ))
                    }
                  </View>
                </ScrollView>

            </ImageBackground>    
          </SafeAreaView>
      </TouchableWithoutFeedback> 

  );
};
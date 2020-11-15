import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, } from 'react-native';
import styles from './styles';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';
import Post from '../../components/Post';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

export default function Feed() {
    const { navigate } = useNavigation();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const isMounted = true;
      getPostsByUser(isMounted);

      return () => {
        isMounted = false;
      }
    }, []);

    function getPostsByUser(isMounted){
      if(isMounted) {
        api.get('posts').then(response => {
          if(response.data.length !== 0){
            let postsByUser = [];
            response.data.map(post => {
              return (
                post.series.map((item, index) => {
                  const data = {
                    post_id: index + 1,
                    user_id: post.user.id,
                    username: `${post.user.firstName} ${post.user.lastName}`,
                    ...item.serie
                  }
                  postsByUser.push(data);
                })
              );
            });
            setPosts(postsByUser);
          }
        });
      }
    }

    function handleNavigateToHome(){
      navigate('Home');
    }

    function handleClickUpdatePosts(){
      console.log('post')
      getPostsByUser();
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign onPress={() => handleNavigateToHome()} name="arrowleft" size={24} color="#FFF"/>
          <Text style={styles.title}>ÓRAMA</Text>
          <Feather onPress={() => handleClickUpdatePosts()} name="refresh-cw" size={22} color="#FFF"/>
        </View>

        <SafeAreaView style={styles.content}>
            <ScrollView
              showsVerticalScrollIndicator={false}>
              
              <View style={styles.welcome}>
                <Text style={styles.welcomeName}>Feed</Text>
                <Text style={styles.welcomePhrase}>Veja o que seus amigos estão investindo!</Text>
              </View>

              {
                posts.length === 0 
                ?
                  <View style={styles.withoutPost}>
                    <FontAwesome5 name="sad-tear" size={70} color="#24AC6E" />
                    <Text style={styles.withouPostText}>Desculpe, mas seus amigos ainda não investiram.</Text>
                  </View>
                :
                  <View style={styles.posts}>
                    {
                      posts.map((post, index) => {
                        return <Post 
                                  key={index}
                                  category={post.category} 
                                  title={post.title} 
                                  description={post.description} 
                                  username={post.username}
                                />
                      })
                    }
                  </View>
              }

            </ScrollView>
        </SafeAreaView>
      </View>
  );
}
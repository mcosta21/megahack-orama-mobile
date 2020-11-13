import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import InputText from '../../components/InputText';

import imageRendaFixa from '../../assets/renda-fixa-meu-precioso.jpg';
import imageOfertasPublicas from '../../assets/ofertas-publicas-ironman.png';
import imagePoupanca from '../../assets/poupanca-minion.png';

export default function Home({ navigation }) {
    const { navigate } = useNavigation();

    const cards = [
      {
        firstLine: 'MEU',
        secondLine: 'PRECIOSO',
        category: 'RENDA FIXA',
        image: imageRendaFixa,
        path: 'Loading'
      },
      {
        firstLine: 'EU SOU O...',
        secondLine: undefined,
        category: 'OFERTAS PÚBLICAS',
        image: imageOfertasPublicas,
        path: 'Login'
      },
      {
        firstLine: 'DIMDIM...',
        secondLine: 'DIMDIM...',
        category: 'POUPANÇA',
        image: imagePoupanca,
        path: 'Loading'
      }
    ];

    function handleNavigate(path) {
      navigate(path)
    }

    function handleNavigateToDrawer(){
      navigation.openDrawer();
    }

    function handleNavigateToSetting(){
      navigate('Setting');
    }

    return (
      <View style={styles.container}>
          <StatusBar style="light"/>
          <View style={styles.header}>
            <Feather onPress={handleNavigateToDrawer} name="align-left" size={26} color="#FFF"/>
            <Text style={styles.title}>ÓRAMA</Text>
            <Feather onPress={handleNavigateToSetting} name="settings" size={23} color="#FFF"/>
          </View>
          
          <SafeAreaView style={styles.content}>
            <ScrollView
              showsVerticalScrollIndicator={false}>
              <View style={styles.welcome}>
                <Text style={styles.welcomeName}>Olá, Marcio</Text>
                <Text style={styles.welcomePhrase}>Pronto para investir hoje?</Text>
              </View>
              
              <ScrollView 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.cards}
              >
                {
                  cards.map((card, index) => {
                    return (
                      <Card 
                        key={index}
                        firstLine={card.firstLine} 
                        secondLine={card.secondLine} 
                        category={card.category}
                        image={card.image}
                        onPress={() => handleNavigate(card.path)}
                      />
                    )
                  })
                }
                  
              </ScrollView>
              
              <TouchableOpacity
                onPress={handleNavigateToDrawer}
              >
                <Text>Press Here</Text>
              </TouchableOpacity>

              <InputText 
                placeholder="Digite sua senha"
                autoCorrect={false}
                onChangeText={()=>{}}
              />

              <InputText 
                placeholder="Digite sua senha"
                autoCorrect={false}
                onChangeText={()=>{}}
              />

              <InputText 
                placeholder="Digite sua senha"
                autoCorrect={false}
                onFocus={() => {}}
                disabled
                onChangeText={()=>{}}
              />

            </ScrollView>
          </SafeAreaView>

     </View>
  );
}

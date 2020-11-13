import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

import imageRendaFixa from '../../assets/renda-fixa-meu-precioso.jpg';
import imageOfertasPublicas from '../../assets/ofertas-publicas-ironman.png';
import imagePoupanca from '../../assets/poupanca-minion.png';

export default function Home() {
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

    function handleNavigateToLogin(path) {
      navigate(path)
    }

    return (
      <View style={styles.container}>
          <StatusBar style="light"/>
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
                        onPress={() => handleNavigateToLogin(card.path)}
                      />
                    )
                  })
                }
                  
              </ScrollView>
              

            </ScrollView>
          </SafeAreaView>

     </View>
  );
}

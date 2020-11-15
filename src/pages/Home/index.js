import React, { useContext, useEffect, useState } from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';

import imageRendaFixa from '../../assets/renda-fixa-meu-precioso.png';
import imageOfertasPublicas from '../../assets/ofertas-publicas-ironman.png';
import imagePoupanca from '../../assets/poupanca-minion.png';
import { RectButton } from 'react-native-gesture-handler';
import TitleWelcome from '../../components/TitleWelcome';

import { LoginContext } from '../../contexts/LoginContext';

import api from '../../services/api';

export default function Home({ navigation }) {
  const context = useContext(LoginContext);

  const [investments, setInvestments] = useState([]);

  const { navigate } = useNavigation();

  const cards = [
    {
      firstLine: 'MEU',
      secondLine: 'PRECIOSO',
      category: 'TESOURO DIRETO',
      image: imageRendaFixa,
      path: 'Loading'
    },
    {
      firstLine: 'EU SOU O...',
      secondLine: undefined,
      category: 'POUPANÇA',
      image: imageOfertasPublicas,
      path: 'Login'
    },
    {
      firstLine: 'DIMDIM...',
      secondLine: 'DIMDIM...',
      category: 'RENDA FIXA',
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

  useEffect(() => {
    let isMounted = true;
    
    const getUserInvestments = async () => {
      if(isMounted) {
        await api.get('/investments').then(response => {
          const { status, data } = response;
          console.log(status);
          if(status === 200) {
            setInvestments(data);
          }
        });
      }
    }

    getUserInvestments();

    return () => {
      isMounted = false;
    }
  }, []);

  return (
    <View style={styles.container}>
        
        <View style={styles.header}>
          <Feather onPress={handleNavigateToDrawer} name="align-left" size={26} color="#FFF"/>
          <Text style={styles.title}>ÓRAMA</Text>
          <Feather onPress={handleNavigateToSetting} name="settings" size={23} color="#FFF"/>
        </View>
        
        <SafeAreaView style={styles.content}>
          <ScrollView
            showsVerticalScrollIndicator={false}>
            
            <TitleWelcome title={`Olá, ${context.firstName}`} description="Pronto para investir hoje?" />
            
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
            
            <View style={styles.investmentBox}>
              <Text style={styles.investmentTitle}>Meus investimentos</Text>

              {investments.map((investment, key) => (
                <TouchableOpacity style={styles.investmentCard} key={key}>
                  <View style={styles.investmentCardBorder}>
                    <View style={styles.investmentCardImage}>
                      <Text style={styles.investmentCardText}>{`#${key+1}`}</Text>
                    </View>
                    <Text style={styles.investmentTitle}>{investment.serie.title}</Text>
                  </View>
                </TouchableOpacity>
              ))

              }

              <View style={styles.investmentBoxButton}>
                <RectButton onPress={() => {}} style={styles.investmentButton}>
                  <AntDesign style={styles.investmentButtonIcon} name="arrowright" size={24} color="#24AC6E"/>
                </RectButton>
              </View>

            </View>
            
            <TitleWelcome title="Ranking Órama" description="Se torne o maior investidor do Brasil" />

            <View style={styles.rankingBox}>
              
              <RectButton style={styles.rankingCard}>
                <View style={styles.rankingCardImage}>
                </View>
                <View style={styles.rankingCardValues}>
                  <Text style={styles.rankingCardPosition}>#1025</Text>
                  <Text style={styles.rankingCardTitle}>Maior investidor Órama</Text>
                </View>
              </RectButton>

              <RectButton style={styles.rankingCard}>
                <View style={styles.rankingCardImage}>
                </View>
                <View style={styles.rankingCardValues}>
                  <Text style={styles.rankingCardPosition}>#1025</Text>
                  <Text style={styles.rankingCardTitle}>Maior investidor do bairro</Text>
                </View>
              </RectButton>

              <RectButton style={styles.buttonSeeAll}>
                <Text style={styles.buttonSeeAllText}>Ver tudo</Text>
                <AntDesign style={styles.investmentButtonIcon} name="arrowright" size={22} color="#24AC6E"/>
              </RectButton>
            </View>
          </ScrollView>
        </SafeAreaView>

    </View>
  );
}

import React from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';

import imageRendaFixa from '../../assets/renda-fixa-meu-precioso.jpg';
import imageOfertasPublicas from '../../assets/ofertas-publicas-ironman.png';
import imagePoupanca from '../../assets/poupanca-minion.png';
import { RectButton } from 'react-native-gesture-handler';

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
              
              <View style={styles.investmentBox}>
                <Text style={styles.investmentTitle}>Meus investimentos</Text>

                <RectButton style={styles.investmentCard}>
                  <View style={styles.investmentCardBorder}>
                    <View style={styles.investmentCardImage}>
                      <Text style={styles.investmentCardText}>#1</Text>
                    </View>
                    <Text style={styles.investmentDescription}>Teste 1</Text>
                  </View>
                </RectButton>

                <RectButton style={styles.investmentCard}>
                  <View style={styles.investmentCardBorder}>
                    <View style={styles.investmentCardImage}>
                      <Text style={styles.investmentCardText}>#1</Text>
                    </View>
                    <Text style={styles.investmentDescription}>Teste 1</Text>
                  </View>
                </RectButton>

                <RectButton style={styles.investmentCard}>
                  <View style={styles.investmentCardBorder}>
                    <View style={styles.investmentCardImage}>
                      <Text style={styles.investmentCardText}>#1</Text>
                    </View>
                    <Text style={styles.investmentDescription}>Teste 1</Text>
                  </View>
                </RectButton>

                <View style={styles.investmentBoxButton}>
                  <RectButton onPress={() => {}} style={styles.investmentButton}>
                    <AntDesign style={styles.investmentButtonIcon} name="arrowright" size={24} color="#24AC6E"/>
                  </RectButton>
                </View>

              </View>

              <View style={styles.welcome}>
                <Text style={styles.welcomeName}>Ranking Órama</Text>
                <Text style={styles.welcomePhrase}>Se torne o maior investidor do Brasil</Text>
              </View>

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

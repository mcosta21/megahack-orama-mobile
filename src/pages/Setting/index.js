import React from 'react';
import { Feather, AntDesign } from '@expo/vector-icons';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import styles from './styles';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';

export default function Setting() {

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
              
              <View>
                <Text style={styles.configuracaoName}>Configurações</Text>
                <Text style={styles.configuracaoPhrase}>Personalize seu perfil</Text>
              </View>

              <View style={styles.boxText}>
                <Text style={styles.text}>Nome</Text>
              </View>
              <InputText 
                placeholder=""
                autoCorrect={false}
                onChangeText={()=>{}}
              />

              <View style={styles.boxText}>
                <Text style={styles.text}>Sobrenome</Text>
              </View>
              <InputText 
                placeholder=""
                autoCorrect={false}
                onChangeText={()=>{}}
              />

              <View style={styles.boxText}>
                <Text style={styles.text}>E-mail</Text>
              </View>
              <InputText 
                placeholder=""
                autoCorrect={false}
                onChangeText={()=>{}}
              />

              <View style={styles.boxText}>
                <Text style={styles.text}>Senha</Text>
              </View>
              <InputText 
                placeholder="Digite sua senha"
                autoCorrect={false}
                onChangeText={()=>{}}
              />
              <InputText 
                placeholder="Confirme sua senha"
                autoCorrect={false}
                onChangeText={()=>{}}
              />

            <LinearGradient
              colors={['#24AC6E', '#34F683']}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.buttonBackgroundSave}
            >
              <RectButton
                onPress={handleNavigateToHome}
                style={styles.buttonSave}
              >
                <Text style={styles.textSave}>Salvar</Text>
              </RectButton>
          </LinearGradient>

          <TouchableOpacity 
              style={styles.boxBack}
              onPress={handleNavigateToHome}
            >
              <Text style={styles.textBack}>Voltar</Text>
            </TouchableOpacity>

              </ScrollView>
          </SafeAreaView>

     </View>
  );
}
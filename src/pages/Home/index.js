import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';

export default function Home( {navigation} ) {
    return (

      <KeyboardAvoidingView>
        <View>
        <Text>Tinha dois patos na lagoa, um pato olhou para o outro e fez "Quak", o outro ouviu e disse "Nossa, eu ia dizer isso agora."</Text>
        
        <TouchableOpacity style={styles.btnAmigos}
          onPress={ () => navigation.navigate('Amigos')}>
            <Text>Amigos</Text>
          </TouchableOpacity>
      </View>
     </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  btnAmigos:{
    backgroundColor: '#35AAFF',
    width: '20%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
});
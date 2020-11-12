import React from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';

export default function Amigos() {
    return (
      <View style={styles.containerProcurar}>
        <SafeAreaView style={{backgroundColor: '#2f363c' }} />
          <TextInput
            placeholder="Procurar"
            placeholderTextColor="#dddddd"
            style={{backgroundColor:'#2f363c',
            height: 50,
            fontSize: 18,
            padding: 10,
            color: 'white'
        }} 
        />

        <View style={styles.containerAmigos}>

        </View>

      </View>
  );
}

const styles = StyleSheet.create({
    containerProcurar:{
        flex: 1,
    },

    containerAmigos:{
        flex: 1,
        backgroundColor: '#2f363c',
    }
})
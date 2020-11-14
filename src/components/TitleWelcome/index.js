import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function TitleWelcome(){
    return (
        <View>
            <Text style={styles.welcomeName}>Olá, Marcio</Text>
            <Text style={styles.welcomePhrase}>Pronto para investir hoje?</Text>
        </View>
    );
}
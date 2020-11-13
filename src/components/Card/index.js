import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import rendaFixa from '../../assets/renda-fixa-meu-precioso.jpg'

export default function Card(){
    return (
        <LinearGradient
            colors={['#24AC6E', '#34F683']}
            start={{ x: 1, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={styles.card}
        >
            <View style={styles.cardContent}>
            <ImageBackground 
                imageStyle={{ borderRadius: 8 }} 
                source={rendaFixa} 
                style={styles.cardBackground}
            >
                <Text style={styles.cardTitle}>MEU</Text>
                <Text style={styles.cardTitle}>PRECIOSO</Text>
            </ImageBackground>
            </View>
        </LinearGradient>
    );
}
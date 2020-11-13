import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

export default function Card({ firstLine, secondLine, category, image, ...rest}){
    return (
        <RectButton {...rest} style={styles.container}>
            <LinearGradient
                colors={['#24AC6E', '#34F683']}
                start={{ x: 0, y: 1 }}
                end={{ x: 0, y: 0 }}
                style={styles.card}
            >
                <View style={styles.cardContent}>
                    <ImageBackground 
                        imageStyle={{ borderRadius: 8 }} 
                        source={image} 
                        style={styles.cardBackground}
                    >
                        {
                            secondLine === undefined ?
                            <Text style={{ marginTop: 5, ...styles.cardTitle }}>{firstLine}</Text>
                            : 
                            <>
                                <Text style={styles.cardTitle}>{firstLine}</Text>
                                <Text style={styles.cardTitle}>{secondLine}</Text>
                            </>
                        }
                    </ImageBackground>
                </View>
            </LinearGradient>
            
            <View style={styles.cardTag}>
                <Text style={styles.cardTagTitle}>
                    {
                        category === undefined ? 'undefined'
                        : category
                    }
                </Text>
            </View>
        </RectButton>
    );
}
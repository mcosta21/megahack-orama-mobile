import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function TitleWelcome({ title, description}){
    return (
        <View>
            <Text style={styles.welcomeName}>{title}</Text>
            {
                description !== undefined &&
                <Text style={styles.welcomePhrase}>{description}</Text>
            }
        </View>
    );
}
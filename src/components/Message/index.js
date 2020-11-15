import React from 'react';
import styles from './styles';
import {  Text, View } from 'react-native';

export default function Message({ index, message }){
    return (
        <View style={styles.message}>
            <Text style={styles.messageIndex}>#{index+1}</Text>
            <Text style={styles.messageText}>{message}</Text>
        </View>
    )
}
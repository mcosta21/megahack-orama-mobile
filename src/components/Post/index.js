import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

export default function Post(){
    return (
        <RectButton style={styles.post}>
            <View style={styles.postImage}>
            </View>

            <View style={styles.postInfo}>
                <Text style={styles.postTag}>TESOURO DIRETO</Text>
                <Text style={styles.postTitle}>Título da série</Text>
                <Text style={styles.postDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod...
                </Text>

                <View style={styles.postOptionBottom}>

                <View style={styles.postImageIcons}>
                    <Image style={styles.postImageIcon} source={{
                        url: 'https://avatars0.githubusercontent.com/u/30120305?s=460&u=2c33a6777ec253d664a59108230924e555c89070&v=4'
                    }} />
                    <Image style={styles.postImageIcon} source={{
                        url: 'https://avatars0.githubusercontent.com/u/30120305?s=460&u=2c33a6777ec253d664a59108230924e555c89070&v=4'
                    }} />
                    <Image style={styles.postImageIcon} source={{
                        url: 'https://avatars0.githubusercontent.com/u/30120305?s=460&u=2c33a6777ec253d664a59108230924e555c89070&v=4'
                    }} />
                </View>

                <View style={styles.postOptionBottomButton}>
                    <Text style={styles.postOptionBottomButtonTitle}>Visualizar</Text>
                </View>
                
                </View>

            </View>
        </RectButton>
    )
};
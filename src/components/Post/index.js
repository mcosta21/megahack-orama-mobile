import React from 'react';
import { View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';
import userImage from '../../assets/user-image.png';

export default function Post({ category, title, description, username }){

    const reducedDescrition = description !== undefined && description.length > 150 
                        ? description.substr(0, 150)
                        : description;

    return (
        <RectButton style={styles.post}>
            <View style={styles.postImage}>

            </View>

            <View style={styles.postInfo}>
                <Text style={styles.postTag}>{category}</Text>
                <Text style={styles.postTitle}>{title}</Text>
                <Text style={styles.postDescription}>
                    {reducedDescrition}
                </Text>

                <View style={styles.postOptionBottom}>

                <View style={styles.postInfoUser}>
                    <Image style={styles.postImageUser} source={userImage} />
                    <Text style={styles.postNameUser}>{username}</Text>
                </View>

                <View style={styles.postOptionBottomButton}>
                    <Text style={styles.postOptionBottomButtonTitle}>Visualizar</Text>
                </View>
                
                </View>

            </View>
        </RectButton>
    )
};
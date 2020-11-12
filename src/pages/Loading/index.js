import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

import backgroundImage from '../../assets/loading-background.png';

export default function Loading() {

    return (
      <View style={styles.container}>
          <LinearGradient
            colors={['#34F683', '#24AC6E']}
            style={{flex: 1}}
          >
            <ImageBackground source={backgroundImage} style={styles.image}>
              <View style={styles.div}>
                <Text style={styles.text}>ÓRAMA</Text>
              </View>

            </ImageBackground>
          </LinearGradient>
        
     </View>
  );
}

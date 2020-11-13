import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    card: {
        width: 160,
        height: 213,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 20
    },
    cardContent: {
        width: 157,
        height: 210,
        borderRadius: 10
    },
    cardBackground: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "flex-start",
        paddingLeft: 20,
        paddingTop: 14
    },
    cardTitle: {
        lineHeight: 20,
        fontFamily: 'Barlow_900Black',
        fontSize: 18,
        color: '#FFF'
    },
    cardTag: {

    }
});
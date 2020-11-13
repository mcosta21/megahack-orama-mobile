import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 20,
        height: 240
    },
    card: {
        width: 160,
        height: 213,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
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
        maxWidth: 160,
        backgroundColor: '#24AC6E',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 7,
        marginTop: -15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 11,
    },
    cardTagTitle: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Barlow_900Black'
    }
});
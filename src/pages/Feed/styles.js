import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        paddingHorizontal: 24,
        backgroundColor: '#182024',
        paddingTop: Constants.statusBarHeight + 20,
        flexDirection: "column"
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        color: '#FFF',
        fontFamily: 'Ubuntu_700Bold'
    },
    content: {
        marginTop: 20,
        flex: 1, 
    },

    welcomeName: {
        marginTop: 20,
        fontSize: 22,
        color: '#FFF',
        fontFamily: 'Ubuntu_700Bold'
    },
    welcomePhrase: {
        marginTop: 15,
        fontSize: 16,
        color: '#34F683',
        fontFamily: 'Ubuntu_700Bold'
    },

    posts: {
        marginTop: 10,
        marginBottom: 30
    },

    withoutPost: {
        width: '100%',
        alignItems: 'center',
        marginTop: 150,
        paddingHorizontal: 50,
    },
    withouPostText: {
        marginTop: 20,
        color: '#6C7884',
        fontSize: 17,
        lineHeight: 30,
        textAlign: 'center',
        fontFamily: 'Ubuntu_500Medium'
    }

});
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
        paddingBottom: 20
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
        fontSize: 22,
        color: '#FFF',
        fontFamily: 'Ubuntu_700Bold'
    },
    welcomePhrase: {
        marginTop: 15,
        fontSize: 18,
        color: '#34F683',
        fontFamily: 'Ubuntu_700Bold'
    },
    

});
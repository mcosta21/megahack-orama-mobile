import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        paddingHorizontal: 26,
        backgroundColor: '#182024',
        paddingTop: Constants.statusBarHeight + 20,
        flexDirection: "column"
    },
    content: {
        marginTop: 20,
        flex: 1, 
    },
     header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        color: '#FFF',
        fontFamily: 'Ubuntu_700Bold',

    },
    boxText: {
        paddingBottom: 10,
        width: '100%',
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium',
        color: '#24AC6E',
        paddingTop: 15
    },
    buttonSend:{
        backgroundColor: '#24AC6E',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    textSend:{
        color: '#182024',
        fontSize: 22,
        fontFamily: 'Ubuntu_700Bold',
    },

});
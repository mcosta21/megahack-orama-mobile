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
        fontFamily: 'Ubuntu_700Bold'
    },

    configuracaoName: {
        marginTop: 20,
        fontSize: 22,
        color: '#FFF',
        fontFamily: 'Ubuntu_700Bold'
    },
    configuracaoPhrase: {
        marginTop: 15,
        marginBottom: 35,
        fontSize: 16,
        color: '#34F683',
        fontFamily: 'Ubuntu_700Bold'
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

    boxBack: {
        paddingBottom: 10,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems:'center'
    },
    textBack: {
        fontSize: 13,
        color: '#24AC6E',
        fontFamily: 'Ubuntu_500Medium',
    },
    buttonSave:{
        backgroundColor: '#24AC6E',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    textSave:{
        color: '#182024',
        fontSize: 22,
        fontFamily: 'Ubuntu_700Bold',
    },
    buttonBackgroundSave: {
        marginTop: 30,
        width: '100%',
        height: 60,
        borderRadius: 8,
        marginBottom:20,
    },

});
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#182024',

    },

    btnRegistrar:{
        backgroundColor: '#34F683',
        width: '80%',
        height: '9%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom:20,
        marginTop: 30
    },

    textoRegistrar:{
        color: '#182024',
        fontSize: 22,
        fontFamily: 'Ubuntu_700Bold',
    },

    header: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        marginBottom: 90

    },

    title: {
        fontSize: 36,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#34F683',
        fontFamily: 'Ubuntu_700Bold'
    },

    cabecalho: {
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
        color: '#24AC6E',
        paddingBottom: 10,

    },

});
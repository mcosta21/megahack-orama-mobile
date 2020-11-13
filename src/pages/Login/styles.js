import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#182024',

    },

    input:{
        backgroundColor: '#232B32',
        width: '80%',
        height: '10%',
        marginBottom:20,
        color:'#222',
        fontSize: 17,
        borderRadius: 8,
        padding: 10,
    },

    btnEntrar:{
        backgroundColor: '#34F683',
        width: '80%',
        height: '9%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginBottom:20,
        marginTop: 30
    },

    btnCadastrar:{
        backgroundColor: '#232B32',
        width: '80%',
        height: '9%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,

    },

    textoEntrar:{
        color: '#182024',
        fontSize: 22,
        fontFamily: 'Ubuntu_700Bold',
    },

    textoCadastrar:{
        color: '#24AC6E',
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

    textoSenha:{
        fontSize: 13,
        fontStyle: 'normal',
        color: '#24AC6E', 
    },

    campoEsqueci:{
        width: '80%',
        alignItems: 'flex-end',
    },

    campoCabecalho:{
        width: '80%',
    }

    
});
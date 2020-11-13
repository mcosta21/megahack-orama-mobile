import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#0f1a07',

    },

    input:{
        backgroundColor: '#FFF',
        width: '80%',
        height: '10%',
        marginBottom:20,
        color:'#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },

    btnEntrar:{
        backgroundColor: '#98FB98',
        width: '80%',
        height: '9%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginBottom:20,
        marginTop: 30
    },

    btnCadastrar:{
        backgroundColor: '#1C1C1C',
        width: '80%',
        height: '9%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,

    },

    textoEntrar:{
        color: '#000000',
        fontSize: 23,
        fontFamily: 'Ubuntu_700Bold',
    },

    textoCadastrar:{
        color: '#98FB98',
        fontSize: 23,
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
        fontSize: 35,
        color: '#98FB98',
        fontFamily: 'Ubuntu_700Bold'
    },

    cabecalho: {
        fontSize: 19,
        color: '#3CB371',
        paddingBottom: 10,

    },

    textoSenha:{
        fontSize: 12,
        color: '#3CB371', 
    },

    campoEsqueci:{
        width: '80%',
        alignItems: 'flex-end',
    },

    campoCabecalho:{
        width: '80%',
    }

    
});
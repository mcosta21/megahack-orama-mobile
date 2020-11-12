import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    containerLogin: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 30,
    },

    input:{
        backgroundColor: '#FFF',
        width: '90%',
        marginBottom:15,
        color:'#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
    },

    btnAcessar:{
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },

    btnCadastrar:{
        marginTop: 10,
    },

    textoAcessar:{
        color: '#FFF',
        fontSize: 18,
    },

    textoCadastrar:{
        color: '#FFF',
    }
});
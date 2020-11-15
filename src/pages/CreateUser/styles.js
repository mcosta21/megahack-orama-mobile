import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#182024',
     },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        alignItems: 'center',
     },
    header: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
        marginBottom: 50
    },
    title: {
        fontSize: 36,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: '#34F683',
        fontFamily: 'Ubuntu_700Bold'
    },

    body: {
        width: '100%',
        backgroundColor: '#232B32',
        flex: 1,
        borderRadius: 9,
        padding: 20,
    },
    form: {
        marginTop: 5,
        borderTopWidth: 1,
        borderColor: '#1A2126',
        paddingTop: 20,
    },

    boxText: {
        paddingBottom: 10,
        width: '100%',
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium',
        color: '#24AC6E'
    },
    buttonSignUp:{
        backgroundColor: '#24AC6E',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    textSignUp:{
        color: '#182024',
        fontSize: 22,
        fontFamily: 'Ubuntu_700Bold',
    },
    buttonBackgroundSignUp: {
        marginTop: 30,
        width: '100%',
        height: 60,
        borderRadius: 8,
        marginBottom:20,
    },
    boxAlreadyHaveAcc: {
        width: '100%',
        alignItems: 'center',
    },
    textAlreadyHaveAcc: {
        fontSize: 13,
        color: '#24AC6E',
        fontFamily: 'Ubuntu_500Medium',
        marginBottom: 20,
    },
    SignUp:{
        width: '100%',
        paddingBottom: 20
    },
    SignUpText:{
        fontSize: 22,
        color: '#FFF',
        fontFamily: 'Ubuntu_500Medium',
    },

    buttonCloseModal: {
        marginVertical: 20,
        backgroundColor: '#24AC6E',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    textCloseModal: {
        color: '#232B32',
        fontSize: 22,
        fontFamily: 'Ubuntu_700Bold',
    },

});
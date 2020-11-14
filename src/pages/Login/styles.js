import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#182024',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
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
        marginBottom: 90
    },
    title: {
        fontSize: 36,
        fontStyle: 'normal',
        fontWeight: 'bold',
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
        color: '#24AC6E'
    },
    boxForgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
    },
    textForgotPassword: {
        fontSize: 13,
        color: '#24AC6E',
        fontFamily: 'Ubuntu_500Medium',
    },
    textSignIn:{
        color: '#182024',
        fontSize: 22,
        fontFamily: 'Ubuntu_700Bold',
    },
    buttonBackgroundSignIn: {
        marginTop: 30,
        width: '100%',
        height: 60,
        borderRadius: 8,
        marginBottom:20,
    },
    buttonSignIn:{
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonSignUp:{
        backgroundColor: '#232B32',
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    textSignUp:{
        color: '#24AC6E',
        fontSize: 22,
        fontFamily: 'Ubuntu_700Bold',
    }
    
});
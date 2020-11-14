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
    },

    
    modalBody: {
        height: '100%',
        backgroundColor: 'red' ,
        alignItems: 'center'
    },
    modal: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(26, 33, 38, .8)',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    modalContent: {
        width: '100%',
        height: '80%',
        backgroundColor: '#232B32',
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
    },
    modalScroll: {
        padding: 20
    },
    buttonCloseModal: {
        margin: 20,
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
    modalBorderTitle: {
        borderBottomWidth: 1,
        color: '#1A2126',
        flexDirection: 'row',
    },
    modalIcon: {
        marginRight: 15,
    },
    modalTitle: {
        marginBottom: 20,
        fontSize: 22,
        fontFamily: 'Ubuntu_700Bold',
        color: '#FFF'
    },

    message: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    messageIndex: {
        color: '#24AC6E',
        fontSize: 25,
        fontFamily: 'Ubuntu_700Bold',
        marginRight: 20
    },
    messageText: {
        color: '#FFF',
        fontSize: 15,
        fontFamily: 'Ubuntu_500Medium',
    }
    
});
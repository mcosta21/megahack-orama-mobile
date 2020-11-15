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

     body: {
         backgroundColor: '#232B32',
         flex: 1,
         marginTop: 25,
         borderRadius: 9,
         paddingHorizontal: 20,
     },
     form: {
         marginTop: 20,
         borderTopWidth: 1,
         borderColor: '#1A2126',
         paddingBottom: 20,
     },

     boxText: {
        marginTop: 30,
        paddingBottom: 10,
        marginBottom: 5,
        width: '100%',
        justifyContent: 'flex-start'
    },
    text: {
        fontSize: 18,
        fontFamily: 'Ubuntu_500Medium',
        color: '#24AC6E'
    },

    box: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 10,
    },
    boxValue: {
        width: 150,
        height: 90,
        backgroundColor: '#182024',
        borderRadius: 9,
        borderWidth: 2,
        borderColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxValueText: {
        color: '#FFF',
        fontSize: 15,
        fontFamily: 'Ubuntu_500Medium',
    },
    boxMarginTop: {
        marginTop: 10
    },
    boxValueTitle: {
        fontSize: 28,
        color: '#FFF',
        fontFamily: 'Ubuntu_700Bold'
    },
    boxValueTitleText: {
        marginTop: 8,
        fontSize: 14,
        color: '#24AC6E',
        fontFamily: 'Ubuntu_500Medium',
    },

    summary: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    summaryText: {
        fontSize: 14,
        paddingHorizontal: 20,
        color: '#FFF',
        lineHeight: 20,
        textAlign: 'center',
        fontFamily: 'Ubuntu_500Medium',
        marginVertical: 20,
    },

    textSubmit:{
        color: '#182024',
        fontSize: 22,
        fontFamily: 'Ubuntu_700Bold',
    },
    buttonBackgroundSubmit: {
        marginTop: 20,
        width: '100%',
        height: 60,
        borderRadius: 8,
    },
    buttonSubmit:{
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCancel: {
        width: '100%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 8
    },
    textCancel: {
        color: '#24AC6E',
        fontSize: 17,
        fontFamily: 'Ubuntu_500Medium',
    },

    boxPrivateBool: {
        marginTop: 10,
        flexDirection: 'row',
    },
    buttonPrivateBoolYes: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth: 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#182024',
        height: 60,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    buttonPrivateBoolNo: {
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderRightWidth: 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#182024',
        height: 60,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    textPrivateBool: {
        color: '#FFF',
        fontSize: 17,
        fontFamily: 'Ubuntu_500Medium',
    },
    buttonSelectedPrivateBool: {
        borderRightWidth: 2,
        borderLeftWidth: 2,
        borderColor: '#34F683',
        backgroundColor: '#182024'
    }

});
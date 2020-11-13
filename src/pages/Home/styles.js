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
    welcomeName: {
        marginTop: 20,
        fontSize: 22,
        color: '#FFF',
        fontFamily: 'Ubuntu_700Bold'
    },
    welcomePhrase: {
        marginTop: 15,
        fontSize: 18,
        color: '#34F683',
        fontFamily: 'Ubuntu_700Bold'
    },
    cards: {
        marginTop: 40
    },
    investmentBox: {
        backgroundColor: '#232B32',
        borderRadius: 6,
        marginTop: 30
    },
    investmentTitle: {
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 17,
        color: '#FFF',
        marginTop: 18,
        marginBottom: 15,
        marginLeft: 20
    },
    investmentCard: {
        paddingTop: 15,
        alignItems: 'center'
    },
    investmentCardBorder: {
        width: '90%',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#1A2126',
        paddingBottom: 15,
        flex: 1,
    },
    investmentCardImage: {
        width: 60,
        height: 60,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#34F683',
        justifyContent: 'center',
        alignItems: 'center'
    },
    investmentCardText: {
        color: '#FFF',
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 17
    },
    investmentDescription: {
        color: '#FFF',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,
        marginLeft: 20
    },
    investmentBoxButton: {
        height: 50,
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginVertical: 10
    },
    investmentButton: {
        width: 55,
        height: 50,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 15,
        overflow: 'hidden',
        backgroundColor: '#1A2126'
    }
});
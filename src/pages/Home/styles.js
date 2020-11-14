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

    cards: {
        marginTop: 40
    },


    investmentBox: {
        backgroundColor: '#232B32',
        borderRadius: 6,
        marginVertical: 30
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
        width: '100%',
        height: 55,
        alignItems: 'flex-end',
        justifyContent: 'center',
        margin: 10
    },
    investmentButton: {
        width: 70,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 9,
        backgroundColor: '#1A2126',
        marginLeft: 5
    },
    investmentButtonIcon: {
        marginRight: 5
    },

    rankingBox: {
        marginTop: 10,
        marginBottom: 30,
        borderRadius: 6,
    },
    rankingCard: {
        backgroundColor: '#232B32',
        marginTop: 20,
        width: '100%',
        height: 130,
        borderRadius: 9,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    rankingCardImage: {
        backgroundColor: '#182024',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#24AC6E',
        width: 100,
        height: 100
    },
    rankingCardValues: {
        flex: 1,
        height: '100%',
        paddingTop: 20,
        paddingLeft: 15
    },  
    rankingCardPosition: {
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        color: '#34F683'
    },
    rankingCardTitle: {
        marginTop: 10,
        fontSize: 14,
        fontFamily: 'Ubuntu_700Bold',
        color: '#FFF'
    },
    buttonSeeAll: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 5,
        borderRadius: 8,
        paddingVertical: 8
    },
    buttonSeeAllText: {
        marginRight: 10,
        fontSize: 14,
        color: '#24AC6E',
        fontFamily: 'Ubuntu_400Regular'
    }
});
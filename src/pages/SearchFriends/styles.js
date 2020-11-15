import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({

    container:{
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#182024',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        paddingHorizontal: 24,
        justifyContent: "center",
    },
    content: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 22,
        color: '#FFF',
        fontFamily: 'Ubuntu_700Bold'
    },

    boxSearch:{
        marginVertical: 20,
        flexDirection: 'row',
    },  
    buttonSearch: {
        width: 60,
        height: 60,
        marginLeft: 10,
        backgroundColor: '#232B32',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },

    boxFriend: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    boxFriendContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userImage: {
        width: 80,
        height: 80,
        borderWidth: 2,
        borderRadius: 9,
        borderColor: '#34F683',
    },
    userName: {
        marginLeft: 15,
        color: '#FFF',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 16,

    }

});
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
    }

});
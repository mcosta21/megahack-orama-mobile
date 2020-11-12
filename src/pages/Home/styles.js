import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    div: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 32,
        color: '#004a28',
        fontFamily: 'Ubuntu_700Bold'
    }

});
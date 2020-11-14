import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    post: {
        backgroundColor: '#232B32',
        height: 310,
        borderRadius: 8,
        marginTop: 20,
        width: '100%'
    },
    postImage: {
        backgroundColor: '#C4C4C4',
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    postInfo: {
        flex: 1,
        padding: 15
    },
    postTag: {
        fontSize: 12,
        textTransform: 'uppercase',
        color: '#24AC6E',
        fontFamily: 'Ubuntu_700Bold'
    },
    postTitle: {
        textTransform: 'capitalize',
        marginTop: 10,
        fontSize: 20,
        color: '#FFF',
        fontFamily: 'Ubuntu_700Bold'
    },
    postDescription: {
        height: 25,
        marginTop: 10,
        fontSize: 12,
        color: '#6C7884',
        fontFamily: 'Ubuntu_400Regular'
    },
    postOptionBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },  
    postInfoUser: {
        flexDirection: 'row',
        alignItems: 'center'
    },  
    postImageUser: {
        marginRight: 5,
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#34F683',
        borderRadius: 5,
        marginRight: 10
    },
    postNameUser: {
        color: '#FFF',
        fontFamily: 'Ubuntu_500Medium',
        fontSize: 13
    },
    postOptionBottomButton: {
        backgroundColor: '#34F683',
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },  
    postOptionBottomButtonTitle: {
        color: '#182024',
        fontFamily: 'Ubuntu_500Medium'
    }
});
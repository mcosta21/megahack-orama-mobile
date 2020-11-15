import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    modalBody: {
        height: '100%',
        alignItems: 'center',
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
        padding: 20,
        borderBottomWidth: 1,
        color: '#1A2126',
        flexDirection: 'row',
    },
    modalIcon: {
        marginRight: 15,
    },
    modalTitle: {
        fontSize: 22,
        fontFamily: 'Ubuntu_700Bold',
        color: '#FFF'
    },

});
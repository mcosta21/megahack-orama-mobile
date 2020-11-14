import React from 'react';
import styles from './styles';
import { Text, View, TouchableOpacity, Modal, ScrollView } from 'react-native';

export default function Popup(){
    return (
        <Modal
            animationType="slide"
            visible={modalVisible}
            transparent={true}
            onRequestClose={() => { setModalVisible(false); }}
        >
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                <ScrollView style={styles.modalScroll}>
                    
                    <View style={styles.modalBorderTitle}>
                    <FontAwesome5 style={styles.modalIcon} name="sad-cry" size={24} color="#34F683"/>
                    <Text style={styles.modalTitle}>Desculpe, mas...</Text>
                    </View>  

                    {
                    errorMessages.map((error, index) => {
                        return (
                        <View key={index} style={styles.message}>
                            <Text style={styles.messageIndex}>#{index+1}</Text>
                            <Text style={styles.messageText}>{error.message}</Text>
                        </View>
                        )
                    })
                    }

                </ScrollView>
                <TouchableOpacity
                    style={styles.buttonCloseModal}
                    onPress={() => setModalVisible(false)}
                >
                    <Text style={styles.textCloseModal}>Tudo bem!</Text>
                </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}
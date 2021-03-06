import React from 'react';
import styles from './styles';
import { Text, View, Modal, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Popup({ title, isHappyIcon, children, ...rest }){

    return (
        <Modal
            {...rest}
            style={styles.modalBody}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.modal}>
                <View style={styles.modalContent}>

                    <View style={styles.modalBorderTitle}>
                        <FontAwesome5 style={styles.modalIcon} name={isHappyIcon === true ? "smile-beam" : "sad-cry"} size={24} color="#34F683"/>
                        <Text style={styles.modalTitle}>{title === undefined ? 'Informações': title}</Text>
                    </View>  

                    <ScrollView style={styles.modalScroll}>

                        {
                            children
                        }

                    </ScrollView>
                </View>
            </View>
        </Modal>
    )
}
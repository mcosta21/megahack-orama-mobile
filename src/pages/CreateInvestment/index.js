import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InputText from '../../components/InputText';
import styles from './styles';
import { AntDesign, Entypo  } from '@expo/vector-icons';
import TitleWelcome from '../../components/TitleWelcome';
import api from '../../services/api';
import { LinearGradient } from 'expo-linear-gradient';
import Popup from '../../components/Popup';
import Message from '../../components/Message';

export default function CreateInvestment(){
    const { navigate } = useNavigation();

    const defaultSeries = [
        {"id": 0, "name": "" },
        {"id": -1, "name": ""},
    ];
    const defaultSerie = {"id": 0, "description": '', "duration": 0, "cost": 0, "yield": 0}

    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState();
    const [series, setSeries] = useState(defaultSeries);
    const [serie, setSerie] = useState(defaultSerie);
    const [privateBool, setPrivateBool] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    const [successRequest, setSuccessRequest] = useState(false);
    const [postDescription, setPostDescription] = useState();
    const [postTitle, setPostTitle] = useState();

    useEffect(() => {
        api.get('categories').then(response => {
            const categories = response.data;
            setCategories(categories);
        });
    }, []);

    
    function handleNavigateToHome(){
        navigate('Home');
    }

    function handleClickSelectCategory(id){
        setCategory(id);
        setSerie(defaultSerie);
        api.get(`series/category/${id}`).then(response => {
            const series = response.data;
            setSeries(series);
        });
    }

    function handleSubmit(){
        
        const days = serie.duration*24*60*60*1000;
        const expirationDate = new Date(Date.now() + days);

        const formData = {
            expirationDate,
            privateBool,
            serieId: serie.id
        }

        api.post('investments', formData).then(response => {
            const { status, data} = response;

            switch(status){
                case 201:
                    console.log('201')
                    setSuccessRequest(true);
                    setMessages([{ "message": "Seu investimento foi realizado com sucesso."}])

                    if(privateBool === true) {
                        const postData = {
                            title: postTitle === undefined ? data.serie.title : postTitle,
                            description: postDescription === undefined ? 'Olhe o meu novo investimento!' : postDescription,
                            investmentId: data.id,
                        }
                        api.post('posts', postData).then(response => {
                            console.log(response.status);
                        })
                    }
                    
                break;
                case 203:
                    console.log('203')
                    setSuccessRequest(false);
                    setMessages([data]);
                break;
            }
            setModalVisible(true);
        });
    }

    function handleCancelSubmit() {
        handleNavigateToHome();
        setMessages([]);
        setSerie(defaultSerie);
        setSeries(defaultSeries);
        setCategory();
    }

    function handleClickSuccesRequest(){
        setModalVisible(false);
        handleCancelSubmit();
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign onPress={() => handleNavigateToHome()} name="arrowleft" size={24} color="#FFF"/>
                <Text style={styles.title}>ÓRAMA</Text>
                <AntDesign name="arrowleft" size={24} color="#182024"/>
            </View>

            <SafeAreaView style={styles.content}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    
                    <TitleWelcome title="Investimento" description="Certo, tudo pronto para investir"/>

                    <View style={styles.body}>
                        <TitleWelcome title="Vamos lá"/>
                        <View style={styles.form}>

                            <View style={styles.boxText}>
                                <Text style={styles.text}>Categoria</Text>
                            </View>

                            <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                {
                                    categories.map(itemCategory => {
                                        return (
                                            <View key={itemCategory.id} style={styles.box}>
                                                <TouchableOpacity 
                                                    onPress={() => handleClickSelectCategory(itemCategory.id)}
                                                    style={category === itemCategory.id ? {...styles.boxValue, borderColor: '#34F683'} : styles.boxValue}
                                                >
                                                    <Text style={styles.boxValueText}>{itemCategory.name}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })
                                }
                            </ScrollView>
                            
                            <View style={styles.boxText}>
                                <Text style={styles.text}>Série</Text>
                            </View>
                            <ScrollView 
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                {
                                    series.length === 0 
                                    ? 
                                    defaultSeries.map((itemSerie, index) => {
                                        return (
                                            <View key={index} style={styles.box}>
                                                <TouchableOpacity 
                                                    disabled={true}
                                                    style={styles.boxValue}
                                                >
                                                    <Text style={styles.boxValueText}>{itemSerie.title}</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })
                                    :
                                    series.map((itemSerie, index) => {
                                        return (
                                            <View key={index} style={styles.box}>
                                                <TouchableOpacity 
                                                    disabled={(category === undefined || series === undefined) ? true : false}
                                                    onPress={() => setSerie(itemSerie)}
                                                    style={(serie.id === itemSerie.id && category !== undefined) ? {...styles.boxValue, borderColor: '#34F683'} : styles.boxValue}
                                                >
                                                    <Text style={styles.boxValueTitle}>{itemSerie.cost}</Text>
                                                    <Text style={styles.boxValueTitleText}>{itemSerie.duration !== undefined && itemSerie.duration + ' dias'}</Text>
                                                </TouchableOpacity>
                                                <Text style={{...styles.boxValueText, ...styles.boxMarginTop}}>{itemSerie.title}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </ScrollView>
                                
                            <View style={styles.boxText}>
                                <Text style={styles.text}>Descrição</Text>
                            </View>
                            <InputText 
                                name="description"
                                height={130}
                                disabled={true}
                                isBlack={true}
                                multiline={true}
                                value={serie.description}
                                onChangeText={() => {}}
                            />

                            <View style={styles.boxText}>
                                <Text style={styles.text}>Duração</Text>
                            </View>
                            <InputText 
                                name="duration"
                                disabled={true}
                                isBlack={true}
                                value={serie.duration.toString().concat(' dias')}
                                onChangeText={() => {}}
                            />

                            <View style={styles.boxText}>
                                <Text style={styles.text}>Custo</Text>
                            </View>
                            <InputText 
                                name="cost"
                                disabled={true}
                                isBlack={true}
                                value={serie.cost.toFixed(2).toString()}
                                onChangeText={() => {}}
                            />

                            <View style={styles.boxText}>
                                <Text style={styles.text}>Rendimento</Text>
                            </View>
                            <InputText 
                                name="yield"
                                disabled={true}
                                isBlack={true}
                                value={serie.yield.toFixed(2).toString()}
                                onChangeText={() => {}}
                            />
                            
                            <View style={styles.boxText}>
                                <Text style={styles.text}>Compartilhe com seus amigos</Text>
                            </View>
                            <View style={styles.boxPrivateBool}>
                                <TouchableOpacity
                                    onPress={() => setPrivateBool(true)}
                                    style={privateBool ? {...styles.buttonPrivateBoolYes, ...styles.buttonSelectedPrivateBool} : styles.buttonPrivateBoolYes}
                                >
                                    <Text style={styles.textPrivateBool}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => setPrivateBool(false)}
                                    style={!privateBool ? {...styles.buttonPrivateBoolNo, ...styles.buttonSelectedPrivateBool} : styles.buttonPrivateBoolNo}
                                >
                                    <Text style={styles.textPrivateBool}>Não</Text>
                                </TouchableOpacity>
                            </View>
                            
                            {
                                privateBool === true 
                                &&
                                <>
                                    <View style={styles.boxText}>
                                        <Text style={styles.text}>Título do Post</Text>
                                    </View>
                                    <InputText 
                                        name="postTitle"
                                        isBlack={true}
                                        value={postTitle}
                                        onChangeText={(text) => setPostTitle(text)}
                                    />

                                    <View style={styles.boxText}>
                                        <Text style={styles.text}>Descrição do Post</Text>
                                    </View>
                                    <InputText 
                                        name="postDescription"
                                        height={100}
                                        isBlack={true}
                                        multiline={true}
                                        value={postDescription}
                                        onChangeText={(text) => setPostDescription(text)}
                                    />
                                </>
                            }
                            
                        </View>

                        {
                            serie.id > 0 &&
                            <View style={styles.summary}>
                                <Entypo name="emoji-flirt" size={70} color="#34F683" />
                                <Text style={styles.summaryText}>
                                    Com esse investimento você vai ter um rendimento de {serie.yield.toString().split('.')[0]} reais 
                                    e {serie.yield.toFixed(2).toString().split('.')[1]} centavos
                                    em {serie.duration} dias.
                                </Text>
                            </View>
                        }
                        
                    </View>

                    <LinearGradient
                        colors={['#24AC6E', '#34F683']}
                        start={{ x: 1, y: 1 }}
                        end={{ x: 0, y: 0 }}
                        style={styles.buttonBackgroundSubmit}
                    >
                        <TouchableOpacity
                            onPress={() => handleSubmit()}
                            style={styles.buttonSubmit}
                        >
                            <Text style={styles.textSubmit}>Confirmar</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <TouchableOpacity
                        onPress={handleCancelSubmit}
                        style={styles.buttonCancel}
                    >
                        <Text style={styles.textCancel}>Cancelar</Text>
                    </TouchableOpacity>

                </ScrollView>

                <Popup
                    title={successRequest ? 'Parabéns' : 'Ops, mas...'}
                    isHappyIcon={successRequest ? true : false}
                    visible={modalVisible && messages.length > 0}
                    onRequestClose={() => { setModalVisible(false); }}
                >
                    {
                        messages.map((error, index) => {
                            return (
                            <Message key={index} index={index} message={error.message} />
                            )
                        })
                    }

                    {
                         successRequest === true
                         ?
                         <TouchableOpacity
                             style={styles.buttonCloseModal}
                             onPress={() => handleClickSuccesRequest()}
                         >
                             <Text style={styles.textCloseModal}>Yesss!!!</Text>
                         </TouchableOpacity>
                         :
                         <TouchableOpacity
                             style={styles.buttonCloseModal}
                             onPress={() => setModalVisible(false)}
                         >
                             <Text style={styles.textCloseModal}>Tudo bem!</Text>
                         </TouchableOpacity>
                    }

                    
                </Popup>
                
            </SafeAreaView>
        </View>
    )
}
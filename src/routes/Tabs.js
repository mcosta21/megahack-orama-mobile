import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { Navigator, Screen } = createBottomTabNavigator();

import Loading from '../pages/Loading';
import Home from '../pages/Home';

export default function Tabs() {
    return (
        <LinearGradient
            colors={['#24AC6E', '#34F683']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{flex: 1}}
        >
            <Navigator
                tabBarOptions={{
                    style: {
                        elevation: 0,
                        shadowOpacity: 0,
                        height: 64,
                        backgroundColor: 'transparent',
                        borderTopColor: 'transparent'
                    },
                    tabStyle: {
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },
                    iconStyle: {
                        flex: 0,
                        width: 30,
                        height: 30,
                        color: '#FFF'
                    },
                    showLabel: false,
                    inactiveTintColor: '#FFF',
                    activeTintColor: '#004A28'
                }}
            >
                <Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        tabBarIcon: ({color}) => {
                            return (<AntDesign name="home" size={28} color={color}/>);
                        }
                    }}
                />
                <Screen 
                    name="Loading" 
                    component={Loading}
                    options={{
                        tabBarIcon: ({color}) => {
                            return (<FontAwesome5 name="star" size={24} color={color}/>);
                        }
                    }}
                />
                <Screen 
                    name="Loading3" 
                    component={Loading}
                    options={{
                        tabBarIcon: ({color}) => {
                            return (<MaterialIcons name="attach-money" size={30} color={color}/>);
                        }
                    }}
                />
                <Screen 
                    name="Loading1" 
                    component={Loading}
                    options={{
                        tabBarIcon: ({color}) => {
                            return (<FontAwesome5 name="user" size={23} color={color}/>);
                        }
                    }}
                />
                
            
            </Navigator>
        </LinearGradient>
    );
}
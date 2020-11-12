import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const { Navigator, Screen } = createBottomTabNavigator();

import Loading from '../pages/Loading';
import Home from '../pages/Home';

export default function Tabs() {
    return (
        <LinearGradient
            colors={['#34F683', '#24AC6E']}
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
                        width: 25,
                        height: 25
                    },
                    showLabel: false,
                    inactiveTintColor: 'blue',
                    activeTintColor: 'green'
                }}
            >
                
                <Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        tabBarIcon: () => {
                            return (<AntDesign name="home" size={25}/>);
                        }
                    }}
                />
                <Screen 
                    name="Loading" 
                    component={Loading}
                    options={{
                        tabBarIcon: () => {
                            return (<AntDesign name="home" size={25}/>);
                        }
                    }}
                />
                
            
            </Navigator>
        </LinearGradient>
    );
}
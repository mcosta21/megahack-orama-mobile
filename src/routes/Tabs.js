import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const { Navigator, Screen } = createBottomTabNavigator();

import Loading from '../pages/Loading';
import Home from '../pages/Home';

export default function Tabs() {
    return (
        <Navigator>
            <Screen name="Home" component={Home} />
            <Screen name="Loading" component={Loading}/>
        </Navigator>
    );
}
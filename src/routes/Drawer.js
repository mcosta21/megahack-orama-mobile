import React from 'react';
import { View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
import Login from '../pages/Login';
import Loading from '../pages/Loading';
import Tabs from './Tabs';

const { Navigator, Screen } = createDrawerNavigator();

export default function Drawer() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerComp {...props} />}
    >
      <Screen name="Tabs" component={Tabs} />    
    </Navigator>
  );
}

function CustomDrawerComp(props){
  const {navigation} = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{flexGrow: 2}}>
        <DrawerItem
          label="Teste"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </DrawerContentScrollView>
  );
};
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, } from '@react-navigation/drawer';
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
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={{ marginTop: 20, flexGrow: 2 }}>
        <DrawerItem
          labelStyle={styles.option}
          label="Pesquisar amigos"
          activeBackgroundColor='#182024'
          inactiveBackgroundColor='transparent'
          activeTintColor='#34F683'
          inactiveTintColor='#24AC6E'
          onPress={() => navigation.navigate('SearchFriends')}
        />
        <DrawerItem
          labelStyle={styles.option}
          label="Teste2"
          activeBackgroundColor='#182024'
          inactiveBackgroundColor='transparent'
          activeTintColor='#34F683'
          inactiveTintColor='#24AC6E'
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#232B32'
  },
  option: {
    color: '#24AC6E',
    height: 30,
    fontSize: 16,
    fontFamily: 'Ubuntu_500Medium',
  }
});
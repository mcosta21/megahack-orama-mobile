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
  const {navigation} = props;

  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View style={{ flexGrow: 2 }}>
        <DrawerItem
          style={styles.option}
          label="Teste"
          onPress={() => navigation.navigate('Login')}
        />
        <DrawerItem
          style={styles.option}
          label="Teste2"
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
    color: '#24AC6E'
  }
});
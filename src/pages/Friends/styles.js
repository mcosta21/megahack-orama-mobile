import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#182024',
  },
  image: {
      flex: 1,
      resizeMode: "cover",
      paddingHorizontal: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#FFF',
    fontFamily: 'Ubuntu_700Bold'
  },
  resultContainer:{
    flex: 1,
    backgroundColor: '#182024',
  },

  backgroundImage: {
    marginTop: 20,
    width: '100%',
    height: 60,
    borderRadius: 8,
  }
});
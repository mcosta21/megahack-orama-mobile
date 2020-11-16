import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
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
    flex: 1,
    borderRadius: 8,
  },
  boxFriend: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  boxFriendContent: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  userImage: {
      width: 80,
      height: 80,
      borderWidth: 2,
      borderRadius: 9,
      borderColor: '#34F683',
  },
  userName: {
      marginLeft: 15,
      color: '#FFF',
      fontFamily: 'Ubuntu_500Medium',
      fontSize: 16,

  }
});
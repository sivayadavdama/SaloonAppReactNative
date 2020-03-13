'use strict';
import {StyleSheet, Dimensions, StatusBar, Platform} from 'react-native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  image: {
    width: width,
    height: height,
    // resizeMode: 'contain'
  },
  buttonblueLogin: {
    marginTop: 10,
    width: width * 0.4,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2196f3',
    borderRadius: 10,
    backgroundColor: '#2196f3',
  },
  buttonblueRegister: {
    marginTop: 10,
    width: width * 0.4,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#77859f',
    borderRadius: 10,
  },
  loginfbandgoogle: {
    marginTop: 10,
    width: width * 0.4,
    height: height * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#77859f',
    borderRadius: 10,
  },
  btnlogin: {
    marginTop: 10,
    width: width * 0.8,
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#2196f3',
    borderRadius: 10,
    backgroundColor: '#2196f3',
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
    // backgroundColor: '#2196f3',
    // height: StatusBarManager.HEIGHT,
    //  translucent:true
    // backgroundColor={'transparent'}
  },
  rectangleshape: {
    width: width * 0.9,
    height: height * 0.09,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 10,
  },
});

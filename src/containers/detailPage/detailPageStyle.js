import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  selected: {
    backgroundColor: 'orange',
    color: 'white',
  },
  profileLeft: {
    flexDirection: 'row',
    flex: 1,
  },
  profileRight: {
    flexDirection: 'column',
    flex: 1,
  },
  profileRight_heading: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 16,
  },
  profileRight_sub: {
    fontSize: 14,
    marginLeft: 5,
    color: 'gray',
    fontWeight: '900',
  },
  feeButton: {
    backgroundColor: '#187bfa',
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    width: width * 0.4,
    height: height * 0.09,
    alignItems: 'center',
    borderRadius: 50,
    alignSelf: 'flex-end',
  },
  feeText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  confirmButton: {
    height: height * 0.075,
    backgroundColor: '#187bfa',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton_text: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  navigation_left: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  back_icon: {
    alignSelf: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    margin: 3,
  },
  navigation_right: {
    flex: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
    width: width,
    height: height * 0.06,
    justifyContent: 'flex-end',
  },
  icon: {
    resizeMode: 'contain',
    margin: 3,
    alignSelf: 'center',
    alignItems: 'center',
    width: width * 0.06,
    height: height * 0.06,
  },
});

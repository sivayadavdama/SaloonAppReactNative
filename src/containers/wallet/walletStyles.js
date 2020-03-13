'use strict';
import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    backgroundColor: '#293D48',
    height: height * 0.245,
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
    top: height / 12,
  },
  body: {
    marginTop: height * 0.062,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    color: '#696969',
    fontWeight: '600',
  },
  balCard: {
    width: width * 0.8,
    height: height * 0.15,
    borderRadius: 20,
    borderWidth: 4,
    top: height / 5.9,
    borderColor: '#edf0f5',
    backgroundColor: '#fff',
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
  },
  walletBalFont: {
    fontSize: height / 18,
    color: '#293D48',
    fontWeight: '600',
    marginTop: height * 0.028,
  },
});

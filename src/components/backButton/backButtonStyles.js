import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  view: {
    height: height * 0.04,
    marginLeft: height * 0.02,
    marginTop: height * 0.04,
  },
  touch: {
    position: 'absolute',
    left: 5,
    padding: 5,
    margin: 5,
  },
  img: {
    width: height * 0.04,
    height: height * 0.04,
    margin: 5,
    padding: 5,
  },
});

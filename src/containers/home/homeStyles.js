import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  spacing: {
    marginTop: height * 0.03,
  },
  scrollView: {
    flexGrow: 1,
  },
  heading: {margin: 10},
  heading_text: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  linkText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'right',
    color: '#2196f3',
  },
});

import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  spacing: {
    marginTop: height * 0.03,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginTop: height * 0.07,
    marginLeft: height * 0.04,
  },
  btn_blue_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  btn_blue_text: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
  },
  normal_text: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height / 50,
  },
  fieldView: {
    marginLeft: height * 0.03,
    marginRight: height * 0.03,
    marginTop: height * 0.03,
  },
  fieldText: {
    marginLeft: height * 0.03,
    marginRight: height * 0.03,
  },
});

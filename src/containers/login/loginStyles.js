import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  spacing: {
    marginTop: height * 0.03,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginTop: height * 0.05,
    marginLeft: height * 0.04,
  },
  fieldView: {
    marginLeft: height * 0.03,
    marginRight: height * 0.03,
    marginTop: height * 0.02,
  },
  fieldText: {
    marginLeft: height * 0.01,
    marginRight: height * 0.01,
  },
  section: {
    marginTop: height * 0.01,
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: height * 0.03,
    marginRight: height * 0.03,
  },
  checkbox: {
    borderColor: '#77859f',
    height: 20,
    width: 20,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  btn_text: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
  },
});

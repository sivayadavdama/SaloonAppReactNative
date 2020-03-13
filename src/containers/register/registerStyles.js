import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginTop: Dimensions.get('window').height * 0.05,
    marginLeft: Dimensions.get('window').height * 0.04,
  },
  spacing: {
    marginTop: height * 0.03,
  },
  fieldView: {
    marginLeft: height * 0.03,
    marginRight: height * 0.03,
  },
  fieldText: {
    marginLeft: height * 0.03,
    marginRight: height * 0.03,
  },
  btn_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  btn_text: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
  },
  returnFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: height / 50,
  },
});

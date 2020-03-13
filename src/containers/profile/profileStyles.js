import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  spacing: {
    marginTop: height * 0.03,
  },
  header: {
    backgroundColor: '#293D48',
    height: height * 0.245,
  },
  avatar: {
    width: width * 0.3,
    height: height * 0.15,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: height * 0.16,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: height * 0.16,
  },
  name: {
    fontSize: height * 0.034,
    color: '#696969',
    fontWeight: '600',
  },
  body: {
    marginTop: height * 0.04,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  btn_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  btn_text: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: height * 0.03,
  },
  fieldView: {
    marginLeft: height * 0.03,
    marginRight: height * 0.03,
  },
  fieldText: {
    marginLeft: height * 0.01,
    marginRight: height * 0.01,
  },
});

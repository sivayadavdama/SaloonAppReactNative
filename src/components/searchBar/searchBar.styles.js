import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  searchBar: {
    width: width * 0.9,
    height: height * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#293D48',
    borderRadius: 10,
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 20,
  },
  searchBarIconView: {
    flex: 0.3,
    justifyContent: 'center',
    alignSelf: 'center',
    width: width * 0.03,
    height: height * 0.03,
  },
  searchBarIcon: {
    resizeMode: 'contain',
    margin: 3,
    alignSelf: 'center',
    alignItems: 'center',
    width: width * 0.06,
    height: height * 0.06,
  },
  searchBarInputView: {
    flex: 2,
    justifyContent: 'center',
  },
  searchBarInput: {
    justifyContent: 'center',
    color: '#293D48',
  },
  searchBarInputContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
  },
});

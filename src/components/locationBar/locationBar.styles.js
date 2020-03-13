import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  locationBar: {
    width: width,
    height: height * 0.09,
    borderWidth: 2,
    borderColor: '#293D48',
    flexDirection: 'row',
    backgroundColor: '#293D48',
  },
  locationBarIconViewLeft: {
    flex: 0.3,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  locationBarIconLeft: {
    alignSelf: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width: height * 0.035,
    height: height * 0.035,
  },
  searchBarBody: {
    width: width,
    height: height * 0.12,
    justifyContent: 'center',
  },
  locationBarInputFieldView: {
    flex: 3,
    justifyContent: 'center',
  },
  locationBarText: {
    color: '#FFFFFF',
    justifyContent: 'center',
  },
  locationBarIconViewRight: {
    flex: 0.2,
    justifyContent: 'center',
  },
  locationBarIconRight: {
    alignSelf: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    width: height * 0.02,
    height: height * 0.02,
  },
});

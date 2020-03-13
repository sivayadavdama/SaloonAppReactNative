import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  footer_login: {
    flexDirection: 'row',
    marginTop: height * 0.06,
  },
  footer_icon_view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  footer_icon_btn: {
    width: width * 0.4,
    height: height * 0.06,
  },
  footer_icon_img:{
    width: width * 0.4,
    height: height * 0.06,
  },
});

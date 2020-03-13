import { StyleSheet, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  offerCardLarge: {
    flexDirection: 'row',
    borderRadius: 10,
    margin: 3,
    padding: 3,
    width: height * 0.5,
    height: height * 0.28,
  },
  offerCardlargeContainer: {
    flex: 1,
    backgroundColor: 'green',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 2,
    height: height * 0.28,

  },
  offerCardlargeContainer_categoryText: {
    color: 'white',
    textAlign: 'center',
    margin: 5,
  },
  offerCardlargeContainer_whitelineView: {
    flex: 0.5,
    justifyContent: 'center',
  },
  offerCardlargeContainer_whiteline: {
    height: 2,
    backgroundColor: 'white',
    textAlign: 'center',
  },
  offerCardlargeContainer_whitelineText: {
    textAlign: 'center',
    color: 'white',
  },
  offerCardlargeContainer_packageText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 15,
  },
  offerCardlargeContainer_packagePrice: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 5,
  },
  button_largeView: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  button_large: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: height * 0.15,
    height: height * 0.05,
  },
  button_largeText: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  offerCardlargeContainer_imageView: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
   // elevation: 2,
    height: height * 0.28,
  },
  offerCardlargeContainer_image: {
    flex:1,
    justifyContent: 'center',
    resizeMode: 'contain',
    alignSelf: 'center',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: height * 0.28,
    width: height,

  },
  offerCardMediumContainer: {
    borderColor: 'green',
    margin: 3,
    backgroundColor: 'green',
    borderWidth: 2,
    flexDirection: 'row',
    borderRadius: 10,
    width: height * 0.4,
    height: height * 0.25,
    flex:1
    
  },
  offerCardMediumContainerCard: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: 'green',
    elevation: 2,
    
  },
});

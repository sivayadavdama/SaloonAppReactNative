import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  PermissionsAndroid,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Toast from 'react-native-simple-toast';

import GeneralStatusBarColor from '../components/GeneralStatusBarColor';
import AppStyles from '../styles/mainStyles';
const {height} = Dimensions.get('window');
const imagePath = '../../assets/screen/welcome/';

const welcomeSlides = [
  {
    key: 'k1',
    image: require(imagePath + 'welcome1.png'),
    imageStyle: AppStyles.image,
  },
  {
    key: 'k2',
    image: require(imagePath + 'welcome2.png'),
    imageStyle: AppStyles.image,
  },
  {
    key: 'k3',
    image: require(imagePath + 'welcome3.png'),
    imageStyle: AppStyles.image,
  },
  {
    key: 'k4',
    image: require(imagePath + 'welcome4.png'),
    imageStyle: AppStyles.image,
  },
];

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_Main_App: false,
    };
  }

  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Fix an Appoinment',
          message: 'Fix an Appoinment access to your location ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        Toast.show('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  async componentDidMount() {
    this.requestLocationPermission();
  }

  on_Done_all_slides = () => {
    this.setState({show_Main_App: true});
  };
  on_Skip_slides = () => {
    this.props.navigation.navigate('Login');
    this.setState({show_Main_App: true});
  };
  on_Register = () => {
    this.props.navigation.navigate('Register');
    this.setState({show_Main_App: true});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <GeneralStatusBarColor
          backgroundColor="#187bfa"
          barStyle="light-content"
        />
        <View style={{flex: 1}}>
          <AppIntroSlider
            style={{flex: 1}}
            slides={welcomeSlides}
            dotStyle="#ffffff"
          />
          <View
            style={{
              position: 'absolute',
              bottom: height * 0.01,
              flexDirection: 'row',
            }}>
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <TouchableOpacity
                style={AppStyles.buttonblueLogin}
                onPress={this.on_Skip_slides}>
                <Text
                  style={{fontWeight: 'bold', color: '#FFFFFF', fontSize: 20}}>
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <TouchableOpacity
                style={AppStyles.buttonblueRegister}
                onPress={this.on_Register}>
                <Text
                  style={{fontWeight: 'bold', color: '#77859f', fontSize: 18}}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              position: 'absolute',
              top: height * 0.06,
              left: height * 0.5,
            }}>
            <TouchableOpacity onPress={this.on_Skip_slides}>
              <Text
                style={{
                  alignSelf: 'flex-end',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                }}>
                SKIP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

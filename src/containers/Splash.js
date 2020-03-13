import React from 'react';
import {View, Image, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');
import GeneralStatusBarColor from '../components/GeneralStatusBarColor';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('SplashScreen');
    }, 3000);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <GeneralStatusBarColor
          backgroundColor="#187bfa"
          barStyle="light-content"
        />
        <View style={{flex: 1, backgroundColor: '#187bfa'}}>
          <Image
            style={{
              flex: 1,
              alignSelf: 'center',
              width: height * 0.4,
              height: height * 0.4,
            }}
            source={require('../../assets/icons/logo.png')}
            resizeMode="contain"
          />
        </View>
      </View>
    );
  }
}

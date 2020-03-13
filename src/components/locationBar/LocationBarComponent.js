import React from 'react';
import {Text, View, Image, AsyncStorage, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoder';
import Toast from 'react-native-simple-toast';

import locationStyle from './locationBar.styles';

export default class LocationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLongitude: '',
      currentLatitude: '',
      address: 'Searching for location...',
    };
  }

  componentDidMount() {
    this.getAddress();
  }

  async getAddress() {
    const address = await AsyncStorage.getItem('address');
    if (address) {
      this.setState({address: address});
    } else {
      Platform.OS === 'ios' ? this.callLocation() : this.callLocation();
    }
  }

  callLocation() {
    Geolocation.getCurrentPosition(
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        const currentLatitude = JSON.stringify(position.coords.latitude);
        this.setState({currentLongitude: currentLongitude});
        this.setState({currentLatitude: currentLatitude});
      },
      error => Toast.show(error.message),
      {
        enableHighAccuracy: true,
      },
    );
    this.watchID = Geolocation.watchPosition(position => {
      const currentLongitude = JSON.stringify(position.coords.longitude);
      const currentLatitude = JSON.stringify(position.coords.latitude);
      this.setState({currentLongitude: currentLongitude});
      this.setState({currentLatitude: currentLatitude});
      var pos = {
        lat: parseFloat(currentLatitude),
        lng: parseFloat(currentLongitude),
      };

      Geocoder.geocodePosition(pos)
        .then(res => {
          this.setState({address: res[0].formattedAddress});
          AsyncStorage.setItem('address', res[0].formattedAddress);
        })
        .catch(error => this.setState({address: error}));
    });
  }

  componentWillUnmount = () => {
    Geolocation.clearWatch(this.watchID);
  };

  render() {
    return (
      <View style={locationStyle.locationBar}>
        <View style={locationStyle.locationBarIconViewLeft}>
          <Image
            style={locationStyle.locationBarIconLeft}
            source={require('../../../assets/icons/define/location.png')}
          />
        </View>
        <View style={locationStyle.locationBarInputFieldView}>
          <Text style={locationStyle.locationBarText} numberOfLines={1}>
            {this.state.address}
          </Text>
        </View>
        <View style={locationStyle.locationBarIconViewRight}>
          <Image
            style={locationStyle.locationBarIconRight}
            source={require('../../../assets/icons/navigation/down_arrow.png')}
          />
        </View>
      </View>
    );
  }
}

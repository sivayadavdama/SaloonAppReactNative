import React from 'react';
import GeneralStatusBarColor from '../components/GeneralStatusBarColor';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const {height} = Dimensions.get('window');

export default class BookingSuccess extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  bookingSucessDone = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <GeneralStatusBarColor
          backgroundColor="#293D48"
          barStyle="light-content"
        />
        <View style={styles.container}>
          <Image
            style={{
              height: height * 0.25,
              width: height * 0.25,
            }}
            source={require('../../assets/icons/define/thumbsup.png')}
          />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              margin: 5,
              padding: 5,
              textAlign: 'center',
            }}>
            Appointment Booked Successfully
          </Text>
          <Text
            style={{
              fontSize: 14,
              margin: 5,
              padding: 5,
              textAlign: 'center',
              fontWeight: '900',
            }}>
            Your appointment is Confirmed with prime benefits
          </Text>

          <TouchableOpacity
            onPress={this.bookingSucessDone}
            style={{
              position: 'absolute',
              bottom: 0,
              flex: 1,
              backgroundColor: 'red',
              width: '100%',
            }}>
            <View
              style={{
                height: Dimensions.get('window').height * 0.075,
                backgroundColor: '#187bfa',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 16,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Done
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});

import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import styles from './socialLoginComponentStyle';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checked: false,
    };
  }
  render() {
    return (
      <View style={styles.footer_login}>
        <View style={styles.footer_icon_view}>
          <TouchableOpacity style={styles.footer_icon_btn}>
            <Image
              style={styles.footer_icon_img}
              source={require('../../../assets/icons/social/facebook.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.footer_icon_view}>
          <TouchableOpacity style={styles.footer_icon_btn}>
            <Image
              style={styles.footer_icon_img}
              source={require('../../../assets/icons/social/google.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

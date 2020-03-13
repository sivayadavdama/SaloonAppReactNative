import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';

import styles from './backButtonStyles';

export default class BackButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.view}>
        <TouchableOpacity onPress={this.props.onPress} style={styles.touch}>
          <Image
            style={styles.img}
            source={require('./leftarrow.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Toast from 'react-native-simple-toast';
import {OutlinedTextField} from 'react-native-material-textfield';

import AppStyles from '../../styles/mainStyles';
import styles from './forgotPasswordStyles';
import BackButton from '../../components/backButton';
const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checked: false,
    };
  }
  on_forgotPassword = () => {
    if (!this.state.email) {
      Toast.show('Enter valid email');
      return false;
    } else {
      if (reg.test(this.state.email) === true) {
        Toast.show('Please check your mail');
      } else {
        Toast.show('Invalid email');
        return false;
      }
    }
  };

  on_login = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.spacing}>
        <BackButton onPress={() => this.props.navigation.goBack()} />
        <Text style={styles.header}>Forgot password?</Text>
        <View style={styles.fieldView}>
          <OutlinedTextField
            containerStyle={styles.fieldText}
            label="Email"
            formatText={this.formatText}
            onSubmitEditing={this.onSubmit}
            ref={this.fieldRef}
            returnKeyType="next"
            onChangeText={email => this.setState({email})}
            value={this.state.email}
            numberOfLines={1}
          />
        </View>
        {/* button click */}
        <View style={styles.btn_blue_view}>
          <TouchableOpacity
            style={AppStyles.btnlogin}
            onPress={this.on_forgotPassword}>
            <Text style={styles.btn_blue_text}>Reset Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.normal_text}>
          <Text>Already Signed Up?</Text>
          <TouchableOpacity onPress={this.on_login}>
            <Text> Log in !</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

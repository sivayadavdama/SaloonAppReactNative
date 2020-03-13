import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield';
import Toast from 'react-native-simple-toast';
import {CheckBox} from 'native-base';

import AppStyles from '../../styles/mainStyles';
import SocialLogin from '../../components/socialLogin';
import BackButton from '../../components/backButton';
import styles from './loginStyles';
const {height, width} = Dimensions.get('window');
const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checked: false,
    };
  }

  on_login = () => {
    if (!this.state.email && !this.state.password) {
      Toast.show('Enter  email and password');
      return false;
    }
    if (!this.state.email) {
      Toast.show('Enter valid email');
      return false;
    }
    if (!this.state.password) {
      Toast.show('Enter valid password');
      return false;
    } else {
      if (email_regex.test(this.state.email) === true) {
        this.props.navigation.navigate('Home');
      } else {
        Toast.show('Enter valid email');
      }
      return false;
    }
  };

  on_forgotPassword = () => {


   


    this.props.navigation.navigate('ForgotPassword');
  };

  on_register = () => {
    this.props.navigation.navigate('Register');
  };

  render() {
    return (
      <View style={styles.spacing}>
        <ScrollView>
          <BackButton onPress={() => this.props.navigation.goBack()} />
          <Text style={styles.headerText}>Welcome Login</Text>
          <View style={styles.spacing}>
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
            <View style={styles.fieldView}>
              <OutlinedTextField
                containerStyle={styles.fieldText}
                label="Password"
                secureTextEntry={true}
                autoCorrect={false}
                formatText={this.formatText}
                onSubmitEditing={this.onSubmit}
                ref={this.fieldRef}
                onChangeText={password => this.setState({password})}
                value={this.state.password}
                numberOfLines={1}
              />
            </View>
          </View>
          <View style={styles.section}>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <CheckBox
                style={styles.checkbox}
                color="#77859f"
                iconType="material"
                checkedIcon="clear"
                uncheckedIcon="add"
                checkedColor="red"
                checked={this.state.checked}
              />
              <Text style={{marginLeft: height * 0.03}}>Remember me</Text>
            </View>

            <View>
              <TouchableOpacity onPress={this.on_forgotPassword}>
                <Text style={{flex: 1, alignSelf: 'flex-end'}}>
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.btn_view}>
            <TouchableOpacity
              style={AppStyles.btnlogin}
              onPress={this.on_login}>
              <Text style={styles.btn_text}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.section}>
            <Text>{"Don't have an account? "}</Text>
            <TouchableOpacity onPress={this.on_register}>
              <Text style={{fontWeight: 'bold'}}>{'Sign up'}</Text>
            </TouchableOpacity>
          </View>

          <SocialLogin />
        </ScrollView>
      </View>
    );
  }
}

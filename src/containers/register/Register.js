import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Toast from 'react-native-simple-toast';
import {OutlinedTextField} from 'react-native-material-textfield';
import {Form} from 'native-base';

import BackButton from '../../components/backButton';
import AppStyles from '../../styles/mainStyles';
import styles from './registerStyles';
import SocialLogin from '../../components/socialLogin';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checked: false,
    };
  }
  on_signup = () => {
    if (!this.state.email && !this.state.password && !this.state.name) {
      Toast.show('Please complete the form');
      return false;
    }
    if (!this.state.email) {
      Toast.show('Enter valid email');
      return false;
    }
    if (!this.state.password) {
      Toast.show('Enter valid password');
      return false;
    }
    if (!this.state.name) {
      Toast.show('Enter username');
      return false;
    } else {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.email) === true) {
        Toast.show('Account created successfully');
        this.props.navigation.navigate('Home');
      }
      Toast.show('Invalid email');
    }
  };
  on_login = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <View style={styles.spacing}>
        <BackButton onPress={() => this.props.navigation.goBack()} />
        <Text style={styles.header}>Create an account</Text>
        <Form>
          <View style={styles.spacing}>
            <View style={styles.fieldView}>
              <OutlinedTextField
                containerStyle={styles.fieldText}
                label="Name"
                formatText={this.formatText}
                onSubmitEditing={this.onSubmit}
                ref={this.fieldRef}
                returnKeyType="next"
                onChangeText={name => this.setState({name})}
                value={this.state.name}
                numberOfLines={1}
              />
            </View>
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
          <View style={styles.btn_container}>
            <TouchableOpacity
              style={AppStyles.btnlogin}
              onPress={this.on_signup}>
              <Text style={styles.btn_text}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </Form>

        <View style={styles.returnFooter}>
          <Text>Already Signed Up?</Text>
          <TouchableOpacity onPress={this.on_login}>
            <Text> Log in !</Text>
          </TouchableOpacity>
        </View>

        <SocialLogin />
      </View>
    );
  }
}

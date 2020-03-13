import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {OutlinedTextField} from 'react-native-material-textfield';
import {ScrollView} from 'react-native-gesture-handler';

import AppStyles from '../../styles/mainStyles';
import styles from './profileStyles';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Developer',
      email: 'dev@muscatftech.com',
      password: '123123123',
      address1: 'Development Dept',
      address2: 'Muscat',
      pin: '123456',
      phone: '+96899999999',
      buttonName: 'Edit',
      is_disabled: true,
    };
  }

  on_edit = () => {
    this.state.buttonName === 'Edit'
      ? this.setState({buttonName: 'Update', is_disabled: false})
      : this.setState({buttonName: 'Edit', is_disabled: true});
  };

  render() {
    return (
      <View style={styles.spacing}>
        <View style={styles.header} />
        <Image
          style={styles.avatar}
          source={require('../../../assets/icons/avatar/profilepic.png')}
        />
        <ScrollView style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>{this.state.email}</Text>
          </View>
          {/* Fields */}
          <View style={styles.fieldView}>
            <OutlinedTextField
              containerStyle={styles.fieldText}
              label="Name"
              formatText={this.formatText}
              onSubmitEditing={this.onSubmit}
              ref={this.fieldRef}
              returnKeyType="next"
              onChangeText={() => this.setState({name: this})}
              value={this.state.name}
              numberOfLines={1}
              disabled={this.state.is_disabled}
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
              onChangeText={password => this.setState({password: this})}
              value={this.state.password}
              numberOfLines={1}
              disabled={this.state.is_disabled}
            />
          </View>

          <View style={styles.fieldView}>
            <OutlinedTextField
              containerStyle={styles.fieldText}
              label="Address1"
              formatText={this.formatText}
              onSubmitEditing={this.onSubmit}
              ref={this.fieldRef}
              onChangeText={() => this.setState({address1: this})}
              value={this.state.address1}
              numberOfLines={1}
              disabled={this.state.is_disabled}
            />
          </View>

          <View style={styles.fieldView}>
            <OutlinedTextField
              containerStyle={styles.fieldText}
              label="Address2"
              formatText={this.formatText}
              onSubmitEditing={this.onSubmit}
              ref={this.fieldRef}
              onChangeText={() => this.setState({address2: this})}
              value={this.state.address2}
              numberOfLines={1}
              disabled={this.state.is_disabled}
            />
          </View>

          <View style={styles.fieldView}>
            <OutlinedTextField
              containerStyle={styles.fieldText}
              label="Pin"
              formatText={this.formatText}
              onSubmitEditing={this.onSubmit}
              ref={this.fieldRef}
              onChangeText={() => this.setState({pin: this})}
              value={this.state.pin}
              numberOfLines={1}
              disabled={this.state.is_disabled}
            />
          </View>

          <View style={styles.fieldView}>
            <OutlinedTextField
              containerStyle={styles.fieldText}
              label="Phone"
              formatText={this.formatText}
              onSubmitEditing={this.onSubmit}
              ref={this.fieldRef}
              onChangeText={() => this.setState({phone: this})}
              value={this.state.phone}
              numberOfLines={1}
              disabled={this.state.is_disabled}
            />
          </View>

          <View style={styles.btn_container}>
            <TouchableOpacity
              style={AppStyles.btnlogin}
              onPress={() => this.on_edit()}>
              <Text style={styles.btn_text}>{this.state.buttonName}</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

import React from 'react';
import {View, Image} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

import styles from './searchBar.styles';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  searchFilterFunction = text => {
    // this.setState({searchText: text});
    // const newData = this.props.data.filter(item => {
    //   return item.key.toLowerCase().search(text.toLowerCase()) !== -1;
    // });
    // console.log(newData);
  };

  render() {
    return (
      <View style={styles.searchBarBody}>
        <View style={styles.searchBar}>
          <View style={styles.searchBarIconView}>
            <Image
              style={styles.searchBarIcon}
              source={require('../../../assets/icons/navigation/searchicon.png')}
            />
          </View>
          <View style={styles.searchBarInputView}>
            <TextInput
              style={styles.searchBarInput}
              placeholder="Search here for the services"
              inputStyle={{backgroundColor: 'white'}}
              containerStyle={styles.searchBarInputContainer}
              placeholderTextColor={'#000000'}
              value={this.state.searchtext}
              barTintColor="#000000"
              onChangeText={searchText => this.searchFilterFunction(searchText)}
            />
          </View>
        </View>
        {/* Display results */}
        <View>{/* code to display result here */}</View>
      </View>
    );
  }
}

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
const {height, width} = Dimensions.get('window');
import LocationBar from '../../components/locationBar';
import SearchBar from '../../components/searchBar';
const imagePath = '../../../assets/public/advocate/';

const userListdata = [
  {
    name: 'Abd al-Uzza',
    designation: 'Personal Injury Specialty',
    expertise: ' 12 Years',
    company: 'Great Advocate',
    price: '$ 21.00',
    image: require(imagePath + '/personal_injury_advocate.jpeg'),
  },
  {
    name: 'Abdus Salam',
    designation: 'Estate Planning Specialty',
    expertise: '8 Years',
    company: 'Nice Advocate',
    price: '$ 47.00',
    image: require(imagePath + '/estate_planning_advocate.jpeg'),
  },
  {
    name: 'Abdel Nour',
    designation: 'Bankruptcy Specialty',
    expertise: '10 Years',
    company: 'Great Advocate',
    price: '$ 75.00',
    image: require(imagePath + '/bankruptcy_advocate.jpeg'),
  },
  {
    name: 'Abd Rabbo',
    designation: 'Intellectual Property Specialty',
    expertise: '5 Years',
    company: 'Nice Advocate',
    price: '$ 25.00',
    image: require(imagePath + '/intellectual_property_advocate.jpeg'),
  },
  {
    name: 'Shabana Manaf',
    designation: 'Employment Specialty',
    expertise: '14 Years',
    company: 'Talent Advocate',
    price: '$ 34.00',
    image: require(imagePath + '/employment_advocate.jpeg'),
  },
  {
    name: 'Houda Nour',
    designation: 'Corporate Specialty',
    expertise: '28 Years',
    company: 'New Advocate',
    price: '$ 39.00',
    image: require(imagePath + '/corporate_advocate.jpeg'),
  },
];

const styles = StyleSheet.create({
  location: {
    width: width,
    height: height * 0.09,
    borderWidth: 2,
    borderColor: '#293D48',
    flexDirection: 'row',
    backgroundColor: '#293D48',
  },
  filterButton: {
    flex: 0.5,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000000',
    borderRadius: 5,
    flexDirection: 'row',
    width: width,
    height: height * 0.06,
    justifyContent: 'space-between',
  },
});

export default class DoctoresList extends React.Component {
  constructor() {
    super();
    this.state = {
      datalist: userListdata,
    };
  }

  getListViewItem = item => {
    this.props.navigation.navigate('DetailPage');
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <GeneralStatusBarColor
          backgroundColor="#293D48"
          barStyle="light-content"
        />

        <View style={{flex: 1}}>
          <LocationBar />
          <SearchBar />

          <View style={{margin: 10, flex: 1}}>
            <FlatList
              data={this.state.datalist}
              keyExtractor={(item, index) => `${index}`}
              extraData={this.state}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={this.getListViewItem.bind(this, item)}>
                  <View
                    style={{
                      elevation: 2,
                      flexDirection: 'row',
                      borderRadius: 10,
                      margin: 5,
                      height: height * 0.26,
                    }}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                      <Image
                        style={{
                          resizeMode: 'contain',
                          alignContent: 'center',
                          alignItems: 'center',
                          // height: height * 0.22,
                          // width: height * 0.22,
                          maxHeight: height * 0.22,
                          maxWidth: width * 0.38,
                          marginLeft: width * 0.04,
                        }}
                        source={item.image}
                      />
                    </View>
                    <View
                      style={{
                        justifyContent: 'flex-end',
                        flex: 1,
                        width: height * 0.9,
                        marginBottom: 10,
                      }}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        {item.name}
                      </Text>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>
                        {item.designation}
                      </Text>
                      <Text style={{fontWeight: '400'}}>
                        Experience: {item.expertise}
                      </Text>
                      <View style={{flexDirection: 'row', width: height * 0.2}}>
                        <Text>Rating : 4.2 </Text>
                      </View>
                      <View>
                        <Text>1.3Km to location</Text>
                      </View>
                      <Text style={{fontWeight: '400'}}>{item.company}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

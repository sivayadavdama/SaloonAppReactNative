import React from 'react';
import {
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
const imagePath = '../../../assets/icons/avatar/advocate_near_you.png';

const userListdata = [
  {
    key: 'Personal Injury Advocate',
    image: require(imagePath),
  },
  {
    key: 'Estate Planning Advocate',
    image: require(imagePath),
  },
  {
    key: 'Bankruptcy Advocate',
    image: require(imagePath),
  },
  {
    key: 'Intellectual Property Advocate',
    image: require(imagePath),
  },
  {
    key: 'Employment Advocate',
    image: require(imagePath),
  },
  {
    key: 'Corporate Advocate',
    image: require(imagePath),
  },
  {
    key: 'Immigration Advocate',
    image: require(imagePath),
  },
  {
    key: 'Criminal Advocate',
    image: require(imagePath),
  },
  
];

export default class DoctorServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist: userListdata,
    };
  }

  getListViewItem = item => {
    this.props.navigation.navigate('DoctoresList');
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

          <View style={{margin: 10}}>
            <Text style={{fontWeight: 'bold', fontSize: 16}}>
              {'Special Offers Near you'}
            </Text>
          </View>

          <View style={{flex: 1}}>
            <FlatList
              data={this.state.datalist}
              keyExtractor={(item, index) => `${index}`}
              extraData={this.state}
              renderItem={({item}) => (
                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={this.getListViewItem.bind(this, item)}>
                    <View
                      style={{
                        elevation: 1,
                        flexDirection: 'row',
                        borderRadius: 10,
                        margin: 3,
                        padding: 3,
                        width: height * 0.3,
                        height: height * 0.13,
                      }}>
                      <View
                        style={{
                          flex: 1,
                          borderTopLeftRadius: 10,
                          borderBottomLeftRadius: 10,
                          justifyContent: 'center',
                        }}>
                        <Image
                          style={{
                            justifyContent: 'center',
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            width: height * 0.09,
                            height: height * 0.09,
                          }}
                          source={item.image}
                        />
                      </View>
                      <View
                        style={{
                          flex: 1,
                          borderTopRightRadius: 10,
                          borderBottomRightRadius: 10,
                          justifyContent: 'center',
                        }}>
                        <Text style={{alignItems: 'center'}}>{item.key}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          {/* </ScrollView> */}
        </View>
      </View>
    );
  }
}

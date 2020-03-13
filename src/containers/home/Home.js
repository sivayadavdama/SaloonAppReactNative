import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import SearchBar from '../../components/searchBar';
import LocationBar from '../../components/locationBar';
import styles from './homeStyles';
const imageFilePath = '../../../assets/icons/avatar/';

import {
  OfferCardLarge,
  MiniCard,
  OfferCardMedium,
} from '../../components/cards';

const shopIconList = [
  {
    price: '45',
    image: require(imageFilePath + 'advocateShop.png'),
  },
  {
    price: '25',
    image: require(imageFilePath + 'advocateShop.png'),
  },
];

const staffProfiles = [
  {
    name: 'Abd al-Uzza',
    key2: '+91 8919148618',
    key3: 'Hyderabad',
    image: require(imageFilePath + 'advocate.png'),
  },
  {
    name: 'Abdel Nour',
    key2: '+91 9000239545',
    key3: 'Kukatpalli',
    image: require(imageFilePath + 'advocate.png'),
  },
  {
    name: 'Shabana ',
    key2: '+91 9966156781',
    key3: 'LBnagar',
    image: require(imageFilePath + 'advocate.png'),
  },
  {
    name: 'Houda Nour',
    key2: '+91 9912172148',
    key3: 'Sr nagar',
    image: require(imageFilePath + 'advocate.png'),
  },
  {
    name: 'Abdus Salam',
    key2: '+91 9653457811',
    key3: 'Miyapur',
    image: require(imageFilePath + 'advocate.png'),
  },
  {
    name: 'Abd Rabbo',
    key2: '+91 7382725247',
    key3: 'Kavali',
    image: require(imageFilePath + 'advocate.png'),
  },
  {
    name: 'Houda Nour',
    key2: '+91 8500563862',
    key3: 'Chennai',
    image: require(imageFilePath + 'advocate.png'),
  },
];
const userListdatatwo = [
  {
    name: 'Jaya Lakshmi',
    key2: '+91 8919148618',
    key3: 'Hyderabad',
    image: require(imageFilePath + 'advocateShopImage.jpeg'),
  },
  {
    name: 'Krishna Varma',
    key2: '+91 9000239545',
    key3: 'Kukatpalli',
    image: require(imageFilePath + 'advocateShopImage.jpeg'),
  },
  {
    name: 'Shabana',
    key2: '+91 9966156781',
    key3: 'LBnagar',
    image: require(imageFilePath + 'advocateShopImage.jpeg'),
  },
  {
    name: 'Kishore',
    key2: '+91 9912172148',
    key3: 'Sr nagar',
    image: require(imageFilePath + 'advocateShopImage.jpeg'),
  },
  {
    name: 'Rohith',
    key2: '+91 9653457811',
    key3: 'Miyapur',
    image: require(imageFilePath + 'advocateShopImage.jpeg'),
  },
  {
    name: 'Siva',
    key2: '+91 7382725247',
    key3: 'Kavali',
    image: require(imageFilePath + 'advocateShopImage.jpeg'),
  },
  {
    name: 'Stella',
    key2: '+91 8500563862',
    key3: 'Chennai',
    image: require(imageFilePath + 'advocateShopImage.jpeg'),
  },
];

const userListdatathree = [
  {
    name: 'Abd al-Uzza',
    image: require(imageFilePath + 'advocateshop.jpeg'),
  },
  {
    name: 'Abdel Nour',
    image: require(imageFilePath + 'advocateshop.jpeg'),
  },
  {
    name: 'Ashok',
    key2: '+91 9966156781',
    key3: 'LBnagar',
    image: require(imageFilePath + 'advocateshop.jpeg'),
  },
  {
    name: 'Houda Nour',
    image: require(imageFilePath + 'advocateshop.jpeg'),
  },
  {
    name: 'Abdus Salam',
    image: require(imageFilePath + 'advocateshop.jpeg'),
  },
  {
    name: 'Abd Rabbo',
    image: require(imageFilePath + 'advocateshop.jpeg'),
  },
  {
    name: 'Stella',
    image: require(imageFilePath + 'advocateshop.jpeg'),
  },
];

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
      shopIconList: shopIconList,
      staffProfiles: staffProfiles,
      datalisttwo: userListdatatwo,
      datalistthree: userListdatathree,
      searchtext: '',
    };
  }

  getListViewItem = () => {
    this.props.navigation.navigate('ProviderServices');
  };

  searchFilterFunction = text => {
    this.setState({searchtext: text});
    // this.setState({dataList: searchResult});
  };

  render() {
    return (
      <View style={styles.spacing}>
        {/* Header */}
        <LocationBar />
        <SearchBar data={this.state.staffProfiles} />
        {/* Header ends here */}
        {/* Body starts here */}
        <ScrollView contentContainerStyle={styles.scrollView}>
          {/* Section 1 */}
          <View style={styles.heading}>
            <Text style={styles.heading_text}>{'Special Offers Near you'}</Text>
          </View>
          <OfferCardLarge
            data={this.state.shopIconList}
            categoryText="Styling At Home"
            categoryFor="For Womens"
            onPress={this.getListViewItem}
          />
          {/* Section 2 */}
          <View style={styles.heading}>
            <Text style={styles.heading_text}>
              {'What are you looking for ?'}
            </Text>
          </View>
          <MiniCard
            data={this.state.staffProfiles}
            onPress={this.getListViewItem}
          />
          <View style={styles.heading}>
            <Text style={styles.linkText}>{'View All'}</Text>
          </View>
          {/* Section 3 */}
          <View>
            <OfferCardMedium
              onPress={this.getListViewItem}
              data={this.state.datalisttwo}
            />
            <View style={styles.heading}>
              <Text style={styles.linkText}>{'View All Offers'}</Text>
            </View>
          </View>
          {/* Section 4 */}
          <View style={styles.heading}>
            <Text style={styles.heading_text}>
              {'Find Barbers in Top saloons'}
            </Text>
          </View>
          <MiniCard
            data={this.state.datalistthree}
            onPress={this.getListViewItem}
          />
          <View style={styles.heading}>
            <Text style={styles.linkText}>{'View All Hospitals'}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';

const imageFilePath = '../../../assets/icons/avatar/';
const notificationListdata = [
  {
    offer_category: 'Todays Offer',
    offer_subCategory: 'Deals are aviable to you ',
    image: require(imageFilePath + '/advocate_near_you.png'),
    date: '02/12/2019',
    time: '12:05 PM',
  },
  {
    offer_category: 'Monday Offer',
    offer_subCategory: '10% offers for you for the checkup of full Documents',
    image: require(imageFilePath + '/advocate_near_you.png'),
    date: '02/01/2020',
    time: '06:05 PM',
  },
  {
    offer_category: 'Special Offers In Advocate',
    offer_subCategory: '10% to 20% offer on all Advocate',
    image: require(imageFilePath + '/advocate_near_you.png'),
    date: '22/01/2020',
    time: '10:00 AM',
  },
  {
    offer_category: 'Near By Deals',
    offer_subCategory: 'Full Documents Check Up For Rs 899 ',
    image: require(imageFilePath + '/advocate_near_you.png'),
    date: '02/02/2020',
    time: '4:00 PM',
  },
];

export default class Notification extends React.Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
      notificationdatalist: notificationListdata,
    };
  }
  getListViewItem = item => {};
  render() {
    return (
      <View style={{flex: 1}}>
        <GeneralStatusBarColor
          backgroundColor="#293D48"
          barStyle="light-content"
        />
        <View style={{flex: 1}}>
          <View
            style={{
              width: '100%',
              backgroundColor: '#293D48',
              height: Dimensions.get('window').height * 0.07,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
                textAlign: 'center',
                alignSelf: 'center',
              }}>
              Notification
            </Text>
          </View>

          <View style={{margin: 2}}>
            <FlatList
              data={this.state.notificationdatalist}
              keyExtractor={(item, index) => `${index}`}
              extraData={this.state}
              horizontal={false}
              renderItem={({item}) => (
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: 'lightgray',
                    elevation: 2,
                    margin: 5,
                    padding: 5,
                    flex: 1,
                    width: '100%',
                    height: Dimensions.get('window').height * 0.12,
                  }}>
                  <View style={{justifyContent: 'center'}}>
                    <Image
                      style={{
                        width: Dimensions.get('window').height * 0.07,
                        height: Dimensions.get('window').height * 0.07,
                        margin: 5,
                        padding: 5,
                      }}
                      source={item.image}
                      resizeMode="contain"
                    />
                  </View>
                  <View
                    style={{
                      padding: 5,
                      margin: 5,
                      width: '100%',
                      flex: 2,
                      justifyContent: 'center',
                    }}>
                    <View>
                      <Text
                        style={{fontWeight: 'bold', fontSize: 16}}
                        numberOfLines={1}>
                        {item.offer_category}
                      </Text>
                      <Text numberOfLines={2}>{item.offer_subCategory}</Text>
                    </View>
                  </View>

                  <View
                    style={{
                      padding: 5,
                      width: '100%',
                      flex: 1,
                      justifyContent: 'center',
                    }}>
                    <Text numberOfLines={1} style={{textAlign: 'right'}}>
                      {item.date}
                    </Text>
                    <Text numberOfLines={1} style={{textAlign: 'right'}}>
                      {item.time}
                    </Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  gauge: {
    position: 'absolute',
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});

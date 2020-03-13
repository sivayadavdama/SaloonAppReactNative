import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import GeneralStatusBarColor from '../../components/GeneralStatusBarColor';
import CalendarStrip from 'react-native-calendar-strip';

const {height} = Dimensions.get('window');
import LocationBar from '../../components/locationBar';
import SearchBar from '../../components/searchBar';
import styles from './detailPageStyle';
const imagePath = '../../../assets/';

const userListdata = [
  {timeSlot: '10:30 am'},
  {timeSlot: '12:00 pm'},
  {timeSlot: '1:20 pm'},
  {timeSlot: '2:45 pm'},
  {timeSlot: '3:15 pm'},
  {timeSlot: '5:10 pm'},
  {timeSlot: '7:00 pm'},
];

export default class DoctoresDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      datalist: userListdata,
      indexChecked: '0',
    };
  }

  bookingSucess = () => {
    this.props.navigation.navigate('BookingSuccess');
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

          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View>
              <View style={styles.profileLeft}>
                <Image
                  source={require('../../../assets/public/advocate/criminal_advocater_profile_pic.jpeg')}
                  resizeMode="contain"
                  style={{ width: height * 0.5,
                           height: height * 0.28,
                           flex:1,
                           justifyContent:'center',
                    }}
                />

                <View style={styles.profileRight}>
                  <View style={styles.feeButton}>
                    <Text style={{color: 'white'}}>Consultation Fee </Text>
                    <Text style={styles.feeText}>$45</Text>
                  </View>
                  <Text style={styles.profileRight_heading}>Ram Jethmalani Fees</Text>
                  <Text style={styles.profileRight_sub}>Criminal Advocate Specialty</Text>
                  <Text style={styles.profileRight_sub}>
                    Rating 4.2 | 1.3 km to location
                  </Text>
                  <Text style={styles.profileRight_sub}>Great Advocate</Text>
                </View>
              </View>
            </View>

            <View>
              <CalendarStrip
                daySelectionAnimation={{
                  type: 'border',
                  duration: 200,
                  borderWidth: 1,
                  borderHighlightColor: 'orange',
                  highlightColor: 'orange',
                }}
                style={{height: 100, paddingTop: 20, paddingBottom: 10}}
                highlightDateNumberStyle={{color: 'orange'}}
                highlightDateNameStyle={{color: 'orange'}}
                iconContainer={{flex: 0.1}}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: 10,
                }}>
                <Image
                  source={require(imagePath + 'icons/navigation/back.png')}
                />
                <Text>Choose Appointment Time</Text>
                <Image
                  source={require(imagePath +
                    'icons/navigation/rightArrow.png')}
                />
              </View>
              <FlatList
                contentContainerStyle={{
                  justifyContent: 'center',
                  padding: 5,
                  margin: 5,
                }}
                data={this.state.datalist}
                keyExtractor={(item, index) => `${index}`}
                extraData={this.state}
                numColumns={3}
                renderItem={({item}) => (
                  <View style={{justifyContent: 'center', flex: 1}}>
                    <View
                      style={{
                        width: height * 0.15,
                        justifyContent: 'center',
                        flex: 1,
                        margin: 5,
                        backgroundColor: '#d3d3d3',
                      }}>
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({indexChecked: item.timeSlot})
                        }
                        style={
                          this.state.indexChecked === item.timeSlot
                            ? styles.selected
                            : null
                        }>
                        <Text
                          style={{
                            textAlign: 'center',
                            padding: 5,
                            color:
                              this.state.indexChecked === item.timeSlot
                                ? 'white'
                                : 'black',
                          }}>
                          {item.timeSlot}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
              />
            </View>
            <TouchableOpacity onPress={this.bookingSucess}>
              <View style={styles.confirmButton}>
                <Text style={styles.confirmButton_text}>Confirm</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

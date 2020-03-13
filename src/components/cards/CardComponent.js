import React from 'react';
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const { height, width } = Dimensions.get('window');

import styles from './cardStyle';

export class OfferCardLarge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.data}
          keyExtractor={(item, index) => `${index}`}
          extraData={this.state}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity onPress={this.props.onPress}>
              <View style={styles.offerCardLarge}>
                <View style={styles.offerCardlargeContainer}>
                  <Text style={styles.offerCardlargeContainer_categoryText}>
                    {this.props.categoryText}
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <View style={styles.offerCardlargeContainer_whitelineView}>
                      <Text style={styles.offerCardlargeContainer_whiteline} />
                    </View>
                    <View style={{ flex: 2 }}>
                      <Text
                        style={styles.offerCardlargeContainer_whitelineText}
                        numberOfLines={1}>
                        {this.props.categoryFor}
                      </Text>
                    </View>
                    <View style={styles.offerCardlargeContainer_whitelineView}>
                      <Text style={styles.offerCardlargeContainer_whiteline} />
                    </View>
                  </View>
                  <View>
                    <Text
                      style={styles.offerCardlargeContainer_packageText}
                      numberOfLines={1}>
                      {'Package from'}
                    </Text>
                    <Text style={styles.offerCardlargeContainer_packagePrice}>
                      {item.price} {'/month'}
                    </Text>
                  </View>
                  <View style={styles.button_largeView}>
                    <TouchableOpacity
                      style={styles.button_large}
                      onPress={this.props.onPress}>
                      <Text style={styles.button_largeText}>BOOK NOW</Text>
                    </TouchableOpacity>
                  </View>
                  {/* </ImageBackground> */}
                </View>
                <View style={styles.offerCardlargeContainer_imageView}>
                  <Image
                    style={styles.offerCardlargeContainer_image}
                    source={item.image}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export class OfferCardMedium extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={(item, index) => `${index}`}
        extraData={this.state}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={this.props.onPress}>
            <View style={styles.offerCardMediumContainer}>
              <View style={styles.offerCardMediumContainerCard}>
                <View
                  style={{
                    justifyContent: 'center',
                    margin: 10,
                    backgroundColor: 'white',
                    width: height * 0.12,
                    height: height * 0.05,
                  }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 14,
                        textAlign: 'center',
                      }}>
                      OFFER
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center' }}>
                  <Text style={{ fontSize: 16, color: 'white', padding: 3 }}>
                    {'FLAT $20/- OFF on your First Visit'}
                  </Text>
                </View>
                <View style={{ position: 'absolute', bottom: 0, margin: 10 }}>
                  <TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'white',
                        textAlign: 'center',
                      }}>
                      {'BOOK NOW >'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flex: 0.7,
                  backgroundColor: '#ffffff',
                  elevation: 2,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  justifyContent: 'center',
                  // width: height * 0.16,
                  // height: height * 0.239,

                }}>
                <Image
                  style={{
                    justifyContent: 'center',
                    resizeMode: 'center',
                    alignSelf: 'center',
                    width: height * 0.16,
                    height: height * 0.239,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    //maxHeight: height * 0.55,
                    //maxWidth: width * 0.28
                  }}
                  //resizeMethod='auto'
                  source={item.image}
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

export class MiniCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <FlatList
        data={this.props.data}
        keyExtractor={(item, index) => `${index}`}
        extraData={this.state}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity onPress={this.props.onPress}>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                margin: 5,
                elevation: 5,
                width: width * 0.3,
                height: height * 0.2,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  width: width * 0.15,
                  height: height * 0.15,
                  alignSelf: 'center',
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    margin: 5,
                    padding: 5,
                    borderRadius: 100 / 2,
                    alignSelf: 'center',
                  }}
                  source={item.image}
                />
              </View>
              <Text style={{ backgroundColor: '#000000', height: 2 }} />
              <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                <Text
                  style={{
                    justifyContent: 'center',
                    fontSize: 16,
                    fontWeight: '600',
                    padding: 2,
                    margin: 5,
                    textAlign: 'center',
                  }}>
                  {item.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

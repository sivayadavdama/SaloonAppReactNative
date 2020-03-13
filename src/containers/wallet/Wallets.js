import React from './node_modules/react';
import {Text, View, Dimensions, ScrollView} from 'react-native';
import {Card, ListItem} from './node_modules/react-native-elements';

const {height} = Dimensions.get('window');
import styles from './walletsStyles';
const imagePath = '../../assets/icons/avatar/';
const walletTransaction = [
  {
    name: 'ABC Saloon',
    avatar: imagePath + 'profilepic.png',
    amount: '100',
  },
  {
    name: 'XYZ Saloon',
    avatar: imagePath + 'cutting.jpeg',
    amount: '254',
  },
  {
    name: 'ABC Saloon',
    avatar: imagePath + 'profilepic.png',
    amount: '100',
  },
  {
    name: 'XYZ Saloon',
    avatar: imagePath + 'cutting.jpeg',
    amount: '254',
  },
  {
    name: 'XYZ Saloon',
    avatar: imagePath + 'cutting.jpeg',
    amount: '254',
  },
  {
    name: 'ABC Saloon',
    avatar: imagePath + 'profilepic.png',
    amount: '100',
  },
  {
    name: 'XYZ Saloon',
    avatar: imagePath + 'cutting.jpeg',
    amount: '254',
  },
  {
    name: 'ABC Saloon',
    avatar: imagePath + 'profilepic.png',
    amount: '100',
  },
];

export default class Wallets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'dev@muscatftech.com',
      balance: '12,999.54',
    };
  }

  on_edit = () => {
    this.state.buttonName === 'Edit'
      ? this.setState({buttonName: 'Update'})
      : this.setState({buttonName: 'Edit'});
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.name}>{this.state.email}</Text>
        </View>

        <View style={styles.body}>
          <Card title="Transactions">
            <ScrollView style={{height: height / 1.5}}>
              {walletTransaction.map((l, i) => (
                <ListItem
                  key={i}
                  leftAvatar={{source: {uri: l.avatar}}}
                  title={l.name}
                  subtitle={l.amount + ' $'}
                  bottomDivider
                />
              ))}
            </ScrollView>
          </Card>
        </View>

        <View style={styles.balCard}>
          <Text style={styles.walletBalFont}>{this.state.balance}</Text>
        </View>
      </View>
    );
  }
}

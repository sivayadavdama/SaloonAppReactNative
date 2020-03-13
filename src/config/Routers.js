import React from 'react';
import {Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Splash from '../containers/Splash';
import SplashScreen from '../containers/SplashScreen';
import Login from '../containers/login';
import Register from '../containers/register';
import ForgotPassword from '../containers/forgotPassword';
import Home from '../containers/home';
import Notification from '../containers/notification';
import Wallets from '../containers/wallet';
import Profile from '../containers/profile';
import ProviderServices from '../containers/providerServices';
import DoctoresList from '../containers/providerList';
import DetailPage from '../containers/detailPage';
import BookingSuccess from '../containers/BookingSuccess';

const navigatorStyle = {width: 20, height: 20};

export default class Routers extends React.Component {
  constructor() {
    super();
    this.state = {
      os: true,
      check: false,
    };
  }

  render() {
    return <App />;
  }
}

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
        gestureEnabled: false,
      }),
    },
    ProviderServices: {
      screen: ProviderServices,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
        gestureEnabled: false,
      }),
    },
    DoctoresList: {
      screen: DoctoresList,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
        gestureEnabled: false,
      }),
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const MainApp = createBottomTabNavigator(
  {
    Home: HomeStack,
    Notification: Notification,
    Wallets: Wallets,
    Profile: Profile,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      initialRouteName: 'Home',
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={require('../../assets/icons/navigation/home.png')}
              style={navigatorStyle}
            />
          );
        } else if (routeName === 'Notification') {
          return (
            <Image
              source={require('../../assets/icons/navigation/notification.png')}
              style={navigatorStyle}
            />
          );
        } else if (routeName === 'Wallets') {
          return (
            <Image
              source={require('../../assets/icons/navigation/wallet.png')}
              style={navigatorStyle}
            />
          );
        } else {
          return (
            <Image
              source={require('../../assets/icons/avatar/profilepic2.png')}
              style={navigatorStyle}
            />
          );
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: '#FF6F00',
      inactiveTintColor: '#263238',
    },
  },
);

const NavStack = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
        gestureEnabled: false,
      }),
    },
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
        gestureEnabled: false,
      }),
    },
    Login: {
      screen: Login,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
        gestureEnabled: false,
      }),
    },

    MainApp: {
      screen: MainApp,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
        gestureEnabled: false,
      }),
    },
    DetailPage: {
      screen: DetailPage,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
        gestureEnabled: false,
      }),
    },
    Register: {
      screen: Register,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
        gestureEnabled: false,
      }),
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
        gestureEnabled: false,
      }),
    },
    BookingSuccess: {
      screen: BookingSuccess,
      navigationOptions: ({navigation}) => ({
        headerShown: false,
        gestureEnabled: false,
      }),
    },
  },
  {
    initialRouteName: 'Splash',
  },
);

const App = createAppContainer(NavStack);

import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const Stack = createStackNavigator();
const ProfileTabs = createMaterialTopTabNavigator();



export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
    screenOptions={{
      tabBarIndicatorStyle: {
        backgroundColor: 'transparent',
      },
      tabBarStyle: {
        zIndex: 0,
        elevation: 0,
      },
    }}>
    <ProfileTabs.Screen
      name={'Tab1'}
      options={{
        tabBarLabel: ({focused}) => (
          <ProfileTabTitle isFocused={focused} title={'Photos'} />
        ),
      }}
      component={ProfileTabContent}
    />
    <ProfileTabs.Screen
      name={'Tab2'}
      options={{
        tabBarLabel: ({focused}) => (
          <ProfileTabTitle isFocused={focused} title={'Videos'} />
        ),
      }}
      component={ProfileTabContent}
    />
    <ProfileTabs.Screen
      name={'Tab3'}
      options={{
        tabBarLabel: ({focused}) => (
          <ProfileTabTitle isFocused={focused} title={'Saved'} />
        ),
      }}
      component={ProfileTabContent}
    />
  </ProfileTabs.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen name={Routes.Profile} component={Profile} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
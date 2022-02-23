import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';

import AccountProfileScreen from './screens/AccountProfileScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import EmailPasswordLoginScreen from './screens/EmailPasswordLoginScreen';
import ForgotpasswordscreenScreen from './screens/ForgotpasswordscreenScreen';
import HOMESCREENScreen from './screens/HOMESCREENScreen';
import HomeScreen2 from './screens/HomeScreen2';
import NewsFeedScreen from './screens/NewsFeedScreen';
import NotificationPermissionsScreen from './screens/NotificationPermissionsScreen';
import NotificationPreferencesScreen from './screens/NotificationPreferencesScreen';
import ProductDetailsScreen from './screens/ProductDetailsScreen';
import ProspectiveHomeScreen from './screens/ProspectiveHomeScreen';
import SMSAuthConfirmationScreen from './screens/SMSAuthConfirmationScreen';
import SettingsScreen from './screens/SettingsScreen';
import SignUpscreeenScreen from './screens/SignUpscreeenScreen';
import SimpleWelcomeScreen from './screens/SimpleWelcomeScreen';
import StoreProfileScreen from './screens/StoreProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screens
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Your app doesn't have any screens added to the Root Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        Click the + (plus) icon in the Navigator tab on the left side to add
        some.
      </Text>
    </View>
  );
}
function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="ProspectiveHomeScreen"
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="ProspectiveHomeScreen"
        component={ProspectiveHomeScreen}
        options={{
          title: 'Prospective HomeScreen',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/home"
              size={25}
              color={focused ? theme.colors.custom_rgb255_165_0 : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="AntDesign/setting"
              size={25}
              color={focused ? theme.colors.custom_rgb255_165_0 : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NewsFeedScreen"
        component={NewsFeedScreen}
        options={{
          title: 'News Feed',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="FontAwesome/feed"
              size={25}
              color={focused ? theme.colors.custom_rgb255_165_0 : color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AccountProfileScreen"
        component={AccountProfileScreen}
        options={{
          title: 'Account Profile',
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/account-check-outline"
              size={25}
              color={focused ? theme.colors.custom_rgb255_165_0 : color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName="SimpleWelcomeScreen"
        screenOptions={{
          cardStyle: {
            backgroundColor: theme.colors.custom_rgb128_128_128,
          },
          headerTransparent: false,
          animationEnabled: true,
          headerStatusBarHeight: 12,
        }}
      >
        <Stack.Screen
          name="HOMESCREENScreen"
          component={HOMESCREENScreen}
          options={{ title: 'HOMESCREEN' }}
        />
        <Stack.Screen
          name="EmailPasswordLoginScreen"
          component={EmailPasswordLoginScreen}
          options={{ title: 'Email & Password Login' }}
        />
        <Stack.Screen
          name="ForgotpasswordscreenScreen"
          component={ForgotpasswordscreenScreen}
          options={{ title: 'forgotpassword screen' }}
        />
        <Stack.Screen
          name="HomeScreen2"
          component={HomeScreen2}
          options={{ title: 'HomeScreen2' }}
        />
        <Stack.Screen
          name="StoreProfileScreen"
          component={StoreProfileScreen}
          options={{ title: 'Store Profile' }}
        />
        <Stack.Screen
          name="NotificationPermissionsScreen"
          component={NotificationPermissionsScreen}
          options={{ title: 'Notification Permissions' }}
        />
        <Stack.Screen
          name="NotificationPreferencesScreen"
          component={NotificationPreferencesScreen}
          options={{ title: 'Notification Preferences' }}
        />
        <Stack.Screen
          name="SMSAuthConfirmationScreen"
          component={SMSAuthConfirmationScreen}
          options={{ title: 'SMS Auth Confirmation' }}
        />
        <Stack.Screen
          name="SimpleWelcomeScreen"
          component={SimpleWelcomeScreen}
          options={{ title: 'Simple Welcome' }}
        />
        <Stack.Screen
          name="SignUpscreeenScreen"
          component={SignUpscreeenScreen}
          options={{ title: 'SignUp screeen' }}
        />
        <Stack.Screen
          name="ProductDetailsScreen"
          component={ProductDetailsScreen}
          options={{ title: 'Product Details Screen ' }}
        />
        <Stack.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{ title: 'Categories Screen' }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});

import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AppSettingsScreen from './screens/AppSettingsScreen';
import BasicLoginScreen from './screens/BasicLoginScreen';
import EmailPasswordLoginScreen from './screens/EmailPasswordLoginScreen';
import ForgotpasswordscreenScreen from './screens/ForgotpasswordscreenScreen';
import HOMESCREENScreen from './screens/HOMESCREENScreen';
import HomeScreen2 from './screens/HomeScreen2';
import NotificationPermissionsScreen from './screens/NotificationPermissionsScreen';
import NotificationPreferencesScreen from './screens/NotificationPreferencesScreen';
import SMSAuthConfirmationScreen from './screens/SMSAuthConfirmationScreen';
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
export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
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
          options={{
            headerTransparent: false,
            gestureEnabled: false,
            animationEnabled: true,
            title: 'HOMESCREEN',
          }}
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
          name="AppSettingsScreen"
          component={AppSettingsScreen}
          options={{ title: 'App Settings' }}
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
          name="BasicLoginScreen"
          component={BasicLoginScreen}
          options={{ title: 'Basic Login' }}
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
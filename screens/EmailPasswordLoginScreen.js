import React from 'react';
import { Button, ScreenContainer, Touchable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const EmailPasswordLoginScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      navigation.navigate('RootNavigator');
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewzn}
        enabled={true}
        behavior={'padding'}
        keyboardVerticalOffset={16}
      >
        <View style={styles.ViewF3} pointerEvents={'auto'}>
          <Image
            style={styles.Imagejg}
            resizeMode={'contain'}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqHC4CpKC9JsTW1PslTO_8lwqrMuhpliNoA&usqp=CAU',
            }}
          />
          <Text
            style={[
              styles.Texty8,
              {
                color: theme.colors.custom_rgb0_128_0,
                textDecorationColor: theme.colors.error,
              },
            ]}
          >
            {'DEALLIVE24'}
          </Text>
        </View>

        <View pointerEvents={'auto'}>
          <Text style={[styles.TextpU, { color: theme.colors.medium }]}>
            {'Enter your credentials:'}
          </Text>
          <TextInput
            onChangeText={email => {
              try {
                setEmail(email);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.TextInput_1i,
              { borderColor: theme.colors.custom_rgb255_165_0 },
            ]}
            placeholder={'Email Address'}
            value={email}
            placeholderTextColor={theme.colors.light}
          />
          <TextInput
            onChangeText={password => {
              try {
                setPassword(password);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.TextInputUx,
              { borderColor: theme.colors.custom_rgb255_165_0 },
            ]}
            placeholder={'Password'}
            value={password}
            placeholderTextColor={theme.colors.light}
            secureTextEntry={true}
          />
          <Button
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonE2,
              {
                borderRadius: 24,
                borderColor: theme.colors.custom_rgb255_165_0,
              },
            ]}
            type={'solid'}
            color={theme.colors.custom_rgb255_165_0}
            disabled={false}
          >
            {'SIGN IN'}
          </Button>
        </View>

        <View pointerEvents={'auto'}>
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('SignUpscreeenScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableN3}
          >
            <Text
              style={[
                theme.typography.button,
                styles.Textas,
                { color: theme.colors.custom_rgb255_165_0 },
              ]}
            >
              {'Create Account'}
            </Text>
          </Touchable>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('ForgotpasswordscreenScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableE0}
          >
            <Text
              style={[
                theme.typography.button,
                styles.TextSl,
                { color: theme.colors.custom_rgb255_165_0 },
              ]}
            >
              {'Lost Password?'}
            </Text>
          </Touchable>
        </View>

        <Text
          style={[
            theme.typography.caption,
            styles.TextH9,
            { color: theme.colors.light },
          ]}
        >
          {
            'By tapping "Sign In", you agree to our Terms of Service, Privacy Policy and Cookie Policy. '
          }
        </Text>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Imagejg: {
    width: 100,
    height: 100,
  },
  Texty8: {
    width: '100%',
    textAlign: 'center',
    fontSize: 19,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewF3: {
    alignItems: 'center',
    marginBottom: 16,
  },
  TextpU: {
    width: '100%',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontSize: 13,
    marginBottom: 16,
  },
  TextInput_1i: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 16,
  },
  TextInputUx: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 32,
  },
  ButtonE2: {
    marginBottom: 16,
  },
  Textas: {
    textAlign: 'center',
  },
  TouchableN3: {
    width: '100%',
  },
  TextSl: {
    textAlign: 'center',
  },
  TouchableE0: {
    width: '100%',
    marginTop: 24,
  },
  TextH9: {
    marginTop: 24,
    textAlign: 'center',
  },
  KeyboardAvoidingViewzn: {
    flexGrow: 1,
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(EmailPasswordLoginScreen);

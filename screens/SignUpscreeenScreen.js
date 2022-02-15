import React from 'react';
import * as XanoApi from '../apis/XanoApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  ScreenContainer,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const SignUpscreeenScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const [Name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewT7}
        enabled={true}
        behavior={'padding'}
      >
        <View style={styles.ViewaC} pointerEvents={'auto'}>
          <Image
            style={styles.Image_8s}
            resizeMode={'cover'}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUe4OCQ9tXHvz6fUWBmr-3elBsf4-5Jhya7g&usqp=CAU',
            }}
          />
          <Text style={[styles.TextY1, { color: theme.colors.strong }]}>
            {'Sign Up here'}
          </Text>

          <Text style={[styles.TextqY, { color: theme.colors.medium }]}>
            {'Enter your credentials'}
          </Text>
        </View>

        <View style={styles.ViewqZ} pointerEvents={'auto'}>
          <TextField
            onChangeText={Name => {
              try {
                setName(Name);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextFieldVa, { borderColor: theme.colors.light }]}
            label={Name}
            error={Name}
            placeholder={'Name'}
            type={'underline'}
            defaultValue={Name}
          />
          <TextField
            onChangeText={email => {
              try {
                setEmail(email);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextFieldgL, { borderColor: theme.colors.light }]}
            label={email}
            error={email}
            placeholder={'Email'}
            type={'underline'}
            value={email}
          />
          <TextField
            onChangeText={password => {
              try {
                setPassword(password);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextField_1t, { borderColor: theme.colors.light }]}
            label={password}
            error={password}
            placeholder={'Password'}
            type={'underline'}
            value={password}
            secureTextEntry={true}
          />
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('EmailPasswordLoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchableL7}
          >
            <Text
              style={[
                styles.Text_6c,
                { color: theme.colors.custom_rgb255_165_0 },
              ]}
            >
              {'Already have an account?'}
            </Text>
          </Touchable>
        </View>

        <View pointerEvents={'auto'}>
          <ButtonSolid
            onPress={async () => {
              try {
                const signUpResponse2 = await XanoApi.signUpPOST(Constants, {
                  signupEmail: email,
                  signupName: Name,
                  signupPassword: password,
                });
                const authToken = signUpResponse2.authToken;
                const errorMessage = signUpResponse2.message;
                setGlobalVariableValue({
                  key: 'ERROR_MESSAGE',
                  value: errorMessage,
                });
                setGlobalVariableValue({
                  key: 'AUTH_HEADER',
                  value: 'Bearer ' + authToken,
                });
                navigation.navigate('BottomTabNavigator', {
                  screen: 'ProspectiveHomeScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidua,
              { backgroundColor: theme.colors.custom_rgb255_165_0 },
            ]}
            title={'Sign Up'}
          />
          <Text style={[styles.TextbY, { color: theme.colors.light }]}>
            {
              'By signing in you agree to our Terms of Service, Privacy Policy and Cookie Policy. '
            }
          </Text>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Image_8s: {
    width: 100,
    height: 100,
  },
  TextY1: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 16,
  },
  TextqY: {
    textAlign: 'center',
  },
  ViewaC: {
    alignItems: 'center',
  },
  TextFieldVa: {
    borderBottomWidth: 1,
  },
  TextFieldgL: {
    borderBottomWidth: 1,
  },
  TextField_1t: {
    borderBottomWidth: 1,
  },
  Text_6c: {
    alignSelf: 'center',
    fontFamily: 'System',
    fontWeight: '700',
  },
  TouchableL7: {
    marginTop: 16,
  },
  ViewqZ: {
    marginBottom: 36,
  },
  ButtonSolidua: {
    borderRadius: 24,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  TextbY: {
    textAlign: 'center',
  },
  KeyboardAvoidingViewT7: {
    flex: 1,
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(SignUpscreeenScreen);

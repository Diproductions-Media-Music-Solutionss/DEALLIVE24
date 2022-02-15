import React from 'react';
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

const BasicLoginScreen = props => {
  const { theme } = props;
  const { navigation } = props;

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
            onChangeText={email => {
              try {
                setEmail(email);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextFieldgL, { borderColor: theme.colors.light }]}
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
            onPress={() => {
              try {
                navigation.navigate('SMSAuthConfirmationScreen');
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

export default withTheme(BasicLoginScreen);

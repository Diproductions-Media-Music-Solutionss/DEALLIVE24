import React from 'react';
import { Button, ScreenContainer, TextField, withTheme } from '@draftbit/ui';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

const SMSAuthConfirmationScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [confirmationCodeValue, setConfirmationCodeValue] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewYc}
        enabled={true}
        behavior={'padding'}
        keyboardVerticalOffset={60}
      >
        <View style={styles.Viewar}>
          <Text
            style={[
              theme.typography.headline4,
              styles.Text_64,
              { color: theme.colors.strong },
            ]}
          >
            {'Confirm Account'}
          </Text>

          <Text
            style={[
              theme.typography.body1,
              styles.TextD4,
              { color: theme.colors.medium },
            ]}
          >
            {
              "We've sent you a message containing a unique 5 digit code. Enter it to continue."
            }
          </Text>
          <TextField
            onChangeText={confirmationCodeValue => {
              try {
                setConfirmationCodeValue(confirmationCodeValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TextFieldhs}
            placeholder={'Confirmation Code'}
            type={'underline'}
            underlineColor={theme.colors.medium}
            value={confirmationCodeValue}
          />
        </View>

        <View style={styles.ViewHq}>
          <Button
            onPress={() => {
              try {
                navigation.navigate('HomeScreen2');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.Button_1p, { borderRadius: 36 }]}
            type={'solid'}
            color={theme.colors.custom_rgb255_165_0}
          >
            {'Confirm Account'}
          </Button>

          <Text
            style={[
              theme.typography.caption,
              styles.TextHu,
              { color: theme.colors.light },
            ]}
          >
            {
              'By signing in you agree to our Terms of Service, Privacy Policy and Cookie Policy. '
            }
          </Text>
        </View>
        <View pointerEvents={'auto'} />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Text_64: {
    textAlign: 'center',
  },
  TextD4: {
    marginTop: 18,
    textAlign: 'center',
  },
  TextFieldhs: {
    marginTop: 18,
  },
  Viewar: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    marginLeft: 18,
    marginRight: 18,
  },
  Button_1p: {
    height: 48,
  },
  TextHu: {
    width: '100%',
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 24,
  },
  ViewHq: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'flex-end',
    marginLeft: 18,
    marginRight: 18,
  },
  KeyboardAvoidingViewYc: {
    flexGrow: 1,
  },
});

export default withTheme(SMSAuthConfirmationScreen);

import React from 'react';
import {
  Button,
  ScreenContainer,
  TextField,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';

const ForgotpasswordscreenScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textFieldValue, setTextFieldValue] = React.useState('');

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewbX}
        enabled={true}
        behavior={'padding'}
        keyboardVerticalOffset={80}
      >
        <View style={styles.Viewp7} pointerEvents={'auto'}>
          <Text
            style={[
              theme.typography.headline4,
              styles.Text_6y,
              { color: theme.colors.strong },
            ]}
          >
            {'Question Task'}
          </Text>

          <Text
            style={[
              theme.typography.body1,
              styles.TextSs,
              { color: theme.colors.strong },
            ]}
          >
            {
              "We've sent a confirmation code to your email. Tap the link or copy the code here to get started."
            }
          </Text>
          <TextField
            onChangeText={textFieldValue => {
              try {
                setTextFieldValue(textFieldValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextFieldtX, { borderColor: theme.colors.light }]}
            type={'underline'}
            label={'Confirmation Code'}
            keyboardType={'numeric'}
            value={textFieldValue}
            error={false}
          />
        </View>

        <View style={styles.ViewRT} pointerEvents={'auto'}>
          <Touchable style={styles.TouchableWJ}>
            <Text
              style={[
                theme.typography.button,
                styles.TextUw,
                { color: theme.colors.custom_rgb255_165_0 },
              ]}
            >
              {'Open Email'}
            </Text>
          </Touchable>

          <Button
            onPress={() => {
              try {
                navigation.navigate('EmailPasswordLoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.Button_0Y,
              { borderColor: theme.colors.custom_rgb255_165_0 },
            ]}
            type={'solid'}
            color={theme.colors.custom_rgb255_165_0}
            labelColor={theme.colors.custom_rgb255_255_255}
          >
            {'Confirm Account'}
          </Button>

          <Text
            style={[
              theme.typography.caption,
              styles.Textof,
              { color: theme.colors.light },
            ]}
          >
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
  Text_6y: {
    textAlign: 'center',
  },
  TextSs: {
    marginTop: 20,
    textAlign: 'center',
  },
  TextFieldtX: {
    marginTop: 20,
    marginBottom: 32,
    borderBottomWidth: 1,
  },
  Viewp7: {
    marginLeft: 16,
    marginRight: 16,
  },
  TextUw: {
    textAlign: 'center',
  },
  TouchableWJ: {
    marginBottom: 24,
  },
  Button_0Y: {
    height: 48,
  },
  Textof: {
    width: '100%',
    marginTop: 16,
    textAlign: 'center',
  },
  ViewRT: {
    marginLeft: 16,
    marginRight: 16,
    paddingBottom: 24,
    justifyContent: 'flex-end',
  },
  KeyboardAvoidingViewbX: {
    justifyContent: 'space-between',
    flex: 1,
  },
});

export default withTheme(ForgotpasswordscreenScreen);

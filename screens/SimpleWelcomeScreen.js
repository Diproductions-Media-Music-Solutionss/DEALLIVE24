import React from 'react';
import Images from '../config/Images';
import {
  ButtonOutline,
  ButtonSolid,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const SimpleWelcomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={false} hasSafeArea={false}>
      <ImageBackground
        style={styles.ImageBackgroundAu}
        source={Images.Sky}
        resizeMode={'cover'}
      >
        <View pointerEvents={'auto'}>
          <Text style={[styles.TextIm, { color: theme.colors.strongInverse }]}>
            {'Welcome'}
          </Text>

          <Text style={[styles.TextO0, { color: theme.colors.strongInverse }]}>
            {'Lets get started.'}
          </Text>
        </View>
        <View pointerEvents={'auto'} />
        <View pointerEvents={'auto'}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('BasicLoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidL8,
              { backgroundColor: theme.colors.custom_rgb255_165_0 },
            ]}
            title={'Sign Up'}
          />
          <ButtonOutline
            onPress={() => {
              try {
                navigation.navigate('EmailPasswordLoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonOutlineXg,
              {
                borderColor: theme.colors.custom_rgb255_165_0,
                color: theme.colors.strongInverse,
              },
            ]}
            title={'Log In'}
          />
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextIm: {
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'System',
    fontWeight: '700',
    marginBottom: 8,
  },
  TextO0: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 16,
  },
  ButtonSolidL8: {
    borderRadius: 64,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonOutlineXg: {
    borderRadius: 64,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 16,
  },
  ImageBackgroundAu: {
    height: '100%',
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(SimpleWelcomeScreen);

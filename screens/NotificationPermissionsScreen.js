import React from 'react';
import { ButtonSolid, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const NotificationPermissionsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      style={styles.screen}
      scrollable={false}
      hasSafeArea={true}
    >
      <View style={styles.ViewiD}>
        <View style={styles.Viewf3}>
          <Image
            style={styles.ImageWq}
            resizeMode={'cover'}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-u3MIW3asetJEffldd0TtHNRf_X_3BGKyQ&usqp=CAU',
            }}
          />
          <Text style={styles.Textxb}>{'Enable Notifications'}</Text>

          <Text style={[styles.TextYb, { color: theme.colors.medium }]}>
            {'Stay up to date with the latest updates and alerts. '}
          </Text>
        </View>

        <View style={styles.ViewgZ}>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('NotificationPreferencesScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidN7,
              {
                backgroundColor: theme.colors.custom_rgb255_165_0,
                borderRadius: 64,
              },
            ]}
            title={'ENABLE NOTIFICATIONS'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageWq: {
    width: 128,
    height: 128,
  },
  Textxb: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    lineHeight: 32,
    fontSize: 24,
  },
  TextYb: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  Viewf3: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  ButtonSolidzN: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 16,
  },
  ButtonSolidN7: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 16,
  },
  ViewgZ: {
    justifyContent: 'space-evenly',
  },
  ViewiD: {
    justifyContent: 'space-between',
    flex: 1,
    marginBottom: 20,
  },
  screen: {
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(NotificationPermissionsScreen);

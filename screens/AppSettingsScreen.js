import React from 'react';
import {
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const AppSettingsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <View style={styles.ViewoE} pointerEvents={'auto'}>
        <IconButton
          onPress={() => {
            try {
              navigation.navigate('HomeScreen2');
            } catch (err) {
              console.error(err);
            }
          }}
          icon={'Ionicons/ios-chevron-back-outline'}
          size={32}
          color={theme.colors.strong}
        />
      </View>

      <View style={styles.View_5U} pointerEvents={'auto'}>
        <Text
          style={[styles.TextvN, { color: theme.colors.custom_rgb255_165_0 }]}
        >
          {'Settings'}
        </Text>
      </View>

      <View style={styles.ViewGt} pointerEvents={'auto'}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('StoreProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View style={styles.ViewOC} pointerEvents={'auto'}>
            <View style={styles.ViewLn}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'FontAwesome/user-circle'}
              />
              <Text
                style={[
                  styles.Textmk,
                  { color: theme.colors.custom_rgb255_165_0 },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Account Info'}
              </Text>
            </View>

            <View style={styles.ViewrP}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividercw}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable
          onPress={() => {
            try {
              navigation.navigate('NotificationPermissionsScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View style={styles.ViewZ9} pointerEvents={'auto'}>
            <View style={styles.Viewss}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'FontAwesome/bell'}
              />
              <Text
                style={[
                  styles.TextGt,
                  { color: theme.colors.custom_rgb255_165_0 },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Notifications'}
              </Text>
            </View>

            <View style={styles.ViewXl}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Divider_2e}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.Viewsa} pointerEvents={'auto'}>
            <View style={styles.ViewfR}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'MaterialIcons/chat-bubble'}
              />
              <Text
                style={[
                  styles.TextQd,
                  { color: theme.colors.custom_rgb255_165_0 },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Support'}
              </Text>
            </View>

            <View style={styles.ViewH3}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Divideroz}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.ViewuN} pointerEvents={'auto'}>
            <View style={styles.ViewES}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'AntDesign/questioncircle'}
              />
              <Text
                style={[
                  styles.Texteh,
                  { color: theme.colors.custom_rgb255_165_0 },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'FAQ'}
              </Text>
            </View>

            <View style={styles.ViewMT}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividerua}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.ViewB0} pointerEvents={'auto'}>
            <View style={styles.View_4E}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'AntDesign/infocirlce'}
              />
              <Text
                style={[
                  styles.TextjM,
                  { color: theme.colors.custom_rgb255_165_0 },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'About'}
              </Text>
            </View>

            <View style={styles.Viewih}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividerjd}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
      </View>

      <View style={styles.ViewmL} pointerEvents={'auto'}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('EmailPasswordLoginScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View style={styles.ViewGf} pointerEvents={'auto'}>
            <Text
              style={[
                styles.Text_93,
                { color: theme.colors.custom_rgb255_165_0 },
              ]}
            >
              {'Sign Out'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewoE: {
    marginTop: 20,
    marginLeft: 20,
  },
  TextvN: {
    marginBottom: 6,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'System',
    fontWeight: '600',
  },
  View_5U: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textmk: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewLn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewrP: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewOC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividercw: {
    height: 1,
  },
  TextGt: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewss: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewXl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewZ9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Divider_2e: {
    height: 1,
  },
  TextQd: {
    marginLeft: 12,
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewfR: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewH3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewsa: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Divideroz: {
    height: 1,
  },
  Texteh: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewES: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewMT: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewuN: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividerua: {
    height: 1,
  },
  TextjM: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  View_4E: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewih: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewB0: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividerjd: {
    height: 1,
  },
  ViewGt: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 24,
    marginRight: 24,
  },
  Text_93: {
    textAlign: 'center',
  },
  ViewGf: {
    flexGrow: 1,
    flexShrink: 0,
    minHeight: 54,
    justifyContent: 'center',
  },
  ViewmL: {
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default withTheme(AppSettingsScreen);

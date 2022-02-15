import React from 'react';
import {
  Divider,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const SettingsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <View style={styles.Viewug} pointerEvents={'auto'}>
        <Text
          style={[styles.Textw9, { color: theme.colors.custom_rgb255_165_0 }]}
        >
          {'Settings'}
        </Text>
      </View>

      <View style={styles.Viewt4} pointerEvents={'auto'}>
        <Touchable
          onPress={() => {
            try {
              navigation.navigate('AccountProfileScreen');
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View style={styles.ViewaL} pointerEvents={'auto'}>
            <View style={styles.ViewHU}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'FontAwesome/user-circle'}
              />
              <Text
                style={[
                  styles.TextWQ,
                  { color: theme.colors.custom_rgb255_165_0 },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Account Settings'}
              </Text>
            </View>

            <View style={styles.ViewHZ}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerJK}
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
          <View style={styles.Viewti} pointerEvents={'auto'}>
            <View style={styles.ViewiQ}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'FontAwesome/bell'}
              />
              <Text
                style={[
                  styles.TextaN,
                  { color: theme.colors.custom_rgb255_165_0 },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Notifications'}
              </Text>
            </View>

            <View style={styles.ViewyT}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerPf}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.Viewvw} pointerEvents={'auto'}>
            <View style={styles.ViewvZ}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'MaterialIcons/chat-bubble'}
              />
              <Text
                style={[
                  styles.Textpo,
                  { color: theme.colors.custom_rgb255_165_0 },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Support'}
              </Text>
            </View>

            <View style={styles.Viewbn}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Divider_2b}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.ViewMS} pointerEvents={'auto'}>
            <View style={styles.ViewG7}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'AntDesign/questioncircle'}
              />
              <Text
                style={[
                  styles.Text_9I,
                  { color: theme.colors.custom_rgb255_165_0 },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'FAQ'}
              </Text>
            </View>

            <View style={styles.Viewh7}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividernv}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.ViewjH} pointerEvents={'auto'}>
            <View style={styles.ViewW1}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'AntDesign/infocirlce'}
              />
              <Text
                style={[
                  styles.TextQP,
                  { color: theme.colors.custom_rgb255_165_0 },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'About'}
              </Text>
            </View>

            <View style={styles.ViewvH}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerFN}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
      </View>

      <View style={styles.View_1v} pointerEvents={'auto'}>
        <Touchable>
          <View style={styles.View_6P} pointerEvents={'auto'}>
            <Text
              style={[
                styles.Textco,
                { color: theme.colors.custom_rgb255_165_0 },
              ]}
            >
              {'Done'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textw9: {
    marginBottom: 6,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewug: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextWQ: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewHU: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewHZ: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewaL: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerJK: {
    height: 1,
  },
  TextaN: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewiQ: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewyT: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewti: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerPf: {
    height: 1,
  },
  Textpo: {
    marginLeft: 12,
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewvZ: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewbn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewvw: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Divider_2b: {
    height: 1,
  },
  Text_9I: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewG7: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewh7: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewMS: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividernv: {
    height: 1,
  },
  TextQP: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewW1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewvH: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewjH: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerFN: {
    height: 1,
  },
  Viewt4: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 24,
    marginRight: 24,
  },
  Textco: {
    textAlign: 'center',
  },
  View_6P: {
    flexGrow: 1,
    flexShrink: 0,
    minHeight: 54,
    justifyContent: 'center',
  },
  View_1v: {
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default withTheme(SettingsScreen);

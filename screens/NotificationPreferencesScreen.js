import React from 'react';
import {
  Divider,
  Link,
  ScreenContainer,
  Switch,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, View } from 'react-native';

const NotificationPreferencesScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <View style={styles.Viewyd}>
        <Text
          style={[
            theme.typography.headline4,
            { color: theme.colors.custom_rgb255_165_0 },
          ]}
        >
          {'Notifications'}
        </Text>
      </View>

      <View style={styles.Viewt4}>
        <View pointerEvents={'auto'}>
          <View style={styles.ViewCL}>
            <View style={styles.Viewxn}>
              <View style={styles.ViewK1}>
                <Text
                  style={[
                    theme.typography.headline6,
                    { color: theme.colors.strong },
                  ]}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'Direct Messages'}
                </Text>

                <Text
                  style={[
                    theme.typography.caption,
                    { color: theme.colors.medium },
                  ]}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'@draftbit sent you a private message'}
                </Text>
              </View>
            </View>
            <Switch
              color={theme.colors.primary}
              activeTrackColor={theme.colors.custom_rgb255_165_0}
            />
          </View>
        </View>
        <Divider
          style={styles.DividerRZ}
          height={1}
          color={theme.colors.divider}
        />
        <View pointerEvents={'auto'}>
          <View style={styles.Viewa9}>
            <View style={styles.Viewkt}>
              <View style={styles.ViewHc}>
                <Text
                  style={[
                    theme.typography.headline6,
                    { color: theme.colors.strong },
                  ]}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'New Products\n'}
                </Text>

                <Text
                  style={[
                    theme.typography.caption,
                    { color: theme.colors.medium },
                  ]}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'@New products have been put in stores'}
                </Text>
              </View>
            </View>
            <Switch
              color={theme.colors.primary}
              activeTrackColor={theme.colors.custom_rgb255_165_0}
            />
          </View>
        </View>
        <Divider
          style={styles.Dividerha}
          height={1}
          color={theme.colors.divider}
        />
        <View pointerEvents={'auto'}>
          <View style={styles.View_1C}>
            <View style={styles.Viewb0}>
              <View style={styles.ViewfI}>
                <Text
                  style={[
                    theme.typography.headline6,
                    { color: theme.colors.strong },
                  ]}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'Posts'}
                </Text>

                <Text
                  style={[
                    theme.typography.caption,
                    { color: theme.colors.medium },
                  ]}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'Posts from favorite stores '}
                </Text>
              </View>
            </View>
            <Switch
              color={theme.colors.primary}
              activeTrackColor={theme.colors.custom_rgb255_165_0}
            />
          </View>
        </View>
        <Divider
          style={styles.Dividerrd}
          height={1}
          color={theme.colors.divider}
        />
        <View pointerEvents={'auto'}>
          <View style={styles.ViewFz}>
            <View style={styles.ViewZU}>
              <View style={styles.Viewml}>
                <Text
                  style={[
                    theme.typography.headline6,
                    { color: theme.colors.strong },
                  ]}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'App Updates'}
                </Text>

                <Text
                  style={[
                    theme.typography.caption,
                    { color: theme.colors.medium },
                  ]}
                  allowFontScaling={true}
                  ellipsizeMode={'tail'}
                  textBreakStrategy={'highQuality'}
                >
                  {'New features and announcements'}
                </Text>
              </View>
            </View>
            <Switch
              color={theme.colors.primary}
              activeTrackColor={theme.colors.custom_rgb255_165_0}
            />
          </View>
        </View>
      </View>

      <View style={styles.ViewnN} pointerEvents={'auto'}>
        <Link
          style={[styles.LinkhY, { color: theme.colors.custom_rgb255_165_0 }]}
          title={'Done'}
        />
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Viewyd: {
    paddingBottom: 24,
    paddingTop: 44,
    alignItems: 'center',
  },
  ViewK1: {
    flex: 1,
  },
  Viewxn: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  ViewCL: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  DividerRZ: {
    height: 1,
    marginTop: 24,
    marginBottom: 24,
  },
  ViewHc: {
    flex: 1,
  },
  Viewkt: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  Viewa9: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Dividerha: {
    height: 1,
    marginTop: 24,
    marginBottom: 24,
  },
  ViewfI: {
    flex: 1,
  },
  Viewb0: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  View_1C: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Dividerrd: {
    height: 1,
    marginTop: 24,
    marginBottom: 24,
  },
  Viewml: {
    flex: 1,
  },
  ViewZU: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  ViewFz: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Viewt4: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 24,
    paddingBottom: 24,
  },
  LinkhY: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewnN: {
    alignSelf: 'center',
    marginTop: 32,
  },
});

export default withTheme(NotificationPreferencesScreen);

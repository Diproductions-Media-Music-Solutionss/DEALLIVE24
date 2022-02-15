import React from 'react';
import Images from '../config/Images';
import {
  Container,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const NewsFeedScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.divider }}
      scrollable={false}
      hasSafeArea={true}
    >
      <View
        style={[styles.ViewuO, { backgroundColor: theme.colors.background }]}
      >
        <Touchable>
          <Text
            style={[
              theme.typography.button,
              { color: theme.colors.custom_rgb255_165_0 },
            ]}
          >
            {'News'}
          </Text>
        </Touchable>
        <Image
          style={styles.ImageQQ}
          resizeMode={'contain'}
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/cropped-cropped-deallive-24-loggo-2-3.png',
          }}
        />
        <Touchable>
          <Icon
            style={styles.IconLa}
            size={24}
            color={theme.colors.custom_rgb255_165_0}
            name={'AntDesign/search1'}
          />
        </Touchable>
      </View>

      <Container
        style={{ backgroundColor: theme.colors.strong }}
        elevation={0}
        useThemeGutterPadding={false}
      >
        <ScrollView
          style={[
            styles.ScrollViewXN,
            { backgroundColor: theme.colors.strong },
          ]}
          contentContainerStyle={styles.ScrollViewXNContent}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          horizontal={true}
          bounces={true}
        >
          <View style={styles.ViewUh}>
            <Text style={[styles.Textnb, { color: theme.colors.surface }]}>
              {'Nike'}
            </Text>

            <Text style={[styles.TextDJ, { color: theme.colors.primary }]}>
              {'-0.35%'}
            </Text>
            <Icon
              style={styles.Icontt}
              color={theme.colors.primary}
              size={24}
              name={'MaterialCommunityIcons/ampersand'}
            />
          </View>

          <View style={styles.VieweQ}>
            <Text style={[styles.TextY3, { color: theme.colors.surface }]}>
              {'Addidas'}
            </Text>

            <Text style={[styles.TexttV, { color: theme.colors.primary }]}>
              {'-0.35%'}
            </Text>
            <Icon
              style={styles.IconH8}
              name={'MaterialCommunityIcons/ampersand'}
              size={24}
              color={theme.colors.primary}
            />
          </View>

          <View style={styles.ViewkY}>
            <Text style={[styles.TextlT, { color: theme.colors.surface }]}>
              {'Balenciaga'}
            </Text>

            <Text style={[styles.TextMX, { color: theme.colors.primary }]}>
              {'-0.35%'}
            </Text>
            <Icon
              style={styles.Iconj5}
              size={24}
              color={theme.colors.primary}
              name={'Ionicons/md-arrow-dropdown'}
            />
          </View>

          <View style={styles.ViewaK}>
            <Text style={[styles.Textjn, { color: theme.colors.surface }]}>
              {'NIKKEI'}
            </Text>

            <Text style={[styles.TextDX, { color: theme.colors.primary }]}>
              {'-0.35%'}
            </Text>
            <Icon
              style={styles.IconOH}
              size={24}
              color={theme.colors.primary}
              name={'Ionicons/md-arrow-dropdown'}
            />
          </View>
        </ScrollView>
      </Container>

      <ScrollView
        showsVerticalScrollIndicator={true}
        bounces={true}
        horizontal={false}
        showsHorizontalScrollIndicator={true}
      >
        <Container
          style={{ backgroundColor: theme.colors.background }}
          elevation={0}
          useThemeGutterPadding={false}
        >
          <Image
            style={styles.ImageTI}
            resizeMode={'cover'}
            source={Images.DraftbitTeamPhoto}
          />
          <View style={styles.ViewIb}>
            <Text
              style={[
                theme.typography.headline4,
                { color: theme.colors.strong },
              ]}
            >
              {null}
            </Text>

            <Text
              style={[theme.typography.body2, { color: theme.colors.light }]}
            >
              {
                'A group of Chicago tech veterans has launched a startup that aims to help businesses more easily build mobile apps. And after a stint at Silicon Valley accelerator Y Combinator, it’s ready to grow its team. Hello.'
              }
            </Text>

            <View style={styles.Viewaz}>
              <Text style={{ color: theme.colors.light }}>{'APR 22'}</Text>

              <View style={styles.Viewvt}>
                <Touchable>
                  <Icon
                    style={styles.Icon_0b}
                    size={24}
                    name={'FontAwesome/bookmark-o'}
                    color={theme.colors.light}
                  />
                </Touchable>

                <Touchable>
                  <Icon
                    style={styles.IconYv}
                    name={'Feather/share'}
                    size={24}
                    color={theme.colors.light}
                  />
                </Touchable>
              </View>
            </View>
          </View>
        </Container>

        <Container
          style={[
            styles.ContainerEY,
            { backgroundColor: theme.colors.background },
          ]}
          useThemeGutterPadding={false}
          elevation={0}
        >
          <View style={styles.ViewP5}>
            <Text
              style={[
                theme.typography.headline4,
                { color: theme.colors.strong },
              ]}
            >
              {'Announcing React Native 0.63 with LogBox'}
            </Text>

            <Text
              style={[theme.typography.body2, { color: theme.colors.light }]}
            >
              {
                'LogBox is a completely redesigned redbox, yellowbox, and logging experience in React Native. In 0.62 we introduced LogBox as an opt-in. In this release, we’re launching LogBox as the default experience in all of React Native.'
              }
            </Text>

            <View style={styles.Viewsd}>
              <Text style={{ color: theme.colors.light }}>{'JUL 6'}</Text>

              <View style={styles.ViewJm}>
                <Touchable>
                  <Icon
                    style={styles.Iconuw}
                    size={24}
                    color={theme.colors.light}
                    name={'FontAwesome/bookmark-o'}
                  />
                </Touchable>

                <Touchable>
                  <Icon
                    style={styles.Icone4}
                    name={'Feather/share'}
                    size={24}
                    color={theme.colors.light}
                  />
                </Touchable>
              </View>
            </View>
          </View>
        </Container>

        <Container
          style={[
            styles.Containerpv,
            { backgroundColor: theme.colors.background },
          ]}
          useThemeGutterPadding={false}
          elevation={0}
        >
          <View style={styles.ViewBb}>
            <Text
              style={[
                theme.typography.headline4,
                { color: theme.colors.strong },
              ]}
            >
              {'Check out Draftbit on Product Hunt'}
            </Text>

            <Text
              style={[theme.typography.body2, { color: theme.colors.light }]}
            >
              {
                'Create, customize, launch, and iterate on your mobile app, all from your browser. Source code included.'
              }
            </Text>

            <View style={styles.View_8B}>
              <Text style={{ color: theme.colors.light }}>{'DEC 28'}</Text>

              <View style={styles.View_5e}>
                <Touchable>
                  <Icon
                    style={styles.IconWe}
                    color={theme.colors.light}
                    size={24}
                    name={'FontAwesome/bookmark-o'}
                  />
                </Touchable>

                <Touchable>
                  <Icon
                    style={styles.IconpK}
                    color={theme.colors.light}
                    size={24}
                    name={'Feather/share'}
                  />
                </Touchable>
              </View>
            </View>
          </View>
        </Container>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImageQQ: {
    height: 25,
    width: 25,
    flexGrow: 1,
  },
  IconLa: {
    width: 24,
    height: 24,
  },
  ViewuO: {
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingTop: 16,
  },
  Textnb: {
    marginRight: 4,
  },
  TextDJ: {
    marginRight: 8,
  },
  Icontt: {
    height: 24,
    width: 24,
  },
  ViewUh: {
    marginRight: 16,
    paddingBottom: 16,
    alignItems: 'center',
    paddingTop: 16,
    flexDirection: 'row',
  },
  TextY3: {
    marginRight: 4,
  },
  TexttV: {
    marginRight: 4,
  },
  IconH8: {
    height: 24,
    width: 24,
  },
  VieweQ: {
    alignItems: 'center',
    paddingBottom: 16,
    marginRight: 16,
    flexDirection: 'row',
    paddingTop: 16,
  },
  TextlT: {
    marginRight: 4,
  },
  TextMX: {
    marginRight: 4,
  },
  Iconj5: {
    height: 24,
    width: 24,
  },
  ViewkY: {
    paddingTop: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    marginRight: 16,
    alignItems: 'center',
  },
  Textjn: {
    marginRight: 4,
  },
  TextDX: {
    marginRight: 8,
  },
  IconOH: {
    width: 24,
    height: 24,
  },
  ViewaK: {
    paddingBottom: 16,
    marginRight: 16,
    flexDirection: 'row',
    paddingTop: 16,
    alignItems: 'center',
  },
  ScrollViewXN: {
    height: 70,
  },
  ScrollViewXNContent: {
    paddingLeft: 16,
    flexDirection: 'row',
  },
  ImageTI: {
    width: '100%',
    height: 125,
  },
  Icon_0b: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  IconYv: {
    height: 24,
    width: 24,
  },
  Viewvt: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
  Viewaz: {
    paddingTop: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  ViewIb: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 16,
  },
  Iconuw: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  Icone4: {
    width: 24,
    height: 24,
  },
  ViewJm: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
  Viewsd: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingTop: 16,
    alignItems: 'center',
  },
  ViewP5: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingTop: 16,
  },
  ContainerEY: {
    marginTop: 12,
  },
  IconWe: {
    marginRight: 16,
    width: 24,
    height: 24,
  },
  IconpK: {
    width: 24,
    height: 24,
  },
  View_5e: {
    flexDirection: 'row',
    width: 60,
    justifyContent: 'space-between',
  },
  View_8B: {
    paddingTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ViewBb: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  Containerpv: {
    marginTop: 12,
  },
});

export default withTheme(NewsFeedScreen);

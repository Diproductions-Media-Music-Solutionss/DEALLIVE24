import React from 'react';
import Images from '../config/Images';
import {
  Button,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const StoreProfileScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewKi}
        keyboardVerticalOffset={44}
        behavior={'position'}
        enabled={true}
      >
        <View style={styles.Viewce} pointerEvents={'auto'}>
          <IconButton
            icon={'Ionicons/ios-chevron-back-outline'}
            size={32}
            color={theme.colors.strong}
          />
        </View>

        <View style={styles.ViewpT}>
          <Image
            style={styles.ImageEJ}
            source={Images.ProfilePlaceholder}
            resizeMode={'cover'}
          />
          <Text style={[styles.TextDi, { color: theme.colors.strong }]}>
            {'Manasseh Ameyow'}
          </Text>

          <Text
            style={[
              theme.typography.subtitle1,
              styles.TextZx,
              { color: theme.colors.medium },
            ]}
          >
            {'Store Description'}
          </Text>

          <Touchable style={styles.Touchablebw}>
            <View style={styles.ViewcT}>
              <Icon
                style={[
                  styles.IconST,
                  { backgroundColor: theme.colors.surface },
                ]}
                name={'MaterialCommunityIcons/map-marker'}
                color={theme.colors.strong}
                size={20}
              />
              <Text
                style={[
                  theme.typography.subtitle2,
                  { color: theme.colors.custom_rgb255_165_0 },
                ]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Ghana'}
              </Text>
            </View>
          </Touchable>

          <Touchable style={styles.TouchableYb}>
            <View style={styles.View_88}>
              <Icon
                style={[
                  styles.Icon_2n,
                  { backgroundColor: theme.colors.background },
                ]}
                size={20}
                color={theme.colors.strong}
                name={'MaterialCommunityIcons/email-multiple-outline'}
              />
              <Text
                style={[
                  theme.typography.subtitle2,
                  { color: theme.colors.custom_rgb255_165_0 },
                ]}
                textBreakStrategy={'highQuality'}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
              >
                {'manasseh919@gmail.com'}
              </Text>
            </View>
          </Touchable>
        </View>

        <View style={styles.ViewYp}>
          <View style={styles.ViewvE}>
            <Text
              style={[styles.Textmb, { color: theme.colors.strong }]}
              textBreakStrategy={'highQuality'}
              allowFontScaling={true}
              ellipsizeMode={'tail'}
            >
              {'Products Purchased'}
            </Text>

            <Touchable>
              <Text
                style={[
                  styles.Textj9,
                  { color: theme.colors.custom_rgb255_165_0 },
                ]}
                allowFontScaling={true}
                textBreakStrategy={'highQuality'}
                ellipsizeMode={'tail'}
              >
                {'See All'}
              </Text>
            </Touchable>
          </View>
          <FlatList
            data={data}
            renderItem={({ item }) => {
              const listData = item;
              return (
                <Touchable>
                  <View style={styles.ViewbO}>
                    <View style={styles.ViewMk}>
                      <View style={styles.View_4p}>
                        <Image
                          style={styles.Imagegc}
                          resizeMode={'contain'}
                          source={{ uri: item['image_url'] }}
                        />
                      </View>

                      <View style={styles.ViewqO}>
                        <Text
                          style={[
                            theme.typography.headline6,
                            { color: theme.colors.strong },
                          ]}
                          allowFontScaling={true}
                          textBreakStrategy={'highQuality'}
                          ellipsizeMode={'tail'}
                        >
                          {item && item['name']}
                        </Text>

                        <View style={styles.ViewCA}>
                          <Text
                            style={[
                              theme.typography.subtitle1,
                              { color: theme.colors.medium },
                            ]}
                          >
                            {'$'}
                          </Text>

                          <Text
                            style={[
                              theme.typography.subtitle1,
                              { color: theme.colors.medium },
                            ]}
                            allowFontScaling={true}
                            ellipsizeMode={'tail'}
                            textBreakStrategy={'highQuality'}
                          >
                            {item && item['sale_price']}
                          </Text>

                          <Text
                            style={[
                              theme.typography.subtitle1,
                              styles.TextX1,
                              { color: theme.colors.light },
                            ]}
                          >
                            {'$'}
                          </Text>

                          <Text
                            style={[
                              theme.typography.subtitle1,
                              styles.TextNv,
                              { color: theme.colors.light },
                            ]}
                            textBreakStrategy={'highQuality'}
                            ellipsizeMode={'tail'}
                            allowFontScaling={true}
                          >
                            {item && item['list_price']}
                          </Text>
                        </View>

                        <View style={styles.ViewDU}>
                          <Text
                            style={[
                              theme.typography.subtitle2,
                              styles.TextSc,
                              { color: theme.colors.medium },
                            ]}
                            ellipsizeMode={'tail'}
                            allowFontScaling={true}
                            textBreakStrategy={'highQuality'}
                          >
                            {listData?.description}
                          </Text>
                        </View>
                      </View>
                    </View>
                    <Icon
                      style={styles.IconuW}
                      color={theme.colors.strong}
                      name={'AntDesign/right'}
                      size={24}
                    />
                  </View>
                  <Divider
                    style={styles.DividerbW}
                    height={1}
                    color={theme.colors.divider}
                  />
                </Touchable>
              );
            }}
            data={data}
          />
        </View>

        <View style={styles.Viewdx}>
          <Button
            style={[styles.Button_9e, { borderRadius: theme.roundness }]}
            type={'solid'}
            color={theme.colors.custom_rgb255_165_0}
          >
            {'Visit Store'}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Viewce: {
    marginLeft: 30,
    marginTop: 20,
  },
  ImageEJ: {
    width: 120,
    marginBottom: 24,
    height: 120,
  },
  TextDi: {
    textAlign: 'left',
    marginBottom: 6,
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '700',
  },
  TextZx: {
    textAlign: 'left',
  },
  IconST: {
    width: 24,
    marginRight: 8,
    height: 24,
    alignSelf: 'flex-start',
  },
  ViewcT: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Touchablebw: {
    marginTop: 12,
    marginBottom: 6,
    flexWrap: 'wrap',
  },
  Icon_2n: {
    height: 24,
    marginRight: 8,
    alignSelf: 'flex-start',
    width: 24,
  },
  View_88: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TouchableYb: {
    flexWrap: 'wrap',
    marginBottom: 6,
    marginTop: 2,
  },
  ViewpT: {
    alignItems: 'flex-start',
    paddingRight: 32,
    paddingLeft: 32,
    paddingTop: 32,
    paddingBottom: 32,
  },
  Textmb: {
    fontFamily: 'System',
    fontWeight: '700',
    fontSize: 16,
  },
  Textj9: {
    fontSize: 16,
    fontFamily: 'System',
    fontWeight: '700',
  },
  ViewvE: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  Imagegc: {
    width: 40,
    height: 40,
  },
  View_4p: {
    width: 40,
    height: 40,
    marginRight: 14,
  },
  TextX1: {
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  TextNv: {
    textDecorationLine: 'line-through',
    marginLeft: 0,
  },
  ViewCA: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  TextSc: {
    flex: 1,
  },
  ViewDU: {
    flex: 1,
  },
  ViewqO: {
    flex: 1,
  },
  ViewMk: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  IconuW: {
    width: 24,
    height: 24,
    marginLeft: 14,
  },
  ViewbO: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 12,
    paddingTop: 12,
    marginTop: 12,
    alignItems: 'flex-start',
  },
  DividerbW: {
    height: 1,
  },
  ViewYp: {
    paddingTop: 34,
    paddingBottom: 34,
    paddingRight: 32,
    paddingLeft: 32,
  },
  Button_9e: {
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Viewdx: {
    paddingRight: 32,
    paddingLeft: 32,
    paddingTop: 14,
    paddingBottom: 34,
  },
  KeyboardAvoidingViewKi: {
    flexGrow: 1,
  },
});

export default withTheme(StoreProfileScreen);

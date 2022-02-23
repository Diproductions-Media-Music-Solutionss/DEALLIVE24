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

const CategoriesScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={true} hasSafeArea={true}>
      <View style={styles.ViewN4} pointerEvents={'auto'}>
        <IconButton
          onPress={() => {
            try {
              navigation.navigate('BottomTabNavigator', {
                screen: 'ProspectiveHomeScreen',
              });
            } catch (err) {
              console.error(err);
            }
          }}
          icon={'AntDesign/arrowleft'}
          size={32}
          color={theme.colors.strong}
        />
      </View>

      <View style={styles.ViewqT} pointerEvents={'auto'}>
        <Text style={[styles.TextgU, { color: theme.colors.strong }]}>
          {'Categories'}
        </Text>
      </View>

      <View style={styles.ViewEU} pointerEvents={'auto'}>
        <Touchable>
          <View style={styles.VieweS} pointerEvents={'auto'}>
            <View style={styles.View_1R}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'MaterialIcons/house'}
              />
              <Text
                style={[styles.TextbN, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Home'}
              </Text>
            </View>

            <View style={styles.ViewZD}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividerv1}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.ViewK8} pointerEvents={'auto'}>
            <View style={styles.View_9b}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'MaterialIcons/local-shipping'}
              />
              <Text
                style={[styles.TextFL, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Shipping'}
              </Text>
            </View>

            <View style={styles.ViewG4}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerGK}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.Viewk6} pointerEvents={'auto'}>
            <View style={styles.ViewKh}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'Ionicons/ios-people-outline'}
              />
              <Text
                style={[styles.TextWa, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Men & Women'}
              </Text>
            </View>

            <View style={styles.ViewLI}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerYp}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.Viewx9} pointerEvents={'auto'}>
            <View style={styles.Viewj5}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'MaterialCommunityIcons/silverware-fork-knife'}
              />
              <Text
                style={[styles.Textif, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Home & Kitchen'}
              </Text>
            </View>

            <View style={styles.View_5E}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerER}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.View_27} pointerEvents={'auto'}>
            <View style={styles.Viewsu}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'MaterialIcons/toys'}
              />
              <Text
                style={[styles.TextaZ, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {"Baby's & Toys"}
              </Text>
            </View>

            <View style={styles.ViewkK}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividerla}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.ViewJA} pointerEvents={'auto'}>
            <View style={styles.ViewVa}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'Feather/smartphone'}
              />
              <Text
                style={[styles.TextTK, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Mobile Accessories'}
              </Text>
            </View>

            <View style={styles.Viewnn}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividerNo}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.ViewB9} pointerEvents={'auto'}>
            <View style={styles.ViewQg}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'MaterialCommunityIcons/car-light-dimmed'}
              />
              <Text
                style={[styles.TextYL, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'LED Market'}
              </Text>
            </View>

            <View style={styles.ViewQC}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Dividerre}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.ViewQ6} pointerEvents={'auto'}>
            <View style={styles.View_8b}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'MaterialCommunityIcons/gold'}
              />
              <Text
                style={[styles.Textj6, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Raw Materials'}
              </Text>
            </View>

            <View style={styles.ViewWu}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.Divider_9u}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>

        <Touchable>
          <View style={styles.Viewqh} pointerEvents={'auto'}>
            <View style={styles.Viewmm}>
              <Icon
                size={24}
                color={theme.colors.strong}
                name={'MaterialCommunityIcons/dump-truck'}
              />
              <Text
                style={[styles.TextQb, { color: theme.colors.strong }]}
                allowFontScaling={true}
                ellipsizeMode={'tail'}
                textBreakStrategy={'highQuality'}
              >
                {'Second-Hand Cars'}
              </Text>
            </View>

            <View style={styles.Viewqm}>
              <Icon
                name={'MaterialIcons/chevron-right'}
                color={theme.colors.strong}
                size={24}
              />
            </View>
          </View>
          <Divider
            style={styles.DividergD}
            height={1}
            color={theme.colors.divider}
          />
        </Touchable>
      </View>
      <View style={styles.Viewh3} pointerEvents={'auto'} />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewN4: {
    marginTop: 20,
    marginLeft: 20,
  },
  TextgU: {
    marginBottom: 6,
    fontSize: 20,
    lineHeight: 24,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewqT: {
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextbN: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  View_1R: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewZD: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  VieweS: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividerv1: {
    height: 1,
  },
  TextFL: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  View_9b: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewG4: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewK8: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerGK: {
    height: 1,
  },
  TextWa: {
    marginLeft: 12,
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewKh: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewLI: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewk6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerYp: {
    height: 1,
  },
  Textif: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewj5: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_5E: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewx9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerER: {
    height: 1,
  },
  TextaZ: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewsu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewkK: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_27: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividerla: {
    height: 1,
  },
  TextTK: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewVa: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewnn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewJA: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividerNo: {
    height: 1,
  },
  TextYL: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  ViewQg: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewQC: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewB9: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Dividerre: {
    height: 1,
  },
  Textj6: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  View_8b: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewWu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewQ6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  Divider_9u: {
    height: 1,
  },
  TextQb: {
    marginLeft: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewmm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewqm: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewqh: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
  },
  DividergD: {
    height: 1,
  },
  ViewEU: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 24,
    marginRight: 24,
  },
  Viewh3: {
    flexGrow: 1,
    flexShrink: 0,
  },
});

export default withTheme(CategoriesScreen);

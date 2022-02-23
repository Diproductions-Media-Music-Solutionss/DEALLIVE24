import React from 'react';
import {
  IconButton,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const ProspectiveHomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.lightInverse }}
      hasSafeArea={true}
      scrollable={true}
    >
      <Spacer top={12} right={0} bottom={12} left={0}>
        <View style={styles.Viewe5} pointerEvents={'auto'}>
          <View style={styles.ViewsC} pointerEvents={'auto'}>
            <IconButton
              onPress={() => {
                try {
                  navigation.navigate('CategoriesScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              icon={'Ionicons/menu-sharp'}
              size={32}
              color={theme.colors.custom_rgb255_165_0}
            />
          </View>
          <IconButton
            icon={'Feather/shopping-bag'}
            size={32}
            color={theme.colors.custom_rgb255_165_0}
          />
        </View>
      </Spacer>

      <View style={styles.ViewU2} pointerEvents={'auto'}>
        <View
          style={[
            styles.ViewCZ,
            { backgroundColor: theme.colors.divider, borderRadius: 12 },
          ]}
          pointerEvents={'auto'}
        >
          <View style={styles.ViewfL} pointerEvents={'auto'}>
            <TextInput
              onChangeText={textInputValue => {
                try {
                  setTextInputValue(textInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.TextInputJY}
              placeholder={'Search...'}
              value={textInputValue}
            />
          </View>
          <Spacer top={0} right={3} bottom={0} left={3} />
          <View pointerEvents={'auto'}>
            <IconButton
              icon={'MaterialIcons/search'}
              size={32}
              color={theme.colors.light}
            />
          </View>
        </View>
      </View>

      <Spacer top={12} right={8} bottom={12} left={8}>
        <ScrollView
          contentContainerStyle={styles.ScrollViewqPContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
        >
          <Touchable style={styles.TouchableOX}>
            <Text style={[styles.TextiV, { color: theme.colors.strong }]}>
              {'All '}
            </Text>
          </Touchable>

          <Touchable style={styles.TouchableND}>
            <Text style={[styles.Text_7F, { color: theme.colors.strong }]}>
              {'Clothing'}
            </Text>
          </Touchable>

          <Touchable style={styles.Touchableha}>
            <Text style={[styles.TextCU, { color: theme.colors.strong }]}>
              {'Shoes'}
            </Text>
          </Touchable>

          <Touchable style={styles.TouchablecP}>
            <Text style={[styles.TextOR, { color: theme.colors.strong }]}>
              {'Accessories'}
            </Text>
          </Touchable>

          <Touchable style={styles.Touchable_86}>
            <Text style={[styles.TextQN, { color: theme.colors.strong }]}>
              {'Brands'}
            </Text>
          </Touchable>

          <Touchable style={styles.Touchable_6h}>
            <Text style={[styles.Textab, { color: theme.colors.strong }]}>
              {'Raw Materials\n'}
            </Text>
          </Touchable>

          <Touchable style={styles.Touchable_47}>
            <Text style={[styles.TextxZ, { color: theme.colors.strong }]}>
              {'Home'}
            </Text>
          </Touchable>

          <Touchable style={styles.Touchableli}>
            <Text style={[styles.TextfY, { color: theme.colors.strong }]}>
              {'Mobile'}
            </Text>
          </Touchable>

          <Touchable style={styles.TouchableJb}>
            <Text style={[styles.TextEW, { color: theme.colors.strong }]}>
              {'Baby toys'}
            </Text>
          </Touchable>

          <Touchable style={styles.TouchableUv}>
            <Text style={[styles.TextZy, { color: theme.colors.strong }]}>
              {'All Jewelry'}
            </Text>
          </Touchable>

          <Touchable style={styles.Touchable_3v}>
            <Text style={[styles.TexteR, { color: theme.colors.strong }]}>
              {'Chandeliers and Lamps'}
            </Text>
          </Touchable>
        </ScrollView>

        <View style={styles.ViewLC} pointerEvents={'auto'}>
          <Text style={[styles.TextnQ, { color: theme.colors.strong }]}>
            {'Kids All categories\n'}
          </Text>
        </View>

        <ScrollView
          style={{ borderRadius: 0 }}
          contentContainerStyle={styles.ScrollViewLsContent}
          showsVerticalScrollIndicator={true}
          bounces={true}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={[styles.Vieww0, { borderRadius: 23 }]}
            pointerEvents={'auto'}
          >
            <Image
              style={styles.ImagetP}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/99999-1-380x220.jpg',
              }}
              resizeMode={'cover'}
            />
            <Text style={{ color: theme.colors.strong }}>
              {"Baby boy's clothes"}
            </Text>
          </View>

          <View style={styles.View_8c} pointerEvents={'auto'}>
            <Image
              style={styles.Imagea1}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/10000-1-380x220.jpg',
              }}
              resizeMode={'cover'}
            />
            <Text style={{ color: theme.colors.strong }}>
              {"Baby girl's shoes"}
            </Text>
          </View>

          <View style={styles.ViewOd} pointerEvents={'auto'}>
            <Image
              style={styles.ImageBA}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/11111111-1-380x220.jpg',
              }}
              resizeMode={'cover'}
            />
            <Text style={{ color: theme.colors.strong }}>
              {"Baby girl's clothes"}
            </Text>
          </View>

          <View style={styles.ViewMi} pointerEvents={'auto'}>
            <Image
              style={styles.Imageah}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/12222222222-380x220.jpg',
              }}
              resizeMode={'cover'}
            />
            <Text style={{ color: theme.colors.strong }}>
              {"Baby boy's clothes"}
            </Text>
          </View>
        </ScrollView>
      </Spacer>

      <View
        style={[
          styles.ViewRe,
          { borderColor: theme.colors.custom_rgb255_165_0 },
        ]}
        pointerEvents={'auto'}
      >
        <Text style={[styles.TextGN, { color: theme.colors.strong }]}>
          {'Mobile Accessories'}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.ScrollViewAnContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.View_1M} pointerEvents={'auto'}>
          <Touchable>
            <Image
              style={styles.ImageWS}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/iphone2.png',
              }}
              resizeMode={'cover'}
            />
            <Text style={{ color: theme.colors.strong }}>
              {'Iphone Accessories\n'}
            </Text>
          </Touchable>

          <Touchable>
            <Image
              style={styles.Imagezj}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/huawei.png',
              }}
              resizeMode={'cover'}
            />
            <Text style={{ color: theme.colors.strong }}>
              {'Huawei Accessories\n'}
            </Text>
          </Touchable>
        </View>

        <View pointerEvents={'auto'}>
          <Touchable>
            <Image
              style={styles.Image_7z}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/sumsong1.png',
              }}
              resizeMode={'cover'}
            />
            <Text style={{ color: theme.colors.strong }}>
              {'Samsung Accessories\n'}
            </Text>
          </Touchable>

          <Touchable>
            <Image
              style={styles.ImagekC}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/sumsong1.png',
              }}
              resizeMode={'cover'}
            />
            <Text style={{ color: theme.colors.strong }}>
              {'Xiaomi Accessories'}
            </Text>
          </Touchable>
        </View>
      </ScrollView>

      <View
        style={[
          styles.ViewEV,
          { borderColor: theme.colors.custom_rgb255_165_0 },
        ]}
        pointerEvents={'auto'}
      >
        <Text style={[styles.TextzQ, { color: theme.colors.strong }]}>
          {'Women Fashion'}
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.ScrollViewfFContent}
        showsVerticalScrollIndicator={true}
        bounces={true}
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.ViewjP} pointerEvents={'auto'}>
          <Touchable>
            <Image
              style={styles.Image_0u}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/55555555555555555555555-380x220.jpg',
              }}
              resizeMode={'cover'}
            />
            <Text style={{ color: theme.colors.strong }}>
              {'Women Shoes\n'}
            </Text>
          </Touchable>

          <Touchable>
            <Image
              style={styles.ImageMU}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/666666-380x220.jpg',
              }}
              resizeMode={'cover'}
            />
            <Text style={{ color: theme.colors.strong }}>
              {'Women Clothes\n'}
            </Text>
          </Touchable>
        </View>

        <View pointerEvents={'auto'}>
          <Touchable>
            <Image
              style={styles.Image_8P}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/88888888-380x220.jpg',
              }}
              resizeMode={'cover'}
            />
            <Text style={{ color: theme.colors.strong }}>
              {'Women Undergarments\n'}
            </Text>
          </Touchable>

          <Touchable>
            <Image
              style={styles.ImageiM}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/7777777777-380x220.jpg',
              }}
              resizeMode={'cover'}
            />
            <Text style={{ color: theme.colors.strong }}>
              {'Women Jewelry'}
            </Text>
          </Touchable>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewsC: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  Viewe5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 10,
  },
  TextInputJY: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  ViewfL: {
    flex: 1,
  },
  ViewCZ: {
    paddingLeft: 12,
    paddingTop: 10,
    paddingRight: 12,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewU2: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  TextiV: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 16,
  },
  TouchableOX: {
    marginRight: 10,
  },
  Text_7F: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 16,
  },
  TouchableND: {
    marginRight: 10,
  },
  TextCU: {
    fontFamily: 'AlfaSlabOne_400Regular',
    fontSize: 16,
  },
  Touchableha: {
    marginRight: 10,
  },
  TextOR: {
    fontSize: 16,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  TouchablecP: {
    marginRight: 10,
  },
  TextQN: {
    fontSize: 16,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  Touchable_86: {
    marginRight: 10,
  },
  Textab: {
    fontSize: 16,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  Touchable_6h: {
    marginRight: 10,
  },
  TextxZ: {
    fontSize: 16,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  Touchable_47: {
    marginRight: 10,
  },
  TextfY: {
    fontSize: 16,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  Touchableli: {
    marginRight: 10,
  },
  TextEW: {
    fontSize: 16,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  TouchableJb: {
    marginRight: 10,
  },
  TextZy: {
    fontSize: 16,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  TouchableUv: {
    marginRight: 10,
  },
  TexteR: {
    fontSize: 16,
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  Touchable_3v: {
    marginRight: 10,
  },
  ScrollViewqPContent: {
    justifyContent: 'space-evenly',
    alignContent: 'space-around',
    marginBottom: 10,
  },
  TextnQ: {
    fontSize: 15,
    fontFamily: 'Alata_400Regular',
  },
  ViewLC: {
    marginBottom: 5,
  },
  ImagetP: {
    width: 250,
    height: 250,
  },
  Vieww0: {
    marginRight: 10,
  },
  Imagea1: {
    width: 250,
    height: 250,
  },
  View_8c: {
    marginRight: 10,
  },
  ImageBA: {
    width: 250,
    height: 250,
  },
  ViewOd: {
    marginRight: 10,
  },
  Imageah: {
    width: 250,
    height: 250,
  },
  ViewMi: {
    marginRight: 10,
  },
  ScrollViewLsContent: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  TextGN: {
    fontSize: 17,
    fontFamily: 'Allerta_400Regular',
  },
  ViewRe: {
    justifyContent: 'space-around',
    marginBottom: 15,
    alignItems: 'flex-start',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginLeft: 5,
  },
  ImageWS: {
    width: 200,
    height: 200,
  },
  Imagezj: {
    width: 200,
    height: 200,
  },
  View_1M: {
    marginLeft: 5,
    justifyContent: 'space-evenly',
  },
  Image_7z: {
    width: 200,
    height: 200,
  },
  ImagekC: {
    width: 200,
    height: 200,
  },
  ScrollViewAnContent: {
    justifyContent: 'space-evenly',
  },
  TextzQ: {
    fontSize: 17,
    fontFamily: 'Allerta_400Regular',
  },
  ViewEV: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    borderTopWidth: 2,
    borderBottomWidth: 2,
  },
  Image_0u: {
    width: 200,
    height: 200,
  },
  ImageMU: {
    width: 200,
    height: 200,
  },
  ViewjP: {
    marginLeft: 5,
    justifyContent: 'space-evenly',
  },
  Image_8P: {
    width: 200,
    height: 200,
  },
  ImageiM: {
    width: 200,
    height: 200,
  },
  ScrollViewfFContent: {
    justifyContent: 'space-evenly',
  },
});

export default withTheme(ProspectiveHomeScreen);

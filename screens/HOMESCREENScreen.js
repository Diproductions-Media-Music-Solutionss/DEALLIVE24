import React from 'react';
import {
  CircleImage,
  FieldSearchBarFull,
  Icon,
  IconButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, View } from 'react-native';

const HOMESCREENScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  return (
    <ScreenContainer scrollable={true}>
      <View
        style={[
          styles.View_8l,
          { backgroundColor: theme.colors.custom_rgb255_165_0 },
        ]}
        pointerEvents={'auto'}
      >
        <View style={styles.ViewxG} pointerEvents={'auto'}>
          <Text style={{ color: theme.colors.strong }}>{'Login'}</Text>
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('EmailPasswordLoginScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            icon={'Ionicons/ios-person-outline'}
            size={32}
            color={theme.colors.custom_rgb0_0_0}
          />
        </View>

        <View pointerEvents={'auto'}>
          <Icon name={'Ionicons/ios-menu'} size={24} />
        </View>
      </View>

      <View pointerEvents={'auto'}>
        <Text
          style={[styles.TextOg, { color: theme.colors.custom_rgb0_128_0 }]}
        >
          {'DEALLIVE24'}
        </Text>
      </View>

      <View style={styles.ViewEP} pointerEvents={'auto'}>
        <Image
          style={styles.Imageag}
          source={{
            uri: 'https://demo.themefreesia.com/supermarket-plus/wp-content/uploads/sites/59/2020/07/slider-3-1.jpg',
          }}
          resizeMode={'cover'}
        />
      </View>

      <View
        style={[
          styles.Viewx4,
          {
            borderColor: theme.colors.custom_rgb0_0_0,
            backgroundColor: theme.colors.custom_rgb0_0_0,
          },
        ]}
        pointerEvents={'auto'}
      >
        <Icon
          style={{ backgroundColor: theme.colors.strong }}
          name={'Ionicons/menu-sharp'}
          size={24}
          color={theme.colors.surface}
        />
      </View>

      <View style={styles.ViewIZ} pointerEvents={'auto'}>
        <CircleImage
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/mmmmm.jpg',
          }}
          size={60}
        />
        <CircleImage
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/2000.jpg',
          }}
          size={60}
        />
        <CircleImage
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/Untitled-1.jpg',
          }}
          size={60}
        />
        <CircleImage
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/bb.jpg',
          }}
          size={60}
        />
        <CircleImage
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/jjj.jpg',
          }}
          size={60}
        />
      </View>

      <View
        style={[styles.Viewiw, { borderRadius: 21 }]}
        pointerEvents={'auto'}
      >
        <FieldSearchBarFull
          onChange={searchBarValue => {
            try {
              setSearchBarValue(searchBarValue);
            } catch (err) {
              console.error(err);
            }
          }}
          placeholder={'Search for...'}
          value={searchBarValue}
        />
        <Icon
          style={{ backgroundColor: theme.colors.custom_rgb255_165_0 }}
          name={'AntDesign/search1'}
          size={24}
          color={theme.colors.surface}
        />
      </View>

      <View style={styles.ViewDH} pointerEvents={'auto'}>
        <Image
          style={styles.ImageW2}
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/01/baby-toys-banner.jpg',
          }}
          resizeMode={'cover'}
        />
        <Image
          style={styles.ImageYP}
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/01/baby-products.jpg',
          }}
          resizeMode={'cover'}
        />
      </View>

      <View pointerEvents={'auto'}>
        <View pointerEvents={'auto'}>
          <Text style={{ color: theme.colors.strong }}>
            {'KIDS ALL CATEGORIES'}
          </Text>
        </View>
      </View>

      <View
        style={styles.ViewTk}
        pointerEvents={'auto'}
        accessibilityRole={'scrollbar'}
        accessible={true}
        accessibilityElementsHidden={true}
        accessibilityIgnoresInvertColors={false}
      >
        <Image
          style={styles.ImageEX}
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/99999-1-380x220.jpg',
          }}
          resizeMode={'cover'}
        />
        <Image
          style={styles.ImageiW}
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/10000-1-380x220.jpg',
          }}
          resizeMode={'cover'}
        />
        <Image
          style={styles.Image_5H}
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/11111111-1-380x220.jpg',
          }}
          resizeMode={'cover'}
        />
      </View>

      <Text style={[styles.Text_5H, { color: theme.colors.strong }]}>
        {'Mobile Accessories'}
      </Text>

      <View style={styles.View_3p} pointerEvents={'auto'}>
        <Image
          style={styles.Imageai}
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/iphone2.png',
          }}
          resizeMode={'cover'}
        />
        <Image
          style={styles.ImagezV}
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/huawei.png',
          }}
          resizeMode={'cover'}
        />
        <Image
          style={styles.ImageJ6}
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/sumsong1.png',
          }}
          resizeMode={'cover'}
        />
      </View>

      <View
        style={[styles.ViewXq, { borderColor: theme.colors.medium }]}
        pointerEvents={'auto'}
      >
        <Text style={{ color: theme.colors.strong }}>
          {'Mobile Accessories on sale'}
        </Text>
      </View>

      <View
        style={[
          styles.Viewki,
          { borderRadius: 21, borderColor: theme.colors.medium },
        ]}
        pointerEvents={'auto'}
      >
        <Text style={{ color: theme.colors.strong }}>{'Mobile Chargers'}</Text>

        <Text style={{ color: theme.colors.strong }}>{'Mobile Screen'}</Text>

        <Text style={{ color: theme.colors.strong }}>{'Speakers'}</Text>
      </View>

      <View style={styles.ViewUh} pointerEvents={'auto'}>
        <Image
          style={styles.Imagedy}
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/MOBILE-CHARGER-400x480.jpg',
          }}
          resizeMode={'cover'}
        />
        <Image
          style={styles.ImageRt}
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/POWER-BANK-400x480.jpg',
          }}
          resizeMode={'cover'}
        />
        <Image
          style={styles.ImagepP}
          source={{
            uri: 'https://deallive24.com/wp-content/uploads/2022/02/MOBILE-CASE-400x480.jpg',
          }}
          resizeMode={'cover'}
        />
      </View>

      <View pointerEvents={'auto'}>
        <Text style={[styles.TextXC, { color: theme.colors.strong }]}>
          {'WOMEN FASHION'}
        </Text>
      </View>

      <View pointerEvents={'auto'}>
        <View style={styles.ViewiI} pointerEvents={'auto'}>
          <Image
            style={styles.Imagegz}
            source={{
              uri: 'https://deallive24.com/wp-content/uploads/2022/02/55555555555555555555555-380x220.jpg',
            }}
            resizeMode={'cover'}
          />
          <Image
            style={styles.Image_6a}
            source={{
              uri: 'https://deallive24.com/wp-content/uploads/2022/02/7777777777-380x220.jpg',
            }}
            resizeMode={'cover'}
          />
          <Image
            style={styles.ImageZx}
            source={{
              uri: 'https://deallive24.com/wp-content/uploads/2022/02/666666-380x220.jpg',
            }}
            resizeMode={'cover'}
          />
        </View>
      </View>

      <View
        style={{ backgroundColor: theme.colors.custom_rgb255_165_0 }}
        pointerEvents={'auto'}
      >
        <View pointerEvents={'auto'}>
          <Text
            style={[styles.TextLX, { color: theme.colors.custom_rgb0_128_0 }]}
          >
            {'DEALLIVE24.COM     '}
          </Text>

          <Text style={[styles.TextHs, { color: theme.colors.surface }]}>
            {'LEARN HOW TO BECOME OUR PARTNER IN YOUR COUNTRY\n'}
          </Text>
        </View>

        <View pointerEvents={'auto'}>
          <Text style={[styles.TextPT, { color: theme.colors.surface }]}>
            {'WE ACCEPT'}
          </Text>
        </View>

        <View style={styles.ViewQN} pointerEvents={'auto'}>
          <Icon
            style={{ backgroundColor: theme.colors.surface }}
            name={'FontAwesome/cc-visa'}
            size={24}
          />
          <Icon
            style={{ backgroundColor: theme.colors.surface }}
            name={'FontAwesome/cc-paypal'}
            size={24}
          />
          <Icon
            style={{ backgroundColor: theme.colors.surface }}
            name={'FontAwesome/cc-stripe'}
            size={24}
          />
          <Icon
            style={{ backgroundColor: theme.colors.surface }}
            name={'FontAwesome/cc-mastercard'}
            size={24}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ViewxG: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_8l: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    opacity: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
  },
  TextOg: {
    marginBottom: 10,
    fontSize: 25,
    fontFamily: 'AlfaSlabOne_400Regular',
    textAlign: 'center',
  },
  Imageag: {
    width: '100%',
    height: 100,
  },
  ViewEP: {
    height: 100,
    marginBottom: 10,
  },
  Viewx4: {
    alignItems: 'flex-end',
  },
  ViewIZ: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  Viewiw: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 5,
    paddingRight: 5,
  },
  ImageW2: {
    width: '50%',
    height: 50,
  },
  ImageYP: {
    width: '50%',
    height: 50,
  },
  ViewDH: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  ImageEX: {
    width: '30%',
    height: 100,
  },
  ImageiW: {
    width: '30%',
    height: 100,
  },
  Image_5H: {
    width: '30%',
    height: 100,
  },
  ViewTk: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  Text_5H: {
    marginTop: 10,
  },
  Imageai: {
    width: '30%',
    height: 100,
  },
  ImagezV: {
    width: '30%',
    height: 100,
  },
  ImageJ6: {
    width: '30%',
    height: 100,
  },
  View_3p: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ViewXq: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderBottomWidth: 10,
    borderRightWidth: 10,
  },
  Viewki: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Imagedy: {
    width: '30%',
    height: 100,
  },
  ImageRt: {
    width: '30%',
    height: 100,
  },
  ImagepP: {
    width: '30%',
    height: 100,
  },
  ViewUh: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  TextXC: {
    marginTop: 10,
    marginBottom: 10,
  },
  Imagegz: {
    width: '30%',
    height: 100,
  },
  Image_6a: {
    width: '30%',
    height: 100,
  },
  ImageZx: {
    width: '30%',
    height: 100,
  },
  ViewiI: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  TextLX: {
    marginTop: 10,
    textAlign: 'center',
    fontFamily: 'AlfaSlabOne_400Regular',
  },
  TextHs: {
    fontSize: 12,
    marginTop: 10,
    marginBottom: 10,
  },
  TextPT: {
    textAlign: 'center',
  },
  ViewQN: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
});

export default withTheme(HOMESCREENScreen);

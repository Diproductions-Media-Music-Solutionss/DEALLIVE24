import React from 'react';
import {
  CircleImage,
  Divider,
  FieldSearchBarFull,
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

const HomeScreen2 = props => {
  const { theme } = props;
  const { navigation } = props;

  const [searchBarValue, setSearchBarValue] = React.useState(undefined);

  return (
    <ScreenContainer
      style={[
        styles.screen,
        { backgroundColor: theme.colors.custom_rgb247_247_245 },
      ]}
      hasSafeArea={true}
      scrollable={false}
    >
      <ScrollView
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={false}
        bounces={true}
        horizontal={false}
      >
        <View pointerEvents={'auto'} />
        <View
          style={[
            styles.ViewbC,
            { backgroundColor: theme.colors.custom_rgb255_165_0 },
          ]}
          pointerEvents={'auto'}
        >
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('AppSettingsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            icon={'AntDesign/menuunfold'}
            size={32}
            color={theme.colors.surface}
          />
          <View
            style={[
              styles.View_7u,
              { backgroundColor: theme.colors.custom_rgb255_165_0 },
            ]}
            pointerEvents={'auto'}
          >
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('EmailPasswordLoginScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text style={{ color: theme.colors.surface }}>{'Login\n'}</Text>
            </Touchable>
            <Icon
              name={'Ionicons/person-outline'}
              size={24}
              color={theme.colors.surface}
            />
          </View>
        </View>
        <FieldSearchBarFull
          onChange={searchBarValue => {
            try {
              setSearchBarValue(searchBarValue);
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.FieldSearchBarFullBa,
            {
              borderRadius: theme.roundness,
              borderColor: theme.colors.divider,
            },
          ]}
          placeholder={'Search for nearby restaurants.'}
          value={searchBarValue}
        />
        <Divider
          style={styles.DividerWL}
          color={theme.colors.divider}
          height={1}
        />
        <View style={styles.View_6m} pointerEvents={'auto'}>
          <Text style={{ color: theme.colors.strong }}>
            {'Best Products You Can Trust\n'}
          </Text>

          <Text style={{ color: theme.colors.strong }}>
            {'Enjoy your shopping'}
          </Text>
        </View>

        <View pointerEvents={'auto'}>
          <ScrollView
            contentContainerStyle={styles.ScrollViewc7Content}
            showsVerticalScrollIndicator={false}
            bounces={false}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
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
            <CircleImage
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/b.jpg',
              }}
              size={60}
            />
            <CircleImage
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/4545454545.jpg',
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
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/b.jpg',
              }}
              size={60}
            />
          </ScrollView>
        </View>

        <View pointerEvents={'auto'}>
          <Text style={{ color: theme.colors.strong }}>
            {'KIDS ALL CATEGORIES'}
          </Text>

          <ScrollView
            style={styles.ScrollView_7a}
            showsVerticalScrollIndicator={false}
            bounces={true}
            horizontal={true}
          >
            <Image
              style={styles.Imagea9}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/99999-1-380x220.jpg',
              }}
              resizeMode={'cover'}
            />
            <Image
              style={styles.ImageT7}
              source={{
                uri: 'https://deallive24.com/wp-content/uploads/2022/02/99999-1-380x220.jpg',
              }}
              resizeMode={'cover'}
            />
            <Image
              style={styles.Imagebr}
              source={{
                uri: 'https://static.draftbit.com/images/placeholder-image.png',
              }}
              resizeMode={'cover'}
            />
            <Image
              style={styles.Image_35}
              source={{
                uri: 'https://static.draftbit.com/images/placeholder-image.png',
              }}
              resizeMode={'cover'}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  View_7u: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  ViewbC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  FieldSearchBarFullBa: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },
  DividerWL: {
    height: 1,
  },
  View_6m: {
    marginTop: 10,
  },
  ScrollViewc7Content: {
    marginTop: 10,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  Imagea9: {
    height: '50%',
    width: '30%',
  },
  ImageT7: {
    width: '30%',
    height: 100,
  },
  Imagebr: {
    width: 250,
    height: 250,
  },
  Image_35: {
    width: 250,
    height: 250,
  },
  ScrollView_7a: {
    width: '30%',
  },
  screen: {
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(HomeScreen2);

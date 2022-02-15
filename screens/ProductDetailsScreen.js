import React from 'react';
import {
  Checkbox,
  Divider,
  Icon,
  ScreenContainer,
  Stepper,
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

const ProductDetailsScreen = props => {
  const { theme } = props;

  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [stepperValue, setStepperValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.surface }}
      scrollable={false}
      hasSafeArea={false}
    >
      <ScrollView
        style={{
          backgroundColor: theme.colors.surface,
          borderRadius: theme.roundness,
        }}
        horizontal={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Image
          style={styles.ImagebL}
          source={{
            uri: 'https://m.media-amazon.com/images/I/71To7eG2njL._AC_UY218_.jpg',
          }}
          resizeMode={'cover'}
        />
        <View style={styles.Viewos}>
          <Text
            style={[
              theme.typography.headline5,
              styles.TextNC,
              { color: theme.colors.strong },
            ]}
          >
            {'iPhone 12 pro max'}
          </Text>
          <Divider style={styles.Divider_3i} color={theme.colors.medium} />
          <Text style={[styles.TextPO, { color: theme.colors.medium }]}>
            {
              'Compatible with iPhone 12 pro max : Precise cutouts for speakers, charging ports, audio ports, and buttons for your convenience.'
            }
          </Text>

          <View style={styles.ViewBf}>
            <Icon
              style={styles.IconPG}
              size={16}
              name={'MaterialCommunityIcons/check-decagram'}
              color={theme.colors.custom_rgb17_217_0}
            />
            <Text
              style={[theme.typography.caption, { color: theme.colors.light }]}
            >
              {'Gluten Free'}
            </Text>
          </View>
        </View>

        <View
          style={[styles.View_2m, { backgroundColor: theme.colors.divider }]}
        >
          <Text
            style={[theme.typography.overline, { color: theme.colors.medium }]}
          >
            {'ADD ON'}
          </Text>
        </View>

        <View style={styles.Viewbp}>
          <View style={styles.ViewWv}>
            <Checkbox
              onPress={checkboxValue => {
                try {
                  setCheckboxValue(checkboxValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              status={checkboxValue}
              color={theme.colors.custom_rgb255_165_0}
              uncheckedColor={theme.colors.custom_rgb255_165_0}
            />
            <Text style={[styles.TextLR, { color: theme.colors.strong }]}>
              {'Corn Chips'}
            </Text>
          </View>

          <Text style={{ color: theme.colors.medium }}>{'$979.00'}</Text>
        </View>

        <View
          style={[styles.ViewDH, { backgroundColor: theme.colors.divider }]}
        >
          <Text
            style={[theme.typography.overline, { color: theme.colors.medium }]}
          >
            {'SPECIAL INSTRUCTIONS'}
          </Text>
        </View>

        <View style={[styles.ViewdO, { borderColor: theme.colors.divider }]}>
          <TextInput
            onChangeText={textInputValue => {
              try {
                setTextInputValue(textInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TextInputgR}
            editable={true}
            placeholder={'Add a note (extra sauce, no onion, etc)'}
            multiline={true}
            color={theme.colors.strong}
            value={textInputValue}
          />
        </View>

        <View
          style={[
            styles.Viewat,
            { borderColor: theme.colors.light, borderRadius: theme.roundness },
          ]}
        >
          <Stepper
            onChange={stepperValue => {
              try {
                setStepperValue(stepperValue);
              } catch (err) {
                console.error(err);
              }
            }}
            value={stepperValue}
          />
        </View>
      </ScrollView>

      <Touchable style={styles.TouchableTM}>
        <View
          style={[
            styles.ViewRW,
            {
              borderRadius: 21,
              backgroundColor: theme.colors.custom_rgb255_165_0,
            },
          ]}
        >
          <Text
            style={[
              theme.typography.button,
              styles.TextAC,
              { color: theme.colors.surface },
            ]}
          >
            {'Add To Cart'}
          </Text>
        </View>
      </Touchable>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImagebL: {
    width: '100%',
    height: 350,
  },
  TextNC: {
    textAlign: 'center',
  },
  Divider_3i: {
    height: 1,
    alignSelf: 'center',
    width: 32,
    marginTop: 16,
    marginBottom: 16,
  },
  TextPO: {
    textAlign: 'center',
  },
  IconPG: {
    width: 24,
    height: 24,
  },
  ViewBf: {
    marginTop: 12,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  Viewos: {
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
    paddingTop: 24,
  },
  View_2m: {
    paddingTop: 8,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
  },
  TextLR: {
    marginLeft: 16,
  },
  ViewWv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewbp: {
    paddingBottom: 16,
    paddingTop: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight: 16,
    paddingLeft: 16,
  },
  ViewDH: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingTop: 8,
  },
  TextInputgR: {
    marginLeft: 16,
  },
  ViewdO: {
    borderBottomWidth: 1,
    paddingRight: 16,
    paddingBottom: 16,
    marginTop: 16,
  },
  Viewat: {
    borderRightWidth: 1,
    borderTopWidth: 1,
    marginTop: 32,
    alignSelf: 'center',
    paddingRight: 8,
    paddingLeft: 8,
    paddingBottom: 16,
    paddingTop: 16,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    marginBottom: 32,
  },
  TextAC: {
    textAlign: 'center',
  },
  ViewRW: {
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  TouchableTM: {
    paddingLeft: 16,
    paddingBottom: 16,
    marginBottom: 16,
    paddingTop: 16,
    paddingRight: 16,
  },
});

export default withTheme(ProductDetailsScreen);

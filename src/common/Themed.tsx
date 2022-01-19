/**
 * Themed components based on device theme
 */

import React from 'react';
import {
  Text as DefaultText,
  TextInput as DefaultTextInput,
  View as DefaultView,
  SafeAreaView as DefaultSafeAreaView,
} from 'react-native';
import normalize from 'utils/normalize';
import useThemeColor from 'hooks/useThemeColor';
import useColorScheme from 'hooks/useColorScheme';
import Colors from './Colors';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type SafeAreaViewProps = ThemeProps & DefaultSafeAreaView['props'];

export const Text = (props: TextProps): JSX.Element => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <DefaultText
      style={[
        {
          color,
          fontSize: normalize(16),
          fontFamily: 'DMSans-Regular',
        },
        style,
      ]}
      {...otherProps}
    />
  );
};

export const View = (props: ViewProps): JSX.Element => {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background',
  );
  const borderColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'borderColor',
  );

  return (
    <DefaultView
      style={[{ backgroundColor, borderColor }, style]}
      {...otherProps}
    />
  );
};

export const TextInput = (props: TextInputProps): JSX.Element => {
  const { style, ...otherProps } = props;
  const theme = useColorScheme();
  const textColor = Colors[theme].text;
  const backgroundColor = Colors[theme].background;

  return (
    <DefaultTextInput
      style={[{ color: textColor, backgroundColor }, style]}
      {...otherProps}
    />
  );
};

export const SafeAreaView = (props: SafeAreaViewProps): JSX.Element => {
  const { style, ...otherProps } = props;
  const theme = useColorScheme();
  const backgroundColor = Colors[theme].background;

  return (
    <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />
  );
};

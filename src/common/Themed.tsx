import React from 'react';
import { Text as DefaultText, View as DefaultView } from 'react-native';
import normalize from 'utils/normalize';
import useThemeColor from 'hooks/useThemeColor';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

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

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

import React from 'react';
import { Text as RNText, StyleSheet, Platform, TextStyle  } from 'react-native';
import { colors, fontSize } from '../../constant';

interface TextProp {
  bold?: boolean;
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
}

const Text: React.FC<TextProp> = ({ bold, style, children, ...rest }) => {
  return (
    <RNText
      {...rest}
      style={[styles.text, bold ? styles.bold : styles.regular, style]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.size14,
    color: colors.black,
  },
  bold: {
    fontWeight: '700',
    ...Platform.select({
      android: {},
      ios: {},
    }),
  },
  regular: {
    ...Platform.select({
      android: {},
      ios: {},
    }),
  },
});

export default React.memo(Text);

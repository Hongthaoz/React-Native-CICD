import React from 'react';
import { SafeAreaView, StyleSheet, ViewStyle } from 'react-native';

import { colors } from '../../constant';

interface LayoutProps {
  bgColor?: string;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Layout: React.FC<LayoutProps> = ({ bgColor, children, style }) => {
  return (
    <SafeAreaView
      style={[
        style,
        styles.layout,
        { backgroundColor: bgColor || colors.systemGray2 },
      ]}>
      {/* <StatusBar
        animated
        barStyle="dark-content"
        backgroundColor={colors.white}
      /> */}
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});

export default Layout;

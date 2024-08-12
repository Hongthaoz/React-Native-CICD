import React from 'react';
import { TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';

interface ButtonProps {
  children: React.ReactNode;
  style?: ViewStyle;
  onPress: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, style, disabled, ...rest }) => {
  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      activeOpacity={0.85}
      style={[style, disabled && styles.disabled]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.5,
  },
});

export default Button;

import React, { useState, forwardRef, Ref } from 'react';
import { View, StyleSheet, TextInput, ViewStyle, TextStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Text } from '../text';
import { Button } from '../button';
import { scale, hScale } from '../../utils/resolutions';
import { colors, fontSize } from '../../constant';

interface InputPasswordProps {
  label: string;
  name: string;
  value: string; 
  style?: ViewStyle;
  errors?: Record<string, string>;
  touched?: Record<string, boolean>;
  handleChange: (name: string) => (value: string) => void;
  handleBlur: (name: string) => () => void;
}

const InputPassword = forwardRef<TextInput, InputPasswordProps>(
  (
    {
      label,
      name,
      value,
      style,
      errors,
      touched,
      handleChange,
      handleBlur,
      ...rest
    },
    ref
  ) => {
    const [secureText, setSecureText] = useState(true);

    const handleShowPassword = () => {
      setSecureText(prev => !prev);
    };

    return (
      <View style={style}>
        {label && (
          <Text bold style={styles.label}>
            {label}
          </Text>
        )}
        <View>
          <TextInput
            ref={ref as Ref<TextInput>}
            {...rest}
            value={value}
            autoCapitalize="none"
            style={styles.input}
            onBlur={handleBlur(name)}
            secureTextEntry={secureText}
            onChangeText={handleChange(name)}
            placeholderTextColor={colors.systemGray1}
          />
          {value?.length > 0 ? (
            <Button style={styles.btnShowPW} onPress={handleShowPassword}>
              <Ionicons
                name={secureText ? 'eye-off' : 'eye'}
                size={scale(18)}
                color={colors.black}
              />
            </Button>
          ) : null}
        </View>
        {errors && touched && touched[name] && errors[name] ? (
          <Text style={styles.error}>{errors[name]}</Text>
        ) : null}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  input: {
    color: colors.black,
    borderRadius: scale(4),
    paddingLeft: scale(10),
    fontSize: fontSize.size14,
    height: hScale(42),
    marginTop: scale(10),
    backgroundColor: colors.systemGray2,
  },
  btnShowPW: {
    position: 'absolute',
    right: 0,
    paddingHorizontal: scale(10),
    bottom: scale(6.5),
    paddingVertical: scale(4),
  },
  label: {
    fontSize: fontSize.size16,
    color: colors.black,
  },
  error: {
    fontSize: fontSize.size12,
    color: colors.systemGray1,
  },
});

export default InputPassword;

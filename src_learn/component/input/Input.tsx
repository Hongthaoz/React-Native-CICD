import React from 'react';
import { TextInput, View, StyleSheet, ViewStyle } from 'react-native';

import { Text } from '../text';
import { colors, fontSize } from '../../constant';
import { hScale, scale } from '../../utils/resolutions';

interface InputProps {
  label?: string;
  values: Record<string, string>;
  name: string;
  style?: ViewStyle;
  errors?: Record<string, string>;
  touched?: Record<string, boolean>;
  handleBlur: (name: string) => () => void;
  handleChange: (name: string) => (value: string) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  values,
  name,
  style,
  errors,
  touched,
  handleBlur,
  handleChange,
  ...rest
}) => {
  return (
    <View {...{ style }}>
      {label && (
        <Text bold style={styles.label}>
          {label}
        </Text>
      )}
      <TextInput
        {...rest}
        multiline={true}
        textAlignVertical='center'
        autoCapitalize="none"
        value={values[name]}
        placeholderTextColor={colors.systemGray1}
        style={styles.input}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
      />
      {errors && touched && touched[name] && errors[name] ? (
        <Text style={styles.error}>{errors[name]}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: hScale(42),
    color: colors.black,
    borderRadius: scale(4),
    paddingLeft: scale(10),
    backgroundColor: colors.systemGray2,
    fontSize: fontSize.size14,
  },
  label: {
    fontSize: fontSize.size17,
    marginBottom: scale(8),
    color: colors.black,
  },
  error: {
    color: colors.red,
    fontSize: fontSize.size11,
    marginTop: scale(7),
  },
});

export default Input;

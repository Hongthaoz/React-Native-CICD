import React from 'react';
import { View, StyleSheet, TextInput, ViewStyle } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { Text } from '../text';
import { colors, fontSize } from '../../constant';
import { scale } from '../../utils/resolutions';

interface InputFormProps {
  label: string;
  unit?: string;
  name: string;
  value: Record<string, string>;
  style?: ViewStyle;
  errors?: Record<string, string>;
  touched?: Record<string, boolean>;
  required?: boolean;
  handleBlur?: (name: string) => () => void;
  handleChange?: (name: string) => (value: string) => void;
  btnFillLatLong?: React.ReactNode;
  editable?: boolean;
}

const InputForm: React.FC<InputFormProps> = ({
  label,
  unit,
  name,
  value,
  style,
  errors,
  touched,
  required,
  handleBlur,
  handleChange,
  btnFillLatLong,
  editable,
  ...props
}) => {

  const handleBlurEvent = handleBlur ? handleBlur(name) : undefined;
  const handleChangeEvent = handleChange ? handleChange(name) : undefined;

  return (
    <View style={style}>
      <View style={styles.container}>
        <View style={btnFillLatLong ? styles.header : undefined}>
          <Text bold style={styles.label}>
            {label}
            {required && <Text style={styles.required}>*</Text>}
          </Text>
          {btnFillLatLong}
        </View>
        <View>
          {!editable ? (
            <Entypo
              size={scale(18)}
              name={'block'}
              style={styles.iconBan}
              color={'#F58C8D'}
            />
          ) : null}
          <TextInput
            multiline={true}
            textAlignVertical='center'
            autoCapitalize="none"
            value={value[name]}
            placeholderTextColor={colors.systemGray1}
            style={!editable ? styles.inputDisable : styles.input}
            onChangeText={handleChangeEvent}
            onBlur={handleBlurEvent}
            {...props}
          />
        </View>
      </View>

      {errors && touched && touched[name] && errors[name] ? (
        <Text style={styles.error}>{errors[name]}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: scale(1),
    borderRadius: scale(6),
    borderColor: colors.systemGray3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: colors.black,
    paddingTop: scale(8),
    marginLeft: scale(7),
    paddingBottom: scale(0),
  },
  inputDisable: {
    color: colors.systemGray1,
    marginLeft: scale(7),
    paddingTop: scale(8),
    paddingBottom: scale(0),
  },
  label: {
    marginLeft: scale(5),
    color: colors.black,
    fontSize: fontSize.size17,
  },
  required: {
    color: colors.red,
  },
  error: {
    marginLeft: scale(7),
    color: colors.red,
    fontSize: fontSize.size11,
    marginTop: scale(5),
  },
  iconBan: {
    position: 'absolute',
    right: scale(5),
    bottom: scale(5),
  },
});

export default InputForm;

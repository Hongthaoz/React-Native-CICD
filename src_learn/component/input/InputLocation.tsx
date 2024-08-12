import React from 'react';
import { View, StyleSheet, TextInput, Platform, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import { Text } from '../text';
import { Button } from '../button';
import { colors, fontSize } from '../../constant';
import { scale } from '../../utils/resolutions';

interface InputLocationProps {
  label: string;
  values: Record<string, string>;
  name: string;
  style?: ViewStyle;
  errors?: Record<string, string>;
  touched?: Record<string, boolean>;
  required?: boolean;
  onPress?: () => void;
  find?: boolean;
  editable?: boolean;
}

const InputLocation: React.FC<InputLocationProps> = ({
  label,
  values,
  name,
  style,
  errors,
  touched,
  required,
  onPress = () => { },
  find,
  editable,
  ...rest
}) => {

  return (
    <View {...{ style }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text bold style={styles.label}>
            {label}
            {required}
          </Text>
          {find ? (
            <Button style={styles.btnAutoGetLocation} onPress={onPress}>
              <Ionicons
                name="search-outline"
                size={scale(12)}
                color={colors.white}
                style={styles.iconSearch}
              />
              <Text style={styles.txtbtnAutoGetLocation}>
                search_by_number
              </Text>
            </Button>
          ) :
            <Button style={editable === false ? styles.btnAutoGetLocationDisable : styles.btnAutoGetLocation} onPress={onPress}>
              <Text style={styles.txtbtnAutoGetLocation}>
                current_location
              </Text>
            </Button>}
        </View>
        <View>
          {editable === false ?
            <Entypo
              size={scale(18)}
              name={'block'}
              style={styles.iconBan}
              color={'#F58C8D'}
            /> : null}
          <TextInput
            multiline={true}
            textAlignVertical='center'
            autoCapitalize="none"
            editable={editable}
            selectTextOnFocus={false}
            placeholderTextColor={colors.systemGray1}
            style={editable === false ? styles.inputDisable : styles.input}
            {...rest}
          />
        </View>
      </View>

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
    marginBottom: scale(Platform.OS === 'ios' ? 6 : -6)
  },
  input: {
    color: colors.black,
    marginLeft: scale(7),
    fontSize: fontSize.size14,
    paddingBottom: scale(Platform.OS === "ios" ? 3 : 0),
  },
  inputDisable: {
    color: colors.systemGray1,
    marginLeft: scale(7),
    fontSize: fontSize.size14,
    paddingBottom: scale(Platform.OS === "ios" ? 3 : 0),
  },
  label: {
    marginLeft: scale(5),
    marginVertical: scale(5),
    color: colors.black,
    fontSize: fontSize.size16,
  },
  required: {
    color: colors.red,
  },
  error: {
    color: colors.red,
    fontSize: fontSize.size11,
    marginTop: scale(5),
  },
  btnAutoGetLocation: {
    flexDirection: 'row',
    backgroundColor: colors.red,
    paddingVertical: scale(4),
    paddingHorizontal: scale(10),
    borderRadius: scale(4),
    marginLeft: scale(12),
  },
  btnAutoGetLocationDisable: {
    flexDirection: 'row',
    backgroundColor: colors.systemGray2_1,
    paddingVertical: scale(4),
    paddingHorizontal: scale(10),
    borderRadius: scale(4),
    marginLeft: scale(12),
  },
  txtbtnAutoGetLocation: {
    color: colors.white,
    fontSize: fontSize.size14,
  },
  iconBan: {
    position: 'absolute',
    right: scale(5),
    bottom: scale(5),
  },
  iconSearch: {
    marginTop: scale(2)
  }
});

export default InputLocation;
import React from 'react';
import {View, StyleSheet, TouchableOpacity,ViewStyle} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {scale, wScale} from '../../utils/resolutions';
import {colors} from '../../constant';

interface AddBtnProps {
  style?: ViewStyle;
  onPress: () => void;
}

const AddBtn: React.FC<AddBtnProps> = ({ style, onPress }) => {
  return (
    <View style={style}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnSelectMonitor}
        onPress={onPress}
      >
        <MaterialIcons name="add" size={scale(22)} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  btnSelectMonitor: {
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: wScale(36),
    padding: scale(10),
    height: wScale(36),
    borderRadius: wScale(36),
    backgroundColor: colors.red,
  },
});

export default AddBtn;
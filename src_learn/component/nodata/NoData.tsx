import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Text } from '../text';
import { colors, fontSize } from '../../constant';
import { scale } from '../../utils/resolutions';

const Nodata = () => {

  return (
    <View style={styles.noData}>
      <Text style={styles.titleNoData}>nodata_title</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noData: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(15),
  },
  titleNoData: {
    color: colors.black,
    fontSize: fontSize.size15,
    fontStyle: 'italic',
  },
});

export default Nodata;

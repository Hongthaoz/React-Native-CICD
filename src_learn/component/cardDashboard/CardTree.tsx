import React from 'react';
import { View, StyleSheet } from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import moment from 'moment';

import { Text } from '../text';
import { Button } from '../button';
import { colors, fontSize } from '../../constant';
import { scale } from '../../utils/resolutions';

interface CardTreeProps {
  item: {
    TreeName: string;
    TreeNumber: string;
    FullAddress: string;
    UpdateTime: string;
  };
  onPress: () => void;
}

const CardTree: React.FC<CardTreeProps> = ({ item, onPress }) => {
  return (
    <Button style={styles.btnStaionName} {...{ onPress }}>
      <Text bold style={styles.stationName}>
        {item.TreeName + ' - ' + `(${item.TreeNumber})`}
      </Text>
      <View style={styles.addressContainer}>
        <View style={styles.mapIcon}>
          <MCIcons name="tree" size={scale(16)} color={colors.red} />
        </View>
        <Text style={styles.addressContainer}>{item.FullAddress}</Text>
      </View>
      <View style={styles.timeStatusContainer}>
        <View style={styles.timeContainer}>
          <Fontisto name="clock" size={scale(16)} color={colors.black} />
          <Text style={styles.time}>
            {`${moment(item.UpdateTime).format('DD/MM/YYYY HH:mm:ss')} - `}
          </Text>
        </View>
      </View>
    </Button>
  );
};

const styles = StyleSheet.create({
  btnStaionName: {
    borderBottomWidth: scale(0.8),
    marginBottom: scale(6),
    paddingBottom: scale(5),
    borderBottomColor: colors.systemGray1,
  },
  stationName: {
    color: colors.black,
    width: '98%',
    fontSize: fontSize.size16,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(5),
    marginTop: scale(4),
    marginBottom: scale(8),
  },
  mapIcon: {
    width: '5%',
  },
  stationAddress: {
    color: colors.black,
    fontSize: fontSize.size16,
    marginLeft: scale(2),
    width: '94%',
  },
  timeStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: scale(4),
    marginBottom: scale(5),
  },
  time: {
    fontSize: fontSize.size16,
    color: colors.black,
    marginLeft: scale(4),
  },
});

export default CardTree;

import React from 'react';
import { View, StyleSheet, Image,ImageSourcePropType, ViewStyle } from 'react-native';

import { Text } from '../text';
import { colors, fontSize } from '../../constant';
import { scale, wScale } from '../../utils/resolutions';

interface CardProp{
  title: string;
  value: string;
  img?: ImageSourcePropType;
  style?: ViewStyle;
}

const Card: React.FC<CardProp> = ({ title, value, img, style }) => {
  return (
    <View style={styles.imgValueCard}>
      <View style={styles.imgCard}>
        {img ? <Image source={img} style={styles.image} /> : null}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.value}>
          {value}
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  imgCard: {
    flexDirection: 'row',
  },
  image: {
    width: wScale(18),
    height: undefined,
    aspectRatio: 300 / 300,
  },
  imgValueCard: {
    marginVertical: scale(3)
  },
  contentCard: {
    paddingLeft: scale(8),
  },
  title: {
    color: colors.black,
    fontSize: fontSize.size15,
    marginLeft: scale(3),
  },
  value: {
    width: '70%',
    color: colors.black,
    fontSize: fontSize.size15,
  },
});

export default Card;

import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';

import { Text } from '../text';
import { colors, fontSize } from '../../constant';
import { scale, wScale } from '../../utils/resolutions';

interface CardTextProps {
  title: string;
  value: string;
  img?: ImageSourcePropType;
}

const CardText: React.FC<CardTextProps> = ({ title, value, img }) => {
  return (
    <View style={styles.imgValueCard}>
      <View style={styles.imgCard}>
        {img ? <Image source={img} style={styles.image} /> : null}
        <Text style={styles.value}>
          {value}
        </Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imgCard: {},
  image: {
    width: wScale(35),
    height: undefined,
    aspectRatio: 300 / 300,
  },
  imgValueCard: {
    alignItems: 'center',
    marginTop: scale(2),
  },
  title: {
    fontSize: fontSize.size12,
    color: colors.systemGray1,
  },
  value: {
    fontSize: fontSize.size16,
    color: colors.systemGreen,
    fontWeight: '600',
    marginBottom: scale(3),
  },
});

export default CardText;

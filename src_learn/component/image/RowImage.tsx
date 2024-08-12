import React from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import { Button, Text } from '../../component';
import { colors, fontSize } from '../../constant';
import { hScale, scale } from '../../utils/resolutions';

interface RowImageProps {
  path?: string;
  ImageLink: string;
  remove: (path: string) => void;
  pressImage: () => void;
  hasRemove: boolean;
}

const RowImage: React.FC<RowImageProps> = ({ path, ImageLink, remove, pressImage, hasRemove }) => {

  const handleDelete = async () => {
    try {
      remove(path ? path : ImageLink);
      await Promise.resolve();
    } catch (error) {
      Alert.alert(`notify`, `try_again`, [
        { text: `alert_btn_cancel`, style: 'cancel' },
      ]);
    }
  };

  const alertDelete = () => {
    Alert.alert(
      `alert_delete_image_title`,
      `confirm_delete_image`,
      [
        { text: `alert_btn_cancel`, style: 'cancel' },
        { text: `deploy_yes_alert`, onPress: () => handleDelete() },
      ],
    );
  };

  return (
    <View style={styles.boxImage}>
      <Button style={styles.viewImage} onPress={pressImage}>
        <Image
          source={{
            uri: `${path ? path : ImageLink}`,
          }}
          style={styles.image}
        />
      </Button>
      {hasRemove ? (
        <View style={styles.infoImage}>
          <Button style={styles.btnRemove} onPress={alertDelete}>
            <Feather
              size={scale(14)}
              name="trash-2"
              color={colors.systemGray1}
            />
            <Text style={styles.textRemove}>text_delete_image</Text>
          </Button>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  boxImage: {
    width: '46%',
    marginTop: scale(6),
    borderRadius: scale(4),
  },
  viewImage: {
    width: '100%',
    height: hScale(95),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  infoImage: {
    alignItems: 'flex-end',
  },
  btnRemove: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(8),
    paddingTop: scale(20),
    paddingBottom: scale(4),
  },
  textRemove: {
    color: colors.systemGray1,
    marginLeft: scale(3),
    fontSize: fontSize.size15,
  },
});

export default RowImage;

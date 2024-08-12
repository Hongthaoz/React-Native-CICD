import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isTablet } from 'react-native-device-info';

import routes from '../../modules/routes';
import { Text } from '../text';
import { Button } from '../button';
import { colors, fontSize } from '../../constant';
import { hScale, scale, wScale } from '../../utils/resolutions';

interface HeaderBackProp {
  title: string;
  iconBack?: boolean;
  isContractScreen?: boolean;
}

type RootStackParamList = {
  [key in keyof typeof routes]: undefined;
};

const HeaderBack: React.FC<HeaderBackProp> = ({ title, iconBack, isContractScreen }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goBack = () => {
    if (isContractScreen) {
      navigation.navigate(routes.HomeScreen);
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={[styles.container, iconBack ? styles.container : styles.containerNoIcon]}>
      {iconBack && (
        <Button onPress={goBack} style={styles.btnGoBack}>
          <Ionicons name="chevron-back" color={colors.white} size={isTablet() ? scale(15) : scale(22)} />
        </Button>
      )}
      <Text bold style={styles.title}>
        {title}
      </Text>
      <View style={styles.emptyView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.systemGreen,
    height: hScale(50),
  },
  containerNoIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.systemGreen,
    height: hScale(45),
  },
  btnGoBack: {
    padding: scale(10),
  },
  title: {
    color: colors.white,
    fontSize: fontSize.size20,
  },
  emptyView: {
    width: wScale(36),
  },
});

export default HeaderBack;

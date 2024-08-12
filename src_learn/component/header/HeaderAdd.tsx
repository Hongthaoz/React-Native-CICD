import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { isTablet } from 'react-native-device-info';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import routes from '../../modules/routes';
import { Text } from '../text';
import { Button } from '../button';
import { hScale, scale } from '../../utils/resolutions';
import { colors, fontSize } from '../../constant';

interface HeaderAddProp {
  title: string;
  isContractScreen?: boolean;
  treeNumber?: number;
}

type RootStackParamList = {
  HomeScreen: undefined;
  AddTreeScreen: { title: string; treeNumber?: number };
};

const HeaderAdd: React.FC<HeaderAddProp> = ({ title, isContractScreen, treeNumber }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const goBack = () => {
    if (isContractScreen) {
      navigation.navigate(routes.HomeScreen);
    } else {
      navigation.goBack();
    }
  };

  const goAdd = () => {
    navigation.navigate(routes.AddTreeScreen, { title, treeNumber });
  };

  return (
    <View style={styles.container}>
      <Button onPress={goBack} style={styles.btnGoBack}>
        <Ionicons name="chevron-back" color={colors.white} size={scale(22)} />
      </Button>
      <Text bold style={styles.title}>
        {title}
      </Text>
      <Button onPress={goAdd} style={styles.btnGoBack}>
        <Entypo
          name="plus"
          size={isTablet() ? scale(16) : scale(22)}
          color={colors.white}
        />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.systemGreen,
    paddingLeft: scale(5),
    paddingRight: scale(10),
    height: hScale(50),
  },
  btnGoBack: {
    padding: scale(10),
  },
  title: {
    color: colors.white,
    fontSize: fontSize.size20,
  },
});

export default HeaderAdd;

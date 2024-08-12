import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { isTablet } from 'react-native-device-info';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Text } from '../text';
import { Button } from '../button';
import { hScale, scale } from '../../utils/resolutions';
import { colors, fontSize } from '../../constant';
import routes from '../../modules/routes';
import Drawer from 'component/Drawer';

interface HeaderHomeProp {
  totalNotify: number;
}

type RootStackParamList = {
  [key in keyof typeof routes]: undefined;
};

const HeaderHome: React.FC<HeaderHomeProp> = ({ totalNotify }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [isShownMenu, setShowMenu] = useState(false);
  let isView = false;

  const handleShownMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  const gotoNotify = () => {
    isView = true;
    navigation.navigate(routes.NotificationScreen)
  };

  return (
    <>
      <View style={styles.container}>
        <Button onPress={handleShownMenu} style={styles.btnMenu}>
          <Feather
            name="menu"
            size={isTablet() ? scale(16) : scale(22)}
            color={colors.white}
          />
        </Button>
        <Text bold style={styles.title}>
          Thu thập dữ liệu
        </Text>
        <Button onPress={gotoNotify} style={styles.btnNoti}>
          {totalNotify > 0 ? <Text
            bold
            style={[
              totalNotify < 10
                ? styles.textTotalNotiOneNum
                : totalNotify >= 99
                  ? styles.textTotalNotiThreeNum
                  : styles.textTotalNotiTwoNum,
            ]}>
            {totalNotify ? (totalNotify < 99 ? totalNotify : '99+') : ''}
          </Text> : null}
          <Feather
            name="bell"
            size={isTablet() ? scale(16) : scale(23)}
            color={colors.white}
          />
        </Button>
      </View>
      <Drawer {...{ isShownMenu, handleCloseMenu }} />
    </>
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
  title: {
    color: colors.white,
    fontSize: fontSize.size20,
  },
  btnMenu: {
    padding: scale(10),
  },
  btnNoti: {
    padding: scale(12),
  },
  textTotalNotiOneNum: {
    color: colors.white,
    position: 'absolute',
    fontSize: fontSize.size11,
    top: scale(4),
    right: scale(10),
  },
  textTotalNotiTwoNum: {
    color: colors.white,
    position: 'absolute',
    fontSize: fontSize.size11,
    top: scale(4),
    right: scale(10),
  },
  textTotalNotiThreeNum: {
    color: colors.white,
    position: 'absolute',
    fontSize: fontSize.size11,
    top: scale(4),
    right: -1,
  },
});

export default HeaderHome;

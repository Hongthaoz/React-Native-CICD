import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image, Alert } from 'react-native';
import Modal from 'react-native-modal';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DeviceInfo from 'react-native-device-info';
import messaging from '@react-native-firebase/messaging';
import { isIphoneX } from 'react-native-iphone-x-helper';

import routes from '../modules/routes';
import { Button, Text, LoadingModal } from '../component';
import { colors, fontSize } from '../constant';
import { scale, wScale } from '../utils/resolutions';
import { ApiDeleteTokenFirebase } from '../action/Api';
import { clearToken, clearFcm, getFcmInfo, clearRefreshToken, clearUserInfo } from '../storage';

const Width = Dimensions.get('window').width / 1.45;
const getVersion = DeviceInfo.getVersion();

type RootStackParamList = {
  [key in keyof typeof routes]: undefined;
};

interface ButtonCustomProp {
  Icon: React.ReactNode;
  Title: string;
  handleBtnCustom: () => void;
}

const ButtonCustom: React.FC<ButtonCustomProp> = ({ Icon, Title, handleBtnCustom }) => {
  return (
    <Button onPress={handleBtnCustom} style={styles.buttonCustom}>
      {Icon}
      <Text style={styles.titleBtn}>{Title}</Text>
    </Button>
  );
};

interface DrawerProp {
  isShownMenu: boolean;
  handleCloseMenu: () => void;
}

const Drawer: React.FC<DrawerProp> = ({ isShownMenu, handleCloseMenu }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [isLoading, setLoading] = useState(false);

  const gotoScreen = (route: keyof RootStackParamList) => {
    handleCloseMenu();
    setTimeout(() => {
      navigation.navigate(route);
    }, 290);
  };

  const clearLogout = () => {
    messaging().deleteToken();
    clearFcm();
    clearToken();
    clearRefreshToken();
    clearUserInfo();
    navigation.navigate(routes.LoginScreen);
  };

  const handleLogout = async () => {
    setLoading(true);
    const Token = await getFcmInfo();
    try {
      await ApiDeleteTokenFirebase({ Token });
      clearLogout();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAlertLogout = () => {
    handleCloseMenu();
    Alert.alert(`Logout`, `Confirm logout?`, [
      {
        text: `Cancel`,
        style: 'cancel',
      },
      {
        text: `Yes`,
        onPress: () => handleLogout(),
      },
    ]);
  };

  return (
    <View>
      <Modal
        useNativeDriver
        animationInTiming={400}
        animationOutTiming={400}
        backdropOpacity={0.8}
        animationIn="slideInLeft"
        animationOut="slideOutLeft"
        isVisible={isShownMenu}
        onBackButtonPress={handleCloseMenu}
        onBackdropPress={handleCloseMenu}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.header}>
            <Image style={styles.logo} source={require('../icons/logo_new.png')} />
          </View>
          <View style={styles.modalFeatures}>
            <ButtonCustom
              handleBtnCustom={handleCloseMenu}
              Icon={
                <Entypo name="home" size={scale(22)} color={colors.systemGreen} />
              }
              Title="Home"
            />
            <ButtonCustom
              handleBtnCustom={() => gotoScreen(routes.CollectionHistoryScreen)}
              Icon={
                <FontAwesome5
                  name="history"
                  size={scale(20)}
                  color={colors.systemGreen}
                />
              }
              Title="History"
            />
            <ButtonCustom
              handleBtnCustom={() => gotoScreen(routes.ContactInfoScreen)}
              Icon={
                <MCIcons
                  name="contacts"
                  size={scale(22)}
                  color={colors.systemGreen}
                />
              }
              Title="Contact"
            />
            <ButtonCustom
              handleBtnCustom={() => gotoScreen(routes.SettingScreen)}
              Icon={
                <Ionicons
                  name="md-settings"
                  size={scale(22)}
                  color={colors.systemGreen}
                />
              }
              Title="Settings"
            />
            <ButtonCustom
              handleBtnCustom={() => handleAlertLogout()}
              Icon={
                <MCIcons name="logout" size={scale(22)} color={colors.systemGreen} />
              }
              Title="Logout"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.versionApp}>
              {`Version: ${getVersion}`}
            </Text>
          </View>
        </View>
      </Modal>

      <LoadingModal visible={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
  },
  modalContainer: {
    width: Width,
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    marginTop: isIphoneX() ? scale(90) : scale(55),
    marginBottom: isIphoneX() ? scale(35) : scale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: wScale(120),
    height: undefined,
    aspectRatio: 450 / 500,
    alignSelf: 'center',
  },
  modalFeatures: {
    marginTop: scale(15),
    paddingHorizontal: scale(15),
  },
  buttonCustom: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(10),
  },
  titleBtn: {
    marginLeft: scale(8),
    color: colors.black,
    fontSize: fontSize.size15,
  },
  footer: {
    bottom: isIphoneX() ? scale(30) : scale(28),
    position: 'absolute',
    left: 0,
    right: 0,
  },
  versionApp: {
    textAlign: 'center',
    color: colors.black,
    fontSize: fontSize.size15,
  },
  iconUpdate: {
    marginTop: scale(16),
  },
});

export default Drawer;

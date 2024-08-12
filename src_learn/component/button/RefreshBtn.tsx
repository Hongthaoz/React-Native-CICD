import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { isTablet } from 'react-native-device-info';
import { isIphoneX } from 'react-native-iphone-x-helper';

import { scale, wScale } from '../../utils/resolutions';
import { colors } from '../../constant';
import { LoadingModal } from '../loading';

interface RefreshBtnProps {
  fetchDashboardData: () => Promise<void>;
  getTotalNotify: () => Promise<void>;
}

const RefreshBtn: React.FC<RefreshBtnProps> = ({ fetchDashboardData, getTotalNotify }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleRefresh = async () => {
    setLoading(true);
    try {
      await fetchDashboardData();
      await getTotalNotify();
    } catch (error) {
      console.error('Error refreshing data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnSelectMonitor}
        onPress={handleRefresh}
      >
        <AntDesign
          name="sync"
          size={isTablet() ? scale(12) : scale(16)}
          color={colors.white}
        />
      </TouchableOpacity>
      <LoadingModal visible={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 1,
    right: scale(10),
    bottom: isIphoneX() ? scale(15) : scale(30),
  },
  btnSelectMonitor: {
    elevation: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: wScale(36),
    padding: scale(10),
    height: wScale(36),
    borderRadius: wScale(36),
    backgroundColor: colors.systemGreen,
  },
});

export default RefreshBtn;

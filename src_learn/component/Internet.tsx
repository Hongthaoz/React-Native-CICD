import React, { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { observer } from 'mobx-react';
import { Notifier, NotifierComponents } from 'react-native-notifier';

import { useStore } from '../context';

const STATE = {
  NO_INTERNET: 1,
  RE_CONNECT: 2,
  CONNECTED: 3,
};

const Internet = () => {
  const [connection, setConnection] = useState(STATE.CONNECTED);
  const { languagesStore: { i18n } } = useStore();

  useEffect(() => {
    const subNetInfo = NetInfo.addEventListener(({ isConnected }) => {
      if (isConnected === false) {
        setConnection(STATE.NO_INTERNET);
        Notifier.showNotification({
          duration: 5000,
          title: `${i18n('check_network')}`,
          description: `${i18n('no_network_connect')}`,
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'error',
          },
        });
        handleNetworkError();
      }
    });
    return () => subNetInfo();
  }, []);

  const handleNetworkError = () => {
    const listeningInterval = setInterval(() => {
      NetInfo.fetch().then(state => {
        if (state.isConnected) {
          clearInterval(listeningInterval);
          Notifier.showNotification({
            duration: 3000,
            description: `${i18n('internet_connect')}`,
            Component: NotifierComponents.Alert,
            componentProps: {
              alertType: 'success',
            },
          });
        }
      });
    }, 1500);
  };

  if (connection === STATE.CONNECTED) {
    return null;
  };

  return null;
};

export default observer(Internet);
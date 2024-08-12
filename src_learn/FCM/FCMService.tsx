import messaging, { FirebaseMessagingTypes } from '@react-native-firebase/messaging';
import { Platform } from 'react-native';

type OnRegister = (token: string) => void;
type OnNotification = (notification: FirebaseMessagingTypes.Notification) => void;
type OnOpenNotification = (notification: FirebaseMessagingTypes.Notification) => void;

class FCMService {
  messageListener?: () => void;

  register = (
    onRegister: OnRegister,
    onNotification: OnNotification,
    onOpenNotification: OnOpenNotification
  ): void => {
    this.checkPermission(onRegister);
    this.createNotificationListeners(onRegister, onNotification, onOpenNotification);
  };

  registerAppWithFCM = async (): Promise<void> => {
    if (Platform.OS === 'ios') {
      await messaging().setAutoInitEnabled(true);
    }
  };

  checkPermission = (onRegister: OnRegister): void => {
    messaging()
      .hasPermission()
      .then((authStatus: FirebaseMessagingTypes.AuthorizationStatus) => {
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          this.getToken(onRegister);
        } else {
          this.requestPermission(onRegister);
        }
      })
      .catch((error: any) => {
        console.error('FCM_checkPermission', error);
      });
  };

  getToken = (onRegister: OnRegister): void => {
    messaging()
      .getToken()
      .then((fcmToken: string | undefined) => {
        if (fcmToken) {
          onRegister(fcmToken);
        }
      })
      .catch((error: any) => {
        console.error('FCM_getToken', error);
      });
  };

  requestPermission = async (onRegister: OnRegister): Promise<void> => {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      if (enabled) {
        this.getToken(onRegister);
      }
    } catch (error) {
      console.error('FCM_requestPermission', error);
    }
  };

  deleteToken = (): void => {
    messaging()
      .deleteToken()
      .catch((error: any) => {
        console.error('FCM_deleteToken', error);
      });
  };

  createNotificationListeners = (
    onRegister: OnRegister,
    onNotification: OnNotification,
    onOpenNotification: OnOpenNotification
  ): void => {
    // When the application is running, but in the background
    messaging().onNotificationOpenedApp((remoteMessage: FirebaseMessagingTypes.RemoteMessage | null) => {
      if (remoteMessage) {
        const notification = remoteMessage.notification;
        if (notification) {
          onOpenNotification(notification);
        }
      }
    });

    // When the application is opened from a quit state.
    messaging()
      .getInitialNotification()
      .then((remoteMessage: FirebaseMessagingTypes.RemoteMessage | null) => {
        if (remoteMessage) {
          const notification = remoteMessage.notification;
          if (notification) {
            onOpenNotification(notification);
          }
        }
      });

    // Foreground state messages
    this.messageListener = messaging().onMessage(async (remoteMessage: FirebaseMessagingTypes.RemoteMessage) => {
      if (remoteMessage) {
        const notification = remoteMessage.notification;
        if (notification) {
          onNotification(notification);
        }
      }
    });

    messaging().onTokenRefresh((fcmToken: string) => {
      onRegister(fcmToken);
    });
  };

  unRegister = (): void => {
    if (this.messageListener) {
      this.messageListener();
    }
  };
}

export const fcmService = new FCMService();

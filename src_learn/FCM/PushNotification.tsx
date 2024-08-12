import PushNotification, { Importance, PushNotificationObject } from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Platform } from 'react-native';

interface NotificationData {
  [key: string]: any;
}

interface NotificationOptions {
  vibrate?: boolean;
  vibration?: number;
  priority?: 'high' | 'default';
  importance?: 'high' | 'default';
}

interface IOSNotification {
  alertAction: string;
  category: string;
  userInfo: NotificationData;
}

type OnOpenNotification = (data: any) => void;

class LocalNotificationService {
  configure = (onOpenNotification: OnOpenNotification): void => {
    PushNotification.createChannel(
      {
        channelId: 'com.namlongtek',
        channelName: 'NLT Collect',
        channelDescription: 'A channel to categorise your notifications',
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true,
      },
      (created: boolean) => console.log(`createChannel returned '${created}'`)
    );

    PushNotification.configure({
      onRegister: function (token) {
        // Handle token registration here if needed
      },
      onNotification: function (notification) {
        if (!notification?.data) {
          return;
        }
        onOpenNotification(notification.data);

        if (Platform.OS === 'ios') {
          PushNotificationIOS.requestPermissions();
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        }
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    });

    if (Platform.OS === 'ios') {
      PushNotification.getApplicationIconBadgeNumber((number: number) => {
        if (number > 0) {
          PushNotification.setApplicationIconBadgeNumber(0);
        }
      });
    }
  };

  unregister = (): void => {
    PushNotification.unregister();
  };

  showNotification = (
    id: string,
    title: string,
    message: string,
    data: NotificationData = {},
    options: NotificationOptions = {}
  ): void => {
    PushNotification.localNotification({
      // Android Only Properties
      ...this.buildAndroidNotification(id, title, message, data, options),
      // iOS and Android properties
      channelId: 'com.namlongtek',
      title: title || '',
      message: message || '',
      playSound: true,
      soundName: 'default',
      color: 'red',
      number: 1,
      userInfo: data,
    });
  };

  buildAndroidNotification = (
    id: string,
    title: string,
    message: string,
    data: NotificationData = {},
    options: NotificationOptions = {}
  ): PushNotificationObject => {
    return {
      id: id,
      autoCancel: true,
      largeIcon: 'default',
      smallIcon: 'ic_notification',
      bigText: message || '',
      subText: title || '',
      vibrate: options.vibrate ?? true,
      vibration: options.vibration ?? 300,
      priority: options.priority === 'high' ? 'high' : 'default',
      importance: options.importance === 'high' ? 'high' : 'default',
      userInfo: data,
      message: message || '', 
    };
  };

  buildIOSNotification = (
    data: NotificationData = {},
  ): IOSNotification => {
    return {
      alertAction: 'view',
      category: '',
      userInfo: data,
    };
  };

  cancelAllLocalNotifications = (): void => {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  };

  removeDeliveredNotificationByID = (notificationId: string): void => {
    PushNotification.cancelLocalNotifications({ id: notificationId });
  };
}

export const localNotificationService = new LocalNotificationService();

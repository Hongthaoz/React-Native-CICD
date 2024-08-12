import React from 'react';
import { Notifier, NotifierComponents } from 'react-native-notifier';

type AlertTypes = 'success' | 'warning' | 'error';

interface NotifierAlertProps {
  duration: number;
  title: string;
  message: string;
  type: AlertTypes;
}

const NotifierAlert: React.FC<NotifierAlertProps> = ({ duration, title, message, type }) => {
  Notifier.showNotification({
    duration: duration,
    title: title,
    description: message,
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: type as any,
    },
    containerStyle: {
      marginTop: 30
    }
  });
  return null; // Trả về null vì đây không phải là một component thực sự render
};

export default NotifierAlert;
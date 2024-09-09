import "expo-router/entry";

import * as Notifications from "expo-notifications";
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

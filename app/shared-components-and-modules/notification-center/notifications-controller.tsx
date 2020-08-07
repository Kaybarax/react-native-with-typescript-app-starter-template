//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {isEmptyString, isNullUndefined} from "../../util/util";
import {Alert} from "react-native";

/**
 * sd _ Kaybarax
 * Utility function to handle the custom display of messages.
 * @param notificationType
 * @param message
 * @param toastNotificationAlert
 * @param position
 * @param duration
 */
export function toastNotificationCallback(
    notificationType,
    message,
    toastNotificationAlert,
    position = -100,
    duration = 3500,
) {

  if (isNullUndefined(toastNotificationAlert)) {
    // console.log('Toast Notification not Specified');
    Alert.alert('Alert Error?');
    return;
  }

  let typeOfNotification = 'info';//default to this
  let typeOfNotificationMessage = 'You have not specifiedMessage';//default to this

  toastNotificationAlert.alert = true;
  toastNotificationAlert.position = position;
  toastNotificationAlert.duration = duration;
  toastNotificationAlert.message = !isEmptyString(message) ? message : typeOfNotificationMessage;
  toastNotificationAlert.type = notificationType || typeOfNotification;
  setTimeout(() => {
    toastNotificationAlert.alert = false;
    toastNotificationAlert.message = null;
  }, toastNotificationAlert.duration);

}

export interface ToastNotificationAlertProps {
  alert: boolean,
  message: string,
  type: string,
  duration?: number,
  position?: number,
  activity?: object,
}

/**
 * sd _ Kaybarax
 * @type {{duration: number, activity: null, alert: boolean, position: string, message: null, type: null}}
 */
export const toastNotificationAlertProps : ToastNotificationAlertProps = {
  alert: false,
  message: '',
  type: '',
  duration: 3500,
  position: -100,
  activity: undefined,
};

export interface DropDownNotificationProps {
  closeInterval: 4200,
  startDelta: -100,
  warnColor: "#FFC300",
  infoColor: "#5BC0DE",
  // showCancel={true},
  messageNumOfLines: 4,
  tapToCloseEnabled: true,
  replaceEnabled: true,
  updateStatusBar: false,
  zIndex: 1000000,
  titleStyle: {
    fontSize: 17,
    textAlign: "left",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "transparent"
  }
}

export const dropDownNotificationAlertProps = {
  closeInterval: 4200,
  startDelta: -100,
  warnColor: "#FFC300",
  infoColor: "#5BC0DE",
  // showCancel={true},
  messageNumOfLines: 4,
  tapToCloseEnabled: true,
  replaceEnabled: true,
  updateStatusBar: false,
  zIndex: 1000000,
  titleStyle: {
    fontSize: 17,
    textAlign: "left",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "transparent"
  }
};

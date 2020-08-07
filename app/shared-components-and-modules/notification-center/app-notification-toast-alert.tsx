//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from 'react';
import {dropDownNotificationAlertProps, ToastNotificationAlertProps} from "./notifications-controller";
import DropdownAlert, {DropdownAlertType} from "react-native-dropdownalert";
import RN from 'react-native';

declare interface DropdownNotificationAlertProps {
    dropDownProps: ToastNotificationAlertProps
}

export default class AppNotificationToastAlert
    extends React.Component<DropdownNotificationAlertProps> {

    // componentDidMount() {
    //     this._fetchData();
    // }

    dropDownAlertRef;

    _fireAlert = () => {

        let {message, type} = this.props.dropDownProps;

        try {

            // alertWithType parameters: type, title, message, payload, interval.
            // payload object that includes a source property overrides the image source prop. (optional: object)
            // interval takes precedence over the closeInterval prop. (optional: number)

            let typeOfNotification = 'info';//default to this
            let title = 'Info';//default to this
            let typeOfNotificationMessage = 'You have not specifiedMessage';//default to this

            if (type === 'err' || type === 'error') {
                typeOfNotification = 'error';
                title = 'Error';
            }
            if (type === 'failure' || type === 'fail') {
                typeOfNotification = 'error';
                title = 'Error';
            }
            if (type === 'succ' || type === 'success') {
                typeOfNotification = 'success';
                title = 'Success';
            }
            if (type === 'warn' || type === 'warning') {
                typeOfNotification = 'warning';
                title = 'Warning';
            }
            if (type === 'information') {
                typeOfNotification = 'info';
                title = 'Info';
            }

            this.dropDownAlertRef.alertWithType(typeOfNotification as DropdownAlertType, title, message || typeOfNotificationMessage);

        } catch (error) {
            this.dropDownAlertRef.alertWithType('error', 'Error!', error);
        }

    };

    render() {

        // DropdownAlert must be last component in the document tree.
        // This ensures that it overlaps other UI components.

        let {duration, position} = this.props.dropDownProps;

        this._fireAlert();

        return (
            <RN.View>
                <DropdownAlert
                    ref={ref => this.dropDownAlertRef = ref}
                    closeInterval={duration || dropDownNotificationAlertProps.closeInterval}
                    startDelta={position || dropDownNotificationAlertProps.startDelta}
                    warnColor={dropDownNotificationAlertProps.warnColor}
                    infoColor={dropDownNotificationAlertProps.infoColor}
                    showCancel={true}
                    messageNumOfLines={dropDownNotificationAlertProps.messageNumOfLines}
                    tapToCloseEnabled={dropDownNotificationAlertProps.tapToCloseEnabled}
                    updateStatusBar={dropDownNotificationAlertProps.updateStatusBar}
                    zIndex={dropDownNotificationAlertProps.zIndex}
                    titleStyle={dropDownNotificationAlertProps.titleStyle}
                />
            </RN.View>
        );
    }

}

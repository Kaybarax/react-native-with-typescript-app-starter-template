//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import {textValueChanged} from "../../util/data-collection-utils";
import {isEmptyString} from "../../util/util";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import AppTextInput from "../../shared-components-and-modules/form-controls/app-text-input";
import {SCREEN_HEIGHT} from "../../../App";
import {
    AlignCenterContentCN,
    AllViewsCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../../theme/app-layout-styles-classnames";
import {handleLogin} from "../../controllers/login-controller";
import className from "../../util/react-native-based-utils";
import {RegistrationButtonTextCN} from "../../theme/app-text-styles-classnames";

export default function LoginForm(props) {

    let {loginModel, toastNotificationAlert, appStore, authStore, navigation} = props;

    let [submit_pressed, set_press_submit] = React.useState(false);

    let isValidFormData = () => {

        let validForm = true;
        set_press_submit(false);//assume not pressed

        if (isEmptyString(loginModel['username_or_email'])) {
            validForm = false;
            set_press_submit(true);
            return validForm;
        }
        if (isEmptyString(loginModel['password'])) {
            validForm = false;
            set_press_submit(true);
            return validForm;
        }

        return validForm;

    }

    return (
        <ScrollView
            style={[
                ...className(AllViewsCN,
                    FlexColumnContainerCN),
            ]}
        >
            {
                submit_pressed && isEmptyString(loginModel.username_or_email) &&
                <Text style={{color: 'red'}}> * This field is required.</Text>
            }
            <View style={{height: 10}}/>
            <AppTextInput
                label="Username/Email"
                onTextChange={text => textValueChanged(loginModel, text, 'username_or_email', null)}
            />
            <View style={{height: 10}}/>
            {
                submit_pressed && isEmptyString(loginModel.password) &&
                <Text style={{color: 'red'}}> * This field is required.</Text>
            }
            <View style={{height: 10}}/>
            <AppTextInput
                label="Password"
                onTextChange={text => textValueChanged(loginModel, text, 'password', null)}
                secureTextEntry={true}
            />
            <View style={{height: 20}}/>
            <TouchableOpacity
                style={[
                    ...className(AllViewsCN,
                        FlexFluidRowContainerCN),
                    {
                        backgroundColor: 'orange',
                        height: 0.06 * SCREEN_HEIGHT,
                        elevation: 2,
                        borderRadius: 8
                    }
                ]}
                onPress={_ => {
                    if (!isValidFormData()) {
                        return;
                    }
                    handleLogin(loginModel, toastNotificationAlert, appStore, authStore, navigation);
                }}
            >
                <Text
                    style={[
                        ...className(AllViewsCN,
                            FlexContainerChildItemFullWidthCN,
                            AlignCenterContentCN,
                            RegistrationButtonTextCN)
                    ]}
                >
                    Login
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

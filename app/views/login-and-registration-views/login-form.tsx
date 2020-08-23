//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import {textValueChanged} from "../../util/react-native-data-collection-utils";
import {isEmptyString} from "../../util/util";
import RN, {ScrollView, Text, TouchableOpacity} from "react-native";
import AppTextInput from "../../shared-components-and-modules/form-controls/app-text-input";
import {SCREEN_HEIGHT} from "../../App";
import {
    AlignCenterContentCN,
    AlignRightFlexContainerContentCN,
    AllViewsCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../../theme/app-layout-styles-classnames";
import {handleLogin} from "../../controllers/login-controller";
import className from "../../util/react-native-based-utils";
import {RegistrationButtonTextCN, UnderlinedTextCN} from "../../theme/app-text-styles-classnames";
import {BlankSpaceDivider} from "../../shared-components-and-modules/shared-components";
import {notificationCallback} from "../../shared-components-and-modules/notification-center/notifications-controller";

export default function LoginForm(props) {

    let {loginModel, login, notificationAlert, appStore, authStore, navigation} = props;

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
            <BlankSpaceDivider/>
            <AppTextInput
                label="Username/Email"
                onTextChange={text => textValueChanged(loginModel, text, 'username_or_email', null)}
            />
            <BlankSpaceDivider/>
            {
                submit_pressed && isEmptyString(loginModel.password) &&
                <Text style={{color: 'red'}}> * This field is required.</Text>
            }
            <BlankSpaceDivider/>
            <AppTextInput
                label="Password"
                onTextChange={text => textValueChanged(loginModel, text, 'password', null)}
                secureTextEntry={true}
            />
            <BlankSpaceDivider/>
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
                    handleLogin(loginModel, notificationAlert, appStore, authStore, navigation);
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
            <BlankSpaceDivider height={25}/>
            <TouchableOpacity
                style={[
                    ...className(
                        AllViewsCN,
                        FlexContainerChildItemFullWidthCN
                    ),
                ]}
                onPress={_ => {
                    //todo: will be done
                    notificationCallback('info', 'I can leave this one to you mate! Cheers!',
                        notificationAlert);
                }}
            >
                <Text
                    style={[
                        ...className(AllViewsCN,
                            AlignRightFlexContainerContentCN),
                        {
                            fontSize: 18,
                            padding: 5
                        }
                    ]}
                >
                    <RN.Text
                        style={[
                            {
                                color: 'teal'
                            },
                            ...className(UnderlinedTextCN)
                        ]}
                    >
                        Forgot password?&nbsp;
                    </RN.Text>
                </Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

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
    AlignCenterTextCN,
    AlignRightFlexContainerContentCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../../theme/app-layout-styles-classnames";
import {handleLogin} from "../../controllers/login-controller";
import className from "../../util/react-native-based-utils";
import {RegistrationButtonTextCN, UnderlinedTextCN} from "../../theme/app-text-styles-classnames";
import {BlankSpaceDivider} from "../../shared-components-and-modules/shared-components";
import appNavigation from "../../routing-and-navigation/app-navigation";

export default function LoginForm(props) {

    let {login, notificationAlert, appStore, authStore, navigation} = props;
    let loginModel = login.loginForm;

    let [submit_pressed, set_press_submit] = React.useState(false);

    let isValidFormData = () => {

        let validForm = true;
        set_press_submit(false);//assume not pressed

        if (isEmptyString(loginModel['usernameOrEmail'])) {
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
                className(
                    FlexColumnContainerCN),
            ]}
        >
            {
                submit_pressed && isEmptyString(loginModel.usernameOrEmail) &&
                <Text style={{color: 'red'}}> * This field is required.</Text>
            }
            <BlankSpaceDivider/>
            <AppTextInput
                label="Username/Email"
                onChangeText={text => textValueChanged(loginModel, text, 'usernameOrEmail', null)}
            />
            <BlankSpaceDivider/>
            {
                submit_pressed && isEmptyString(loginModel.password) &&
                <Text style={{color: 'red'}}> * This field is required.</Text>
            }
            <BlankSpaceDivider/>
            <AppTextInput
                label="Password"
                onChangeText={text => textValueChanged(loginModel, text, 'password', null)}
                secureTextEntry={true}
            />
            <BlankSpaceDivider/>
            <TouchableOpacity
                activeOpacity={.2}
                style={[
                    className(
                        FlexFluidRowContainerCN,
                    ),
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
                        className(
                            FlexContainerChildItemFullWidthCN,
                            AlignCenterTextCN,
                            RegistrationButtonTextCN
                        )
                    ]}
                >
                    Login
                </Text>
            </TouchableOpacity>
            <BlankSpaceDivider height={25}/>
            <TouchableOpacity
                activeOpacity={.2}
                style={[
                    className(
                        FlexContainerChildItemFullWidthCN,
                        AlignRightFlexContainerContentCN
                    ),
                ]}
                onPress={_ => {
                    //todo: will be done
                    // notificationCallback('info', 'I can leave this one to you mate! Cheers!',
                    //     notificationAlert);

                    //test access to recipe box app
                    appNavigation.loginToRecipeBox(navigation, null);
                }}
            >
                <Text
                    style={[
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
                            className(UnderlinedTextCN)
                        ]}
                    >
                        Forgot password?&nbsp;
                    </RN.Text>
                </Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

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
import RN, {ScrollView, Text, TouchableOpacity, View} from "react-native";
import AppTextInput from "../../shared-components-and-modules/form-controls/app-text-input";
import {SCREEN_HEIGHT} from "../../App";
import {
    AlignCenterContentCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../../theme/app-layout-styles-classnames";
import {handleSignUp} from "../../controllers/login-controller";
import className from "../../util/react-native-based-utils";
import {RegistrationButtonTextCN} from "../../theme/app-text-styles-classnames";

export default function SignUpForm(props) {

    let {signUpModel, notificationAlert, showLoginForm, appStore} = props;

    let [submit_pressed, set_press_submit] = React.useState(false);

    let isValidFormData = () => {

        let validForm = true;
        set_press_submit(false);//assume not pressed

        if (isEmptyString(signUpModel.user['name'])) {
            validForm = false;
            set_press_submit(true);
            return validForm;
        }
        if (isEmptyString(signUpModel.user['username_or_email'])) {
            validForm = false;
            set_press_submit(true);
            return validForm;
        }
        if (isEmptyString(signUpModel.user['password'])) {
            validForm = false;
            set_press_submit(true);
            return validForm;
        }
        if (isEmptyString(signUpModel['confirm_password'])) {
            validForm = false;
            set_press_submit(true);
            return validForm;
        }
        if (signUpModel.user['password'] !== signUpModel['confirm_password']) {
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
                submit_pressed && isEmptyString(signUpModel.user.name) &&
                <Text style={{color: 'red'}}> * This field is required.</Text>
            }
            <View style={{height: 10}}/>
            <AppTextInput
                label="Name"
                onTextChange={value => textValueChanged(signUpModel.user, value, 'name', null)}
            />
            <View style={{height: 10}}/>
            {
                submit_pressed && isEmptyString(signUpModel.user.username_or_email) &&
                <Text style={{color: 'red'}}> * This field is required.</Text>
            }
            <View style={{height: 10}}/>
            <AppTextInput
                label="Username/Email"
                onTextChange={value => textValueChanged(signUpModel.user, value, 'username_or_email', null)}
            />
            <View style={{height: 10}}/>
            {
                submit_pressed && isEmptyString(signUpModel.user.password) &&
                <Text style={{color: 'red'}}> * This field is required.</Text>
            }
            <View style={{height: 10}}/>
            <AppTextInput
                secureTextEntry={true}
                label="Password"
                onTextChange={value => textValueChanged(signUpModel.user, value, 'password', null)}
            />
            <View style={{height: 10}}/>
            {
                submit_pressed && isEmptyString(signUpModel.confirm_password) &&
                <Text style={{color: 'red'}}> * This field is required.</Text>
            }
            <View style={{height: 10}}/>
            <AppTextInput
                secureTextEntry={true}
                label="Confirm Password"
                onTextChange={value => textValueChanged(signUpModel, value, 'confirm_password', null)}
            />
            <View style={{height: 10}}/>
            {
                submit_pressed &&
                (signUpModel.user.password !== signUpModel.confirm_password) &&
                <Text style={{color: 'red'}}>Passwords do not match.</Text>
            }
            <View style={{height: 10}}/>
            <TouchableOpacity
                activeOpacity={.2}
                style={[
                    className(
                        FlexFluidRowContainerCN),
                    {
                        backgroundColor: 'orange',
                        height: 0.06 * SCREEN_HEIGHT,
                        elevation: 2,
                        borderRadius: 8
                    }
                ]}
                onPress={async _ => {
                    if (!isValidFormData()) {
                        return;
                    }
                    signUpModel.user.status_ref_key_key = "STATUS";
                    signUpModel.user.status_ref_key_value = "ACT";
                    handleSignUp(signUpModel, appStore, notificationAlert);
                    //ready for next user
                    //some time to allow the alert to display
                    // setTimeout(_ => showLoginForm(), 1500);
                }}
            >
                <Text
                    style={[
                        className(
                            FlexContainerChildItemFullWidthCN,
                            AlignCenterContentCN,
                            RegistrationButtonTextCN),
                    ]}
                >Sign Up</Text>
            </TouchableOpacity>
            <View style={{height: 10}}/>
            <Text>Your sign up data is stored locally in SQLite Storage</Text>
        </ScrollView>
    );
}

//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from 'react';
import {inject, observer} from "mobx-react";
import {isNullUndefined, isTrue} from "../../util/util";
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import LoginForm from "./login-form";
import SignUpForm from "./sign-up-form";
import {displayFieldExpectationSatisfied} from "../../controllers/app-controller";
import {LOGIN_PAGE_ACTIONS} from "../../stores/stores-data-store";
import {User} from "../../app-management/data-manager/models-manager";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import Loader from "../../shared-components-and-modules/loaders";
import className, {
    AlignCenterContentCN,
    AllViewsCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexContainerChildItemOneHalfWidthCN,
    FlexFluidRowContainerCN
} from "../../theme/app-style-classnames";

function Login(props) {

    const {
        navigation,
        authStore,
        appStores: {app},
        authStore: {
            login,
            login: {toastNotificationAlert}
        },
    } = props;

    const showLoginForm = () => {
        login.pageAction = LOGIN_PAGE_ACTIONS.LOGIN;
    };

    const showSignUpForm = () => {
        login.signUpForm.user = new User();
        login.pageAction = LOGIN_PAGE_ACTIONS.SIGN_UP;
    };

    // const showResetPasswordForm = () => {
    //     login.pageAction = LOGIN_PAGE_ACTIONS.RESET_PASSWORD;
    // };

    let showLogin = (
        displayFieldExpectationSatisfied('pageAction', login,
            expectationOfX => isNullUndefined(expectationOfX))
        ||
        displayFieldExpectationSatisfied('pageAction', login,
            expectationOfX => expectationOfX === LOGIN_PAGE_ACTIONS.LOGIN)
    );

    let showSignUp = displayFieldExpectationSatisfied('pageAction', login,
        expectationOfX => expectationOfX === LOGIN_PAGE_ACTIONS.SIGN_UP);

    let showResetPassword = displayFieldExpectationSatisfied('pageAction', login,
        expectationOfX => expectationOfX === LOGIN_PAGE_ACTIONS.RESET_PASSWORD);

    return (
        <ScrollView
            style={[
                ...className(AllViewsCN,
                    FlexColumnContainerCN),
                {backgroundColor: 'skyblue'}
            ]}
        >
            <View
                style={[
                    ...className(AllViewsCN,
                        FlexContainerChildItemFullWidthCN),
                ]}
            >
                <View
                    style={[
                        ...className(AllViewsCN,
                            FlexFluidRowContainerCN),
                    ]}
                >
                    <View
                        style={[
                            ...className(AllViewsCN,
                                FlexContainerChildItemFullWidthCN),
                        ]}
                    >
                        <View
                            style={[
                                ...className(AllViewsCN,
                                    FlexFluidRowContainerCN),
                            ]}
                        >
                            <TouchableOpacity
                                style={[
                                    ...className(AllViewsCN,
                                        FlexContainerChildItemOneHalfWidthCN),
                                    {
                                        backgroundColor: `${showLogin ? 'wheat' : 'thistle'}`,
                                        margin: 2,
                                        flexBasis: '48%',
                                        borderRadius: 10,
                                    }
                                ]}
                                onPress={_ => {
                                    showLoginForm();
                                }}
                            >
                                <Text
                                    style={[
                                        ...className(AllViewsCN,
                                            AlignCenterContentCN),
                                        {
                                            fontSize: 18,
                                            padding: 5
                                        }
                                    ]}
                                >
                                    Login
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    ...className(AllViewsCN,
                                        FlexContainerChildItemOneHalfWidthCN),
                                    {
                                        backgroundColor: `${showSignUp ? 'wheat' : 'thistle'}`,
                                        margin: 2,
                                        flexBasis: '48%',
                                        borderRadius: 10,
                                    }
                                ]}
                                onPress={_ => {
                                    showSignUpForm();
                                }}
                            >
                                <Text
                                    style={[
                                        ...className(AllViewsCN,
                                            AlignCenterContentCN),
                                        {
                                            fontSize: 18,
                                            padding: 5
                                        }
                                    ]}
                                >
                                    Sign Up
                                </Text>
                            </TouchableOpacity>
                            <View
                                style={[
                                    ...className(AllViewsCN),
                                    {height: 10}
                                ]}
                            />
                        </View>
                    </View>
                </View>

                {
                    showLogin &&
                    <View
                        style={[
                            ...className(AllViewsCN,
                                FlexContainerChildItemFullWidthCN),
                        ]}
                    >
                      <View
                          style={[
                              ...className(AllViewsCN,
                                  FlexFluidRowContainerCN),
                          ]}
                      >
                        <View
                            style={[
                                ...className(AllViewsCN,
                                    FlexContainerChildItemFullWidthCN),
                            ]}
                        >
                          <LoginForm
                              loginModel={login.loginForm}
                              toastNotificationAlert={toastNotificationAlert}
                              appStore={app}
                              authStore={authStore}
                              navigation={navigation}
                          />
                        </View>
                      </View>
                    </View>
                }

                {
                    showSignUp &&
                    <View
                        style={[
                            ...className(AllViewsCN,
                                FlexContainerChildItemFullWidthCN),
                        ]}
                    >
                      <View
                          style={[
                              ...className(AllViewsCN,
                                  FlexFluidRowContainerCN),
                          ]}
                      >
                        <View
                            style={[
                                ...className(AllViewsCN,
                                    FlexContainerChildItemFullWidthCN),
                            ]}
                        >
                          <SignUpForm
                              signUpModel={login.signUpForm}
                              toastNotificationAlert={toastNotificationAlert}
                              showLoginForm={showLoginForm}
                              appStore={app}
                          />
                        </View>
                      </View>
                    </View>
                }

            </View>

            {
                (login.loading || app.loading) &&
                <Loader message={login.loadingMessage}/>
            }

            {
                (
                    displayFieldExpectationSatisfied('alert', toastNotificationAlert,
                        expectationOfX => isTrue(expectationOfX))
                ) &&
                <View
                    style={[
                        ...className(AllViewsCN),
                        {
                            position: 'absolute', bottom: 0
                        }
                    ]}
                >
                  <AppNotificationToastAlert
                      dropDownProps={toastNotificationAlert}
                  />
                </View>
            }

        </ScrollView>
    );

}

const LoginActivity = (inject('authStore', 'appStores')(observer(Login)));
export default LoginActivity;

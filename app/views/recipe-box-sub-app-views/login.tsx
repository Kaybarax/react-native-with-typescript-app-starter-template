//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from 'react';
import {isNullUndefined, isTrue, makeId} from "../../util/util";
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import LoginForm from "../login-and-registration-views/login-form";
import SignUpForm from "../login-and-registration-views/sign-up-form";
import {displayFieldExpectationSatisfied} from "../../controllers/app-controller";
import {AUTHENTICATION_ACTIONS_ENUM} from "../../stores/actions-and-stores-data";
import {User} from "../../app-management/data-manager/models-manager";
import RN, {ScrollView, Text, TouchableOpacity, View} from "react-native";
import Loader from "../../shared-components-and-modules/loaders";
import {
    AlignCenterContentCN,
    AllViewsCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../../theme/app-layout-styles-classnames";
import className from "../../util/react-native-based-utils";
import {UnderlinedTextCN} from '../../theme/app-text-styles-classnames';
import WithStoresHoc from "../../shared-components-and-modules/hocs/with-stores-hoc";

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
        login.viewAction = AUTHENTICATION_ACTIONS_ENUM.LOGIN;
    };

    const showSignUpForm = () => {
        let user: User = {id: makeId(32)};
        login.signUpForm.user = user;
        login.viewAction = AUTHENTICATION_ACTIONS_ENUM.SIGN_UP;
    };

    // const showResetPasswordForm = () => {
    //     login.viewAction = AUTHENTICATION_ACTIONS_ENUM.RESET_PASSWORD;
    // };
    const showResetPasswordForm = false;

    let showLogin = (
        displayFieldExpectationSatisfied('viewAction', login,
            expectationOfX => isNullUndefined(expectationOfX))
        ||
        displayFieldExpectationSatisfied('viewAction', login,
            expectationOfX => expectationOfX === AUTHENTICATION_ACTIONS_ENUM.LOGIN)
    );

    let showSignUp = displayFieldExpectationSatisfied('viewAction', login,
        expectationOfX => expectationOfX === AUTHENTICATION_ACTIONS_ENUM.SIGN_UP);

    let showResetPassword = displayFieldExpectationSatisfied('viewAction', login,
        expectationOfX => expectationOfX === AUTHENTICATION_ACTIONS_ENUM.RESET_PASSWORD);

    // @ts-ignore
    return (

        <RN.ImageBackground
            // source={require('../../media/images/strawberry-3132973_1920.jpg')}
            // source={require('../../media/images/breakfast-2151201_1920.jpg')}
            source={require('../../media/images/cake-1971556_1920.jpg')}
            // source={require('../../media/images/pasta-794464_1920.jpg')}
            style={[
                {
                    flex: 1,
                    // resizeMode: "cover",
                    justifyContent: "center",
                }
            ]}
        >

            <ScrollView
                contentInsetAdjustmentBehavior={"automatic"}
                style={[
                    ...className(AllViewsCN,
                        FlexColumnContainerCN),
                    {backgroundColor: 'transparent'}
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
                                        ...className(
                                            AllViewsCN,
                                            FlexContainerChildItemFullWidthCN
                                        ),
                                    ]}
                                    onPress={_ => {
                                        if (showLogin && !showResetPasswordForm) {
                                            showSignUpForm();
                                        } else if (showSignUp && !showResetPasswordForm) {
                                            showLoginForm();
                                        }
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
                                        {
                                            showLogin &&
                                            <RN.Text
                                                style={[
                                                    {
                                                        color: 'teal'
                                                    }
                                                ]}
                                            >
                                              Don't have an account?&nbsp;
                                              <RN.Text
                                                  style={[
                                                      ...className(UnderlinedTextCN),
                                                      {
                                                          color: 'maroon'
                                                      }
                                                  ]}
                                              >Register</RN.Text>
                                            </RN.Text>

                                        }
                                        {
                                            showSignUp &&
                                            <RN.Text
                                                style={[
                                                    {
                                                        color: 'teal'
                                                    }
                                                ]}
                                            >
                                              Already have an account?&nbsp;
                                              <RN.Text
                                                  style={[
                                                      ...className(UnderlinedTextCN),
                                                      {
                                                          color: 'maroon'
                                                      }
                                                  ]}
                                              >Login</RN.Text>
                                            </RN.Text>

                                        }
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
        </RN.ImageBackground>
    );

}

const LoginActivity = WithStoresHoc(Login,
    ['authStore', 'appStores']);
export default LoginActivity;

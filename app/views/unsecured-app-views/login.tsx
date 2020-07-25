//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import React from 'react';
import SafeComponentWrapper from "../../safe-component-wrapper";
import {inject, observer} from "mobx-react";
import {isNullUndefined, isTrue} from "../../util/util";
import AppNotificationToastAlert
  from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import LoginForm from "./login-form";
// import SignUpForm from "./sign-up-form";
// import ResetPasswordForm from "./reset-password-form";
import {displayFieldExpectationSatisfied} from "../../controllers/app-controller";
import {LOGIN_PAGE_ACTIONS} from "../../stores/stores-data-store";
// import '../../theme/login-styles.scss';
import {User} from "../../app-management/data-manager/models-manager";
// import appNavigation from "../../routing-and-navigation/app-navigation";
import {View, Text} from "react-native";

function Login(props) {

  const {
    authStore,
    appStores: {app},
    authStore: {
      login,
      login: {toastNotificationAlert}
    },
  } = props;
  console.log('props: ', props)

  const showLoginForm = () => {
    login.pageAction = LOGIN_PAGE_ACTIONS.LOGIN;
  };

  const showSignUpForm = () => {
    login.signUpForm.user = new User();
    login.pageAction = LOGIN_PAGE_ACTIONS.SIGN_UP;
  };

  const showResetPasswordForm = () => {
    login.pageAction = LOGIN_PAGE_ACTIONS.RESET_PASSWORD;
  };

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
      <SafeComponentWrapper>
        <View>
          <View
              // className={'flex-row-container'}
          >
            <View
                // className={'flex-container-child-item center-align-content'}
            >
              <Text
                  // className={`login-action`}
              >
                <Text
                    // className={`${showLogin ? 'selected' : ''}`}
                    // onClick={_ => {
                    //   showLoginForm();
                    // }}
                >Login</Text> |&nbsp;
                <Text
                    // className={`${showSignUp ? 'selected' : ''}`}
                    // onClick={_ => {
                    //   showSignUpForm();
                    // }}
                >Sign Up</Text> |&nbsp;
                <Text
                    // className={`${showResetPassword ? 'selected' : ''}`}
                    // onClick={_ => {
                    //   showResetPasswordForm();
                    // }}
                >Reset Password</Text> |&nbsp;
                <Text
                    // onClick={_ => {
                    //   appNavigation.navigateToAppDevScratchPad(routerStore);
                    // }}
                >Mock Stuff Page</Text>
              </Text>
            </View>
          </View>

          {
            <View
                // className={'flex-row-container'}
            >
              <View
                  // className={'flex-container-child-item center-align-content'}
              >
                <LoginForm
                    loginModel={login.loginForm}
                    toastNotificationAlert={toastNotificationAlert}
                    appStore={app}
                    authStore={authStore}
                />
              </View>
            </View>
          }

          {
            showSignUp &&
            <View
                // className={'flex-row-container'}
            >
              <View
                  // className={'flex-container-child-item center-align-content'}
              >
                {/*<SignUpForm*/}
                {/*    signUpModel={login.signUpForm}*/}
                {/*    toastNotificationAlert={toastNotificationAlert}*/}
                {/*    showLoginForm={showLoginForm}*/}
                {/*/>*/}
              </View>
            </View>
          }

          {
            showResetPassword &&
            <View
                // className={'flex-row-container'}
            >
              <View
                  // className={'flex-container-child-item center-align-content'}
              >
                {/*<ResetPasswordForm*/}
                {/*    resetPasswordModel={login.resetPasswordForm}*/}
                {/*    toastNotificationAlert={toastNotificationAlert}*/}
                {/*/>*/}
              </View>
            </View>
          }

        </View>

        {
          (
              displayFieldExpectationSatisfied('alert', toastNotificationAlert,
                  expectationOfX => isTrue(expectationOfX))
          ) &&
          <View
              style={{
                  position: 'absolute', top: 0
              }}
          >
            <AppNotificationToastAlert
                alert={toastNotificationAlert.alert}
                message={toastNotificationAlert.message}
                type={toastNotificationAlert.type}
                duration={toastNotificationAlert.duration}
                position={toastNotificationAlert.position}
            />
          </View>
        }

      </SafeComponentWrapper>
  );

}

export default (inject('authStore', 'appStores', 'routerStore')(observer(Login)));

//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import React from "react";
import {handleLogin} from "../../controllers/login-controller";
import {textValueChanged} from "../../util/web-forms-data-collection-utils";
import {isEmptyString} from "../../util/util";
import {Button, Text, View, TextInput, Alert} from "react-native";

export default function LoginForm(props) {

  let {loginModel, toastNotificationAlert, appStore, authStore} = props;

  // Alert.alert('loginModel ' + JSON.stringify(loginModel))
  console.log('loginModel: ', loginModel)

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
      <React.Fragment>
        <View
            // className={classes.root} noValidate autoComplete="off"
        >
          {
            submit_pressed && isEmptyString(loginModel.usernameOrEmail) &&
            <Text style={{color: 'red'}}> * This field is required.</Text>
          }
          <Text>{'\n'}</Text>
          <TextInput
              // id="username-or-email"
              placeholder="Username/Email"
              // type={'text'}
              onChange={text => textValueChanged(loginModel, text, 'usernameOrEmail', null)}
          />
          <Text>{'\n'}</Text>
          {
            submit_pressed && isEmptyString(loginModel.password) &&
            <Text style={{color: 'red'}}> * This field is required.</Text>
          }
          <Text>{'\n'}</Text>
          <TextInput
              // id="password"
              placeholder="Password"
              // type={'password'}
              onChange={text => textValueChanged(loginModel, text, 'password', null)}
          />
          <Text>{'\n'}</Text>
          <Button
              title="Login"
              // color="primary" type={'submit'}
              onPress={e => {
                // e.preventDefault();
                if (!isValidFormData()) {
                  return;
                }
                // handleLogin(loginModel, toastNotificationAlert, appStore, authStore);
              }}
          />
        </View>
      </React.Fragment>
  )
}

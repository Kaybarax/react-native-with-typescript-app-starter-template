//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import React from "react";
import {handleSignUp} from "../../controllers/login-controller";
import {textValueChanged} from "../../util/web-forms-data-collection-utils";
import {isEmptyString} from "../../util/util";
import {Button, Text, View} from "react-native";
import { TextField } from "react-native-material-textfield";

export default function SignUpForm(props) {

  let {signUpModel, toastNotificationAlert, showLoginForm} = props;

  let [submit_pressed, set_press_submit] = React.useState(false);

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     '& > *': {
  //       margin: theme.spacing(1),
  //       width: '25ch',
  //     },
  //   },
  // }));
  //
  // const classes = useStyles();

  let isValidFormData = () => {

    let validForm = true;
    set_press_submit(false);//assume not pressed

    if (isEmptyString(signUpModel.user['name'])) {
      validForm = false;
      set_press_submit(true);
      return validForm;
    }
    if (isEmptyString(signUpModel.user['usernameOrEmail'])) {
      validForm = false;
      set_press_submit(true);
      return validForm;
    }
    if (isEmptyString(signUpModel.user['password'])) {
      validForm = false;
      set_press_submit(true);
      return validForm;
    }
    if (isEmptyString(signUpModel['confirmPassword'])) {
      validForm = false;
      set_press_submit(true);
      return validForm;
    }
    if (signUpModel.user['password'] !== signUpModel['confirmPassword']) {
      validForm = false;
      set_press_submit(true);
      return validForm;
    }

    return validForm;

  }

  return (
      <React.Fragment>
        <View
            // className={classes.root}
            // noValidate
            // autoComplete="off"
        >
          {
            submit_pressed && isEmptyString(signUpModel.user.name) &&
            <Text style={{color: 'red'}}> * This field is required.</Text>
          }
          <Text>{'\n'}</Text>
          <TextField
              id="name"
              label="Name" type={'text'}
              onChange={e => textValueChanged(signUpModel.user, e.target.value, 'name', null)}
          />
          <Text>{'\n'}</Text>
          {
            submit_pressed && isEmptyString(signUpModel.user.usernameOrEmail) &&
            <Text style={{color: 'red'}}> * This field is required.</Text>
          }
          <Text>{'\n'}</Text>
          <TextField
              id="username-or-email"
              label="Username/Email" type={'text'}
              onChange={e => textValueChanged(signUpModel.user, e.target.value, 'usernameOrEmail', null)}
          />
          <Text>{'\n'}</Text>
          {
            submit_pressed && isEmptyString(signUpModel.user.password) &&
            <Text style={{color: 'red'}}> * This field is required.</Text>
          }
          <Text>{'\n'}</Text>
          <TextField
              id="password"
              label="Password" type={'password'}
              onChange={e => textValueChanged(signUpModel.user, e.target.value, 'password', null)}
          />
          <Text>{'\n'}</Text>
          {
            submit_pressed && isEmptyString(signUpModel.confirmPassword) &&
            <Text style={{color: 'red'}}> * This field is required.</Text>
          }
          <Text>{'\n'}</Text>
          <TextField
              id="confirmPassword"
              label="Confirm Password" type={'password'}
              onChange={e => textValueChanged(signUpModel, e.target.value, 'confirmPassword', null)}
          />
          <Text>{'\n'}</Text>
          {
            submit_pressed &&
            (signUpModel.user.password !== signUpModel.confirmPassword) &&
            <Text style={{color: 'red'}}>Passwords do not match.</Text>
          }
          <Text>{'\n'}</Text>
          <Button
              // variant="contained"
              title={'Sign Up'}
              // color="primary"
              // type={'submit'}
              onPress={e => {
                // e.preventDefault();

                if (!isValidFormData()) {
                  return;
                }
                handleSignUp(signUpModel, toastNotificationAlert);
                //ready for next user
                //some time to allow the alert to display
                setTimeout(_ => showLoginForm(), 1500);
              }}
          />
          <Text>{'\n'}</Text>
          <Text>Your sign up data is stored locally in your browser's embedded IndexedDb</Text>
        </View>
      </React.Fragment>
  );
}

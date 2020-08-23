//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {notificationCallback} from '../shared-components-and-modules/notification-center/notifications-controller';
import {toJS} from 'mobx';
import {APP_SQLITE_DATABASE} from '../app-management/data-manager/declarations';
import {appSQLiteDb} from '../app-management/data-manager/embeddedDb-manager';
import {User, UserCredentials} from '../app-management/data-manager/models-manager';
import {createPasswordHash} from '../android-custom-native-modules/app-security-custom-native-module';
import {isEmptyString, isNullUndefined} from "../util/util";

/**
 * sd _ Kaybarax
 * @param signUpModel
 * @param appStore
 * @param notificationAlert
 */
export function handleSignUp(signUpModel, appStore, notificationAlert) {

    let userSaved;
    let userCredentialsSaved = false;

    //save to sqlitedb

    let db = APP_SQLITE_DATABASE.DB_REFERENCE;

    // Put the data into the db
    let user: User = toJS(signUpModel.user);

    // get user password salt and hash
    let userCredentials: UserCredentials = {
        username: user.id,
        salt: undefined
    };

    try {
        let yieldedUserCredentials = createPasswordHash(signUpModel.password, userCredentials, notificationAlert);
        let {password_hash, salt}: UserCredentials = yieldedUserCredentials.next().value;
        if (isEmptyString(password_hash) || isNullUndefined(salt)) {
            notificationCallback(
                'err',
                'Sign up failed',
                notificationAlert,
            );
            return;
        }

        //put user in db
        userSaved = appSQLiteDb.addUserStmt(db, user);
        // userSaved = true;
        //put user credentials in db
        appSQLiteDb.addUserCredentialsStmt(db, userCredentials);
        userCredentialsSaved = true;

        notificationCallback(
            'succ',
            'User signed up',
            notificationAlert,
        );

    } catch (err) {

        if (!userSaved) {
            //todo: rollback
        }

        notificationCallback(
            'err',
            'User sign up failed',
            notificationAlert,
        );
        return;
    }

}

/**
 * sd _ Kaybarax
 * @param loginForm
 * @param notificationAlert
 * @param appStore
 * @param authStore
 * @param navigation
 */
export function handleLogin(loginForm, notificationAlert, appStore, authStore, navigation) {

    notificationCallback(
        'info',
        'Signup Functionality upcoming',
        notificationAlert,
    );

    // let db = window.db;//get db;
    // // Set up an object store and transaction
    // let tx = db.transaction([APP_SQLITE_DATABASE.USERS], 'readonly');
    // let store = tx.objectStore(APP_SQLITE_DATABASE.USERS);
    //
    // // Set up a request to get all users
    // let req = store.getAll();
    //
    // // If we get an error
    // req.onerror = function (event) {
    //   console.log('error getting users ', event.target.errorCode);
    //   notificationCallback('err', 'Cannot query users', notificationAlert);
    // }
    //
    // let users = [];
    // // onsuccess handler
    // req.onsuccess = function (event) {
    //
    //   users = event.target.result;
    //
    //   let user = users.find(item => item.usernameOrEmail === loginForm.usernameOrEmail &&
    //       item.password === loginForm.password);
    //   if (isNullUndefined(user)) {
    //     notificationCallback('err', 'User not found', notificationAlert);
    //     return;
    //   }
    //   appStore.user = deepCloneObject(user);
    //   notificationCallback('succ', 'Login success', notificationAlert);
    //   //to allow notification display
    //   setTimeout(_ => authStore.handleLogin(), 2000)
    // }

}

/**
 * sd _ Kaybarax
 * @param notificationAlert
 */
export function handleResetPassword(notificationAlert) {
    // todo: ... your logic ... you get the drill by now

    notificationCallback(
        'succ',
        'I will leave this one for you))',
        notificationAlert,
    );
    // notificationCallback('info', 'You can play around with this!)', notificationAlert)
}

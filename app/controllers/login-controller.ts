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

    let user: User = toJS(signUpModel.user);

    // generate user password salt and hash
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

        userSaved = saveUser(user, notificationAlert);
        if (!userSaved) {
            return;
        }
        userCredentialsSaved = saveUserCredentials(userCredentials, notificationAlert);
        if (!userCredentialsSaved) {

            notificationCallback(
                'err',
                'User sign up failed on credentials',
                notificationAlert,
            );

        }

    } catch (err) {

        notificationCallback(
            'err',
            'User sign up failed',
            notificationAlert,
        );
        return;

    }

}

export function saveUser(user: User, notificationAlert) {
    console.log('saveUser');

    let saved = false;

    //save to sqlitedb

    let db = APP_SQLITE_DATABASE.DB_REFERENCE;
    appSQLiteDb.transactionSuccess = false;

    //put in db
    try {

        appSQLiteDb.addUserStmt(db, user);
        saved = appSQLiteDb.transactionSuccess;

        notificationCallback(
            'succ',
            'User saved',
            notificationAlert,
        );

    } catch (err) {

        notificationCallback(
            'err',
            'Save user failed',
            notificationAlert,
        );

    }

    return saved;

}

export function saveUserCredentials(userCredentials: UserCredentials, notificationAlert) {
    console.log('saveUserCredentials');

    let saved = false;

    //save to sqlitedb

    let db = APP_SQLITE_DATABASE.DB_REFERENCE;
    appSQLiteDb.transactionSuccess = false;

    //put in db
    try {

        appSQLiteDb.addUserCredentialsStmt(db, userCredentials);
        saved = appSQLiteDb.transactionSuccess;

        notificationCallback(
            'succ',
            'User Credentials saved',
            notificationAlert,
        );

    } catch (err) {

        notificationCallback(
            'err',
            'Save user credentials failed',
            notificationAlert,
        );

    }

    return saved;

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
}

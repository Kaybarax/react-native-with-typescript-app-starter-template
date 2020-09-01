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
import {APP_SQLITE_DATABASE} from '../app-management/data-manager/db-config';
import {appSQLiteDb} from '../app-management/data-manager/embeddedDb-manager';
import {User, UserCredentials} from '../app-management/data-manager/models-manager';
import {createPasswordHash} from '../android-custom-native-modules/app-security-custom-native-module';
import {isEmptyString} from "../util/util";
import {showToast} from "../util/react-native-based-utils";
import {TIME_OUT} from "../app-config";
import {invokeLoader} from "../shared-components-and-modules/loaders";

/**
 * sd _ Kaybarax
 * @param signUpModel
 * @param appStore
 * @param notificationAlert
 * @param showLoginForm
 */
export function handleSignUp(signUpModel, appStore, notificationAlert, showLoginForm) {

    console.log('handleSignUp');
    console.log('signUpModel:', toJS(signUpModel));
    // return;

    //save to sqlitedb

    let user: User = toJS(signUpModel.user);

    console.log('user', user);

    // generate user password salt and hash
    let userCredentials: UserCredentials = {
        username: user.id,
        salt: undefined
    };
    console.log('userCredentials 1', userCredentials);

    let listener = {
        done: false,
    };

    invokeLoader(appStore);

    createPasswordHash(signUpModel.password, userCredentials, notificationAlert, listener)
        .then((credentials: UserCredentials) => {

            console.log('credentials', credentials);

            let timer = TIME_OUT;
            let listenerInterval = setInterval(_ => {
                if (timer >= 0) {
                    if (listener.done) {
                        clearInterval(listenerInterval);
                        work(credentials);
                    }
                } else {
                    if (!listener.done) {
                        clearInterval(listenerInterval);
                    }
                }
                timer -= 1000;
            }, 1000);

            function work(credentials) {

                invokeLoader(appStore);

                console.log('credentials password_hash', credentials.password_hash);
                console.log('credentials salt', credentials.salt);

                if (isEmptyString(credentials.password_hash) || isEmptyString(credentials.salt)) {
                    notificationCallback(
                        'err',
                        'Sign up failed',
                        notificationAlert,
                    );
                    return;
                }

                //save user
                saveUser(user, notificationAlert);

                let timer = TIME_OUT;
                let userSavedInterval = setInterval(_ => {
                    if (timer >= 0) {
                        if (appSQLiteDb.transactionSuccess) {
                            clearInterval(userSavedInterval);
                            showToast('User added!');
                            executeAddCredentials();
                        }
                    } else {
                        if (!appSQLiteDb.transactionSuccess) {
                            clearInterval(userSavedInterval);
                            showToast('Failed to add User!');
                            notificationCallback(
                                'err',
                                'User sign up failed',
                                notificationAlert,
                            );
                        }
                    }
                    timer -= 1000;
                }, 1000);

                //save user credentials
                function executeAddCredentials() {

                    invokeLoader(appStore);

                    saveUserCredentials(userCredentials, notificationAlert);

                    let timer = TIME_OUT;
                    let saveCredentialsListener = setInterval(_ => {
                        if (timer >= 0) {
                            if (appSQLiteDb.transactionSuccess) {
                                clearInterval(saveCredentialsListener);
                                showToast('User credentials added!');
                                //ready for next user
                                //allowing the alert to display
                                notificationCallback(
                                    'succ',
                                    'User signed up',
                                    notificationAlert,
                                );
                                setTimeout(_ => showLoginForm(), 1500);
                            }
                        } else {
                            if (!appSQLiteDb.transactionSuccess) {
                                clearInterval(saveCredentialsListener);
                                showToast('Failed to add user credentials!');
                            }
                        }
                        timer -= 1000;
                    }, 1000);

                }

            }

        }).catch(err => {
        console.log('createPasswordHash err', err);
    });

}

export function saveUser(user: User, notificationAlert) {
    console.log('saveUser');

    //save to sqlitedb

    let db = APP_SQLITE_DATABASE.DB_REFERENCE;
    appSQLiteDb.transactionSuccess = false;

    //put in db
    try {

        appSQLiteDb.addUserStmt(db, user);
        // saved = appSQLiteDb.transactionSuccess;

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

    // return saved;

}

export function saveUserCredentials(userCredentials: UserCredentials, notificationAlert) {
    console.log('saveUserCredentials');

    //save to sqlitedb

    let db = APP_SQLITE_DATABASE.DB_REFERENCE;
    appSQLiteDb.transactionSuccess = false;

    //put in db
    try {

        appSQLiteDb.addUserCredentialsStmt(db, userCredentials);

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

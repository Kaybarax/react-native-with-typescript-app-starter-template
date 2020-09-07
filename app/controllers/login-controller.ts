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
import {isEmptyString, isNullUndefined} from "../util/util";
import {showToast} from "../util/react-native-based-utils";
import {TIME_OUT} from "../app-config";
import {invokeLoader} from "../shared-components-and-modules/loaders";
import {serviceWorkerThread} from "./app-controller";
import appNavigation from "../routing-and-navigation/app-navigation";

/**
 * sd _ Kaybarax
 * @param signUpModel
 * @param recipeBoxStore
 * @param loginStore
 * @param notificationAlert
 * @param showLoginForm
 */
export function handleSignUp(signUpModel, recipeBoxStore, loginStore, notificationAlert, showLoginForm) {

    console.log('signUpModel:', toJS(signUpModel));
    // return;

    let functionServiceWorkerThreadsPool = [];

    //save to sqlitedb
    let user: User = toJS(signUpModel.user);

    console.log('user', user);

    // generate user password salt and hash
    let userCredentials: UserCredentials = {
        username: user.id,
        salt: undefined
    };

    let threadWorkListener = {
        done: false,
        createPasswordHash: false,
        saveUser: false,
        saveUserCredentials: false,
    };

    invokeLoader(loginStore);

    serviceWorkerThread(() => {
            createPasswordHash(signUpModel.password, userCredentials,
                notificationAlert, threadWorkListener).then(null);
        },
        () => {
            return threadWorkListener.done;
        },
        () => {
            saveUserWork(userCredentials);
        }, () => {
            //do nothing, cuz has already been handled by the hashing function
        }, TIME_OUT, 1000,
        functionServiceWorkerThreadsPool
    );

    function saveUserWork(credentials) {

        invokeLoader(loginStore);

        console.log('credentials password_hash', credentials.password_hash);
        console.log('credentials salt', credentials.salt);

        if (isEmptyString(credentials.password_hash) || isEmptyString(credentials.salt)) {
            notificationCallback(
                'err',
                'Sign up failed! Password hashing failed',
                notificationAlert,
            );
            return;
        }

        serviceWorkerThread(() => {
                saveUser(user, notificationAlert);
            },
            () => {
                return appSQLiteDb.transactionSuccess;
            },
            () => {
                showToast('User added!');
                saveUserCredentialsWork();
            }, () => {
                notificationCallback(
                    'err',
                    'Sign up failed, cannot save user',
                    notificationAlert,
                );
            }, TIME_OUT, 1000,
            functionServiceWorkerThreadsPool
        );

    }

    function saveUserCredentialsWork() {

        invokeLoader(loginStore);

        serviceWorkerThread(() => {
                saveUserCredentials(userCredentials, notificationAlert);
            },
            () => {
                return appSQLiteDb.transactionSuccess;
            },
            () => {
                showToast('User credentials added!');
                notificationCallback(
                    'succ',
                    'User signed up!',
                    notificationAlert,
                );
                //some time for alert feedback
                setTimeout(_ => showLoginForm(), 1500);
            }, () => {
                notificationCallback(
                    'warn',
                    'Sign up failed, cannot save credentials',
                    notificationAlert,
                );
            }, TIME_OUT, 1000,
            functionServiceWorkerThreadsPool
        );

    }

}

export function saveUser(user: User, notificationAlert) {
    console.log('saveUser');

    let db = APP_SQLITE_DATABASE.DB_REFERENCE;
    appSQLiteDb.transactionSuccess = false;

    //put in db
    try {

        appSQLiteDb.addUserStmt(db, user);

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

}

export function saveUserCredentials(userCredentials: UserCredentials, notificationAlert) {
    console.log('saveUserCredentials');

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
 * @param password
 * @param notificationAlert
 * @param recipeBoxStore
 * @param loginStore
 * @param navigation
 */
export function handleLogin(loginForm, password, notificationAlert, recipeBoxStore, loginStore, navigation) {

    console.log('handleLogin');
    console.log('loginForm:', toJS(loginForm));
    // return;

    invokeLoader(loginStore);

    //check username/email
    let user: User = appSQLiteDb.usersQueryResults.find(item =>
        item.username === loginForm.usernameOrEmail ||
        item.email === loginForm.usernameOrEmail);

    if (isNullUndefined(user)) {
        notificationCallback('err',
            `Incorrect username/email`,
            notificationAlert);
        return;
    }

    //check credentials
    let userCredentials: UserCredentials = appSQLiteDb.usersCredentialsQueryResults.find(item =>
        item.username === user.id);

    if (isNullUndefined(userCredentials)) {
        notificationCallback('err',
            `User doesn't have access right!`,
            notificationAlert);
        return;
    }

    //verify password
    //NOTE! Not used because of the limits of the sqlite storage npm package.
    //the hashed password, cannot be be verified with the given salt and hash
    // invokeLoader(loginStore);
    // let validatePasswordFeedback = {
    //     done: false,
    //     isValidPassword: false,
    // };
    // serviceWorkerThread(() => {
    //         validatePasswordWithHashAndSalt(password, userCredentials.password_hash,
    //             userCredentials.salt, notificationAlert, validatePasswordFeedback);
    //     },
    //     TIME_OUT, 1000,
    //     () => {
    //         return validatePasswordFeedback.done;
    //     },
    //     () => {
    //         if (validatePasswordFeedback.isValidPassword) {
    //             showToast('Login success');
    //             appNavigation.loginToRecipeBox(navigation, null);
    //         } else {
    //             notificationCallback('err',
    //                 `Password incorrect`,
    //                 notificationAlert);
    //         }
    //     }, () => {
    //         notificationCallback('err',
    //             `Check password failed`,
    //             notificationAlert);
    //     }, functionServiceWorkerThreadsPool
    // );

    //set user
    recipeBoxStore.user = user;

    showToast('Login success');
    appNavigation.navigateToRecipeBoxHome(navigation, null);

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

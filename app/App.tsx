/**
 * Initially generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from 'react';
import RN from 'react-native';
import 'mobx-react-lite/batchingForReactNative';
import {Provider} from 'mobx-react';
import AppEntry from './app-entry';
import appStores from './stores/index';
import appNavigation from "./routing-and-navigation/app-navigation";
import {appSQLiteDb} from "./app-management/data-manager/embeddedDb-manager";
import Loader from "./shared-components-and-modules/loaders";
import NotFound from "./views/not-found";
import className from "./util/react-native-based-utils";
import {FlexColumnContainerCN} from "./theme/app-layout-styles-classnames";
import {serviceWorkerThread} from "./controllers/app-controller";
import {TIME_OUT} from "./app-config";
import {isEmptyString} from "./util/util";

export const SCREEN_HEIGHT = RN.Dimensions.get('window').height;
export const SCREEN_WIDTH = RN.Dimensions.get('window').width;

const App = () => {

    // @ts-ignore
    // pass navStore reference to appNavigation
    appNavigation.navStore = appStores.stores.appStore.navStore;

    //disable throwing of inconsequential warnings
    // console.disableYellowBox = true;
    //hide in-development unnecessary console warnings
    // console.warn = console.error = function (message) {};
    //hide all react warnings in production
    console.warn = console.error = console.log = function (message) {};

    let [dbLoaded, loadDb] = React.useState(false);
    let [dbLoadFeedback, setDbLoadFeedback] = React.useState('');

    React.useEffect(() => {

        console.log('appSQLiteDb.dbLoadedAndInitialized :::: ', appSQLiteDb.dbLoadedAndInitialized);

        //init embedded app db
        serviceWorkerThread(
            _ => {
                appSQLiteDb.loadAndInitDB();
            },
            _ => {
                return appSQLiteDb.dbLoadedAndInitialized;
            },
            _ => {
                loadDb(true);
            },
            _ => {
                setDbLoadFeedback('Failed to load app sqlite-db. Restart app to try again.')
            }, TIME_OUT, 1000
        );

    });

    if (!dbLoaded) {
        return (
            <RN.ScrollView
                style={[
                    className(
                        FlexColumnContainerCN
                    )
                ]}
            >
                <NotFound/>
                <Loader message={
                    isEmptyString(dbLoadFeedback) ?
                        appSQLiteDb.latestProgressUpdate :
                        dbLoadFeedback
                }/>
            </RN.ScrollView>
        )
    }

    const {stores} = appStores;

    return (
        <Provider {...stores}>
            <AppEntry/>
        </Provider>
    );

};

export default App;

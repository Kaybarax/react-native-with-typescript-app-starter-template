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
import rootStore from './stores/index';
import appNavigation from "./routing-and-navigation/app-navigation";
import {appSQLiteDb} from "./app-management/data-manager/embeddedDb-manager";
import Loader from "./shared-components-and-modules/loaders";
import NotFound from "./views/not-found";
import className from "./util/react-native-based-utils";
import {FlexColumnContainerCN} from "./theme/app-layout-styles-classnames";

export const SCREEN_HEIGHT = RN.Dimensions.get('window').height;
export const SCREEN_WIDTH = RN.Dimensions.get('window').width;

const App = () => {

    // @ts-ignore
    // pass navStore reference to appNavigation
    appNavigation.navStore = rootStore.appStores.app.navStore;

    //disable throwing of inconsequential warnings
    // console.disableYellowBox = true;
    //hide in-development unnecessary console warnings
    // console.warn = console.error = function (message) {};
    //hide all react warnings in production
    // console.warn = console.error = console.log = function (message) {};

    let [dbLoaded, loadDb] = React.useState(false);

    React.useEffect(() => {

        console.log('appSQLiteDb.dbLoadedAndInitialized :::: ', appSQLiteDb.dbLoadedAndInitialized);
        //init embedded app db
        appSQLiteDb.loadAndInitDB();
        let checkDbLoad = setInterval(_ => {

            if (appSQLiteDb.dbLoadedAndInitialized) {
                loadDb(true);
                clearInterval(checkDbLoad);
            }

        }, 1000);

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
                <Loader message={appSQLiteDb.latestProgressUpdate}/>
            </RN.ScrollView>
        )
    }

    return (
        <Provider
            appStores={rootStore.appStores}
            appStore={rootStore.appStores.app}
            authStore={rootStore.authStore}
            recipeBoxStore={rootStore.appStores.recipeBoxStore}
        >
            <AppEntry/>
        </Provider>
    );

};

export default App;

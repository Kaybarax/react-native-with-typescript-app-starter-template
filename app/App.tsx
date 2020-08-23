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

import {Provider} from 'mobx-react';
import AppEntry from './app-entry';
import rootStore from './stores/index';

declare const global: { HermesInternal: null | {} };

export const SCREEN_HEIGHT = RN.Dimensions.get('window').height;
export const SCREEN_WIDTH = RN.Dimensions.get('window').width;

const App = () => {

    //disable throwing of inconsequential warnings
    // console.disableYellowBox = true;
    //hide in-development unnecessary console warnings
    // console.warn = console.error = function (message) {};
    //hide all react warnings in production
    // console.warn = console.error = console.log = function (message) {};

    // let [dbLoaded, loadDb] = React.useState(appSQLiteDb.dbLoadedAndInitialized);

    // React.useEffect(() => {
    //     //init embedded app db
    //     appSQLiteDb.loadAndInitDB();
    //     // while (!appSQLiteDb.dbLoadedAndInitialized) {
    //     //     if (appSQLiteDb.dbLoadedAndInitialized) {
    //     //         loadDb(true);
    //     //     }
    //     // }
    //     if (appSQLiteDb.dbLoadedAndInitialized) {
    //         loadDb(true);
    //     }
    // });

    // if (!dbLoaded) {
    //     return (
    //         <React.Fragment>
    //             <Loader message={appSQLiteDb.latestProgressUpdate}/>
    //         </React.Fragment>
    //     )
    // }

    return (
        <Provider
            appStores={rootStore.appStores}
            appStore={rootStore.appStores.app}
            authStore={rootStore.authStore}
        >
            <AppEntry/>
        </Provider>
    );

};

// {global.HermesInternal == null ? null : (
//     <View style={styles.engine}>
//         <Text style={styles.footer}>Engine: Hermes</Text>
//     </View>
// )}

export default App;

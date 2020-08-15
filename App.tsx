/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
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
import RN, {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View,} from 'react-native';

import {Provider} from 'mobx-react';
import AppEntry from './app/app-entry';
import rootStore from './app/stores';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {appSQLiteDb} from "./app/app-management/data-manager/embeddedDb-manager";
import Loader from "./app/shared-components-and-modules/loaders";

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

    let [dbLoaded, loadDb] = React.useState(appSQLiteDb.dbLoadedAndInitialized);

    React.useEffect(() => {
        //init embedded app db
        appSQLiteDb.loadAndInitDB();
        // while (!appSQLiteDb.dbLoadedAndInitialized) {
        //     if (appSQLiteDb.dbLoadedAndInitialized) {
        //         loadDb(true);
        //     }
        // }
        if (appSQLiteDb.dbLoadedAndInitialized) {
            loadDb(true);
        }
    });

    if (!dbLoaded) {
        return (
            <React.Fragment>
                <Loader message={appSQLiteDb.latestProgressUpdate}/>
            </React.Fragment>
        )
    }

    return (
        <Provider
            appStores={rootStore.appStores}
            appStore={rootStore.appStores.app}
            authStore={rootStore.authStore}
        >
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <AppEntry/>
            </SafeAreaView>
        </Provider>
    );

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    style={styles.scrollView}>
                    <Header/>
                    {global.HermesInternal == null ? null : (
                        <View style={styles.engine}>
                            <Text style={styles.footer}>Engine: Hermes</Text>
                        </View>
                    )}
                    <View style={styles.body}>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Step One</Text>
                            <Text style={styles.sectionDescription}>
                                Edit <Text style={styles.highlight}>App.tsx</Text> to change
                                this screen and then come back to see your edits.
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>See Your Changes</Text>
                            <Text style={styles.sectionDescription}>
                                <ReloadInstructions/>
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Debug</Text>
                            <Text style={styles.sectionDescription}>
                                <DebugInstructions/>
                            </Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Learn More</Text>
                            <Text style={styles.sectionDescription}>
                                Read the docs to discover what to do next:
                            </Text>
                        </View>
                        <LearnMoreLinks/>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default App;

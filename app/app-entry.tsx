//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppWithRouting from "./routing-and-navigation/routes";

function AppEntry() {

    //init app indexed db
    // appIndexedDb();

    return (
        <NavigationContainer>
            <AppWithRouting/>
        </NavigationContainer>
    );
}

export default AppEntry;

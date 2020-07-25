//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import 'react-native-gesture-handler';
import React, {Fragment} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainAppRouting from "./routing-and-navigation/routes";

function AppEntry() {

    //init app indexed db
    // appIndexedDb();

    return (
        <Fragment>
            <NavigationContainer>
                <MainAppRouting/>
            </NavigationContainer>
        </Fragment>
    );
}

export default AppEntry;

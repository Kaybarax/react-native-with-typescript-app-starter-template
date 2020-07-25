//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import React from 'react';
import {inject, observer} from "mobx-react";
import SafeComponentWrapper from "../../safe-component-wrapper";
import HeaderNavigation from "../../shared-components-and-modules/header-navigation";
import appNavigation from "../../routing-and-navigation/app-navigation";
import {Text, View} from "react-native";

function Page1Example(props) {

    const {
        appStore,
        authStore,
        routerStore
    } = props;

    const _continueToPage2 = (e) => {
        // e.preventDefault();
        appNavigation.navigateToPage2Example(routerStore, null);
    };

    return (
        <SafeComponentWrapper>
            <HeaderNavigation
                routerStore={routerStore}
                authStore={authStore} appStore={appStore}
            />

            <View
                // className={'flex-row-container'}
            >
                <View
                    // className={'flex-container-child-item center-align-content'}
                >
                    <Text
                        // className="title is-5"
                    >Page 1 Example : Let's start here!</Text>
                </View>
            </View>

            <View
                // className={'flex-row-container'}
            >
                <View
                    // className={'flex-container-child-item center-align-content'}
                >
                    <Text
                        style={{textAlign: 'left'}}
                    >
                        Hey there. So you have an SPA web app that you want to build with React Js.<Text>{'\n'}</Text>
                        And you need to come up with an app-wide, system design setup. That is, system breakdown
                        to&nbsp;
                        individual bits and pieces like, routing and navigation, controllers, app's global&nbsp;
                        state management, and sharing components' state information;&nbsp;
                        configuring security access for your pages, as to which are publicly accessible, and which&nbsp;
                        a user must be logged in and authenticated to access; and even different&nbsp;
                        types of access based on roles.<Text>{'\n'}</Text>
                        Well, this self-guiding design employed here in this,&nbsp;
                        "<Text>React Js SPA Web App with Login Starter Template Framework Design</Text>"&nbsp;
                        has got you covered.<Text>{'\n'}</Text><Text>{'\n'}</Text>
                        <Text
                            // href={PAGE2EXAMPLE_VIEW_ROUTE.name}
                            onPress={e => _continueToPage2(e)}
                        >Continue to Page 2 Example to learn more...</Text>
                    </Text>
                </View>
            </View>

        </SafeComponentWrapper>
    );

}

export default (inject('authStore', 'appStore', 'routerStore')(observer(Page1Example)));

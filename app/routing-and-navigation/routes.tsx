//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import React from "react";
import {
    _404_VIEW,
    DEFAULT_VIEW_ROUTE,
    HOME_VIEW_ROUTE,
    PAGE2EXAMPLE_VIEW_ROUTE,
    PAGE3EXAMPLE_VIEW_ROUTE,
    PAGE4_SUB_ITEM_EXAMPLE_VIEW_ROUTE,
    PAGE4EXAMPLE_VIEW_ROUTE
} from "./views-routes-declarations";
import {createStackNavigator} from '@react-navigation/stack';

/**
 * sd _ Kaybarax
 * @param fromState
 * @param toState
 * @param routerStore
 * @returns {Promise}
 */
// const onAccessSecuredActivityCheckIfAuthenticated = async (fromState, toState, routerStore) => {
//   const {
//     rootStore: {authStore},
//   } = routerStore;
//
//   let isAuthenticated = await authStore
//       .isAuthenticated()
//       .then((isAuthenticated) => {
//         return isAuthenticated;
//       });
//
//   if (isAuthenticated) {
//     return Promise.resolve();
//   } else {
//     //grab the state/view/page that navigation towards was attempted,
//     //so that on return after authentication, the user can still be routed to the intended page
//     authStore.setSignInRedirect(toState);
//     //then sent the user to first get authenticated before access is allowed
//     return Promise.reject(new RouterState(DEFAULT_VIEW_ROUTE.routeName));
//   }
// };

/**
 * Redirect a user to the logged-in-app page if they are already logged in
 * and trying to access the login page
 * @returns {*}
 * by kevinbbarasa
 */
// const redirectIfLoggedIn = async (fromState, toState, routerStore) => {
//   const {
//     rootStore: {authStore},
//   } = routerStore;
//
//   let isAuthenticated = await authStore
//       .isAuthenticated()
//       .then((isAuthenticated) => {
//         return isAuthenticated;
//       });
//
//   if (isAuthenticated) {
//     return Promise.reject(new RouterState(HOME_VIEW_ROUTE.routeName));
//   } else {
//     //grab the state/view/page that navigation towards was attempted,
//     //so that on return after authentication, the user can still be routed to the intended page
//     authStore.setSignInRedirect(toState);
//     //then sent the user to first get authenticated before access is allowed
//     return Promise.reject(new RouterState(DEFAULT_VIEW_ROUTE.routeName));
//   }
// };


/**
 * Manifest of all possible screens _ Kaybarax
 * @constructor
 */
export default function MainAppRouting() {

    const Stack = createStackNavigator();

    const routeMap = [
        <Stack.Screen
            name={DEFAULT_VIEW_ROUTE.name}
            component={DEFAULT_VIEW_ROUTE.screen}
            key={DEFAULT_VIEW_ROUTE.name}
        />,
        <Stack.Screen
            name={HOME_VIEW_ROUTE.name}
            component={HOME_VIEW_ROUTE.screen}
            key={HOME_VIEW_ROUTE.name}
        />,
        <Stack.Screen
            name={PAGE2EXAMPLE_VIEW_ROUTE.name}
            component={PAGE2EXAMPLE_VIEW_ROUTE.screen}
            key={PAGE2EXAMPLE_VIEW_ROUTE.name}
        />,
        <Stack.Screen
            name={PAGE3EXAMPLE_VIEW_ROUTE.name}
            component={PAGE3EXAMPLE_VIEW_ROUTE.screen}
            key={PAGE3EXAMPLE_VIEW_ROUTE.name}
        />,
        <Stack.Screen
            name={PAGE4EXAMPLE_VIEW_ROUTE.name}
            component={PAGE4EXAMPLE_VIEW_ROUTE.screen}
            key={PAGE4EXAMPLE_VIEW_ROUTE.name}
        />,
        <Stack.Screen
            name={PAGE4_SUB_ITEM_EXAMPLE_VIEW_ROUTE.name}
            component={PAGE4_SUB_ITEM_EXAMPLE_VIEW_ROUTE.screen}
            key={PAGE4_SUB_ITEM_EXAMPLE_VIEW_ROUTE.name}
        />,
        <Stack.Screen
            name={_404_VIEW.name}
            component={_404_VIEW.screen}
            key={_404_VIEW.name}
        />,
    ];

    return (
        <Stack.Navigator
            initialRouteName={DEFAULT_VIEW_ROUTE.name}
        >
            {routeMap}
        </Stack.Navigator>
    );

    // routeConfigMap,
    // {
    //     // Default config for all screens
    //     headerMode: "none",
    //     // @ts-ignore
    //     initialRouteName: DEFAULT_VIEW_ROUTE.name,
    //     transitionConfig: transitionConfig
    // }

}

export function RecipeAppRouting() {}

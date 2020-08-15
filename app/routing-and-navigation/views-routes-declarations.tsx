//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from 'react';
import Login from "../views/login-and-registration-views/login";
import Page1Example from "../views/page-1-example";
import Page2Example from "../views/page-2-example";
import Page3Example from "../views/page-3-example";
import Page4Example from "../views/page-4-example";
import Page4SubItemExample from "../views/page-4-sub-item-example";
import NotFound from "../views/not-found";
import AppDevScratchPad from "../app-dev-scratch-pad/app-dev-scratch-pad";
import {ViewRoute} from "./routing-and-navigation-utils";

////declare the application views for routing
//the default view on app bootstrap
export const DEFAULT_VIEW_ROUTE: ViewRoute = {
    name: 'DEFAULT_VIEW_ROUTE',
    screen: Login
};

//and then the other views routes declarations
export const PAGE1EXAMPLE_VIEW_ROUTE: ViewRoute = {
    name: 'PAGE1EXAMPLE_VIEW_ROUTE',
    screen: Page1Example
};

export const PAGE2EXAMPLE_VIEW_ROUTE: ViewRoute = {
    name: 'PAGE2EXAMPLE_VIEW_ROUTE',
    screen: Page2Example
};

export const PAGE3EXAMPLE_VIEW_ROUTE: ViewRoute = {
    name: 'PAGE3EXAMPLE_VIEW_ROUTE',
    screen: Page3Example
};

export const PAGE4EXAMPLE_VIEW_ROUTE: ViewRoute = {
    name: 'PAGE4EXAMPLE_VIEW_ROUTE',
    screen: Page4Example
};

export const PAGE4_SUB_ITEM_EXAMPLE_VIEW_ROUTE: ViewRoute = {
    name: 'PAGE4_SUB_ITEM_EXAMPLE_VIEW_ROUTE',
    screen: Page4SubItemExample
};

//and then finally the 404 route
export const _404_VIEW: ViewRoute = {
    name: '_404_VIEW',
    screen: NotFound
};

// just added for your mocking of scenarios
export const APP_DEV_MOCKS_VIEW_ROUTE = {
    name: 'APP_DEV_MOCKS_VIEW_ROUTE',
    screen: AppDevScratchPad
};


/**
 * sd _ Kaybarax
 * @param fromState
 * @param toState
 * @returns {Promise}
 */
// const onAccessSecuredActivityCheckIfAuthenticated = async (fromState, toState, rootStore) => {
//   const {
//     authStore
//   } = rootStore;
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
// const redirectIfLoggedIn = async (fromState, toState, rootStore) => {
//   const {
//     authStore
//   } = rootStore;
//
//   let isAuthenticated = await authStore
//       .isAuthenticated()
//       .then((isAuthenticated) => {
//         return isAuthenticated;
//       });
//
//   if (isAuthenticated) {
//     return Promise.reject(new RouterState(PAGE1EXAMPLE_VIEW_ROUTE.routeName));
//   } else {
//     //grab the state/view/page that navigation towards was attempted,
//     //so that on return after authentication, the user can still be routed to the intended page
//     authStore.setSignInRedirect(toState);
//     //then sent the user to first get authenticated before access is allowed
//     return Promise.reject(new RouterState(DEFAULT_VIEW_ROUTE.routeName));
//   }
// };

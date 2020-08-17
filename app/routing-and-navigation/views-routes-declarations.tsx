//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from 'react';
import Login from "../views/recipe-box-sub-app-views/login";
import Page1Example from "../views/page-1-example";
import Page2Example from "../views/page-2-example";
import Page3Example from "../views/page-3-example";
import Page4Example from "../views/page-4-example";
import Page4SubItemExample from "../views/page-4-sub-item-example";
import NotFound from "../views/not-found";
import AppDevScratchPad from "../app-dev-scratch-pad/app-dev-scratch-pad";
import {ViewRoute} from "./routing-and-navigation-utils";
import LoginActivity from '../views/recipe-box-sub-app-views/login';
import RecipeHomeActivity from "../views/recipe-box-sub-app-views/home";
import WithStoresHoc from "../shared-components-and-modules/hocs/with-stores-hoc";
import RecipeDashboardItemCard from "../views/recipe-box-sub-app-views/recipe-dashboard-item-card";
import CreateEditRecipeFormActivity from "../views/recipe-box-sub-app-views/create-edit-recipe-form";
import RecipeRequests from "../views/recipe-box-sub-app-views/recipe-requests";

////declare the application views for routing
//the default view on app bootstrap
export const DEFAULT_SCREEN_ROUTE: ViewRoute = {
    name: 'DEFAULT_SCREEN_ROUTE',
    screen: Login
};

//and then the other views routes declarations
export const PAGE1EXAMPLE_SCREEN_ROUTE: ViewRoute = {
    name: 'Page 1 Example',
    screen: Page1Example
};

export const PAGE2EXAMPLE_SCREEN_ROUTE: ViewRoute = {
    name: 'Page 2 Example',
    screen: Page2Example
};

export const PAGE3EXAMPLE_SCREEN_ROUTE: ViewRoute = {
    name: 'Page 3 Example',
    screen: Page3Example
};

export const PAGE4EXAMPLE_SCREEN_ROUTE: ViewRoute = {
    name: 'Page 4 Example',
    screen: Page4Example
};

export const PAGE4_SUB_ITEM_EXAMPLE_SCREEN_ROUTE: ViewRoute = {
    name: 'Page 4 SubItem Example',
    screen: Page4SubItemExample
};

//and then finally the 404 route
export const _404_VIEW: ViewRoute = {
    name: '_404_',
    screen: NotFound
};

// just added for your mocking of scenarios
export const APP_DEV_MOCKS_SCREEN_ROUTE = {
    name: 'App Dev Scratchpad',
    screen: AppDevScratchPad
};

//recipe box, example sub-application views

export const MY_RECIPE_LOGIN_SCREEN_ROUTE: ViewRoute = {
    name: 'MY RECIPE LOGIN',
    screen: LoginActivity
};

export const MY_RECIPE_HOME_SCREEN_ROUTE: ViewRoute = {
    name: 'MY RECIPE HOME',
    screen: RecipeHomeActivity
};

export const MY_RECIPE_RECIPE_DETAILS_SCREEN_ROUTE: ViewRoute = {
    name: 'RECIPE DETAILS',
    screen: WithStoresHoc(RecipeDashboardItemCard,['recipeBoxStore'])
};

export const MY_RECIPE_CREATE_EDIT_RECIPE_SCREEN_ROUTE: ViewRoute = {
    name: 'CREATE/EDIT RECIPE',
    screen: CreateEditRecipeFormActivity
};

export const MY_RECIPE_REQUESTS_SCREEN_ROUTE: ViewRoute = {
    name: 'RECIPE REQUESTS',
    screen: RecipeRequests
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
//     return Promise.reject(new RouterState(DEFAULT_SCREEN_ROUTE.routeName));
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
//     return Promise.reject(new RouterState(PAGE1EXAMPLE_SCREEN_ROUTE.routeName));
//   } else {
//     //grab the state/view/page that navigation towards was attempted,
//     //so that on return after authentication, the user can still be routed to the intended page
//     authStore.setSignInRedirect(toState);
//     //then sent the user to first get authenticated before access is allowed
//     return Promise.reject(new RouterState(DEFAULT_SCREEN_ROUTE.routeName));
//   }
// };

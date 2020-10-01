//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from 'react';
import Page1ExampleActivity from "../views/page-1-example";
import Page2ExampleActivity from "../views/page-2-example";
import Page3ExampleActivity from "../views/page-3-example";
import Page4ExampleActivity from "../views/page-4-example";
import Page4SubItemExample from "../views/page-4-sub-item-example";
import NotFound from "../views/not-found";
import AppDevScratchPad from "../app-dev-scratch-pad/app-dev-scratch-pad";
import {ViewRoute} from "./routing-and-navigation-utils";
import LoginActivity from '../views/recipe-box-sub-app-views/login';
import RecipeHomeActivity from "../views/recipe-box-sub-app-views/home";
import WithStoresHoc from "../stores/with-stores-hoc";
import CreateEditRecipeFormActivity from "../views/recipe-box-sub-app-views/create-edit-recipe/create-edit-recipe-form";
import RecipeRequests from "../views/recipe-box-sub-app-views/recipe-requests";
import RecipeDetails from "../views/recipe-box-sub-app-views/recipe-details";
import {
    AppDevMocksStackRoutingComposition,
    AppTopTabsNavigationRoutingComposition,
    MainAppStackRoutingComposition,
    RecipeBoxSubAppStackRoutingComposition,
    RecipeBoxBottomTabsNavigationRoutingComposition
} from "./routing-composition";

/*Declare the application views for routing*/

/*App primitive views/screens*/

export const PAGE1EXAMPLE_SCREEN_VIEW: ViewRoute = {
    name: 'PAGE1EXAMPLE_SCREEN_VIEW',
    screen: Page1ExampleActivity,
    viewTitle: 'Page 1 Example',
};

export const PAGE2EXAMPLE_SCREEN_VIEW: ViewRoute = {
    name: 'PAGE2EXAMPLE_SCREEN_VIEW',
    screen: Page2ExampleActivity,
    viewTitle: 'Page 2 Example',
};

export const PAGE3EXAMPLE_SCREEN_VIEW: ViewRoute = {
    name: 'PAGE3EXAMPLE_SCREEN_VIEW',
    screen: Page3ExampleActivity,
    viewTitle: 'Page 3 Example',
};

export const PAGE4EXAMPLE_SCREEN_VIEW: ViewRoute = {
    name: 'PAGE4EXAMPLE_SCREEN_VIEW',
    screen: Page4ExampleActivity,
    viewTitle: 'Page 4 Example',
};

export const PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW: ViewRoute = {
    name: 'PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW',
    screen: Page4SubItemExample,
};

//the 404 route
export const _404_VIEW: ViewRoute = {
    name: '_404_',
    screen: NotFound
};

// just added for your mocking of scenarios
export const APP_DEV_MOCKS_SCREEN_VIEW: ViewRoute = {
    name: 'APP_DEV_MOCKS_SCREEN_VIEW',
    screen: WithStoresHoc(AppDevScratchPad, ['loginStore', 'appStore'])
};

/*End app primitive views/screens*/

/*App composite views/screens*/

export const MAIN_APP_STACK_SCREEN_VIEW: ViewRoute = {
    name: 'MAIN_APP_STACK_SCREEN_VIEW',
    screen: MainAppStackRoutingComposition
};

export const APP_TOP_TABS_SCREEN_VIEW: ViewRoute = {
    name: 'APP_TOP_TABS_SCREEN_VIEW',
    screen: AppTopTabsNavigationRoutingComposition
};

export const APP_DEV_MOCKS_WITH_ROUTING_SCREEN_VIEW: ViewRoute = {
    name: 'APP_DEV_MOCKS_WITH_ROUTING_SCREEN_VIEW',
    screen: AppDevMocksStackRoutingComposition
};

export const RECIPE_BOX_SUB_APP_SCREEN_VIEW: ViewRoute = {
    name: 'RECIPE_BOX_SUB_APP_SCREEN_VIEW',
    screen: RecipeBoxSubAppStackRoutingComposition
};

/*End App composite views/screens*/

/*Recipe-Box, example sub-application primitive views/screens*/
export const MY_RECIPE_LOGIN_SCREEN_VIEW: ViewRoute = {
    name: 'MY_RECIPE_LOGIN_SCREEN_VIEW',
    screen: LoginActivity
};

export const MY_RECIPE_HOME_SCREEN_VIEW: ViewRoute = {
    name: 'MY_RECIPE_HOME_SCREEN_VIEW',
    screen: RecipeHomeActivity,
    viewTitle: 'Home'
};

export const MY_RECIPE_RECIPE_DETAILS_SCREEN_VIEW: ViewRoute = {
    name: 'MY_RECIPE_RECIPE_DETAILS_SCREEN_VIEW',
    screen: WithStoresHoc(RecipeDetails, ['recipeBoxStore'])
};

export const MY_RECIPE_CREATE_EDIT_RECIPE_SCREEN_VIEW: ViewRoute = {
    name: 'MY_RECIPE_CREATE_EDIT_RECIPE_SCREEN_VIEW',
    screen: CreateEditRecipeFormActivity
};

export const MY_RECIPE_REQUESTS_SCREEN_VIEW: ViewRoute = {
    name: 'MY_RECIPE_REQUESTS_SCREEN_VIEW',
    screen: RecipeRequests
};

/*End Recipe-Box, example sub-application primitive views/screens*/

/*Recipe-Box, example sub-application composite views/screens*/

export const RECIPE_BOX_BOTTOM_TABS_SCREEN_VIEW: ViewRoute = {
    name: 'RECIPE_BOX_BOTTOM_TABS_SCREEN_VIEW',
    screen: RecipeBoxBottomTabsNavigationRoutingComposition
};

/*End Recipe-Box, example sub-application composite views/screens*/

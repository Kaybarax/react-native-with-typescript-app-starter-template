//key
//sd - self described
//@authored by Kaybarax -- Twitter @_ https://twitter.com/Kaybarax, Github @_ https://github.com/Kaybarax, LinkedIn @_ https://linkedin.com/in/kaybarax

import React from 'react';
import Login from "../views/unsecured-app-views/login";
import Page1Example from "../views/secured-app-views/page-1-example";
import Page2Example from "../views/secured-app-views/page-2-example";
import Page3Example from "../views/secured-app-views/page-3-example";
import Page4Example from "../views/secured-app-views/page-4-example";
import Page4SubItemExample from "../views/secured-app-views/page-4-sub-item-example";
import NotFound from "../views/not-found";
// import AppDevScratchPad from "../../app-dev-scratch-pad/app-dev-scratch-pad";
import {ViewRoute} from "./routing-and-navigation-utils";

////declare the application views for routing
//the default view on app bootstrap
export const DEFAULT_VIEW_ROUTE: ViewRoute = {
    name: 'DEFAULT_VIEW_ROUTE',
    screen: Login
};

//for this app which requires authentication, the landing view after authentication
export const HOME_VIEW_ROUTE: ViewRoute = {
    name: 'HOME_VIEW_ROUTE',
    screen: Page1Example
};

//and then the other views routes declarations
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

//just added for your mocking of scenarios
// export const APP_DEV_MOCKS_VIEW_ROUTE = {
// name: 'APP_DEV_MOCKS_VIEW_ROUTE',
//     screen: AppDevScratchPad
// };

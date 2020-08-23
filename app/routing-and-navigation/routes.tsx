//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import {
    _404_VIEW,
    APP_DEV_MOCKS_SCREEN_VIEW,
    MY_RECIPE_HOME_SCREEN_VIEW,
    MY_RECIPE_LOGIN_SCREEN_VIEW,
    MY_RECIPE_REQUESTS_SCREEN_VIEW,
    PAGE1EXAMPLE_SCREEN_VIEW,
    PAGE2EXAMPLE_SCREEN_VIEW,
    PAGE3EXAMPLE_SCREEN_VIEW,
    PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW,
    PAGE4EXAMPLE_SCREEN_VIEW
} from "./views-routes-declarations";
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {makeId} from "../util/util";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SCREEN_WIDTH} from "../App";
import WithStoresHoc from "../shared-components-and-modules/hocs/with-stores-hoc";

//expose names of internal routes, mostly as a result of nested routing,
//for availability for calls globally
export const InternalRoutes = {
    RNAST_HOME: 'RNAST_HOME',
    MY_RECIPE_TABBING: 'MY_RECIPE_TABBING',
};

/**
 * Manifest of all "main activity level" screens _ Kaybarax
 * @constructor
 */
export default function AppWithRouting() {

    const AppStack = createStackNavigator();
    const Tab = createMaterialTopTabNavigator();
    const DefaultTabbedViewsDrawer = createDrawerNavigator();

    const defaultViewTabbedViewsRouteMap = [
        <Tab.Screen
            name={PAGE1EXAMPLE_SCREEN_VIEW.name}
            component={PAGE1EXAMPLE_SCREEN_VIEW.screen}
            key={PAGE1EXAMPLE_SCREEN_VIEW.name}
        />,
        <Tab.Screen
            name={PAGE2EXAMPLE_SCREEN_VIEW.name}
            component={PAGE2EXAMPLE_SCREEN_VIEW.screen}
            key={PAGE2EXAMPLE_SCREEN_VIEW.name}
        />,
        <Tab.Screen
            name={PAGE3EXAMPLE_SCREEN_VIEW.name}
            component={PAGE3EXAMPLE_SCREEN_VIEW.screen}
            key={PAGE3EXAMPLE_SCREEN_VIEW.name}
        />,
        <Tab.Screen
            name={PAGE4EXAMPLE_SCREEN_VIEW.name}
            component={PAGE4EXAMPLE_SCREEN_VIEW.screen}
            key={PAGE4EXAMPLE_SCREEN_VIEW.name}
        />,
    ];

    const DefaultViewTabbedViewsRouteMap = () => (
        <Tab.Navigator
            children={defaultViewTabbedViewsRouteMap}
        />
    );

    const DefaultTabbedViewsWithDrawer = () => (
        <DefaultTabbedViewsDrawer.Navigator
            // drawerContent={ props => {}}
            drawerType={SCREEN_WIDTH >= 768 ? 'permanent' : 'front'}
        >
            <DefaultTabbedViewsDrawer.Screen
                name={InternalRoutes.RNAST_HOME}
                component={DefaultViewTabbedViewsRouteMap}
                key={makeId(16)}
            />
            <DefaultTabbedViewsDrawer.Screen
                name={APP_DEV_MOCKS_SCREEN_VIEW.name}
                component={AppDevMocksWithRouting}
                key={makeId(16)}
            />
            <DefaultTabbedViewsDrawer.Screen
                name={'My Recipe Sub-app'}
                component={RecipeBoxAppWithRouting}
                key={makeId(16)}
            />
        </DefaultTabbedViewsDrawer.Navigator>
    );


    const appStackRouteMap = [
        <AppStack.Screen
            name={InternalRoutes.RNAST_HOME}
            component={DefaultTabbedViewsWithDrawer}
            key={makeId(16)}
        />,
        <AppStack.Screen
            name={PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW.name}
            component={PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW.screen}
            key={PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW.name}
        />,
        <AppStack.Screen
            name={_404_VIEW.name}
            component={_404_VIEW.screen}
            key={_404_VIEW.name}
        />,
    ];

    //uncomment to run dev mocks only
    // return <AppDevMocksWithRouting/>;

    return (
        <AppStack.Navigator
            children={appStackRouteMap}
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
            headerMode={'screen'}
        />
    );

}

export function RecipeBoxAppWithRouting() {

    const AppStack = createStackNavigator();
    const AppTabs = createBottomTabNavigator();

    const appTabsRouteMap = [
        <AppTabs.Screen
            name={MY_RECIPE_HOME_SCREEN_VIEW.name}
            component={MY_RECIPE_HOME_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
        <AppTabs.Screen
            name={MY_RECIPE_REQUESTS_SCREEN_VIEW.name}
            component={MY_RECIPE_REQUESTS_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
    ];

    const AppTabbing = () => (
        <AppTabs.Navigator
            children={appTabsRouteMap}
        />
    );

    const appStackRouteMap = [
        <AppStack.Screen
            name={MY_RECIPE_LOGIN_SCREEN_VIEW.name}
            component={MY_RECIPE_LOGIN_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
        <AppStack.Screen
            name={InternalRoutes.MY_RECIPE_TABBING}
            component={AppTabbing}
            key={makeId(16)}
        />,
    ];

    return (
        <AppStack.Navigator children={appStackRouteMap}/>
    );

}

export function AppDevMocksWithRouting() {

    const Stack = createStackNavigator();
    const AppDevMocks = WithStoresHoc(APP_DEV_MOCKS_SCREEN_VIEW.screen, ['authStore', 'appStore']);

    return (
        <Stack.Navigator
            initialRouteName={APP_DEV_MOCKS_SCREEN_VIEW.name}
            screenOptions={{
                title: 'App Dev Scratch Pad'
            }}
        >
            <Stack.Screen
                name={APP_DEV_MOCKS_SCREEN_VIEW.name}
                component={AppDevMocks}
            />
        </Stack.Navigator>
    );

}

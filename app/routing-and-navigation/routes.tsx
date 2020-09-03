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
    APP_DEV_MOCKS_WITH_ROUTING_SCREEN_VIEW,
    APP_DRAWER_NAV_SCREEN_VIEW,
    APP_TOP_TABS_SCREEN_VIEW,
    MY_RECIPE_CREATE_EDIT_RECIPE_SCREEN_VIEW,
    MY_RECIPE_HOME_SCREEN_VIEW,
    MY_RECIPE_LOGIN_SCREEN_VIEW,
    MY_RECIPE_RECIPE_DETAILS_SCREEN_VIEW,
    MY_RECIPE_REQUESTS_SCREEN_VIEW,
    PAGE1EXAMPLE_SCREEN_VIEW,
    PAGE2EXAMPLE_SCREEN_VIEW,
    PAGE3EXAMPLE_SCREEN_VIEW,
    PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW,
    PAGE4EXAMPLE_SCREEN_VIEW,
    RECIPE_BOX_BOTTOM_TABS_SCREEN_VIEW,
    RECIPE_BOX_SUB_APP_SCREEN_VIEW
} from "./views-routes-declarations";
import {createStackNavigator} from '@react-navigation/stack';
import {makeId} from "../util/util";
import {createDrawerNavigator} from "@react-navigation/drawer";
import AppDrawerNavigationContent from "./app-drawer-navigation-content";
import {SCREEN_WIDTH} from "../App";
import {MAIN_BG_COLOR} from "../theme/app-theme";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";

/**
 * Manifest of all "main activity level" screens _ Kaybarax
 * @constructor
 */
export default function AppWithRouting() {

    const StackNav = createStackNavigator();

    const routeMap = [
        <StackNav.Screen
            name={APP_DRAWER_NAV_SCREEN_VIEW.name}
            component={APP_DRAWER_NAV_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
        <StackNav.Screen
            name={PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW.name}
            component={PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
        <StackNav.Screen
            name={_404_VIEW.name}
            component={_404_VIEW.screen}
            key={makeId(16)}
        />,
    ];

    return (
        <StackNav.Navigator
            initialRouteName={APP_DRAWER_NAV_SCREEN_VIEW.name}
            children={routeMap}
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

    const StackNav = createStackNavigator();

    const routeMap = [
        <StackNav.Screen
            name={MY_RECIPE_LOGIN_SCREEN_VIEW.name}
            component={MY_RECIPE_LOGIN_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
        <StackNav.Screen
            name={RECIPE_BOX_BOTTOM_TABS_SCREEN_VIEW.name}
            component={RECIPE_BOX_BOTTOM_TABS_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
        <StackNav.Screen
            name={MY_RECIPE_RECIPE_DETAILS_SCREEN_VIEW.name}
            component={MY_RECIPE_RECIPE_DETAILS_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
        <StackNav.Screen
            name={MY_RECIPE_CREATE_EDIT_RECIPE_SCREEN_VIEW.name}
            component={MY_RECIPE_CREATE_EDIT_RECIPE_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
    ];

    return (
        <StackNav.Navigator children={routeMap}/>
    );

}

export function AppDevMocksWithRouting() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={APP_DEV_MOCKS_SCREEN_VIEW.name}
            screenOptions={{
                title: 'App Dev Scratch Pad'
            }}
        >
            <Stack.Screen
                name={APP_DEV_MOCKS_SCREEN_VIEW.name}
                component={APP_DEV_MOCKS_SCREEN_VIEW.screen}
            />
        </Stack.Navigator>
    );

}

export function AppDrawerNavRouting() {

    const DrawerNav = createDrawerNavigator();

    const routeMap = [
        <DrawerNav.Screen
            name={APP_TOP_TABS_SCREEN_VIEW.name}
            component={APP_TOP_TABS_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
        <DrawerNav.Screen
            name={APP_DEV_MOCKS_WITH_ROUTING_SCREEN_VIEW.name}
            component={APP_DEV_MOCKS_WITH_ROUTING_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
        <DrawerNav.Screen
            name={RECIPE_BOX_SUB_APP_SCREEN_VIEW.name}
            component={RECIPE_BOX_SUB_APP_SCREEN_VIEW.screen}
            key={makeId(16)}
        />
    ];

    return (
        <DrawerNav.Navigator
            children={routeMap}
            drawerContent={props => {
                return (
                    <AppDrawerNavigationContent {...props}/>
                );
            }}
            drawerType={SCREEN_WIDTH >= 768 ? 'permanent' : 'front'}
            drawerStyle={{
                backgroundColor: MAIN_BG_COLOR,
                width: SCREEN_WIDTH * 0.75,
            }}
        />
    );

}

export function AppTopTabsNavRouting() {

    const TopTabsNav = createMaterialTopTabNavigator();

    const routeMap = [
        <TopTabsNav.Screen
            name={PAGE1EXAMPLE_SCREEN_VIEW.name}
            component={PAGE1EXAMPLE_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
        <TopTabsNav.Screen
            name={PAGE2EXAMPLE_SCREEN_VIEW.name}
            component={PAGE2EXAMPLE_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
        <TopTabsNav.Screen
            name={PAGE3EXAMPLE_SCREEN_VIEW.name}
            component={PAGE3EXAMPLE_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
        <TopTabsNav.Screen
            name={PAGE4EXAMPLE_SCREEN_VIEW.name}
            component={PAGE4EXAMPLE_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
    ];

    return (
        <TopTabsNav.Navigator
            children={routeMap}
        />
    );

}

export function RecipeBoxBottomTabsRouting() {

    const BottomTabsNav = createBottomTabNavigator();

    const routeMap = [
        <BottomTabsNav.Screen
            name={MY_RECIPE_HOME_SCREEN_VIEW.name}
            component={MY_RECIPE_HOME_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
        <BottomTabsNav.Screen
            name={MY_RECIPE_REQUESTS_SCREEN_VIEW.name}
            component={MY_RECIPE_REQUESTS_SCREEN_VIEW.screen}
            key={makeId(16)}
        />,
    ];

    return (
        <BottomTabsNav.Navigator
            children={routeMap}
        />
    );

}

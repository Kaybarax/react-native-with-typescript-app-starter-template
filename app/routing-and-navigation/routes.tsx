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
    PAGE1EXAMPLE_VIEW_ROUTE,
    PAGE2EXAMPLE_VIEW_ROUTE,
    PAGE3EXAMPLE_VIEW_ROUTE,
    PAGE4_SUB_ITEM_EXAMPLE_VIEW_ROUTE,
    PAGE4EXAMPLE_VIEW_ROUTE,
    APP_DEV_MOCKS_VIEW_ROUTE
} from "./views-routes-declarations";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useWindowDimensions, View, Text } from "react-native";
import { observer, inject } from "mobx-react";
import { makeId } from "../util/util";

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
            name={PAGE1EXAMPLE_VIEW_ROUTE.name}
            component={PAGE1EXAMPLE_VIEW_ROUTE.screen}
            key={PAGE1EXAMPLE_VIEW_ROUTE.name}
        />,
        <Tab.Screen
            name={PAGE2EXAMPLE_VIEW_ROUTE.name}
            component={PAGE2EXAMPLE_VIEW_ROUTE.screen}
            key={PAGE2EXAMPLE_VIEW_ROUTE.name}
        />,
        <Tab.Screen
            name={PAGE3EXAMPLE_VIEW_ROUTE.name}
            component={PAGE3EXAMPLE_VIEW_ROUTE.screen}
            key={PAGE3EXAMPLE_VIEW_ROUTE.name}
        />,
        <Tab.Screen
            name={PAGE4EXAMPLE_VIEW_ROUTE.name}
            component={PAGE4EXAMPLE_VIEW_ROUTE.screen}
            key={PAGE4EXAMPLE_VIEW_ROUTE.name}
        />,
    ];

    const DefaultViewTabbedViewsRouteMap = () => (
        <Tab.Navigator
            children={defaultViewTabbedViewsRouteMap}
        />
    );

    function DefaultTabbedViewsWithDrawer() {

        const dimensions = useWindowDimensions();

        return (
            <DefaultTabbedViewsDrawer.Navigator
                drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
            >
                <DefaultTabbedViewsDrawer.Screen
                    name={'RNAST Home'}
                    component={DefaultViewTabbedViewsRouteMap}
                    key={makeId(8)}
                />
                <DefaultTabbedViewsDrawer.Screen
                    name={APP_DEV_MOCKS_VIEW_ROUTE.name}
                    component={AppDevMocksWithRouting}
                    key={makeId(8)}
                />
                <DefaultTabbedViewsDrawer.Screen
                    name={'My Recipe Subapp'}
                    component={DefaultViewTabbedViewsRouteMap}
                    key={makeId(8)}
                />
            </DefaultTabbedViewsDrawer.Navigator>
        );
    }

    const appStackRouteMap = [
        <AppStack.Screen
            name={'RNAST Homes'}
            component={DefaultTabbedViewsWithDrawer}
            key={makeId(8)}
        />,
        <AppStack.Screen
            name={PAGE4_SUB_ITEM_EXAMPLE_VIEW_ROUTE.name}
            component={PAGE4_SUB_ITEM_EXAMPLE_VIEW_ROUTE.screen}
            key={PAGE4_SUB_ITEM_EXAMPLE_VIEW_ROUTE.name}
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
        >
            {appStackRouteMap}
        </AppStack.Navigator>
    );

}

export function RecipeAppWithRouting() {
}

export function AppDevMocksWithRouting() {

    const Stack = createStackNavigator();
    const AppDevMocks = (inject('authStore', 'appStore')(observer(APP_DEV_MOCKS_VIEW_ROUTE.screen)));

    return (
        <Stack.Navigator
            initialRouteName={APP_DEV_MOCKS_VIEW_ROUTE.name}
            screenOptions={{
                title: 'App Dev Scratch Pad'
            }}
        >
            <Stack.Screen
                name={APP_DEV_MOCKS_VIEW_ROUTE.name}
                component={AppDevMocks}
                key={APP_DEV_MOCKS_VIEW_ROUTE.name}
            />
        </Stack.Navigator>
    );

}

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
import { useWindowDimensions } from "react-native";

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
            component={PAGE1EXAMPLE_VIEW_ROUTE.screen} />,
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
        <Tab.Navigator children={defaultViewTabbedViewsRouteMap} />
    );

    function DefaultTabbedViewsWithDrawer() {

        const dimensions = useWindowDimensions();

        return (
            <DefaultTabbedViewsDrawer.Navigator
                drawerType={dimensions.width >= 768 ? 'permanent' : 'front'}
            >
                <DefaultTabbedViewsDrawer.Screen
                    name={'DefaultViewTabbedViewsRouteMap'}
                    component={DefaultViewTabbedViewsRouteMap} />
                <DefaultTabbedViewsDrawer.Screen
                    name={'app_dev_mocks'}
                    component={DefaultViewTabbedViewsRouteMap} />
                <DefaultTabbedViewsDrawer.Screen
                    name={'my_recipe_sub_app'}
                    component={DefaultViewTabbedViewsRouteMap} />
            </DefaultTabbedViewsDrawer.Navigator>
        );
    }

    const appStackRouteMap = [
        <AppStack.Screen
            name={'DefaultViewTabbedViewsRouteMap'}
            component={DefaultTabbedViewsWithDrawer}
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

    return (
        <AppStack.Navigator>
            {appStackRouteMap}
        </AppStack.Navigator>
    );

}

export function RecipeAppWithRouting() {
}

export function AppDevMocksWithRouting() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={APP_DEV_MOCKS_VIEW_ROUTE.name}
            screenOptions={{
                title: 'App Dev Scratch Pad'
            }}
        >
            <Stack.Screen
                name={APP_DEV_MOCKS_VIEW_ROUTE.name}
                component={APP_DEV_MOCKS_VIEW_ROUTE.screen}
                key={APP_DEV_MOCKS_VIEW_ROUTE.name}
            />
        </Stack.Navigator>
    );

}

//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

/**
 * Manifest of all "main activity level" screens _ Kaybarax
 */

import React from "react";
import {
    _404_VIEW,
    APP_DEV_MOCKS_SCREEN_VIEW,
    APP_DEV_MOCKS_WITH_ROUTING_SCREEN_VIEW,
    APP_TOP_TABS_SCREEN_VIEW,
    MAIN_APP_STACK_SCREEN_VIEW,
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
import {MAIN_BG_COLOR, MAIN_SUPPORT_COLOR, NEGATIVE_ACTION_COLOR, SECONDARY_SUPPORT_COLOR} from "../theme/app-theme";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import RecipeBoxBottomNavigationTabsCustomTabBars from "./recipe-box-bottom-navigation-tabs-custom-tab-bars";
import {
    AppDevScratchTitleBar,
    AppTopTabsTitleBar,
    CreateEditTitleBar,
    Page4SubItemExampleTitleBar,
    RecipeBoxHomeTitleBar,
    RecipeBoxTitleBar,
    RecipeDetailsTitleBar
} from "./navigated-views-header-bars-content";
import {RecipeBoxPopupMenuWithStores} from "./popup-menu";
import MainAppTopNavigationTabsCustomTabBars from "./main-app-top-navigation-tabs-custom-tab-bars";

export default function BaseAppWithDrawerNavigationRouting() {

    const DrawerNav = createDrawerNavigator();

    const routeMap = [
        <DrawerNav.Screen
            name={MAIN_APP_STACK_SCREEN_VIEW.name}
            component={MAIN_APP_STACK_SCREEN_VIEW.screen}
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
            options={({route, navigation}) => {
                return {
                    swipeEnabled: false,
                };
            }}
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

export function MainAppStackRouting() {

    const StackNav = createStackNavigator();

    const routeMap = [
        <StackNav.Screen
            name={APP_TOP_TABS_SCREEN_VIEW.name}
            component={APP_TOP_TABS_SCREEN_VIEW.screen}
            key={makeId(16)}
            options={{
                headerTitle: props => <AppTopTabsTitleBar {...props} />,
            }}
        />,
        <StackNav.Screen
            name={PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW.name}
            component={PAGE4_SUB_ITEM_EXAMPLE_SCREEN_VIEW.screen}
            key={makeId(16)}
            options={{
                headerTitle: props => <Page4SubItemExampleTitleBar {...props} />,
            }}
        />,
        <StackNav.Screen
            name={_404_VIEW.name}
            component={_404_VIEW.screen}
            key={makeId(16)}
        />,
    ];

    return (
        <StackNav.Navigator
            initialRouteName={APP_TOP_TABS_SCREEN_VIEW.name}
            children={routeMap}
            screenOptions={{
                headerStyle: {
                    backgroundColor: MAIN_SUPPORT_COLOR,
                },
                headerTintColor: '#fff',
                headerTitleStyle: [
                    {
                        // fontWeight: 'bold',
                    }
                ],
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
            options={{
                headerTitle: props => <RecipeBoxTitleBar {...props} />,
            }}
        />,
        <StackNav.Screen
            name={RECIPE_BOX_BOTTOM_TABS_SCREEN_VIEW.name}
            component={RECIPE_BOX_BOTTOM_TABS_SCREEN_VIEW.screen}
            key={makeId(16)}
            options={{
                headerTitle: props => <RecipeBoxHomeTitleBar {...props} />,
                headerRight: props => <RecipeBoxPopupMenuWithStores {...props}/>,
                headerLeft: props => null//remove back arrow
            }}
        />,
        <StackNav.Screen
            name={MY_RECIPE_RECIPE_DETAILS_SCREEN_VIEW.name}
            component={MY_RECIPE_RECIPE_DETAILS_SCREEN_VIEW.screen}
            key={makeId(16)}
            options={{
                headerTitle: props => <RecipeDetailsTitleBar {...props} />,
            }}
        />,
        <StackNav.Screen
            name={MY_RECIPE_CREATE_EDIT_RECIPE_SCREEN_VIEW.name}
            component={MY_RECIPE_CREATE_EDIT_RECIPE_SCREEN_VIEW.screen}
            key={makeId(16)}
            options={{
                headerTitle: props => <CreateEditTitleBar {...props} />,
            }}
        />,
    ];

    return (
        <StackNav.Navigator
            children={routeMap}
            screenOptions={{
                headerStyle: {
                    backgroundColor: NEGATIVE_ACTION_COLOR,
                },
                headerTintColor: '#fff',
                headerTitleStyle: [],
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
            tabBar={props => <MainAppTopNavigationTabsCustomTabBars {...props}/>}
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
            tabBar={props => <RecipeBoxBottomNavigationTabsCustomTabBars {...props}/>}
            children={routeMap}
        />
    );

}

export function AppDevMocksWithRouting() {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={APP_DEV_MOCKS_SCREEN_VIEW.name}
            screenOptions={{
                headerStyle: {
                    backgroundColor: SECONDARY_SUPPORT_COLOR,
                },
                headerTintColor: '#fff',
                headerTitleStyle: [],
            }}
        >
            <Stack.Screen
                name={APP_DEV_MOCKS_SCREEN_VIEW.name}
                component={APP_DEV_MOCKS_SCREEN_VIEW.screen}
                options={{
                    headerTitle: props => <AppDevScratchTitleBar {...props} />,
                }}
            />
        </Stack.Navigator>
    );

}

import React, {ReactNode} from "react";
import { Animated, Easing } from "react-native";

/**
 * sd _ Kaybarax
 */
export interface ViewRoute {
    name: String;
    screen: ReactNode;
    options?: object;
}

export function ViewStackScreen(props) {

    let {Stack, name, component, options} = props;

    // return (
    //     <Stack.Screen name={name} component={component} options={options} />
    // );

}

/**
 * sd _ Kaybarax
 * @param viewRoutes
 * @returns {any}
 */
export function routeConfigMapBuilder(viewRoutes: Array<ViewRoute>) {
    let viewMap = {};
    for (let item of viewRoutes) {
        // @ts-ignore
        viewMap[item.name] = item.screen;
    }
    return viewMap;
}

/**
 * Define transition behavior during screen to screen navigation
 */
export const transitionConfig = () => ({
    transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0
    }
});

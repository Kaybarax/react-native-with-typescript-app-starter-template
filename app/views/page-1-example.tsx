//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from 'react';
import {inject, observer} from "mobx-react";
import appNavigation from "../routing-and-navigation/app-navigation";
import RN, {Text} from "react-native";
import {
    AlignCenterContentCN,
    AlignLeftFlexContainerContentCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../theme/app-layout-styles-classnames";
import className from "../util/react-native-based-utils";

function Page1Example(props) {

    const {
        appStore,
        authStore,
        navigation
    } = props;

    const _continueToPage2 = () => {
        appNavigation.navigateToPage2Example(navigation, null);
    };

    return (
        <RN.ScrollView
            contentInsetAdjustmentBehavior={"automatic"}
            style={[
                ...className(FlexColumnContainerCN)
            ]}
        >
            <RN.View
                style={[
                    ...className(FlexContainerChildItemFullWidthCN)
                ]}>
                <RN.View
                    style={[
                        ...className(FlexFluidRowContainerCN)
                    ]}
                >
                    <Text
                        style={[
                            ...className(FlexContainerChildItemFullWidthCN,
                                AlignCenterContentCN)
                        ]}
                    >Page 1 Example : Let's start here!</Text>
                </RN.View>
            </RN.View>

            <RN.View
                style={[
                    ...className(FlexContainerChildItemFullWidthCN)
                ]}
            >
                <RN.View
                    style={[
                        ...className(FlexFluidRowContainerCN,
                        )
                    ]}
                >
                    <RN.View
                        style={[
                            ...className(FlexContainerChildItemFullWidthCN)
                        ]}
                    >
                        <RN.View
                            style={[
                                ...className(FlexFluidRowContainerCN)
                            ]}
                        >
                            <Text
                                style={[
                                    ...className([
                                        FlexContainerChildItemFullWidthCN,
                                        AlignLeftFlexContainerContentCN
                                    ])
                                ]}
                            >
                                Hey there. So you have an SPA web app that you want to build with React
                                Js.<Text>{'\n'}</Text>
                                And you need to come up with an app-wide, system design setup. That is, system breakdown
                                to&nbsp;
                                individual bits and pieces like, routing and navigation, controllers, app's global&nbsp;
                                state management, and sharing components' state information;&nbsp;
                                configuring security access for your pages, as to which are publicly accessible, and
                                which&nbsp;
                                a user must be logged in and authenticated to access; and even different&nbsp;
                                types of access based on roles.<Text>{'\n'}</Text>
                                Well, this self-guiding design employed here in this,&nbsp;
                                "<Text>React Js SPA Web App with Login Starter Template Framework Design</Text>"&nbsp;
                                has got you covered.<Text>{'\n'}</Text><Text>{'\n'}</Text>
                                <Text
                                    // href={PAGE2EXAMPLE_SCREEN_VIEW.name}
                                    // onPress={_ => {
                                    //     _continueToPage2()
                                    // }}
                                >Continue to Page 2 Example to learn more...</Text>
                            </Text>
                        </RN.View>
                    </RN.View>
                </RN.View>
            </RN.View>
        </RN.ScrollView>
    );

}

export default (inject('authStore', 'appStore')(observer(Page1Example)));

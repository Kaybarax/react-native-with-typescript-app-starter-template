//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from 'react';
import appNavigation from "../routing-and-navigation/app-navigation";
import RN, {Text} from "react-native";
import {
    AlignCenterTextCN,
    AlignLeftTextCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../theme/app-layout-styles-classnames";
import className from "../util/react-native-based-utils";
import {LinkText} from "../theme/app-text-styles-classnames";
import {NewLine} from "../shared-components-and-modules/shared-components";
import WithStoresHoc from "../shared-components-and-modules/hocs/with-stores-hoc";

export function Page1Example(props) {

    const {
        navigation
    } = props;

    return (
        <RN.ScrollView
            contentInsetAdjustmentBehavior={"automatic"}
            style={[
                className(FlexColumnContainerCN)
            ]}
        >
            <RN.View
                style={[
                    className(FlexContainerChildItemFullWidthCN)
                ]}>
                <RN.View
                    style={[
                        className(
                            FlexFluidRowContainerCN,
                        )
                    ]}
                >
                    <Text
                        style={[
                            className(
                                FlexContainerChildItemFullWidthCN,
                                AlignCenterTextCN
                            )
                        ]}
                    >Page 1 Example : Let's start here!</Text>
                </RN.View>
            </RN.View>

            <RN.View
                style={[
                    className(FlexContainerChildItemFullWidthCN)
                ]}
            >
                <RN.View
                    style={[
                        className(FlexFluidRowContainerCN,
                        )
                    ]}
                >
                    <RN.View
                        style={[
                            className(FlexContainerChildItemFullWidthCN)
                        ]}
                    >
                        <RN.View
                            style={[
                                className(FlexFluidRowContainerCN)
                            ]}
                        >
                            <Text
                                style={[
                                    className([
                                        FlexContainerChildItemFullWidthCN,
                                        AlignLeftTextCN
                                    ])
                                ]}
                            >
                                Hey there. So you have a React Native app that you want to build; with Typescript
                                included.
                                <NewLine lines={3}/>
                                And you need to come up with an app-wide, design and setup. That is, system breakdown
                                to&nbsp;individual bits and pieces like, routing and navigation, controllers,&nbsp;
                                app's global state management, and sharing of components' state information;&nbsp;
                                configuring security access for your views, as to which are publicly accessible, and
                                which&nbsp;a user must be logged in and authenticated to access; and even
                                different&nbsp;
                                types of access based on roles.
                                <NewLine lines={3}/>
                                Well, this self-guiding design employed here in this,&nbsp;
                                "<Text>React Js SPA Web App with Login Starter Template Framework Design</Text>"&nbsp;
                                has got you covered.
                                <NewLine lines={3}/>
                                <RN.Pressable
                                    onPress={_ => {
                                        appNavigation.navigateToPage2Example(navigation, null);
                                    }}
                                >
                                    <Text
                                        style={[
                                            className(
                                                LinkText
                                            )
                                        ]}
                                    >Continue to Page 2 Example to learn more...</Text>
                                </RN.Pressable>
                            </Text>
                        </RN.View>
                    </RN.View>
                </RN.View>
            </RN.View>
        </RN.ScrollView>
    );

}

const Page1ExampleView = WithStoresHoc(Page1Example, ['page1ExampleStore', 'appStore']);
export default Page1ExampleView;

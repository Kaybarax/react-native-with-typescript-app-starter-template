//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React, {Component} from 'react';
import SafeComponentWrapper from '../safe-component-wrapper';
import RN, {Button, Image, ScrollView, Text, View} from "react-native";
import {
    AlignCenterContentCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../theme/app-layout-styles-classnames";
import className from "../util/react-native-based-utils";

export default class NotFound extends Component {

    render() {
        return (
            <SafeComponentWrapper>
                <ScrollView
                    contentInsetAdjustmentBehavior={"automatic"}
                    style={[
                        ...className(FlexColumnContainerCN),
                    ]}
                >
                    <View
                        style={[
                            ...className(FlexFluidRowContainerCN)
                        ]}
                    >
                        <View
                            style={[
                                ...className(
                                    FlexContainerChildItemFullWidthCN,
                                )
                            ]}
                        >
                            <View
                                style={[
                                    ...className(FlexFluidRowContainerCN)
                                ]}
                            >
                                <Text
                                    style={[
                                        ...className(FlexContainerChildItemFullWidthCN,
                                            AlignCenterContentCN)
                                    ]}
                                >
                                    Oops! View, Not Found
                                </Text>
                            </View>
                        </View>
                        <View
                            style={[
                                ...className(
                                    FlexContainerChildItemFullWidthCN,
                                    {
                                        paddingTop: 10
                                    },
                                )
                            ]}
                        >
                            <View
                                style={[
                                    ...className()
                                ]}
                            >
                                <Button
                                    title={'Return'}
                                    onPress={() => {
                                        //
                                    }}
                                />
                            </View>
                        </View>
                        <View
                            style={[
                                ...className(
                                    FlexContainerChildItemFullWidthCN,
                                    {
                                        paddingTop: 10
                                    },
                                )
                            ]}
                        >
                            <View
                                style={[
                                    ...className(FlexFluidRowContainerCN)
                                ]}
                            >
                                <View
                                    style={[
                                        ...className(
                                            FlexContainerChildItemFullWidthCN,
                                            {
                                                paddingTop: 10
                                            },
                                        )
                                    ]}
                                >
                                    <Image
                                        source={require('../media/images/_404_.png')}
                                        style={[
                                            {
                                                width: '100%',
                                                height: '100%',
                                            }
                                        ]}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeComponentWrapper>
        );
    }
}

//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React, {Component} from 'react';
import RN from 'react-native';
import SafeComponentWrapper from "../safe-component-wrapper";
import {
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../theme/app-layout-styles-classnames";
import className from "../util/react-native-based-utils";
import {BlankSpaceDivider} from "../shared-components-and-modules/shared-components";

export default class AppDevScratchPad extends Component {

    render() {
        return (
            <SafeComponentWrapper>
                <RN.ScrollView
                    style={[
                        ...className(FlexColumnContainerCN)
                    ]}
                >
                    <RN.View
                        style={[
                            ...className(FlexFluidRowContainerCN)
                        ]}
                    >
                        <RN.View
                            style={[
                                // ...className(FlexContainerChildItemFullWidthCN)
                                FlexContainerChildItemFullWidthCN
                            ]}
                        >
                            <RN.Text
                                // h5
                                style={[]}
                            >
                                MOCK STUFF AWAY TO YOUR HEARTS DESIRE!!
                            </RN.Text>
                        </RN.View>
                    </RN.View>

                    <RN.View
                        style={{paddingTop: 40}}
                    >
                        <RN.Button
                            title={'Go Home'}
                            // children={
                            //     <RN.Text></RN.Text>
                            // }
                            // style={[
                            //     ...className()
                            // ]}
                            onPress={_ => {
                                // window.location.href = '/';
                            }}
                        />
                        <BlankSpaceDivider/>
                        <RN.View>
                            <RN.View
                                // form
                                style={[]}
                            >
                                <RN.Text
                                    style={[
                                        //
                                    ]}
                                >
                                    Mock file upload for example
                                </RN.Text>
                                <BlankSpaceDivider/>
                                <RN.Button
                                    title={'Upload a file'}
                                    // children={
                                    //     <RN.Text></RN.Text>
                                    // }
                                    // style={[
                                    //     ...className()
                                    // ]}
                                    onPress={_ => {
                                        // window.location.href = '/';
                                    }}
                                />
                                <BlankSpaceDivider/>
                                <RN.Button
                                    title={'Submit file upload'}
                                    // children={
                                    //     <RN.Text></RN.Text>
                                    // }
                                    // style={[
                                    //     ...className()
                                    // ]}
                                    onPress={_ => {
                                        // window.location.href = '/';
                                    }}
                                />
                            </RN.View>
                            <BlankSpaceDivider/>
                        </RN.View>
                    </RN.View>
                    <BlankSpaceDivider/>
                </RN.ScrollView>
            </SafeComponentWrapper>
        );
    }
}

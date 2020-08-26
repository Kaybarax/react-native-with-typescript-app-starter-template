//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React, { Component } from 'react';
import RN from 'react-native';
import SafeComponentWrapper from "../safe-component-wrapper";
import {
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN,
    AlignCenterContentCN,
    AllViewsCN
} from "../theme/app-layout-styles-classnames";
import className from "../util/react-native-based-utils";
import { BlankSpaceDivider } from "../shared-components-and-modules/shared-components";
import { createPasswordHash } from '../android-custom-native-modules/app-security-custom-native-module';
import { makeId } from '../util/util';
// import { UserCredentials } from '../app-management/data-manager/models-manager';

export default class AppDevScratchPad extends Component {

    render() {
        console.log('Comp props: ', this.props);
        return (
            <SafeComponentWrapper>
                <RN.ScrollView
                    style={[
                        className(FlexColumnContainerCN, AllViewsCN)
                    ]}
                >
                    <RN.View
                        style={[
                            className(FlexFluidRowContainerCN,
                                AllViewsCN)
                        ]}
                    >
                        <RN.View
                            style={[
                                className(
                                    FlexContainerChildItemFullWidthCN,
                                    AllViewsCN
                                )
                            ]}
                        >
                            <RN.Text
                                // h5
                                style={[
                                    className(
                                        FlexFluidRowContainerCN,
                                        AlignCenterContentCN, AllViewsCN
                                    )
                                ]}
                            >
                                MOCK STUFF AWAY TO YOUR HEARTS DESIRE!!
                            </RN.Text>
                        </RN.View>
                    </RN.View>

                    <RN.View
                        style={[
                            className(
                                FlexContainerChildItemFullWidthCN,
                                AllViewsCN,
                                { paddingTop: 10 }
                            ),
                        ]}
                    >
                        <RN.Button
                            title={'Go Home'}
                            // style={[
                            //     className()
                            // ]}
                            onPress={_ => {
                                // window.location.href = '/';
                            }}
                        />
                        <BlankSpaceDivider />
                        <RN.View
                            style={[
                                className(
                                    FlexFluidRowContainerCN,
                                    AllViewsCN
                                )
                            ]}
                        >
                            <RN.View
                                // form
                                style={[
                                    className(
                                        FlexContainerChildItemFullWidthCN,
                                        AllViewsCN
                                    )
                                ]}
                            >
                                <RN.Text
                                    style={[
                                        className(
                                            FlexFluidRowContainerCN,
                                            AlignCenterContentCN, AllViewsCN
                                        )
                                    ]}
                                >
                                    Mock file upload for example
                                </RN.Text>
                                <BlankSpaceDivider />
                                <RN.Button
                                    title={'Upload a file'}
                                    // style={[
                                    //     className()
                                    // ]}
                                    onPress={_ => {
                                        // window.location.href = '/';
                                    }}
                                />
                                <BlankSpaceDivider />
                                <RN.Button
                                    title={'Submit file upload'}
                                    // style={[
                                    //     className()
                                    // ]}
                                    onPress={_ => {
                                        // window.location.href = '/';
                                    }}
                                />
                            </RN.View>
                            <BlankSpaceDivider />
                            <RN.View
                                // form
                                style={[
                                    className(
                                        FlexContainerChildItemFullWidthCN,
                                        AllViewsCN
                                    )
                                ]}
                            >
                                <RN.Text
                                    style={[
                                        className(
                                            FlexFluidRowContainerCN,
                                            AlignCenterContentCN, AllViewsCN
                                        )
                                    ]}
                                >
                                    Call a native module
                                </RN.Text>
                                <BlankSpaceDivider />
                                <RN.Button
                                    title={'Call password hash native module'}
                                    // style={[
                                    //     className()
                                    // ]}
                                    onPress={_ => {

                                        let password = makeId(8);

                                        console.log('Call password hash for: ', password);
                                        let yieldedUserCredentials = createPasswordHash(password, null, null);
                                        let value = yieldedUserCredentials.next().value;
                                        // let { password_hash, salt }: UserCredentials = yieldedUserCredentials.next().value;
                                        console.log('yieldedUserCredentials: ', value);

                                        // handleSignUp(null, null,null)

                                    }}
                                />
                            </RN.View>
                        </RN.View>
                    </RN.View>
                    <BlankSpaceDivider />
                </RN.ScrollView>
            </SafeComponentWrapper>
        );
    }
}

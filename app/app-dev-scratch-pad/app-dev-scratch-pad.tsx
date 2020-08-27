//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from 'react';
import RN from 'react-native';
import SafeComponentWrapper from "../safe-component-wrapper";
import {
    AlignCenterContentCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../theme/app-layout-styles-classnames";
import className from "../util/react-native-based-utils";
import {BlankSpaceDivider} from "../shared-components-and-modules/shared-components";
import {createPasswordHash} from '../android-custom-native-modules/app-security-custom-native-module';
import {makeId} from '../util/util';
import RnMultiSelectKaybarax from "../shared-components-and-modules/form-controls/rn-multi-select-kaybarax";

export default function AppDevScratchPad(props) {

    console.log('Comp props: ', props);

    let [multiSelectDialogIsOpen, toggleOpenMultiSelectDialog] = React.useState(false);

    return (
        <SafeComponentWrapper>

            <RN.ScrollView
                style={[
                    className(FlexColumnContainerCN)
                ]}
            >

                <RN.View
                    style={[
                        className(FlexFluidRowContainerCN)
                    ]}
                >

                    <RN.View
                        style={[
                            className(
                                FlexContainerChildItemFullWidthCN
                            )
                        ]}
                    >
                        <RN.Text
                            // h5
                            style={[
                                className(
                                    FlexFluidRowContainerCN,
                                    AlignCenterContentCN,
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
                            {paddingTop: 10}
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
                    <BlankSpaceDivider/>
                    <RN.View
                        style={[
                            className(
                                FlexFluidRowContainerCN,
                            )
                        ]}
                    >
                        <RN.View
                            // form
                            style={[
                                className(
                                    FlexContainerChildItemFullWidthCN,
                                )
                            ]}
                        >
                            <RN.Text
                                style={[
                                    className(
                                        FlexFluidRowContainerCN,
                                        AlignCenterContentCN
                                    )
                                ]}
                            >
                                Mock file upload for example
                            </RN.Text>
                            <BlankSpaceDivider/>
                            <RN.Button
                                title={'Upload a file'}
                                // style={[
                                //     className()
                                // ]}
                                onPress={_ => {
                                    // window.location.href = '/';
                                }}
                            />
                            <BlankSpaceDivider/>
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
                        <BlankSpaceDivider/>
                        <RN.View
                            // form
                            style={[
                                className(
                                    FlexContainerChildItemFullWidthCN,
                                )
                            ]}
                        >
                            <RN.Text
                                style={[
                                    className(
                                        FlexFluidRowContainerCN,
                                        AlignCenterContentCN,
                                    )
                                ]}
                            >
                                Call a native module
                            </RN.Text>
                            <BlankSpaceDivider/>
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

                <BlankSpaceDivider/>

                <RN.View
                    style={[
                        className(
                            FlexContainerChildItemFullWidthCN
                        )
                    ]}
                >
                    <RN.Text>Test Multi select component</RN.Text>

                    <RnMultiSelectKaybarax
                        style={{zIndex: 100000000}}
                        itemsList={
                            itemsList
                        }
                        selectedItems={selectedItems}
                        onItemSelected={value => {

                            console.log('WAS SELECTED', value);

                        }}
                        onItemRemoved={value => {

                            console.log('WAS REMOVED', value);

                        }}
                        multiSelectDialogIsOpen={multiSelectDialogIsOpen}
                        toggleOpenMultiSelectDialog={(value) => {
                            toggleOpenMultiSelectDialog(value);
                        }}
                    />

                </RN.View>


            </RN.ScrollView>
        </SafeComponentWrapper>
    );
}

const itemsList = [];
const selectedItems = [];

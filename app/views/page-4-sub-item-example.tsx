//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import {inject, observer} from "mobx-react";
import {isEmptyArray, isNullUndefined, makeId} from "../util/util";
import {SOs_and_Credits_List} from "../app-management/data-manager/list-manager";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import appNavigation from "../routing-and-navigation/app-navigation";
import RN, {Image, Text} from "react-native";
import {
    AlignCenterContentCN,
    AlignLeftFlexContainerContentCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../theme/app-layout-styles-classnames";
import className from "../util/react-native-based-utils";

function Page4SubItemExample(props) {

    const {
        params
    } = props;

    let {item} = params;
    let person = SOs_and_Credits_List.find(it => it.person === item);

    if (isNullUndefined(person)) {
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
                    ]}
                >

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
                            // h5
                        >
                            No user details
                        </Text>
                    </RN.View>

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
                            <RN.TouchableOpacity
                                style={[
                                    ...className(FlexContainerChildItemFullWidthCN)
                                ]}
                                onPress={_ => {
                                    // appNavigation.navigateToPage4Example(navigation, null);
                                }}
                            >
                                <Text
                                    style={[
                                        ...className(AlignCenterContentCN),
                                        {width: '100%'}
                                    ]}
                                >
                                    Go back
                                </Text>
                            </RN.TouchableOpacity>
                        </RN.View>
                    </RN.View>
                    <RN.View style={[{height: 10}]}/>
                </RN.View>
            </RN.ScrollView>
        )
    }

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
                ]}
            >

                <RN.View
                    style={[
                        ...className(FlexFluidRowContainerCN)
                    ]}
                    // className={'flex-row-container'}
                >
                    <Text
                        style={[
                            ...className(FlexContainerChildItemFullWidthCN,
                                AlignCenterContentCN)
                        ]}
                        // h5
                        // className="title is-5"
                    >
                        Page 4 Item Example : Accredited Details
                    </Text>
                </RN.View>
            </RN.View>

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
                    <RN.View
                        style={[
                            ...className(FlexContainerChildItemFullWidthCN)
                        ]}
                    >
                        <Image
                            source={require("../media/images/image.png")}
                        />
                    </RN.View>
                </RN.View>
            </RN.View>

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
                            ...className(FlexContainerChildItemFullWidthCN,
                                AlignLeftFlexContainerContentCN)
                        ]}
                        // h4
                    >
                        {person && person.person}
                    </Text>
                    {
                        !isEmptyArray(person?.links) &&
                        person?.links.map(item => {
                            return (
                                <RN.Text
                                    style={[
                                        ...className(FlexContainerChildItemFullWidthCN,
                                            AlignLeftFlexContainerContentCN)
                                    ]}
                                    key={makeId(8)}
                                >
                                    {item.site}
                                </RN.Text>
                            )
                        })
                    }
                    <Text
                        style={[
                            ...className(FlexContainerChildItemFullWidthCN,
                                AlignLeftFlexContainerContentCN)
                        ]}
                    >
                        <FontAwesomeIcon icon={faCoffee}/>
                    </Text>
                    <Text
                        style={[
                            ...className(FlexContainerChildItemFullWidthCN,
                                AlignLeftFlexContainerContentCN)
                        ]}
                    >
                        {(new Date()).toLocaleDateString()}
                    </Text>
                </RN.View>
            </RN.View>

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
                    <RN.View
                        style={[
                            ...className(FlexContainerChildItemFullWidthCN)
                        ]}
                    >
                        <Image
                            source={require("../media/images/short-paragraph.png")}
                            // alt="Placeholder image"
                        />
                    </RN.View>
                </RN.View>
            </RN.View>

            <RN.View
                style={[
                    ...className(FlexContainerChildItemFullWidthCN)
                ]}
            >
                <RN.TouchableOpacity
                    style={[
                        ...className(FlexContainerChildItemFullWidthCN)
                    ]}
                    onPress={_ => {
                        // appNavigation.navigateToPage4Example(navigation, null);
                    }}
                >
                    <Text
                        style={[
                            {
                                width: '100%'
                            },
                            ...className(AlignCenterContentCN)
                        ]}
                        // className="button is-info"
                    >
                        Go back
                    </Text>
                </RN.TouchableOpacity>
            </RN.View>

            <RN.View style={[{height: 10}]}/>

        </RN.ScrollView>
    );

}

export default (inject('authStore', 'appStore')(observer(Page4SubItemExample)));

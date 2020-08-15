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
import {isEmptyArray} from "../util/util";
import {SOs_and_Credits_List} from "../app-management/data-manager/list-manager";
import appNavigation from "../routing-and-navigation/app-navigation";
import RN, {Image, Text, View} from "react-native";
import {
    AlignCenterContentCN,
    AlignLeftFlexContainerContentCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../theme/app-layout-styles-classnames";
import className from "../util/react-native-based-utils";

function Page4Example(props) {

    const {
        navigation
    } = props;

    const _viewAttributedPersonDetails = (person) => {
        appNavigation.navigateToPage4SubItemExample(navigation, {item: person})
    };

    return (
        <RN.ScrollView
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
                    >
                        Page 4 Example : About me, and S/Os and credits
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
                                <Text
                                    // strong
                                >About me:</Text><Text>{'\n'}</Text>
                                Hi. I'm Kevin Barasa. A full stack software engineer currently based in my hometown
                                and&nbsp;
                                country, Nairobi, Kenya. At this time of this build and writing (May, 2020), I have 3
                                and&nbsp;a half years of professional (hired) software engineering experience, and 5 to
                                6 yrs
                                of&nbsp;
                                total software engineering experience, both professionally and
                                personally.<Text>{'\n'}</Text>
                                I'm especially, particularly well versed with
                                <Text
                                    // i
                                >Java</Text>,
                                <Text
                                    // i
                                >SQL
                                    (MySQL/OracleSQL)</Text>,&nbsp;
                                <Text
                                    // i
                                >Javascript and web technologies</Text>,
                                <Text
                                    // i
                                >Mobile app development with React Native and
                                    Android</Text>,&nbsp;
                                and I have, and can as well work with other languages and technologies like&nbsp;
                                <Text
                                    // i
                                >Python, C++, C#, Dart, NoSQL Dbs, and AWS cloud</Text>.
                                <Text>{'\n'}</Text><Text>{'\n'}</Text>

                                <Text>Let's connect:</Text><Text>{'\n'}</Text>
                                LinkedIn:
                                <Text
                                    // href={'https://linkedin.com/in/kaybarax'} target={'_blank'}
                                >Kevin Barasa
                                    (kaybarax)</Text><Text>{'\n'}</Text>
                                Github:
                                <Text
                                    // href={'https://github.com/Kaybarax'} target={'_blank'}
                                >Kaybarax</Text><Text>{'\n'}</Text>
                                Twitter:
                                <Text
                                    // href={'https://twitter.com/Kaybarax'} target={'_blank'}
                                >Kaybarax</Text>
                                <Text>{'\n'}</Text><Text>{'\n'}</Text>

                                <Text
                                    // strong
                                >Shout out's and credits:</Text><Text>{'\n'}</Text>

                                <React.Fragment
                                    //className="flex-column-container"
                                >
                                    {
                                        !isEmptyArray(SOs_and_Credits_List) &&
                                        SOs_and_Credits_List.map((item, i) => {

                                            return (
                                                <View key={i}
                                                    //className="flex-container-child-item-full-width"
                                                >
                                                    <View
                                                        //className="flex-fluid-row-container"
                                                    >
                                                        <View
                                                            //className="flex-container-child-item-one-quarter-width"
                                                        >
                                                            <View
                                                                //className=""
                                                            >
                                                                <View>
                                                                    <Image
                                                                        source={require('../media/images/image.png')}
                                                                        // alt={'alt'}
                                                                        style={{
                                                                            width: 96,
                                                                            height: 96,
                                                                        }}
                                                                    />
                                                                    <View>
                                                                        <Text
                                                                            // href={item.links[0].link}
                                                                            // target={'_blank'}
                                                                            // onPress={_ => _viewAttributedPersonDetails( item.person)}
                                                                        >
                                                                            {item.person}
                                                                        </Text>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View
                                                            //className="flex-container-child-item-one-quarter-width"
                                                        >
                                                            <View
                                                                //className=""
                                                            >
                                                                <Text>A little about {item.person}, click to view full
                                                                    details</Text>
                                                                <Image
                                                                    source={require('../media/images/short-paragraph.png')}
                                                                    // alt={'alt'}
                                                                    style={{
                                                                        width: 520,
                                                                        height: 84,
                                                                    }}
                                                                    // onPress={e => _viewAttributedPersonDetails(e, item.person)}
                                                                />
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            );

                                        })
                                    }

                                </React.Fragment>

                            </Text>
                        </RN.View>
                    </RN.View>
                </RN.View>
            </RN.View>

        </RN.ScrollView>
    );

}

export default (inject('authStore', 'appStore')(observer(Page4Example)));

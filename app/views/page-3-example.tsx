//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import appNavigation from "../routing-and-navigation/app-navigation";
import RN, {Text} from "react-native";
import {
    AlignCenterTextCN,
    AlignLeftFlexContainerContentCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../theme/app-layout-styles-classnames";
import className from "../util/react-native-based-utils";
import {NewLine} from "../shared-components-and-modules/shared-components";
import {LinkText} from "../theme/app-text-styles-classnames";
import WithStoresHoc from "../shared-components-and-modules/hocs/with-stores-hoc";

function Page3Example(props) {

    const {
        navigation
    } = props;

    return (
        <RN.ScrollView
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
                        className(FlexFluidRowContainerCN)
                    ]}
                >
                    <Text
                        style={[
                            className(FlexContainerChildItemFullWidthCN,
                                AlignCenterTextCN)
                        ]}
                    >
                        Page 3 Example : All batteries included, and all the whistles and bells!
                    </Text>
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
                                    className(
                                        FlexContainerChildItemFullWidthCN,
                                        AlignLeftFlexContainerContentCN
                                    )
                                ]}
                            >
                                <Text>So, what's under the hood!!</Text>

                                <Text>State/Stores Manager:</Text>

                                <NewLine lines={3}/>

                                The extremely, philosophically, and amazingly powerful MobX.

                                <NewLine lines={3}/>
                                You can read more about&nbsp;
                                <Text
                                    // link
                                    // href={'https://twitter.com/mweststrate'}
                                    // target={'_blank'}
                                >
                                    Michel Weststrate's powerful MobX&nbsp; state manager creation, here,
                                </Text>

                                <Text
                                    // link
                                    // href={'https://mobx-state-tree.js.org/intro/philosophy'}
                                    // target={'_blank'}
                                >
                                    About MobX
                                </Text>
                                <NewLine lines={3}/>
                                As mentioned earlier, currently, the system design persists your running app's
                                state/stores
                                to&nbsp;,
                                <Text
                                    // i
                                >
                                    localStorage
                                </Text>
                                ,&nbsp;Web Storage, but you can upgrade to&nbsp;
                                <Text
                                    // i
                                >
                                    IndexedDb
                                </Text>&nbsp;
                                if you are dealing with heavy data. I have already&nbsp;
                                implemented IndexedDb in some parts of the system, so you have a point of reference to
                                pick up from.
                                <NewLine lines={3}/>

                                <Text>Router for routing and navigation:</Text>
                                <NewLine lines={3}/>
                                Keeping with the beloved, extremely, philosophically, and amazingly powerful MobX, my
                                routing and&nbsp;
                                navigation logic and design, is wrapped around
                                <Text
                                    // i
                                >MobX State Router</Text> created by&nbsp;
                                <Text
                                    // href={'https://twitter.com/NareshJBhatia'} target={'_blank'}
                                >
                                    Naresh Bhatia
                                </Text>.
                                You can see&nbsp;more
                                about it here,&nbsp;
                                <Text
                                    // href={'https://nareshbhatia.github.io/mobx-state-router/docs/guides-getting-started'}
                                    // target={'_blank'}
                                >About MobX State Router</Text>
                                <NewLine lines={3}/>

                                <Text>And there you have it folks:</Text>
                                <NewLine lines={3}/>
                                So, Come up with frontend application design architecture from experience, over the
                                years;&nbsp;
                                get those components above, and put them together with React js; and you have an all
                                batteries
                                included,&nbsp;
                                shiny whistles and bells, React Js SPA web app template framework to start you off to
                                build, both your web
                                app&nbsp;
                                that facilitates a secure app with sign up, login and authentication; or even a static
                                web app like&nbsp;
                                you would get with Gatsby Js or Next Js, the only difference being that those are Server
                                Side
                                Rendered&nbsp;
                                (SSR) while this is an all frontend side, single package packaged
                                SPA.<NewLine lines={3}/>
                                This current design mode is for an SPA with built in
                                <Text
                                    // i
                                >Login and Sign Up</Text> facilities
                                for a&nbsp;
                                secured web app. Next up after this, one for a completely unsecured web app from the
                                start, for your&nbsp;
                                unsecured web app static site starter; it will still have the facilities for setting up
                                login and&nbsp;
                                sign up like in this design, so you can convert it for that use case if you wish.&nbsp;
                                And you can also, of course, tweak and turn off the,&nbsp;
                                login and sign up, facilities in this web app template framework if you wish, and just
                                use it as an,
                                unsecured&nbsp;
                                SPA web app, static site generator.
                                <NewLine lines={3}/>

                                And now!
                                <NewLine lines={3}/>

                                <RN.Pressable
                                    onPress={_ => {
                                        appNavigation.navigateToPage4Example(navigation, null);
                                    }}
                                >
                                    <Text
                                        style={[
                                            className(
                                                LinkText
                                            )
                                        ]}
                                    >
                                        On to the credits, S/O and wrap up ... Continue to Page 4 Example...
                                    </Text>
                                </RN.Pressable>
                                <NewLine lines={3}/>
                            </Text>
                        </RN.View>
                    </RN.View>
                </RN.View>
            </RN.View>

        </RN.ScrollView>
    );

}

const Page3ExampleView = WithStoresHoc(Page3Example, ['authStore', 'appStore']);
export default Page3ExampleView;

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
import {LinkText} from "../theme/app-text-styles-classnames";
import {NewLine} from "../shared-components-and-modules/shared-components";
import WithStoresHoc from "../stores/with-stores-hoc";

function Page2Example(props) {

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
                        className(FlexFluidRowContainerCN)
                    ]}
                >
                    <Text
                        style={[
                            className(
                                FlexContainerChildItemFullWidthCN,
                                AlignCenterTextCN
                            )
                        ]}
                    >
                        Page 2 Example : The design philosophy!
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
                                <Text>App working data and main components state/data (the stores):</Text>
                                <NewLine lines={3}/>
                                All app working data, and main components state is managed in your
                                "stores."
                                <NewLine lines={3}/>
                                So, you have a main store <Text>"app"</Text> which, specifically, is for managing <Text>running
                                app</Text> data.
                                <NewLine lines={3}/>
                                Then you have other stores based on, and for your app's main components, in this
                                showcase,&nbsp;
                                that would be the components [page1, page2, page3, page4]. Those stores essential hold
                                the
                                component's&nbsp;
                                state globally, such that their information can be shared across each
                                other.
                                <NewLine lines={3}/>

                                The stores mini-ecosystem within the the design is setup in its directory across
                                multiple
                                files&nbsp;
                                that are very much self explanatory to their roles. As you use this design system, just
                                go
                                with&nbsp;
                                the flow there to extend (especially for "app" store) and add your own new stores
                                for&nbsp;
                                your app's components; and if you feel you can and want to improve on their design, of
                                course,
                                sure you can.
                                <NewLine lines={3}/>
                                The stores are persisted to localStorage so that you don't lose your working data across
                                page reloads.
                                <NewLine lines={3}/>

                                <Text>Controllers functions:</Text>
                                <NewLine lines={3}/>
                                The first Javascript framework I worked with was AngularJs. That very first iteration of
                                Angular.
                                <NewLine lines={3}/>
                                And that's where I really got introduced to the MVC design pattern, hands on, after a
                                partial introduction in&nbsp;
                                Java's Swing. React is a view library and not a full blown framework like Angular. But I
                                am
                                sure like most&nbsp;
                                engineers, we like the practice of splitting things apart and dealing with them in
                                pieces.
                                So, let's&nbsp;
                                have React components' classes or functions only deal with mostly the UI rendering,
                                while
                                any and most&nbsp;
                                of functions that, that component/activity relies on be lifted out to a "controller"
                                file
                                for that&nbsp;
                                activity, and you can just import and use as you wish.
                                <NewLine lines={3}/>
                                Just like the stores, the "controllers" are wrapped in their own directory for clean
                                architecture&nbsp;
                                encapsulation of bits and pieces.
                                <NewLine lines={3}/>

                                <Text
                                    // strong
                                >Routing and navigation:</Text>
                                <NewLine lines={3}/>
                                Again, React being a view library, well, no router and navigation pattern inherently
                                included, and&nbsp;so it's up to the developer to pick and choose what they&nbsp;
                                fancy. So I have picked a router that I&nbsp;found fitting from experience with
                                it,&nbsp;
                                for this template framework design around React.
                                Details on&nbsp;
                                this choice of router, and other parts of the system, in the next example
                                page.
                                <NewLine lines={3}/>
                                And so with the selected router, I built around it a navigation and routing logic that
                                so
                                far,&nbsp;
                                so good, I can smile about, and I find serving the whole system design, pretty
                                well.
                                <NewLine lines={3}/>
                                Routing and navigation logic setup is wrapped up in its own
                                "routing-and-navigation"&nbsp;
                                directory. Follow the pattern therein, to add your own new routes and navigation
                                functionality&nbsp;
                                for your app.
                                <NewLine lines={3}/>

                                So the above are the major parts of the system that needed a special mention. The rest
                                are
                                rather&nbsp;
                                self explanatory from glance, container directory naming, and directory
                                included <Text>"ABOUT.md"</Text>
                                <NewLine lines={3}/>

                                Next up, what's in the box! What are bits and pieces that glue together, and power up
                                this SPA starter&nbsp;template framework design???
                                <NewLine lines={3}/>
                                <RN.Pressable
                                    onPress={_ => {
                                        appNavigation.navigateToPage3Example(navigation, null);
                                    }}
                                >
                                    <Text
                                        style={[
                                            className(
                                                LinkText
                                            )
                                        ]}
                                    >Continue to Page 3 Example...</Text>
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

const Page2ExampleView = WithStoresHoc(Page2Example, ['page2ExampleStore', 'appStore']);
export default Page2ExampleView;

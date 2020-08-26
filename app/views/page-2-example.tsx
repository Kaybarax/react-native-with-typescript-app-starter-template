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
import appNavigation from "../routing-and-navigation/app-navigation";
import RN, {Button, Text} from "react-native";
import {
    AlignCenterContentCN,
    AlignLeftFlexContainerContentCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../theme/app-layout-styles-classnames";
import className from "../util/react-native-based-utils";

function Page2Example(props) {

    const {
        navigation
    } = props;

    const _continueToPage3 = () => {
        appNavigation.navigateToPage3Example(navigation, null);
    };

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
                            className(FlexContainerChildItemFullWidthCN,
                                AlignCenterContentCN)
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
                                    className([
                                        FlexContainerChildItemFullWidthCN,
                                        AlignLeftFlexContainerContentCN
                                    ])
                                ]}
                            >
                                <Text>App working data and main components state/data (the
                                    stores):</Text><Text>{'\n'}</Text>
                                All app working data, and main components state is managed in your
                                "stores."<Text>{'\n'}</Text>
                                So, you have a main store <Text>"app"</Text> which, specifically, is for managing <Text>running
                                app</Text> data.<Text>{'\n'}</Text>
                                Then you have other stores based on, and for your app's main components, in this
                                showcase,&nbsp;
                                that would be the components [page1, page2, page3, page4]. Those stores essential hold
                                the
                                component's&nbsp;
                                state globally, such that their information can be shared across each
                                other.<Text>{'\n'}</Text>

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
                                sure you can.<Text>{'\n'}</Text>
                                The stores are persisted to localStorage so that you don't lose your working data across
                                page reloads.
                                <Text>{'\n'}</Text><Text>{'\n'}</Text>

                                <Text>Controllers functions:</Text><Text>{'\n'}</Text>
                                The first Javascript framework I worked with was AngularJs. That very first iteration of
                                Angular.<Text>{'\n'}</Text>
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
                                activity, and you can just import and use as you wish.<Text>{'\n'}</Text>
                                Just like the stores, the "controllers" are wrapped in their own directory for clean
                                architecture&nbsp;
                                encapsulation of bits and pieces.
                                <Text>{'\n'}</Text><Text>{'\n'}</Text>

                                <Text
                                    // strong
                                    >Routing and navigation:</Text><Text>{'\n'}</Text>
                                Again, React being a view library, well, no router and navigation pattern inherently
                                included, and&nbsp;
                                so it's up to the developer to pick and choose what they fancy. So I have picked a
                                router
                                that I&nbsp;
                                found fitting from experience with it, for this template framework design around React.
                                Details on&nbsp;
                                this choice of router, and other parts of the system, in the next example
                                page.<Text>{'\n'}</Text>
                                And so with the selected router, I built around it a navigation and routing logic that
                                so
                                far,&nbsp;
                                so good, I can smile about, and I find serving the whole system design, pretty
                                well.<Text>{'\n'}</Text>
                                Routing and navigation logic setup is wrapped up in its own
                                "routing-and-navigation"&nbsp;
                                directory. Follow the pattern therein, to add your own new routes and navigation
                                functionality&nbsp;
                                for your app.
                                <Text>{'\n'}</Text><Text>{'\n'}</Text>

                                So the above are the major parts of the system that needed a special mention. The rest
                                are
                                rather&nbsp;
                                self explanatory from glance, container directory naming, and directory
                                included <Text>"ABOUT.md"</Text><Text>{'\n'}</Text>

                                Next up, what's in the box! What are bits and pieces that glue together, and power up
                                this SPA
                                starter&nbsp;
                                template framework design???<Text>{'\n'}</Text><Text>{'\n'}</Text>

                                <Button
                                    title={'Continue to Page 3 Example...'}
                                    // href={PAGE3EXAMPLE_SCREEN_VIEW.routeName}
                                    onPress={_ => _continueToPage3()}
                                />
                            </Text>
                        </RN.View>
                    </RN.View>
                </RN.View>
            </RN.View>

        </RN.ScrollView>
    );

}

export default (inject('authStore', 'appStore')(observer(Page2Example)));

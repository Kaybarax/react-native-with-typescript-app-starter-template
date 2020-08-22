//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import RN from 'react-native';
import RecipeItemCard from "./recipe-item-card";
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import {displayFieldExpectationSatisfied} from "../../controllers/app-controller";
import {isEmptyArray, isTrue, makeId} from "../../util/util";
import className from "../../util/react-native-based-utils";
import {
    AlignCenterContentCN,
    AllViewsCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../../theme/app-layout-styles-classnames";
import WithStoresHoc from "../../shared-components-and-modules/hocs/with-stores-hoc";
import appNavigation from "../../routing-and-navigation/app-navigation";

export function RecipeHome(props) {

    let {recipeBoxStore} = props;
    let {toastNotificationAlert, recipes} = recipeBoxStore;

    if (isEmptyArray(recipes)) {
        return (
            <NoRecipesDisplay/>
        );
    }

    return (
        <RN.ScrollView
            contentInsetAdjustmentBehavior={"automatic"}
            style={[
                ...className(FlexColumnContainerCN)
            ]}
        >
            <RN.FlatList
                data={recipes}
                renderItem={recipe => <RecipeItemCard
                    recipe={recipe}
                    dashboardCard={true}
                />}
                keyExtractor={_ => makeId(16)}
            />

            {
                (displayFieldExpectationSatisfied('alert', toastNotificationAlert,
                    expectationOfX => isTrue(expectationOfX))) &&
                <RN.View
                    style={[
                        ...className(AllViewsCN),
                        {
                            position: 'absolute', bottom: 0
                        }
                    ]}
                >
                  <AppNotificationToastAlert
                      dropDownProps={toastNotificationAlert}
                  />
                </RN.View>
            }

        </RN.ScrollView>
    );

}

export function NoRecipesDisplay(props) {

    let {navigation, navStore} = props;

    return (
        <RN.ScrollView
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
                    <RN.Text
                        style={[
                            ...className(
                                FlexContainerChildItemFullWidthCN,
                                AlignCenterContentCN
                            ),
                            {
                                fontSize: 18,
                                fontWeight: 'bold'
                            }
                        ]}
                    >
                        You don't have any recipes. {'\n'}
                        From the menu, go to "Create/Edit Recipes" to create your recipes.
                    </RN.Text>
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
                        <RN.Button
                            title={'Exit'}
                            onPress={_ => {
                                appNavigation.navigateBack(navigation, null, navStore);
                            }}
                            color={'red'}
                        />
                    </RN.View>
                </RN.View>
            </RN.View>
        </RN.ScrollView>
    );

}

const RecipeHomeActivity = WithStoresHoc(RecipeHome,
    ['authStore', 'appStores', 'recipeBoxStore']);
export default RecipeHomeActivity;

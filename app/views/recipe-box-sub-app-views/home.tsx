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
import RecipeListItemCard from "./recipe-list-item-card";
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import {displayFieldExpectationSatisfied} from "../../controllers/app-controller";
import {deepCloneObject, isEmptyArray, isTrue, makeId} from "../../util/util";
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
import {Recipe, RecipeImage} from "../../app-management/data-manager/models-manager";
import {TEST_RECIPES, TEST_RECIPES_PHOTOS} from "../../../__tests__/test-data";

export function RecipeHome(props) {

    let {recipeBoxStore} = props;
    let {
        toastNotificationAlert,
        // recipes
    } = recipeBoxStore;

    //use development test data for now
    let recipes: Array<Recipe> | any = deepCloneObject(TEST_RECIPES);
    let recipesPhotos: Array<RecipeImage> | any = deepCloneObject(TEST_RECIPES_PHOTOS);

    if (isEmptyArray(recipes)) {
        return (
            <NoRecipesDisplay/>
        );
    }

    //inject needed appStore and recipeBoxStore
    let RecipeListItem = WithStoresHoc(RecipeListItemCard,['recipeBoxStore','appStore']);

    return (
        <RN.ScrollView
            contentInsetAdjustmentBehavior={"automatic"}
            style={[
                ...className(FlexColumnContainerCN)
            ]}
        >
            <RN.FlatList
                data={recipes}
                renderItem={item => <RecipeListItem
                    recipe={item}
                    recipePhotos={_ => {
                        let recipe: Recipe | any = item;
                        return isEmptyArray(recipesPhotos) ? []
                            : recipesPhotos?.filter(item => item.recipe_id === recipe.id);
                    }}
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
                                appNavigation.navigateBack(navigation, navStore, null);
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

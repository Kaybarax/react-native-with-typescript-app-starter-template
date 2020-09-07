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
import {isEmptyArray, isNullUndefined, isTrue, makeId} from "../../util/util";
import className from "../../util/react-native-based-utils";
import {
    AlignCenterContentCN, AlignCenterTextCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexFluidRowContainerCN
} from "../../theme/app-layout-styles-classnames";
import WithStoresHoc from "../../shared-components-and-modules/hocs/with-stores-hoc";
import appNavigation from "../../routing-and-navigation/app-navigation";
import {toJS} from "mobx";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {BlankSpaceDivider} from "../../shared-components-and-modules/shared-components";
import {createRecipe} from "../../controllers/recipe-box-sub-app-controllers/recipe-box-controller";
import {notificationCallback} from "../../shared-components-and-modules/notification-center/notifications-controller";
import {RECIPE_BOX_VIEWS_ACTIONS_ENUM} from "../../stores/actions-and-stores-data";
import {fetchUserRecipes} from "../../controllers/recipe-box-sub-app-controllers/create-edit-recipe-controller";
import {NEGATIVE_ACTION_COLOR} from "../../theme/app-theme";

export function RecipeHome(props) {

    console.log('props at RecipeHome:', toJS(props));

    let {recipeBoxStore, navigation, recipeBoxStore: {notificationAlert, user}} = props;

    let recipes = fetchUserRecipes(user.id);

    console.log('recipes!',);

    //inject needed appStore and recipeBoxStore
    let RecipeListItemCardWithStores = WithStoresHoc(RecipeListItemCard, ['recipeBoxStore', 'appStore']);

    return (
        <RN.View
            style={[
                className(FlexColumnContainerCN)
            ]}
        >

            {
                isEmptyArray(recipes) &&
                <NoRecipesDisplay/>
            }

            {
                !isEmptyArray(recipes) &&
                <RN.View
                    style={[
                        className(FlexContainerChildItemFullWidthCN)
                    ]}
                >
                  <RN.FlatList
                      data={recipes}
                      renderItem={(item: any) => <RecipeListItemCardWithStores
                          recipe={item.item.recipe}
                          recipePhotos={item.item.recipePhotos}
                          navigation={navigation}
                      />}
                      keyExtractor={_ => makeId(16)}
                  />
                </RN.View>
            }

            <BlankSpaceDivider height={150}/>

            <RN.TouchableOpacity
                style={[
                    {
                        borderRadius: 50,
                        backgroundColor: 'teal',
                        position: 'absolute',
                        bottom: '12%',
                        height: 80,
                        width: 80,
                        right: 20,
                    }
                ]}
                onPress={_ => {
                    //clear former
                    recipeBoxStore.selectedRecipe = null;
                    recipeBoxStore.selectedRecipePhotos = [];
                    //create new
                    createRecipe(recipeBoxStore);
                    if (
                        isNullUndefined(recipeBoxStore.selectedRecipe) ||
                        isEmptyArray(recipeBoxStore.selectedRecipePhotos)
                    ) {
                        notificationCallback('warn', 'Failed to create new recipe', notificationAlert);
                        return;
                    }
                    recipeBoxStore.viewAction = RECIPE_BOX_VIEWS_ACTIONS_ENUM.CREATE_RECIPE;
                    appNavigation.navigateToCreateEditRecipe(navigation,
                        {
                            recipe: recipeBoxStore.selectedRecipe,
                            recipePhotos: recipeBoxStore.selectedRecipePhotos,
                        });
                }}
            >
                <RN.Text
                    style={[
                        {
                            position: 'absolute',
                            top: 24,
                            right: 25,
                        }
                    ]}
                >
                    <FontAwesomeIcon
                        icon={faPlus}
                        color={'white'}
                        size={30}
                    />
                </RN.Text>
            </RN.TouchableOpacity>

            {
                (displayFieldExpectationSatisfied('alert', notificationAlert,
                    expectationOfX => isTrue(expectationOfX))) &&
                <RN.View
                    style={[
                        {
                            position: 'absolute',
                            top: 0,
                            width: '100%'
                        }
                    ]}
                >
                  <AppNotificationToastAlert
                      dropDownProps={notificationAlert}
                  />
                </RN.View>
            }

        </RN.View>
    );

}

export function NoRecipesDisplay() {
    return (
        <RN.ScrollView
            style={[
                className(FlexColumnContainerCN)
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
                    <RN.Text
                        style={[
                            className(
                                FlexContainerChildItemFullWidthCN,
                                AlignCenterTextCN
                            ),
                            {
                                fontSize: 18,
                                fontWeight: 'bold',
                                color: NEGATIVE_ACTION_COLOR,
                            }
                        ]}
                    >
                        You don't have any recipes!
                    </RN.Text>
                </RN.View>
            </RN.View>
        </RN.ScrollView>
    );

}

const RecipeHomeActivity = WithStoresHoc(RecipeHome,
    ['loginStore', 'appStore', 'recipeBoxStore']);
export default RecipeHomeActivity;

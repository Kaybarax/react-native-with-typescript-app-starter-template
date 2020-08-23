//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import RN, {View} from 'react-native';
import {BlankSpaceDivider} from "../../shared-components-and-modules/shared-components";
import {displayFieldExpectationSatisfied} from "../../controllers/app-controller";
import {
    isEmptyArray,
    isEmptyString,
    isFalse,
    isTrue,
    localeDateStringFormatFromDatetime,
    localeTimeStringFormatFromDatetime,
    makeId
} from "../../util/util";
import className from "../../util/react-native-based-utils";
import {
    AlignLeftFlexContainerContentCN,
    AlignRightFlexContainerContentCN,
    AllViewsCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexContainerChildItemNoGrowCN,
    FlexContainerChildItemOneHalfWidthCN,
    FlexContainerChildItemOneThirdWidthCN,
    FlexFluidRowContainerCN
} from "../../theme/app-layout-styles-classnames";
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import {Recipe, RecipeImage} from "../../app-management/data-manager/models-manager";
import StarRatings from "../../shared-components-and-modules/form-controls/star-ratings";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import {RECIPE_BOX_VIEWS_ACTIONS_ENUM} from "../../stores/actions-and-stores-data";
import appNavigation from "../../routing-and-navigation/app-navigation";

export default function RecipeListItemCard(props) {

    let {
        dashboardCard, recipeBoxStore,
        navigation, appStore: {navStore},
        recipeBoxStore: {viewAction, toastNotificationAlert}
    } = props;
    let recipe: Recipe = props.recipe;
    let recipePhotos: Array<RecipeImage> = props.recipePhotos;

    return (
        <RN.ScrollView
            style={[
                ...className(FlexColumnContainerCN)
            ]}
            contentInsetAdjustmentBehavior={"automatic"}
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

                    <RN.ScrollView
                        horizontal={true}
                    >
                        {
                            !isEmptyArray(recipePhotos) &&
                            (recipePhotos.map((item: RecipeImage) => {
                                return (
                                    <RN.Image
                                        source={
                                            !isEmptyString(item?.image_url) ?
                                                require('' + item.image_url) : (
                                                    !isEmptyString(item?.image_file) ?
                                                        'data:image/jpeg;base64,' + item.image_file :
                                                        null
                                                )
                                        }
                                        style={[
                                            {
                                                width: '100%',
                                                height: '100%',
                                            }
                                        ]}
                                        key={makeId(16)}
                                    />
                                );
                            }))
                        }
                    </RN.ScrollView>

                </RN.View>

                <RN.View
                    style={[
                        ...className(FlexFluidRowContainerCN)
                    ]}
                >
                    <RN.Text
                        style={[
                            ...className(FlexContainerChildItemFullWidthCN,
                                AlignLeftFlexContainerContentCN)
                        ]}
                    >{recipe.name}</RN.Text>
                </RN.View>

                <RN.View
                    style={[
                        ...className(FlexFluidRowContainerCN)
                    ]}
                >

                    <RN.View
                        style={[
                            ...className(FlexContainerChildItemOneHalfWidthCN,
                                AlignLeftFlexContainerContentCN)
                        ]}
                    >
                        <RN.Text>
                            <StarRatings
                                disabled={null}
                                ratings={recipe?.rating || 0}
                            />
                        </RN.Text>
                    </RN.View>

                    {
                        isTrue(recipe.is_vegetarian) &&
                        <RN.View
                            style={[
                                ...className(FlexContainerChildItemOneHalfWidthCN,
                                    AlignRightFlexContainerContentCN)
                            ]}
                        >
                          <RN.Text>
                            <FontAwesomeIcon
                                icon={faLeaf}
                                color={'forestgreen'}
                                size={30}
                                style={{
                                    // marginTop: 20
                                }}
                            />
                          </RN.Text>
                          Vegetarian
                        </RN.View>
                    }

                </RN.View>

                <RN.View
                    style={[
                        ...className(FlexFluidRowContainerCN)
                    ]}
                >

                    {
                        isFalse(dashboardCard) &&
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
                                    ...className(FlexContainerChildItemFullWidthCN,
                                        AlignLeftFlexContainerContentCN)
                                ]}
                            >
                              Created on:&nbsp;{`${localeDateStringFormatFromDatetime(recipe.date_created)} 
                                ${localeTimeStringFormatFromDatetime(recipe.date_created)}`}
                            </RN.Text>

                            <BlankSpaceDivider/>

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
                                        ...className(FlexContainerChildItemFullWidthCN)
                                    ]}
                                >
                                  Ingredients
                                </RN.Text>

                                <RN.View
                                    style={[
                                        ...className(FlexContainerChildItemFullWidthCN)
                                    ]}
                                    // class="styled-ul"
                                >
                                  <RN.FlatList
                                      data={recipe.ingredients}
                                      renderItem={item => {
                                          return (
                                              <RN.Text
                                              >
                                                  &nbsp;{item}
                                              </RN.Text>
                                          );
                                      }}
                                      keyExtractor={item => makeId(16)}
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

                                <RN.Text
                                    style={[
                                        ...className(FlexContainerChildItemFullWidthCN)
                                    ]}
                                >
                                  Cooking Instructions
                                </RN.Text>

                                <RN.View
                                    style={[
                                        ...className(FlexContainerChildItemFullWidthCN)
                                    ]}
                                    // class="styled-ul"
                                >
                                  <RN.FlatList
                                      data={recipe.cooking_instructions}
                                      renderItem={item => {
                                          return (
                                              <RN.Text
                                              >
                                                  &nbsp;{item}
                                              </RN.Text>
                                          );
                                      }}
                                      keyExtractor={item => makeId(16)}
                                  />
                                </RN.View>

                              </RN.View>

                            </RN.View>

                              {
                                  !isEmptyArray(recipe.groups_suitable) &&
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
                                              ...className(FlexContainerChildItemFullWidthCN)
                                          ]}
                                      >
                                        Okay for
                                      </RN.Text>

                                      <RN.View
                                          style={[
                                              ...className(FlexContainerChildItemFullWidthCN)
                                          ]}
                                      >
                                        <RN.FlatList
                                            data={recipe.groups_suitable}
                                            renderItem={item => {
                                                return (
                                                    <RN.Text
                                                    >
                                                        {item}
                                                    </RN.Text>
                                                );
                                            }}
                                            keyExtractor={item => makeId(16)}
                                        />
                                      </RN.View>

                                    </RN.View>

                                  </RN.View>

                              }

                          </RN.View>

                        </RN.View>

                    }

                </RN.View>

                <BlankSpaceDivider/>

                <RN.View
                    style={[
                        ...className(FlexFluidRowContainerCN)
                    ]}
                >

                    {
                        (viewAction !== RECIPE_BOX_VIEWS_ACTIONS_ENUM.VIEW_RECIPE) &&
                        <RN.TouchableOpacity
                            onPress={_ => {
                                // viewRecipeFullDetailsClick(recipe, recipePhoto);
                            }}
                            style={[
                                ...className(FlexContainerChildItemNoGrowCN,
                                    FlexContainerChildItemOneThirdWidthCN)
                            ]}
                        >
                          <RN.Text>Details</RN.Text>
                        </RN.TouchableOpacity>
                    }

                    {
                        (viewAction === RECIPE_BOX_VIEWS_ACTIONS_ENUM.VIEW_RECIPE) &&
                        <RN.TouchableOpacity
                            onPress={_ => {
                                recipeBoxStore.viewAction = null;
                                appNavigation.navigateBack(navigation, navStore)
                            }}
                            style={[
                                ...className(FlexContainerChildItemNoGrowCN,
                                    FlexContainerChildItemOneThirdWidthCN)
                            ]}
                        >
                          <RN.Text>Back</RN.Text>
                        </RN.TouchableOpacity>
                    }

                    <RN.TouchableOpacity
                        onPress={_ => {
                            // editRecipeClick(this, recipe);
                        }}
                        style={[
                            ...className(FlexContainerChildItemNoGrowCN,
                                FlexContainerChildItemOneThirdWidthCN)
                        ]}
                    >
                        <RN.Text>Edit</RN.Text>
                    </RN.TouchableOpacity>

                    {
                        (viewAction === RECIPE_BOX_VIEWS_ACTIONS_ENUM.VIEW_RECIPE) &&
                        <RN.TouchableOpacity
                            onPress={_ => {
                                // deleteRecipe(recipe, this);
                            }}
                            style={[
                                ...className(FlexContainerChildItemNoGrowCN,
                                    FlexContainerChildItemOneThirdWidthCN)
                            ]}
                        >
                          <RN.Text>Delete</RN.Text>
                        </RN.TouchableOpacity>
                    }

                </RN.View>

                {
                    (displayFieldExpectationSatisfied('alert', toastNotificationAlert,
                        expectationOfX => isTrue(expectationOfX))) &&
                    <View
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
                    </View>
                }

            </RN.View>
        </RN.ScrollView>
    );

}

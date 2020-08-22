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
import {AllViewsCN} from "../../theme/app-layout-styles-classnames";
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import {Recipe, RecipeImage} from "../../app-management/data-manager/models-manager";
import StarRatings from "../../shared-components-and-modules/form-controls/star-ratings";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faMinus} from "@fortawesome/free-solid-svg-icons";

export default function RecipeItemCard(props) {

    let {toastNotificationAlert, recipeImages, dashboardCard, recipeItemCard} = props;
    let recipe: Recipe = props.recipe;
    let {viewAction} = recipeItemCard;

    return (
        <RN.ScrollView
            contentInsetAdjustmentBehavior={"automatic"}
        >
            <RN.View
            >
                <RN.ScrollView
                    horizontal={true}
                >
                    {
                        !isEmptyArray(recipeImages) &&
                        (recipeImages.map((item: RecipeImage) => {
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
                                    key={makeId(16)}
                                />
                            );
                        }))
                    }
                </RN.ScrollView>

                <RN.View
                >
                    <RN.Text>{recipe.name}</RN.Text>
                </RN.View>

                <RN.View
                    //        -text
                    //         style="text-align: left"
                >
                    <RN.View
                        // align="center"
                        // class="mx-0"
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
                            // class="my-4 subtitle-1"
                        >
                          <RN.Text>
                            <FontAwesomeIcon
                                icon={faMinus}
                                color={'red'}
                                size={30}
                                style={{
                                    marginTop: 20
                                }}
                            />
                          </RN.Text>
                          Vegetarian
                        </RN.View>
                    }
                    {
                        isFalse(recipe.is_vegetarian) &&
                        <BlankSpaceDivider/>
                    }
                    {
                        isFalse(dashboardCard) &&
                        <RN.View
                        >
                          <RN.Text>
                            Created on:&nbsp;{
                              `${localeDateStringFormatFromDatetime(recipe.date_created)} 
                                ${localeTimeStringFormatFromDatetime(recipe.date_created)}`
                          }
                          </RN.Text>
                          <BlankSpaceDivider/>
                          <RN.View>
                            <RN.Text
                                // h3
                            >
                              Ingredients
                            </RN.Text>

                            <RN.View
                                // ul
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
                          <RN.View>
                            <RN.Text
                                // h3
                            >Cooking Instructions</RN.Text>
                            <RN.View
                                // ul
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
                            {
                                !isEmptyArray(recipe.groups_suitable) &&
                                <RN.View
                                    // v-if="recipe.groups_suitable.length >= 1"
                                >
                                  <RN.Text
                                      // h3
                                  >Okay for:</RN.Text>
                                  <RN.FlatList
                                      data={recipe.groups_suitable}
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
                            }
                        </RN.View>
                    }
                </RN.View>

                <BlankSpaceDivider/>

                <RN.View
                >
                    {
                        (viewAction === null) &&
                        <RN.TouchableOpacity
                            // text
                            // color="deep-purple lighten-2"
                            onPress={_ => {
                                // viewRecipeFullDetailsClick(recipe, recipePhoto);
                            }}
                        >
                          <RN.Text>Details</RN.Text>
                        </RN.TouchableOpacity>
                    }
                    {
                        (viewAction !== null) &&
                        <RN.TouchableOpacity
                            // text
                            //    color="deep-purple lighten-2"
                            //    v-if="homepageStore.pageAction !== null"
                            onPress={_ => {
                                recipeItemCard.viewAction = null;
                            }}
                        >
                          <RN.Text>Back</RN.Text>
                        </RN.TouchableOpacity>
                    }
                    <RN.TouchableOpacity
                        // text
                        //    color="deep-purple lighten-2"
                        onPress={_ => {
                            // editRecipeClick(this, recipe);
                        }}
                    >
                        <RN.Text>Edit</RN.Text>
                    </RN.TouchableOpacity>
                    <RN.TouchableOpacity
                        // text
                        //    color="deep-purple lighten-2"
                        //    v-if="homepageStore.pageAction !== null"
                        onPress={_ => {
                            // deleteRecipe(recipe, this);
                        }}
                    >
                        <RN.Text>Delete</RN.Text>
                    </RN.TouchableOpacity>
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

// <style scoped>
//
//     ul {
//         list-style: none;
//     }
//
//     .styled-ul li::before {
//         content: "\2022";
//         color: mediumpurple;
//         font-weight: bold;
//         display: inline-block;
//         width: 1em;
//         margin-left: -1em;
//     }
//
// </style>

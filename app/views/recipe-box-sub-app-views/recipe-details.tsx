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
import className from "../../util/react-native-based-utils";
import {
    AlignCenterContentCN,
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
import {
    isEmptyArray,
    isEmptyString, isNullUndefined,
    isTrue,
    localeDateStringFormatFromDatetime,
    localeTimeStringFormatFromDatetime,
    makeId, numberItem
} from "../../util/util";
import {Recipe, RecipeImage} from "../../app-management/data-manager/models-manager";
import {SCREEN_HEIGHT} from "../../App";
import StarRatings from "../../shared-components-and-modules/form-controls/star-ratings";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import {BlankSpaceDivider} from "../../shared-components-and-modules/shared-components";
import appNavigation from "../../routing-and-navigation/app-navigation";
import {displayFieldExpectationSatisfied} from "../../controllers/app-controller";
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import {toJS} from "mobx";

export default function RecipeDetails(props) {

    console.log('PROPS AT RecipeDetails:', toJS(props));

    let {
        recipeBoxStore, navigation, appStore: {navStore},
        route: {params}, recipeBoxStore: {notificationAlert}
    } = props;
    console.log('#### RECIPEDETAILS ####:', params);

    let recipe: Recipe = params.recipe;
    let recipePhotos: Array<RecipeImage> = params.recipePhotos;
    console.log('!!! RecipeDetails recipePhotos !!!:', recipePhotos);

    // return (
    //     <React.Fragment></React.Fragment>
    // );

    let enumeratorArray = [];

    return (
        <RN.ScrollView
            style={[
                className(FlexColumnContainerCN)
            ]}
            contentInsetAdjustmentBehavior={"automatic"}
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

                    <RN.ScrollView
                        horizontal={true}
                        style={[
                            className(FlexColumnContainerCN,
                                AllViewsCN
                            ),
                        ]}
                    >
                        {
                            !isEmptyArray(recipePhotos) &&
                            (recipePhotos.map((item: RecipeImage) => {
                                console.log('We have recipe photos');
                                return (
                                    <RN.View
                                        style={[
                                            className(FlexContainerChildItemFullWidthCN,
                                                AllViewsCN),
                                            {
                                                height: SCREEN_HEIGHT * 0.21
                                            }
                                        ]}
                                        key={makeId(16)}
                                    >
                                        <RN.Image
                                            source={
                                                !isEmptyString(item.image_url) ?
                                                    // require('' + item.image_url) : (
                                                    require('../../media/images/image.png') : (
                                                        !isEmptyString(item.image_file) ?
                                                            'data:image/jpeg;base64,' + item.image_file :
                                                            require('../../media/images/image.png')
                                                    )
                                            }
                                            style={[
                                                {
                                                    width: '100%',
                                                    // width: SCREEN_WIDTH * 0.8,
                                                    height: SCREEN_HEIGHT * 0.2,
                                                    // height: '100%',
                                                }
                                            ]}
                                        />
                                    </RN.View>
                                );
                            }))
                        }
                    </RN.ScrollView>

                </RN.View>

                <RN.View
                    style={[
                        className(FlexFluidRowContainerCN)
                    ]}
                >
                    <RN.Text
                        style={[
                            className(FlexContainerChildItemFullWidthCN,
                                AlignLeftFlexContainerContentCN)
                        ]}
                    >{recipe.name}</RN.Text>
                </RN.View>

                <RN.View
                    style={[
                        className(FlexFluidRowContainerCN)
                    ]}
                >

                    <RN.View
                        style={[
                            className(FlexContainerChildItemOneHalfWidthCN,
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
                                className(FlexContainerChildItemOneHalfWidthCN,
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
                            />&nbsp;
                            Vegetarian
                          </RN.Text>
                        </RN.View>
                    }

                </RN.View>

                <RN.View
                    style={[
                        className(FlexFluidRowContainerCN,
                            AllViewsCN)
                    ]}
                >

                    <RN.View
                        style={[
                            className(FlexContainerChildItemFullWidthCN,
                                AllViewsCN)
                        ]}
                    >

                        <RN.View
                            style={[
                                className(FlexFluidRowContainerCN,
                                    AllViewsCN)
                            ]}
                        >

                            <RN.Text
                                style={[
                                    className(FlexContainerChildItemFullWidthCN,
                                        AlignLeftFlexContainerContentCN,),
                                    {backgroundColor: 'teal'}
                                ]}
                            >
                                Created on:&nbsp;{`${localeDateStringFormatFromDatetime(recipe.date_created)}`}&nbsp;
                                {`${localeTimeStringFormatFromDatetime(recipe.date_created)}`}
                            </RN.Text>

                            <BlankSpaceDivider/>

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
                                            className(FlexContainerChildItemFullWidthCN)
                                        ]}
                                    >
                                        Ingredients
                                    </RN.Text>

                                    <RN.View
                                        style={[
                                            className(FlexContainerChildItemFullWidthCN)
                                        ]}
                                        // class="styled-ul"
                                    >
                                        <RN.FlatList
                                            data={recipe.ingredients}
                                            renderItem={({item}) => {
                                                console.log('ingredient:', item);
                                                return (
                                                    <RN.Text
                                                    >
                                                        {`${numberItem(enumeratorArray) + '. '}`}&nbsp;{item}
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
                                            className(FlexContainerChildItemFullWidthCN)
                                        ]}
                                    >
                                        Cooking Instructions
                                    </RN.Text>

                                    <RN.View
                                        style={[
                                            className(FlexContainerChildItemFullWidthCN)
                                        ]}
                                        // class="styled-ul"
                                    >
                                        <RN.FlatList
                                            data={recipe.cooking_instructions}
                                            renderItem={({item}) => {
                                                return (
                                                    <RN.Text
                                                    >
                                                        {`${numberItem(enumeratorArray) + '. '}`}&nbsp;{item}
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
                                            className(FlexContainerChildItemFullWidthCN)
                                        ]}
                                    >
                                      Okay for
                                    </RN.Text>

                                    <RN.View
                                        style={[
                                            className(FlexContainerChildItemFullWidthCN)
                                        ]}
                                    >
                                      <RN.FlatList
                                          data={recipe.groups_suitable}
                                          renderItem={({item}) => {
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


                </RN.View>

                <BlankSpaceDivider/>

                <RN.View
                    style={[
                        className(FlexFluidRowContainerCN,
                            AllViewsCN)
                    ]}
                >
                    <RN.View
                        style={[
                            className(FlexContainerChildItemFullWidthCN,
                                AllViewsCN)
                        ]}
                    >
                        <RN.View
                            style={[
                                className(FlexFluidRowContainerCN,
                                    AlignRightFlexContainerContentCN,
                                    AllViewsCN)
                            ]}
                        >

                            <RN.TouchableOpacity
                                activeOpacity={.2}
                                onPress={_ => {
                                    recipeBoxStore.viewAction = null;
                                    appNavigation.navigateBack(navigation, navStore)
                                }}
                                style={[
                                    className(FlexContainerChildItemNoGrowCN,
                                        FlexContainerChildItemOneThirdWidthCN,
                                        AllViewsCN,
                                        AlignCenterContentCN)
                                ]}
                            >
                                <RN.Text>Back</RN.Text>
                            </RN.TouchableOpacity>

                            <RN.TouchableOpacity
                                activeOpacity={.2}
                                onPress={_ => {
                                    // editRecipeClick(this, recipe);
                                }}
                                style={[
                                    className(FlexContainerChildItemNoGrowCN,
                                        FlexContainerChildItemOneThirdWidthCN,
                                        AllViewsCN,
                                        AlignCenterContentCN)
                                ]}
                            >
                                <RN.Text>Edit</RN.Text>
                            </RN.TouchableOpacity>

                            <RN.TouchableOpacity
                                activeOpacity={.2}
                                onPress={_ => {
                                    // deleteRecipe(recipe, this);
                                }}
                                style={[
                                    className(FlexContainerChildItemNoGrowCN,
                                        FlexContainerChildItemOneThirdWidthCN,
                                        AllViewsCN,
                                        AlignCenterContentCN)
                                ]}
                            >
                                <RN.Text>Delete</RN.Text>
                            </RN.TouchableOpacity>

                        </RN.View>
                    </RN.View>
                </RN.View>

                {
                    (displayFieldExpectationSatisfied('alert', notificationAlert,
                        expectationOfX => isTrue(expectationOfX))) &&
                    <View
                        style={[
                            className(AllViewsCN),
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
                    </View>
                }

            </RN.View>
        </RN.ScrollView>
    );

}

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
import {isEmptyArray, isEmptyString, isTrue, makeId} from "../../util/util";
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
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import {Recipe, RecipeImage} from "../../app-management/data-manager/models-manager";
import StarRatings from "../../shared-components-and-modules/form-controls/star-ratings";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons";
import {toJS} from "mobx";
import {SCREEN_HEIGHT} from "../../App";
import {viewRecipeFullDetailsClick} from "../../controllers/recipe-box-sub-app-controllers/recipe-item-card-controller";

export default function RecipeListItemCard(props) {

    console.log('PROPS AT RecipeListItemCard:', toJS(props));

    let {
        recipeBoxStore, navigation, appStore: {navStore},
        recipe, recipePhotos, recipeBoxStore: {notificationAlert}
    } = props;

    // let recipe: Recipe = recipeDetails.item.recipe;
    // let recipePhotos: Array<RecipeImage> = recipeDetails.item.recipePhotos;
    console.log('!!! recipePhotos !!!:', recipePhotos);

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
                            {
                                // height: SCREEN_HEIGHT * 0.2
                            }
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
                                    // viewRecipeFullDetailsClick({
                                    //         recipe, recipePhotos
                                    //     }, recipeBoxStore,
                                    //     navigation, navStore);
                                    viewRecipeFullDetailsClick({
                                            recipe, recipePhotos
                                        }, recipeBoxStore,
                                        navigation, navStore);
                                }}
                                style={[
                                    className(FlexContainerChildItemNoGrowCN,
                                        FlexContainerChildItemOneThirdWidthCN,
                                        AllViewsCN,
                                        AlignCenterContentCN),
                                    {
                                        backgroundColor: 'teal'
                                    }
                                ]}
                            >
                                <RN.Text
                                    style={[
                                        className(AllViewsCN),
                                        {
                                            color: 'white',
                                            backgroundColor: 'maroon'
                                        }
                                    ]}>Details</RN.Text>
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

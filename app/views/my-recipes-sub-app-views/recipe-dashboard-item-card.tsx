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
import {isTrue} from "../../util/util";
import className from "../../util/react-native-based-utils";
import {AllViewsCN} from "../../theme/app-layout-styles-classnames";
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";

export default function RecipeDashboardItemCard(props) {

    let {toastNotificationAlert} = props;

    return (
        <RN.ScrollView>
            <RN.View
                // class="mx-auto"
                // max-width="300"
                // min-width="250"
            >
                <RN.Image
                    // source={prepareRecipePhoto(recipe)}
                    source={require('')}
                    //                 class="white--text align-end"
                    //                 gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    //                 height="200px"
                />
                <RN.View
                    //            -title v-text="recipe.name"
                ></RN.View>


                <RN.View
                    //        -text
                    //         style="text-align: left"
                >
                    <RN.View
                        // align="center"
                        // class="mx-0"
                    >
                        {/*// <v-rating*/}
                        {/*//         :value="4.5"*/}
                        {/*//         color="amber"*/}
                        {/*//         dense*/}
                        {/*//         half-increments*/}
                        {/*//         readonly*/}
                        {/*//         size="14"*/}
                        {/*// ></v-rating>*/}

                        <RN.View
                            // class="grey--text ml-4"
                        >4.5 (413)</RN.View>
                    </RN.View>

                    <RN.View
                        // class="my-4 subtitle-1"
                        // v-if="recipe.is_vegetarian"
                    >
                        {/*<v-icon */}
                        {/*    medium color="green darken-2"*/}
                        {/*>mdi-leaf</v-icon>*/}
                        Vegetarian
                    </RN.View>
                    <RN.View
                        // style="height: 60px" v-if="!recipe.is_vegetarian"
                    >&nbsp;</RN.View>

                    <RN.View
                        // v-if="!dashboardCard"
                    >

                        {/*<i>Created on: {{`${localeDateStringFormat(recipe.date_created)}*/}
                        {/*    ${localTimeStringFromUTCDatetime(recipe.date_created)}`}}</i>*/}
                        <BlankSpaceDivider/>

                        <RN.View>
                            <RN.Text
                                // h3
                            >Ingredients</RN.Text>
                            <RN.View
                                // ul
                                // class="styled-ul"
                            >
                                <RN.View
                                    // li
                                    // v-for="(item, i) in recipe.ingredients"
                                    //                                :key="item+'_'+i"
                                >
                                    {/*{{item}}*/}
                                </RN.View>
                            </RN.View>
                        </RN.View>
                        <RN.View>
                            <RN.Text
                                // h3
                            >Cooking Instructions</RN.Text>
                            <RN.View
                                // ul
                            >
                                <RN.View
                                    // li
                                    // v-for="(item, i) in recipe.ingredients"
                                    //                                :key="item+'_'+i"
                                >
                                    {/*{{i+1}}. {{item}}*/}
                                </RN.View>
                            </RN.View>
                        </RN.View>
                        <RN.View
                            // v-if="recipe.groups_suitable.length >= 1"
                        >
                            <RN.Text
                                // h3
                            >Okay for</RN.Text>
                            <RN.View
                                // ul
                                // class="styled-ul"
                            >
                                <RN.View
                                    // li
                                    // v-for="(item, i) in recipe.groups_suitable"
                                    //                                :key="item+'_'+i"
                                >
                                    {/*{{item}}*/}
                                </RN.View>
                            </RN.View>
                        </RN.View>

                    </RN.View>

                </RN.View>

                <RN.View
                    // -actions
                >
                    {/*<v-spacer></v-spacer>*/}
                    <RN.TouchableOpacity
                        // text
                        // color="deep-purple lighten-2"
                        // v-if="homepageStore.pageAction === null"
                        // v-on:click="_ => {
                        //     viewRecipeFullDetailsClick(this, recipe, recipePhoto);
                        // }"
                    >
                        Details
                    </RN.TouchableOpacity>
                    <RN.TouchableOpacity
                        // text
                        //    color="deep-purple lighten-2"
                        //    v-if="homepageStore.pageAction !== null"
                        //    v-on:click="_ => {
                        //        homepageStore.pageAction = null;
                        //    }"
                    >
                        Cancel
                    </RN.TouchableOpacity>
                    <RN.TouchableOpacity
                        // text
                        //    color="deep-purple lighten-2"
                        //    v-on:click="_ => {
                        //        editRecipeClick(this, recipe);
                        //    }"
                    >
                        Edit
                    </RN.TouchableOpacity>
                    <RN.TouchableOpacity
                        // text
                        //    color="deep-purple lighten-2"
                        //    v-if="homepageStore.pageAction !== null"
                        //    v-on:click="_ => {
                        //        deleteRecipe(recipe, this);
                        //    }"
                    >
                        Delete
                    </RN.TouchableOpacity>
                </RN.View>

                {
                    (
                        displayFieldExpectationSatisfied('alert', toastNotificationAlert,
                            expectationOfX => isTrue(expectationOfX))
                    ) &&
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

// import btoa from 'btoa';
// import {HOME_PAGE_ACTIONS} from "../../stores/stores-data-store";
// import {editRecipeClick, viewRecipeFullDetailsClick} from "../../controllers/homepage-controller";
// import {observer} from "mobx-vue";
// import rootStore from "../../stores";
// import {deleteRecipe} from "../../controllers/app-controller";
// import AppNotificationToastAlert
// from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
// import {localeDateStringFormat, localTimeStringFromUTCDatetime} from "../../util/util";
//
// const RecipeDashboardItemCard = observer({
//         name: "recipe-dashboard-item-card",
//         computed: {
//             btoa: () => btoa,
//             HOME_PAGE_ACTIONS: () => HOME_PAGE_ACTIONS,
//             viewRecipeFullDetailsClick: () => viewRecipeFullDetailsClick,
//             editRecipeClick: () => editRecipeClick,
//             deleteRecipe: () => deleteRecipe,
//             localeDateStringFormat: () => localeDateStringFormat,
//             localTimeStringFromUTCDatetime: () => localTimeStringFromUTCDatetime,
//         },
//         props: {
//             recipe: Object,
//             recipePhoto: String,
//             dashboardCard: Boolean,
//             activity: Object,
//         },
//         components: {
//             AppNotificationToastAlert
//         },
//         data: () => ({
//             appStores: rootStore.appStores,
//             appStore: rootStore.appStores.app,
//             authStore: rootStore.authStore,
//             homepageStore: rootStore.appStores.homepage,
//             toastNotificationAlert: rootStore.appStores.homepage.toastNotificationAlert,
//         }),
//         methods: {
//             prepareRecipePhoto: (recipe) => {
//                 let recipeData = rootStore.appStores.userRecipesPhotos.find(item => item.recipe_id === recipe.id);
//                 // console.log('recipeData!', recipeData);
//                 let blob = '';
//                 if (recipeData) {
//                     let blob = 'data:image/jpeg;base64,' + btoa(recipeData.dish_image);
//                     // console.log('recipeData Blob!', blob);
//                     return blob;
//                 }
//                 return blob;
//             },
//         }
//     });
//     export default RecipeDashboardItemCard;

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

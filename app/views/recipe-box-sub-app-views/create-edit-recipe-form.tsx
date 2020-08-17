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
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import {Checkbox} from "../../shared-components-and-modules/form-controls/checkboxes-and-radio-buttons";
import AppTextInput from "../../shared-components-and-modules/form-controls/app-text-input";
import {displayFieldExpectationSatisfied} from "../../controllers/app-controller";
import {isTrue} from "../../util/util";
import className from "../../util/react-native-based-utils";
import {AllViewsCN} from "../../theme/app-layout-styles-classnames";
import {inject, observer} from "mobx-react";
import WithStoresHoc from "../../shared-components-and-modules/hocs/with-stores-hoc";

export function CreateEditRecipeForm(props) {

    let {recipeBoxStore} = props;
    let {toastNotificationAlert} = recipeBoxStore;

    return (
        <RN.ScrollView
            contentInsetAdjustmentBehavior={"automatic"}
        >

            <RN.View>

                {/*// <NavigationDrawer*/}
                {/*//         :drawer="drawer"*/}
                {/*//         :activity="this"*/}
                {/*// />*/}

                {/*// <AppBar*/}
                {/*//         :drawer="drawer"*/}
                {/*//         :activity="this"*/}
                {/*// />*/}

                <BlankSpaceDivider height={20}/>

                <RN.View
                    // fluid
                >

                    <RN.View
                        // width="400" class="mx-auto mt-5"
                    >
                        <RN.View>
                            <RN.Text
                                // h3
                            >Create Recipe</RN.Text>
                        </RN.View>
                        <RN.View>
                            <RN.View>
                                <RN.View
                                    // v-if="myController.submit_pressed && !myController.recipeFormValidity.name"
                                >
                                    <RN.Text
                                        // small
                                        // style="color: red"
                                    > * This field is required.</RN.Text>
                                    <BlankSpaceDivider/>
                                </RN.View>
                                <AppTextInput
                                    // label="Name"
                                    // type="text"
                                    // v-on:change="text => textValueChanged(recipe, text, 'name', this)"
                                    // v-bind:value="textValue(recipe, 'name', this)"
                                />

                                <RN.View
                                    // v-if="myController.submit_pressed && !myController.recipeFormValidity.dish_image"
                                >
                                    <RN.Text
                                        // small
                                        // style="color: red"
                                    > * This field is required.</RN.Text>
                                    <BlankSpaceDivider/>
                                </RN.View>
                                <RN.Button
                                    // accept="image/png, image/jpeg"
                                    title="Recipe photo"
                                    // prepend-icon="mdi-camera-outline"
                                    // chips show-size
                                    onPress={file => {
                                        // console.log('fileObj', file);
                                        // recipe.dish_image = file;
                                    }}
                                    // :value="recipe.dish_image"
                                />

                                <RN.View
                                    // v-if="myController.submit_pressed && !myController.recipeFormValidity.is_vegetarian"
                                >
                                    <RN.Text
                                        // small
                                        // style="color: red"
                                    > * This field is required.</RN.Text>
                                    <BlankSpaceDivider/>
                                </RN.View>
                                <Checkbox
                                    // v-model="recipe.is_vegetarian"
                                    // :label="`Is vegetarian`"
                                    // v-on:change="check => {
                                    //     checkboxItemValueChanged(recipe, 'is_vegetarian', check, true, false, this);
                                    // }"
                                />

                                <h3>Ingredients</h3>
                                <RN.View
                                    // v-for="(item, i) in recipe.ingredients"
                                    //                                :key="''+i+uuidv1()"
                                >
                                    <RN.View
                                        // v-if="myController.submit_pressed && isEmptyString(recipe.ingredients[i])"
                                    >
                                        <RN.Text
                                            // small
                                            // style="color: red"
                                        > * This field is required.</RN.Text>
                                        <BlankSpaceDivider/>
                                    </RN.View>
                                    <AppTextInput
                                        //                                    :label="''+(i+1)+'. '"
                                        //                                    type="text"
                                        //                                    v-on:change="text => {
                                        //                                        textValueChanged({text:item}, text, 'text', this);
                                        //                                        recipe.ingredients[i] = text;
                                        //                                    }"
                                        //                                    v-bind:value="textValue({text:item}, 'text', this)"
                                    />
                                    <RN.TouchableOpacity
                                        // class="mx-2" fab dark small color="success"
                                        //    v-on:click="_ => {
                                        //            myController.addIngredient(recipe,this);
                                        //        }"
                                        //    v-if="i === (recipe.ingredients.length - 1)"
                                    >
                                        {/*<v-icon dark>mdi-plus</v-icon>*/}
                                    </RN.TouchableOpacity>
                                    <RN.TouchableOpacity
                                        // class="mx-2" fab dark small color="red"
                                        //    v-on:click="_ => {
                                        //        myController.removeIngredient(recipe, i,this);
                                        //    }"
                                        //    v-if="recipe.ingredients.length >= 2"
                                    >
                                        {/*<v-icon dark>mdi-minus</v-icon>*/}
                                    </RN.TouchableOpacity>
                                </RN.View>

                                <BlankSpaceDivider/>
                                <RN.Text
                                    // h3
                                >Preparation Instructions</RN.Text>
                                <RN.View
                                    // v-for="(item, i) in recipe.cooking_instructions"
                                    //                                :key="''+i+uuidv1()"
                                >
                                    <RN.View
                                        // v-if="myController.submit_pressed && isEmptyString(recipe.cooking_instructions[i])"
                                    >
                                        <RN.Text
                                            // small
                                            // style="color: red"
                                        > * This field is required.</RN.Text>
                                        <BlankSpaceDivider/>
                                    </RN.View>
                                    <AppTextInput
                                        //                                    :label="''+(i+1)+'. '"
                                        //                                    type="text"
                                        //                                    v-on:change="text => {
                                        //                                        textValueChanged({text:item}, text, 'text', this);
                                        //                                        recipe.cooking_instructions[i] = text;
                                        //                                    }"
                                        //                                    v-bind:value="textValue({text:item}, 'text', this)"
                                    />
                                    <RN.TouchableOpacity
                                        // class="mx-2" fab dark small color="success"
                                        //    v-on:click="_ => {
                                        //            myController.addCookingInstruction(recipe,this);
                                        //        }"
                                        //    v-if="i === (recipe.cooking_instructions.length - 1)"
                                    >
                                        {/*<v-icon dark>mdi-plus</v-icon>*/}
                                    </RN.TouchableOpacity>
                                    <RN.TouchableOpacity
                                        // class="mx-2" fab dark small color="red"
                                        //    v-on:click="_ => {
                                        //        myController.removeCookingInstruction(recipe, i,this);
                                        //    }"
                                        //    v-if="recipe.cooking_instructions.length >= 2"
                                    >
                                        {/*<v-icon dark>mdi-minus</v-icon>*/}
                                    </RN.TouchableOpacity>
                                </RN.View>

                                <BlankSpaceDivider/>

                                <RN.Picker
                                    // v-model="recipe.groups_suitable"
                                    // :items="recipeGroupsSuitable"
                                    // label="Suitable for "
                                    // multiple
                                    // chips
                                    // persistent-hint
                                ></RN.Picker>

                                <RN.View>
                                    <RN.TouchableOpacity
                                        // color="success"
                                        // v-if="homepageStore.pageAction === null"
                                        // v-on:click="e => myController.submitClick(e, recipe, this)"
                                    >
                                        Save Recipe
                                    </RN.TouchableOpacity>
                                    <RN.TouchableOpacity
                                        // color="success"
                                        // v-if="homepageStore.pageAction !== null"
                                        // v-on:click="e => myController.updateClick(e, recipe, this)"
                                    >
                                        Update Recipe
                                    </RN.TouchableOpacity>
                                </RN.View>

                            </RN.View>
                        </RN.View>
                    </RN.View>
                    <BlankSpaceDivider/>

                </RN.View>

                {/*//     <AppFooter*/}
                {/*//     :activity="this"*/}
                {/*// />*/}

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

const CreateEditRecipeFormActivity = WithStoresHoc(CreateEditRecipeForm,
    ['authStore', 'appStores', 'recipeBoxStore']);
export default CreateEditRecipeFormActivity;

//     import {deepCloneObject, isEmptyString} from "../../util/util";
//     import {
//         checkboxItemChecked,
//         checkboxItemValueChanged,
//         textValue,
//         textValueChanged
//     } from "../../util/vue-components-mobx-stores-data-collection-utils";
//     import {observer} from "mobx-vue";
//     import AppBar from "./shared-secured-views-activities-components/app-bar";
//     import NavigationDrawer from "./shared-secured-views-activities-components/navigation-drawer";
//     import AppFooter from "./shared-secured-views-activities-components/app-footer";
//     import rootStore from "../../stores";
//     import {RecipeGroupsSuitable} from "../../app-management/data-manager/list-manager";
//     import {v1 as uuidv1} from 'uuid';
//     import createEditRecipeController from "../../controllers/create-edit-recipe-controller";
//     import AppNotificationToastAlert
//         from '../../shared-components-and-modules/notification-center/app-notification-toast-alert';
//
//     const CreateEditRecipeForm = observer({
//         name: "create-edit-recipe-form",
//         computed: {
//             console: () => console,
//             window: () => window
//         },
//         props: {},
//         components: {
//             AppBar, NavigationDrawer,
//             AppFooter, AppNotificationToastAlert
//         },
//         data: () => ({
//             myController: createEditRecipeController,
//             appStores: rootStore.appStores,
//             appStore: rootStore.appStores.app,
//             authStore: rootStore.authStore,
//             homepageStore: rootStore.appStores.homepage,
//             toastNotificationAlert: rootStore.appStores.homepage.toastNotificationAlert,
//             recipe: rootStore.appStores.app.selectedRecipe,
//             drawer: {drawer: null},
//             recipeGroupsSuitable: RecipeGroupsSuitable.map(item => item.name),
//         }),
//         methods: {
//             isEmptyString, textValueChanged, textValue, uuidv1,
//             deepCloneObject, checkboxItemValueChanged, checkboxItemChecked,
//         },
//         created() {
//             this.$vuetify.theme.dark = this.appStore.darkMode;
//         },
//     });
//
//     export default CreateEditRecipeForm;

//
// <style scoped>
//
// </style>

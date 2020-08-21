//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import RN, {Text, View} from 'react-native';
import {BlankSpaceDivider} from "../../shared-components-and-modules/shared-components";
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import {Checkbox} from "../../shared-components-and-modules/form-controls/checkboxes-and-radio-buttons";
import AppTextInput from "../../shared-components-and-modules/form-controls/app-text-input";
import {displayFieldExpectationSatisfied} from "../../controllers/app-controller";
import {isEmptyArray, isEmptyString, isTrue, makeId} from "../../util/util";
import className from "../../util/react-native-based-utils";
import {
    AllViewsCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN
} from "../../theme/app-layout-styles-classnames";
import WithStoresHoc from "../../shared-components-and-modules/hocs/with-stores-hoc";
import {
    checkboxItemValueChanged,
    generateSpinnerOptions,
    spinnerOnValueChanged,
    spinnerSelectedValue,
    textValueChanged
} from "../../util/react-native-data-collection-utils";
import {
    addCookingInstruction,
    addIngredient,
    removeCookingInstruction,
    removeIngredient,
    submitRecipeClick,
    updateRecipeClick
} from "../../controllers/recipe-box-sub-app-controllers/create-edit-recipe-controller";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import {RecipeGroupsSuitable} from "../../app-management/data-manager/list-manager";
import {Picker} from "@react-native-community/picker";

export function CreateEditRecipeForm(props) {

    let [submit_pressed, set_press_submit] = React.useState(false);

    let {recipeBoxStore, recipe} = props;
    let {toastNotificationAlert, viewAction} = recipeBoxStore;

    let recipeFormKeys = [];
    let recipePhotos = [];
    let formValidityTree = {};

    const PhotoInput = props => (
        <RN.TouchableOpacity>
            <RN.Image
                source={require(props?.items.src)}
            />
        </RN.TouchableOpacity>
    );

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
                                {
                                    submit_pressed && isEmptyString(formValidityTree['name']) &&
                                    <Text style={{color: 'red'}}> * This field is required.</Text>
                                }
                                <BlankSpaceDivider/>
                                <AppTextInput
                                    label="Name"
                                    onTextChange={text => textValueChanged(recipe, text, 'name')}
                                />

                                {
                                    submit_pressed && isEmptyString(formValidityTree['photos']) &&
                                    <Text style={{color: 'red'}}> * This field is required.</Text>
                                }
                                <BlankSpaceDivider/>
                                <RN.View>
                                    {
                                        (_ => {
                                            let photos: Array<Element> = []
                                            for (let i = 0; i < 5; i++) {
                                                photos.push(
                                                    <PhotoInput
                                                        items={{src: '../media/images/image.png'}}
                                                        key={makeId(16)}
                                                    />
                                                );
                                            }
                                            return photos;
                                        })()
                                    }
                                </RN.View>

                                {
                                    submit_pressed && isEmptyString(formValidityTree['is_vegetarian']) &&
                                    <Text style={{color: 'red'}}> * This field is required.</Text>
                                }
                                <BlankSpaceDivider/>
                                <Checkbox
                                    // v-model="recipe.is_vegetarian"
                                    // :label="`Is vegetarian`"
                                    // v-on:change="check => {
                                    //     checkboxItemValueChanged(recipe, 'is_vegetarian', check, true, false, this);
                                    // }"
                                    label={''}
                                    onCheckBoxChange={check => {
                                        checkboxItemValueChanged(recipe, check, 'is_vegetarian',
                                            1, 0);
                                    }}
                                    model={recipe}
                                    modelKey={'is_vegetarian'}
                                />

                                <RN.Text>Ingredients</RN.Text>
                                {
                                    submit_pressed && isEmptyString(formValidityTree['ingredients'][0]) &&
                                    <Text style={{color: 'red'}}> * This field is required.</Text>
                                }
                                <BlankSpaceDivider/>
                                {
                                    !isEmptyArray(recipe.ingredients) &&
                                    <RN.View
                                    >
                                        {
                                            recipe.ingredients.map((item, i) => {
                                                let ingredient = recipe.ingredients[i];
                                                return (
                                                    <RN.View
                                                        key={makeId(16)}
                                                    >
                                                        {
                                                            submit_pressed && isEmptyString(ingredient) &&
                                                            <Text style={{color: 'red'}}> * This field is
                                                              required.</Text>
                                                        }
                                                        <BlankSpaceDivider/>
                                                        <AppTextInput
                                                            label={`${'' + (i + 1) + '. '}`}
                                                            onTextChange={
                                                                text => {
                                                                    textValueChanged({text: item}, text, 'text');
                                                                    recipe.ingredients[i] = text;
                                                                }
                                                            }
                                                            // v-bind:value="textValue({text:item}, 'text', this)"
                                                        />
                                                        <RN.View>
                                                            {
                                                                (i === (recipe.ingredients.length - 1)) &&
                                                                <RN.TouchableOpacity
                                                                    onPress={
                                                                        _ => {
                                                                            addIngredient(recipe);
                                                                        }
                                                                    }
                                                                >
                                                                  <RN.Text>
                                                                    <FontAwesomeIcon
                                                                        icon={faPlus}
                                                                        color={'green'}
                                                                        size={30}
                                                                        style={{
                                                                            marginTop: 20
                                                                        }}
                                                                    />
                                                                  </RN.Text>
                                                                </RN.TouchableOpacity>
                                                            }
                                                            {
                                                                (recipe.ingredients.length >= 2) &&
                                                                <RN.TouchableOpacity
                                                                    onPress={
                                                                        _ => {
                                                                            removeIngredient(recipe, i);
                                                                        }
                                                                    }
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
                                                                </RN.TouchableOpacity>
                                                            }
                                                        </RN.View>
                                                    </RN.View>
                                                )
                                            })
                                        }

                                    </RN.View>
                                }

                                <RN.Text>Preparation Instructions</RN.Text>
                                {
                                    submit_pressed && isEmptyString(formValidityTree['cooking_instructions'][0]) &&
                                    <Text style={{color: 'red'}}> * This field is required.</Text>
                                }
                                {
                                    !isEmptyArray(recipe.cooking_instructions) &&
                                    <RN.View
                                    >
                                        {
                                            recipe.cooking_instructions.map((item, i) => {
                                                let cooking_instruction = recipe.cooking_instructions[i];
                                                return (
                                                    <RN.View
                                                        key={makeId(16)}
                                                    >
                                                        {
                                                            submit_pressed && isEmptyString(cooking_instruction) &&
                                                            <Text style={{color: 'red'}}> * This field is
                                                              required.</Text>
                                                        }
                                                        <BlankSpaceDivider/>
                                                        <AppTextInput
                                                            label={`${'' + (i + 1) + '. '}`}
                                                            onTextChange={
                                                                text => {
                                                                    textValueChanged({text: item}, text, 'text');
                                                                    recipe.cooking_instructions[i] = text;
                                                                }
                                                            }
                                                            // v-bind:value="textValue({text:item}, 'text', this)"
                                                        />
                                                        <RN.View>
                                                            {
                                                                (i === (recipe.cooking_instructions.length - 1)) &&
                                                                <RN.TouchableOpacity
                                                                    onPress={
                                                                        _ => {
                                                                            addCookingInstruction(recipe);
                                                                        }
                                                                    }
                                                                >
                                                                  <RN.Text>
                                                                    <FontAwesomeIcon
                                                                        icon={faPlus}
                                                                        color={'green'}
                                                                        size={30}
                                                                        style={{
                                                                            marginTop: 20
                                                                        }}
                                                                    />
                                                                  </RN.Text>
                                                                </RN.TouchableOpacity>
                                                            }
                                                            {
                                                                (recipe.cooking_instructions.length >= 2) &&
                                                                <RN.TouchableOpacity
                                                                    onPress={
                                                                        _ => {
                                                                            removeCookingInstruction(recipe, i);
                                                                        }
                                                                    }
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
                                                                </RN.TouchableOpacity>
                                                            }
                                                        </RN.View>
                                                    </RN.View>
                                                )
                                            })
                                        }

                                    </RN.View>
                                }

                                <BlankSpaceDivider/>

                                <RN.View>

                                    <RN.Text>
                                        Suitable for:
                                    </RN.Text>

                                    <Picker
                                        mode="dropdown"
                                        style={[
                                            {color: "grey", marginLeft: 20}
                                        ]}
                                        selectedValue={spinnerSelectedValue(recipe, -1, RecipeGroupsSuitable, "groups_suitable")}
                                        onValueChange={value => spinnerOnValueChanged(recipe, value, "groups_suitable")}
                                    >
                                        {generateSpinnerOptions(RecipeGroupsSuitable)}
                                    </Picker>

                                </RN.View>

                                <RN.View>
                                    {
                                        (viewAction === null) &&
                                        <RN.TouchableOpacity
                                            onPress={
                                                _ => submitRecipeClick(recipe, set_press_submit, formValidityTree)
                                            }
                                        >
                                          <RN.Text>Save Recipe</RN.Text>
                                        </RN.TouchableOpacity>
                                    }
                                    {
                                        (viewAction !== null) &&
                                        <RN.TouchableOpacity
                                            onPress={
                                                _ => updateRecipeClick(recipe, set_press_submit, formValidityTree)
                                            }
                                        >
                                          <RN.Text>Update Recipe</RN.Text>
                                        </RN.TouchableOpacity>
                                    }
                                </RN.View>

                            </RN.View>
                        </RN.View>
                    </RN.View>
                    <BlankSpaceDivider/>

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

const CreateEditRecipeFormActivity = WithStoresHoc(CreateEditRecipeForm,
    ['authStore', 'appStores', 'recipeBoxStore']);
export default CreateEditRecipeFormActivity;

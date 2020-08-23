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
import {isBoolean, isEmptyArray, isEmptyString, isTrue, makeId} from "../../util/util";
import className from "../../util/react-native-based-utils";
import {
    AlignCenterContentCN,
    AlignLeftFlexContainerContentCN,
    AlignRightFlexContainerContentCN,
    AllViewsCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexContainerChildItemOneThirdWidthCN,
    FlexFluidRowContainerCN
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

    // let recipeFormKeys = [];
    // let recipePhotos = [];
    let formValidityTree = {};

    const PhotoInput = props => (
        <RN.TouchableOpacity
            style={[
                ...className(FlexContainerChildItemFullWidthCN)
            ]}
        >
            <RN.Image
                style={[
                    {
                        width: '100%',
                        height: '100%'
                    }
                ]}
                // source={require(props?.items.src)}
                source={require('../../media/images/image.png')}
            />
            <RN.Text>
                <FontAwesomeIcon
                    icon={faPlus}
                    color={'teal'}
                    size={30}
                    style={{
                        marginTop: 20
                    }}
                />
            </RN.Text>
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
    );

    const FormFieldIsRequiredMessage = props => (
        <Text
            style={[
                {color: 'red'},
                ...className(FlexContainerChildItemFullWidthCN,
                    AlignLeftFlexContainerContentCN)
            ]}
        > {props?.message || '* This field is required.'}</Text>
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
                    style={[
                        ...className(FlexFluidRowContainerCN)
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
                                    ...className(FlexContainerChildItemFullWidthCN,
                                        AlignCenterContentCN)
                                ]}
                            >Create Recipe</RN.Text>
                        </RN.View>
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
                                <RN.View
                                    style={[
                                        ...className(FlexFluidRowContainerCN)
                                    ]}
                                >
                                    {
                                        submit_pressed && isEmptyString(formValidityTree['name']) &&
                                        <FormFieldIsRequiredMessage/>
                                    }
                                    <BlankSpaceDivider/>
                                    <AppTextInput
                                        label="Name"
                                        onTextChange={text => textValueChanged(recipe, text, 'name')}
                                    />
                                    {
                                        submit_pressed && isEmptyArray(formValidityTree['recipe_photos']) &&
                                        <FormFieldIsRequiredMessage message={'Please upload recipe photos!'}/>
                                    }
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
                                            {
                                                (_ => {
                                                    let photos: Array<Element> = []
                                                    for (let i = 0; i < 5; i++) {
                                                        photos.push(
                                                            <RN.View
                                                                style={[
                                                                    ...className(FlexContainerChildItemOneThirdWidthCN)
                                                                ]}
                                                            >
                                                                <PhotoInput
                                                                    items={{src: '../media/images/image.png'}}
                                                                    key={makeId(16)}
                                                                />
                                                            </RN.View>
                                                        );
                                                    }
                                                    return photos;
                                                })()
                                            }
                                        </RN.View>
                                    </RN.View>
                                    {
                                        submit_pressed && !isBoolean(formValidityTree['is_vegetarian']) &&
                                        <FormFieldIsRequiredMessage/>
                                    }
                                    <BlankSpaceDivider/>
                                    <RN.View
                                        style={[
                                            ...className(FlexContainerChildItemFullWidthCN)
                                        ]}
                                    >
                                        <Checkbox
                                            label={'Is vegetarian'}
                                            onCheckBoxChange={check => {
                                                checkboxItemValueChanged(recipe, check, 'is_vegetarian',
                                                    1, 0);
                                            }}
                                            model={recipe}
                                            modelKey={'is_vegetarian'}
                                        />
                                    </RN.View>
                                    <RN.Text
                                        style={[
                                            ...className(FlexContainerChildItemFullWidthCN,
                                                AlignLeftFlexContainerContentCN)
                                        ]}
                                    >Ingredients</RN.Text>
                                    {
                                        submit_pressed && isEmptyArray(recipe.ingredients) &&
                                        <FormFieldIsRequiredMessage message={'Please provide ingredients!'}/>
                                    }
                                    <BlankSpaceDivider/>
                                    {
                                        !isEmptyArray(recipe.ingredients) &&
                                        <RN.View
                                            style={[
                                                ...className(FlexContainerChildItemFullWidthCN)
                                            ]}
                                        >
                                            {
                                                recipe.ingredients.map((item, i) => {
                                                    let ingredient = recipe.ingredients[i];
                                                    return (
                                                        <RN.View
                                                            style={[
                                                                ...className(FlexFluidRowContainerCN)
                                                            ]}
                                                            key={makeId(16)}
                                                        >
                                                            {
                                                                submit_pressed && isEmptyString(ingredient) &&
                                                                <FormFieldIsRequiredMessage/>
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
                                                            <RN.View
                                                                style={[
                                                                    ...className(FlexContainerChildItemFullWidthCN)
                                                                ]}
                                                            >
                                                                <RN.View
                                                                    style={[
                                                                        ...className(FlexFluidRowContainerCN,
                                                                            AlignRightFlexContainerContentCN)
                                                                    ]}
                                                                >
                                                                    {
                                                                        (i === (recipe.ingredients.length - 1)) &&
                                                                        <RN.TouchableOpacity
                                                                            onPress={
                                                                                _ => {
                                                                                    addIngredient(recipe);
                                                                                }
                                                                            }
                                                                            style={[
                                                                                {
                                                                                    borderRadius: 50,
                                                                                    backgroundColor: 'forestgreen'
                                                                                },
                                                                                ...className(AlignCenterContentCN),
                                                                            ]}
                                                                        >
                                                                          <RN.Text>
                                                                            <FontAwesomeIcon
                                                                                icon={faPlus}
                                                                                color={'white'}
                                                                                size={30}
                                                                                style={{
                                                                                    // marginTop: 20
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
                                                                            style={[
                                                                                {
                                                                                    borderRadius: 50,
                                                                                    backgroundColor: 'maroon'
                                                                                },
                                                                                ...className(AlignCenterContentCN)
                                                                            ]}
                                                                        >
                                                                          <RN.Text>
                                                                            <FontAwesomeIcon
                                                                                icon={faMinus}
                                                                                color={'white'}
                                                                                size={30}
                                                                                style={{
                                                                                    // marginTop: 20
                                                                                }}
                                                                            />
                                                                          </RN.Text>
                                                                        </RN.TouchableOpacity>
                                                                    }
                                                                </RN.View>
                                                            </RN.View>
                                                        </RN.View>
                                                    )
                                                })
                                            }
                                        </RN.View>
                                    }
                                    <RN.Text
                                        style={[
                                            ...className(FlexContainerChildItemFullWidthCN,
                                                AlignLeftFlexContainerContentCN)
                                        ]}
                                    >Preparation Instructions</RN.Text>
                                    {
                                        submit_pressed && isEmptyString(formValidityTree['cooking_instructions'][0]) &&
                                        <FormFieldIsRequiredMessage/>
                                    }
                                    {
                                        !isEmptyArray(recipe.cooking_instructions) &&
                                        <RN.View
                                            style={[
                                                ...className(FlexContainerChildItemFullWidthCN)
                                            ]}
                                        >
                                            {
                                                recipe.cooking_instructions.map((item, i) => {
                                                    let cooking_instruction = recipe.cooking_instructions[i];
                                                    return (
                                                        <RN.View
                                                            style={[
                                                                ...className(FlexFluidRowContainerCN)
                                                            ]}
                                                            key={makeId(16)}
                                                        >
                                                            {
                                                                submit_pressed && isEmptyString(cooking_instruction) &&
                                                                <FormFieldIsRequiredMessage/>
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
                                                            <RN.View
                                                                style={[
                                                                    ...className(FlexContainerChildItemFullWidthCN)
                                                                ]}
                                                            >
                                                                {
                                                                    (i === (recipe.cooking_instructions.length - 1)) &&
                                                                    <RN.TouchableOpacity
                                                                        onPress={
                                                                            _ => {
                                                                                addCookingInstruction(recipe);
                                                                            }
                                                                        }
                                                                        style={[
                                                                            {
                                                                                borderRadius: 50,
                                                                                backgroundColor: 'forestgreen'
                                                                            },
                                                                            ...className(AlignCenterContentCN),
                                                                        ]}
                                                                    >
                                                                      <RN.Text>
                                                                        <FontAwesomeIcon
                                                                            icon={faPlus}
                                                                            color={'white'}
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
                                                                        style={[
                                                                            {
                                                                                borderRadius: 50,
                                                                                backgroundColor: 'maroon'
                                                                            },
                                                                            ...className(AlignCenterContentCN),

                                                                        ]}
                                                                    >
                                                                      <RN.Text>
                                                                        <FontAwesomeIcon
                                                                            icon={faMinus}
                                                                            color={'white'}
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
                                                Suitable for:
                                            </RN.Text>
                                            <RN.View
                                                style={[
                                                    ...className(FlexContainerChildItemFullWidthCN)
                                                ]}
                                            >
                                                <Picker
                                                    mode="dropdown"
                                                    style={[
                                                        {color: "grey", marginLeft: 20}
                                                    ]}
                                                    selectedValue={spinnerSelectedValue(recipe, -1,
                                                        RecipeGroupsSuitable, "groups_suitable")}
                                                    onValueChange={value => spinnerOnValueChanged(recipe, value, "groups_suitable")}
                                                >
                                                    {generateSpinnerOptions(RecipeGroupsSuitable)}
                                                </Picker>
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
                                                ...className(FlexFluidRowContainerCN,
                                                    AlignCenterContentCN)
                                            ]}
                                        >
                                            {
                                                (viewAction === null) &&
                                                <RN.TouchableOpacity
                                                    onPress={
                                                        _ => submitRecipeClick(recipe, set_press_submit, formValidityTree)
                                                    }
                                                    style={[
                                                        {
                                                            width: '60%',
                                                            backgroundColor: 'forestgreen'
                                                        }
                                                    ]}
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
                                                    style={[
                                                        {
                                                            width: '60%',
                                                            backgroundColor: 'forestgreen'
                                                        }
                                                    ]}
                                                >
                                                  <RN.Text>Update Recipe</RN.Text>
                                                </RN.TouchableOpacity>
                                            }
                                        </RN.View>
                                    </RN.View>
                                </RN.View>
                            </RN.View>
                        </RN.View>
                    </RN.View>
                </RN.View>
                <BlankSpaceDivider/>
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

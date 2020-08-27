//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import React from "react";
import RN, {Alert} from 'react-native';
import {BlankSpaceDivider, Spacer} from "../../shared-components-and-modules/shared-components";
import AppNotificationToastAlert
    from "../../shared-components-and-modules/notification-center/app-notification-toast-alert";
import {Checkbox} from "../../shared-components-and-modules/form-controls/checkboxes-and-radio-buttons";
import AppTextInput from "../../shared-components-and-modules/form-controls/app-text-input";
import {displayFieldExpectationSatisfied} from "../../controllers/app-controller";
import {isBoolean, isEmptyArray, isEmptyString, isNullUndefined, isTrue, makeId} from "../../util/util";
import className from "../../util/react-native-based-utils";
import {
    AlignCenterContentCN,
    AlignLeftFlexContainerContentCN, AlignRightFlexContainerContentCN,
    FlexColumnContainerCN,
    FlexContainerChildItemFullWidthCN,
    FlexContainerChildItemOneThirdWidthCN,
    FlexFluidRowContainerCN,
    FlexRowContainerCN
} from "../../theme/app-layout-styles-classnames";
import WithStoresHoc from "../../shared-components-and-modules/hocs/with-stores-hoc";
import {checkboxItemValueChanged, textValueChanged} from "../../util/react-native-data-collection-utils";
import {
    addCookingInstruction,
    addIngredient,
    removeCookingInstruction,
    removeIngredient,
    updateRecipeClick
} from "../../controllers/recipe-box-sub-app-controllers/create-edit-recipe-controller";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faMinus, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {RecipeGroupsSuitable} from "../../app-management/data-manager/list-manager";
import {RecipeImage} from "../../app-management/data-manager/models-manager";
import {toJS} from "mobx";
import RnMultiSelectKaybarax from "../../shared-components-and-modules/form-controls/rn-multi-select-kaybarax";
import {RECIPE_BOX_VIEWS_ACTIONS_ENUM} from "../../stores/actions-and-stores-data";
import {FORESTGREEN_COLOR} from "../../theme/app-theme";
import {SCREEN_HEIGHT} from "../../App";

export function CreateEditRecipeForm(props) {

    console.log('props at CreateEditRecipeForm:', toJS(props));
    console.log('CreateEditRecipeForm rn count!');

    let {
        recipeBoxStore,
        route: {
            params
        }
    } = props;
    let {recipe, recipePhotos}: { recipe: any, recipePhotos: Array<RecipeImage> } = params;
    let {notificationAlert, viewAction} = recipeBoxStore;

    let [submit_pressed, set_press_submit] = React.useState(false);
    let [multiSelectDialogIsOpen, toggleOpenMultiSelectDialog] = React.useState(false);


    // let recipeFormKeys = [];
    // let recipePhotos = [];
    let formValidityTree = {};

    let photoPlaceholder = '../../media/images/image.png';

    function PhotoInput(props) {

        let {photoIndex} = props;

        let photo = (
            isEmptyArray(recipePhotos) ?
                '' :
                (
                    isNullUndefined(recipePhotos[photoIndex]) ?
                        '' :
                        (
                            isEmptyString(recipePhotos[photoIndex].image_file) ?
                                '' :
                                ("data:image/jpeg;base64," + recipePhotos[photoIndex].image_file)
                        )
                )
        );

        return (
            <RN.View
                style={[
                    className(
                        FlexContainerChildItemFullWidthCN
                    )
                ]}
            >

                {/*<RN.View*/}
                {/*    style={[*/}
                {/*        className(*/}
                {/*            FlexFluidRowContainerCN*/}
                {/*        )*/}
                {/*    ]}*/}
                {/*>*/}

                {/*</RN.View>*/}

                <RN.View
                    style={[
                        className(
                            FlexFluidRowContainerCN,
                        )
                    ]}
                >

                    <RN.View
                        style={[
                            className(FlexContainerChildItemFullWidthCN)
                        ]}
                    >

                        <RN.View
                            style={[
                                className(FlexFluidRowContainerCN,
                                    // AlignRightFlexContainerContentCN,
                                )
                            ]}
                        >

                            <RN.View
                                style={[
                                    className(FlexContainerChildItemFullWidthCN),
                                    {
                                        height: SCREEN_HEIGHT * 0.15
                                    }
                                ]}
                            >
                                <RN.Image
                                    style={[
                                        {
                                            width: '100%',
                                            height: '100%'
                                        }
                                    ]}
                                    source={
                                        !isEmptyString(photo) ?
                                            {
                                                isStatic: true,
                                                uri: photo
                                            } :
                                            require(photoPlaceholder)
                                    }
                                />
                            </RN.View>

                            <RN.TouchableOpacity
                                activeOpacity={.2}
                                style={[
                                    {
                                        borderRadius: 50,
                                        backgroundColor: 'forestgreen',
                                        position:'absolute',
                                        right:-10,
                                        bottom:-10,
                                    },
                                    className(AlignCenterContentCN),
                                ]}
                            >

                                <RN.Text
                                    style={[
                                        {
                                            padding: 5
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

                        </RN.View>

                    </RN.View>

                </RN.View>

            </RN.View>
        );
    }

    const FormFieldIsRequiredMessage = props => (
        <RN.Text
            style={[
                {color: 'red'},
                className(FlexContainerChildItemFullWidthCN,
                    AlignLeftFlexContainerContentCN)
            ]}
        > {props?.message || '* This field is required.'}</RN.Text>
    );

    return (
        <RN.ScrollView
            style={[
                className(FlexColumnContainerCN),
                {
                    backgroundColor: '#dedede'
                }
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
                                    className(FlexContainerChildItemFullWidthCN,
                                        AlignCenterContentCN)
                                ]}
                            >Create Recipe</RN.Text>
                        </RN.View>

                        <RN.View
                            style={[
                                className(FlexFluidRowContainerCN)
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
                                    <RN.View
                                        style={[
                                            className(FlexContainerChildItemFullWidthCN)
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

                                    </RN.View>

                                    {
                                        submit_pressed && isEmptyArray(formValidityTree['recipe_photos']) &&
                                        <FormFieldIsRequiredMessage message={'Please upload recipe photos!'}/>
                                    }
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
                                            {
                                                (_ => {
                                                    let photos: Array<Element> = []
                                                    for (let i = 0; i < 5; i++) {
                                                        photos.push(
                                                            <RN.View
                                                                style={[
                                                                    className(FlexContainerChildItemOneThirdWidthCN)
                                                                ]}
                                                                key={makeId(16)}
                                                            >
                                                                <PhotoInput
                                                                    items={{src: '../media/images/image.png'}}
                                                                    photoIndex={i}
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
                                            className(FlexContainerChildItemFullWidthCN)
                                        ]}
                                    >
                                        <Checkbox
                                            label={'Is vegetarian'}
                                            onCheckBoxChange={check => {
                                                checkboxItemValueChanged(recipe, check, 'is_vegetarian',
                                                    1, 0);
                                            }}
                                        />
                                    </RN.View>

                                    {
                                        submit_pressed && !isBoolean(formValidityTree['is_vegan']) &&
                                        <FormFieldIsRequiredMessage/>
                                    }
                                    <BlankSpaceDivider/>

                                    <RN.View
                                        style={[
                                            className(FlexContainerChildItemFullWidthCN)
                                        ]}
                                    >
                                        <Checkbox
                                            label={'Is Vegan'}
                                            onCheckBoxChange={check => {
                                                checkboxItemValueChanged(recipe, check, 'is_vegan',
                                                    1, 0);
                                            }}
                                        />
                                    </RN.View>

                                    {
                                        submit_pressed && isEmptyArray(recipe.ingredients) &&
                                        <FormFieldIsRequiredMessage message={'Please provide ingredients!'}/>
                                    }
                                    <BlankSpaceDivider/>

                                    <RN.Text
                                        style={[
                                            className(FlexContainerChildItemFullWidthCN,
                                                AlignLeftFlexContainerContentCN)
                                        ]}
                                    >Ingredients</RN.Text>

                                    {
                                        !isEmptyArray(recipe.ingredients) &&
                                        <RN.View
                                            style={[
                                                className(FlexContainerChildItemFullWidthCN)
                                            ]}
                                        >
                                            {
                                                recipe.ingredients?.map((item, i) => {
                                                    let ingredient = recipe.ingredients?.[i];
                                                    return (
                                                        <RN.View
                                                            style={[
                                                                className(FlexFluidRowContainerCN)
                                                            ]}
                                                            key={makeId(16)}
                                                        >

                                                            <RN.View
                                                                style={[
                                                                    className(FlexContainerChildItemFullWidthCN)
                                                                ]}
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
                                                                            if (recipe.ingredients) {
                                                                                recipe.ingredients[i] = text;
                                                                            }
                                                                        }
                                                                    }
                                                                />

                                                            </RN.View>

                                                            <RN.View
                                                                style={[
                                                                    className(FlexContainerChildItemFullWidthCN)
                                                                ]}
                                                            >

                                                                <RN.View
                                                                    style={[
                                                                        className(FlexFluidRowContainerCN,
                                                                            AlignLeftFlexContainerContentCN,
                                                                        ),
                                                                        {
                                                                            flexDirection: 'row-reverse'
                                                                        }
                                                                    ]}
                                                                >

                                                                    {
                                                                        (i === (recipe.ingredients.length - 1)) &&
                                                                        <RN.TouchableOpacity
                                                                            activeOpacity={.2}
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
                                                                                className(AlignCenterContentCN),
                                                                            ]}
                                                                        >
                                                                          <RN.Text
                                                                              style={[
                                                                                  {
                                                                                      padding: 5
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
                                                                    }

                                                                    <Spacer/>

                                                                    {
                                                                        (recipe.ingredients.length >= 2) &&
                                                                        <RN.TouchableOpacity
                                                                            activeOpacity={.2}
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
                                                                                className(AlignCenterContentCN)
                                                                            ]}
                                                                        >
                                                                          <RN.Text
                                                                              style={[
                                                                                  {
                                                                                      padding: 5
                                                                                  }]}
                                                                          >
                                                                            <FontAwesomeIcon
                                                                                icon={faMinus}
                                                                                color={'white'}
                                                                                size={30}
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
                                            className(FlexContainerChildItemFullWidthCN,
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
                                                className(FlexContainerChildItemFullWidthCN)
                                            ]}
                                        >

                                            {
                                                recipe.cooking_instructions?.map((item, i) => {
                                                    let cooking_instruction = recipe.cooking_instructions[i];
                                                    console.log('cooking_instruction', cooking_instruction);
                                                    return (
                                                        <RN.View
                                                            style={[
                                                                className(FlexFluidRowContainerCN)
                                                            ]}
                                                            key={makeId(16)}
                                                        >

                                                            <RN.View
                                                                style={[
                                                                    className(FlexContainerChildItemFullWidthCN)
                                                                ]}
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
                                                                            // @ts-ignore
                                                                            recipe.cooking_instructions[i] = text;
                                                                        }
                                                                    }
                                                                />

                                                            </RN.View>

                                                            <RN.View
                                                                style={[
                                                                    className(FlexContainerChildItemFullWidthCN,
                                                                        AlignLeftFlexContainerContentCN),
                                                                    {
                                                                        flexDirection: 'row-reverse'
                                                                    }
                                                                ]}
                                                            >

                                                                {
                                                                    (i === (recipe.cooking_instructions.length - 1)) &&
                                                                    <RN.TouchableOpacity
                                                                        activeOpacity={.2}
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
                                                                            className(AlignCenterContentCN),
                                                                        ]}
                                                                    >
                                                                      <RN.Text
                                                                          style={[
                                                                              {padding: 5}
                                                                          ]}
                                                                      >
                                                                        <FontAwesomeIcon
                                                                            icon={faPlus}
                                                                            color={'white'}
                                                                            size={30}
                                                                        />
                                                                      </RN.Text>
                                                                    </RN.TouchableOpacity>
                                                                }

                                                                <Spacer/>

                                                                {
                                                                    (recipe.cooking_instructions.length >= 2) &&
                                                                    <RN.TouchableOpacity
                                                                        activeOpacity={.2}
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
                                                                            className(AlignCenterContentCN),
                                                                        ]}
                                                                    >
                                                                      <RN.Text
                                                                          style={[
                                                                              {padding: 5}
                                                                          ]}
                                                                      >
                                                                        <FontAwesomeIcon
                                                                            icon={faMinus}
                                                                            color={'white'}
                                                                            size={30}
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
                                                    className(FlexContainerChildItemFullWidthCN,
                                                        AlignLeftFlexContainerContentCN)
                                                ]}
                                            >
                                                Suitable for:
                                            </RN.Text>

                                            <RN.View
                                                style={[
                                                    className(FlexContainerChildItemFullWidthCN)
                                                ]}
                                            >

                                                <RnMultiSelectKaybarax
                                                    style={{zIndex: 100000000}}
                                                    itemsList={
                                                        isEmptyArray(recipe['groups_suitable']) ?
                                                            [...RecipeGroupsSuitable] :
                                                            [...(RecipeGroupsSuitable.filter(item =>
                                                                !recipe['groups_suitable'].includes(item.value)))]
                                                    }
                                                    selectedItems={recipe['groups_suitable']}
                                                    onItemSelected={value => {

                                                        console.log('WAS SELECTED', value);

                                                        isEmptyArray(recipe['groups_suitable']) &&
                                                        (recipe['groups_suitable'] = []);//ensure array
                                                        //if was there, remove it first
                                                        let idx = recipe['groups_suitable'].indexOf(value);
                                                        if (idx != -1) {
                                                            //already the
                                                            return;
                                                        }
                                                        recipe['groups_suitable'].push(value);

                                                    }}
                                                    onItemRemoved={value => {

                                                        isEmptyArray(recipe['groups_suitable']) &&
                                                        (recipe['groups_suitable'] = []);//ensure array
                                                        let idx = recipe['groups_suitable'].indexOf(value);
                                                        (idx != -1) && recipe['groups_suitable'].splice(idx, 1);

                                                    }}
                                                    multiSelectDialogIsOpen={multiSelectDialogIsOpen}
                                                    toggleOpenMultiSelectDialog={(value) => {
                                                        toggleOpenMultiSelectDialog(value);
                                                    }}
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
                                                className(FlexFluidRowContainerCN,
                                                    AlignCenterContentCN)
                                            ]}
                                        >

                                            {
                                                (viewAction === RECIPE_BOX_VIEWS_ACTIONS_ENUM.CREATE_RECIPE) &&
                                                <RN.TouchableOpacity
                                                    activeOpacity={.2}
                                                    onPress={
                                                        _ => {
                                                            Alert.alert('Confirm!',
                                                                'Confirm Save Recipe?',
                                                                [
                                                                    {
                                                                        text: 'Submit',
                                                                        onPress: () => {
                                                                            // submitRecipeClick(recipe, set_press_submit, formValidityTree);
                                                                        }
                                                                    },
                                                                    {
                                                                        text: 'Cancel',
                                                                        onPress: () => {
                                                                            // submitRecipeClick(recipe, set_press_submit, formValidityTree);
                                                                        }
                                                                    },
                                                                ]);
                                                        }
                                                    }
                                                    style={[
                                                        {
                                                            width: '60%',
                                                            backgroundColor: FORESTGREEN_COLOR,
                                                            borderRadius: 10,
                                                        }
                                                    ]}
                                                >
                                                  <RN.Text style={[
                                                      {
                                                          fontWeight: 'bold',
                                                          fontSize: 28,
                                                          color: 'white',
                                                      },
                                                      className(
                                                          AlignCenterContentCN
                                                      )
                                                  ]}>Save Recipe</RN.Text>
                                                </RN.TouchableOpacity>
                                            }

                                            {
                                                (viewAction === RECIPE_BOX_VIEWS_ACTIONS_ENUM.EDIT_RECIPE) &&
                                                <RN.TouchableOpacity
                                                    activeOpacity={.2}
                                                    onPress={
                                                        _ => updateRecipeClick(recipe, set_press_submit, formValidityTree)
                                                    }
                                                    style={[
                                                        {
                                                            width: '60%',
                                                            backgroundColor: FORESTGREEN_COLOR
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
                    (displayFieldExpectationSatisfied('alert', notificationAlert,
                        expectationOfX => isTrue(expectationOfX))) &&
                    <RN.View
                        style={[
                            className(FlexRowContainerCN),
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

        </RN.ScrollView>
    );
}

const CreateEditRecipeFormActivity = WithStoresHoc(CreateEditRecipeForm,
    ['authStore', 'appStores', 'recipeBoxStore']);
export default CreateEditRecipeFormActivity;

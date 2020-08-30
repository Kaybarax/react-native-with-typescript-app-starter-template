//key
//sd - self described
/**
 * @authored by Kaybarax
 * Twitter @_ https://twitter.com/Kaybarax
 * Github @_ https://github.com/Kaybarax
 * LinkedIn @_ https://linkedin.com/in/kaybarax
 */

import {isBoolean, isEmptyArray, isEmptyString, isNullUndefined, isNumberType} from "../../util/util";
import {toJS} from "mobx";
import {Recipe, RecipeImage} from "../../app-management/data-manager/models-manager";

export const isValidRecipeFormData = (data, onUpdate = false, set_press_submit, formValidityTree) => {

    let {recipe, recipePhotos}: { recipe: Recipe, recipePhotos: Array<RecipeImage> } = data;

    let recipeFormKeys: any = [];//clear
    recipeFormKeys = Object.keys(recipe);

    //assume all valid at beginning
    for (let key of recipeFormKeys) {
        formValidityTree['' + key] = true;
    }

    let validForm = true;
    //assume not pressed
    set_press_submit(false);

    //check recipe form validity
    if (
        isEmptyArray(recipe['cooking_instructions'])
        ||
        (!isEmptyArray(recipe['cooking_instructions']) && recipe['cooking_instructions']?.includes(''))
    ) {
        console.log('cooking_instructions')
        formValidityTree['cooking_instructions'] = false;
        console.log('formValidityTree', formValidityTree);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (
        isEmptyArray(recipe['ingredients'])
        ||
        (!isEmptyArray(recipe['ingredients']) && recipe['ingredients']?.includes(''))
    ) {
        console.log('ingredients')
        formValidityTree['ingredients'] = false;
        console.log('formValidityTree', formValidityTree);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (!isEmptyArray(recipe['groups_suitable']) && recipe['groups_suitable']?.includes('')) {
        console.log('ingredients')
        formValidityTree['groups_suitable'] = false;
        console.log('formValidityTree', formValidityTree);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    //recipe photo
    if (
        (
            isEmptyArray(recipePhotos) ||
            (
                !isEmptyArray(recipePhotos) &&
                !isNullUndefined(recipePhotos.find(item =>
                    isEmptyString(item.image_url) && isEmptyString(item.image_file))
                )
            )
        )
    ) {
        console.log('recipePhotos', toJS(recipePhotos))
        formValidityTree['recipePhotos'] = false;
        console.log('formValidityTree', formValidityTree);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (isEmptyString(recipe['date_created'])) {
        console.log('date_created')
        formValidityTree['date_created'] = false;
        console.log('formValidityTree', formValidityTree);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (!isBoolean(recipe['is_vegetarian']) ||
        (recipe['is_vegetarian'] !== 1 && recipe['is_vegetarian'] !== 0)) {
        console.log('is_vegetarian')
        formValidityTree['is_vegetarian'] = false;
        console.log('formValidityTree', formValidityTree);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (!isBoolean(recipe['is_vegan']) ||
        (recipe['is_vegan'] !== 0 && recipe['is_vegan'] !== 1)) {
        console.log('is_vegan')
        formValidityTree['is_vegan'] = false;
        console.log('formValidityTree', formValidityTree);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (isEmptyString(recipe['name'])) {
        console.log('name')
        formValidityTree['name'] = false;
        console.log('formValidityTree', formValidityTree);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (isEmptyString(recipe['status_ref_key_key'])) {
        console.log('status_ref_key_key')
        formValidityTree['status_ref_key_key'] = false;
        console.log('formValidityTree', formValidityTree);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (isEmptyString(recipe['status_ref_key_value'])) {
        console.log('status_ref_key_value')
        formValidityTree['status_ref_key_value'] = false;
        console.log('formValidityTree', formValidityTree);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (!isNumberType(recipe['rating'])) {
        console.log('rating')
        formValidityTree['rating'] = false;
        console.log('formValidityTree', formValidityTree);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    console.log('recipe validForm::', validForm);

    return validForm;

};

export const submitRecipeClick = (formData, set_press_submit, formValidityTree, activity = null) => {
    console.log('submitClick');
    if (!isValidRecipeFormData(formData, false, set_press_submit, formValidityTree)) {
        return;
    }
    saveRecipe(formData, activity);
};

export const updateRecipeClick = (formData, set_press_submit, formValidityTree, activity = null) => {
    console.log('updateClick');
    if (!isValidRecipeFormData(formData, true, set_press_submit, formValidityTree)) {
        return;
    }
    handleRecipeUpdate(formData, activity);
};

export function addIngredient(recipe, activity = null) {
    recipe.ingredients.push('');
    console.log('addIngredient', toJS(recipe));
}

export function removeIngredient(recipe, index, activity = null) {
    recipe.ingredients.splice(index, 1);
}

export function addCookingInstruction(recipe, activity = null) {
    recipe.cooking_instructions.push('')
}

export function removeCookingInstruction(recipe, index, activity = null) {
    recipe.cooking_instructions.splice(index, 1);
}

export function saveRecipe(model, activity) {
    // // console.log('saveRecipe');
    //
    // //save to indexedDb
    // let db = window.db;//get db;
    //
    // // recipe to save
    // let recipe = toJS(model);
    //
    // //get recipe photo file in binary
    // let reader = new FileReader();
    // reader.readAsBinaryString(recipe.dish_image);
    //
    // reader.onload = function (e) {
    //
    //     let blob = e.target.result;
    //     let blobData = {
    //         recipe_id: recipe.id,
    //         data: blob
    //     };
    //
    //     let trans = db.transaction([
    //         APP_INDEXED_DB_DATASTORES.RECIPES,
    //         APP_INDEXED_DB_DATASTORES.RECIPE_DISH_IMAGES
    //     ], 'readwrite');
    //
    //     //complete save recipe photo request
    //     let addPhotoReq = trans
    //         .objectStore(APP_INDEXED_DB_DATASTORES.RECIPE_DISH_IMAGES)
    //         .add(blobData, recipe.id);
    //
    //     //then complete save recipe request
    //     //it will cause confusion cuz files move over time and it's just file information
    //     recipe.dish_image = null;
    //     let addRecipeReq = trans
    //         .objectStore(APP_INDEXED_DB_DATASTORES.RECIPES)
    //         .add(recipe, recipe.id);
    //
    //     addPhotoReq.onerror = function (e) {
    //         console.log('Error storing recipe photo');
    //         console.error(e);
    //     }
    //
    //     addRecipeReq.onerror = function (e) {
    //         console.log('Error storing recipe');
    //         console.error(e);
    //     }
    //
    //     // Wait for the database transaction to complete
    //     trans.oncomplete = function (e) {
    //         console.log('Recipe stored');
    //         notificationCallback('succ', 'Recipe saved! Add Another', activity);
    //         //ready next recipe creation
    //         activity.appStore.selectedRecipe = null;
    //         createRecipe(activity);
    //         //update recipes for user
    //         getAllRecipesForUser(activity, activity.appStore.user.id);
    //         //some time for notification alert
    //         setTimeout(_ => appNavigation.navigateToHome(activity.$router), 1500)
    //     }
    //     trans.onerror = function (e) {
    //         console.log('Save data error code: ' + e.target.errorCode);
    //         notificationCallback('err', 'Failed to save recipe!', activity);
    //     }
    // }

}

export function handleRecipeUpdate(recipe, activity) {
    if ((!isNullUndefined(recipe.dish_image) && !isEmptyString(recipe.dish_image.name))) {
        updateRecipeImage(recipe, activity);
    }
    //and then update recipe
    updateRecipe(recipe, activity);
}

export function updateRecipeImage(recipe, activity) {

    //get recipe photo file in binary
    // let reader = new FileReader();
    // reader.readAsBinaryString(recipe.dish_image);
    //
    // reader.onload = function (e) {
    //
    //     let blob = e.target.result;
    //     let blobData = {
    //         recipe_id: recipe.id,
    //         data: blob
    //     };
    //
    //     //save to indexedDb
    //     let db = window.db;//get db;
    //
    //     let trans = db.transaction([
    //         APP_INDEXED_DB_DATASTORES.RECIPE_DISH_IMAGES
    //     ], 'readwrite');
    //
    //     //complete save recipe photo request
    //     let putPhotoReq = trans
    //         .objectStore(APP_INDEXED_DB_DATASTORES.RECIPE_DISH_IMAGES)
    //         .put(blobData, recipe.id);
    //
    //     putPhotoReq.onerror = function (e) {
    //         console.log('Error updating recipe photo');
    //         console.error(e);
    //     }
    //
    //     // Wait for the database transaction to complete
    //     trans.oncomplete = function (e) {
    //         console.log('Updated recipe photo');
    //         notificationCallback('succ', 'Recipe photo updated', activity);
    //     }
    //     trans.onerror = function (e) {
    //         console.log('Save data error code: ' + e.target.errorCode);
    //         notificationCallback('err', 'Failed to update recipe photo!', activity);
    //     }
    // }

}

export function updateRecipe(recipe, activity) {

    // let recipeItem = toJS(recipe);//because of mobx
    // //save to indexedDb
    // let db = window.db;//get db;
    // let trans = db.transaction([
    //     APP_INDEXED_DB_DATASTORES.RECIPES
    // ], 'readwrite');
    //
    // let putRecipeReq = trans
    //     .objectStore(APP_INDEXED_DB_DATASTORES.RECIPES)
    //     .put(recipeItem, recipe.id);
    //
    // putRecipeReq.onerror = function (e) {
    //     console.log('Error updating recipe');
    //     console.error(e);
    // }
    //
    // trans.oncomplete = function (e) {
    //     console.log('Updated recipe');
    //     notificationCallback('succ', 'Recipe updated', activity);
    //     //complete
    //     activity.appStore.selectedRecipe = null;
    //     createRecipe(activity);
    //     //update recipes for user
    //     // getAllRecipesForUser(activity, activity.appStore.user.id);
    //     activity.appStore.recipes = [];
    //     activity.appStore.userRecipesPhotos = [];
    //     //some time for notification alert
    //     setTimeout(_ => appNavigation.navigateToHome(activity.$router), 2000)
    //     // setTimeout(_ => window.location.reload(), 2000)
    // }
    // trans.onerror = function (e) {
    //     console.log('Save data error code: ' + e.target.errorCode);
    //     notificationCallback('err', 'Failed to update recipe!', activity);
    // }

}

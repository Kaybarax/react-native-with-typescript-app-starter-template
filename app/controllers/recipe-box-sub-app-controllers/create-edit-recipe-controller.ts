//key
//sd - self described

import {isBoolean, isEmptyArray, isEmptyString, isNullUndefined, isStringDatatype} from "../../util/util";
import {toJS} from "mobx";
// import {APP_INDEXED_DB_DATASTORES} from "../app-management/data-manager/indexeddb-manager";
import {toastNotificationCallback} from "../../shared-components-and-modules/notification-center/notifications-controller";
import {createRecipe, getAllRecipesForUser} from "./recipe-box-controller";
import appNavigation from "../../routing-and-navigation/app-navigation";

export const isValidRecipeFormData = (
    model, onUpdate = false,
    set_press_submit, recipeFormValidity
) => {

    let recipeFormKeys: any = [];//clear
    recipeFormKeys = Object.keys(model);
    for (let key of recipeFormKeys) {
        recipeFormValidity['' + key] = true;
    }

    let validForm = true;
    //assume not pressed
    set_press_submit(false);

    if (
        isEmptyArray(model['cooking_instructions'])
        ||
        (!isEmptyArray(model['cooking_instructions']) && model['cooking_instructions'].includes(''))
    ) {
        console.log('cooking_instructions')
        recipeFormValidity.cooking_instructions = false;
        console.log('recipeFormValidity', recipeFormValidity);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (
        isEmptyArray(model['ingredients'])
        ||
        (!isEmptyArray(model['ingredients']) && model['ingredients'].includes(''))
    ) {
        console.log('ingredients')
        recipeFormValidity.ingredients = false;
        console.log('recipeFormValidity', recipeFormValidity);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (onUpdate) {
        if (
            (!isNullUndefined(model['dish_image']) && !isStringDatatype(model['dish_image']['name']))
        ) {
            console.log('dish_image', toJS(model['dish_image']))
            recipeFormValidity.dish_image = false;
            console.log('recipeFormValidity', recipeFormValidity);
            validForm = false;
            set_press_submit(true);
            return validForm;
        }
    } else {
        if (
            isNullUndefined(model['dish_image'])
            ||
            (!isNullUndefined(model['dish_image']) && !isStringDatatype(model['dish_image']['name']))
        ) {
            console.log('dish_image', toJS(model['dish_image']))
            recipeFormValidity.dish_image = false;
            console.log('recipeFormValidity', recipeFormValidity);
            validForm = false;
            set_press_submit(true);
            return validForm;
        }
    }

    if (isEmptyString(model['date_created'])) {
        console.log('date_created')
        recipeFormValidity.date_created = false;
        console.log('recipeFormValidity', recipeFormValidity);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (!isBoolean(model['is_vegetarian'])) {
        console.log('is_vegetarian')
        recipeFormValidity.is_vegetarian = false;
        console.log('recipeFormValidity', recipeFormValidity);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (isEmptyString(model['name'])) {
        console.log('name')
        recipeFormValidity.name = false;
        console.log('recipeFormValidity', recipeFormValidity);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (
        isEmptyString(model['status'])
    ) {
        console.log('status')
        recipeFormValidity.status = false;
        console.log('recipeFormValidity', recipeFormValidity);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    if (isEmptyString(model['user_id'])) {
        console.log('user_id')
        recipeFormValidity.user_id = false;
        console.log('recipeFormValidity', recipeFormValidity);
        validForm = false;
        set_press_submit(true);
        return validForm;
    }

    console.log('validForm::', validForm);

    return validForm;

};

export const submitRecipeClick = (model, set_press_submit,
                                  recipeFormValidity, activity = null) => {
    // console.log('submitClick');
    if (!isValidRecipeFormData(model, false, set_press_submit, recipeFormValidity)) {
        return;
    }
    saveRecipe(model, activity);
};

export const updateRecipeClick = (model, set_press_submit,
                                  recipeFormValidity, activity = null) => {
    // console.log('updateClick');
    if (!isValidRecipeFormData(model, true, set_press_submit, recipeFormValidity)) {
        return;
    }
    handleRecipeUpdate(model, activity);
};

export function addIngredient(recipe, activity = null) {
    recipe.ingredients.push('');
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
    // console.log('saveRecipe');

    //save to indexedDb
    let db = window.db;//get db;

    // recipe to save
    let recipe = toJS(model);

    //get recipe photo file in binary
    let reader = new FileReader();
    reader.readAsBinaryString(recipe.dish_image);

    reader.onload = function (e) {

        let blob = e.target.result;
        let blobData = {
            recipe_id: recipe.id,
            data: blob
        };

        let trans = db.transaction([
            APP_INDEXED_DB_DATASTORES.RECIPES,
            APP_INDEXED_DB_DATASTORES.RECIPE_DISH_IMAGES
        ], 'readwrite');

        //complete save recipe photo request
        let addPhotoReq = trans
            .objectStore(APP_INDEXED_DB_DATASTORES.RECIPE_DISH_IMAGES)
            .add(blobData, recipe.id);

        //then complete save recipe request
        //it will cause confusion cuz files move over time and it's just file information
        recipe.dish_image = null;
        let addRecipeReq = trans
            .objectStore(APP_INDEXED_DB_DATASTORES.RECIPES)
            .add(recipe, recipe.id);

        addPhotoReq.onerror = function (e) {
            console.log('Error storing recipe photo');
            console.error(e);
        }

        addRecipeReq.onerror = function (e) {
            console.log('Error storing recipe');
            console.error(e);
        }

        // Wait for the database transaction to complete
        trans.oncomplete = function (e) {
            console.log('Recipe stored');
            toastNotificationCallback('succ', 'Recipe saved! Add Another', activity);
            //ready next recipe creation
            activity.appStore.selectedRecipe = null;
            createRecipe(activity);
            //update recipes for user
            getAllRecipesForUser(activity, activity.appStore.user.id);
            //some time for notification alert
            setTimeout(_ => appNavigation.navigateToHome(activity.$router), 1500)
        }
        trans.onerror = function (e) {
            console.log('Save data error code: ' + e.target.errorCode);
            toastNotificationCallback('err', 'Failed to save recipe!', activity);
        }
    }

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
    let reader = new FileReader();
    reader.readAsBinaryString(recipe.dish_image);

    reader.onload = function (e) {

        let blob = e.target.result;
        let blobData = {
            recipe_id: recipe.id,
            data: blob
        };

        //save to indexedDb
        let db = window.db;//get db;

        let trans = db.transaction([
            APP_INDEXED_DB_DATASTORES.RECIPE_DISH_IMAGES
        ], 'readwrite');

        //complete save recipe photo request
        let putPhotoReq = trans
            .objectStore(APP_INDEXED_DB_DATASTORES.RECIPE_DISH_IMAGES)
            .put(blobData, recipe.id);

        putPhotoReq.onerror = function (e) {
            console.log('Error updating recipe photo');
            console.error(e);
        }

        // Wait for the database transaction to complete
        trans.oncomplete = function (e) {
            console.log('Updated recipe photo');
            toastNotificationCallback('succ', 'Recipe photo updated', activity);
        }
        trans.onerror = function (e) {
            console.log('Save data error code: ' + e.target.errorCode);
            toastNotificationCallback('err', 'Failed to update recipe photo!', activity);
        }
    }

}

export function updateRecipe(recipe, activity) {

    let recipeItem = toJS(recipe);//because of mobx
    //save to indexedDb
    let db = window.db;//get db;
    let trans = db.transaction([
        APP_INDEXED_DB_DATASTORES.RECIPES
    ], 'readwrite');

    let putRecipeReq = trans
        .objectStore(APP_INDEXED_DB_DATASTORES.RECIPES)
        .put(recipeItem, recipe.id);

    putRecipeReq.onerror = function (e) {
        console.log('Error updating recipe');
        console.error(e);
    }

    trans.oncomplete = function (e) {
        console.log('Updated recipe');
        toastNotificationCallback('succ', 'Recipe updated', activity);
        //complete
        activity.appStore.selectedRecipe = null;
        createRecipe(activity);
        //update recipes for user
        // getAllRecipesForUser(activity, activity.appStore.user.id);
        activity.appStore.recipes = [];
        activity.appStore.userRecipesPhotos = [];
        //some time for notification alert
        setTimeout(_ => appNavigation.navigateToHome(activity.$router), 2000)
        // setTimeout(_ => window.location.reload(), 2000)
    }
    trans.onerror = function (e) {
        console.log('Save data error code: ' + e.target.errorCode);
        toastNotificationCallback('err', 'Failed to update recipe!', activity);
    }

}


/**
 * sd _ Kaybarax
 */
export class CreateEditRecipeController {

    submit_pressed = false;
    set_press_submit = (value) => {
        this.submit_pressed = value
    }

    recipeFormKeys = [];
    recipeFormValidity = {};


}

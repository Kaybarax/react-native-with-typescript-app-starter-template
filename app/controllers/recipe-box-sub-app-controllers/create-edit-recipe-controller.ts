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
import {Recipe, RecipeImage, UserRecipe} from "../../app-management/data-manager/models-manager";
import {showToast} from "../../util/react-native-based-utils";
import {APP_SQLITE_DATABASE} from "../../app-management/data-manager/declarations";
import {notificationCallback} from "../../shared-components-and-modules/notification-center/notifications-controller";
import {appSQLiteDb} from "../../app-management/data-manager/embeddedDb-manager";

/**
 * sd _ Kaybarax
 * @param formData
 * @param onUpdate
 * @param recipeFormValidityTree
 */
export const isValidRecipeFormData = (formData, onUpdate = false, recipeFormValidityTree) => {

    let {recipe, recipePhotos}: { recipe: Recipe, recipePhotos: Array<RecipeImage> } = formData;

    console.log('recipeFormValidityTree at isValidRecipeFormData:', recipeFormValidityTree)

    let validForm = true;

    //check recipe form validity

    if (isEmptyString(recipe['name'])) {
        console.log('name')
        recipeFormValidityTree['name'] = false;
        console.log('RAN recipeFormValidityTree', recipeFormValidityTree);
        validForm = false;
        return validForm;
    }

    if (
        isEmptyArray(recipe['cooking_instructions'])
        ||
        (!isEmptyArray(recipe['cooking_instructions']) && recipe['cooking_instructions']?.includes(''))
    ) {
        console.log('cooking_instructions')
        recipeFormValidityTree['cooking_instructions'] = false;
        console.log('recipeFormValidityTree', recipeFormValidityTree);
        validForm = false;
        return validForm;
    }

    if (
        isEmptyArray(recipe['ingredients'])
        ||
        (!isEmptyArray(recipe['ingredients']) && recipe['ingredients']?.includes(''))
    ) {
        console.log('ingredients')
        recipeFormValidityTree['ingredients'] = false;
        console.log('recipeFormValidityTree', recipeFormValidityTree);
        validForm = false;
        return validForm;
    }

    if (!isEmptyArray(recipe['groups_suitable']) && recipe['groups_suitable']?.includes('')) {
        console.log('ingredients')
        recipeFormValidityTree['groups_suitable'] = false;
        console.log('recipeFormValidityTree', recipeFormValidityTree);
        validForm = false;
        return validForm;
    }

    //recipe photos
    if (
        (
            isEmptyArray(recipePhotos) ||
            (
                !isEmptyArray(recipePhotos) &&
                isNullUndefined(recipePhotos.find(item =>
                    !isEmptyString(item.image_url) || !isEmptyString(item.image_file))
                )
            )
        )
    ) {
        console.log('recipePhotos', toJS(recipePhotos))
        recipeFormValidityTree['recipePhotos'] = false;
        console.log('recipeFormValidityTree', recipeFormValidityTree);
        validForm = false;
        return validForm;
    }

    if (isEmptyString(recipe['date_created'])) {
        console.log('date_created')
        recipeFormValidityTree['date_created'] = false;
        console.log('recipeFormValidityTree', recipeFormValidityTree);
        validForm = false;
        showToast('Date not provided', 'long');
        return validForm;
    }

    if (!isBoolean(recipe['is_vegetarian']) ||
        // @ts-ignore
        (isNumberType(recipe['is_vegetarian']) && (recipe['is_vegetarian'] !== 1 || recipe['is_vegetarian'] !== 0))
    ) {
        console.log('is_vegetarian')
        recipeFormValidityTree['is_vegetarian'] = false;
        console.log('recipeFormValidityTree', recipeFormValidityTree);
        validForm = false;
        return validForm;
    }

    if (!isBoolean(recipe['is_vegan']) ||
        // @ts-ignore
        (isNumberType(recipe['is_vegan']) && (recipe['is_vegan'] !== 1 || recipe['is_vegan'] !== 0))
    ) {
        console.log('is_vegan')
        recipeFormValidityTree['is_vegan'] = false;
        console.log('recipeFormValidityTree', recipeFormValidityTree);
        validForm = false;
        return validForm;
    }

    if (isEmptyString(recipe['status_ref_key_key'])) {
        console.log('status_ref_key_key')
        recipeFormValidityTree['status_ref_key_key'] = false;
        console.log('recipeFormValidityTree', recipeFormValidityTree);
        validForm = false;
        showToast('Status key not provided', 'long');
        return validForm;
    }

    if (isEmptyString(recipe['status_ref_key_value'])) {
        console.log('status_ref_key_value')
        recipeFormValidityTree['status_ref_key_value'] = false;
        console.log('recipeFormValidityTree', recipeFormValidityTree);
        validForm = false;
        showToast('Status value not provided', 'long');
        return validForm;
    }

    if (!isNumberType(recipe['rating'])) {
        console.log('rating')
        recipeFormValidityTree['rating'] = false;
        console.log('recipeFormValidityTree', recipeFormValidityTree);
        validForm = false;
        showToast('Initial rating not provided', 'long');
        return validForm;
    }

    console.log('recipe validForm::', validForm);

    return validForm;

};

export function* submitRecipeClick(formData, notificationAlert, activity = null) {
    console.log('submitRecipeClick');
    let {recipe, recipePhotos} = formData;
    yield saveRecipe(recipe, notificationAlert, activity);
    yield saveRecipePhotos(recipePhotos, notificationAlert, activity);
    yield saveUserRecipe(recipe, notificationAlert, activity);
}

export const updateRecipeClick = (formData, notificationAlert, activity = null) => {
    console.log('updateRecipeClick');
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

export function saveRecipe(recipe: Recipe, notificationAlert, activity = null) {
    console.log('saveRecipe');

    let saved = false;

    //save to sqlitedb

    let db = APP_SQLITE_DATABASE.DB_REFERENCE;
    appSQLiteDb.transactionSuccess = false;

    //put in db
    try {

        appSQLiteDb.addRecipeStmt(db, recipe);
        saved = appSQLiteDb.transactionSuccess;

        notificationCallback(
            'succ',
            'Recipe saved',
            notificationAlert,
        );

    } catch (err) {

        notificationCallback(
            'err',
            'Save recipe failed',
            notificationAlert,
        );

    }

    return saved;

}

export function saveRecipePhotos(recipePhotos: Array<RecipeImage>, notificationAlert, activity = null) {
    console.log('saveRecipePhotos');

    let saved = false;

    //save to sqlitedb

    let db = APP_SQLITE_DATABASE.DB_REFERENCE;
    appSQLiteDb.transactionSuccess = false;

    //put in db
    try {

        for (let item of recipePhotos) {
            appSQLiteDb.addRecipeImageStmt(db, item);
        }

        saved = appSQLiteDb.transactionSuccess;

        notificationCallback(
            'succ',
            'Recipe photos saved',
            notificationAlert,
        );

    } catch (err) {

        notificationCallback(
            'err',
            'Save recipe photos failed',
            notificationAlert,
        );

    }

    return saved;

}

export function saveUserRecipe(recipe: Recipe, userId, notificationAlert, activity = null) {
    console.log('saveRecipePhotos');

    let saved = false;

    //save to sqlitedb

    let db = APP_SQLITE_DATABASE.DB_REFERENCE;
    appSQLiteDb.transactionSuccess = false;

    let userRecipe: UserRecipe = {
        user_id: userId,
        recipe_id: recipe.id
    }

    //put in db
    try {

        appSQLiteDb.addUserRecipeStmt(db, userRecipe);

        saved = appSQLiteDb.transactionSuccess;

        notificationCallback(
            'succ',
            'User recipe saved',
            notificationAlert,
        );

    } catch (err) {

        notificationCallback(
            'err',
            'Save user recipe failed',
            notificationAlert,
        );

    }

    return saved;

}

export function updateRecipe(recipe: Recipe, notificationAlert, activity = null) {
    console.log('saveRecipe');

    let saved = false;

    //save to sqlitedb

    let db = APP_SQLITE_DATABASE.DB_REFERENCE;
    appSQLiteDb.transactionSuccess = false;

    //put in db
    try {

        appSQLiteDb.addRecipeStmt(db, recipe);
        saved = appSQLiteDb.transactionSuccess;

        notificationCallback(
            'succ',
            'Recipe saved',
            notificationAlert,
        );

    } catch (err) {

        notificationCallback(
            'err',
            'Save recipe failed',
            notificationAlert,
        );

    }

    return saved;

}

export function updateRecipePhotos(recipePhotos: Array<RecipeImage>, notificationAlert, activity = null) {
    console.log('saveRecipePhotos');

    let saved = false;

    //save to sqlitedb

    let db = APP_SQLITE_DATABASE.DB_REFERENCE;
    appSQLiteDb.transactionSuccess = false;

    //put in db
    try {

        for (let item of recipePhotos) {
            appSQLiteDb.addRecipeImageStmt(db, item);
        }

        saved = appSQLiteDb.transactionSuccess;

        notificationCallback(
            'succ',
            'Recipe photos saved',
            notificationAlert,
        );

    } catch (err) {

        notificationCallback(
            'err',
            'Save recipe photos failed',
            notificationAlert,
        );

    }

    return saved;

}

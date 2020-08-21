//key
//sd - self described

import {isNullUndefined, objectKeyExists} from "../../util/util";
import {Recipe } from "../../app-management/data-manager/models-manager";
// import {APP_INDEXED_DB_DATASTORES} from "../app-management/data-manager/indexeddb-manager";
import {toastNotificationCallback} from "../../shared-components-and-modules/notification-center/notifications-controller";
import {toJS} from "mobx";

/**
 * sd _ Kaybarax
 * @param key
 * @param model
 * @param expectationOfXFunction
 * @returns {*}
 */
export function displayFieldExpectationSatisfied(key, model, expectationOfXFunction) {
    if (isNullUndefined(model))
        return false;
    if (!objectKeyExists(model, key))
        return false;
    return expectationOfXFunction(model[key]);
}

/**
 * sd _ Kaybarax
 * @param activity
 */
export function createRecipe(activity) {
    let recipe = new Recipe();
    recipe.user_id = activity.appStore.user.id;
    recipe.ingredients[0] = '';//add first initial entry
    recipe.cooking_instructions[0] = '';//add first initial entry
    recipe.status = STATUS_REF_KEY_ACTIVE.VALUE;//set status
    activity.appStore.selectedRecipe = recipe;
}

/**
 * sd _ Kaybarax
 * @param activity
 */
export function toggleDarkMode(activity) {
    activity.appStore.darkMode = !activity.appStore.darkMode;
    activity.$vuetify.theme.dark = activity.appStore.darkMode;
}

/**
 * sd _ Kaybarax
 * @param activity
 * @param userId
 */
export function getAllRecipesForUser(activity, userId) {

    let db = window.db;//get db;
    // Set up an object store and transaction
    let tx = db.transaction([
        APP_INDEXED_DB_DATASTORES.RECIPES,
        APP_INDEXED_DB_DATASTORES.RECIPE_DISH_IMAGES
    ], 'readonly');
    let recipeStore = tx.objectStore(APP_INDEXED_DB_DATASTORES.RECIPES);
    let recipeImagesStore = tx.objectStore(APP_INDEXED_DB_DATASTORES.RECIPE_DISH_IMAGES);

    // Set up a request to get all
    let recipesRequest = recipeStore.getAll();

    // If we get an error
    recipesRequest.onerror = function (event) {
        console.log('error getting recipes ', event.target.errorCode);
        toastNotificationCallback('err', 'Cannot query recipes', activity);
    }

    let myRecipes = [];
    activity.appStores.userRecipesPhotos = [];//clear former

    // onsuccess handler
    recipesRequest.onsuccess = function (event) {
        let recipes = event.target.result;
        // console.log('recipes', recipes);
        let userRecipes = recipes.filter(item => item.user_id === userId && item.status === STATUS_REF_KEY_ACTIVE.VALUE);

        //now get recipe images
        let recipeImagesRequest = recipeImagesStore.getAll();

        recipeImagesRequest.onerror = function (event) {
            console.log('error getting recipe images ', event.target.errorCode);
            toastNotificationCallback('err', 'Cannot query recipe images', activity);
        }

        recipeImagesRequest.onsuccess = function (event) {
            let recipeImages = event.target.result;
            // console.log('recipeImages', recipeImages);
            for (let recipe of userRecipes) {
                let item = {}, item2 = {};
                item.recipe = recipe;
                // item2.recipe = recipe;
                let recipeImage = recipeImages.find(it => it.recipe_id === recipe.id);
                item.dish_image = recipeImage.recipe_id;
                item2.recipe_id = recipeImage.recipe_id;
                item2.dish_image = recipeImage.data;
                myRecipes.push(item);
                activity.appStores.userRecipesPhotos.push(item2);
            }

            // console.log('myRecipes', myRecipes);
            console.log('userRecipesPhotos', toJS(activity.appStores.userRecipesPhotos));

            activity.appStore.recipes = [...myRecipes];

        }

    }

}

/**
 * sd _ Kaybarax
 * @param recipe
 * @param activity
 */
export function deleteRecipe(recipe, activity) {

    let recipeItem = toJS(recipe);//because of mobx proxies
    //save to indexedDb
    let db = window.db;//get db;
    let trans = db.transaction([
        APP_INDEXED_DB_DATASTORES.RECIPES
    ], 'readwrite');

    //to delete, simply update status to deleted, following data
    //retention practices
    recipeItem.status = STATUS_REF_KEY_DELETED.VALUE;

    let putRecipeReq = trans
        .objectStore(APP_INDEXED_DB_DATASTORES.RECIPES)
        .put(recipeItem, recipe.id);

    putRecipeReq.onerror = function (e) {
        console.log('Error updating recipe');
        console.error(e);
    }

    trans.oncomplete = function (e) {
        console.log('Deleted recipe');
        toastNotificationCallback('succ', 'Recipe deleted', activity);
        //complete
        getAllRecipesForUser(activity, activity.appStore.user.id);
        //some time for notification alert
        setTimeout(_ => window.location.reload(), 1500)
    }
    trans.onerror = function (e) {
        console.log('IndexedDb error code: ' + e.target.errorCode);
        toastNotificationCallback('err', 'Failed to delete recipe!', activity);
    }

}
